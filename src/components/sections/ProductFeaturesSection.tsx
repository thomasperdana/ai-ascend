
import ProductCard from '@/components/shared/ProductCard';
import { LayoutDashboard, MicVocal, MessageSquareText, ShieldCheck } from 'lucide-react';

const products = [
  {
    icon: LayoutDashboard,
    title: "Website AI",
    description: "Leverage AI to build, optimize, and personalize websites that captivate visitors and drive conversions effortlessly.",
    videoPlaceholderUrl: "https://picsum.photos/seed/websiteai/640/360",
    imageHint: "website interface",
  },
  {
    icon: MicVocal,
    title: "Voice AI",
    description: "Automate customer interactions, generate human-like voiceovers, and create powerful voice applications with our advanced Voice AI.",
    videoPlaceholderUrl: "https://picsum.photos/seed/voiceai/640/360",
    imageHint: "sound waveform",
  },
  {
    icon: MessageSquareText,
    title: "SMS AI",
    description: "Reach your audience effectively with AI-powered SMS marketing. Personalized messages, automated replies, and insightful analytics.",
    videoPlaceholderUrl: "https://picsum.photos/seed/smsai/640/360",
    imageHint: "mobile chat",
  },
  {
    icon: ShieldCheck,
    title: "Reputation AI",
    description: "Monitor, manage, and enhance your brand's online reputation proactively. Turn reviews into revenue with our Reputation AI.",
    videoPlaceholderUrl: "https://picsum.photos/seed/reputationai/640/360",
    imageHint: "customer reviews",
  },
];

export default function ProductFeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Elevate Your Marketing with <span className="text-primary">Intelligent Solutions</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Discover how our AI-powered tools can revolutionize your marketing efforts and drive exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              icon={product.icon}
              title={product.title}
              description={product.description}
              videoPlaceholderUrl={product.videoPlaceholderUrl}
              imageHint={product.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
