// 'use server';

/**
 * @fileOverview Generates multiple compelling headline variants for A/B testing.
 *
 * - generateHeadlineVariants - A function that generates headline variants.
 * - GenerateHeadlineVariantsInput - The input type for the generateHeadlineVariants function.
 * - GenerateHeadlineVariantsOutput - The return type for the generateHeadlineVariants function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeadlineVariantsInputSchema = z.object({
  productDescription: z
    .string()
    .describe('A detailed description of the product or service.'),
  targetAudience: z
    .string()
    .describe('A description of the target audience for the product.'),
  numberOfVariants: z
    .number()
    .default(3)
    .describe('The number of headline variants to generate.'),
});

export type GenerateHeadlineVariantsInput = z.infer<
  typeof GenerateHeadlineVariantsInputSchema
>;

const GenerateHeadlineVariantsOutputSchema = z.object({
  headlineVariants: z
    .array(z.string())
    .describe('An array of compelling headline variants.'),
});

export type GenerateHeadlineVariantsOutput = z.infer<
  typeof GenerateHeadlineVariantsOutputSchema
>;

export async function generateHeadlineVariants(
  input: GenerateHeadlineVariantsInput
): Promise<GenerateHeadlineVariantsOutput> {
  return generateHeadlineVariantsFlow(input);
}

const generateHeadlineVariantsPrompt = ai.definePrompt({
  name: 'generateHeadlineVariantsPrompt',
  input: {schema: GenerateHeadlineVariantsInputSchema},
  output: {schema: GenerateHeadlineVariantsOutputSchema},
  prompt: `You are an expert copywriter specializing in creating high-converting headlines.

  Generate multiple compelling headline variants for A/B testing based on the following information:

  Product Description: {{{productDescription}}}
  Target Audience: {{{targetAudience}}}
  Number of Variants: {{{numberOfVariants}}}

  Each headline variant should be concise, attention-grabbing, and tailored to the target audience.
  Return the headline variants as an array of strings.
  `,
});

const generateHeadlineVariantsFlow = ai.defineFlow(
  {
    name: 'generateHeadlineVariantsFlow',
    inputSchema: GenerateHeadlineVariantsInputSchema,
    outputSchema: GenerateHeadlineVariantsOutputSchema,
  },
  async input => {
    const {output} = await generateHeadlineVariantsPrompt(input);
    return output!;
  }
);
