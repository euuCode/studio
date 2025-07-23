
import { cyberMemory } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Binary, Bomb, Bug, CloudLightning, BrainCircuit } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Binary: <Binary className="h-10 w-10 text-primary" />,
  Bomb: <Bomb className="h-10 w-10 text-primary" />,
  Bug: <Bug className="h-10 w-10 text-primary" />,
  CloudLightning: <CloudLightning className="h-10 w-10 text-primary" />,
  BrainCircuit: <BrainCircuit className="h-10 w-10 text-primary" />,
};

const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
    ));
};

export default function CyberMemoryDetailPage({ params }: { params: { id: string } }) {
  const event = cyberMemory.flatMap(era => era.events).find((e) => e.id === params.id);
  const era = cyberMemory.find(era => era.events.some(e => e.id === params.id));

  if (!event || !era) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
             <div className="flex items-center gap-4">
                {iconMap[era.icon]}
                <div>
                    <p className="text-lg font-semibold text-primary">{event.year}</p>
                    <CardTitle className="font-headline text-4xl tracking-tight">{event.event}</CardTitle>
                </div>
             </div>
          </div>
          <CardDescription className="text-lg text-muted-foreground">{event.description}</CardDescription>
        </CardHeader>
        <CardContent>
           <Tabs defaultValue="event" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="event">O Evento</TabsTrigger>
              <TabsTrigger value="impact">O Impacto</TabsTrigger>
              <TabsTrigger value="lessons">Lições Aprendidas</TabsTrigger>
            </TabsList>
            <TabsContent value="event" className="mt-6 text-base text-foreground/90 leading-relaxed prose prose-invert max-w-none">
               <div className="whitespace-pre-wrap font-body">{renderContent(event.content.event_detail)}</div>
            </TabsContent>
            <TabsContent value="impact" className="mt-6 text-base text-foreground/90 leading-relaxed prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap font-body">{renderContent(event.content.impact)}</div>
            </TabsContent>
            <TabsContent value="lessons" className="mt-6 text-base text-foreground/90 leading-relaxed prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap font-body">{renderContent(event.content.lessons)}</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return cyberMemory.flatMap(era => era.events).map((event) => ({
    id: event.id,
  }));
}
