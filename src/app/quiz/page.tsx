import QuizClient from './quiz-client';
import { quizTopics } from '@/lib/quiz-data';

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl tracking-tight font-bold mb-4">
          Quiz Interativo
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Teste seus conhecimentos em diferentes áreas da cibersegurança. Escolha um tópico abaixo para começar.
        </p>
      </section>

      <QuizClient topics={quizTopics} />
    </div>
  );
}
