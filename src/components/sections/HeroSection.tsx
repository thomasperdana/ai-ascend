
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/50 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
         <Image
            src="https://picsum.photos/1920/1080?random=1"
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            className="blur-sm"
            data-ai-hint="technology abstract"
          />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Amplify Your Marketing Reach with <span className="text-primary">AI Ascend</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Unlock unparalleled growth with our suite of intelligent SaaS solutions. Website AI, Voice AI, SMS AI, and Reputation AI – all designed to elevate your brand and automate success.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#features">Discover Our AI Solutions</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
            <Link href="#headline-tool">Try AI Headline Tool</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
