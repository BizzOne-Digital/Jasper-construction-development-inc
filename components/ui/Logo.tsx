import Link from "next/link";
export default function Logo() {
  return (
    <Link
      href="/"
      className="logo"
      aria-label="Jasper Construction and Development, home"
    >
      <svg viewBox="0 0 48 64" fill="none" aria-hidden="true">
        <path
          d="M21 8h19M32 8v35c0 10-6 15-14 15-6 0-10-3-12-7M28 8v35c0 7-3 11-8 11-4 0-7-2-8-5"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M17 5h19v39c0 9-5 14-12 14M10 40v13M37 3v43"
          stroke="#B49A64"
          strokeWidth="1.2"
        />
      </svg>
      <span>
        <strong>JASPER</strong>
        <small>CONSTRUCTION & DEVELOPMENT INC.</small>
      </span>
    </Link>
  );
}
