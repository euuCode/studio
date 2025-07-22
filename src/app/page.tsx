import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { careerPaths } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl tracking-wider mb-4">
          Trace Seu Caminho em Cibersegurança
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Explore nossos planos de carreira estruturados, criados por especialistas. Do iniciante ao avançado, encontre o roteiro ideal para sua jornada no universo da segurança digital.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {careerPaths.map((path) => (
            <AccordionItem value={path.id} key={path.id} className="border-border border rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
              <AccordionTrigger className="p-6 text-left hover:no-underline">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <path.icon className="h-12 w-12 text-primary" />
                  <div>
                    <h2 className="font-headline text-2xl tracking-wide">{path.title}</h2>
                    <p className="text-muted-foreground text-sm">{path.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <div className="space-y-6">
                  {path.stages.map((stage) => (
                    <div key={stage.title}>
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        {stage.title} <Badge variant="secondary">{stage.duration}</Badge>
                      </h4>
                      <ul className="space-y-2">
                        {stage.items.map((item) => (
                          <li key={item.title} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                            <div>
                              <strong>{item.title}:</strong>
                              <span className="text-muted-foreground ml-2">{item.description}</span>
                              {item.resourceId && (
                                <Link href={`/library/${item.resourceId}`} className="text-primary hover:underline text-xs ml-2 flex items-center gap-1">
                                  Saber mais <ArrowRight className="h-3 w-3" />
                                </Link>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
