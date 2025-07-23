import { cyberMemory, CyberEra } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Binary, Bomb, Bug, CloudLightning, BrainCircuit } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Binary: <Binary className="h-8 w-8 text-primary" />,
  Bomb: <Bomb className="h-8 w-8 text-primary" />,
  Spider: <Bug className="h-8 w-8 text-primary" />,
  CloudLightning: <CloudLightning className="h-8 w-8 text-primary" />,
  BrainCircuit: <BrainCircuit className="h-8 w-8 text-primary" />,
};

const EraCard = ({ era }: { era: CyberEra }) => (
  <Card className="mb-8">
    <CardHeader>
      <div className="flex items-center gap-4">
        {iconMap[era.icon]}
        <CardTitle className="font-headline text-2xl md:text-3xl tracking-tight">{era.title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ano</TableHead>
            <TableHead>Evento</TableHead>
            <TableHead>Descrição</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {era.events.map((event, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{event.year}</TableCell>
              <TableCell className="font-semibold">{event.event}</TableCell>
              <TableCell>{event.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
