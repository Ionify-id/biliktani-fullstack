import Link from "next/link";
import { Button } from "../ui/button";

export default function LoginButton() {
  return (
    <Link href="/login" className="w-full">
      <Button className="w-full rounded-xl bg-white border border-2 border-emerald-800 text-gray-700 hover:bg-emerald-800 hover:font-bold hover:text-white">
        Login
      </Button>
    </Link>
  );
}
