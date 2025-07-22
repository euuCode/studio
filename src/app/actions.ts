'use server';

import { generateLearningPath, GenerateLearningPathInput, GenerateLearningPathOutput } from '@/ai/flows/generate-learning-path';

export type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  data: GenerateLearningPathOutput | null;
};

export async function getLearningPath(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const input: GenerateLearningPathInput = {
    skillLevel: formData.get('skillLevel') as string,
    areaOfInterest: formData.get('areaOfInterest') as string,
  };

  if (!input.skillLevel || !input.areaOfInterest) {
    return {
      status: 'error',
      message: 'Please select both skill level and area of interest.',
      data: null,
    };
  }
  
  try {
    const result = await generateLearningPath(input);
    return {
      status: 'success',
      message: 'Learning path generated successfully!',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Failed to generate learning path. Please try again.',
      data: null,
    };
  }
}
