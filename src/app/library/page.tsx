import { contentLibrary } from '@/lib/data';
import LibraryClient from './library-client';

export default function LibraryPage() {
  return <LibraryClient initialResources={contentLibrary} />;
}
