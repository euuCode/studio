
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
    certsGratuitasCiber, 
    certsPagasCiber, 
    certsIso, 
    certsGratuitasRedes, 
    certsPagasRedes,
    type CertGratuita,
    type CertPaga,
    type CertISO
} from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Wifi } from 'lucide-react';

export default function CertificationsPage() {
  return (
    <div className="space-y-12">
      
      {/* Seção Cibersegurança */}
      <section id="ciberseguranca">
        <div className="flex items-center gap-4 mb-6">
            <Lock className="h-8 w-8 text-primary" />
            <h1 className="font-headline text-4xl tracking-tight font-bold">Certificações em Cibersegurança</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Certificações Gratuitas</CardTitle>
            <CardDescription>
              Ótimas para iniciar e construir uma base sólida. Algumas podem oferecer um certificado pago opcional.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificação</TableHead>
                  <TableHead>Instituição</TableHead>
                  <TableHead>Conteúdo</TableHead>
                  <TableHead>Observações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certsGratuitasCiber.map((cert) => (
                  <TableRow key={cert.nome}>
                    <TableCell className="font-medium">{cert.nome}</TableCell>
                    <TableCell>{cert.instituicao}</TableCell>
                    <TableCell>{cert.conteudo}</TableCell>
                    <TableCell>{cert.observacoes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>Certificações Pagas Reconhecidas Internacionalmente</CardTitle>
             <CardDescription>
              Credenciais que validam suas habilidades para o mercado de trabalho global.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificação</TableHead>
                  <TableHead>Instituição</TableHead>
                  <TableHead>Nível</TableHead>
                  <TableHead>Foco</TableHead>
                  <TableHead>Valor Estimado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certsPagasCiber.map((cert) => (
                  <TableRow key={cert.nome}>
                    <TableCell className="font-medium">{cert.nome}</TableCell>
                    <TableCell>{cert.instituicao}</TableCell>
                    <TableCell>
                        <Badge variant={cert.nivel === 'Avançado' ? 'destructive' : 'secondary'}>{cert.nivel}</Badge>
                    </TableCell>
                    <TableCell>{cert.foco}</TableCell>
                    <TableCell>{cert.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

         <div className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>Certificações ISO Relevantes</CardTitle>
             <CardDescription>
              Normas que estabelecem as melhores práticas para gestão de segurança e privacidade.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Norma</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Foco</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certsIso.map((cert) => (
                  <TableRow key={cert.norma}>
                    <TableCell className="font-medium">{cert.norma}</TableCell>
                    <TableCell>{cert.nome}</TableCell>
                    <TableCell>{cert.foco}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      
      {/* Seção Redes */}
      <section id="redes">
         <div className="flex items-center gap-4 mb-6">
            <Wifi className="h-8 w-8 text-primary" />
            <h1 className="font-headline text-4xl tracking-tight font-bold">Certificações em Redes de Computadores</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Certificações Gratuitas</CardTitle>
            <CardDescription>
              Essenciais para quem busca entender a espinha dorsal da internet e dos sistemas de TI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificação</TableHead>
                  <TableHead>Instituição</TableHead>
                  <TableHead>Conteúdo</TableHead>
                  <TableHead>Observações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certsGratuitasRedes.map((cert) => (
                  <TableRow key={cert.nome}>
                    <TableCell className="font-medium">{cert.nome}</TableCell>
                    <TableCell>{cert.instituicao}</TableCell>
                    <TableCell>{cert.conteudo}</TableCell>
                    <TableCell>{cert.observacoes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>Certificações Pagas Reconhecidas em Redes</CardTitle>
             <CardDescription>
              Credenciais que comprovam sua expertise em infraestrutura de redes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificação</TableHead>
                  <TableHead>Instituição</TableHead>
                  <TableHead>Nível</TableHead>
                  <TableHead>Valor Aproximado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certsPagasRedes.map((cert) => (
                  <TableRow key={cert.nome}>
                    <TableCell className="font-medium">{cert.nome}</TableCell>
                    <TableCell>{cert.instituicao}</TableCell>
                    <TableCell>
                         <Badge variant={cert.nivel.includes('Avançado') ? 'destructive' : 'secondary'}>{cert.nivel}</Badge>
                    </TableCell>
                    <TableCell>{cert.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </section>

    </div>
  );
}

    