
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
  avatarFallback: string;
  rating?: number;
  imageHint: string;
}

export default function TestimonialCard({ quote, name, title, avatarUrl, avatarFallback, rating = 5, imageHint }: TestimonialCardProps) {
  return (
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardContent className="p-6 md:p-8">
        {rating > 0 && (
          <div className="flex mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
              />
            ))}
          </div>
        )}
        <blockquote className="text-lg font-medium text-foreground leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-6 flex items-center">
          <Avatar className="h-12 w-12 mr-4 border-2 border-primary/50">
            <AvatarImage src={avatarUrl} alt={name} data-ai-hint={imageHint} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
