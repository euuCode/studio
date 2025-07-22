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
      message: 'Por favor, selecione o nível de habilidade e a área de interesse.',
      data: null,
    };
  }
  
  try {
    const result = await generateLearningPath(input);
    return {
      status: 'success',
      message: 'Plano de ensino gerado com sucesso!',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Falha ao gerar o plano de ensino. Por favor, tente novamente.',
      data: null,
    };
  }
}
