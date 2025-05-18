"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { UserCircle } from "lucide-react"
import LoginModal from "@/components/login-modal"
import SignUpModal from "@/components/signup-modal"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-primary">ONGs em Ação</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-muted-foreground"} transition-colors hover:text-primary`}
          >
            Início
          </Link>
          <Link
            href="/ongs"
            className={`text-sm font-medium ${pathname === "/ongs" ? "text-primary" : "text-muted-foreground"} transition-colors hover:text-primary`}
          >
            ONGs
          </Link>
          <Link
            href="/sobre"
            className={`text-sm font-medium ${pathname === "/sobre" ? "text-primary" : "text-muted-foreground"} transition-colors hover:text-primary`}
          >
            Sobre
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex" onClick={() => setIsLoginModalOpen(true)}>
            Entrar
          </Button>
          <Button size="sm" className="hidden md:flex" onClick={() => setSignUpModalOpen(true)}>
            Cadastrar
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <UserCircle className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}/>
      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setSignUpModalOpen(false)}/>
    </header>
  )
}
