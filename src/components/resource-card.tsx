import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Resource } from '@/lib/data';
import { ArrowUpRight, FileText, Wrench, BookCopy } from 'lucide-react';
import Link from 'next/link';

interface ResourceCardProps {
  resource: Resource;
}

const typeIcons: { [key: string]: React.ReactNode } = {
  Artigo: <BookCopy className="h-6 w-6" />,
  Ferramenta: <Wrench className="h-6 w-6" />,
};

export function ResourceCard({ resource }: ResourceCardProps) {

  const getLevelVariant = (level: string) => {
    switch(level) {
        case 'Iniciante': return 'secondary';
        case 'Intermediário': return 'default';
        case 'Avançado': return 'destructive';
        default: return 'outline';
    }
  }

  return (
    <Link href={`/library/${resource.id}`} className="block">
        <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300">
        <CardHeader>
            <div className="flex justify-between items-start mb-4 gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    {typeIcons[resource.type]}
                </div>
                <div className="flex flex-col items-end gap-2">
                    <Badge variant={getLevelVariant(resource.level)}>{resource.level}</Badge>
                </div>
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
