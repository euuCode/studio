
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Certification } from '@/lib/data';
import { Lock, Wifi, Award, FileText } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  'Cibersegurança': <Lock className="h-6 w-6" />,
  'Redes': <Wifi className="h-6 w-6" />,
};

const typeIcons: { [key: string]: React.ReactNode } = {
    'Gratuita': <Award className="h-5 w-5" />,
    'Paga': <FileText className="h-5 w-5" />,
    'ISO': <FileText className="h-5 w-5" />,
}

export function CertificationCard({ certification }: CertificationCardProps) {

  const getLevelVariant = (level: string | undefined) => {
    switch(level) {
        case 'Intermediário': return 'secondary';
        case 'Avançado': return 'destructive';
        default: return 'outline';
    }
  }

  const getTypeVariant = (type: string) => {
    switch(type) {
        case 'Gratuita': return 'default';
        case 'Paga': return 'secondary';
        case 'ISO': return 'outline';
        default: return 'outline';
    }
  }

  return (
    <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-4 gap-4">
          <div className="bg-primary text-primary-foreground p-3 rounded-full">
            {categoryIcons[certification.category]}
          </div>
           <div className="flex flex-col items-end gap-2 text-right">
                <Badge variant={getTypeVariant(certification.type)} className="whitespace-nowrap">{certification.type}</Badge>
                {certification.level && <Badge variant={getLevelVariant(certification.level)}>{certification.level}</Badge>}
           </div>
        </div>
        <CardTitle className="text-xl font-bold">{certification.name}</CardTitle>
        <CardDescription>{certification.institution}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        {certification.focus && <p className="text-sm text-muted-foreground"><strong className="text-foreground/90">Foco:</strong> {certification.focus}</p>}
        {certification.content && <p className="text-sm text-muted-foreground"><strong className="text-foreground/90">Conteúdo:</strong> {certification.content}</p>}
      </CardContent>
      <CardFooter>
        <div className="text-lg font-semibold text-primary">
          {certification.price || certification.observations || 'Padrão da Indústria'}
        </div>
      </CardFooter>
    </Card>
  );
}
