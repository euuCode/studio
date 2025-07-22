import { type GenerateLearningPathOutput } from "@/ai/flows/generate-learning-path";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface LearningPathDisplayProps {
  pathData: GenerateLearningPathOutput;
}

export function LearningPathDisplay({ pathData }: LearningPathDisplayProps) {
  return (
    <Card className="bg-secondary/50">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary text-primary-foreground p-3 rounded-full">
            <GraduationCap className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline text-3xl tracking-wide">Your Personalized Learning Path</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-invert max-w-none text-foreground text-base">
          <pre className="whitespace-pre-wrap bg-transparent p-0 font-body">{pathData.learningPath}</pre>
        </div>
      </CardContent>
    </Card>
  );
}
