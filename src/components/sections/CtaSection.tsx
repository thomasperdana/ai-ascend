
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-primary to-teal-600 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to Ascend Your Business with AI?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl opacity-90">
          Join hundreds of businesses already revolutionizing their marketing with AI Ascend. 
          Choose your plan and unlock the power of AI today. Our innovative solutions are designed for growth, efficiency, and impact.
        </p>
        <div className="mt-10">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-xl transition-transform hover:scale-105 px-10 py-6 text-lg"
          >
            <Link href="#">
              Subscribe Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm opacity-80">
            Need more information? <Link href="#" className="underline hover:opacity-100">Contact Sales</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
