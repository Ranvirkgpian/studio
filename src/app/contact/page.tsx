
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
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
    actionText: "Message on WhatsApp",
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
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Get In Touch
      </h1>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-sm">
          <CardHeader className="text-center">
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactDetails.map((detail) => (
              <div
                key={detail.id}
                className="flex items-center p-4 rounded-lg border"
              >
                <detail.icon className="h-6 w-6 mr-4 text-primary" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{detail.label}</h3>
                  <p className="text-muted-foreground">{detail.value}</p>
                </div>
                {detail.href && detail.actionText && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={detail.href} target="_blank" rel="noopener noreferrer">
                      {detail.actionText}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
