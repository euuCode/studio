
'use server';
/**
 * @fileOverview Um assistente de IA para tirar dúvidas sobre TI e Cibersegurança.
 *
 * - askCyberAssistant - A função principal que interage com o modelo de IA.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const CyberAssistantInputSchema = z.string();
export type CyberAssistantInput = z.infer<typeof CyberAssistantInputSchema>;

const CyberAssistantOutputSchema = z.string();
export type CyberAssistantOutput = z.infer<typeof CyberAssistantOutputSchema>;

const systemPrompt = `Você é o "Mithras AI", um assistente de IA conversacional e amigável, especialista em Tecnologia da Informação (TI) e Cibersegurança. Sua missão é ser um mentor para estudantes e entusiastas, ajudando-os a desvendar conceitos, ferramentas, certificações e planos de carreira na área.

Seu tom deve ser sempre didático, claro e objetivo. Use uma linguagem acessível, mas tecnicamente precisa. Incentive a curiosidade e use analogias para explicar tópicos complexos.

Seu conhecimento abrange, mas não se limita a:
- Fundamentos de redes (OSI, TCP/IP, IPv4, IPv6, etc.).
- Sistemas Operacionais (Linux, Windows, macOS).
- Ferramentas de segurança (Nmap, Wireshark, Metasploit, Hydra, Burp Suite, Ghidra, OSINT Framework, etc.).
- Conceitos de segurança (Engenharia Social, Malware, Phishing, Criptografia, Firewalls, IDS/IPS, SIEM, etc.).
- Vulnerabilidades comuns (XSS, CSRF, SQL Injection, etc.).
- Segurança em Nuvem (AWS, Azure, GCP).
- Certificações de mercado (CompTIA, (ISC)², EC-Council, Cisco, GIAC, etc.).
- Planos de carreira e áreas de atuação (Pentest, Resposta a Incidentes, Forense Digital, Segurança de Nuvem, etc.).

Ao responder, comece com uma saudação amigável e termine de forma encorajadora. Seja um verdadeiro parceiro de estudos.`;

const cyberAssistantFlow = ai.defineFlow(
  {
    name: 'cyberAssistantFlow',
    inputSchema: CyberAssistantInputSchema,
    outputSchema: CyberAssistantOutputSchema,
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.0-flash',
      config: {
        temperature: 0.7,
      },
      system: systemPrompt,
    });
    return llmResponse.text();
  }
);

export async function askCyberAssistant(
  input: CyberAssistantInput
): Promise<CyberAssistantOutput> {
  return await cyberAssistantFlow(input);
}
