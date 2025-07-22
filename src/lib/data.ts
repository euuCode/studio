export type NewsArticle = {
  id: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  category: 'Threats' | 'Defense' | 'Policy';
};

export const newsFeed: NewsArticle[] = [
  { id: '1', title: 'New Zero-Day Exploit "DataVortex" Discovered', source: 'CyberWire', date: '2024-07-29', excerpt: 'A critical vulnerability affecting major enterprise software has been found...', category: 'Threats' },
  { id: '2', title: 'The Rise of AI in Phishing Attacks', source: 'ThreatPost', date: '2024-07-28', excerpt: 'Sophisticated AI models are now being used to create highly convincing phishing emails...', category: 'Threats' },
  { id: '3', title: 'Global Consortium Announces New Encryption Standard', source: 'Security Weekly', date: '2024-07-27', excerpt: 'The PQ-4 algorithm is set to become the new benchmark for post-quantum cryptography...', category: 'Defense' },
  { id: '4', title: 'US Senate Passes Landmark Data Privacy Bill', source: 'GovInfoSec', date: '2024-07-26', excerpt: 'The new legislation imposes strict data handling requirements on tech companies...', category: 'Policy' },
  { id: '5', title: 'Ransomware Attack Cripples National Healthcare System', source: 'CyberWire', date: '2024-07-25', excerpt: 'The "MedusaLocker" gang has claimed responsibility for the attack...', category: 'Threats' },
  { id: '6', title: 'Implementing a Zero Trust Architecture: A Case Study', source: 'Security Weekly', date: '2024-07-24', excerpt: 'A financial services firm shares its successful journey to a zero trust model...', category: 'Defense' },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  domain: 'Penetration Testing' | 'Incident Response' | 'Network Security' | 'Cloud Security';
};

export const certifications: Certification[] = [
  { id: '1', name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', description: 'A foundational certification for aspiring penetration testers, covering core ethical hacking concepts.', level: 'Intermediate', domain: 'Penetration Testing' },
  { id: '2', name: 'Offensive Security Certified Professional (OSCP)', issuer: 'Offensive Security', description: 'A highly respected, hands-on certification that proves practical penetration testing skills.', level: 'Advanced', domain: 'Penetration Testing' },
  { id: '3', name: 'GIAC Certified Incident Handler (GCIH)', issuer: 'GIAC', description: 'Focuses on detecting, responding to, and resolving computer security incidents.', level: 'Intermediate', domain: 'Incident Response' },
  { id: '4', name: 'Cisco Certified CyberOps Associate', issuer: 'Cisco', description: 'Validates the day-to-day, tactical knowledge and skills that Security Operations Center (SOC) teams need.', level: 'Beginner', domain: 'Incident Response' },
  { id: '5', name: 'CompTIA Security+', issuer: 'CompTIA', description: 'A global certification that validates the baseline skills necessary to perform core security functions.', level: 'Beginner', domain: 'Network Security' },
  { id: '6', name: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)²', description: 'A globally recognized standard of achievement that confirms an individual\'s knowledge in the field of information security.', level: 'Advanced', domain: 'Network Security' },
  { id: '7', name: 'Certified Cloud Security Professional (CCSP)', issuer: '(ISC)²', description: 'The premier cloud security certification for advanced technical skills in cloud application and infrastructure security.', level: 'Advanced', domain: 'Cloud Security' },
];

export type Resource = {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Tool';
  level: 'Beginner' | 'Experienced';
  description: string;
};

export const contentLibrary: Resource[] = [
    { id: '1', title: 'Understanding the CIA Triad', type: 'Article', level: 'Beginner', description: 'A fundamental concept in cybersecurity: Confidentiality, Integrity, and Availability.' },
    { id: '2', title: 'How TCP/IP Works', type: 'Video', level: 'Beginner', description: 'A visual explanation of the foundational protocol suite of the internet.' },
    { id: '3', title: 'Introduction to Metasploit', type: 'Video', level: 'Experienced', description: 'Learn the basics of the world\'s most popular penetration testing framework.' },
    { id: '4', title: 'Wireshark: Deep Dive', type: 'Tool', level: 'Experienced', description: 'Master the art of network packet analysis with this powerful tool.' },
    { id: '5', title: 'OWASP Top 10 Explained', type: 'Article', level: 'Beginner', description: 'An overview of the most critical security risks to web applications.' },
    { id: '6', title: 'The Pyramid of Pain', type: 'Article', level: 'Experienced', description: 'A model for understanding the effectiveness of different types of threat indicators.' },
];
