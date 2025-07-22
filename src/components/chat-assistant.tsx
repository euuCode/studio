
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send } from 'lucide-react';
import { askCyberAssistantAction } from '@/app/actions';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const assistantResponse = await askCyberAssistantAction(input);
      const assistantMessage: Message = { role: 'assistant', content: assistantResponse };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching assistant response:', error);
      const errorMessage: Message = { role: 'assistant', content: 'Desculpe, ocorreu um erro ao processar sua solicitação.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        setTimeout(() => {
            const scrollableNode = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if(scrollableNode) {
                 scrollableNode.scrollTop = scrollableNode.scrollHeight;
            }
        }, 100);
    }
  }, [messages]);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50"
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-8 w-8" />
        <span className="sr-only">Abrir chat com o Mithras AI</span>
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2 font-headline tracking-tight">
              <Bot />
              Mithras AI Assistant
            </SheetTitle>
            <SheetDescription>
              Tire suas dúvidas sobre cibersegurança e TI.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1" ref={scrollAreaRef}>
             <div className="p-4 space-y-6">
                {messages.map((message, index) => (
                    <div key={index} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : '')}>
                         {message.role === 'assistant' && (
                            <Avatar className="h-8 w-8">
                               <AvatarFallback><Bot /></AvatarFallback>
                            </Avatar>
                         )}
                         <div className={cn(
                             "max-w-[80%] rounded-lg p-3 text-sm",
                             message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                         )}>
                            <p className="whitespace-pre-wrap">{message.content}</p>
                         </div>
                        {message.role === 'user' && (
                            <Avatar className="h-8 w-8">
                               <AvatarFallback><User /></AvatarFallback>
                            </Avatar>
                         )}
                    </div>
                ))}
                {isLoading && (
                   <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                           <AvatarFallback><Bot /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3 space-y-2 w-full max-w-[80%]">
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/6" />
                        </div>
                    </div>
                )}
             </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t bg-background">
            <form onSubmit={handleSendMessage} className="w-full relative">
              <Input
                placeholder="Digite sua pergunta..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="pr-12"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar</span>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
