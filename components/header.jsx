"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function HeaderClient() {
  return (
    <header className="fixed top-0 z-50 w-full h-24 border-b backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full px-6 flex justify-between items-center h-full">
        {/* Logo - Hard Left */}
        <Link href="/" className="flex items-cente h-fullr">
          <Image
            src="/logo.png"
            alt="IntelliAi Logo"
            width={120}
            height={40}
            className="h-24 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Buttons - Hard Right */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button className="flex items-center gap-2 bg-white px-5 py-3 rounded-md text-lg shadow-sm hover:bg-gray-100 transition">
                <LayoutDashboard className="h-5 w-5 text-gray-700" />
                <span className="hidden md:block font-medium text-gray-800">
                  Industry Insights
                </span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 bg-white px-5 py-3 rounded-md text-lg shadow-sm hover:bg-gray-100 transition">
                  <StarIcon className="h-5 w-5 text-gray-700" />
                  <span className="hidden md:block font-medium text-gray-800">
                    Growth Tools
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-white-700" />
                    <span className="text-lg font-medium">Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-5 w-5 text-white-700" />
                    <span className="text-lg font-medium">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-white-700" />
                    <span className="text-lg font-medium">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="px-5 py-3 border rounded-md text-lg">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-5 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl px-4",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
