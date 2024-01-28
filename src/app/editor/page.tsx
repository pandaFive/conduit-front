"use client";

import { editAction } from "@/utils/actions/editor";
import { useState } from "react";

export default function Page() {
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagNames, setTagNames] = useState("");
  const handleTagList = (e: React.ChangeEvent) => {
    setTagNames((e.target as HTMLInputElement).value);
    setTagList((list) => (list = String(tagNames).split(" ")));
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form action={editAction}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    name="description"
                    required
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    name="body"
                    required
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    name="tagList"
                    value={tagNames}
                    onChange={(e) => handleTagList(e)}
                  />
                  <div className="tag-list">
                    {tagList?.map((tag, index) => (
                      <span key={index} className="tag-default tag-pill">
                        <i className="ion-close-round"></i> {tag}
                      </span>
                    ))}
                  </div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
