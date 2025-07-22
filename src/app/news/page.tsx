import { newsFeed } from '@/lib/data';
import NewsClient from './news-client';

export default function NewsPage() {
  return <NewsClient initialNews={newsFeed} />;
}
