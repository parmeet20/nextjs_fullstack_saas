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
        <Link href="/">
        <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-slate-900 dark:from-slate-50 dark:to-slate-400 text-center font-sans font-bold">
                  ArtiSpectrum
                </h1>
        </Link>
      </div>
      <SignedIn>
        <div className="flex flex-col space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item.route}
              className={`${
                pathName === item.route
                  ? "inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  : ""
              } rounded-3xl p-3 flex hover:bg-slate-100 dark:hover:bg-slate-800  items-center`}
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
