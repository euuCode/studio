
import { cyberMemory, type CyberEra } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Binary, Bomb, Bug, CloudLightning, BrainCircuit, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const iconMap: { [key: string]: React.ReactNode } = {
  Binary: <Binary className="h-8 w-8 text-primary" />,
  Bomb: <Bomb className="h-8 w-8 text-primary" />,
  Bug: <Bug className="h-8 w-8 text-primary" />,
  CloudLightning: <CloudLightning className="h-8 w-8 text-primary" />,
  BrainCircuit: <BrainCircuit className="h-8 w-8 text-primary" />,
};

const EraCard = ({ era }: { era: CyberEra }) => (
  <Card className="mb-8 overflow-hidden">
    <CardHeader>
      <div className="flex items-center gap-4">
        {iconMap[era.icon]}
        <CardTitle className="font-headline text-2xl md:text-3xl tracking-tight">{era.title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div className="border-t border-border -mx-6">
        {era.events.map((event, index) => (
          <div key={event.id} className="grid md:grid-cols-4 gap-4 border-b border-border p-4 md:p-6 hover:bg-muted/50 transition-colors">
            <div className="md:col-span-1">
              <p className="font-bold text-lg text-primary">{event.year}</p>
              <p className="font-semibold text-foreground/90">{event.event}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground">{event.description}</p>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
               <Button asChild variant="outline" size="sm">
                <Link href={`/cyber-memory/${event.id}`}>
                  Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function CyberMemoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl tracking-tight font-bold mb-4">
          Memória Cibernética
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Uma linha do tempo dos eventos que moldaram o mundo da cibersegurança como o conhecemos hoje.
        </p>
      </section>

      <div>
        {cyberMemory.map((era) => (
          <EraCard key={era.id} era={era} />
        ))}
      </div>
    </div>
  );
}
