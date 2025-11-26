
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
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";
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
    <Menubar className="border-none rounded-none">
      {navItems.map((item) => (
        <MenubarMenu key={item.href}>
          <Link href={item.href} passHref>
            <MenubarTrigger
              className={cn(
                "cursor-pointer",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : ""
              )}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.label}
            </MenubarTrigger>
          </Link>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
