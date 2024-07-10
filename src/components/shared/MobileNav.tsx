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
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { RxHamburgerMenu } from "react-icons/rx";
import { ModeToggle } from "./ToggleTheme";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between p-3 border-b items-center">
      <h1>MobileNav</h1>
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
              <SheetTitle>Logo</SheetTitle>
              <SheetDescription>
                <div className="flex mt-5 flex-col">
                  {navLinks.map((item) => (
                    <Link
                      key={item.route}
                      className={`${
                        pathName === item.route
                          ? "dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-900 bg-gradient-to-r from-indigo-700 text-white to-indigo-400"
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
