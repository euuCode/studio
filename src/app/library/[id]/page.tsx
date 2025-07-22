import { contentLibrary, Resource } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Video, Wrench } from 'lucide-react';

const typeIcons = {
  Artigo: <FileText className="h-8 w-8 text-primary" />,
  Vídeo: <Video className="h-8 w-8 text-primary" />,
  Ferramenta: <Wrench className="h-8 w-8 text-primary" />,
};

export default function ResourceDetailPage({ params }: { params: { id: string } }) {
  const resource = contentLibrary.find((r) => r.id === params.id);

  if (!resource) {
    notFound();
  }
  
  const getLevelVariant = (level: string) => {
    return level === 'Iniciante' ? 'secondary' : 'destructive';
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
             <div className="flex items-center gap-4">
                {typeIcons[resource.type]}
                <CardTitle className="font-headline text-4xl tracking-wider">{resource.title}</CardTitle>
             </div>
            <Badge variant={getLevelVariant(resource.level)} className="text-base py-1 px-3">{resource.level}</Badge>
          </div>
          <CardDescription className="text-lg">{resource.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none text-foreground text-base">
            <pre className="whitespace-pre-wrap bg-transparent p-0 font-body">{resource.content}</pre>
          </div>
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
