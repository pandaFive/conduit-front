"use client";

import clsx from "clsx";
import { generateNumberArray } from "@/utils/generate-number-array";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pagination({ totalPage }: { totalPage: number }) {
  const array = generateNumberArray(totalPage);
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  return (
    <ul className="pagination">
      {array?.map((num) => (
        <PaginationNumber
          key={num}
          page={num}
          href={`/?page=${num}`}
          isActive={num === currentPage}
        />
      ))}
    </ul>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
}) {
  const className = clsx("page-item", {
    active: isActive,
  });

  return isActive ? (
    <li className={className}>
      <Link href={href} className="page-link">
        {page}
      </Link>
    </li>
  ) : (
    <li className={className}>
      <Link href={href} className="page-link">
        {page}
      </Link>
    </li>
  );
}
