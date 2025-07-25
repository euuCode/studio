'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Briefcase, ShieldCheck, LifeBuoy, Puzzle, History } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';

const menuItems = [
  { href: '/', label: 'Planos de Carreira', icon: Briefcase },
  { href: '/certifications', label: 'Certificações', icon: ShieldCheck },
  { href: '/cyber-memory', label: 'Memória Cibernética', icon: History },
  { href: '/library', label: 'Biblioteca', icon: BookOpen },
  { href: '/protection', label: 'Aprenda a se Proteger', icon: LifeBuoy },
  { href: '/quiz', label: 'Quiz Interativo', icon: Puzzle },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => path === '/' ? pathname === path : pathname.startsWith(path);

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="h-16 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="text-primary h-10 w-10" />
          <span className="sr-only">
            Mithras
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.href)}
                  tooltip={item.label}
                  className="justify-start"
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
