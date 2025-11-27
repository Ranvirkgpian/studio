"use client";

import { useState, type PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import Link from "next/link";
import { Menu, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainLayout({ children }: PropsWithChildren) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="sticky top-0 z-40 w-full glass-nav shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                RK
              </span>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full hover:bg-muted"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden p-0">
        {children}
      </main>

      <footer className="py-8 md:py-12 border-t bg-muted/30">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-medium">Ranvir Kumar</p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-600 transition-colors hover:scale-110 duration-200">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://x.com/Ranvir_kgpian" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors hover:scale-110 duration-200">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
