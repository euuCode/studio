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
  category: 'Fundamentos' | 'Ferramentas Essenciais' | 'Outros Conhecimentos';
  subcategory: 'Conceitos Básicos' | 'Análise e Monitoramento' | 'Pentest e Auditoria' | 'Criptografia e Segurança de Dados' | 'Análise de Malware e Forense' | 'Segurança em Nuvem' | 'Redes e Protocolos' | 'Políticas e Conformidade' | 'Sistemas Operacionais' | 'Análise de Logs';
  type: 'Artigo' | 'Ferramenta';
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  description: string;
  content: {
    concepts: string;
    advanced: string;
    recommendations: string;
  };
};

export const contentLibrary: Resource[] = [
    // Fundamentos
    {
        id: 'cia-triad',
        title: 'Tríade CIA: Confidencialidade, Integridade e Disponibilidade',
        category: 'Fundamentos',
        subcategory: 'Conceitos Básicos',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Entenda os três pilares que sustentam toda a segurança da informação.',
        content: {
          concepts: 'A Tríade CIA é o modelo base para a segurança da informação. **Confidencialidade** é sobre restringir o acesso à informação, garantindo que apenas pessoas autorizadas possam vê-la. Pense em criptografia. **Integridade** é garantir que a informação é confiável e não foi alterada indevidamente. Hashes e assinaturas digitais são usados aqui. **Disponibilidade** é garantir que os sistemas e dados estejam acessíveis para usuários autorizados quando eles precisarem. Isso envolve proteção contra ataques de negação de serviço e ter bons backups.',
          advanced: 'Embora fundamental, a Tríade CIA não é completa. Modelos modernos adicionam outros pilares, como **Autenticidade** (verificar a origem da informação) e **Não-repúdio** (garantir que alguém não possa negar uma ação que realizou). Em cenários complexos, pode haver um conflito entre os pilares. Por exemplo, uma criptografia muito forte (aumentando a confidencialidade) pode consumir tantos recursos que diminui a disponibilidade do sistema. O trabalho de um profissional de segurança é balancear esses pilares de acordo com o risco e a necessidade do negócio.',
          recommendations: '- **Livro:** "Princípios de Segurança da Informação" por Michael E. Whitman. Cobre a Tríade CIA e outros modelos de forma aprofundada.\n- **Artigo:** Pesquise sobre "Parker\'s Hexad", uma alternativa à Tríade CIA que inclui possessão, autenticidade e utilidade.\n- **Exercício Prático:** Analise um sistema que você usa (ex: seu e-mail) e identifique as medidas de segurança que garantem cada pilar da Tríade CIA.'
        }
    },
    {
        id: 'aaa-model',
        title: 'AAA: Autenticação, Autorização e Auditoria',
        category: 'Fundamentos',
        subcategory: 'Conceitos Básicos',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Conheça o framework que controla quem pode acessar e o que pode fazer em um sistema.',
        content: {
          concepts: 'O modelo AAA é crucial para o controle de acesso. **Autenticação** é o processo de provar que você é quem diz ser. Fatores de autenticação incluem algo que você sabe (senha), algo que você tem (token, celular) e algo que você é (biometria). **Autorização** acontece *após* a autenticação e define quais permissões o usuário autenticado possui. É o que determina se você pode ler, escrever ou deletar um arquivo. **Auditoria** (ou Contabilização - Accounting) é o registro de todas as ações realizadas, criando uma trilha para investigações futuras e monitoramento.',
          advanced: 'Em sistemas distribuídos e na nuvem, o modelo AAA se torna mais complexo. Protocolos como **OAuth 2.0** e **OpenID Connect (OIDC)** são usados para delegar autenticação e autorização entre serviços. O SAML (Security Assertion Markup Language) é amplamente utilizado em ambientes corporativos para Single Sign-On (SSO), permitindo que um usuário se autentique uma vez e acesse múltiplos sistemas. A auditoria avançada envolve o uso de sistemas SIEM que coletam e correlacionam logs de múltiplas fontes para detectar padrões de atividades suspeitas em tempo real.',
          recommendations: '- **Vídeo:** "OAuth 2.0 and OpenID Connect in Plain English" no YouTube. Explica de forma visual como esses protocolos funcionam.\n- **Plataforma:** Explore o Auth0 ou o Okta para ver exemplos práticos de como o AAA é implementado como um serviço.\n- **RFCs:** Para um mergulho profundo, leia as RFCs do OAuth 2.0 (RFC 6749) e do JWT (JSON Web Token, RFC 7519).'
        }
    },
    {
        id: 'cryptography',
        title: 'Fundamentos de Criptografia',
        category: 'Fundamentos',
        subcategory: 'Conceitos Básicos',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Explore os conceitos de criptografia simétrica, assimétrica, hashes e PKI.',
        content: {
          concepts: '**Criptografia Simétrica** usa a mesma chave para criptografar e descriptografar dados (ex: AES). É rápida, ideal para grandes volumes de dados. **Criptografia Assimétrica** usa um par de chaves: uma pública (para criptografar) e uma privada (para descriptografar). É mais lenta, mas fundamental para a troca segura de chaves simétricas e para assinaturas digitais (ex: RSA). **Hashes** são funções de mão única que transformam dados em uma string de tamanho fixo. Servem para verificar a integridade de arquivos (ex: SHA-256). **PKI (Infraestrutura de Chaves Públicas)** é o sistema que gerencia os certificados digitais (como os de sites HTTPS), que ligam uma chave pública a uma identidade.',
          advanced: 'A criptografia moderna vai além do RSA e AES. A **Criptografia de Curva Elíptica (ECC)** oferece o mesmo nível de segurança que o RSA, mas com chaves muito menores, sendo ideal para dispositivos móveis e IoT. Outro campo emergente é a **Criptografia Pós-Quântica (PQC)**, que desenvolve algoritmos resistentes a ataques de computadores quânticos. Conceitos como **Forward Secrecy (FS)** garantem que, mesmo que a chave privada de longo prazo de um servidor seja comprometida, as sessões de comunicação passadas não possam ser descriptografadas.',
          recommendations: '- **Canal no YouTube:** "Art of the Problem" e "Computerphile" têm vídeos excelentes que explicam conceitos criptográficos de forma visual e intuitiva.\n- **Curso Online:** "Cryptography I" da Universidade de Stanford no Coursera é um curso clássico e abrangente.\n- **Ferramenta Interativa:** "CrypTool-Online" permite que você experimente diferentes algoritmos de criptografia e hashing diretamente no navegador.'
        }
    },
    {
        id: 'threat-types',
        title: 'Principais Tipos de Ameaças',
        category: 'Fundamentos',
        subcategory: 'Conceitos Básicos',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Aprenda sobre malware, phishing, ataques DDoS e a exploração de vulnerabilidades.',
        content: {
          concepts: '**Malware** é um software malicioso que inclui vírus, worms, trojans e ransomware. **Phishing** é um tipo de engenharia social que usa e-mails ou mensagens falsas para enganar as pessoas e roubar informações. **Ataques de Negação de Serviço (DoS/DDoS)** tentam derrubar um serviço online, sobrecarregando-o com tráfego. **Exploração de Vulnerabilidades** ocorre quando um invasor encontra uma falha (bug) no software e a utiliza para ganhar acesso ou executar ações não autorizadas. Uma vulnerabilidade de **dia-zero (zero-day)** é aquela que é desconhecida pelo desenvolvedor do software e para a qual ainda não existe correção.',
          advanced: 'Ameaças avançadas combinam várias técnicas. Uma **Ameaça Persistente Avançada (APT)** é um ataque furtivo e contínuo, geralmente de um grupo bem financiado, que busca acesso de longo prazo a uma rede para exfiltrar dados. Eles usam exploits de dia-zero, spear phishing altamente personalizado e malware customizado para evitar detecção. Outro conceito é a **Cadeia de Ataque (Cyber Kill Chain)**, um modelo que descreve as fases de um ataque, desde o reconhecimento inicial até a exfiltração de dados. Entender essa cadeia ajuda a criar pontos de defesa em cada etapa.',
          recommendations: '- **Blog:** "Krebs on Security" e "Threatpost" são fontes excelentes para notícias e análises sobre as ameaças mais recentes.\n- **Relatórios:** Empresas como Verizon ("Data Breach Investigations Report - DBIR") e CrowdStrike publicam relatórios anuais sobre tendências de ameaças.\n- **Mapa de Ameaças em Tempo Real:** Sites como o da Fortinet ou da Kaspersky mostram visualizações de ataques cibernéticos acontecendo ao redor do mundo.'
        }
    },
    {
        id: 'security-models',
        title: 'Modelos de Segurança Essenciais',
        category: 'Fundamentos',
        subcategory: 'Conceitos Básicos',
        type: 'Artigo',
        level: 'Intermediário',
        description: 'Descubra os princípios de Zero Trust, Defense in Depth e Least Privilege.',
        content: {
          concepts: '**Defense in Depth (Defesa em Camadas)** é a prática de ter múltiplos controles de segurança, de modo que, se uma camada falhar, outra possa conter o ataque. Pense em um castelo com fosso, muralhas e guardas. **Least Privilege (Privilégio Mínimo)** é o princípio de dar a um usuário ou sistema apenas as permissões estritamente necessárias para realizar suas tarefas, e nada mais. Isso limita o dano que pode ser causado se a conta for comprometida. **Zero Trust (Confiança Zero)** é um modelo mais moderno que abandona a ideia de um "perímetro seguro". Ele opera sob o lema "nunca confie, sempre verifique", exigindo verificação estrita de identidade para cada pessoa e dispositivo tentando acessar recursos, não importa onde estejam localizados.',
          advanced: 'Implementar o Zero Trust na prática envolve uma arquitetura complexa com vários componentes. Isso inclui **Gerenciamento de Identidade e Acesso (IAM)** robusto, **micro-segmentação** de rede para isolar cargas de trabalho, e análise contínua do comportamento de usuários e entidades (UEBA) para detectar anomalias. A **automação** é fundamental, usando políticas como código e orquestração de segurança (SOAR) para aplicar controles e responder a ameaças em tempo real. A abordagem "Shift Left" em DevOps, conhecida como **DevSecOps**, integra os princípios de segurança, como o privilégio mínimo, desde as fases iniciais do desenvolvimento de software.',
          recommendations: '- **Documentação:** O NIST (National Institute of Standards and Technology) possui uma publicação especial (SP 800-207) que define a arquitetura Zero Trust em detalhes.\n- **Livro:** "Zero Trust Networks: Building Secure Systems in Untrusted Networks" por Evan Gilman e Doug Barth.\n- **Projeto:** Tente implementar o princípio do privilégio mínimo em um projeto pessoal. Crie usuários diferentes com permissões diferentes para acessar um banco de dados ou um conjunto de arquivos.'
        }
    },
    // Ferramentas Essenciais
    {
        id: 'wireshark',
        title: 'Wireshark',
        category: 'Ferramentas Essenciais',
        subcategory: 'Análise e Monitoramento',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'O canivete suíço para análise de tráfego de rede.',
        content: {
          concepts: 'O Wireshark é o analisador de protocolos de rede mais popular do mundo. Ele permite "ver" o que está acontecendo na sua rede em um nível microscópico. Com ele, você pode capturar pacotes de dados em tempo real e inspecioná-los para solucionar problemas de rede, examinar problemas de segurança e depurar a implementação de protocolos. Seus recursos mais básicos incluem a filtragem de pacotes (ex: mostrar apenas tráfego de um IP específico) e a capacidade de seguir conversas TCP.',
          advanced: 'Usuários avançados usam o Wireshark para muito mais. É possível descriptografar tráfego TLS/SSL (se você tiver a chave privada) para analisar o conteúdo de conexões seguras. O Wireshark também pode ser usado para extrair arquivos (como imagens ou executáveis) diretamente do tráfego de rede. A versão de linha de comando, `tshark`, é extremamente poderosa para automatizar a captura e a análise de grandes volumes de dados, tornando-a uma ferramenta essencial para scripts de resposta a incidentes e forense de rede.',
          recommendations: '- **Livro:** "Practical Packet Analysis" por Chris Sanders é considerado a bíblia para aprender a usar o Wireshark.\n- **Canal no YouTube:** "Chris Greer\'s Networking Channel" oferece tutoriais fantásticos sobre análise de pacotes.\n- **Practice:** O "Wireshark Sample Captures Wiki" oferece centenas de arquivos de captura de pacotes (.pcap) para você praticar a análise de diferentes protocolos e ataques.'
        }
    },
     {
        id: 'ipv4-ipv6',
        title: 'IPv4 vs. IPv6',
        category: 'Ferramentas Essenciais',
        subcategory: 'Redes e Protocolos',
        type: 'Artigo',
        level: 'Iniciante',
        description: 'Entenda as diferenças entre as duas versões do Protocolo de Internet e por que a transição é crucial.',
        content: {
          concepts: '**IPv4 (Internet Protocol version 4)** é o protocolo que tornou a internet possível. Ele usa endereços de 32 bits (ex: 192.168.1.1), o que permite cerca de 4,3 bilhões de endereços únicos. Com o crescimento da internet, esses endereços se esgotaram.\n\n**IPv6 (Internet Protocol version 6)** é sua sucessora. Ele usa endereços de 128 bits (ex: 2001:0db8:85a3:0000:0000:8a2e:0370:7334), oferecendo um número praticamente infinito de endereços. Além disso, o IPv6 traz melhorias de eficiência e segurança, como o suporte nativo ao IPsec.',
          advanced: 'A transição do IPv4 para o IPv6 não é simples, por isso ambos coexistem. Técnicas de transição como **Dual Stack** (onde dispositivos têm ambos os endereços), **Tunneling** (encapsular pacotes IPv6 dentro de pacotes IPv4 para atravessar redes que só suportam IPv4) e **NAT64** (tradução de endereços) são usadas para garantir a interoperabilidade. Do ponto de vista da segurança, a vasta quantidade de endereços IPv6 torna o escaneamento de redes muito mais difícil para os atacantes, mas também introduz novos desafios de gerenciamento e visibilidade.',
          recommendations: '- **Vídeo:** "IPv4 vs IPv6" da série "Redes de Computadores" do canal "Curso em Vídeo".\n- **Teste de Conectividade:** Verifique se sua conexão já suporta IPv6 em sites como "test-ipv6.com".\n- **RFC:** A RFC 2460 define o padrão original do IPv6, para quem gosta de fontes primárias.'
        }
    },
    {
        id: 'siem',
        title: 'Splunk / ELK Stack (SIEM)',
        category: 'Ferramentas Essenciais',
        subcategory: 'Análise e Monitoramento',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Agregue e analise logs para uma visão completa da segurança.',
        content: {
          concepts: 'SIEM significa "Security Information and Event Management". É um sistema que coleta dados de log de diversas fontes (servidores, firewalls, aplicações, etc.), os agrega em um local centralizado e realiza análises em tempo real para identificar atividades suspeitas. O Splunk é uma solução comercial líder de mercado, enquanto o ELK Stack (Elasticsearch, Logstash, Kibana) é a alternativa de código aberto mais popular. Um SIEM é o coração de um Centro de Operações de Segurança (SOC).',
          advanced: 'Implementar um SIEM eficaz vai além de apenas coletar logs. Exige o desenvolvimento de regras de correlação complexas para detectar padrões de ataque que seriam invisíveis em logs individuais. A integração com feeds de inteligência de ameaças (Threat Intelligence) enriquece os dados, permitindo que o SIEM identifique IPs, domínios ou hashes de arquivos maliciosos conhecidos. Além disso, a integração com plataformas SOAR (Security Orchestration, Automation and Response) permite que o SIEM acione respostas automáticas a certos tipos de alertas, como bloquear um IP no firewall.',
          recommendations: '- **Treinamento Gratuito:** O Splunk oferece um curso "Splunk Fundamentals 1" gratuitamente em seu site.\n- **Laboratório em Casa:** Construa seu próprio ELK Stack em casa usando máquinas virtuais. Envie logs de diferentes sistemas (Windows, Linux) para ele e tente criar dashboards no Kibana.\n- **Comunidade:** A comunidade da Elastic e os fóruns do Splunk são ótimos lugares para aprender e tirar dúvidas.'
        }
    },
    {
        id: 'hids',
        title: 'OSSEC / Wazuh (HIDS)',
        category: 'Ferramentas Essenciais',
        subcategory: 'Análise e Monitoramento',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Detecte intrusões e monitore a integridade em seus servidores.',
        content: {
          concepts: 'HIDS significa "Host-based Intrusion Detection System". Diferente de um NIDS, que monitora o tráfego da rede, um HIDS é instalado em um servidor ou endpoint individual para monitorar sua atividade interna. O OSSEC e seu fork popular, o Wazuh, são HIDS de código aberto. Eles monitoram a integridade de arquivos (avisando se um arquivo de sistema crítico foi alterado), verificam logs, detectam rootkits e alertam sobre atividades suspeitas no host.',
          advanced: 'O poder do Wazuh é ampliado por suas integrações. Ele se integra perfeitamente com o ELK Stack, permitindo que todos os alertas dos agentes HIDS sejam enviados para um painel centralizado para análise e correlação. Wazuh também pode executar respostas ativas, como bloquear um IP de origem de ataque nas regras de firewall do próprio host ou encerrar uma sessão de usuário suspeita. Regras personalizadas podem ser escritas para detectar comportamentos específicos do seu ambiente, indo muito além das regras padrão.',
          recommendations: '- **Documentação:** A documentação oficial do Wazuh é excelente e inclui guias de instalação detalhados e um blog com casos de uso.\n- **Laboratório em Casa:** Siga a documentação para instalar um servidor Wazuh e implantar agentes em algumas máquinas virtuais. Tente alterar um arquivo de sistema em um agente e veja o alerta aparecer no painel.\n- **Comunidade:** O Wazuh tem uma comunidade ativa no Slack e no Reddit onde você pode obter ajuda.'
        }
    },
    {
        id: 'kali-linux',
        title: 'Kali Linux',
        category: 'Ferramentas Essenciais',
        subcategory: 'Pentest e Auditoria',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'A distribuição Linux definitiva para testes de invasão e auditoria de segurança.',
        content: {
          concepts: 'Kali Linux é uma distribuição baseada em Debian, mantida pela Offensive Security, que vem pré-carregada com centenas de ferramentas para testes de invasão (pentest), forense digital e engenharia reversa. Usar o Kali economiza um tempo enorme de instalação e configuração, fornecendo um ambiente padronizado e otimizado para profissionais de segurança. Ferramentas como Nmap, Metasploit, Wireshark, Burp Suite, Aircrack-ng e muitas outras já vêm prontas para usar.',
          advanced: 'Usuários experientes do Kali vão além das ferramentas pré-instaladas. Eles personalizam a instalação, adicionando seus próprios scripts e ferramentas. Compreender como compilar ferramentas a partir do código-fonte e gerenciar dependências é uma habilidade valiosa. O Kali também pode ser usado para criar "implantes" ou "drop boxes", pequenos dispositivos (como um Raspberry Pi) rodando Kali que podem ser deixados em uma rede alvo para fornecer acesso remoto persistente. A customização do kernel para otimizar o desempenho de certas tarefas, como a quebra de senhas com GPU, também é uma prática avançada.',
          recommendations: '- **Site Oficial:** "Kali Linux Official Documentation" e "Kali Tools" são os melhores lugares para começar.\n- **Curso Gratuito:** A Offensive Security oferece o curso "Kali Linux Revealed" gratuitamente.\n- **Plataformas de Prática:** Use o Kali para resolver desafios em plataformas como TryHackMe e Hack The Box. Essa é a melhor maneira de aprender a usar as ferramentas em um ambiente prático e legal.'
        }
    },
    {
        id: 'nmap',
        title: 'Nmap',
        category: 'Ferramentas Essenciais',
        subcategory: 'Pentest e Auditoria',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'Descubra hosts, serviços e vulnerabilidades em redes.',
        content: {
          concepts: 'Nmap (Network Mapper) é a ferramenta mais fundamental para o reconhecimento de redes. Ele é usado para descobrir quais hosts estão ativos em uma rede, quais portas estão abertas nesses hosts, quais serviços (e suas versões) estão rodando nessas portas e qual sistema operacional eles estão usando. Um scan básico como `nmap -sV -A target.com` pode revelar uma quantidade imensa de informações sobre um alvo.',
          advanced: 'O verdadeiro poder do Nmap está em seu motor de scripts, o NSE (Nmap Scripting Engine). O NSE permite que os usuários escrevam (e usem) scripts simples para automatizar uma ampla variedade de tarefas de rede. Existem scripts para detecção avançada de vulnerabilidades, exploração de falhas de segurança conhecidas, descoberta de informações adicionais e muito mais. Combinar o Nmap com outras ferramentas, como usar sua saída para alimentar um scanner de vulnerabilidades como o Nikto ou um cracker de senhas como o Hydra, é uma técnica padrão em pentests.',
          recommendations: '- **Livro:** "Nmap Network Scanning" por Gordon "Fyodor" Lyon, o criador do Nmap. É a referência definitiva.\n- **Documentação:** A documentação oficial no site do Nmap é extremamente detalhada e cheia de exemplos.\n- **Folha de Dicas (Cheat Sheet):** Procure por "Nmap cheat sheet" online. Existem muitas folhas de dicas excelentes que resumem os comandos e opções mais úteis.'
        }
    },
    {
        id: 'metasploit',
        title: 'Metasploit',
        category: 'Ferramentas Essenciais',
        subcategory: 'Pentest e Auditoria',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'O framework de exploração de vulnerabilidades mais popular do mundo.',
        content: {
          concepts: 'O Metasploit Framework é uma plataforma de código aberto para desenvolver, testar e executar exploits. Ele contém um enorme banco de dados de exploits para vulnerabilidades conhecidas, além de ferramentas para criar e entregar payloads (o código que executa no alvo após uma exploração bem-sucedida). A interface de console, `msfconsole`, permite buscar por vulnerabilidades, configurar exploits e lançar ataques de forma sistemática. É uma ferramenta essencial para qualquer pentester.',
          advanced: 'Dominar o Metasploit significa ir além de usar os exploits existentes. Usuários avançados desenvolvem seus próprios módulos de exploit em Ruby para explorar novas vulnerabilidades. O payload Meterpreter é outra área de estudo avançado. Ele oferece uma gama de comandos de pós-exploração para escalonamento de privilégios, pivoteamento (usar uma máquina comprometida para atacar outras na rede interna), extração de credenciais, e muito mais. A integração do Metasploit com outras ferramentas, como o Nmap (para importar alvos) e o Burp Suite, também é fundamental.',
          recommendations: '- **Curso Gratuito:** "Metasploit Unleashed" da Offensive Security é o guia gratuito e oficial para aprender Metasploit.\n- **Máquina Virtual:** Baixe e pratique na "Metasploitable 2" ou "Metasploitable 3", que são máquinas virtuais intencionalmente vulneráveis, projetadas para praticar com o Metasploit.\n- **Comunidade:** A comunidade da Rapid7 (a empresa por trás do Metasploit) oferece muitos recursos e um fórum ativo.'
        }
    },
     {
        id: 'hydra',
        title: 'Hydra',
        category: 'Ferramentas Essenciais',
        subcategory: 'Pentest e Auditoria',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Uma ferramenta de quebra de senhas online extremamente rápida e flexível.',
        content: {
          concepts: 'O THC Hydra, ou simplesmente Hydra, é uma ferramenta de linha de comando para realizar ataques de força bruta contra serviços de autenticação. Ele suporta dezenas de protocolos, como FTP, SSH, Telnet, HTTP, SMB, RDP, e muitos outros. O objetivo é tentar adivinhar a senha de um usuário usando uma lista de senhas potenciais (wordlist). É uma ferramenta poderosa para testar a força das senhas em uma rede.',
          advanced: 'O uso avançado do Hydra envolve a otimização da velocidade do ataque (ajustando o número de tarefas paralelas), a utilização de listas de senhas inteligentes (como as da SecLists) e a combinação com outras ferramentas. Por exemplo, pode-se usar o Nmap para descobrir quais hosts têm a porta SSH aberta e, em seguida, alimentar essa lista no Hydra para tentar um ataque de força bruta em todos eles. É crucial entender que usar o Hydra contra sistemas sem permissão é ilegal.',
          recommendations: '- **Repositório:** O repositório oficial no GitHub é a melhor fonte para a versão mais recente e a documentação.\n- **Laboratórios:** Use o Hydra em ambientes de laboratório como Metasploitable ou em plataformas como Hack The Box para praticar de forma ética.\n- **Wordlists:** Estude o projeto SecLists no GitHub para ter acesso a uma vasta coleção de wordlists para todos os tipos de ataques.'
        }
    },
    {
        id: 'burp-suite',
        title: 'Burp Suite / OWASP ZAP',
        category: 'Ferramentas Essenciais',
        subcategory: 'Pentest e Auditoria',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Ferramentas essenciais para análise de segurança em aplicações web.',
        content: {
          concepts: 'Burp Suite (comercial, com uma edição gratuita) e OWASP ZAP (código aberto) são proxies de interceptação. Eles ficam entre o seu navegador e o servidor web, permitindo que você veja, modifique e analise todo o tráfego HTTP/S. Isso é fundamental para encontrar vulnerabilidades em aplicações web, como SQL Injection, Cross-Site Scripting (XSS) e outras falhas do OWASP Top 10. Ambos possuem scanners automáticos, mas seu verdadeiro poder está na interceptação e manipulação manual de requisições.',
          advanced: 'O uso avançado dessas ferramentas envolve a criação de extensões personalizadas (em Python ou Java para o Burp, ou scripts para o ZAP) para automatizar testes complexos e específicos. A integração com pipelines de CI/CD para realizar testes de segurança dinâmicos (DAST) automatizados é uma prática comum em DevSecOps. Técnicas avançadas incluem o uso do "Intruder" do Burp para realizar ataques de fuzzing sofisticados, a exploração de vulnerabilidades de deserialização e a automação de ataques a endpoints de API complexos.',
          recommendations: '- **Academia Online:** "PortSwigger Web Security Academy" (dos criadores do Burp Suite) é o melhor recurso online gratuito para aprender sobre segurança web e como usar o Burp para encontrar vulnerabilidades.\n- **Documentação:** A documentação do OWASP ZAP é muito completa e tem tutoriais para iniciantes.\n- **Vídeos:** Procure por tutoriais de "SQL Injection Burp" ou "XSS ZAP" no YouTube para ver demonstrações práticas.'
        }
    },
    {
        id: 'nikto',
        title: 'Nikto',
        category: 'Ferramentas Essenciais',
        subcategory: 'Pentest e Auditoria',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'Um scanner de vulnerabilidades web de código aberto rápido e eficiente.',
        content: {
          concepts: 'Nikto é um scanner de vulnerabilidades web que realiza testes abrangentes contra servidores web para múltiplos itens, incluindo mais de 6700 arquivos/programas potencialmente perigosos, verifica versões desatualizadas de mais de 1250 servidores e problemas específicos de versão em mais de 270 servidores. Ele também verifica itens de configuração do servidor, como a presença de múltiplos arquivos de índice, opções do servidor HTTP, e tentará identificar servidores web e softwares instalados. É uma ferramenta de reconhecimento rápida e barulhenta.',
          advanced: 'Nikto pode ser barulhento e gerar muitos falsos positivos, então o uso avançado envolve refinar a saída e entender o que é relevante. Ele pode ser integrado em scripts de pentest mais amplos. Por exemplo, você pode usar a saída do Nmap para identificar todos os servidores web em uma sub-rede e, em seguida, executar o Nikto contra cada um deles automaticamente. A atualização regular de seu banco de dados de plugins e a personalização de seus testes através de arquivos de configuração são essenciais para obter os melhores resultados.',
          recommendations: '- **Documentação:** O repositório oficial do Nikto no GitHub contém a documentação e as informações mais recentes.\n- **Combinação com Nmap:** Aprenda a usar o script `http-nikto.nse` do Nmap, que integra a funcionalidade do Nikto diretamente nos scans do Nmap.\n- **Cuidado:** Por ser uma ferramenta barulhenta, use o Nikto apenas em sistemas para os quais você tem permissão explícita para testar, pois ele pode easily acionar sistemas de detecção de intrusão (IDS).'
        }
    },
    {
        id: 'gpg-openssl',
        title: 'GPG / OpenSSL',
        category: 'Ferramentas Essenciais',
        subcategory: 'Criptografia e Segurança de Dados',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Os canivetes suíços da criptografia de linha de comando.',
        content: {
          concepts: '**GPG (GNU Privacy Guard)** é a implementação de código aberto do padrão OpenPGP e é usado principalmente para criptografar e assinar e-mails e arquivos. Ele usa criptografia assimétrica. **OpenSSL** é uma biblioteca de criptografia muito mais ampla. É a base para a maioria das implementações de TLS/SSL (HTTPS) na web. É usada para criar/gerenciar certificados digitais, criptografar/descriptografar arquivos com vários algoritmos e muito mais. São ferramentas de linha de comando essenciais para qualquer administrador de sistemas ou profissional de segurança.',
          advanced: 'O uso avançado do OpenSSL envolve a criação e o gerenciamento de sua própria Autoridade Certificadora (CA) para uso interno, a realização de testes de SSL/TLS em servidores (verificando cifras, protocolos e vulnerabilidades) e o uso de seus recursos de script para automação de tarefas criptográficas. Com o GPG, o uso avançado inclui a configuração de um "web of trust", a integração com gerenciadores de senhas e o uso de cartões inteligentes (smart cards) para armazenar chaves privadas de forma segura.',
          recommendations: '- **Man Pages:** A documentação de linha de comando (`man openssl`, `man gpg`) é a fonte primária de informação.\n- **Folha de Dicas:** Procure por "OpenSSL Cheat Sheet". Há muitos guias excelentes que mostram comandos para tarefas comuns.\n- **Livro:** "Network Security with OpenSSL" de John Viega, Matt Messier e Pravir Chandra, embora antigo, ainda oferece uma base sólida.'
        }
    },
    {
        id: 'veracrypt',
        title: 'VeraCrypt',
        category: 'Ferramentas Essenciais',
        subcategory: 'Criptografia e Segurança de Dados',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'Criptografia de disco on-the-fly para Windows, macOS e Linux.',
        content: {
          concepts: 'VeraCrypt é um software gratuito e de código aberto para criptografia de disco. Ele pode criptografar uma partição inteira, o disco de sistema do Windows ou criar um "container" criptografado (um arquivo que funciona como um disco virtual). Uma vez montado com a senha correta, o disco ou container se torna acessível como qualquer outra unidade, e a criptografia e descriptografia são feitas em tempo real (on-the-fly) de forma transparente para o usuário. É um fork do descontinuado TrueCrypt.',
          advanced: 'VeraCrypt possui recursos avançados de segurança, como a criação de **volumes ocultos**. Isso é uma forma de negação plausível: você cria um volume VeraCrypt dentro de outro volume VeraCrypt. Você tem duas senhas; uma abre o volume externo (com dados isca) e a outra abre o volume oculto (com os dados sensíveis). Se for forçado a revelar a senha, você pode fornecer a do volume externo sem revelar a existência do volume oculto. Outro recurso é a **criptografia em cascata**, que usa múltiplos algoritmos de criptografia em sequência.',
          recommendations: '- **Documentação Oficial:** O site do VeraCrypt tem uma documentação excelente e tutoriais passo a passo.\n- **Auditorias de Segurança:** Leia sobre as auditorias de segurança que foram realizadas no código do VeraCrypt para entender seus pontos fortes.\n- **Prática:** Crie um container de arquivo, coloque alguns dados nele e pratique montá-lo e desmontá-lo. Em seguida, tente criar um volume oculto para entender o conceito.'
        }
    },
    {
        id: 'password-managers',
        title: 'KeePassXC / Bitwarden',
        category: 'Ferramentas Essenciais',
        subcategory: 'Criptografia e Segurança de Dados',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'Gerenciadores de senhas para proteger sua vida digital.',
        content: {
          concepts: 'Gerenciadores de senhas são ferramentas cruciais para a segurança pessoal e corporativa. Eles criam e armazenam senhas longas, aleatórias e únicas para cada serviço que você usa, tudo protegido por uma única senha mestra forte. **KeePassXC** é uma solução de código aberto onde o banco de dados de senhas é um arquivo local que você controla e pode sincronizar via Dropbox, Google Drive, etc. **Bitwarden** é uma solução de código aberto que oferece sincronização na nuvem (com a opção de auto-hospedagem), facilitando o acesso em múltiplos dispositivos.',
          advanced: 'O uso avançado dessas ferramentas inclui o armazenamento de mais do que apenas senhas: chaves de autenticação de dois fatores (2FA/TOTP), chaves SSH, notas seguras e identidades digitais. O Bitwarden permite o compartilhamento seguro de senhas entre membros de uma família ou equipe através de "organizações". Usuários avançados do KeePassXC utilizam plugins para estender sua funcionalidade, como a integração com navegadores ou a verificação de senhas comprometidas. A auto-hospedagem do Bitwarden (usando Vaultwarden, uma implementação em Rust) oferece controle total sobre os dados.',
          recommendations: '- **Segurança Pessoal:** Adote um gerenciador de senhas para sua própria vida digital imediatamente. É a melhoria de segurança mais impactante que uma pessoa pode fazer.\n- **Comparativos:** Assista a vídeos e leia artigos que comparam as funcionalidades do KeePassXC, Bitwarden, 1Password e outros para escolher o que melhor se adapta a você.\n- **Autenticação de Dois Fatores (2FA):** Ative a 2FA em todos os serviços que a suportam, e armazene os códigos TOTP em seu gerenciador de senhas para máxima conveniência e segurança.'
        }
    },
    {
        id: 'forensic-analysis',
        title: 'Autopsy / FTK Imager',
        category: 'Ferramentas Essenciais',
        subcategory: 'Análise de Malware e Forense',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Ferramentas para análise forense digital e aquisição de imagens de disco.',
        content: {
          concepts: 'Na forense digital, o primeiro passo é criar uma cópia bit a bit exata do disco original, chamada de imagem forense. **FTK Imager** é uma ferramenta gratuita amplamente utilizada para criar essas imagens sem alterar o disco original. **Autopsy** é uma plataforma de forense digital de código aberto que analisa essas imagens. Ele pode recuperar arquivos deletados, analisar a linha do tempo de atividades do usuário, extrair metadados de arquivos, pesquisar por palavras-chave e muito mais. É uma interface gráfica para as ferramentas do The Sleuth Kit.',
          advanced: 'A análise forense avançada com Autopsy envolve o desenvolvimento de módulos de ingestão personalizados em Python para analisar tipos de artefatos específicos ou não padronizados. A correlação de dados de múltiplas fontes (imagens de disco, logs de rede, análise de memória) é crucial para reconstruir um incidente. Entender os sistemas de arquivos em um nível profundo (como NTFS, ext4) permite a recuperação manual de dados que as ferramentas automatizadas podem perder. A análise de artefatos do sistema operacional, como o Registro do Windows, Shadow Copies e logs de eventos, é fundamental.',
          recommendations: '- **Treinamento:** A SANS (SysAdmin, Audit, Network and Security) oferece os melhores cursos de forense do mundo (ex: FOR500, FOR508), embora sejam caros.\n- **CTFs de Forense:** Participe de competições de Capture The Flag (CTF) focadas em forense para praticar suas habilidades em cenários realistas.\n- **Recursos Online:** O site "AboutDFIR" (Digital Forensics and Incident Response) é um excelente agregador de recursos, blogs e ferramentas da área.'
        }
    },
    {
        id: 'memory-analysis',
        title: 'Volatility',
        category: 'Ferramentas Essenciais',
        subcategory: 'Análise de Malware e Forense',
        type: 'Ferramenta',
        level: 'Avançado',
        description: 'O framework padrão para análise de despejos de memória RAM.',
        content: {
          concepts: 'A análise de memória é crucial porque muitos malwares modernos tentam operar apenas na RAM para evitar a detecção em disco. Volatility é um framework de código aberto que analisa despejos de memória (dumps de RAM) de sistemas Windows, Linux e macOS. Ele pode revelar processos em execução (mesmo os ocultos), conexões de rede ativas, DLLs injetadas, comandos digitados e extrair chaves de criptografia e senhas diretamente da memória.',
          advanced: 'Volatility 3 (a versão mais recente) é escrito em Python 3 e tem uma arquitetura mais modular. O uso avançado envolve a escrita de plugins personalizados para encontrar artefatos específicos de um malware ou aplicação. A combinação da análise de memória com a análise de disco e de rede fornece uma imagem completa de um incidente. Por exemplo, a análise de memória pode revelar um processo malicioso, e a análise de rede pode mostrar para onde ele estava se comunicando, enquanto a análise de disco pode revelar como ele obteve persistência no sistema.',
          recommendations: '- **Livro:** "The Art of Memory Forensics: Detecting Malware and Threats in Windows, Linux, and Mac Memory" é o guia definitivo sobre o assunto.\n- **Treinamento:** A própria equipe do Volatility oferece treinamentos.\n- **Amostras de Memória:** O "Memory Samples Wiki" no repositório do Volatility no GitHub oferece muitos despejos de memória para você praticar a análise.'
        }
    },
    {
        id: 'virustotal',
        title: 'VirusTotal',
        category: 'Ferramentas Essenciais',
        subcategory: 'Análise de Malware e Forense',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'Verifique arquivos e URLs suspeitas com dezenas de antivírus.',
        content: {
          concepts: 'VirusTotal é um serviço online gratuito (propriedade do Google) que analisa arquivos e URLs. Quando você envia um arquivo, ele é escaneado por mais de 70 scanners de antivírus e serviços de blocklist. Isso não substitui um antivírus local, mas é uma ferramenta poderosa para obter uma "segunda opinião" sobre um arquivo suspeito ou verificar a segurança de um link antes de clicar. Ele também fornece uma riqueza de informações adicionais sobre o arquivo, como seu hash, metadados e comportamento.',
          advanced: 'O poder do VirusTotal para profissionais está em sua API e nos recursos do VirusTotal Intelligence (uma assinatura paga). A API permite a automação de análises de arquivos em larga escala. O VirusTotal Intelligence permite a busca por amostras de malware com base em regras YARA, similaridades, comportamento e outros indicadores. Isso permite que caçadores de ameaças (threat hunters) encontrem novas amostras de malware, rastreiem campanhas de atacantes e entendam o cenário de ameaças de forma proativa.',
          recommendations: '- **Use com Cuidado:** Nunca envie arquivos que contenham informações pessoais ou confidenciais para o VirusTotal, pois os dados são compartilhados com parceiros de segurança.\n- **Explore a Interface:** Ao analisar um arquivo, não olhe apenas para o número de detecções. Explore as abas "Details", "Relations" e "Behavior" para obter um contexto muito mais rico.\n- **Regras YARA:** Aprenda a escrever regras YARA, uma linguagem para criar descrições de famílias de malware. Você pode testar suas regras no VirusTotal.'
        }
    },
    {
        id: 'aws-security',
        title: 'AWS Inspector / GuardDuty',
        category: 'Ferramentas Essenciais',
        subcategory: 'Segurança em Nuvem',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Ferramentas de segurança nativas da AWS para proteger sua infraestrutura.',
        content: {
          concepts: '**AWS Inspector** é um serviço de gerenciamento de vulnerabilidades que varre continuamente suas cargas de trabalho na AWS (como instâncias EC2 e imagens de contêiner) em busca de vulnerabilidades de software e exposição não intencional à rede. **AWS GuardDuty** é um serviço de detecção de ameaças que monitora continuamente sua conta e cargas de trabalho AWS em busca de atividades maliciosas. Ele usa inteligência de ameaças e machine learning para identificar atividades anômalas, como instâncias se comunicando com servidores de comando e controle conhecidos ou mineração de criptomoedas.',
          advanced: 'A segurança na nuvem é sobre automação. O uso avançado dessas ferramentas envolve integrá-las com o AWS Security Hub para centralizar todos os alertas de segurança. Em seguida, use o Amazon EventBridge para acionar respostas automáticas a descobertas específicas do GuardDuty ou do Inspector. Por exemplo, uma descoberta do GuardDuty de que uma instância EC2 está se comunicando com um IP malicioso pode acionar automaticamente uma função Lambda que isola a instância, modificando seu grupo de segurança.',
          recommendations: '- **Documentação da AWS:** A AWS tem uma documentação extensa e tutoriais para todos os seus serviços de segurança.\n- **Cursos:** A AWS oferece treinamentos e certificações específicas em segurança, como a "AWS Certified Security - Specialty".\n- **Workshops:** O "AWS Well-Architected Labs" oferece workshops práticos e gratuitos, incluindo muitos sobre segurança.'
        }
    },
    {
        id: 'azure-security',
        title: 'Microsoft Defender for Cloud',
        category: 'Ferramentas Essenciais',
        subcategory: 'Segurança em Nuvem',
        type: 'Ferramenta',
        level: 'Intermediário',
        description: 'Proteção unificada de infraestrutura e gerenciamento de segurança na nuvem da Microsoft.',
        content: {
          concepts: 'O Microsoft Defender for Cloud (anteriormente Azure Security Center e Azure Defender) é uma plataforma unificada para gerenciamento da postura de segurança na nuvem (CSPM) e proteção de cargas de trabalho na nuvem (CWP). Ele fornece recomendações de segurança para fortalecer sua postura no Azure (e em outras nuvens como AWS e GCP), avalia a conformidade com frameworks regulatórios e oferece proteção contra ameaças para servidores, bancos de dados, contêineres e outros recursos.',
          advanced: 'Assim como na AWS, a automação é fundamental. O Defender for Cloud se integra com o Microsoft Sentinel (o SIEM/SOAR da Microsoft) e com o Azure Logic Apps para orquestrar respostas automatizadas a alertas de segurança. O uso avançado envolve a criação de playbooks de automação que podem, por exemplo, aplicar automaticamente uma recomendação de segurança a todos os novos recursos ou iniciar uma investigação de forense quando um alerta de alta severidade é gerado.',
          recommendations: '- **Microsoft Learn:** A plataforma de aprendizado da Microsoft tem trilhas de estudo e laboratórios práticos gratuitos focados em segurança no Azure.\n- **Certificações:** A Microsoft oferece várias certificações de segurança, como a "AZ-500: Microsoft Azure Security Technologies".\n- **Documentação:** A documentação oficial da Microsoft é o melhor lugar para entender a fundo todos os recursos do Defender for Cloud e do Sentinel.'
        }
    },
    {
        id: 'cloudflare-waf',
        title: 'Cloudflare / WAFs',
        category: 'Ferramentas Essenciais',
        subcategory: 'Segurança em Nuvem',
        type: 'Ferramenta',
        level: 'Iniciante',
        description: 'Proteja suas aplicações web contra ataques comuns e DDoS.',
        content: {
          concepts: 'Um **WAF (Web Application Firewall)** atua como um escudo para sua aplicação web. Ele fica na frente do seu servidor e inspeciona o tráfego HTTP/S, bloqueando requisições maliciosas, como tentativas de SQL Injection, Cross-Site Scripting (XSS) e outros ataques do OWASP Top 10. **Cloudflare** é um dos serviços mais populares que oferece um WAF, além de mitigação de DDoS, CDN (Content Delivery Network) e outros serviços de segurança e desempenho. Ele funciona como um proxy reverso para o seu site.',
          advanced: 'O gerenciamento avançado de um WAF envolve a sintonia fina das regras para evitar falsos positivos (bloquear tráfego legítimo) e falsos negativos (permitir tráfego malicioso). Isso geralmente significa ir além dos conjuntos de regras gerenciadas e escrever regras personalizadas específicas para a lógica da sua aplicação. A análise dos logs do WAF é crucial para entender os tipos de ataques que sua aplicação está sofrendo e para identificar novas ameaças. A limitação de taxa (rate limiting) e a proteção avançada contra bots são outros recursos importantes para configurar.',
          recommendations: '- **Blog da Cloudflare:** O blog da Cloudflare é uma fonte incrível de informações sobre segurança na web, tendências de ataques e novas tecnologias.\n- **OWASP ModSecurity Core Rule Set (CRS):** Se você quiser rodar seu próprio WAF (usando ModSecurity), estude o CRS. É o conjunto de regras de código aberto mais popular e ver seus padrões ajuda a entender como os WAFs funcionam.\n- **Plano Gratuito:** Experimente o plano gratuito da Cloudflare em um de seus projetos pessoais para ver como é fácil de configurar e quais proteções ele oferece por padrão.'
        }
    },
    // Outros Conhecimentos
    {
      id: 'network-protocols',
      title: 'Redes e Protocolos',
      category: 'Outros Conhecimentos',
      subcategory: 'Redes e Protocolos',
      type: 'Artigo',
      level: 'Iniciante',
      description: 'Entenda os protocolos que fazem a internet funcionar, como TCP/IP, DNS, e HTTP/S, e conceitos como Firewalls e VPNs.',
      content: {
        concepts: '**TCP/IP** é o conjunto de protocolos de comunicação fundamental da internet. O **TCP** garante a entrega ordenada e confiável dos pacotes, enquanto o **IP** cuida do endereçamento e roteamento. **DNS (Domain Name System)** é a "lista telefônica" da internet, traduzindo nomes de domínio (como google.com) para endereços IP. **HTTP/S** é o protocolo para transferência de dados na web; o "S" indica uma camada de segurança (TLS/SSL). **Firewalls** são barreiras que controlam o tráfego de rede com base em regras. **VPNs (Virtual Private Networks)** criam um "túnel" seguro sobre uma rede pública, protegendo sua privacidade.',
        advanced: 'O entendimento avançado envolve analisar cabeçalhos de pacotes para depuração e segurança. Por exemplo, entender as flags do TCP (SYN, ACK, FIN, RST) é crucial para diagnosticar problemas de conexão e identificar scans de rede. O **DNSSEC** é uma extensão do DNS que fornece autenticação da origem dos dados, prevenindo ataques de envenenamento de cache. O **HTTP/2 e HTTP/3** trazem melhorias de desempenho e segurança sobre o HTTP/1.1. A configuração avançada de firewalls envolve **Stateful Packet Inspection (SPI)** e **Deep Packet Inspection (DPI)** para uma análise mais profunda do tráfego.',
        recommendations: '- **Curso:** "The Bits and Bytes of Computer Networking" do Google no Coursera é uma excelente introdução.\n- **Livro:** "Redes de Computadores" de Andrew S. Tanenbaum é um clássico acadêmico completo.\n- **RFCs:** Para mergulhar fundo, leia as RFCs (Request for Comments) dos protocolos, como a RFC 793 para o TCP e a RFC 2616 para o HTTP/1.1.'
      }
    },
    {
      id: 'compliance-frameworks',
      title: 'Políticas e Conformidade (Compliance)',
      category: 'Outros Conhecimentos',
      subcategory: 'Políticas e Conformidade',
      type: 'Artigo',
      level: 'Intermediário',
      description: 'Conheça os principais frameworks e regulamentações de segurança, como LGPD, GDPR, ISO 27001 e NIST.',
      content: {
        concepts: 'Compliance não é o mesmo que segurança, mas está relacionado. É o ato de aderir a leis, regulamentos e padrões. **LGPD (Lei Geral de Proteção de Dados)** no Brasil e **GDPR (General Data Protection Regulation)** na Europa são leis que regulam como as empresas coletam, usam e protegem dados pessoais. **ISO/IEC 27001** é um padrão internacional para sistemas de gestão de segurança da informação (SGSI). O **NIST Cybersecurity Framework** é um guia de melhores práticas do governo dos EUA para gerenciar riscos de cibersegurança. **PCI-DSS** é um padrão de segurança obrigatório para empresas que processam transações de cartão de crédito.',
        advanced: 'A implementação prática desses frameworks é um desafio. Envolve a realização de uma análise de risco completa, a criação de um catálogo de controles de segurança, a documentação de políticas e procedimentos e a realização de auditorias internas e externas. A automação da verificação de conformidade usando ferramentas de **Cloud Security Posture Management (CSPM)** é uma prática avançada em ambientes de nuvem. Entender como mapear os controles de um framework para outro (por exemplo, como os controles do NIST CSF ajudam a atender aos requisitos da LGPD) é uma habilidade valiosa.',
        recommendations: '- **Sites Oficiais:** Visite os sites do NIST, da ISO e das autoridades de proteção de dados locais para ler os documentos originais.\n- **Blogs:** Blogs de empresas de consultoria em segurança e GRC (Governança, Risco e Conformidade) frequentemente publicam guias e análises sobre esses frameworks.\n- **Certificações:** Certificações como a "Certified in Risk and Information Systems Control" (CRISC) da ISACA são focadas nesta área.'
      }
    },
    {
      id: 'operating-systems-security',
      title: 'Segurança em Sistemas Operacionais',
      category: 'Outros Conhecimentos',
      subcategory: 'Sistemas Operacionais',
      type: 'Artigo',
      level: 'Iniciante',
      description: 'Aprenda os fundamentos de segurança para Linux e Windows.',
      content: {
        concepts: 'Tanto **Linux** quanto **Windows** têm mecanismos de segurança fundamentais. No Linux, a segurança é baseada em **permissões de arquivo** (leitura, escrita, execução para usuário, grupo e outros) e no conceito de superusuário (root). A administração é feita principalmente via **linha de comando (bash)** e os logs são centralizados no diretório `/var/log`. No Windows, a segurança é gerenciada através de **Contas de Usuário**, **Group Policies (GPO)** em ambientes de domínio (Active Directory) e o log de eventos é visualizado pelo **Event Viewer**. O **PowerShell** é a ferramenta de linha de comando moderna para automação e administração.',
        advanced: 'A segurança avançada em Linux envolve o uso de módulos de segurança como **SELinux** ou **AppArmor**, que aplicam políticas de controle de acesso obrigatório (MAC), restringindo o que até mesmo o root pode fazer. Em Windows, o **Active Directory** é um alvo comum, e técnicas de defesa incluem a implementação de tiers de administração, o monitoramento de ataques como Kerberoasting e a proteção contra movimentação lateral. O uso de **Sysmon** (System Monitor) da Sysinternals Suite fornece uma telemetria de segurança muito mais rica do que os logs de eventos padrão do Windows.',
        recommendations: '- **Linux:** Pratique em uma máquina virtual com Debian ou Ubuntu. Aprenda a usar comandos como `chmod`, `chown`, `sudo` e a navegar no sistema de arquivos.\n- **Windows:** Se possível, crie um pequeno laboratório com um Controlador de Domínio do Active Directory para experimentar GPOs e gerenciamento de usuários.\n- **Livro:** "Linux Basics for Hackers" por OccupyTheWeb é um bom ponto de partida prático.'
      }
    },
    {
      id: 'log-analysis',
      title: 'Análise de Logs',
      category: 'Outros Conhecimentos',
      subcategory: 'Análise de Logs',
      type: 'Artigo',
      level: 'Intermediário',
      description: 'Aprenda a arte de extrair inteligência de segurança de logs de sistemas e aplicações.',
      content: {
        concepts: 'Logs são registros de eventos que ocorreram em um sistema. A análise de logs é a prática de revisar esses registros para solucionar problemas e investigar incidentes de segurança. No Linux, os logs são comumente gerenciados pelo **syslog** ou, em sistemas modernos, pelo **journald** (parte do systemd). No Windows, o **Event Viewer** é a ferramenta central para visualizar logs de sistema, segurança e aplicação. Uma habilidade essencial para analisar logs de texto é o uso de **Expressões Regulares (regex)**, um padrão de busca poderoso para encontrar informações específicas.',
        advanced: 'A análise manual de logs é inviável em grande escala. Por isso, a prática avançada envolve centralizar os logs de múltiplas fontes em um sistema **SIEM** (como Splunk ou ELK Stack). Nesses sistemas, você pode criar regras de correlação que alertam sobre eventos suspeitos que ocorrem em diferentes sistemas ao mesmo tempo. Aprender linguagens de consulta específicas desses sistemas (como a SPL do Splunk) é fundamental. A análise de logs de servidores web, firewalls, proxies e DNS é crucial para detectar os primeiros sinais de um ataque.',
        recommendations: '- **Regex:** Sites como "regex101.com" e "regexr.com" são excelentes para aprender e testar expressões regulares de forma interativa.\n- **Desafios:** Participe de desafios de CTF que tenham categorias de análise de logs ou forense para praticar com dados do mundo real.\n- **Laboratório:** Configure um servidor syslog (como o rsyslog) em um Linux e configure outros sistemas (Windows, com um agente) para enviar seus logs para ele. Tente encontrar eventos específicos usando `grep` e regex.'
      }
    }
];

