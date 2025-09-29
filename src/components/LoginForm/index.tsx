import Link from "next/link";

export function LoginForm() {
  return (
    <div className="mt-15 ">
      <h1 className="text-4xl font-bold mb-4 text-center text-teal-400">
        Login
      </h1>
      <form action="" className="flex flex-col max-w-md mx-auto p-4">
        <input
          type="text"
          placeholder="Username"
          className="shadow p-2 rounded-lg mb-4 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="shadow p-2 rounded-lg mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="shadow p-2 rounded-lg mb-4 outline-none"
        />

        <button
          type="submit"
          className="shadow bg-teal-400 text-white p-2 rounded-lg hover:bg-teal-300 transition duration-400 "
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-teal-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
