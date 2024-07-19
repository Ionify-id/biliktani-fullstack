"use client";

import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useToast } from "@/components/ui/use-toast";
import { ChevronDown, UserRound } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

export default function UserInfo({}) {
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState("");

  useLayoutEffect(() => {
    const cookies = new Cookies();
    const nameFromCookies = cookies.get("name") || "";
    setName(nameFromCookies);
  }, []);

  function handleLogout() {
    const cookies = new Cookies();
    cookies.remove("token");
    cookies.remove("name");
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
