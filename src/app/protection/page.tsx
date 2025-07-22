import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldQuestion, Fish, KeyRound, MousePointerClick, ShieldCheck, UserCog } from 'lucide-react';

const protectionTopics = [
  {
    icon: <ShieldQuestion className="h-10 w-10 text-primary" />,
    title: 'O que é Cibersegurança?',
    description: 'Pense na segurança da sua casa: você tranca portas e janelas. Cibersegurança é fazer o mesmo, mas no mundo digital: proteger seus dados, dispositivos e contas contra "ladrões" e curiosos.',
  },
  {
    icon: <Fish className="h-10 w-10 text-primary" />,
    title: 'Tipos de Golpes Comuns',
    description: 'Fique atento ao "Phishing" (e-mails falsos pedindo seus dados), golpes do Pix com promessas de dinheiro fácil e promoções que parecem boas demais para ser verdade. Desconfie sempre!',
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />,
    title: 'Como Criar Senhas Seguras',
    description: 'Use senhas longas com letras, números e símbolos. Uma boa tática é criar uma frase e usar as iniciais, como "Meu cachorro Bidu nasceu em 2010!" virando "McBn@2010!". Use um gerenciador de senhas.',
  },
  {
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    title: 'Como Evitar Cliques Perigosos',
    description: 'Antes de clicar, pare e pense. O e-mail é de alguém que você conhece? O link parece estranho? Passe o mouse sobre o link (sem clicar) para ver o endereço real. Na dúvida, não clique!',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Antivírus e Atualizações',
    description: 'Manter seu celular e computador atualizados é como vacinar-se contra doenças digitais. As atualizações corrigem falhas de segurança. Um bom antivírus é a sua defesa em tempo real.',
  },
  {
    icon: <UserCog className="h-10 w-10 text-primary" />,
    title: 'Privacidade nas Redes Sociais',
    description: 'Vá nas configurações de privacidade do Instagram, TikTok e Facebook e restrinja quem pode ver suas postagens e informações. Não aceite amizade de estranhos e pense duas vezes antes de postar algo pessoal.',
  },
];

export default function ProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl tracking-tight font-bold mb-4">
          Guia Rápido de Proteção Digital
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Dicas simples e diretas para você navegar na internet com mais segurança no seu dia a dia.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {protectionTopics.map((topic, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              {topic.icon}
              <CardTitle className="font-headline text-xl tracking-tight">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
