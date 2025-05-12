
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, BadgePercent, Box } from "lucide-react";
import Link from "next/link";

const bundle = {
  title: "All-in-One Suite",
  description: "Get full access to Website AI, Voice AI, SMS AI, and Reputation AI in one powerful package.",
  monthlyPrice: 2000,
  annualPriceMonthlyEquivalent: 1600, // (2000 * 12 * 0.8) / 12
  setupFeeWaived: true,
  monthlyDiscount: 0, // No explicit monthly discount, the price is $2000
  annualDiscount: 20, // 20% discount for annual payment
  features: [
    "Includes Website AI",
    "Includes Voice AI",
    "Includes SMS AI",
    "Includes Reputation AI",
    "Priority Support",
  ],
};

export default function BundleOfferSection() {
  return (
    <section id="bundle-offer" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
           <Box className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Maximize Your Growth with the <span className="text-primary">{bundle.title}</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/70">
            {bundle.description} Experience seamless integration and unlock the full potential of AI marketing at an unbeatable value.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl overflow-hidden border-primary border-2">
          <CardHeader className="bg-primary/10 p-6">
            <CardTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
              <Zap className="h-6 w-6" />
              {bundle.title} Package
            </CardTitle>
            <CardDescription className="text-primary/90 pt-1">
              The ultimate AI marketing toolkit for accelerated growth.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">What's Included:</h4>
              <ul className="space-y-2">
                {bundle.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-6 space-y-4">
               <div className="flex justify-between items-baseline">
                 <span className="text-lg font-semibold text-foreground">Monthly Plan:</span>
                 <span className="text-2xl font-bold text-primary">${bundle.monthlyPrice}/month</span>
               </div>
                {bundle.setupFeeWaived && (
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium bg-green-100 px-3 py-1.5 rounded-md">
                    <CheckCircle className="h-4 w-4" />
                    <span>Setup Fee Waived ($250 value)</span>
                    </div>
                )}


              <div className="border-t pt-4 mt-4">
                 <div className="flex justify-between items-baseline mb-2">
                     <span className="text-lg font-semibold text-foreground">Annual Plan (Save {bundle.annualDiscount}%):</span>
                     <span className="text-2xl font-bold text-primary">${bundle.annualPriceMonthlyEquivalent}/month</span>
                 </div>
                 <p className="text-sm text-foreground/70">
                    Billed annually at ${bundle.annualPriceMonthlyEquivalent * 12}. Pay upfront and get a {bundle.annualDiscount}% discount!
                 </p>
                 <div className="flex items-center gap-2 text-sm text-green-600 font-medium bg-green-100 px-3 py-1.5 rounded-md mt-2">
                    <BadgePercent className="h-4 w-4" />
                    <span>Annual Payment Discount Applied</span>
                    </div>
              </div>


            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 p-6">
            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="#cta">Get Started with the All-in-One Suite</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
