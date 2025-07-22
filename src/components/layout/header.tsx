'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';

const pageTitles: { [key: string]: string } = {
  '/': 'Planos de Carreira',
  '/certifications': 'Guia de Certificações',
  '/library': 'Biblioteca de Conteúdo',
  '/protection': 'Aprenda a se Proteger',
  '/quiz': 'Quiz Interativo',
};

export function Header() {
  const pathname = usePathname();
  
  let title = 'Mithras';
  if (pageTitles[pathname]) {
    title = pageTitles[pathname];
  } else if (pathname.startsWith('/certifications/')) {
    title = 'Detalhes da Certificação';
  } else if (pathname.startsWith('/library/')) {
    title = 'Detalhes do Conteúdo';
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-8">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
        <h1 className="flex-1 text-xl font-semibold tracking-tight font-headline">{title}</h1>
      </div>
    </header>
  );
}
