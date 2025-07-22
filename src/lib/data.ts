
export type Certification = {
  id: string;
  name: string;
  issuer: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  domain: 'Penetration Testing' | 'Incident Response' | 'Network Security' | 'Cloud Security';
  price: string;
  url: string;
  details: string;
};

export const certifications: Certification[] = [
  { id: 'ceh', name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', description: 'A foundational certification for aspiring penetration testers, covering core ethical hacking concepts.', level: 'Intermediate', domain: 'Penetration Testing', price: '$950 - $1199', url: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/', details: 'The Certified Ethical Hacker (CEH) certification is a globally recognized credential that validates your skills in ethical hacking. It covers over 20 of the most current security domains, including footprinting and reconnaissance, scanning networks, enumeration, vulnerability analysis, system hacking, malware threats, sniffing, social engineering, denial-of-service, session hijacking, evading IDS, firewalls, and honeypots, hacking web servers, hacking web applications, SQL injection, hacking wireless networks, hacking mobile platforms, IoT hacking, cloud computing, and cryptography.' },
  { id: 'oscp', name: 'Offensive Security Certified Professional (OSCP)', issuer: 'Offensive Security', description: 'A highly respected, hands-on certification that proves practical penetration testing skills.', level: 'Advanced', domain: 'Penetration Testing', price: '$1599', url: 'https://www.offsec.com/courses/pen-200/', details: 'The OSCP is a hands-on penetration testing certification. The exam consists of a 24-hour proctored, hands-on test where you must successfully compromise a series of target machines. It is known for its difficulty and practical nature, requiring you to think like an attacker.' },
  { id: 'gcih', name: 'GIAC Certified Incident Handler (GCIH)', issuer: 'GIAC', description: 'Focuses on detecting, responding to, and resolving computer security incidents.', level: 'Intermediate', domain: 'Incident Response', price: '$2499', url: 'https://www.giac.org/certification/certified-incident-handler-gcih', details: 'The GCIH certification validates a practitioner\'s ability to detect, respond, and resolve computer security incidents. GCIH certification holders have the knowledge and skills needed to manage security incidents by understanding common attack techniques, vectors and tools, as well as defend against and/or respond to such attacks when they occur.' },
  { id: 'cyberops', name: 'Cisco Certified CyberOps Associate', issuer: 'Cisco', description: 'Validates the day-to-day, tactical knowledge and skills that Security Operations Center (SOC) teams need.', level: 'Beginner', domain: 'Incident Response', price: '$300', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/cyberops-associate.html', details: 'This certification prepares you for a career in cybersecurity operations. As a CyberOps Associate, you will know how to monitor, detect and respond to cybersecurity threats. The certification covers security concepts, security monitoring, host-based analysis, network intrusion analysis, and security policies and procedures.' },
  { id: 'security-plus', name: 'CompTIA Security+', issuer: 'CompTIA', description: 'A global certification that validates the baseline skills necessary to perform core security functions.', level: 'Beginner', domain: 'Network Security', price: '$392', url: 'https://www.comptia.org/certifications/security', details: 'CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career. It establishes the core knowledge required of any cybersecurity role and provides a springboard to intermediate-level cybersecurity jobs.' },
  { id: 'cissp', name: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)²', description: 'A globally recognized standard of achievement that confirms an individual\'s knowledge in the field of information security.', level: 'Advanced', domain: 'Network Security', price: '$749', url: 'https://www.isc2.org/Certifications/CISSP', details: 'The CISSP is an advanced-level certification for IT security professionals. It demonstrates that you have the knowledge and experience to design, engineer, and manage an organization\'s overall security posture. The certification covers eight domains in computer security, including security and risk management, asset security, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, security operations, and software development security.' },
  { id: 'ccsp', name: 'Certified Cloud Security Professional (CCSP)', issuer: '(ISC)²', description: 'The premier cloud security certification for advanced technical skills in cloud application and infrastructure security.', level: 'Advanced', domain: 'Cloud Security', price: '$599', url: 'https://www.isc2.org/Certifications/CCSP', details: 'The CCSP shows you have the advanced technical skills and knowledge to design, manage and secure data, applications and infrastructure in the cloud using best practices, policies and procedures established by the cloud security experts at (ISC)². It covers cloud concepts, architecture and design, cloud data security, cloud platform & infrastructure security, cloud application security, and cloud security operations.' },
];

export type Resource = {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Tool';
  level: 'Beginner' | 'Experienced';
  description: string;
  content: string;
};

