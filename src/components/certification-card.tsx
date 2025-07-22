import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Certification } from '@/lib/data';
import Link from 'next/link';

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
    const getLevelVariant = (level: string) => {
        switch(level) {
            case 'Beginner': return 'secondary';
            case 'Intermediate': return 'default';
            case 'Advanced': return 'destructive';
            default: return 'outline';
        }
    }

  return (
    <Link href={`/certifications/${cert.id}`} className="block">
      <Card className="hover:border-primary/50 transition-colors duration-300 h-full">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <CardTitle className="text-xl font-bold">{cert.name}</CardTitle>
              <div className="flex gap-2 flex-wrap">
                  <Badge variant={getLevelVariant(cert.level)}>{cert.level}</Badge>
                  <Badge variant="outline">{cert.domain}</Badge>
              </div>
          </div>
          <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
        </CardHeader>
        <CardContent>
          <CardDescription>{cert.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
