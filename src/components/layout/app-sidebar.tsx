'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Bot, Home, Newspaper, ShieldCheck } from 'lucide-react';
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
  { href: '/', label: 'Learning Path', icon: Bot },
  { href: '/news', label: 'News Feed', icon: Newspaper },
  { href: '/certifications', label: 'Certifications', icon: ShieldCheck },
  { href: '/library', label: 'Content Library', icon: BookOpen },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="h-16 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Logo className="text-primary" />
          <span className="font-headline text-2xl tracking-wider group-data-[collapsible=icon]:hidden">
            Mithras
          </span>
        </div>
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
