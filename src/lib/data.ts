
export type Certification = {
  id: string;
  name: string;
  issuer: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  domain: 'Penetration Testing' | 'Incident Response' | 'Network Security' | 'Cloud Security';
  price: string;
  url: string;
  details: string;
};

export const certifications: Certification[] = [
  { id: 'ceh', name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', description: 'Uma certificação fundamental para aspirantes a pentester, cobrindo conceitos centrais de hacking ético.', level: 'Intermediário', domain: 'Penetration Testing', price: '$950 - $1199', url: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/', details: 'A certificação Certified Ethical Hacker (CEH) é uma credencial reconhecida globalmente que valida suas habilidades em hacking ético. Abrange mais de 20 dos domínios de segurança mais atuais, incluindo levantamento de informações, varredura de redes, enumeração, análise de vulnerabilidades, hacking de sistemas, ameaças de malware, sniffing, engenharia social, negação de serviço, sequestro de sessão, evasão de IDS, firewalls e honeypots, hacking de servidores web, hacking de aplicações web, injeção de SQL, hacking de redes sem fio, hacking de plataformas móveis, hacking de IoT, computação em nuvem e criptografia.' },
  { id: 'oscp', name: 'Offensive Security Certified Professional (OSCP)', issuer: 'Offensive Security', description: 'Uma certificação prática e altamente respeitada que comprova habilidades práticas em testes de invasão.', level: 'Avançado', domain: 'Penetration Testing', price: '$1599', url: 'https://www.offsec.com/courses/pen-200/', details: 'O OSCP é uma certificação prática em testes de invasão. O exame consiste em um teste prático e supervisionado de 24 horas, onde você deve comprometer com sucesso uma série de máquinas-alvo. É conhecido por sua dificuldade e natureza prática, exigindo que você pense como um invasor.' },
  { id: 'gcih', name: 'GIAC Certified Incident Handler (GCIH)', issuer: 'GIAC', description: 'Foca em detectar, responder e resolver incidentes de segurança de computadores.', level: 'Intermediário', domain: 'Incident Response', price: '$2499', url: 'https://www.giac.org/certification/certified-incident-handler-gcih', details: 'A certificação GCIH valida a capacidade de um profissional para detectar, responder e resolver incidentes de segurança de computadores. Os detentores da certificação GCIH possuem o conhecimento e as habilidades necessárias para gerenciar incidentes de segurança, compreendendo técnicas, vetores e ferramentas de ataque comuns, bem como se defender e/ou responder a tais ataques quando ocorrem.' },
  { id: 'cyberops', name: 'Cisco Certified CyberOps Associate', issuer: 'Cisco', description: 'Valida o conhecimento tático e as habilidades diárias que as equipes do Centro de Operações de Segurança (SOC) precisam.', level: 'Iniciante', domain: 'Incident Response', price: '$300', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/cyberops-associate.html', details: 'Esta certificação prepara você para uma carreira em operações de cibersegurança. Como um CyberOps Associate, você saberá como monitorar, detectar e responder a ameaças de cibersegurança. A certificação abrange conceitos de segurança, monitoramento de segurança, análise baseada em host, análise de intrusão de rede e políticas e procedimentos de segurança.' },
  { id: 'security-plus', name: 'CompTIA Security+', issuer: 'CompTIA', description: 'Uma certificação global que valida as habilidades básicas necessárias para executar funções essenciais de segurança.', level: 'Iniciante', domain: 'Network Security', price: '$392', url: 'https://www.comptia.org/certifications/security', details: 'A CompTIA Security+ é uma certificação global que valida as habilidades básicas necessárias para executar as principais funções de segurança e seguir uma carreira em segurança de TI. Ela estabelece o conhecimento central exigido de qualquer função de cibersegurança e fornece um trampolim para empregos de cibersegurança de nível intermediário.' },
  { id: 'cissp', name: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)²', description: 'Um padrão de realização globalmente reconhecido que confirma o conhecimento de um indivíduo no campo da segurança da informação.', level: 'Avançado', domain: 'Network Security', price: '$749', url: 'https://www.isc2.org/Certifications/CISSP', details: 'O CISSP é uma certificação de nível avançado para profissionais de segurança de TI. Demonstra que você tem o conhecimento e a experiência para projetar, desenvolver e gerenciar a postura geral de segurança de uma organização. A certificação abrange oito domínios em segurança de computadores, incluindo segurança e gerenciamento de riscos, segurança de ativos, arquitetura e engenharia de segurança, comunicação и segurança de rede, gerenciamento de identidade e acesso, avaliação e testes de segurança, operações de segurança e segurança de desenvolvimento de software.' },
  { id: 'ccsp', name: 'Certified Cloud Security Professional (CCSP)', issuer: '(ISC)²', description: 'A principal certificação de segurança em nuvem para habilidades técnicas avançadas em segurança de aplicativos e infraestrutura em nuvem.', level: 'Avançado', domain: 'Cloud Security', price: '$599', url: 'https://www.isc2.org/Certifications/CCSP', details: 'O CCSP mostra que você tem as habilidades técnicas avançadas e o conhecimento para projetar, gerenciar e proteger dados, aplicativos e infraestrutura na nuvem usando as melhores práticas, políticas e procedimentos estabelecidos pelos especialistas em segurança em nuvem da (ISC)². Abrange conceitos de nuvem, arquitetura e design, segurança de dados em nuvem, segurança de plataforma e infraestrutura em nuvem, segurança de aplicativos em nuvem e operações de segurança em nuvem.' },
];

export type Resource = {
  id: string;
  title: string;
  type: 'Artigo' | 'Vídeo' | 'Ferramenta';
  level: 'Iniciante' | 'Experiente';
  description: string;
  content: string;
};

export const contentLibrary: Resource[] = [
    {
        id: 'social-engineering',
        title: 'Introdução à Engenharia Social',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Aprenda a arte da manipulação psicológica para obter informações confidenciais e como se proteger.',
        content: `A engenharia social é a prática de manipular pessoas para que elas divulguem informações confidenciais. É uma técnica de ataque que depende mais da interação humana do que de falhas técnicas. O invasor pode se passar por um colega de trabalho, técnico de suporte ou outra figura de autoridade para ganhar a confiança da vítima.

**Técnicas Comuns:**
- **Phishing:** Envio de e-mails fraudulentos que parecem ser de fontes confiáveis para roubar informações.
- **Pretexting:** Criar um cenário falso (pretexto) para enganar a vítima e obter informações.
- **Baiting:** Deixar um dispositivo infectado (como um pendrive) em um local público para que alguém o encontre e o conecte a seu computador.
- **Quid pro quo:** Oferecer algo em troca de informação.

**Como se proteger:**
- Desconfie de solicitações inesperadas de informações pessoais ou financeiras.
- Verifique a identidade da pessoa através de um canal de comunicação diferente.
- Não clique em links ou baixe anexos de e-mails suspeitos.

**Onde aprender mais:**
- **Livro:** "A Arte de Enganar" por Kevin Mitnick.
- **Curso Online:** Cybrary - Social Engineering Fundamentals.
- **Comunidade:** Participe de fóruns de segurança para ver exemplos reais.`
    },
    {
        id: 'linux-distros',
        title: 'Distribuições Linux para Segurança',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Conheça as distribuições Linux mais populares usadas por profissionais de segurança.',
        content: `Uma distribuição Linux (ou "distro") é um sistema operacional feito a partir do kernel do Linux e um conjunto de softwares. Para segurança, algumas distribuições vêm com ferramentas pré-instaladas para pentest, forense e outras tarefas, facilitando o trabalho do profissional.

**Distribuições Populares:**
- **Kali Linux:** A mais famosa, mantida pela Offensive Security. Vem com centenas de ferramentas para testes de invasão e é o padrão da indústria.
- **Parrot OS:** Alternativa ao Kali, focada em pentest, forense, desenvolvimento e privacidade. É conhecida por ser mais leve.
- **BlackArch:** Baseada em Arch Linux, possui um repositório extenso com milhares de ferramentas de segurança, sendo altamente personalizável.

**Por que usar uma distro especializada?**
- **Conveniência:** Todas as ferramentas que você precisa estão pré-instaladas e configuradas.
- **Foco:** O ambiente é otimizado para tarefas de segurança.
- **Comunidade:** Grande apoio da comunidade e vasta documentação.

**Onde aprender mais:**
- **Site Oficial:** Visite os sites oficiais de Kali Linux, Parrot OS e BlackArch.
- **Tutoriais no YouTube:** Procure por "como instalar e usar Kali Linux" para começar.
- **Documentação:** A documentação de cada distro é a melhor fonte de informação.`
    },
    {
        id: 'top-linux-tools',
        title: 'Top Ferramentas Linux para Segurança',
        type: 'Ferramenta',
        level: 'Experiente',
        description: 'Uma visão geral das ferramentas essenciais que todo profissional de segurança deve conhecer no Linux.',
        content: `O Linux é a plataforma de escolha para a maioria das ferramentas de segurança. Conhecer as ferramentas certas pode economizar muito tempo e aumentar sua eficácia.

**Ferramentas Essenciais:**
- **Nmap (Network Mapper):** Ferramenta indispensável para exploração de rede e auditoria de segurança. Permite descobrir hosts, portas abertas, serviços em execução e versões de sistemas operacionais.
- **Metasploit Framework:** Uma plataforma poderosa para desenvolver, testar e executar exploits. É uma ferramenta essencial para qualquer pentester.
- **Wireshark:** Analisador de protocolo de rede que permite capturar e inspecionar o tráfego de uma rede em tempo real. Essencial para análise de tráfego e solução de problemas.
- **John the Ripper:** Uma ferramenta de quebra de senhas rápida e popular. Suporta centenas de tipos de hash e cifras.
- **Aircrack-ng:** Um conjunto de ferramentas para auditoria de redes sem fio. Permite monitorar, atacar, testar e quebrar senhas de redes Wi-Fi.

**Onde aprender mais:**
- **Man pages:** No terminal, digite \`man nmap\` para ler o manual do Nmap.
- **Livros:** "Nmap Network Scanning" pelo autor do Nmap, Gordon Lyon.
- **Plataformas de Treinamento:** Hack The Box, TryHackMe e VulnHub são excelentes para praticar o uso dessas ferramentas em ambientes controlados.`
    },
    {
        id: 'networking-intro',
        title: 'Introdução a Redes de Computadores',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Entenda os conceitos básicos de redes, essenciais para qualquer carreira em cibersegurança.',
        content: `Redes de computadores são a espinha dorsal da internet e de qualquer infraestrutura de TI. Entender como elas funcionam é fundamental para proteger sistemas e dados.

**Conceitos Fundamentais:**
- **Modelo OSI e TCP/IP:** Estruturas que padronizam as funções de um sistema de telecomunicações ou de computação em camadas. O TCP/IP é o modelo prático usado na internet, enquanto o OSI é um modelo de referência mais detalhado.
- **Endereçamento IP (IPv4/IPv6):** Como os dispositivos são identificados unicamente em uma rede.
- **Protocolos:** Regras que governam a comunicação. Essenciais incluem HTTP/HTTPS (web), DNS (resolução de nomes), TCP (comunicação confiável) e UDP (comunicação rápida).
- **Firewalls e Roteadores:** Componentes que controlam o tráfego. Roteadores conectam redes diferentes, enquanto firewalls filtram o tráfego com base em regras de segurança.

**Onde aprender mais:**
- **Cursos:** Professor Messer (YouTube) oferece cursos gratuitos e de alta qualidade para a certificação CompTIA Network+.
- **Livro:** "Redes de Computadores" por Andrew S. Tanenbaum é um clássico acadêmico.
- **Labs:** Crie sua própria rede virtual usando GNS3 ou EVE-NG para praticar a configuração de dispositivos de rede.`
    }
];
