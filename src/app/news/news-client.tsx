'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NewsArticle } from '@/lib/data';
import { NewsCard } from '@/components/news-card';
import { Search } from 'lucide-react';

interface NewsClientProps {
  initialNews: NewsArticle[];
}

export default function NewsClient({ initialNews }: NewsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const filteredNews = useMemo(() => {
    return initialNews
      .filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((article) =>
        category === 'All' ? true : article.category === category
      );
  }, [searchTerm, category, initialNews]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Threats">Threats</SelectItem>
            <SelectItem value="Defense">Defense</SelectItem>
            <SelectItem value="Policy">Policy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredNews.length > 0 ? (
          filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No news articles found.</p>
        )}
      </div>
    </div>
  );
}
