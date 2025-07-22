
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
  { id: 'cissp', name: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)²', description: 'Um padrão de realização globalmente reconhecido que confirma o conhecimento de um indivíduo no campo da segurança da informação.', level: 'Avançado', domain: 'Network Security', price: '$749', url: 'https://www.isc2.org/Certifications/CISSP', details: 'O CISSP é uma certificação de nível avançado para profissionais de segurança de TI. Demonstra que você tem o conhecimento e a experiência para projetar, desenvolver e gerenciar a postura geral de segurança de uma organização. A certificação abrange oito domínios em segurança de computadores, incluindo segurança e gerenciamento de riscos, segurança de ativos, arquitetura e engenharia de segurança, comunicação e segurança de rede, gerenciamento de identidade e acesso, avaliação e testes de segurança, operações de segurança e segurança de desenvolvimento de software.' },
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
    },
    {
        id: 'malware-types',
        title: 'Tipos de Malware',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Conheça os diferentes tipos de software malicioso e como eles operam.',
        content: `Malware, ou software malicioso, é qualquer software projetado para causar danos a um computador, servidor, cliente ou rede de computadores.

**Tipos Comuns de Malware:**
- **Vírus:** Anexa-se a programas limpos e se espalha para outros programas. Requer intervenção humana para se espalhar.
- **Worms:** Semelhante aos vírus, mas podem se espalhar sem qualquer intervenção humana, explorando vulnerabilidades de rede.
- **Ransomware:** Criptografa os arquivos da vítima e exige um resgate (geralmente em criptomoeda) pela chave de descriptografia.
- **Spyware:** Coleta secretamente informações sobre o usuário e as envia a terceiros.
- **Trojans (Cavalos de Troia):** Disfarçam-se de software legítimo, mas contêm uma carga maliciosa.

**Onde aprender mais:**
- **Blogs de Segurança:** Krebs on Security, The Hacker News.
- **Cursos:** Malwarebytes oferece guias extensivos sobre cada tipo de malware em seu blog.
- **Análise:** Para usuários avançados, experimente analisar amostras de malware em uma máquina virtual (sandbox) usando ferramentas como o Cuckoo Sandbox.`
    },
    {
        id: 'network-attacks',
        title: 'Ataques de Rede Comuns',
        type: 'Artigo',
        level: 'Experiente',
        description: 'Uma visão geral dos ataques de rede mais prevalentes e como mitigá-los.',
        content: `Ataques de rede visam a disponibilidade, confidencialidade ou integridade dos dados em trânsito.

**Ataques Comuns:**
- **Negação de Serviço (DoS/DDoS):** Inunda um alvo com tráfego para sobrecarregar seus recursos e torná-lo indisponível para usuários legítimos. DDoS (Distributed Denial of Service) usa múltiplos sistemas para lançar o ataque.
- **Man-in-the-Middle (MitM):** O invasor intercepta secretamente a comunicação entre duas partes para espionar ou alterar o tráfego.
- **Sniffing:** Captura de pacotes de dados enquanto eles viajam por uma rede. Se os dados não estiverem criptografados, o invasor pode ler informações confidenciais.

**Mitigação:**
- **DoS/DDoS:** Use serviços de mitigação de DDoS (como Cloudflare ou Akamai), configure firewalls e roteadores para filtrar tráfego malicioso.
- **MitM:** Use criptografia forte (HTTPS, VPNs) e evite redes Wi-Fi públicas não seguras.
- **Sniffing:** Criptografe todo o tráfego sensível.

**Onde aprender mais:**
- **Labs:** Pratique a detecção desses ataques usando Wireshark e Snort em um ambiente de laboratório.
- **Livros:** "Practical Packet Analysis" por Chris Sanders.
- **RFCs:** Leia as RFCs (Request for Comments) para entender profundamente os protocolos de rede.`
    },
    {
        id: 'web-vulnerabilities',
        title: 'Vulnerabilidades Web: XSS e CSRF',
        type: 'Artigo',
        level: 'Experiente',
        description: 'Entenda duas das vulnerabilidades mais comuns em aplicações web.',
        content: `Aplicações web são alvos frequentes. Compreender vulnerabilidades como XSS e CSRF é crucial para desenvolvedores e profissionais de segurança.

**Cross-Site Scripting (XSS):**
Ocorre quando um invasor injeta scripts maliciosos (geralmente JavaScript) em páginas web visualizadas por outros usuários. Isso pode ser usado para roubar cookies de sessão, desfigurar sites ou redirecionar usuários.
- **Tipos:** Refletido, Armazenado e Baseado em DOM.

**Cross-Site Request Forgery (CSRF):**
Engana a vítima para que ela envie uma solicitação maliciosa. Por exemplo, um usuário autenticado em seu banco pode ser enganado a clicar em um link que transfere fundos para a conta do invasor sem o seu conhecimento.

**Prevenção:**
- **XSS:** Valide e sanitize todas as entradas do usuário. Use Content Security Policy (CSP).
- **CSRF:** Use tokens anti-CSRF. Verifique o cabeçalho Referer e use o atributo SameSite para cookies.

**Onde aprender mais:**
- **OWASP Top 10:** O Open Web Application Security Project (OWASP) é a principal referência para segurança de aplicações web.
- **PortSwigger Web Security Academy:** Oferece laboratórios gratuitos e interativos para aprender e explorar essas vulnerabilidades.
- **Plataformas de Bug Bounty:** Sites como HackerOne e Bugcrowd publicam relatórios de vulnerabilidades reais.`
    },
    {
        id: 'cryptography-basics',
        title: 'Fundamentos de Criptografia',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Uma introdução aos conceitos básicos de criptografia e sua importância na segurança.',
        content: `Criptografia é a ciência de proteger informações, convertendo-as em um formato ilegível (cifrado) que só pode ser lido com uma chave secreta.

**Conceitos-Chave:**
- **Criptografia Simétrica:** Usa a mesma chave para criptografar e descriptografar dados. É rápida, mas o compartilhamento seguro da chave é um desafio. Ex: AES.
- **Criptografia Assimétrica (Chave Pública):** Usa um par de chaves: uma pública (para criptografar) e uma privada (para descriptografar). É mais lenta, mas resolve o problema de distribuição de chaves. Ex: RSA.
- **Hashing:** Cria uma impressão digital de tamanho fixo de dados. É um processo de mão única (não pode ser revertido). Usado para verificar a integridade dos dados e armazenar senhas. Ex: SHA-256.

**Onde aprender mais:**
- **Vídeos:** Canal "Computerphile" no YouTube tem excelentes vídeos explicando esses conceitos.
- **Livro:** "Cryptography Engineering: Design Principles and Practical Applications" por Niels Ferguson et al.
- **Ferramentas Online:** Use ferramentas online para experimentar a criptografia e descriptografia de mensagens com diferentes algoritmos.`
    },
     {
        id: 'burp-suite-intro',
        title: 'Introdução ao Burp Suite',
        type: 'Ferramenta',
        level: 'Experiente',
        description: 'Conheça o Burp Suite, o canivete suíço para testes de segurança de aplicações web.',
        content: `O Burp Suite é uma plataforma integrada para realizar testes de segurança em aplicações web. Sua ferramenta mais importante é o proxy de interceptação, que permite visualizar e modificar todo o tráfego entre seu navegador e a aplicação alvo.

**Módulos Principais:**
- **Proxy:** Intercepta e modifica o tráfego HTTP/HTTPS.
- **Scanner:** Automatiza a busca por vulnerabilidades (recurso da versão Pro).
- **Intruder:** Realiza ataques personalizados e automatizados (ex: força bruta, fuzzing).
- **Repeater:** Permite modificar e reenviar solicitações individuais manualmente.
- **Sequencer:** Analisa a aleatoriedade de tokens de sessão.
- **Decoder:** Codifica e decodifica dados em vários formatos (URL, Base64, Hex).

**Onde aprender mais:**
- **PortSwigger Web Security Academy:** O melhor lugar para aprender a usar o Burp Suite, com dezenas de laboratórios práticos.
- **Documentação Oficial:** A documentação da PortSwigger é extensa e cheia de exemplos.
- **Tutoriais em Vídeo:** Muitos pesquisadores de segurança publicam tutoriais sobre como usar o Burp para encontrar vulnerabilidades específicas.`
    }
];
