import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
export default function Button({
  href = "/contact#estimate",
  children = "Request an Estimate",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link className="button" href={href}>
      {children}
      <ArrowRight size={17} strokeWidth={1.3} />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowUpRight size={18} strokeWidth={1.3} />
    </Link>
  );
}
