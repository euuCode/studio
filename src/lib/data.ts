import { Shield, Fingerprint, CloudCog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  domain: 'Penetration Testing' | 'Incident Response' | 'Network Security' | 'Cloud Security' | 'Digital Forensics';
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
  { id: 'cissp', name: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)²', description: 'Um padrão de realização globalmente reconhecido que confirma o conhecimento de um indivíduo no campo da segurança da informação.', level: 'Avançado', domain: 'Network Security', price: '$749', url: 'https://www.isc2.org/Certifications/CISSP', details: 'O CISSP é uma certificação de nível avançado para profissionais de segurança de TI. Demonstra que você tem o conhecimento e a experiência para projetar, desenvolver e gerenciar a postura geral de segurança de uma organização. A certificação abrange oito domínios em segurança de computadores, incluindo segurança e gerenciamento de riscos, segurança de ativos, arquitetura e engenharia de segurança, comunicação e segurança de rede, gerenciamento de identidade e acesso, avaliação e testes de segurança, operações de segurança e segurança de desenvolvimento de software.' },
  { id: 'ccsp', name: 'Certified Cloud Security Professional (CCSP)', issuer: '(ISC)²', description: 'A principal certificação de segurança em nuvem para habilidades técnicas avançadas em segurança de aplicativos e infraestrutura em nuvem.', level: 'Avançado', domain: 'Cloud Security', price: '$599', url: 'https://www.isc2.org/Certifications/CCSP', details: 'O CCSP mostra que você tem as habilidades técnicas avançadas e o conhecimento para projetar, gerenciar e proteger dados, aplicativos e infraestrutura na nuvem usando as melhores práticas, políticas e procedimentos estabelecidos pelos especialistas em segurança em nuvem da (ISC)². Abrange conceitos de nuvem, arquitetura e design, segurança de dados em nuvem, segurança de plataforma e infraestrutura em nuvem, segurança de aplicativos em nuvem e operações de segurança em nuvem.' },
];

export type Resource = {
  id: string;
  title: string;
  type: 'Artigo' | 'Vídeo' | 'Ferramenta';
  level: 'Iniciante' | 'Experiente';
  description: string;
  content: {
    concepts: string;
    advanced: string;
    recommendations: string;
  };
};

