import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

export default function UserInfo({ name }) {
  const router = useRouter();
  const { toast } = useToast();

  function handleLogout() {
    localStorage.clear();
    toast({
      description: "Berhasil logout",
      className: "rounded-lg border-2 border-emerald-700 p-4",
    });
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }
  return (
    <div className="group w-full flex flex-row items-center bg-emerald-800 p-2 rounded-xl text-white relative hover:font-bold transition-all">
      <div className="flex flex-row flex-grow items-center space-x-2">
        <UserRound
          size={20}
          className="stroke-current group-hover:stroke-2"
          strokeWidth={1}
        />{" "}
        <span className="text-sm">{name}</span>
      </div>
      <div className="absolute right-4 z-10">
        <span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ChevronDown
                size={16}
                className="stroke-current group-hover:stroke-2"
                strokeWidth={1}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px] z-50 mt-2">
              <DropdownMenuItem className="group flex w-full items-center justify-between text-left p-0 text-sm font-base text-neutral-500">
                <Link href="/profile" className="w-full p-0">
                  <Button variant="link">Profile</Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="group flex w-full items-center justify-between text-left p-0 text-sm font-base text-neutral-500">
                <Button variant="link" onClick={handleLogout}>
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </div>
    </div>
  );
}
