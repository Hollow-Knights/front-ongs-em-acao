import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Heart, Share2, ExternalLink } from "lucide-react";
import Link from "next/link";

const getONG = (id: string) => {
  return {
    id: Number.parseInt(id),
    nome: "Amigos da Comunidade",
    imagem: "/placeholder.svg?height=400&width=600",
    descricao:
      "A ONG Amigos da Comunidade atua desde 2010 em áreas de risco na região metropolitana de São Paulo, com foco em educação, cultura e desenvolvimento comunitário. Nossos projetos visam fortalecer o protagonismo local e criar oportunidades para crianças e jovens em situação de vulnerabilidade social.",
    area: "Educação e Desenvolvimento Comunitário",
    endereco: "Rua das Flores, 123, Jardim Esperança, São Paulo, SP",
    telefone: "(11) 98765-4321",
    email: "contato@amigosdacomunidade.org",
    site: "www.amigosdacomunidade.org",
    formasDoacao: [
      "PIX: contato@amigosdacomunidade.org",
      "Transferência Bancária: Banco Solidário, Ag. 0001, CC: 12345-6",
      "Doação de materiais e voluntariado",
    ],
    coordenadas: {
      lat: -23.55052,
      lng: -46.633308,
    },
  };
};

export default function ONGPage({ params }: { params: { id: string } }) {
  const ong = getONG(params?.id);

  return (
    <div className="container py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter">{ong.nome}</h1>
            <p className="text-muted-foreground">{ong.area}</p>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={ong.imagem || "/placeholder.svg"}
              alt={ong.nome}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Sobre a ONG</h2>
            <p className="text-muted-foreground">{ong.descricao}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Informações de Contato</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{ong.endereco}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>{ong.telefone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>{ong.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                <a
                  href={`https://${ong.site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {ong.site}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Localização</h2>
            <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center p-6">
                <img
                  src={`https://www.oficinadanet.com.br/imagens/post/22755/mapsss.jpg`}
                  alt="Mapa da ONG"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Como Ajudar</CardTitle>
              <CardDescription>
                Existem várias formas de contribuir com o trabalho da {ong.nome}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-medium">Formas de Doação</h3>
              <ul className="space-y-2">
                {ong.formasDoacao.map((forma, index) => (
                  <li key={index} className="text-sm">
                    {forma}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Fazer Doação
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compartilhar</CardTitle>
              <CardDescription>
                Ajude a divulgar o trabalho desta ONG
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outras ONGs Similares</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link href="/ongs/2" className="block hover:underline">
                  Esperança Viva
                </Link>
                <Link href="/ongs/3" className="block hover:underline">
                  Mãos que Ajudam
                </Link>
                <Link href="/ongs/7" className="block hover:underline">
                  Futuro Brilhante
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
