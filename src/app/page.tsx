import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left order-2 lg:order-1 animate-in slide-in-from-left-4 fade-in duration-700">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Civil Engineering Student & Developer
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">
                  Ranvir Kumar
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl leading-relaxed">
                  Building the future with structural expertise and technological innovation.
                  B.Tech Civil Engineering at <span className="font-semibold text-foreground">IIT Kharagpur</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg hover:shadow-primary/25 transition-all">
                  <Link href="/projects">
                    View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5">
                  <Link href="/contact">
                    Contact Me <Mail className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative flex justify-center order-1 lg:order-2 animate-in slide-in-from-right-4 fade-in duration-700 delay-200">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[36rem] xl:h-[36rem]">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl scale-110 -z-10" />

                <div className="relative h-full w-full rounded-full border-4 border-background shadow-2xl overflow-hidden ring-4 ring-muted/50">
                  <Image
                    src="/Gemini_Generated_Image_4wgkl64wgkl64wgk.png"
                    alt="Ranvir Kumar"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    sizes="(max-width: 639px) 16rem, (max-width: 767px) 20rem, (max-width: 1023px) 24rem, (max-width: 1279px) 30rem, 36rem"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Intro / Stats Section */}
      <section className="w-full py-12 md:py-24 border-t bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
             <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-background shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-xl font-bold">Background</h3>
                <p className="text-muted-foreground">
                  From Patna, Bihar. Currently a 3rd-year undergrad at IIT Kharagpur, residing in J.C. Bose Hall.
                </p>
             </div>

             <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-background shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold">Expertise</h3>
                <p className="text-muted-foreground">
                   Strong foundation in structural analysis, design, and project management.
                </p>
             </div>

             <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-background shadow-soft hover:shadow-medium transition-shadow md:col-span-2 lg:col-span-1">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold">Passion</h3>
                <p className="text-muted-foreground">
                   Eager to solve real-world engineering challenges with dedication and innovation.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
