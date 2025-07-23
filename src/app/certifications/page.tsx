
import { certifications } from '@/lib/data';
import CertificationsClient from './certifications-client';

export default function CertificationsPage() {
  return <CertificationsClient initialCertifications={certifications} />;
}
