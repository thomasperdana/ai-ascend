
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  videoPlaceholderUrl: string;
  imageHint: string;
  setupFee: number;
  monthlySubscription: number;
  annualOffer: string;
}

export default function ProductCard({ 
  icon: Icon, 
  title, 
  description, 
  videoPlaceholderUrl, 
  imageHint,
  setupFee,
  monthlySubscription,
  annualOffer 
}: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="flex flex-row items-start gap-4 p-6 bg-muted/30">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <CardTitle className="text-2xl font-semibold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <CardDescription className="text-base text-foreground/80 mb-4">
            {description}
          </CardDescription>
          <div className="mt-4 pt-4 border-t border-border/50">
            <h4 className="text-md font-semibold text-primary mb-2">Pricing</h4>
            <p className="text-sm text-foreground/80">
              <strong>Setup Fee:</strong> ${setupFee}
            </p>
            <p className="text-sm text-foreground/80">
              <strong>Subscription:</strong> ${monthlySubscription}/month
            </p>
            <p className="text-sm text-foreground/80">
              <strong>Annual Offer:</strong> {annualOffer}
            </p>
          </div>
        </div>
        <div className="mt-6 aspect-video relative rounded-md overflow-hidden group">
          <Image
            src={videoPlaceholderUrl}
            alt={`${title} explainer video placeholder`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="h-16 w-16 text-white/80" />
          </div>
          <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
            Explainer Video
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
