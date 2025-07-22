import { certifications, Certification } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, DollarSign, Globe } from 'lucide-react';

export default function CertificationDetailPage({ params }: { params: { id: string } }) {
  const cert = certifications.find((c) => c.id === params.id);

  if (!cert) {
    notFound();
  }
  
  const getLevelVariant = (level: string) => {
    switch(level) {
        case 'Beginner': return 'secondary';
        case 'Intermediate': return 'default';
        case 'Advanced': return 'destructive';
        default: return 'outline';
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <CardTitle className="font-headline text-4xl tracking-wider mb-2">{cert.name}</CardTitle>
              <CardDescription>Issued by {cert.issuer}</CardDescription>
            </div>
            <div className="flex gap-2 flex-wrap items-start">
              <Badge variant={getLevelVariant(cert.level)} className="text-base py-1 px-3">{cert.level}</Badge>
              <Badge variant="outline" className="text-base py-1 px-3">{cert.domain}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground">{cert.description}</p>
          
          <div className="prose prose-invert max-w-none text-foreground text-base">
            <pre className="whitespace-pre-wrap bg-transparent p-0 font-body">{cert.details}</pre>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
             <div className="flex items-center gap-2 text-lg font-semibold">
                <DollarSign className="h-6 w-6 text-primary" />
                <span>{cert.price}</span>
            </div>
             <Button asChild>
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    Official Website <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return certifications.map((cert) => ({
    id: cert.id,
  }));
}