export type CareerPath = {
  id: string;
  title: string;
  description: string;
  icon: string;
  stages: {
    title: string;
    duration: string;
    objective?: string;
    topics: {
      title: string;
      description: string;
      resourceId?: string;
    }[];
    recommendations?: {
      title: string;
      description: string;
    }[];
  }[];
  specializations?: {
    title: string;
    duration: string;
    objective: string;
    tracks: {
        id: string;
        title: string;
        icon: string;
        duration: string;
        focus: string;
        topics: string[];
        recommendations: string[];
    }[];
  }[];
  consolidation?: {
     title: string;
     duration: string;
     items: string[];
  }[];
};

export const careerPaths: CareerPath[] = [
  {
    id: "offensive-security",
    title: "Segurança Ofensiva (Red Team)",
    description: "Especialistas em simular ataques para encontrar e explorar vulnerabilidades, testando as defesas da organização.",
    icon: "Target",
    stages: [
        {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de Pentest",
            duration: "3 Meses",
            objective: "Aprender a explorar sistemas e aplicações de forma controlada.",
            topics: [
              { title: "Kali Linux", description: "Estudo aprofundado da principal distro de pentest.", resourceId: "kali-linux" },
              { title: "Ferramentas Avançadas", description: "Nmap, Burp Suite, Metasploit, Nikto.", resourceId: "metasploit" },
              { title: "OWASP Top 10", description: "Foco nas principais vulnerabilidades web.", resourceId: "burp-suite" },
              { title: "Exploração de Aplicações e Redes", description: "Técnicas de invasão e pivoteamento." }
            ],
            recommendations: [
              { title: "Curso", description: "TryHackMe 'Pre Security + Pentest Path'" },
              { title: "Prática", description: "Hack The Box / CTFs" },
              { title: "Livro", description: "“The Web Application Hacker’s Handbook”" },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a OSCP ou CEH." },
              { title: "Prática Contínua", description: "Aprofunde-se em laboratórios e desafios simulados." },
              { title: "Construção de Portfólio", description: "Documente seus projetos e aprendizados no GitHub, blog, etc." },
            ]
        }
    ]
  },
  {
    id: "defensive-security",
    title: "Segurança Defensiva (Blue Team)",
    description: "Os guardiões da rede, focados em detecção, resposta a incidentes e defesa proativa dos sistemas.",
    icon: "Shield",
    stages: [
       {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de Defesa",
            duration: "3 Meses",
            objective: "Aprender a monitorar, detectar e proteger os ativos da organização.",
             topics: [
              { title: "SIEM", description: "Estudo de ferramentas como Splunk e Wazuh.", resourceId: "siem" },
              { title: "IDS/IPS", description: "Análise de sistemas como Snort e Suricata." },
              { title: "Análise de Logs", description: "Coleta e interpretação de logs de diversas fontes.", resourceId: "log-analysis" },
              { title: "Resposta a Incidentes", description: "Processos de contenção, erradicação e recuperação." }
            ],
            recommendations: [
              { title: "Curso", description: "TryHackMe 'Cyber Defense Path'" },
              { title: "Simuladores", description: "Blue Team Labs Online, LetsDefend" },
              { title: "Framework", description: "Estude o framework MITRE ATT&CK para entender táticas de adversários." },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para CompTIA CySA+ ou Blue Team Level 1." },
              { title: "Automação", description: "Aprenda a criar playbooks de segurança com SOAR." },
              { title: "Threat Hunting", description: "Desenvolva a habilidade de caçar ameaças proativamente." },
            ]
        }
    ]
  },
  {
    id: "digital-forensics",
    title: "Forense Digital",
    description: "O detetive digital, focado na investigação de crimes cibernéticos e na análise de evidências digitais.",
    icon: "Microscope",
    stages: [
       {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha Forense",
            duration: "3 Meses",
            objective: "Dominar a coleta, preservação e análise de evidências digitais.",
             topics: [
              { title: "Coleta e Preservação", description: "Técnicas de aquisição de dados voláteis e não voláteis." },
              { title: "Análise de Disco", description: "Uso de ferramentas como FTK Imager e Autopsy.", resourceId: "forensic-analysis" },
              { title: "Análise de Memória", description: "Uso do framework Volatility para extrair artefatos da RAM.", resourceId: "memory-analysis" },
              { title: "Sistemas de Arquivos", description: "Estudo aprofundado de NTFS, ext4, APFS." }
            ],
            recommendations: [
              { title: "Curso", description: "TryHackMe 'Digital Forensics and Incident Response Path'" },
              { title: "Livro", description: "“Guide to Computer Forensics and Investigations”" },
              { title: "Prática", description: "Casos simulados em DFIR.training" },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a GCFE, GCFA ou CHFI." },
              { title: "Análise de Malware", description: "Combine forense com análise básica de malware." },
              { title: "Relatórios Técnicos", description: "Aprenda a documentar suas descobertas de forma clara e legalmente defensável." },
            ]
        }
    ]
  },
  {
    id: "grc",
    title: "Gestão de Segurança / GRC",
    description: "O estrategista, focado em políticas, governança, risco e conformidade (compliance).",
    icon: "Scale",
    stages: [
       {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de GRC",
            duration: "3 Meses",
            objective: "Entender como alinhar a segurança com os objetivos de negócio e as leis.",
             topics: [
              { title: "Frameworks de Segurança", description: "Estudo aprofundado da ISO/IEC 27001 e do NIST Framework.", resourceId: "compliance-frameworks" },
              { title: "Leis de Privacidade", description: "Foco em LGPD e GDPR.", resourceId: "compliance-frameworks" },
              { title: "Gestão de Riscos", description: "Metodologias de avaliação e tratamento de riscos." },
              { title: "Políticas de Segurança", description: "Criação e implementação de políticas e procedimentos." }
            ],
            recommendations: [
              { title: "Curso", description: "“Introdução à Segurança da Informação” (ENAP / Escola Virtual Gov)" },
              { title: "Guias", description: "Guias sobre LGPD e ISO 27001 no YouTube e blogs." },
              { title: "Leitura", description: "Documentos oficiais do NIST e da ISO." },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a ISO 27001 Lead Implementer, EXIN Privacy & Data Protection, ou CRISC." },
              { title: "Auditoria Interna", description: "Aprenda a planejar e executar auditorias de conformidade." },
              { title: "Comunicação Executiva", description: "Desenvolva a habilidade de comunicar riscos e estratégias para a liderança." },
            ]
        }
    ]
  },
  {
    id: "cloud-security",
    title: "Segurança em Nuvem",
    description: "Especialista em proteger dados e infraestrutura em ambientes de nuvem como AWS, Azure e Google Cloud.",
    icon: "CloudCog",
    stages: [
        {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de Nuvem",
            duration: "3 Meses",
            objective: "Aprender as particularidades da segurança em ambientes de nuvem.",
             topics: [
              { title: "Conceitos de Nuvem", description: "IaaS, PaaS, SaaS e Modelo de Responsabilidade Compartilhada." },
              { title: "IAM (Identity and Access Management)", description: "Políticas, roles e privilégio mínimo na nuvem.", resourceId: "aws-security" },
              { title: "Segurança de Rede na Nuvem", description: "VPC, Security Groups, WAFs.", resourceId: "cloudflare-waf" },
              { title: "Ferramentas Nativas", description: "Estudo de AWS GuardDuty, Azure Defender, etc.", resourceId: "azure-security" }
            ],
            recommendations: [
              { title: "Curso", description: "AWS Cloud Practitioner + Segurança em Cloud (DIO, AWS Academy)" },
              { title: "Prática", description: "TryHackMe 'Cloud Fundamentals Path'" },
              { title: "Laboratórios", description: "Use o AWS Free Tier para criar e proteger recursos." },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a AWS/Azure Security Specialty ou CCSP." },
              { title: "Infraestrutura como Código (IaC)", description: "Aprenda Terraform para automação segura." },
              { title: "Segurança de Contêineres", description: "Proteção de Docker e Kubernetes na nuvem." },
            ]
        }
    ]
  },
  {
    id: "appsec",
    title: "DevSecOps / Segurança de Aplicações",
    description: "Foco em integrar a segurança em todo o ciclo de vida de desenvolvimento de software (SDLC).",
    icon: "GitBranch",
    stages: [
        {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha AppSec",
            duration: "3 Meses",
            objective: "Aprender a encontrar e corrigir falhas de segurança no código e na infraestrutura.",
             topics: [
              { title: "Tipos de Testes de Segurança", description: "SAST, DAST, IAST e Análise de Composição de Software (SCA)." },
              { title: "Ferramentas de CI/CD", description: "SonarQube, OWASP ZAP, GitHub Actions.", resourceId: "burp-suite" },
              { title: "Segurança de Contêineres", description: "Análise de imagens Docker e segurança em Kubernetes." },
              { title: "Modelagem de Ameaças", description: "Processo para identificar ameaças no design de uma aplicação." }
            ],
            recommendations: [
              { title: "Curso", description: "“DevSecOps Essentials” (Udemy, DIO)" },
              { title: "Leitura", description: "OWASP Top 10 e OWASP ASVS (Application Security Verification Standard)." },
              { title: "Repositórios", description: "Explore projetos de segurança em CI/CD no GitHub." },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Considere certificações como a GWEB ou CASE." },
              { title: "Cultura de Segurança", description: "Aprenda a promover uma cultura de segurança entre os desenvolvedores." },
              { title: "Automação de Segurança", description: "Crie pipelines de CI/CD seguros e eficientes." },
            ]
        }
    ]
  },
   {
    id: "malware-analysis",
    title: "Análise de Malware",
    description: "Especialista em engenharia reversa de softwares maliciosos para entender seu funcionamento.",
    icon: "Binary",
    stages: [
       {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de Análise de Malware",
            duration: "3 Meses",
            objective: "Aprender a dissecar e entender o comportamento de amostras maliciosas.",
             topics: [
              { title: "Análise Estática vs. Dinâmica", description: "Diferenças e quando usar cada abordagem." },
              { title: "Ambiente de Análise (Sandbox)", description: "Criação de um laboratório seguro para executar malware." },
              { title: "Engenharia Reversa", description: "Uso de ferramentas como Ghidra, IDA Pro, x64dbg." },
              { title: "Análise de Comportamento", description: "Monitoramento de rede, sistema de arquivos e registro." }
            ],
            recommendations: [
              { title: "Curso", description: "TryHackMe 'Malware Analysis Path'" },
              { title: "Livro", description: "“Practical Malware Analysis”" },
              { title: "Amostras", description: "Use fontes como o MalwareBazaar para obter amostras para análise." },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a GREM ou CREA." },
              { title: "Desofuscação", description: "Aprenda técnicas para reverter a ofuscação de código." },
              { title: "Criação de Assinaturas", description: "Escreva regras YARA e assinaturas de rede para detectar o malware analisado." },
            ]
        }
    ]
  },
  {
    id: "threat-intelligence",
    title: "Threat Intelligence",
    description: "O analista de inteligência, focado na coleta e análise de informações sobre ameaças cibernéticas.",
    icon: "TestTube2",
    stages: [
        {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de Inteligência",
            duration: "3 Meses",
            objective: "Aprender a coletar, processar e analisar dados para produzir inteligência acionável.",
             topics: [
              { title: "Fontes OSINT", description: "Uso de Shodan, VirusTotal, ThreatFox, etc.", resourceId: "virustotal" },
              { title: "Indicadores de Comprometimento (IOCs)", description: "Análise de IPs, hashes, domínios maliciosos." },
              { title: "Frameworks de Inteligência", description: "Estudo de STIX/TAXII e MITRE ATT&CK." },
              { title: "Ciclo de Inteligência", description: "Direção, Coleta, Processamento, Análise, Disseminação, Feedback." }
            ],
            recommendations: [
              { title: "Curso", description: "TryHackMe 'Threat Intelligence Path' ou curso da SANS (talks gratuitos)." },
              { title: "Ferramentas", description: "Explore plataformas como MISP e The Hive." },
              { title: "Leitura", description: "Blogs de empresas de Threat Intelligence (Mandiant, CrowdStrike)." },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a GCTI ou CTIA." },
              { title: "Análise de Atores de Ameaça", description: "Rastreamento de grupos APT e suas táticas." },
              { title: "Relatórios de Inteligência", description: "Aprenda a escrever relatórios claros para diferentes públicos (técnico, executivo)." },
            ]
        }
    ]
  },
  {
    id: "audit",
    title: "Auditoria de Sistemas",
    description: "Responsável pela verificação e validação dos controles de segurança para garantir a conformidade.",
    icon: "Files",
    stages: [
       {
            title: "FASE 1 – Fundamentos da Cibersegurança",
            duration: "2 Meses",
            objective: "Construir base sólida comum a todas as áreas.",
            topics: [
                { title: "Redes de computadores", description: "TCP/IP, DNS, HTTP, etc.", resourceId: "network-protocols" },
                { title: "Conceitos CIA", description: "Confidencialidade, Integridade, Disponibilidade.", resourceId: "cia-triad"},
                { title: "Sistemas operacionais", description: "Linux + Windows básico.", resourceId: "operating-systems-security"},
                { title: "Introdução à criptografia", description: "Chaves, cifras e hashes.", resourceId: "cryptography"},
                { title: "Tipos de ameaças", description: "Malwares, phishing, DDoS.", resourceId: "threat-types"},
                { title: "Ferramentas básicas", description: "Nmap, Wireshark", resourceId: "nmap"},
            ],
            recommendations: [
                 { title: "Curso", description: "“Fundamentos de Cibersegurança” (Cisco, gratuito)" },
                 { title: "Labs Interativos", description: "TryHackMe (Free Rooms: “Introduction to Cyber Security”)" },
            ]
        },
        {
            title: "FASE 2 – Trilha de Auditoria",
            duration: "3 Meses",
            objective: "Aprender a avaliar a eficácia dos controles de segurança e a conformidade com as políticas.",
             topics: [
              { title: "Frameworks de Auditoria", description: "Estudo de COBIT e outros padrões relevantes." },
              { title: "Técnicas de Entrevista e Coleta de Evidências", description: "Como interagir com equipes e coletar provas." },
              { title: "Testes de Controles", description: "Validação de controles de acesso, backups, etc." },
              { title: "Análise de Políticas", description: "Verificação se as políticas escritas são aplicadas na prática.", resourceId: "compliance-frameworks" }
            ],
            recommendations: [
              { title: "Curso", description: "Busque cursos de Auditoria de TI da ISACA ou Udemy." },
              { title: "Leitura", description: "Guias da ISACA (Information Systems Audit and Control Association)." },
              { title: "Frameworks", description: "Aprofunde-se no NIST Cybersecurity Framework e na ISO 27001.", resourceId: "compliance-frameworks" },
            ]
        },
        {
            title: "FASE 3 – Consolidação e Certificações",
            duration: "6 Meses",
            topics: [
              { title: "Certificação Alvo", description: "Prepare-se para a CISA (Certified Information Systems Auditor)." },
              { title: "Automação de Auditoria", description: "Use scripts para verificar configurações e conformidade." },
              { title: "Relatórios de Auditoria", description: "Aprenda a escrever relatórios de auditoria com descobertas e recomendações." },
            ]
        }
    ]
  },
];

    