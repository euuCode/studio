import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { NewsArticle } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const getCategoryVariant = (category: string) => {
    switch(category) {
        case 'Threats': return 'destructive';
        case 'Defense': return 'secondary';
        case 'Policy': return 'default';
        default: return 'outline';
    }
  }

  return (
    <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
            <Badge variant={getCategoryVariant(article.category)}>{article.category}</Badge>
            <p className="text-sm text-muted-foreground">{article.date}</p>
        </div>
        <CardTitle className="text-xl font-bold">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{article.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <a href="#" className="flex items-center text-sm text-primary hover:underline">
          Read More <ArrowUpRight className="h-4 w-4 ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
}
