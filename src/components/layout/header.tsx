'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';

const pageTitles: { [key: string]: string } = {
  '/': 'Personalized Learning Path',
  '/news': 'Cyber News Feed',
  '/certifications': 'Certification Guide',
  '/library': 'Content Library',
};

export function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || 'Mithras CyberSec';

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-8">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <h1 className="flex-1 text-xl font-semibold tracking-wide font-headline">{title}</h1>
    </header>
  );
}
