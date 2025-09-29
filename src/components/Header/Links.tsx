import Link from "next/link";

export function Links() {
  return (
    <div className=" space-x-4 justify-center">
      <Link
        href="/about"
        className="text-black font-medium hover:opacity-60 transition duration-300"
      >
        About
      </Link>
      <Link
        href="/services"
        className="text-black font-medium hover:opacity-60 transition duration-300"
      >
        Services
      </Link>
    </div>
  );
}
