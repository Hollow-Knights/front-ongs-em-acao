import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="text-lg font-semibold">
            ONGs em Ação
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Conectando ONGs que atuam em áreas de risco com pessoas que querem ajudar.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/termos" className="hover:underline">
            Termos
          </Link>
          <Link href="/privacidade" className="hover:underline">
            Privacidade
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </div>
      </div>
      <div className="container mt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ONGs em Ação. Todos os direitos reservados.
      </div>
    </footer>
  )
}
