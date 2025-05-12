
import TestimonialCard from '@/components/shared/TestimonialCard';

const testimonials = [
  {
    quote: "AI Ascend transformed our marketing strategy. The Website AI helped us increase conversions by 30%!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
    avatarUrl: "https://picsum.photos/seed/janedoe/100/100",
    avatarFallback: "JD",
    imageHint: "woman professional",
    rating: 5,
  },
  {
    quote: "The SMS AI is a game-changer for our campaigns. Engagement is through the roof, and it's so easy to use.",
    name: "John Smith",
    title: "Marketing Director, Retail King",
    avatarUrl: "https://picsum.photos/seed/johnsmith/100/100",
    avatarFallback: "JS",
    imageHint: "man professional",
    rating: 5,
  },
  {
    quote: "Reputation AI helped us gain valuable insights and improve our customer satisfaction significantly. Highly recommended!",
    name: "Alice Brown",
    title: "Owner, Cozy Cafe",
    avatarUrl: "https://picsum.photos/seed/alicebrown/100/100",
    avatarFallback: "AB",
    imageHint: "woman entrepreneur",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trusted by Businesses <span className="text-primary">Like Yours</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Hear what our satisfied customers have to say about AI Ascend.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarUrl={testimonial.avatarUrl}
              avatarFallback={testimonial.avatarFallback}
              imageHint={testimonial.imageHint}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
