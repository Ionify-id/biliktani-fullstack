import Link from "next/link";
import { Button } from "./ui/button";

export default function RightSidebar() {
  const isLogin = true;
  return (
    <aside className="sticky top-0 flex flex-col border border-l-1 border-gray-300 w-1/5 h-screen p-4">
      <div className="flex flex-col justify-items-center items-center w-full">
        {isLogin && <div>user</div>}
        {!isLogin && (
          <Link href="/login" className="w-full">
            <Button className="w-full rounded-xl bg-green-50 text-gray-700 hover:bg-green-100 hover:font-bold">
              Login
            </Button>
          </Link>
        )}
      </div>
    </aside>
  );
}
