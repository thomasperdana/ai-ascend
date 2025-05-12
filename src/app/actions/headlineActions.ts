
'use server';

import { generateHeadlineVariants, type GenerateHeadlineVariantsInput, type GenerateHeadlineVariantsOutput } from '@/ai/flows/generate-headline-variants';
import { z } from 'zod';

const HeadlineSchema = z.object({
  productDescription: z.string().min(10, "Product description must be at least 10 characters."),
  targetAudience: z.string().min(5, "Target audience must be at least 5 characters."),
  numberOfVariants: z.coerce.number().min(1).max(10).default(3),
});

interface ActionResult {
  success: boolean;
  data?: GenerateHeadlineVariantsOutput;
  error?: string | { [key: string]: string[] };
}

export async function generateHeadlinesAction(prevState: any, formData: FormData): Promise<ActionResult> {
  const rawFormData = {
    productDescription: formData.get('productDescription'),
    targetAudience: formData.get('targetAudience'),
    numberOfVariants: formData.get('numberOfVariants'),
  };

  const validatedFields = HeadlineSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const input: GenerateHeadlineVariantsInput = validatedFields.data;

  try {
    const result = await generateHeadlineVariants(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating headlines:", error);
    return { success: false, error: "Failed to generate headlines. Please try again." };
  }
}
