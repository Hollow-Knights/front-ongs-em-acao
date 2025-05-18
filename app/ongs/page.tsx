import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const ongs = [
  {
    id: 1,
    nome: "Amigos da Comunidade",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Educação",
    cidade: "São Paulo, SP",
  },
  {
    id: 2,
    nome: "Esperança Viva",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Saúde",
    cidade: "Rio de Janeiro, RJ",
  },
  {
    id: 3,
    nome: "Mãos que Ajudam",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Assistência Social",
    cidade: "Belo Horizonte, MG",
  },
  {
    id: 4,
    nome: "Reconstruir",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Habitação",
    cidade: "Recife, PE",
  },
  {
    id: 5,
    nome: "Água para Todos",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Recursos Hídricos",
    cidade: "Fortaleza, CE",
  },
  {
    id: 6,
    nome: "Proteção Ambiental",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Meio Ambiente",
    cidade: "Manaus, AM",
  },
  {
    id: 7,
    nome: "Futuro Brilhante",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Educação",
    cidade: "Salvador, BA",
  },
  {
    id: 8,
    nome: "Alimentação Solidária",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Segurança Alimentar",
    cidade: "Porto Alegre, RS",
  },
  {
    id: 9,
    nome: "Abrigo Seguro",
    imagem: "/placeholder.svg?height=200&width=300",
    area: "Assistência Social",
    cidade: "Curitiba, PR",
  },
]

export default function ONGsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ONGs Cadastradas</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Conheça as organizações que estão fazendo a diferença em áreas de risco
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ongs.map((ong) => (
          <Card key={ong.id} className="overflow-hidden">
            <img src={ong.imagem || "/placeholder.svg"} alt={ong.nome} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{ong.nome}</h3>
              <p className="text-sm text-muted-foreground">{ong.area}</p>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {ong.cidade}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/ongs/${ong.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Ver detalhes
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
