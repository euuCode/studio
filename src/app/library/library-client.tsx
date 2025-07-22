'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Resource } from '@/lib/data';
import { ResourceCard } from '@/components/resource-card';
import { Search } from 'lucide-react';

interface LibraryClientProps {
  initialResources: Resource[];
}

export default function LibraryClient({ initialResources }: LibraryClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [level, setLevel] = useState('All');
  const [type, setType] = useState('All');

  const filteredResources = useMemo(() => {
    return initialResources
      .filter((resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((resource) =>
        level === 'All' ? true : resource.level === level
      )
      .filter((resource) =>
        type === 'All' ? true : resource.type === type
      );
  }, [searchTerm, level, type, initialResources]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Pesquisar na biblioteca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por nível" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Todos os Níveis</SelectItem>
            <SelectItem value="Iniciante">Iniciante</SelectItem>
            <SelectItem value="Experiente">Experiente</SelectItem>
          </SelectContent>
        </Select>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Todos os Tipos</SelectItem>
            <SelectItem value="Artigo">Artigo</SelectItem>
            <SelectItem value="Vídeo">Vídeo</SelectItem>
            <SelectItem value="Ferramenta">Ferramenta</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">Nenhum recurso encontrado.</p>
        )}
      </div>
    </div>
  );
}
