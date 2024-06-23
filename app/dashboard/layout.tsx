"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { CircleUser, Package2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    if (pathname == "/dashboard") {
      setActiveButton("OVERVIEW");
    } else if (pathname.includes("profile")) {
      setActiveButton("OVERVIEW");
    } else if (pathname == "/dashboard/task") {
      setActiveButton("TASK");
    }else if (pathname == "/dashboard/module") {
      setActiveButton("MODULE");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b border-gray-900 bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">WiseVault</span>
              </Link>
              <Link
                href="/dashboard"
                className={`text-foreground text-[14px] transition-colors hover:text-foreground ${activeButton === "OVERVIEW" ? "text-white" : "text-gray-500"
                  }`}
              >
                Overview
              </Link>
              <Link 
                href="/dashboard/task"
                className={`text-foreground text-[14px] transition-colors hover:text-foreground ${activeButton === "TASK" ? "text-white" : "text-gray-500"
                  }`}
              >
                Tasks
              </Link>
              <Link 
                href="/dashboard/module"
                className={`text-foreground text-[14px] transition-colors hover:text-foreground ${activeButton === "MODULE" ? "text-white" : "text-gray-500"
                  }`}
              >
                Modules
              </Link>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-7 w-7" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-black border-gray-800"
                align="end"
              >
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="bg-[#151518]">{children}</main>
        </div>
      </body>
    </html>
  );
}
