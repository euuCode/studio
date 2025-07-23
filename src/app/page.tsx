import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { careerPaths } from '@/lib/data';
import { CheckCircle2, ArrowRight, BookOpen, Target, Shield, Microscope, Scale, CloudCog, GitBranch, Binary, TestTube2, Files } from 'lucide-react';
import Link from 'next/link';

const iconMap: { [key: string]: React.ElementType } = {
  Target,
  Shield,
  Microscope,
  Scale,
  CloudCog,
  GitBranch,
  Binary,
  TestTube2,
  Files,
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl tracking-tight font-bold mb-4">
          Trace Seu Caminho em Cibersegurança
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Explore nossos planos de carreira estruturados, criados por especialistas. Do iniciante ao avançado, encontre o roteiro ideal para sua jornada no universo da segurança digital.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {careerPaths.map((path) => {
            const IconComponent = iconMap[path.icon];
            return (
              <AccordionItem value={path.id} key={path.id} className="border-border border rounded-lg bg-card/50 hover:bg-card/70 transition-colors">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {IconComponent && <IconComponent className="h-12 w-12 text-primary shrink-0" />}
                    <div>
                      <h2 className="font-headline text-2xl tracking-tight font-semibold">{path.title}</h2>
                      <p className="text-muted-foreground text-sm">{path.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="space-y-8">
                    {path.stages.map((stage) => (
                      <div key={stage.title}>
                        <h3 className="font-headline text-xl font-bold mb-3 flex items-center gap-3">
                          {stage.title} <Badge variant="secondary">{stage.duration}</Badge>
                        </h3>
                        {stage.objective && <p className="text-muted-foreground mb-4 italic">{stage.objective}</p>}
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-lg mb-2 text-primary/90">Tópicos de Estudo:</h4>
                          <ul className="space-y-2">
                            {stage.topics.map((item) => (
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
                        
                        {stage.recommendations && (
                          <div>
                              <h4 className="font-semibold text-lg mb-2 text-primary/90">Recursos Sugeridos:</h4>
                              <ul className="space-y-2">
                                  {stage.recommendations.map((rec) => (
                                  <li key={rec.title} className="flex items-start gap-3">
                                      <BookOpen className="h-5 w-5 text-blue-400 mt-1 shrink-0" />
                                      <div>
                                      <strong>{rec.title}:</strong>
                                      <span className="text-muted-foreground ml-2">{rec.description}</span>
                                      </div>
                                  </li>
                                  ))}
                              </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
}

    