
export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type QuizTopic = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

export const quizTopics: QuizTopic[] = [
  {
    id: "offensive-security",
    title: "Segurança Ofensiva (Red Team)",
    questions: [
      {
        question: "Qual ferramenta é comumente usada para escanear portas e serviços em uma rede?",
        options: ["Wireshark", "Nmap", "Metasploit", "Hydra"],
        correctAnswer: "Nmap",
        explanation: "Nmap (Network Mapper) é a ferramenta padrão para descoberta de rede e auditoria de segurança, usada para encontrar hosts e serviços em uma rede de computadores, criando assim um 'mapa' da rede."
      },
      {
        question: "O que significa 'pivoting' em um teste de invasão?",
        options: ["Ganhar acesso root", "Usar uma máquina comprometida para atacar outras na rede interna", "Criar um ataque de phishing", "Quebrar senhas"],
        correctAnswer: "Usar uma máquina comprometida para atacar outras na rede interna",
        explanation: "Pivoting é uma técnica usada por pentesters para alcançar outras máquinas em uma rede que não são diretamente acessíveis do exterior, usando um sistema já comprometido como um ponto de partida."
      },
      {
        question: "Qual das seguintes opções descreve melhor um ataque de 'SQL Injection'?",
        options: ["Injetar código JavaScript em uma página web", "Sobrecarregar um servidor com tráfego", "Manipular consultas ao banco de dados para extrair ou alterar informações", "Interceptar a comunicação entre duas partes"],
        correctAnswer: "Manipular consultas ao banco de dados para extrair ou alterar informações",
        explanation: "SQL Injection é uma vulnerabilidade que permite a um atacante interferir nas consultas que uma aplicação faz ao seu banco de dados, permitindo visualizar ou manipular dados que normalmente não conseguiria."
      },
      {
        question: "O framework Metasploit é usado principalmente para:",
        options: ["Monitoramento de logs", "Análise de tráfego de rede", "Desenvolver e executar exploits contra um sistema remoto", "Criptografar discos"],
        correctAnswer: "Desenvolver e executar exploits contra um sistema remoto",
        explanation: "Metasploit é uma ferramenta poderosa para desenvolver, testar e executar exploits, facilitando o trabalho de testar a vulnerabilidade de sistemas."
      },
      {
        question: "O que é o OWASP Top 10?",
        options: ["As 10 melhores ferramentas de segurança", "Um ranking das 10 maiores empresas de cibersegurança", "Um documento que lista os 10 riscos de segurança mais críticos para aplicações web", "Uma certificação de segurança"],
        correctAnswer: "Um documento que lista os 10 riscos de segurança mais críticos para aplicações web",
        explanation: "O OWASP Top 10 é um documento de conscientização padrão para desenvolvedores e segurança de aplicações web. Ele representa um amplo consenso sobre os riscos de segurança mais críticos."
      },
      {
        question: "Qual o objetivo principal de um ataque de força bruta?",
        options: ["Explorar uma falha de software", "Adivinhar senhas tentando todas as combinações possíveis", "Tornar um serviço indisponível", "Enganar um usuário para obter informações"],
        correctAnswer: "Adivinhar senhas tentando todas as combinações possíveis",
        explanation: "Um ataque de força bruta consiste em tentar sistematicamente todas as combinações possíveis de senhas e nomes de usuário até encontrar a correta."
      },
      {
        question: "Burp Suite é uma ferramenta essencial para qual tipo de teste?",
        options: ["Análise de malware", "Análise de memória forense", "Teste de segurança de aplicações web", "Auditoria de conformidade"],
        correctAnswer: "Teste de segurança de aplicações web",
        explanation: "Burp Suite é usado como um proxy para interceptar e manipular o tráfego entre um navegador e um servidor web, sendo fundamental para encontrar vulnerabilidades em aplicações web."
      },
      {
        question: "O que é 'Cross-Site Scripting' (XSS)?",
        options: ["Um ataque que rouba cookies de sessão", "Um ataque que injeta scripts maliciosos em sites confiáveis, que são executados no navegador da vítima", "Um ataque que força um usuário a executar ações indesejadas em uma aplicação web na qual ele está autenticado", "Um ataque que desfigura um site"],
        correctAnswer: "Um ataque que injeta scripts maliciosos em sites confiáveis, que são executados no navegador da vítima",
        explanation: "XSS é uma vulnerabilidade que permite a um atacante injetar scripts do lado do cliente em páginas vistas por outros usuários, podendo roubar sessões, desfigurar sites ou redirecionar usuários."
      },
      {
        question: "Qual o propósito da ferramenta Hydra?",
        options: ["Analisar pacotes de rede", "Automatizar a exploração de vulnerabilidades", "Realizar ataques de força bruta rápidos contra serviços de rede", "Gerenciar senhas"],
        correctAnswer: "Realizar ataques de força bruta rápidos contra serviços de rede",
        explanation: "Hydra é uma ferramenta popular para realizar ataques de força bruta, suportando diversos protocolos como HTTP, FTP, SSH, etc."
      },
      {
        question: "O que é um 'payload' no contexto do Metasploit?",
        options: ["O exploit em si", "O código que executa no sistema alvo após a exploração bem-sucedida", "O alvo do ataque", "A vulnerabilidade a ser explorada"],
        correctAnswer: "O código que executa no sistema alvo após a exploração bem-sucedida",
        explanation: "Após um exploit comprometer com sucesso um sistema, o payload é o código que é executado para dar ao atacante controle, como um shell reverso."
      }
    ]
  },
  {
    id: "defensive-security",
    title: "Segurança Defensiva (Blue Team)",
    questions: [
      {
        question: "O que é um SIEM?",
        options: ["Um tipo de firewall", "Um sistema que agrega e analisa logs de múltiplas fontes para detectar ameaças", "Um antivírus de nova geração", "Uma ferramenta de pentest"],
        correctAnswer: "Um sistema que agrega e analisa logs de múltiplas fontes para detectar ameaças",
        explanation: "SIEM (Security Information and Event Management) é uma solução que fornece análise em tempo real de alertas de segurança gerados por aplicações e hardware de rede."
      },
      {
        question: "Qual a diferença entre um IDS e um IPS?",
        options: ["Não há diferença", "IDS detecta intrusões, IPS tenta preveni-las", "IDS é para rede, IPS é para hosts", "IPS detecta, IDS previne"],
        correctAnswer: "IDS detecta intrusões, IPS tenta preveni-las",
        explanation: "Um Sistema de Detecção de Intrusão (IDS) monitora e alerta, enquanto um Sistema de Prevenção de Intrusão (IPS) é colocado em linha e pode bloquear ativamente o tráfego malicioso detectado."
      },
      {
        question: "O que é 'Threat Hunting'?",
        options: ["A caça de bugs em software", "O processo de procurar proativamente por ciberameaças que estão à espreita em uma rede", "Responder a um incidente de segurança", "Configurar um firewall"],
        correctAnswer: "O processo de procurar proativamente por ciberameaças que estão à espreita em uma rede",
        explanation: "Threat Hunting é uma abordagem proativa para a segurança, onde analistas buscam ativamente por sinais de comprometimento, em vez de esperar por alertas."
      },
      {
        question: "Qual o principal objetivo de um Honeypot?",
        options: ["Proteger um servidor específico", "Aumentar o desempenho da rede", "Atrair e enganar atacantes para estudar seus métodos e ferramentas", "Armazenar logs de segurança"],
        correctAnswer: "Atrair e enganar atacantes para estudar seus métodos e ferramentas",
        explanation: "Um honeypot é um sistema isca, projetado para ser um alvo atraente para atacantes. Seu valor está em ser atacado, permitindo que os defensores analisem as táticas dos invasores."
      },
      {
        question: "O framework MITRE ATT&CK é usado para:",
        options: ["Desenvolver software seguro", "Descrever e categorizar as táticas e técnicas de adversários", "Gerenciar projetos de segurança", "Realizar auditorias de conformidade"],
        correctAnswer: "Descrever e categorizar as táticas e técnicas de adversários",
        explanation: "MITRE ATT&CK é uma base de conhecimento globalmente acessível de táticas e técnicas de adversários baseadas em observações do mundo real, usada como um fundamento para a detecção de ameaças."
      },
      {
        question: "O que é um 'Indicador de Comprometimento' (IoC)?",
        options: ["Uma vulnerabilidade em um software", "Uma peça de evidência forense que indica que uma rede foi comprometida", "Uma política de segurança", "Um tipo de malware"],
        correctAnswer: "Uma peça de evidência forense que indica que uma rede foi comprometida",
        explanation: "IoCs são 'pistas' no mundo digital. Exemplos incluem hashes de arquivos maliciosos, endereços IP de servidores de comando e controle, ou URLs de phishing."
      },
      {
        question: "Qual a função de um HIDS como o Wazuh?",
        options: ["Monitorar o tráfego da rede", "Monitorar a integridade, logs e atividades de um servidor ou endpoint individual", "Filtrar e-mails de spam", "Proteger contra ataques DDoS"],
        correctAnswer: "Monitorar a integridade, logs e atividades de um servidor ou endpoint individual",
        explanation: "Um HIDS (Host-based Intrusion Detection System) é instalado em um host específico para monitorar sinais de atividade maliciosa ou violações de política nessa máquina."
      },
      {
        question: "No contexto de resposta a incidentes, o que significa 'contenção'?",
        options: ["Eliminar o atacante da rede", "Limitar o dano e prevenir a propagação do incidente", "Restaurar os sistemas a partir de backups", "Analisar a causa raiz do incidente"],
        correctAnswer: "Limitar o dano e prevenir a propagação do incidente",
        explanation: "A contenção é a fase do processo de resposta a incidentes onde a equipe de segurança toma medidas para garantir que o incidente não se espalhe para outras partes da rede."
      },
      {
        question: "O que é EDR (Endpoint Detection and Response)?",
        options: ["Um tipo de antivírus tradicional", "Uma solução que monitora continuamente os endpoints para detectar ameaças avançadas e auxiliar na resposta", "Um firewall de aplicação web", "Uma ferramenta de criptografia"],
        correctAnswer: "Uma solução que monitora continuamente os endpoints para detectar ameaças avançadas e auxiliar na resposta",
        explanation: "As soluções EDR vão além do antivírus tradicional, fornecendo maior visibilidade sobre a atividade do endpoint e ajudando a detectar e responder a malwares e ataques complexos."
      },
      {
        question: "Para que serve a análise de logs?",
        options: ["Apenas para auditoria", "Para entender o comportamento do sistema, solucionar problemas e investigar incidentes de segurança", "Para melhorar a velocidade do sistema", "Para prever falhas de hardware"],
        correctAnswer: "Para entender o comportamento do sistema, solucionar problemas e investigar incidentes de segurança",
        explanation: "A análise de logs é fundamental para a segurança defensiva, pois os logs contêm um registro de eventos que podem ser usados para reconstruir as ações de um atacante ou diagnosticar problemas."
      }
    ]
  },
  {
    id: "forensics",
    title: "Forense Digital",
    questions: [
      {
        question: "Qual o primeiro passo em uma investigação forense digital?",
        options: ["Analisar os dados", "Preservar a evidência original criando uma cópia bit a bit", "Desligar o computador suspeito", "Criar um relatório"],
        correctAnswer: "Preservar a evidência original criando uma cópia bit a bit",
        explanation: "A primeira e mais crítica etapa é a aquisição de dados, criando uma imagem forense (cópia exata) da mídia original. Todas as análises são feitas nesta cópia para não alterar a evidência original."
      },
      {
        question: "O que é a 'Cadeia de Custódia'?",
        options: ["A ordem dos eventos em um ataque", "Uma lista de vulnerabilidades", "A documentação cronológica que mostra a apreensão, custódia, controle, transferência, análise e disposição de evidências", "O processo de criptografar evidências"],
        correctAnswer: "A documentação cronológica que mostra a apreensão, custódia, controle, transferência, análise e disposição de evidências",
        explanation: "A Cadeia de Custódia é crucial para garantir a integridade da evidência e sua admissibilidade em um tribunal."
      },
      {
        question: "Para que a ferramenta Volatility é usada?",
        options: ["Análise de imagens de disco", "Análise de tráfego de rede", "Análise de despejos de memória RAM", "Quebra de senhas"],
        correctAnswer: "Análise de despejos de memória RAM",
        explanation: "Volatility é o framework padrão da indústria para extrair artefatos digitais de amostras de memória volátil (RAM), como processos em execução, conexões de rede e chaves de criptografia."
      },
      {
        question: "O que são 'dados voláteis' em forense?",
        options: ["Dados armazenados em um disco rígido", "Dados que são perdidos quando o computador é desligado, como o conteúdo da RAM", "Arquivos deletados", "Logs de eventos"],
        correctAnswer: "Dados que são perdidos quando o computador é desligado, como o conteúdo da RAM",
        explanation: "Dados voláteis são temporários e residem na memória RAM. Capturá-los antes de desligar um sistema é vital, pois eles contêm informações valiosas sobre o estado atual da máquina."
      },
      {
        question: "Qual a função do hashing (ex: SHA-256) em forense?",
        options: ["Criptografar a evidência", "Comprimir a evidência", "Verificar a integridade de uma imagem forense, garantindo que ela não foi alterada", "Ocultar dados"],
        correctAnswer: "Verificar a integridade de uma imagem forense, garantindo que ela não foi alterada",
        explanation: "Ao criar um hash da mídia original e da imagem forense, um analista pode provar que a cópia é uma duplicata exata e que não foi modificada durante a análise."
      },
      {
        question: "A ferramenta Autopsy é usada principalmente para:",
        options: ["Aquisição de memória RAM", "Análise de malwares", "Análise forense de discos rígidos e smartphones", "Monitoramento de rede"],
        correctAnswer: "Análise forense de discos rígidos e smartphones",
        explanation: "Autopsy é uma plataforma de forense digital que atua como uma interface gráfica para o The Sleuth Kit e outras ferramentas, usada para analisar discos e recuperar arquivos."
      },
      {
        question: "O que é 'File Carving'?",
        options: ["Deletar arquivos permanentemente", "O processo de recuperar arquivos de um disco sem se basear no sistema de arquivos", "Criptografar arquivos individuais", "Criar um hash de um arquivo"],
        correctAnswer: "O processo de recuperar arquivos de um disco sem se basear no sistema de arquivos",
        explanation: "File carving é usado para recuperar arquivos de dados não alocados ou corrompidos, procurando por cabeçalhos e rodapés de arquivos conhecidos."
      },
      {
        question: "O Registro do Windows é importante em uma investigação por quê?",
        options: ["Ele contém todos os arquivos do usuário", "Ele armazena senhas em texto plano", "Ele contém uma vasta quantidade de informações sobre a atividade do usuário, configurações do sistema e execução de programas", "Ele não é importante"],
        correctAnswer: "Ele contém uma vasta quantidade de informações sobre a atividade do usuário, configurações do sistema e execução de programas",
        explanation: "O Registro do Windows é uma mina de ouro para analistas forenses, contendo informações sobre programas executados, dispositivos USB conectados, conexões de rede recentes e muito mais."
      },
      {
        question: "Qual a diferença entre forense de disco e forense de rede?",
        options: ["Não há diferença", "Forense de disco analisa dados em repouso, forense de rede analisa dados em trânsito", "Uma é legal, a outra não", "Forense de disco usa Autopsy, forense de rede usa Nmap"],
        correctAnswer: "Forense de disco analisa dados em repouso, forense de rede analisa dados em trânsito",
        explanation: "A forense de disco foca em mídias de armazenamento, enquanto a forense de rede foca na captura e análise de pacotes de rede para investigar incidentes."
      },
      {
        question: "Para que serve a ferramenta FTK Imager?",
        options: ["Analisar malwares", "Criar imagens forenses (cópias bit a bit) de mídias digitais", "Editar imagens", "Visualizar logs do Windows"],
        correctAnswer: "Criar imagens forenses (cópias bit a bit) de mídias digitais",
        explanation: "FTK Imager é uma ferramenta padrão para a aquisição de dados, permitindo a criação de cópias forenses exatas de discos rígidos e outras mídias, sem alterar o original."
      }
    ]
  },
  {
    id: "cloud-security",
    title: "Segurança em Nuvem",
    questions: [
      {
        question: "O que é o 'Modelo de Responsabilidade Compartilhada' na nuvem?",
        options: ["O cliente é responsável por toda a segurança", "O provedor de nuvem é responsável por toda a segurança", "O provedor de nuvem e o cliente dividem as responsabilidades de segurança", "Um modelo de pagamento"],
        correctAnswer: "O provedor de nuvem e o cliente dividem as responsabilidades de segurança",
        explanation: "Neste modelo, o provedor de nuvem (ex: AWS, Azure) é responsável pela segurança 'da' nuvem (infraestrutura), enquanto o cliente é responsável pela segurança 'na' nuvem (dados, configurações, acessos)."
      },
      {
        question: "O que é um 'Security Group' em provedores como a AWS?",
        options: ["Um grupo de usuários com as mesmas permissões", "Um firewall virtual que controla o tráfego de entrada e saída para uma instância", "Um serviço de detecção de ameaças", "Um tipo de armazenamento"],
        correctAnswer: "Um firewall virtual que controla o tráfego de entrada e saída para uma instância",
        explanation: "Security Groups atuam como firewalls stateful no nível da instância, permitindo ou negando tráfego com base em regras de portas, protocolos e IPs de origem/destino."
      },
      {
        question: "Qual serviço da AWS é usado para gerenciamento de identidade e acesso?",
        options: ["S3", "EC2", "IAM", "VPC"],
        correctAnswer: "IAM",
        explanation: "IAM (Identity and Access Management) é o serviço que permite gerenciar o acesso aos serviços e recursos da AWS de forma segura, criando e gerenciando usuários, grupos e permissões."
      },
      {
        question: "O que é um WAF (Web Application Firewall)?",
        options: ["Um firewall de rede tradicional", "Um firewall que filtra, monitora e bloqueia o tráfego HTTP/S de e para uma aplicação web", "Um sistema de detecção de intrusão", "Uma ferramenta de análise de logs"],
        correctAnswer: "Um firewall que filtra, monitora e bloqueia o tráfego HTTP/S de e para uma aplicação web",
        explanation: "Um WAF protege aplicações web contra ataques comuns como SQL Injection e Cross-Site Scripting (XSS), operando na camada 7 do modelo OSI."
      },
      {
        question: "O serviço AWS GuardDuty serve para:",
        options: ["Gerenciar chaves de criptografia", "Escanear vulnerabilidades em instâncias EC2", "Monitorar continuamente as contas AWS em busca de atividades maliciosas ou não autorizadas", "Criar redes virtuais privadas"],
        correctAnswer: "Monitorar continuamente as contas AWS em busca de atividades maliciosas ou não autorizadas",
        explanation: "GuardDuty é um serviço de detecção de ameaças que usa machine learning e inteligência de ameaças para identificar atividades anômalas, como mineração de criptomoedas ou comunicação com IPs maliciosos."
      },
      {
        question: "O que significa 'Infraestrutura como Código' (IaC)?",
        options: ["Escrever o código da aplicação", "Gerenciar e provisionar infraestrutura de TI através de arquivos de definição legíveis por máquina", "Um modelo de programação", "Um serviço de nuvem"],
        correctAnswer: "Gerenciar e provisionar infraestrutura de TI através de arquivos de definição legíveis por máquina",
        explanation: "IaC, usando ferramentas como Terraform ou CloudFormation, permite que a infraestrutura seja tratada como software, possibilitando automação, versionamento e práticas de DevSecOps."
      },
      {
        question: "Qual o risco de segurança de um bucket S3 mal configurado?",
        options: ["Nenhum risco", "Pode levar à exposição pública de dados sensíveis", "Pode causar uma falha na instância EC2", "Pode aumentar os custos"],
        correctAnswer: "Pode levar à exposição pública de dados sensíveis",
        explanation: "Deixar um bucket S3 (ou equivalente em outros provedores) publicamente acessível por engano é uma das causas mais comuns e graves de vazamentos de dados na nuvem."
      },
      {
        question: "O que é CSPM (Cloud Security Posture Management)?",
        options: ["Gerenciamento de senhas na nuvem", "Ferramentas que identificam e corrigem riscos de configuração incorreta na infraestrutura de nuvem", "Um tipo de WAF", "Detecção de ameaças em tempo real"],
        correctAnswer: "Ferramentas que identificam e corrigem riscos de configuração incorreta na infraestrutura de nuvem",
        explanation: "As ferramentas de CSPM automatizam a identificação de violações de políticas de segurança e conformidade, ajudando a manter uma postura de segurança robusta na nuvem."
      },
      {
        question: "Em segurança de contêineres, por que é importante escanear imagens?",
        options: ["Para reduzir o tamanho da imagem", "Para encontrar e corrigir vulnerabilidades conhecidas nas bibliotecas e dependências da imagem", "Para otimizar o desempenho", "Para adicionar uma assinatura digital"],
        correctAnswer: "Para encontrar e corrigir vulnerabilidades conhecidas nas bibliotecas e dependências da imagem",
        explanation: "O escaneamento de imagens de contêineres (ex: Docker) é um passo crucial no pipeline de DevSecOps para prevenir que vulnerabilidades conhecidas sejam implantadas em produção."
      },
      {
        question: "O que é 'Serverless' e qual seu principal desafio de segurança?",
        options: ["Não usar servidores; o desafio é o custo", "Um modelo onde o provedor de nuvem gerencia a infraestrutura; o desafio é a segurança das permissões das funções", "Usar apenas um servidor; o desafio é a performance", "Um tipo de contêiner; o desafio é o isolamento"],
        correctAnswer: "Um modelo onde o provedor de nuvem gerencia a infraestrutura; o desafio é a segurança das permissões das funções",
        explanation: "Em arquiteturas serverless (como AWS Lambda), o foco da segurança se desloca para o controle de acesso, garantindo que cada função tenha apenas o mínimo de permissões necessárias para operar (princípio do menor privilégio)."
      }
    ]
  },
];
