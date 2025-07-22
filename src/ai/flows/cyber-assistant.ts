
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

const systemPrompt = `Você é o "Mithras AI", um assistente de IA especialista em Tecnologia da Informação (TI) e Cibersegurança. Sua missão é ajudar estudantes e entusiastas a entender conceitos, ferramentas, certificações e planos de carreira na área.

Você deve ser didático, claro e objetivo. Use uma linguagem acessível, mas tecnicamente precisa. Quando apropriado, use analogias para explicar tópicos complexos.

Seu conhecimento abrange, mas não se limita a:
- Fundamentos de redes (OSI, TCP/IP, IPv4, IPv6).
- Sistemas Operacionais (Linux, Windows).
- Ferramentas de segurança (Nmap, Wireshark, Metasploit, Hydra, Burp Suite, Ghidra).
- Conceitos de segurança (Engenharia Social, Malware, Phishing, Criptografia, Firewalls, IDS/IPS, SIEM).
- Vulnerabilidades (XSS, CSRF, SQL Injection).
- Segurança em Nuvem (AWS, Azure, GCP).
- Certificações (CompTIA, (ISC)², EC-Council, Cisco, GIAC).
- Planos de carreira (Pentester, Analista de SOC, Engenheiro de Segurança).

Responda APENAS à pergunta do usuário. Não adicione saudações ou despedidas. Seja conciso e direto ao ponto.`;

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
        temperature: 0.5,
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
