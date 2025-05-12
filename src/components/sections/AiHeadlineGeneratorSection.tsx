
"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom"; // useFormStatus is still from react-dom
import { generateHeadlinesAction } from "@/app/actions/headlineActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, AlertCircle } from "lucide-react";
import type { GenerateHeadlineVariantsOutput } from "@/ai/flows/generate-headline-variants";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  success: false,
  data: undefined,
  error: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Headlines
        </>
      )}
    </Button>
  );
}

export default function AiHeadlineGeneratorSection() {
  // Use React.useActionState instead of ReactDOM.useFormState
  const [state, formAction] = useActionState(generateHeadlinesAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [generatedHeadlines, setGeneratedHeadlines] = useState<string[] | null>(null);

  useEffect(() => {
    if (state.success && state.data) {
      setGeneratedHeadlines(state.data.headlineVariants);
      toast({
        title: "Headlines Generated!",
        description: "Your AI-powered headlines are ready.",
      });
      formRef.current?.reset(); // Reset form on success
    } else if (state.error && typeof state.error === 'string') {
      setGeneratedHeadlines(null);
      toast({
        variant: "destructive",
        title: "Error Generating Headlines",
        description: state.error,
      });
    } else if (state.error && typeof state.error === 'object') {
      setGeneratedHeadlines(null);
      // Handle field errors - display first error for simplicity
      const fieldErrors = state.error as Record<string, string[]>;
      const firstErrorKey = Object.keys(fieldErrors)[0];
      const firstErrorMessage = fieldErrors[firstErrorKey]?.[0] || "Invalid input. Please check the form.";
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: firstErrorMessage,
      });
    }
  }, [state, toast]);

  return (
    <section id="headline-tool" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl font-bold text-foreground md:text-4xl">
              Craft Irresistible Headlines, Instantly
            </CardTitle>
            <CardDescription className="mt-2 text-lg text-foreground/70">
              Describe your product and audience, and let our AI generate compelling options perfect for A/B testing.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="productDescription" className="text-lg font-medium">Product Description</Label>
                <Textarea
                  id="productDescription"
                  name="productDescription"
                  placeholder="e.g., An innovative SaaS platform that automates social media marketing..."
                  rows={4}
                  className="mt-2 text-base"
                  required
                />
                 {typeof state.error === 'object' && state.error?.productDescription && (
                  <p className="mt-1 text-sm text-destructive">{state.error.productDescription[0]}</p>
                )}
              </div>
              <div>
                <Label htmlFor="targetAudience" className="text-lg font-medium">Target Audience</Label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  placeholder="e.g., Small business owners, marketing managers, tech enthusiasts"
                  className="mt-2 text-base"
                  required
                />
                {typeof state.error === 'object' && state.error?.targetAudience && (
                  <p className="mt-1 text-sm text-destructive">{state.error.targetAudience[0]}</p>
                )}
              </div>
              <div>
                <Label htmlFor="numberOfVariants" className="text-lg font-medium">Number of Variants (1-10)</Label>
                <Input
                  id="numberOfVariants"
                  name="numberOfVariants"
                  type="number"
                  defaultValue="3"
                  min="1"
                  max="10"
                  className="mt-2 text-base"
                  required
                />
                 {typeof state.error === 'object' && state.error?.numberOfVariants && (
                  <p className="mt-1 text-sm text-destructive">{state.error.numberOfVariants[0]}</p>
                )}
              </div>
              <SubmitButton />
            </form>

            {generatedHeadlines && generatedHeadlines.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Generated Headlines:</h3>
                <ul className="space-y-3">
                  {generatedHeadlines.map((headline, index) => (
                    <li key={index} className="p-4 bg-muted rounded-md shadow-sm text-foreground/90 text-base">
                      {headline}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
