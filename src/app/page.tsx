import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Instagram } from 'lucide-react';
import { TwitterIcon } from '@/components/icons/twitter-icon'; // Import TwitterIcon

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ranvir Kumar
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl">
                    B.Tech Civil Engineering, IIT Kharagpur
                  </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                My name is Ranvir Kumar, and I am a third-year undergraduate student in the Department of Civil Engineering, enrolled in the B.Tech program. I am a boarder of Jagdish Chandra Bose Hall of Residence and I am from Patna, Bihar.
                I am a passionate and dedicated civil engineering student with a strong foundation in structural analysis, design, and project management. I am eager to apply my skills and knowledge to solve real-world engineering challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
