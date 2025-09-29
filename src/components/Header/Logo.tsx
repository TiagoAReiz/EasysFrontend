import Link from "next/link";

export function Logo() {
  return (
    <div className="justify-center w-max">
      <Link href="/">
        <img src="logo.png" alt="Logo" className="h-12 rounded-2xl" />
      </Link>
    </div>
  );
}
