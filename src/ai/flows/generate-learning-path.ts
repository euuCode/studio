'use server';

/**
 * @fileOverview A personalized learning path generator for cybersecurity.
 *
 * - generateLearningPath - A function that generates a personalized learning path.
 * - GenerateLearningPathInput - The input type for the generateLearningPath function.
 * - GenerateLearningPathOutput - The return type for the generateLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLearningPathInputSchema = z.object({
  skillLevel: z
    .string()
    .describe('Your current skill level in cybersecurity (e.g., beginner, intermediate, expert).'),
  areaOfInterest: z
    .string()
    .describe(
      'Your area of interest within cybersecurity (e.g., penetration testing, incident response, network security).' // Shortened for brevity
    ),
});
export type GenerateLearningPathInput = z.infer<typeof GenerateLearningPathInputSchema>;

const GenerateLearningPathOutputSchema = z.object({
  learningPath: z
    .string()
    .describe(
      'A personalized learning path with relevant certifications and resources, tailored to the user\u2019s skill level and area of interest.'
    ),
});
export type GenerateLearningPathOutput = z.infer<typeof GenerateLearningPathOutputSchema>;

export async function generateLearningPath(input: GenerateLearningPathInput): Promise<GenerateLearningPathOutput> {
  return generateLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLearningPathPrompt',
  input: {schema: GenerateLearningPathInputSchema},
  output: {schema: GenerateLearningPathOutputSchema},
  prompt: `You are an AI tool that generates personalized learning paths for cybersecurity professionals.

  Based on the user's current skill level and area of interest, you will generate a learning path with relevant certifications and resources.

  Skill Level: {{{skillLevel}}}
  Area of Interest: {{{areaOfInterest}}}

  Learning Path:`, // Shortened prompt for brevity
});

const generateLearningPathFlow = ai.defineFlow(
  {
    name: 'generateLearningPathFlow',
    inputSchema: GenerateLearningPathInputSchema,
    outputSchema: GenerateLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
