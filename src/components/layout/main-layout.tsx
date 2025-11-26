"use client";

import type { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import Link from "next/link";
import { LayoutDashboard, Linkedin, Instagram, Twitter } from "lucide-react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-auto md:h-16 items-center justify-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
        <Navbar />
      </header>
      <main className="flex-1 overflow-auto p-4 sm:p-6">
        {children}
      </main>
      <footer className="py-6 md:py-8 border-t">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ranvir Kumar. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" passHref target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" passHref target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://x.com/Ranvir_kgpian" passHref target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

