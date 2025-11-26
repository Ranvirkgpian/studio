
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trophy, Lightbulb, Car } from "lucide-react";

interface ParticipationItem {
  id: string;
  title: string;
  category: "Sports" | "Quizzes" | "Hackathons";
  description?: string;
  icon: React.ElementType;
}

const participationItems: ParticipationItem[] = [
  {
    id: "1",
    title: "Inter-Hall Cricket Tournament",
    category: "Sports",
    description: "Represented my hall in the annual IIT KGP Inter Hall cricket league.",
    icon: Trophy
  },
  {
    id: "2",
    title: "Intra-Hall Tennis Competition",
    category: "Sports",
    description: "Participated in singles and doubles tennis matches.",
    icon: Trophy 
  },
  {
    id: "3",
    title: "NSO Hockey Player",
    category: "Sports", 
    description: "Member of the NSO Hockey team for two years, representing IIT Kharagpur in various tournaments.",
    icon: Trophy 
  },
  {
    id: "4",
    title: "General Knowledge Quizzes",
    category: "Quizzes",
    description: "Participated in a variety of quiz competitions.",
    icon: Lightbulb
  },
  {
    id: "5",
    title: "Road Safety Hackathon", 
    category: "Hackathons",
    description: "Participated in a Road Safety Hackathon organized by the Indian Government.",
    icon: Car 
  },
];

export default function ParticipationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        My Participations
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {participationItems.map((item) => (
          <Card key={item.id} className="shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <item.icon className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {item.description && (
                <p className="text-muted-foreground">{item.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
