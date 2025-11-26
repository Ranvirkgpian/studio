"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Award,
  Sparkles,
  UsersRound,
  Contact,
  Home,
  GraduationCap,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/participation", label: "Participation", icon: UsersRound },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Contact },
];

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu */}
      <div
        data-testid="mobile-menu"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-full"
            aria-label="Close mobile menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-semibold transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav
        data-testid="desktop-menu"
        className="hidden md:flex md:items-center md:gap-5 lg:gap-6"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}