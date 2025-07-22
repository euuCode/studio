import { Bot, BrainCircuit } from 'lucide-react';
import { LearningPathForm } from '@/components/learning-path-form';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center">
        <div className="inline-block bg-primary text-primary-foreground p-4 rounded-full mb-4">
          <BrainCircuit className="h-12 w-12" />
        </div>
        <h1 className="font-headline text-5xl md:text-7xl tracking-wider mb-4">
          Forge Your Cyber Path
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Tell us your skill level and interests, and our AI will craft a personalized learning roadmap to guide your journey in cybersecurity.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <LearningPathForm />
      </section>
    </div>
  );
}
