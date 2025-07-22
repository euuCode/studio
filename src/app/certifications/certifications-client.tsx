'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Certification } from '@/lib/data';
import { CertificationCard } from '@/components/certification-card';
import { Search } from 'lucide-react';

interface CertificationsClientProps {
  initialCerts: Certification[];
}

export default function CertificationsClient({ initialCerts }: CertificationsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [level, setLevel] = useState('All');
  const [domain, setDomain] = useState('All');

  const filteredCerts = useMemo(() => {
    return initialCerts
      .filter((cert) =>
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((cert) =>
        level === 'All' ? true : cert.level === level
      )
      .filter((cert) =>
        domain === 'All' ? true : cert.domain === domain
      );
  }, [searchTerm, level, domain, initialCerts]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search certifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
        <Select value={domain} onValueChange={setDomain}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Domains</SelectItem>
            <SelectItem value="Penetration Testing">Penetration Testing</SelectItem>
            <SelectItem value="Incident Response">Incident Response</SelectItem>
            <SelectItem value="Network Security">Network Security</SelectItem>
            <SelectItem value="Cloud Security">Cloud Security</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCerts.length > 0 ? (
          filteredCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">No certifications found.</p>
        )}
      </div>
    </div>
  );
}
