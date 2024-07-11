"use client";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { navLinks } from "../../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { RxHamburgerMenu } from "react-icons/rx";
import { ModeToggle } from "./ToggleTheme";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between p-3 border-b items-center">
      <Link href="/">
        <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-300 to-slate-900 dark:from-slate-50 dark:to-slate-400 text-center font-sans font-bold">
          ArtiSpectrum
        </h1>
      </Link>
      <SignedIn>
        <Sheet>
          <SheetTrigger>
            <div className="flex space-x-3 items-center">
              <UserButton afterSignOutUrl="/" />
              <RxHamburgerMenu />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <h1 className="relative z-10 text-lg md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-300 to-slate-900 dark:from-slate-50 dark:to-slate-400 text-center font-sans font-bold">
                  ArtiSpectrum
                </h1>
              </SheetTitle>
              <SheetDescription>
                <div className="flex mt-5 flex-col">
                  {navLinks.map((item) => (
                    <Link
                      key={item.route}
                      className={`${
                        pathName === item.route
                          ? "inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                          : ""
                      } rounded-3xl p-3 flex items-center`}
                      href={item.route}
                    >
                      <img className="mr-3" src={item.icon} alt="N/A" />
                      {item.label}
                    </Link>
                  ))}
                  <ModeToggle />
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </SignedIn>
      <SignedOut>
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </div>
  );
};

export default MobileNav;
