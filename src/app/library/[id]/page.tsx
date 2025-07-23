import { contentLibrary } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookCopy, Wrench } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const typeIcons: { [key: string]: React.ReactNode } = {
  Artigo: <BookCopy className="h-8 w-8 text-primary" />,
  Ferramenta: <Wrench className="h-8 w-8 text-primary" />,
};

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = contentLibrary.find((r) => r.id === params.id);

  if (!resource) {
    notFound();
  }
  
  const getLevelVariant = (level: string) => {
    switch(level) {
        case 'Iniciante': return 'secondary';
        case 'Intermediário': return 'default';
        case 'Avançado': return 'destructive';
        default: return 'outline';
    }
  }

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
    ));
  };
  
  const renderRecommendations = (content: string) => {
     return content.split('\n').map((line, index) => {
      if (line.startsWith('- **')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-2">
            <strong className="text-primary">{parts[1]}:</strong>
            <span>{parts[2]}</span>
          </p>
        );
      }
      return <p key={index} className="mb-2">{line}</p>;
    });
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
             <div className="flex items-center gap-4">
                {typeIcons[resource.type]}
                <CardTitle className="font-headline text-4xl tracking-tight">{resource.title}</CardTitle>
             </div>
            <Badge variant={getLevelVariant(resource.level)} className="text-base py-1 px-3 whitespace-nowrap">{resource.level}</Badge>
          </div>
          <CardDescription className="text-lg text-muted-foreground">{resource.description}</CardDescription>
        </CardHeader>
        <CardContent>
           <Tabs defaultValue="concepts" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="concepts">Conceitos</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
              <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
            </TabsList>
            <TabsContent value="concepts" className="mt-6 text-base text-foreground/90 leading-relaxed prose prose-invert max-w-none">
               <div className="whitespace-pre-wrap font-body">{renderContent(resource.content.concepts)}</div>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6 text-base text-foreground/90 leading-relaxed prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap font-body">{renderContent(resource.content.advanced)}</div>
            </TabsContent>
            <TabsContent value="recommendations" className="mt-6 text-base text-foreground/90 leading-relaxed prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap font-body">{renderRecommendations(resource.content.recommendations)}</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return contentLibrary.map((resource) => ({
    id: resource.id,
  }));
}