export const contentLibrary: Resource[] = [
    {
        id: 'social-engineering',
        title: 'Introdução à Engenharia Social',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Aprenda a arte da manipulação psicológica para obter informações confidenciais e como se proteger.',
        content: {
          concepts: `A engenharia social é a prática de manipular pessoas para que elas divulguem informações confidenciais. É uma técnica de ataque que depende mais da interação humana do que de falhas técnicas. O invasor pode se passar por um colega de trabalho, técnico de suporte ou outra figura de autoridade para ganhar a confiança da vítima.\n\nAs técnicas mais comuns incluem Phishing (e-mails fraudulentos), Pretexting (criar um cenário falso), Baiting (deixar um dispositivo infectado como isca) e Quid pro quo (oferecer algo em troca de informação).`,
          advanced: `Em um nível avançado, a engenharia social pode ser combinada com ataques técnicos. Por exemplo, um ataque de 'spear phishing' é um e-mail de phishing altamente direcionado, pesquisado para parecer extremamente convincente para um indivíduo ou organização específica. Outra técnica é o 'vishing' (voice phishing), onde os ataques são realizados por telefone, ou 'smishing' (SMS phishing), via mensagens de texto.\n\nA engenharia social também é um componente chave em ataques de Ameaça Persistente Avançada (APT), onde os invasores buscam acesso de longo prazo a uma rede. O acesso inicial é frequentemente obtido enganando um funcionário para que execute um malware ou revele suas credenciais.`,
          recommendations: `Para aprofundar seus conhecimentos em engenharia social, considere os seguintes recursos:\n- **Livro:** "A Arte de Enganar" por Kevin Mitnick. Leitura fundamental que mostra o poder da engenharia social através de histórias reais.\n- **Curso Online:** Cybrary - Social Engineering Fundamentals. Oferece uma base sólida sobre os conceitos e técnicas.\n- **Comunidade:** Participe de fóruns de segurança, como o Reddit r/cybersecurity, para ver exemplos e discussões sobre ataques reais de engenharia social.`
        }
    },
    {
        id: 'linux-distros',
        title: 'Distribuições Linux para Segurança',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Conheça as distribuições Linux mais populares usadas por profissionais de segurança.',
        content: {
          concepts: `Uma distribuição Linux (ou "distro") é um sistema operacional completo construído sobre o kernel do Linux, acompanhado por um conjunto de softwares e um gerenciador de pacotes. Para cibersegurança, algumas distribuições são especializadas e vêm com centenas de ferramentas pré-instaladas para testes de invasão, forense digital e outras tarefas de segurança.\n\nAs mais populares são Kali Linux, Parrot OS e BlackArch. Usar uma distro especializada economiza tempo de configuração e otimiza o ambiente para tarefas de segurança.`,
          advanced: `Embora Kali e Parrot sejam excelentes, profissionais avançados muitas vezes personalizam suas próprias distribuições. Usar uma base como Arch Linux (como o BlackArch faz) ou Debian permite instalar apenas as ferramentas necessárias, criando um ambiente mais leve e sob medida. Isso também força o profissional a entender profundamente como cada ferramenta funciona e suas dependências.\n\nA customização pode envolver a compilação de ferramentas a partir do código-fonte, a configuração de scripts para automatizar tarefas e a otimização do kernel para casos de uso específicos, como sniffing de pacotes de alto desempenho ou quebra de senhas com GPU.`,
          recommendations: `Para ir além do básico:\n- **Site Oficial:** Visite os sites oficiais de Kali Linux, Parrot OS e BlackArch para explorar a lista completa de ferramentas e a documentação.\n- **Tutoriais no YouTube:** Procure por "como instalar e usar Kali Linux" para começar. Para tópicos avançados, pesquise por "custom Arch Linux for pentesting".\n- **Documentação:** A documentação de cada distro é a melhor fonte de informação. O Arch Wiki, em particular, é um recurso incrível para aprender sobre Linux em profundidade.`
        }
    },
    {
        id: 'top-linux-tools',
        title: 'Top Ferramentas Linux para Segurança',
        type: 'Ferramenta',
        level: 'Experiente',
        description: 'Uma visão geral das ferramentas essenciais que todo profissional de segurança deve conhecer no Linux.',
        content: {
          concepts: `O Linux é a plataforma de escolha para a maioria das ferramentas de segurança devido à sua flexibilidade e natureza de código aberto. Conhecer as ferramentas certas pode economizar muito tempo e aumentar sua eficácia.\n\nFerramentas essenciais incluem Nmap (para escaneamento de rede), Metasploit Framework (para exploração de vulnerabilidades), Wireshark (para análise de pacotes de rede), John the Ripper (para quebra de senhas) e Aircrack-ng (para auditoria de redes sem fio).`,
          advanced: `Além das ferramentas clássicas, o cenário está sempre evoluindo. Ferramentas avançadas que merecem atenção incluem:\n- **Ghidra:** Um framework de engenharia reversa de software desenvolvido pela NSA, alternativa ao IDA Pro.\n- **BloodHound:** Usa a teoria dos grafos para revelar relacionamentos ocultos e muitas vezes não intencionais em um ambiente Active Directory. Essencial para pentests internos.\n- **OSINT Framework:** Não é uma única ferramenta, mas uma coleção de ferramentas para a coleta de inteligência de fontes abertas (Open Source Intelligence), crucial na fase de reconhecimento.\n- **Nuclei:** Um scanner de vulnerabilidades rápido e baseado em templates, excelente para verificações personalizadas e em larga escala.`,
          recommendations: `Para dominar essas ferramentas:\n- **Man pages:** No terminal, digite \`man nmap\` para ler o manual do Nmap. Faça isso para cada ferramenta.\n- **Livros:** "Nmap Network Scanning" pelo autor do Nmap, Gordon Lyon, é a bíblia sobre o assunto.\n- **Plataformas de Treinamento:** Hack The Box, TryHackMe e VulnHub são excelentes para praticar o uso dessas ferramentas em ambientes controlados e realistas.`
        }
    },
    {
      id: 'metasploit-intro',
      title: 'Introdução ao Metasploit',
      type: 'Ferramenta',
      level: 'Experiente',
      description: 'Uma visão geral do Metasploit Framework, a ferramenta mais popular para pentesting.',
      content: {
          concepts: `O Metasploit Framework é um projeto de código aberto que fornece uma coleção massiva de exploits, payloads e ferramentas auxiliares para testes de invasão. É a ferramenta padrão para muitos profissionais de segurança. A interface principal, 'msfconsole', permite buscar por vulnerabilidades, configurar e lançar ataques contra sistemas-alvo.\n\nOs componentes chave são: Exploits (o código que ataca uma vulnerabilidade), Payloads (o código que executa no alvo após o sucesso do exploit, como obter um shell) e Módulos Auxiliares (para tarefas como scanning e reconhecimento).`,
          advanced: `Dominar o Metasploit vai além de usar exploits existentes. Usuários avançados aprendem a desenvolver seus próprios módulos de exploit em Ruby, a linguagem na qual o Metasploit é escrito. Isso permite explorar vulnerabilidades de dia zero (zero-day) ou vulnerabilidades para as quais não existe um módulo público.\n\nOutro conceito avançado é a pós-exploração com o payload Meterpreter. O Meterpreter possui comandos para pivotar (usar uma máquina comprometida para atacar outras na mesma rede), escalonamento de privilégios, extração de hashes de senha, registro de teclas digitadas (keylogging) e muito mais.`,
          recommendations: `Para se tornar um especialista em Metasploit:\n- **Curso:** "Metasploit Unleashed" é um curso online gratuito mantido pela Offensive Security, os criadores do Kali Linux.\n- **Livro:** "Metasploit: The Penetration Tester's Guide" por David Kennedy et al., embora um pouco antigo, ainda é uma referência fantástica.\n- **Labs:** Pratique no Metasploitable 2 ou 3, máquinas virtuais intencionalmente vulneráveis projetadas para praticar com o Metasploit.`
      }
    },
    {
      id: 'hydra-intro',
      title: 'Introdução ao Hydra',
      type: 'Ferramenta',
      level: 'Experiente',
      description: 'Aprenda a usar o Hydra, uma ferramenta poderosa para ataques de força bruta online.',
      content: {
          concepts: `O Hydra é um cracker de senhas de login de rede que suporta inúmeros protocolos. Se você precisa testar a força de uma senha em um serviço de rede (como SSH, FTP, Telnet, RDP), o Hydra é a ferramenta ideal. Ele funciona tentando múltiplas combinações de nome de usuário e senha de forma paralela e muito rápida, usando listas de palavras (wordlists).\n\nO uso básico envolve fornecer uma lista de usuários, uma lista de senhas e o serviço alvo. Exemplo: \`hydra -L usuarios.txt -P senhas.txt ssh://192.168.1.101\`.`,
          advanced: `O poder do Hydra pode ser estendido. Em vez de apenas testar logins, ele pode ser usado para verificar a existência de nomes de usuário válidos. Alguns serviços respondem de maneira diferente para um nome de usuário inexistente versus um nome de usuário válido com uma senha incorreta. O Hydra pode explorar esse comportamento.\n\nAlém disso, o Hydra pode ser combinado com outras ferramentas. Por exemplo, você pode usar o Nmap para encontrar todos os hosts com a porta de SSH aberta em uma rede e, em seguida, usar um script para passar essa lista para o Hydra tentar um ataque de senha padrão em todos eles. É crucial ajustar os parâmetros de velocidade (-t) para evitar o bloqueio de contas ou a detecção por sistemas de segurança (IDS/IPS).`,
          recommendations: `Para explorar o Hydra em detalhes:\n- **Documentação:** A documentação oficial no repositório do GitHub do projeto é a fonte mais precisa de informação sobre todos os seus parâmetros e módulos de serviço.\n- **Tutoriais:** Muitos blogs de segurança e vídeos no YouTube demonstram seu uso prático contra diferentes serviços, como formulários web HTTP-POST.\n- **Prática:** Use plataformas como TryHackMe para praticar ataques de força bruta em cenários controlados e éticos. Nunca use em sistemas sem permissão.`
      }
    },
    {
      id: 'wireshark-intro',
      title: 'Introdução ao Wireshark',
      type: 'Ferramenta',
      level: 'Iniciante',
      description: 'Aprenda o básico do Wireshark, o analisador de protocolos de rede mais popular do mundo.',
      content: {
          concepts: `O Wireshark é uma ferramenta essencial para qualquer pessoa que trabalhe com redes. Ele permite capturar o tráfego de rede em tempo real e analisá-lo em um formato legível. É usado para solucionar problemas de rede, analisar a segurança e aprender sobre protocolos. \n\nRecursos básicos incluem a capacidade de capturar tráfego de uma interface de rede específica, usar filtros de exibição para encontrar pacotes específicos (ex: 'ip.addr == 8.8.8.8') e inspecionar as diferentes camadas de um pacote (Ethernet, IP, TCP, HTTP, etc.).`,
          advanced: `A análise avançada com o Wireshark envolve recursos como a reconstrução de fluxos TCP ('Follow TCP Stream'), que permite ver a conversa completa entre um cliente e um servidor, como uma página web ou um download de arquivo. Outro recurso poderoso são os gráficos de IO, que podem visualizar a taxa de transferência de dados ao longo do tempo, ajudando a identificar gargalos ou picos de tráfego suspeitos.\n\nEspecialistas usam os recursos de linha de comando do Wireshark (tshark) para automatizar a captura e análise de grandes volumes de dados, extraindo informações específicas ou identificando padrões de ataque sem a necessidade da interface gráfica.`,
          recommendations: `Para se tornar fluente em Wireshark:\n- **Documentação Oficial:** O site do Wireshark tem uma documentação excelente e centenas de exemplos de arquivos de captura para praticar.\n- **Livro:** "Practical Packet Analysis" por Chris Sanders é considerado o melhor livro para aprender análise de pacotes de forma prática.\n- **Canal no YouTube:** Chris Greer's "The Networking Doctors" tem muitos vídeos sobre análise de pacotes com Wireshark, cobrindo desde o básico até cenários complexos.`
      }
    },
    {
      id: 'ipv4-vs-ipv6',
      title: 'Introdução a IPv4 e IPv6',
      type: 'Artigo',
      level: 'Iniciante',
      description: 'Entenda as diferenças, a estrutura e a necessidade dos dois principais protocolos de endereçamento da Internet.',
      content: {
          concepts: `O Protocolo de Internet (IP) é o que permite que os computadores se comuniquem através da internet. O IPv4 usa um endereço de 32 bits (ex: 192.168.1.1) e tem um limite de cerca de 4.3 bilhões de endereços, que já se esgotaram. O IPv6 foi criado para resolver isso, usando um endereço de 128 bits (ex: 2001:0db8::8a2e:0370:7334), oferecendo um número virtualmente ilimitado de endereços.\n\nA principal razão para a mudança é o esgotamento do IPv4. O IPv6 também traz melhorias em segurança e eficiência de roteamento.`,
          advanced: `A transição de IPv4 para IPv6 não é simples e requer várias tecnologias de coexistência. O modo "dual-stack" (pilha dupla), onde os dispositivos têm endereços IPv4 e IPv6, é o mais comum. Outras tecnologias incluem tunelamento, como 6to4 ou Teredo, que encapsulam pacotes IPv6 dentro de pacotes IPv4 para atravessar redes que só suportam IPv4. \n\nDo ponto de vista da segurança, o IPv6 torna o escaneamento de rede muito mais difícil devido ao seu vasto espaço de endereçamento, mas também introduz novos vetores de ataque. Por exemplo, ataques de 'Neighbor Discovery Protocol (NDP)' no IPv6 são análogos aos ataques de 'ARP spoofing' no IPv4. É crucial que os firewalls sejam configurados para filtrar o tráfego IPv6 corretamente.`,
          recommendations: `Para um mergulho profundo em IPv6:\n- **Cursos:** O Google oferece um curso gratuito e de alta qualidade sobre IPv6 para administradores de rede.\n- **RFCs:** Para entender os detalhes técnicos, leia as RFCs (Request for Comments) originais. RFC 791 para IPv4 e RFC 8200 para IPv6 são os pontos de partida.\n- **Labs:** Pratique a configuração de endereços IPv6 em sistemas Linux e Windows. Crie uma pequena rede dual-stack em um ambiente virtual para ver como os protocolos interagem.`
      }
    }
];

