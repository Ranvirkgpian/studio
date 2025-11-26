
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
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/participation", label: "Participation", icon: UsersRound },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Contact },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-4 py-4 md:flex-nowrap md:items-center md:gap-5 lg:gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex basis-1/4 flex-col items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:flex-row md:basis-auto",
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
  );
}
