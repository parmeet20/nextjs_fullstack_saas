"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { navLinks } from "../../../constants";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="h-screen flex-col w-72 hidden fixed p-5 justify-between shadow-2xl shadow-purple-200/50 lg:flex">
      <div className="flex text-2xl font-semibold">
        <Link href="/">Logo</Link>
      </div>
      <SignedIn>
        <div className="flex flex-col space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.route}
              className={`${
                pathName === item.route
                  ? "dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-900 bg-gradient-to-r from-indigo-500 text-white to-indigo-400"
                  : ""
              } rounded-3xl p-3 flex items-center`}
              href={item.route}
            >
              <img className="mr-3" src={item.icon} alt="N/A" />
              {item.label}
            </Link>
          ))}
        </div>
      </SignedIn>
      <div className="items-center space-x-3">
        <SignedOut>
          <Button asChild size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        <UserButton afterSignOutUrl="/" showName />
        <ModeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
