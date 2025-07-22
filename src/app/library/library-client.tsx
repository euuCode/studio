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
  const [category, setCategory] = useState('All');
  const [subcategory, setSubcategory] = useState('All');

  const subcategories = useMemo(() => {
    if (category === 'All') {
      return ['All', 'Conceitos', 'Análise e Monitoramento', 'Pentest e Auditoria', 'Criptografia e Segurança de Dados', 'Análise de Malware e Forense', 'Segurança em Nuvem'];
    }
    if (category === 'Fundamentos') {
      return ['All', 'Conceitos'];
    }
    if (category === 'Ferramentas') {
      return ['All', 'Análise e Monitoramento', 'Pentest e Auditoria', 'Criptografia e Segurança de Dados', 'Análise de Malware e Forense', 'Segurança em Nuvem'];
    }
    return ['All'];
  }, [category]);

  const filteredResources = useMemo(() => {
    return initialResources
      .filter((resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((resource) =>
        category === 'All' ? true : resource.category === category
      )
      .filter((resource) =>
        subcategory === 'All' ? true : resource.subcategory === subcategory
      );
  }, [searchTerm, category, subcategory, initialResources]);
  
  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setSubcategory('All');
  }

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
        <Select value={category} onValueChange={handleCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Todas as Categorias</SelectItem>
            <SelectItem value="Fundamentos">Fundamentos</SelectItem>
            <SelectItem value="Ferramentas">Ferramentas</SelectItem>
          </SelectContent>
        </Select>
        <Select value={subcategory} onValueChange={setSubcategory}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por subcategoria" />
          </SelectTrigger>
          <SelectContent>
            {subcategories.map(sub => (
              <SelectItem key={sub} value={sub}>{sub === 'All' ? 'Todas as Subcategorias' : sub}</SelectItem>
            ))}
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
