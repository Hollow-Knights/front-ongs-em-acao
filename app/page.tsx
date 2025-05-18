import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Conectando ONGs que atuam em áreas de risco
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa plataforma facilita o cadastro e a descoberta de organizações não governamentais que trabalham em
                áreas de risco, promovendo o impacto social e a colaboração.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/cadastro">
                  <Button size="lg">Cadastrar ONG</Button>
                </Link>
                <Link href="/ongs">
                  <Button variant="outline" size="lg">
                    Ver ONGs cadastradas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <img
                alt="Voluntários em ação"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Informações do Projeto</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conheça os números e o impacto do nosso trabalho
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">120+</h3>
                  <p className="text-sm text-muted-foreground">ONGs Cadastradas</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">35+</h3>
                  <p className="text-sm text-muted-foreground">Áreas Atendidas</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">5000+</h3>
                  <p className="text-sm text-muted-foreground">Pessoas Impactadas</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/sobre">
              <Button variant="outline">Saiba mais sobre o projeto</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