export const contentLibrary: Resource[] = [
    {
        id: 'social-engineering',
        title: 'Introdução à Engenharia Social',
        type: 'Article',
        level: 'Beginner',
        description: 'Aprenda a arte da manipulação psicológica para obter informações confidenciais.',
        content: `A engenharia social é a prática de manipular pessoas para que elas divulguem informações confidenciais. É uma técnica de ataque que depende mais da interação humana do que de falhas técnicas.

**Técnicas Comuns:**
- **Phishing:** Envio de e-mails fraudulentos que parecem ser de fontes confiáveis para roubar informações.
- **Pretexting:** Criar um cenário falso (pretexto) para enganar a vítima e obter informações.
- **Baiting:** Deixar um dispositivo infectado (como um pendrive) em um local público para que alguém o encontre e o conecte a seu computador.

**Onde aprender mais:**
- **Livro:** "The Art of Deception" por Kevin Mitnick.
- **Curso Online:** Cybrary - Social Engineering Fundamentals.
- **Comunidade:** Participe de fóruns de segurança para ver exemplos reais.`
    },
    {
        id: 'linux-distros',
        title: 'Distribuições Linux para Segurança',
        type: 'Article',
        level: 'Beginner',
        description: 'Conheça as distribuições Linux mais populares usadas por profissionais de segurança.',
        content: `Uma distribuição Linux é um sistema operacional feito a partir do kernel do Linux e um conjunto de softwares. Para segurança, algumas distribuições vêm com ferramentas pré-instaladas para pentest, forense e outras tarefas.

**Distribuições Populares:**
- **Kali Linux:** A mais famosa, mantida pela Offensive Security. Vem com centenas de ferramentas para testes de invasão.
- **Parrot OS:** Alternativa ao Kali, focada em pentest, forense, desenvolvimento e privacidade.
- **BlackArch:** Baseada em Arch Linux, possui um repositório extenso com milhares de ferramentas de segurança.

**Onde aprender mais:**
- **Site Oficial:** Visite os sites oficiais de Kali Linux, Parrot OS e BlackArch.
- **Tutoriais no YouTube:** Procure por "como instalar e usar Kali Linux" para começar.
- **Documentação:** A documentação de cada distro é a melhor fonte de informação.`
    },
    {
        id: 'top-linux-tools',
        title: 'Top Ferramentas Linux para Segurança',
        type: 'Tool',
        level: 'Experienced',
        description: 'Uma visão geral das ferramentas essenciais que todo profissional de segurança deve conhecer no Linux.',
        content: `O Linux é a plataforma de escolha para a maioria das ferramentas de segurança. Conhecer as ferramentas certas pode economizar muito tempo.

**Ferramentas Essenciais:**
- **Nmap:** Scanner de rede para descobrir hosts e serviços em uma rede de computadores.
- **Metasploit Framework:** Plataforma para desenvolver e executar exploits contra uma máquina remota.
- **Wireshark:** Analisador de protocolo de rede para ver o que está acontecendo em sua rede em um nível microscópico.
- **John the Ripper:** Ferramenta para quebrar senhas.
- **Aircrack-ng:** Conjunto de ferramentas para auditoria de redes sem fio.

**Onde aprender mais:**
- **Man pages:** No terminal, digite \`man nmap\` para ler o manual do Nmap.
- **Livros:** "Nmap Network Scanning" pelo autor do Nmap, Gordon Lyon.
- **Hack The Box:** Plataforma prática para treinar suas habilidades com essas ferramentas.`
    },
    {
        id: 'networking-intro',
        title: 'Introdução a Redes de Computadores',
        type: 'Article',
        level: 'Beginner',
        description: 'Entenda os conceitos básicos de redes, essenciais para qualquer carreira em cibersegurança.',
        content: `Redes de computadores são a espinha dorsal da internet e de qualquer infraestrutura de TI. Entender como elas funcionam é fundamental para a segurança.

**Conceitos Fundamentais:**
- **Modelo OSI e TCP/IP:** Estruturas que padronizam as funções de um sistema de telecomunicações ou de computação.
- **Endereçamento IP:** Como os dispositivos são identificados em uma rede.
- **Protocolos:** Regras que governam a comunicação (HTTP, DNS, TCP, UDP).
- **Firewalls e Roteadores:** Componentes que controlam o tráfego de rede.

**Onde aprender mais:**
- **Cursos:** Professor Messer (YouTube) oferece cursos gratuitos para CompTIA Network+.
- **Livro:** "Redes de Computadores" por Andrew S. Tanenbaum.
- **Labs:** Crie sua própria rede virtual usando GNS3 ou EVE-NG para praticar.`
    }
];
