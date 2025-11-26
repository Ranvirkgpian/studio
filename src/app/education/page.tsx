import { GraduationCap, Building } from "lucide-react";

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  icon: React.ElementType;
}

const educationHistory: EducationItem[] = [
  {
    id: "1",
    institution: "Indian Institute of Technology, Kharagpur",
    degree: "Bachelor of Technology in Civil Engineering",
    duration: "2023 - 2027",
    description: "Currently a third-year undergraduate student focusing on core civil engineering principles and applications.",
    icon: GraduationCap,
  },
  {
    id: "2",
    institution: "Guru Vashistha Vidyayan",
    degree: "CBSE - Class 12th (Senior Secondary)",
    duration: "Completed 2022",
    description: "Completed my senior secondary education with a focus on Physics, Chemistry and mathematics, achieving a strong academic record.",
    icon: Building,
  },
  {
    id: "3",
    institution: "Kendriya Vidyalaya Sangathan",
    degree: "CBSE - Class 10th (Secondary)",
    duration: "Completed 2020",
    description: "Completed my secondary education, laying the foundational knowledge for future studies.",
    icon: Building,
  },
];

export default function EducationPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Education
      </h1>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" />
        {educationHistory.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex items-center w-full mb-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`relative w-1/2 p-4 border rounded-lg shadow-sm bg-card ${
                index % 2 === 0 ? "pr-8" : "pl-8"
              }`}
            >
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"
                style={index % 2 === 0 ? { right: "-0.5rem" } : { left: "-0.5rem" }}
              />
              <div className="flex items-center mb-2">
                <item.icon className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-semibold">{item.institution}</h3>
              </div>
              <p className="text-lg font-medium text-muted-foreground">{item.degree}</p>
              <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
