import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

function BreadCrumb({ className }: { className: string }) {
  const router = useRouter();
  const pathSplitArray = router.asPath.slice(1).split("/");
  let trackingSplitArray = "";
  return (
    <div className={clsx("text-sm breadcrumbs", className)}>
      <ul>
        <li>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Home
          </Link>
        </li>
        {pathSplitArray.map((path, key) => {
          trackingSplitArray = `${trackingSplitArray}/${path}`;
          return (
            <li key={key}>
              <Link
                href={trackingSplitArray}
                className={clsx(
                  "capitalize",
                  key + 1 === pathSplitArray.length && "text-black"
                )}
              >
                {path}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BreadCrumb;
