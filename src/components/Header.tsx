import { getUser } from "@/api/get-user";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  const currentUser = await getUser();
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        {!currentUser ? (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/register">
                Sign up
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/editor">
                <i className="ion-compose"></i>&nbsp;New Article{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/profile/${currentUser.username}`}>
                <Image
                  src="http://i.imgur.com/Qr71crq.jpg"
                  alt="user icon"
                  width={25}
                  height={25}
                  className="user-pic"
                />
                {currentUser.username}
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
