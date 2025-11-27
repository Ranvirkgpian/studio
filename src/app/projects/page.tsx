'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  details?: string[];
  viewUrls?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "3-D School Model using Revit Software",
    description: "Developed a comprehensive 3D architectural model of a school campus utilizing Autodesk Revit. This project involved detailed modeling of structures, interiors, and site layout.",
    imageUrl: "/3D View 8.jpg",
    imageHint: "architecture 3d model",
    details: [
      "Software Used: Autodesk Revit 2022",
      "Key Features: Parametric modeling, detailed component creation, site planning.",
      "Outcome: A realistic and scalable 3D representation of a school facility.",
      "Project Link: https://drive.google.com/drive/folders/1pXUmIyfkK5uGvas19YlcuYeUnoT2Vztp?usp=drive_link"
    ],
    viewUrls: [
      "/3D_School_Model_Details.pdf",
    ],
  },
  {
    id: "2",
    title: "Financial Modelling & Valuation",
    description: "Completed a course on Financial Modelling & Valuation covering Excel tools, P&L creation, DCF modeling, Pivot Tables, and a practical case study on Netflix valuation.",
    imageUrl: "/871358_599e.webp",
    imageHint: "Financial Modelling & Valuation",
    details: [ 
      "Focus Areas: Financial Modelling & Valuation Excel-based financial analysis, P&L creation, DCF modeling, and practical valuation case study (Netflix).",
      "Project Link: https://drive.google.com/drive/folders/1MCOjr7ESOR5_zyATzisMj5Oj61o_D11R?usp=drive_link",
    ],
    viewUrls: [
      "/certificate_TD-RANV-FM-1838.pdf",
    ],
  },
  {
    id: "3",
    title: "Structural Analysis on Forth Bridge",
    description: "I perform structural design and analysis using engineering codes and advanced software, developing accurate models, evaluating loads, and ensuring safe, efficient, and reliable structures through computational tools and modern matrix analysis techniques.",
    imageUrl: "/forth-bridge (1).jpg",
    imageHint: "web design code",
    details: [
      "Technologies: Python, Matrix Structural Analysis, FEM, IS/IRC Codes.",
      "Features: Structural modelling, load analysis, deflection evaluation, code-based design checks, and automated result visualization.",
      "Project Link: https://docs.google.com/presentation/d/1NLbyDhX5awldHWkCaACCqkmDmTobcZbD/edit?usp=drive_link&ouid=105585205526942054103&rtpof=true&sd=true",
    ],
    viewUrls: ["/Group 3.pdf"
      
    ],
  },
];

export default function ProjectsPage() {
  const handleViewClick = React.useCallback((urls?: string[]) => {
    if (!urls || urls.length === 0 || urls[0] === "#") return;
    for (const url of urls) {
      window.open(url, "_blank");
    }
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Project Portfolio
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {project.imageUrl && (
              <div className="relative w-full h-56">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint || "project image"}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <CardDescription className="mb-4">{project.description}</CardDescription>
              {project.details && project.details.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Details:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.details.map((detail, index) => {
                      if (detail.startsWith("Project Link: ")) {
                        const url = detail.substring("Project Link: ".length);
                        return (
                          <li key={index}>
                            Project Link:{" "}
                            <Link
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              Open Project Folder
                            </Link>
                          </li>
                        );
                      }
                      return <li key={index}>{detail}</li>;
                    })}
                  </ul>
                </div>
              )}
              <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewClick(project.viewUrls)}
                  disabled={!project.viewUrls || project.viewUrls.length === 0 || project.viewUrls[0] === "#"}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
