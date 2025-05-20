"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const formSchema = z
  .object({
    nome: z.string().min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    cnpj: z.string().min(14, {
      message: "CNPJ inválido.",
    }),
    representante: z.string().min(2, {
      message: "O nome do representante deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Email inválido.",
    }),
    telefone: z.string().min(10, {
      message: "Telefone inválido.",
    }),
    endereco: z.string().min(5, {
      message: "Endereço inválido.",
    }),
    descricao: z.string().min(10, {
      message: "A descrição deve ter pelo menos 10 caracteres.",
    }),
    senha: z.string().min(6, {
      message: "A senha deve ter pelo menos 6 caracteres.",
    }),
    confirmarSenha: z.string().min(6, {
      message: "A senha deve ter pelo menos 6 caracteres.",
    }),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  })

export default function CadastroPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cnpj: "",
      representante: "",
      email: "",
      telefone: "",
      endereco: "",
      descricao: "",
      senha: "",
      confirmarSenha: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulando envio para API
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Sua ONG foi cadastrada e está em análise.",
      })
      form.reset()
    }, 2000)
  }

  return (
    <div className="container py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Complete o cadastro da sua ONG</CardTitle>
          <CardDescription>Preencha os dados abaixo para completar o cadastro da sua ONG.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="representante"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da ONG</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da ONG" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone/Celular</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endereco"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input placeholder="Rua, número, bairro, cidade, estado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="descricao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição da ONG</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva a missão, visão e atividades da sua ONG"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Cadastrando..." : "Cadastrar ONG"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  )
}
