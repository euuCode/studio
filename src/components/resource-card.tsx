import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Resource } from '@/lib/data';
import { ArrowUpRight, FileText, Video, Wrench } from 'lucide-react';
import Link from 'next/link';

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons = {
  Artigo: <FileText className="h-6 w-6" />,
  Vídeo: <Video className="h-6 w-6" />,
  Ferramenta: <Wrench className="h-6 w-6" />,
};

export function ResourceCard({ resource }: ResourceCardProps) {

  const getLevelVariant = (level: string) => {
    return level === 'Iniciante' ? 'secondary' : 'destructive';
  }

  return (
    <Link href={`/library/${resource.id}`} className="block">
        <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300">
        <CardHeader>
            <div className="flex justify-between items-center mb-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    {typeIcons[resource.type]}
                </div>
                <Badge variant={getLevelVariant(resource.level)}>{resource.level}</Badge>
            </div>
            <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <CardDescription>{resource.description}</CardDescription>
        </CardContent>
        <CardFooter>
            <div className="flex items-center text-sm text-primary hover:underline">
                Ver Recurso <ArrowUpRight className="h-4 w-4 ml-1" />
            </div>
        </CardFooter>
        </Card>
    </Link>
  );
}
