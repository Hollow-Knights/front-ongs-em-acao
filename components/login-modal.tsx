"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const formSchema = z.object({
  email: z.string().email({
    message: "Email inválido.",
  }),
  senha: z.string().min(1, {
    message: "A senha é obrigatória.",
  }),
})

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulando autenticação
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      toast({
        title: "Login realizado com sucesso!",
        description: "Você será redirecionado para o painel.",
      })
      onClose()
      form.reset()
    }, 2000)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Entrar</DialogTitle>
            <DialogDescription>Acesse sua conta para gerenciar sua ONG</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email ou CNPJ</FormLabel>
                    <FormControl>
                      <Input placeholder="contato@ong.org" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="senha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
          <div className="text-sm text-center text-muted-foreground">
            <Link href="/recuperar-senha" className="text-primary hover:underline">
              Esqueceu sua senha?
            </Link>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro" className="text-primary hover:underline" onClick={onClose}>
              Cadastre sua ONG
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <Toaster />
    </>
  )
}