export type CareerPath = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stages: {
    title: string;
    duration: string;
    items: {
      title: string;
      description: string;
      resourceId?: string;
    }[];
  }[];
};

export const careerPaths: CareerPath[] = [
  {
    id: "pentester",
    title: "Pentester (Hacker Ético)",
    description: "Especialista em encontrar e explorar vulnerabilidades em sistemas para testar suas defesas.",
    icon: Fingerprint,
    stages: [
      {
        title: "Fundamentos (Meses 1-3)",
        duration: "3 Meses",
        items: [
          { title: "Redes de Computadores", description: "Domine os modelos OSI e TCP/IP, sub-redes e protocolos essenciais.", resourceId: "networking-intro" },
          { title: "Sistemas Operacionais", description: "Aprenda a usar e administrar Linux e Windows a fundo.", resourceId: "linux-distros" },
          { title: "Criptografia Básica", description: "Entenda os conceitos de chaves, cifras e hashes.", resourceId: "cryptography-basics" },
        ],
      },
      {
        title: "Ferramentas do Ofício (Meses 4-6)",
        duration: "3 Meses",
        items: [
          { title: "Dominando o Nmap", description: "Aprenda a escanear redes, descobrir hosts e identificar serviços.", resourceId: "top-linux-tools" },
          { title: "Análise com Wireshark", description: "Capture e analise tráfego de rede para entender a comunicação.", resourceId: "wireshark-intro" },
          { title: "Exploração com Metasploit", description: "Inicie seus estudos no framework de exploração mais famoso.", resourceId: "metasploit-intro" },
        ],
      },
      {
        title: "Prática e Certificação (Meses 7-12)",
        duration: "6 Meses",
        items: [
          { title: "Plataformas de Treinamento", description: "Resolva máquinas em plataformas como Hack The Box e TryHackMe." },
          { title: "Estudo para Certificação", description: "Prepare-se para certificações como CompTIA Security+ ou eJPT." },
          { title: "Desenvolvimento de Scripts", description: "Aprenda Python ou Bash para automatizar tarefas e criar suas próprias ferramentas." },
        ],
      },
    ],
  },
  {
    id: "soc-analyst",
    title: "Analista de SOC (Centro de Operações de Segurança)",
    description: "O guardião da rede, monitorando, detectando e respondendo a ameaças em tempo real.",
    icon: Shield,
    stages: [
      {
        title: "Fundamentos de Defesa (Meses 1-3)",
        duration: "3 Meses",
        items: [
          { title: "Introdução à Cibersegurança", description: "Conheça a tríade CIA (Confidencialidade, Integridade, Disponibilidade) e os principais vetores de ataque." },
          { title: "Redes e Protocolos", description: "Foco em DNS, HTTP/S, e como o tráfego normal se parece.", resourceId: "networking-intro" },
          { title: "Tipos de Malware", description: "Estude o comportamento de vírus, worms, ransomware e spyware.", resourceId: "malware-types" },
        ],
      },
      {
        title: "Análise e Ferramentas (Meses 4-6)",
        duration: "3 Meses",
        items: [
          { title: "Análise de Logs", description: "Aprenda a ler e correlacionar logs de firewalls, sistemas operacionais e aplicações." },
          { title: "SIEM (Security Information and Event Management)", description: "Entenda como funcionam ferramentas como Splunk ou ELK Stack para agregar e analisar alertas." },
          { title: "Wireshark para Defesa", description: "Use o Wireshark para identificar anomalias e atividades maliciosas no tráfego.", resourceId: "wireshark-intro" },
        ],
      },
      {
        title: "Resposta a Incidentes e Certificação (Meses 7-12)",
        duration: "6 Meses",
        items: [
          { title: "Playbooks de Resposta", description: "Aprenda os passos para conter, erradicar e recuperar de um incidente de segurança." },
          { title: "Plataformas de Simulação", description: "Use plataformas como o LetsDefend para praticar a análise de alertas reais." },
          { title: "Estudo para Certificação", description: "Prepare-se para certificações como Cisco CyberOps Associate ou CompTIA CySA+." },
        ],
      },
    ],
  },
  {
    id: "cloud-engineer",
    title: "Engenheiro de Segurança na Nuvem",
    description: "Especialista em proteger dados, aplicações e infraestrutura em ambientes de nuvem como AWS, Azure e GCP.",
    icon: CloudCog,
    stages: [
      {
        title: "Fundamentos de Nuvem e Segurança (Meses 1-3)",
        duration: "3 Meses",
        items: [
          { title: "Conceitos de Nuvem", description: "Domine os modelos IaaS, PaaS, SaaS e os principais serviços da AWS, Azure ou GCP." },
          { title: "Redes na Nuvem", description: "Aprenda sobre VPCs, Subnets, Security Groups e Network ACLs." },
          { title: "Modelo de Responsabilidade Compartilhada", description: "Entenda o que é responsabilidade do provedor de nuvem e o que é sua." },
        ],
      },
      {
        title: "Gestão de Identidade e Acesso (IAM) (Meses 4-6)",
        duration: "3 Meses",
        items: [
          { title: "Princípio do Menor Privilégio", description: "Aprenda a conceder apenas as permissões estritamente necessárias." },
          { title: "Políticas e Roles", description: "Domine a criação de políticas de IAM para usuários, grupos e serviços." },
          { title: "Autenticação Multifator (MFA)", description: "Implemente e gerencie a MFA para proteger contas críticas." },
        ],
      },
      {
        title: "Automação e Certificação (Meses 7-12)",
        duration: "6 Meses",
        items: [
          { title: "Infraestrutura como Código (IaC)", description: "Use ferramentas como Terraform ou CloudFormation para automatizar a criação de ambientes seguros." },
          { title: "Segurança de Contêineres e Serverless", description: "Aprenda a proteger Docker, Kubernetes e funções Lambda." },
          { title: "Estudo para Certificação", description: "Prepare-se para certificações como AWS Certified Security - Specialty ou Microsoft Certified: Azure Security Engineer." },
        ],
      },
    ],
  },
];
