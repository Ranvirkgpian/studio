
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, MessageCircle, ExternalLink, Copy } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: React.ElementType;
  actionText?: string;
}

const contactDetails: ContactDetail[] = [
  {
    id: "email",
    label: "Email Address",
    value: "ranvirbusiness32@gmail.com",
    href: "mailto:ranvirbusiness32@gmail.com",
    icon: Mail,
    actionText: "Send Email",
  },
  {
    id: "phone",
    label: "Phone Number",
    value: "+91 9471892601",
    href: "tel:+919471892601",
    icon: Phone,
    actionText: "Call Now",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 9199693802",
    href: "https://wa.me/919199693802", 
    icon: MessageCircle,
    actionText: "Chat",
  },
  {
    id: "location",
    label: "Current Location",
    value: "Kharagpur, West Bengal, India",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-background/50">

      <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 pb-2">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div className="w-full max-w-4xl grid gap-6 md:grid-cols-2 lg:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">

        {/* Contact Form Placeholder or Additional Info could go here in a fuller design.
            For now, we'll make the contact details look premium. */}

        {contactDetails.map((detail) => (
          <Card key={detail.id} className="group overflow-hidden hover:shadow-medium transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <detail.icon className="h-6 w-6" />
              </div>

              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-lg">{detail.label}</h3>
                <p className="text-muted-foreground font-medium break-all sm:break-normal">
                  {detail.value}
                </p>
              </div>

              {detail.href && (
                <div className="mt-4 sm:mt-0 pt-2 sm:pt-0 w-full sm:w-auto">
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors group-hover:border-primary/50">
                    <Link href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      {detail.actionText || "Connect"}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

      </div>

      <div className="mt-16 text-center animate-in fade-in duration-1000 delay-300">
        <p className="text-muted-foreground text-sm">
          Prefer social media? Connect with me on LinkedIn or Twitter.
        </p>
      </div>
    </div>
  );
}
