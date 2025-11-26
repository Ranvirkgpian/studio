
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  type: "Certificate" | "Award" | "Recognition";
  date: string;
  issuer?: string;
  documenturl?: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Course on effective leadership",
    type: "Certificate",
    date: "8th MAY 2025",
    issuer: "HP FOUNDATION & HP LIFE",
    documenturl: "/certificate_(1).pdf",
  },
  {
    id: "2",
    title: "TCS iON Career Edge",
    type: "Certificate",
    date: "15th MAY 2025",
    issuer: "TATA & TCSION",
    documenturl: "/Ranvir_kumar_4804112.pdf",
  },
  {
    id: "3",
    title: "Course on cash flow",
    type: "Certificate",
    date: "15th MAY 2025",
    issuer: "HP FOUNDATION & HP LIFE",
    documenturl: "/CASH_FLOW.pdf",
  },
];

export default function AchievementsPage() {
  const handleViewClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Certificates & Achievements
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription>{achievement.type} - {achievement.issuer}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Date: {achievement.date}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleViewClick(achievement.documenturl)}
                disabled={!achievement.documenturl}
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

