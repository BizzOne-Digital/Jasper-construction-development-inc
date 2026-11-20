import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link
      href="/"
      className="logo"
      aria-label="Jasper Construction and Development, home"
    >
      <Image
        src="/images/jasper/logo.webp"
        alt="Jasper Construction & Development Inc."
        width={1081}
        height={1073}
        priority
      />
    </Link>
  );
}
