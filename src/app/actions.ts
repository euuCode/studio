'use server';

import { askCyberAssistant, CyberAssistantInput, CyberAssistantOutput } from "@/ai/flows/cyber-assistant";

export async function askCyberAssistantAction(input: CyberAssistantInput): Promise<CyberAssistantOutput> {
    return await askCyberAssistant(input);
}
