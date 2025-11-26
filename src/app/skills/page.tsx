
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const skills = [
  { name: "Team Work", category: "Soft Skills" },
  { name: "Good Communication", category: "Soft Skills" },
  { name: "AutoCAD", category: "Technical Skills" },
  { name: "3D Modelling (Revit)", category: "Technical Skills" },
  { name: "Editing in Canva", category: "Design Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Data Science", category: "Technical Skills" },
  { name: "SQL", category: "Technical Skills" },
  { name: "Abstract Reasoning", category: "Soft Skills" },
  { name: "Analytical Reasoning", category: "Soft Skills" },
  { name: "Quantitative Ability", category: "Soft Skills" },
  { name: "Data Interpretation", category: "Technical Skills" },
  { name: "Verbal Ability", category: "Soft Skills" },
  { name: "Matlab", category: "Technical Skills" },
  { name: "Machine Learning (Fundamentals)", category: "Technical Skills" },
  { name: "Basic knowledge of Python and C++", category: "Technical Skills" },
  { name: "Photoshop", category: "Design Skills" },
];

const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

export default function SkillsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        My Skills
      </h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map(category => (
          <Card key={category} className="shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skills.filter(skill => skill.category === category).map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
