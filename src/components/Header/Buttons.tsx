import Link from "next/link";

export function Buttons() {
  return (
    <div className=" space-x-4 justify-center text-right">
      <Link href="/login">
        <button className="bg-teal-400 text-white px-4 py-2 rounded-2xl hover:bg-teal-300 transition duration-400 ">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-white-400 text-black px-4 py-2 rounded-2xl hover:opacity-60 transition duration-400">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
