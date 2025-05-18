import { Card, CardContent } from "@/components/ui/card"

export default function SobrePage() {

  const integrantes = [
    {
      nome: "Hiago Granelli Ribeiro",
      foto: "https://github.com/hiagogranelli.png",
      papel: "Desenvolvedor Front-end",
      funcao:
        "Responsável pela implementação da interface do usuário e componentes React",
    },
    {
      nome: "João Pedro Diniz Fernandes de Oliveira",
      foto: "https://github.com/nvizble.png",
      papel: "Desenvolvedor Back-end",
      funcao: "Responsável pela implementação das APIs, banco de dados e autenticação.",
    },
    {
      nome: "João Pedro Brehula Souza",
      foto: "https://github.com/jpbrehula.png",
      papel: "Gerente de Projeto",
      funcao: "Responsável pela coordenação da equipe, documentação e planejamento.",
    },
    {
      nome: "Guilherme Alves Rodrigues Ferreira",
      foto: "https://github.com/guialves50.png",
      papel: "Analista de Requisitos",
      funcao: "Responsável pelo levantamento de requisitos, casos de uso e testes.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl mb-10 font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o Projeto</h1>
        </div>

        <div className="space-y-6 mb-10">
          <h2 className="text-2xl font-semibold border-b pb-2">Integrantes do Grupo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
            {integrantes.map((integrante, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={integrante.foto || "/placeholder.svg"}
                    alt={`Foto de ${integrante.nome}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{integrante.nome}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{integrante.papel}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6 mb-10">
          <h2 className="text-2xl font-semibold border-b pb-2">Papéis e Funções</h2>
          <div className="space-y-4">
            {integrantes.map((integrante, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={integrante.foto || "/placeholder.svg"}
                    alt={`Foto de ${integrante.nome}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">
                    {integrante.nome} - {integrante.papel}
                  </h3>
                  <p className="text-muted-foreground">{integrante.funcao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
