

export type Certification = {
  id: string;
  name: string;
  institution: string;
  category: 'Cibersegurança' | 'Redes';
  type: 'Gratuita' | 'Paga' | 'ISO';
  level?: 'Iniciante' | 'Intermediário' | 'Avançado';
  focus?: string;
  content?: string;
  price?: string;
  observations?: string;
};

export const certifications: Certification[] = [
  // Cibersegurança - Gratuitas
  { id: 'ciber-gratis-1', name: 'Introduction to Cybersecurity', institution: 'Cisco Networking Academy', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Fundamentos da cibersegurança, ataques, defesa, ética', observations: 'Em português' },
  { id: 'ciber-gratis-2', name: 'Cybersecurity Essentials', institution: 'Cisco Networking Academy', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Continuação da introdutória, com tópicos mais técnicos', observations: 'Requer conta Cisco NetAcad' },
  { id: 'ciber-gratis-3', name: 'IBM Cybersecurity Analyst (Fundamentos)', institution: 'Coursera / IBM', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Ataques, SIEM, análise forense', observations: 'Curso gratuito, certificado pago' },
  { id: 'ciber-gratis-4', name: 'Cybersecurity for Everyone', institution: 'University of Maryland (Coursera)', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Visão geral, tipos de ataques, ameaças modernas', observations: 'Em inglês' },
  { id: 'ciber-gratis-5', name: 'Fundamentos de Segurança Cibernética', institution: 'Fundação Bradesco', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Introdução à segurança, conceitos básicos', observations: '100% gratuito, com certificado' },
  { id: 'ciber-gratis-6', name: 'AWS Cloud Security', institution: 'AWS Skill Builder', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Fundamentos de segurança na nuvem AWS', observations: 'Inglês, certificado gratuito' },
  { id: 'ciber-gratis-7', name: 'Google Cybersecurity Certificate (inicial)', institution: 'Google / Coursera', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Teoria + prática com simulações de trabalho', observations: 'Pode ser gratuito com auxílio' },
  { id: 'ciber-gratis-8', name: 'Microsoft Security, Compliance & Identity Fundamentals (SC-900)', institution: 'Microsoft Learn', category: 'Cibersegurança', type: 'Gratuita', level: 'Iniciante', content: 'Fundamentos de segurança Microsoft 365 e Azure', observations: 'Curso gratuito, certificação paga' },

  // Cibersegurança - Pagas
  { id: 'ciber-paga-1', name: 'CompTIA Security+ (SY0-701)', institution: 'CompTIA', category: 'Cibersegurança', type: 'Paga', level: 'Intermediário', focus: 'Segurança geral, redes, compliance', price: 'US$ 392' },
  { id: 'ciber-paga-2', name: 'CompTIA CySA+', institution: 'CompTIA', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Análise e resposta a incidentes', price: 'US$ 392' },
  { id: 'ciber-paga-3', name: 'CompTIA PenTest+', institution: 'CompTIA', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Testes de penetração', price: 'US$ 392' },
  { id: 'ciber-paga-4', name: 'CEH – Certified Ethical Hacker', institution: 'EC-Council', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Hacking ético, pentest, ferramentas', price: 'US$ 1.200–2.000' },
  { id: 'ciber-paga-5', name: 'CISM – Certified Information Security Manager', institution: 'ISACA', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Gestão de segurança, governança', price: 'US$ 760–1.200' },
  { id: 'ciber-paga-6', name: 'CISSP – Certified Information Systems Security Professional', institution: '(ISC)²', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Gestão, arquitetura, engenharia de segurança', price: 'US$ 749' },
  { id: 'ciber-paga-7', name: 'SSCP – Systems Security Certified Practitioner', institution: '(ISC)²', category: 'Cibersegurança', type: 'Paga', level: 'Intermediário', focus: 'Prática técnica de segurança', price: 'US$ 249–499' },
  { id: 'ciber-paga-8', name: 'CHFI – Computer Hacking Forensic Investigator', institution: 'EC-Council', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Investigação forense digital', price: 'US$ 1.200+' },
  { id: 'ciber-paga-9', name: 'OSCP – Offensive Security Certified Professional', institution: 'Offensive Security', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Pentest ofensivo prático', price: 'US$ 1.599+' },
  { id: 'ciber-paga-10', name: 'ISO/IEC 27001 Lead Implementer', institution: 'PECB / EXIN / BSI', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Implementação de SGSI', price: 'R$ 3.000–6.000' },
  { id: 'ciber-paga-11', name: 'ISO/IEC 27001 Lead Auditor', institution: 'PECB / EXIN / BSI', category: 'Cibersegurança', type: 'Paga', level: 'Avançado', focus: 'Auditoria em SGSI', price: 'R$ 3.000–6.000' },

  // Cibersegurança - ISO
  { id: 'ciber-iso-1', name: 'ISO/IEC 27001', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Principal norma internacional para Sistemas de Gestão da Segurança da Informação (SGSI).' },
  { id: 'ciber-iso-2', name: 'ISO/IEC 27002', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Catálogo de controles de segurança da informação para complementar a 27001.' },
  { id: 'ciber-iso-3', name: 'ISO/IEC 27005', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Diretrizes para a gestão de riscos de segurança da informação.' },
  { id: 'ciber-iso-4', name: 'ISO/IEC 27017', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Código de prática para controles de segurança da informação para serviços em nuvem.' },
  { id: 'ciber-iso-5', name: 'ISO/IEC 27018', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Código de prática para proteção de dados pessoais (PII) em nuvens públicas.' },
  { id: 'ciber-iso-6', name: 'ISO/IEC 27701', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Extensão da 27001 para gerenciamento de privacidade e proteção de dados.' },
  { id: 'ciber-iso-7', name: 'ISO/IEC 22301', institution: 'ISO/IEC', category: 'Cibersegurança', type: 'ISO', focus: 'Requisitos para um sistema de gestão de continuidade de negócios.' },
  
  // Redes - Gratuitas
  { id: 'redes-gratis-1', name: 'Introduction to Networking', institution: 'Cisco Networking Academy', category: 'Redes', type: 'Gratuita', level: 'Iniciante', content: 'Curso base sobre fundamentos de redes.', observations: 'Essencial para iniciantes' },
  { id: 'redes-gratis-2', name: 'NDG Linux Unhatched / Linux Essentials', institution: 'Cisco / NDG', category: 'Redes', type: 'Gratuita', level: 'Iniciante', content: 'Introdução à rede com Linux.', observations: 'Ótimo para aprender comandos' },
  { id: 'redes-gratis-3', name: 'Google IT Support Certificate', institution: 'Google / Coursera', category: 'Redes', type: 'Gratuita', level: 'Iniciante', content: 'Certificação ampla que inclui noções de redes.', observations: 'Pode ser gratuito com auxílio' },
  { id: 'redes-gratis-4', name: 'Fundamentos de Redes', institution: 'Fundação Bradesco', category: 'Redes', type: 'Gratuita', level: 'Iniciante', content: 'Conceitos básicos de redes.', observations: '100% gratuito, com certificado' },
  { id: 'redes-gratis-5', name: 'Redes de Computadores (UFES)', institution: 'edX / Coursera', category: 'Redes', type: 'Gratuita', level: 'Intermediário', content: 'Curso técnico com simuladores de rede.', observations: 'Gratuito com bolsas' },
  
  // Redes - Pagas
  { id: 'redes-paga-1', name: 'CompTIA Network+', institution: 'CompTIA', category: 'Redes', type: 'Paga', level: 'Intermediário', focus: 'Fundamentos de redes', price: 'US$ 358' },
  { id: 'redes-paga-2', name: 'CCNA – Cisco Certified Network Associate', institution: 'Cisco', category: 'Redes', type: 'Paga', level: 'Intermediário', focus: 'Infraestrutura Cisco', price: 'R$ 1.200–2.000' },
  { id: 'redes-paga-3', name: 'CCNP – Cisco Certified Network Professional', institution: 'Cisco', category: 'Redes', type: 'Paga', level: 'Avançado', focus: 'Especialização em redes Cisco', price: 'R$ 2.000–5.000' },
  { id: 'redes-paga-4', name: 'JNCIA / JNCIS / JNCIP', institution: 'Juniper Networks', category: 'Redes', type: 'Paga', level: 'Avançado', focus: 'Infraestrutura Juniper', price: 'US$ 200–500' },
  { id: 'redes-paga-5', name: 'MikroTik MTCNA / MTCRE', institution: 'MikroTik Academy', category: 'Redes', type: 'Paga', level: 'Intermediário', focus: 'Configuração de roteadores MikroTik', price: 'R$ 500–2.000' },
  { id: 'redes-paga-6', name: 'Aruba Certified Associate (Networking)', institution: 'Aruba / HPE', category: 'Redes', type: 'Paga', level: 'Intermediário', focus: 'Redes sem fio e com fio Aruba', price: 'US$ 200–300' },
  { id: 'redes-paga-7', name: 'Linux Professional Institute LPIC-1', institution: 'LPI', category: 'Redes', type: 'Paga', level: 'Intermediário', focus: 'Administração Linux com ênfase em redes', price: 'US$ 200 por prova' },
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
        subcategory: 'Criptografia e Segurança de Dados',
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
        category: 'Outros Conhecimentos',
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


export type TimelineEvent = {
  id: string;
  year: string;
  event: string;
  description: string;
  content: {
    event_detail: string;
    impact: string;
    lessons: string;
  };
};

export type CyberEra = {
  id: string;
  title: string;
  icon: string;
  events: TimelineEvent[];
};

export const cyberMemory: CyberEra[] = [
  {
    id: "era1",
    title: "Anos 1960–1980: Origem e primeiros experimentos",
    icon: "Binary",
    events: [
      { id: "arpanet-1969", year: "1969", event: "ARPANET Criada", description: "Primeira rede de computadores do mundo, base da internet.", content: {
        event_detail: "A ARPANET (Advanced Research Projects Agency Network) foi uma rede de computadores pioneira financiada pela ARPA (agora DARPA) do Departamento de Defesa dos EUA. Seu objetivo era conectar computadores em diferentes locais para pesquisa, mas acabou se tornando a base técnica para a Internet como a conhecemos. Foi projetada com a premissa de confiança, não de segurança.",
        impact: "Embora não projetada com a segurança em mente, a ARPANET introduziu protocolos de comunicação abertos que, mais tarde, se tornariam vetores de ataque. A falta de autenticação e criptografia era a norma, pois o ambiente era restrito e confiável. O 'Tópico Marcante' foi o nascimento da internet, criando um novo domínio para a interação humana e, consequentemente, para conflitos.",
        lessons: "A lição fundamental da era ARPANET é que a segurança deve ser considerada desde o início do design de um sistema ('Security by Design'). A falha em fazer isso criou um legado de protocolos inseguros que tivemos que consertar e proteger por décadas."
      }},
      { id: "creeper-1971", year: "1971", event: "Primeiro Vírus: Creeper", description: "Exibia a mensagem: “I’m the Creeper, catch me if you can!”.", content: {
        event_detail: "O Creeper foi um programa experimental escrito por Bob Thomas na BBN Technologies. Ele se movia entre os computadores DEC PDP-10 que executavam o sistema operacional TENEX, não para causar danos, mas para demonstrar a possibilidade de uma aplicação móvel. Ele exibia a famosa mensagem e foi a primeira ameaça virtual da história.",
        impact: "O Creeper não era malicioso, mas foi o primeiro exemplo de um worm de computador. Ele levou à criação do 'Reaper', o primeiro programa antivírus, projetado especificamente para encontrar e remover o Creeper, dando início à indústria de segurança.",
        lessons: "Este evento mostrou que um código poderia se replicar e se espalhar por uma rede, um conceito fundamental para todos os malwares que se seguiram. Também deu início à corrida armamentista entre criadores de vírus e desenvolvedores de software de segurança."
      }},
       { id: "virus-term-1983", year: "1983", event: "Termo 'Vírus' é Usado pela 1ª Vez", description: "Fred Cohen cria um protótipo e define o conceito.", content: {
        event_detail: "Em sua tese acadêmica, Fred Cohen, então estudante da Universidade da Califórnia do Sul, usou o termo 'vírus de computador' para descrever um programa que pode 'infectar' outros programas, modificando-os para incluir uma cópia de si mesmo. Ele criou um protótipo em um computador VAX 11/750, que se espalhou com sucesso.",
        impact: "A formalização do conceito de 'vírus' deu aos pesquisadores uma linguagem comum para descrever e analisar esse novo tipo de ameaça. Isso foi um passo crucial para o desenvolvimento de estratégias de defesa e softwares antivírus mais sofisticados.",
        lessons: "A definição de um problema é o primeiro passo para resolvê-lo. A nomenclatura e a classificação de ameaças tornaram-se uma parte fundamental da cibersegurança, permitindo uma resposta mais organizada e científica."
      }},
      { id: "morris-worm-1988", year: "1988", event: "Morris Worm", description: "Primeira infecção em massa, causou danos reais e derrubou 10% da ARPANET.", content: {
        event_detail: "Escrito por Robert Tappan Morris, um estudante de pós-graduação da Cornell University, o Morris Worm não foi projetado para ser destrutivo, mas um erro em seu mecanismo de propagação o tornou agressivo, reinfectando máquinas e causando lentidão até travá-las.",
        impact: "O worm causou um dos primeiros grandes desligamentos da Internet, com um custo estimado de limpeza de centenas de milhares a milhões de dólares. Foi a primeira vez que um malware teve um impacto financeiro e operacional em larga escala, mostrando a fragilidade da rede.",
        lessons: "O Morris Worm foi um alerta sobre como vulnerabilidades de software aparentemente pequenas poderiam ser exploradas com consequências em larga escala. Ele destacou a necessidade de patches de segurança rápidos e coordenação na resposta a incidentes."
      }},
       { id: "cert-1988", year: "1988", event: "Criação do CERT", description: "Fundado para reagir a emergências cibernéticas.", content: {
        event_detail: "Como resposta direta ao caos causado pelo Morris Worm, a DARPA fundou o CERT/CC (Computer Emergency Response Team Coordination Center) na Carnegie Mellon University. Sua missão era coordenar a comunicação entre especialistas durante incidentes de segurança.",
        impact: "A criação do CERT marcou o início da resposta a incidentes como uma disciplina formal. O modelo foi replicado em todo o mundo, com a criação de CERTs nacionais e corporativos, formando uma rede global para compartilhamento de informações sobre ameaças e vulnerabilidades.",
        lessons: "A colaboração e a comunicação são essenciais para a defesa cibernética. Nenhum grupo ou organização pode se defender sozinho; a partilha de inteligência sobre ameaças é um multiplicador de força."
      }},
    ]
  },
  {
    id: "era2",
    title: "Anos 1990: Era dos vírus populares e crackers",
    icon: "Bomb",
    events: [
      { id: "michelangelo-1992", year: "1992", event: "Michelangelo Virus", description: "Apagava dados em massa no aniversário do artista.", content: {
        event_detail: "O Michelangelo era um vírus de setor de boot que permanecia inativo até 6 de março, aniversário do artista renascentista. Nessa data, ele sobrescrevia os primeiros setores do disco rígido com dados aleatórios, tornando o sistema inoperável e os dados irrecuperáveis.",
        impact: "O vírus causou o primeiro pânico global na mídia em torno de uma ameaça digital, com vendas de software antivírus disparando. Embora o número real de computadores afetados tenha sido menor do que o previsto, o medo gerado foi imenso.",
        lessons: "A importância dos backups tornou-se dolorosamente clara para o público em geral. O evento também mostrou como a mídia poderia amplificar o medo em torno de uma ameaça cibernética, um padrão que se repetiria no futuro."
      }},
      { id: "pentagon-1998", year: "1998", event: "Ataques ao Pentágono", description: "Invasão russa ao Departamento de Defesa dos EUA.", content: {
        event_detail: "Uma série de ataques sistemáticos e coordenados, apelidados de 'Moonlight Maze', visaram redes do Pentágono, NASA e outras agências governamentais dos EUA. Os atacantes exfiltraram grandes quantidades de dados sensíveis, incluindo mapas militares e projetos de hardware.",
        impact: "Este foi um dos primeiros casos documentados de espionagem cibernética patrocinada por um estado-nação. Mostrou que o ciberespaço era um novo campo de batalha para a coleta de inteligência e o conflito entre nações.",
        lessons: "As nações perceberam que seus segredos militares e de estado estavam vulneráveis no mundo digital. Isso levou a um aumento maciço do investimento em defesas cibernéticas governamentais e militares."
      }},
      { id: "melissa-1999", year: "1999", event: "Melissa Virus", description: "Explosão dos malwares por engenharia social.", content: {
        event_detail: "O Melissa era um vírus de macro que se espalhava através de documentos do Microsoft Word. Quando um usuário abria um documento infectado com um e-mail intitulado 'Mensagem Importante de...', o vírus enviava uma cópia de si mesmo para os primeiros 50 contatos da lista de endereços do Outlook do usuário.",
        impact: "A rápida propagação do Melissa sobrecarregou e derrubou servidores de e-mail de grandes corporações como a Microsoft e a Intel. Os danos foram estimados em mais de 80 milhões de dólares.",
        lessons: "Melissa demonstrou o poder da engenharia social (usando um e-mail aparentemente inofensivo) e a vulnerabilidade das aplicações de escritório. Isso levou a uma maior desconfiança em relação a anexos de e-mail e a melhorias na segurança de softwares de produtividade."
      }},
    ]
  },
  {
    id: "era3",
    title: "Anos 2000: Era da internet e cibercrime profissional",
    icon: 'Bug',
    events: [
      { id: "ddos-2000", year: "2000", event: "Ataques DDoS Massivos", description: "Grandes sites como Yahoo e Amazon caem por sobrecarga de tráfego.", content: {
        event_detail: "Um adolescente canadense de 15 anos conhecido como 'Mafiaboy' orquestrou uma série de ataques de negação de serviço (DDoS) que derrubaram alguns dos maiores sites do mundo, incluindo Yahoo!, Amazon, eBay e CNN. Ele usou uma rede de computadores 'zumbis' em universidades para inundar os servidores com tráfego.",
        impact: "Este foi um dos primeiros ataques DDoS de alto perfil que mostrou como a infraestrutura da Internet comercial era vulnerável. Causou perdas financeiras significativas e levou a uma maior conscientização sobre a necessidade de proteção contra DDoS, que até então era uma ameaça teórica para muitos.",
        lessons: "A interconexão da internet significava que a segurança de um site dependia da segurança de inúmeros outros sistemas. A facilidade com que um indivíduo podia causar danos em larga escala destacou a necessidade de cooperação e legislação internacional."
      }},
      { id: "code-red-2001", year: "2001", event: "Code Red Worm", description: "Exploração de falha no IIS da Microsoft, propagação em horas.", content: {
        event_detail: "O worm Code Red explorou uma vulnerabilidade de buffer overflow no software de servidor web IIS da Microsoft. Ele se espalhou com uma velocidade impressionante, infectando cerca de 359.000 servidores em menos de 14 horas. Uma vez infectado, o servidor exibia a mensagem 'Hacked by Chinese!'.",
        impact: "O Code Red demonstrou a velocidade e o alcance que os worms modernos podiam atingir, explorando uma única vulnerabilidade em um software onipresente. O custo global dos danos foi estimado em mais de 2 bilhões de dólares.",
        lessons: "A monocultura de software (onde muitos sistemas usam o mesmo software) pode ser perigosa, pois uma única vulnerabilidade pode ter um impacto global. A importância de aplicar patches de segurança rapidamente tornou-se uma prioridade crítica para administradores de sistemas."
      }},
      { id: "anonymous-2003", year: "2003", event: "Início do Anonymous", description: "Surgimento do hacktivismo global.", content: {
        event_detail: "O Anonymous originou-se no imageboard 4chan como um conceito de comunidade online agindo de forma anônima e coordenada. Inicialmente focado em pegadinhas, evoluiu para o hacktivismo, realizando protestos e ataques cibernéticos contra alvos como a Igreja da Cientologia, governos e grandes corporações.",
        impact: "O grupo popularizou o conceito de hacktivismo, usando ataques DDoS, desfiguração de sites e vazamento de dados como formas de protesto político e social. A máscara de Guy Fawkes tornou-se um símbolo global de resistência contra a tirania e o autoritarismo.",
        lessons: "A cibersegurança ganhou uma nova dimensão: a política. Os ataques não eram mais apenas por ganho financeiro ou curiosidade, mas também por motivações ideológicas. As empresas e governos tiveram que começar a considerar sua postura política e social como um fator em seu perfil de risco cibernético."
      }},
      { id: "estonian-cyberwar-2007", year: "2007", event: "Ataque à Estônia", description: "País fica offline após conflito com a Rússia.", content: {
        event_detail: "Após a realocação de um memorial de guerra soviético, a Estônia foi alvo de um ataque cibernético massivo e coordenado que durou semanas. Sites do governo, bancos e meios de comunicação foram derrubados por ataques DDoS e desfiguração, paralisando a nação mais digital da Europa.",
        impact: "Este evento é frequentemente citado como a primeira guerra cibernética entre estados-nação. Ele paralisou a infraestrutura digital de um país inteiro e levou a OTAN a criar o Centro de Excelência em Defesa Cibernética Cooperativa em Tallinn, na Estônia.",
        lessons: "A infraestrutura crítica de um país era um alvo viável em um conflito geopolítico. A defesa de uma nação agora incluía explicitamente o domínio cibernético, e a necessidade de uma doutrina de defesa cibernética tornou-se urgente para governos em todo o mundo."
      }},
       { id: "conficker-2008", year: "2008", event: "Conficker Worm", description: "Malware persistente e altamente adaptável.", content: {
        event_detail: "O Conficker foi um worm de computador que surgiu em 2008, visando o sistema operacional Windows. Ele usava técnicas avançadas para a época, incluindo a exploração de uma vulnerabilidade no serviço de Servidor do Windows (MS08-067), adivinhação de senhas de administrador e propagação via unidades USB.",
        impact: "O Conficker infectou milhões de computadores em mais de 190 países, criando uma das maiores botnets já vistas. Sua sofisticação, com múltiplos vetores de propagação e um mecanismo de atualização via domínios gerados algoritmicamente (DGA), tornou sua erradicação extremamente difícil. Ele permaneceu uma ameaça por anos.",
        lessons: "O worm demonstrou a importância de uma defesa em camadas, pois ele podia contornar firewalls através de drives USB. A complexidade do Conficker exigiu uma colaboração sem precedentes entre a indústria de segurança, acadêmicos e provedores de internet (a 'Conficker Working Group') para combatê-lo, mostrando a necessidade de alianças público-privadas."
      }},
    ]
  },
  {
    id: "era4",
    title: "2010–2020: Guerra Cibernética e Ransomware",
    icon: "CloudLightning",
    events: [
      { id: "stuxnet-2010", year: "2010", event: "Stuxnet", description: "Vírus militar que sabotou usinas nucleares no Irã. Considerado a primeira 'arma cibernética'.", content: {
        event_detail: "Stuxnet foi um worm de computador extremamente sofisticado projetado para um alvo específico: os sistemas de controle industrial (SCADA) da Siemens que controlavam as centrífugas de enriquecimento de urânio do Irã. Ele se espalhou via USB e explorou múltiplas vulnerabilidades de dia zero (zero-day) do Windows.",
        impact: "Stuxnet provou que um ataque cibernético poderia causar danos físicos a uma infraestrutura crítica. Foi a primeira arma digital a ser usada para sabotar um programa nuclear, mudando para sempre a paisagem da guerra cibernética.",
        lessons: "A linha entre a guerra digital e a física foi apagada. A proliferação de armas cibernéticas tornou-se uma realidade, e a segurança de sistemas industriais (OT - Operational Technology) tornou-se uma preocupação de segurança nacional."
      }},
      { id: "rsa-hack-2011", year: "2011", event: "Vazamento da RSA Security", description: "Comprometeu segurança de milhares de tokens de autenticação.", content: {
        event_detail: "Hackers, supostamente ligados a um estado-nação, realizaram um ataque de spear-phishing contra funcionários da RSA, a divisão de segurança da EMC. Eles conseguiram roubar informações relacionadas aos seus produtos de autenticação de dois fatores SecurID.",
        impact: "O ataque foi um grande golpe na confiança da indústria de segurança. Os dados roubados permitiram que os atacantes realizassem ataques subsequentes contra clientes da RSA, incluindo grandes empreiteiros de defesa como a Lockheed Martin. Mostrou que até as empresas de segurança eram vulneráveis.",
        lessons: "Ataques de spear-phishing são extremamente eficazes, mesmo contra alvos tecnicamente proficientes. A segurança da cadeia de suprimentos de segurança (proteger os protetores) tornou-se um ponto crítico de preocupação."
      }},
      { id: "snowden-2013", year: "2013", event: "Edward Snowden", description: "Revela espionagem global da NSA sobre cidadãos, líderes e empresas.", content: {
        event_detail: "Edward Snowden, um ex-contratado da NSA, vazou dezenas de milhares de documentos confidenciais que revelaram a escala maciça dos programas de vigilância global da agência, como o PRISM. Os documentos mostraram que a NSA estava coletando dados de telefone e internet de milhões de pessoas, incluindo cidadãos americanos e líderes mundiais.",
        impact: "As revelações de Snowden desencadearam um debate global sobre privacidade, vigilância governamental e segurança de dados. Levaram a reformas legais em alguns países e aumentaram a desconfiança pública em relação aos governos e às empresas de tecnologia.",
        lessons: "A privacidade tornou-se um tema central na tecnologia. O uso de criptografia de ponta a ponta em aplicativos de mensagens tornou-se padrão, e os usuários tornaram-se mais conscientes sobre os dados que compartilham online. A ameaça interna (insider threat) foi destacada como um risco de segurança massivo."
      }},
      { id: "sony-hack-2014", year: "2014", event: "Sony Hack", description: "Retaliação da Coreia do Norte por um filme satírico.", content: {
        event_detail: "Um grupo que se autodenominava 'Guardians of Peace' (supostamente ligado à Coreia do Norte) invadiu a Sony Pictures. O ataque foi uma retaliação ao filme 'A Entrevista', uma comédia que satirizava o líder norte-coreano Kim Jong-un. Os hackers vazaram e-mails embaraçosos, dados de funcionários e filmes inéditos, além de destruir dados nos sistemas da empresa.",
        impact: "O ataque demonstrou uma nova motivação para o ciberataque: a censura e a retaliação política. Foi um dos ataques mais destrutivos contra uma empresa americana, causando enormes prejuízos financeiros e de reputação.",
        lessons: "Os ataques cibernéticos poderiam ser usados para coagir e intimidar, influenciando a liberdade de expressão. A segregação de redes e a proteção contra malware destrutivo (wipers) tornaram-se ainda mais críticas."
      }},
       { id: "election-hack-2016", year: "2016", event: "Ataques à Eleição dos EUA", description: "Manipulação democrática por cibermeios.", content: {
        event_detail: "Agências de inteligência dos EUA concluíram que a Rússia orquestrou uma campanha multifacetada para interferir na eleição presidencial de 2016. Isso incluiu o hackeamento dos servidores do Comitê Nacional Democrata (DNC) e o vazamento de e-mails através de sites como o WikiLeaks, além de uma vasta campanha de desinformação e propaganda nas redes sociais.",
        impact: "O evento borrou as linhas entre espionagem, guerra de informação e ataque cibernético. Ele minou a confiança no processo democrático e demonstrou como as redes sociais poderiam ser armadas para polarizar a sociedade e influenciar a opinião pública.",
        lessons: "A segurança eleitoral tornou-se uma questão de segurança nacional. As democracias perceberam que precisavam defender não apenas sua infraestrutura de votação, mas também o 'espaço cognitivo' de seus cidadãos contra a desinformação estrangeira."
      }},
      { id: "wannacry-2017", year: "2017", event: "WannaCry", description: "Ransomware global que explorou uma falha da NSA, tornando-se uma ameaça mundial.", content: {
        event_detail: "O WannaCry foi um ataque de ransomware que se espalhou rapidamente por mais de 150 países. Ele explorou uma vulnerabilidade no protocolo SMB do Windows, conhecida como EternalBlue, que se acredita ter sido desenvolvida pela NSA e vazada pelo grupo Shadow Brokers.",
        impact: "O ataque paralisou sistemas em todo o mundo, com um impacto particularmente devastador no Serviço Nacional de Saúde (NHS) do Reino Unido, forçando hospitais a cancelar cirurgias. Os danos globais foram estimados em bilhões de dólares.",
        lessons: "A importância crítica de aplicar patches de segurança foi destacada. O WannaCry também mostrou como as ferramentas desenvolvidas por agências de inteligência podem ser transformadas em armas e usadas por criminosos, levantando questões sobre o armazenamento de vulnerabilidades."
      }},
      { id: "notpetya-2017", year: "2017", event: "NotPetya", description: "Disfarçado de ransomware, destruiu dados em massa.", content: {
        event_detail: "Inicialmente parecendo um ataque de ransomware, o NotPetya era, na verdade, um 'wiper' - um malware projetado para destruir dados permanentemente. O ataque foi direcionado principalmente à Ucrânia, disfarçado através de uma atualização de software de contabilidade, mas se espalhou globalmente.",
        impact: "NotPetya foi o ataque cibernético mais caro da história, com danos estimados em mais de 10 bilhões de dólares. Ele afetou gigantes globais como a Maersk (transporte marítimo), FedEx e Merck (farmacêutica), mostrando como um ataque regional poderia ter consequências globais devastadoras.",
        lessons: "A atribuição de ataques tornou-se mais complexa, com atores estatais usando táticas de cibercrime para disfarçar suas ações. As empresas aprenderam que a resiliência (capacidade de se recuperar rapidamente) era tão importante quanto a prevenção."
      }},
      { id: "cambridge-analytica-2018", year: "2018", event: "Cambridge Analytica", description: "Uso indevido de dados do Facebook para influenciar decisões políticas.", content: {
        event_detail: "Foi revelado que a empresa de consultoria política Cambridge Analytica havia coletado dados de milhões de perfis do Facebook sem o consentimento dos usuários. Esses dados foram usados para construir perfis psicográficos e direcionar propaganda política altamente personalizada durante várias eleições ao redor do mundo.",
        impact: "O escândalo gerou uma crise de confiança no Facebook e em outras plataformas de mídia social. Levou a investigações governamentais, multas bilionárias e uma maior conscientização pública sobre como os dados pessoais são coletados e monetizados.",
        lessons: "A privacidade dos dados tornou-se uma questão de consumidor e regulatória de primeira linha. Os usuários começaram a questionar o modelo de negócios de 'dados por serviço gratuito', e leis como a LGPD e GDPR ganharam ainda mais relevância."
      }},
      { id: "baltimore-ransomware-2019", year: "2019", event: "Baltimore Paralisada", description: "Cidade inteira sem serviços após ataque de ransomware.", content: {
        event_detail: "A cidade de Baltimore foi atingida por um ataque de ransomware chamado 'RobbinHood', que criptografou servidores em toda a administração municipal. O ataque paralisou serviços essenciais, como pagamentos de contas, e-mails e sistemas imobiliários, por semanas.",
        impact: "O incidente custou à cidade mais de 18 milhões de dólares em custos de recuperação e perda de receita. Ele destacou a crescente tendência de ataques de ransomware visando governos municipais e infraestrutura local, que muitas vezes carecem de recursos de cibersegurança adequados.",
        lessons: "As cidades e os municípios tornaram-se alvos críticos e lucrativos para os cibercriminosos. A necessidade de investir em modernização de TI, backups robustos e treinamento de segurança para o setor público tornou-se urgente."
      }},
    ]
  },
  {
    id: "era5",
    title: "2020–2025: IA, Deepfakes e Ataques a Infraestruturas",
    icon: "BrainCircuit",
    events: [
      { id: "solarwinds-2020", year: "2020", event: "Hack SolarWinds", description: "Ataque em cadeia a empresas e governos por backdoor em software corporativo.", content: {
        event_detail: "Atacantes sofisticados (atribuídos à inteligência russa) comprometeram o processo de construção de software da empresa SolarWinds. Eles inseriram um backdoor malicioso em uma atualização do software Orion, que foi então distribuída para mais de 18.000 clientes.",
        impact: "Este foi um dos ataques à cadeia de suprimentos de software mais significativos da história. Os atacantes ganharam acesso a redes de várias agências do governo dos EUA e de grandes empresas de tecnologia, permitindo uma espionagem de longo prazo.",
        lessons: "A segurança da cadeia de suprimentos de software tornou-se uma preocupação de primeira ordem. As empresas perceberam que não bastava proteger suas próprias redes; elas também precisavam garantir a segurança do software de terceiros que utilizavam."
      }},
      { id: "colonial-pipeline-2021", year: "2021", event: "Colonial Pipeline Hack", description: "Parou combustível nos EUA, pagamento de resgate em BTC.", content: {
        event_detail: "O grupo de ransomware DarkSide comprometeu a rede de TI da Colonial Pipeline, a maior operadora de oleodutos de combustível dos EUA, através de uma única senha comprometida encontrada na dark web. Embora a rede de controle operacional (OT) não tenha sido diretamente atingida, a empresa desligou os oleodutos por precaução, causando pânico e escassez de combustível na Costa Leste dos EUA.",
        impact: "O ataque demonstrou como um incidente no ambiente de TI de uma empresa de infraestrutura crítica pode ter consequências diretas no mundo físico. A empresa pagou um resgate de 75 bitcoins (então US$ 4,4 milhões), parte do qual foi posteriormente recuperado pelo FBI.",
        lessons: "A segmentação entre redes de TI e OT é crucial, mas não infalível. A importância da autenticação multifator (MFA) e de não reutilizar senhas foi drasticamente reforçada. Este evento levou a novas regulamentações de segurança cibernética para operadores de oleodutos nos EUA e aumentou o foco do governo no combate ao ransomware."
      }},
       { id: "pegasus-2021", year: "2021", event: "Pegasus Spyware", description: "Espionagem a jornalistas e políticos por spyware invisível.", content: {
        event_detail: "Uma investigação jornalística global revelou o uso generalizado do spyware Pegasus, desenvolvido pela empresa israelense NSO Group. O Pegasus podia infectar telefones iPhone e Android sem qualquer interação do usuário (ataque 'zero-click'), dando ao invasor acesso completo ao microfone, câmera, e-mails, mensagens e localização do dispositivo.",
        impact: "A investigação revelou que o spyware estava sendo usado por governos autoritários (e alguns democráticos) para espionar jornalistas, ativistas de direitos humanos, advogados e líderes de oposição em todo o mundo. O escândalo levantou sérias questões sobre a regulamentação da indústria de spyware privado.",
        lessons: "A ameaça de 'zero-click' mostrou que mesmo os usuários mais cautelosos poderiam ser comprometidos. A segurança de dispositivos móveis tornou-se um campo de batalha crítico, e a necessidade de transparência e responsabilização na indústria de vigilância privada tornou-se um debate global."
      }},
      { id: "ukraine-war-2022", year: "2022", event: "Guerra Rússia x Ucrânia", description: "Conflito híbrido: guerra real + ciberespaço.", content: {
        event_detail: "A invasão em grande escala da Ucrânia pela Rússia foi precedida e acompanhada por uma onda massiva de ataques cibernéticos. Isso incluiu ataques de wiper (destruição de dados) contra agências governamentais e empresas ucranianas, ataques DDoS contra sites de bancos e campanhas de desinformação.",
        impact: "A guerra na Ucrânia tornou-se o exemplo mais proeminente de conflito híbrido, onde as operações militares convencionais são totalmente integradas com a guerra cibernética e de informação. Empresas privadas de tecnologia (como Microsoft e Starlink) desempenharam um papel sem precedentes na defesa cibernética de uma nação.",
        lessons: "O ciberespaço é agora um domínio de guerra estabelecido. A resiliência da infraestrutura digital e a colaboração com o setor privado são vitais para a defesa nacional. A linha entre combatentes e civis no ciberespaço tornou-se cada vez mais tênue."
      }},
      { id: "deepfake-scams-2023", year: "2023", event: "Boom dos Deepfakes em Golpes", description: "Ciberfraudes com IA e engenharia social.", content: {
        event_detail: "A tecnologia de Inteligência Artificial para criar deepfakes (vídeos ou áudios falsos, mas realistas) tornou-se amplamente acessível. Cibercriminosos começaram a usá-la em escala para golpes, como fraudes de CEO, onde um áudio deepfake imitando a voz de um executivo instrui um funcionário a fazer uma transferência bancária urgente.",
        impact: "Os deepfakes representaram um salto quântico na sofisticação da engenharia social. A confiança na evidência de áudio e vídeo começou a ser erodida, tornando a verificação de identidade e a desconfiança saudável habilidades ainda mais cruciais para todos.",
        lessons: "A nova fronteira da segurança é a 'realidade sintética'. As defesas precisam evoluir para além da detecção de malware para incluir a detecção de mídia sintética e a educação dos usuários para questionar o que veem e ouvem online."
      }},
      { id: "ai-attacks-2024", year: "2024–2025", event: "Ataques com IA", description: "A era da cibersegurança autônoma.", content: {
        event_detail: "A proliferação de modelos de linguagem grandes (LLMs) e outras ferramentas de IA generativa começa a ser usada por ambos os lados. Atacantes usam IA para criar e-mails de phishing mais convincentes, descobrir vulnerabilidades e automatizar a movimentação lateral dentro de redes. A defesa começa a usar IA generativa para proteção.",
        impact: "A velocidade e a escala dos ataques aumentam dramaticamente. Do lado da defesa, as equipes de Blue Team começam a usar IA para analisar enormes volumes de dados, identificar anomalias e gerar respostas a incidentes de forma mais rápida, levando a uma cibersegurança mais autônoma.",
        lessons: "A era da cibersegurança impulsionada por IA começa. A habilidade de usar e defender-se contra ferramentas de IA torna-se um diferencial para os profissionais de segurança. A ética no uso de IA para segurança ofensiva e a possibilidade de 'IA vs. IA' no ciberespaço tornam-se tópicos de debate intenso."
      }},
    ]
  },
];
