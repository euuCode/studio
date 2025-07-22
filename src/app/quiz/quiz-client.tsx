'use client';

import { useState } from 'react';
import type { QuizTopic, QuizQuestion } from '@/lib/quiz-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface QuizClientProps {
  topics: QuizTopic[];
}

export default function QuizClient({ topics }: QuizClientProps) {
  const [selectedTopic, setSelectedTopic] = useState<QuizTopic | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const handleTopicSelect = (topic: QuizTopic) => {
    // Shuffle questions for variety
    const shuffledQuestions = [...topic.questions].sort(() => Math.random() - 0.5);
    setSelectedTopic({ ...topic, questions: shuffledQuestions.slice(0, 10) }); // Take 10 questions
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;

    const currentQuestion = selectedTopic?.questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion?.correctAnswer) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setSelectedTopic(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  if (!selectedTopic) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card
            key={topic.id}
            className="cursor-pointer hover:border-primary transition-all duration-200"
            onClick={() => handleTopicSelect(topic)}
          >
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>Um quiz com 10 perguntas para testar seus conhecimentos.</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  const isQuizFinished = currentQuestionIndex >= selectedTopic.questions.length;

  if (isQuizFinished) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Quiz Finalizado!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-xl">
            Sua pontuação final é: <span className="font-bold text-primary">{score} de {selectedTopic.questions.length}</span>
          </p>
          <div className="w-full bg-muted rounded-full h-4">
              <div className="bg-primary h-4 rounded-full" style={{ width: `${(score / selectedTopic.questions.length) * 100}%` }}></div>
          </div>
          <Button onClick={handleRestart} size="lg">
            <RotateCcw className="mr-2 h-5 w-5" />
            Recomeçar
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = selectedTopic.questions[currentQuestionIndex];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
         <CardTitle className="text-2xl">{selectedTopic.title}</CardTitle>
         <div className="flex justify-between items-center pt-2">
            <CardDescription>
                Pergunta {currentQuestionIndex + 1} de {selectedTopic.questions.length}
            </CardDescription>
            <p className="text-sm font-medium text-primary">Pontuação: {score}</p>
         </div>
         <Progress value={((currentQuestionIndex + 1) / selectedTopic.questions.length) * 100} className="mt-2"/>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-semibold">{currentQuestion.question}</p>
        
        <RadioGroup
          value={selectedAnswer ?? ''}
          onValueChange={setSelectedAnswer}
          disabled={showFeedback}
        >
          {currentQuestion.options.map((option) => (
            <div
              key={option}
              className={cn(
                'flex items-center space-x-3 p-3 rounded-md border transition-all',
                showFeedback && option === currentQuestion.correctAnswer && 'border-green-500 bg-green-500/10',
                showFeedback && option !== currentQuestion.correctAnswer && selectedAnswer === option && 'border-red-500 bg-red-500/10'
              )}
            >
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className="flex-1 cursor-pointer">{option}</Label>
              {showFeedback && option === currentQuestion.correctAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
              {showFeedback && option !== currentQuestion.correctAnswer && selectedAnswer === option && <XCircle className="h-5 w-5 text-red-500" />}
            </div>
          ))}
        </RadioGroup>

        {showFeedback && (
          <div className="p-4 bg-muted rounded-md border">
            <h4 className="font-bold mb-2">Explicação:</h4>
            <p className="text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          {showFeedback ? (
            <Button onClick={handleNextQuestion} size="lg">
              Próxima Pergunta <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button onClick={handleAnswerSubmit} disabled={!selectedAnswer} size="lg">
              Confirmar Resposta
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
