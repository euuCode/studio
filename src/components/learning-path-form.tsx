'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
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
  skillLevel: z.string().min(1, 'Please select your skill level.'),
  areaOfInterest: z.string().min(1, 'Please select your area of interest.'),
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
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-5 w-5" />
          Generate Path
        </>
      )}
    </Button>
  );
}

export function LearningPathForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(getLearningPath, initialState);

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
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <>
      <Card className="border-2 border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="font-headline text-3xl tracking-wide">AI Learning Planner</CardTitle>
          <CardDescription>Select your options below to get a custom learning plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <FormField
                control={form.control}
                name="skillLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Your Skill Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current skill level..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
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
                    <FormLabel className="text-lg">Area of Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="penetration testing">Penetration Testing</SelectItem>
                        <SelectItem value="incident response">Incident Response</SelectItem>
                        <SelectItem value="network security">Network Security</SelectItem>
                        <SelectItem value="cloud security">Cloud Security</SelectItem>
                        <SelectItem value="digital forensics">Digital Forensics</SelectItem>
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
              <CardTitle className="font-headline text-2xl tracking-wide">Generating Your Path...</CardTitle>
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
