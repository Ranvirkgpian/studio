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
                  A passionate and dedicated civil engineering student with a strong foundation in structural analysis, design, and project management. Eager to apply my skills and knowledge to solve real-world challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href="/projects">
                      View Projects <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] mx-auto">
                <Image
                  src="/Full.jpg"
                  alt="Ranvir Kumar"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full shadow-2xl"
                  priority
                  sizes="(max-width: 639px) 16rem, (max-width: 767px) 20rem, (max-width: 1023px) 24rem, (max-width: 1279px) 28rem, 32rem"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
