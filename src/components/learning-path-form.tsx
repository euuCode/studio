'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Bot, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { FormState, getLearningPath } from '@/app/actions';
import { LearningPathDisplay } from '@/components/learning-path-display';

const formSchema = z.object({
  skillLevel: z.string().min(1, 'Por favor, selecione seu nível de habilidade.'),
  areaOfInterest: z.string().min(1, 'Por favor, selecione sua área de interesse.'),
});

const initialState: FormState = {
  status: 'idle',
  message: '',
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full text-lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Gerando...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-5 w-5" />
          Gerar Plano
        </>
      )}
    </Button>
  );
}

export function LearningPathForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(getLearningPath, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillLevel: '',
      areaOfInterest: '',
    },
  });

  useEffect(() => {
    if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: state.message,
      });
    }
  }, [state, toast]);
  
  const handleAction = (payload: FormData) => {
    form.trigger().then((isValid) => {
      if (isValid) {
        formAction(payload);
      }
    });
  };


  return (
    <>
      <Card className="border-2 border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="font-headline text-3xl tracking-wide">Planejador de Ensino IA</CardTitle>
          <CardDescription>Selecione suas opções abaixo para obter um plano de ensino personalizado.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form ref={formRef} action={handleAction} className="space-y-8">
              <FormField
                control={form.control}
                name="skillLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Seu Nível de Habilidade</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu nível de habilidade atual..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Iniciante</SelectItem>
                        <SelectItem value="intermediate">Intermediário</SelectItem>
                        <SelectItem value="expert">Especialista</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="areaOfInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Área de Interesse</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu interesse principal..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="penetration testing">Teste de Invasão</SelectItem>
                        <SelectItem value="incident response">Resposta a Incidentes</SelectItem>
                        <SelectItem value="network security">Segurança de Rede</SelectItem>
                        <SelectItem value="cloud security">Segurança na Nuvem</SelectItem>
                        <SelectItem value="digital forensics">Forense Digital</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton />
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {state.status === 'success' && state.data && (
        <div className="mt-8">
          <LearningPathDisplay pathData={state.data} />
        </div>
      )}

      {state.status === 'loading' && (
         <div className="mt-8">
           <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl tracking-wide">Gerando seu plano...</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-8">
              <Loader2 className="h-12 w-12 animate-spin text-primary"/>
            </CardContent>
           </Card>
         </div>
      )}
    </>
  );
}
