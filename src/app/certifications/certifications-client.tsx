
'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Certification } from '@/lib/data';
import { CertificationCard } from '@/components/certification-card';
import { Search } from 'lucide-react';

interface CertificationsClientProps {
  initialCertifications: Certification[];
}

export default function CertificationsClient({ initialCertifications }: CertificationsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All');
  const [level, setLevel] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(initialCertifications.map(c => c.category)))], [initialCertifications]);
  const types = useMemo(() => ['All', ...Array.from(new Set(initialCertifications.map(c => c.type)))], [initialCertifications]);
  const levels = useMemo(() => ['All', ...Array.from(new Set(initialCertifications.map(c => c.level).filter(Boolean)))], [initialCertifications]);

  const filteredCertifications = useMemo(() => {
    return initialCertifications
      .filter((cert) =>
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (cert.focus && cert.focus.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .filter((cert) => category === 'All' ? true : cert.category === category)
      .filter((cert) => type === 'All' ? true : cert.type === type)
      .filter((cert) => level === 'All' ? true : cert.level === level);
  }, [searchTerm, category, type, level, initialCertifications]);

  return (
    <div className="space-y-8">
        <div className="text-center mb-12">
            <h1 className="font-headline text-5xl md:text-7xl tracking-tight font-bold mb-4">
                Guia de Certificações
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Encontre a certificação ideal para impulsionar sua carreira. Pesquise e filtre por área, custo e nível de dificuldade.
            </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border rounded-lg bg-card/50">
        <div className="relative md:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Pesquisar certificação..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat === 'All' ? 'Todas as Categorias' : cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por Tipo" />
          </SelectTrigger>
          <SelectContent>
            {types.map(t => (
              <SelectItem key={t} value={t}>{t === 'All' ? 'Todos os Tipos' : t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
         <Select value={level} onValueChange={setLevel} disabled={type === 'Gratuita' || type === 'ISO'}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por Nível" />
          </SelectTrigger>
          <SelectContent>
            {levels.map(l => (
              <SelectItem key={l} value={l}>{l === 'All' ? 'Todos os Níveis' : l}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">Nenhuma certificação encontrada.</p>
        )}
      </div>
    </div>
  );
}
