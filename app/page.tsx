"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight, MessageCircle, RefreshCw, Users, Award, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    businessName: "",
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.sheetbest.com/sheets/ce6fe3ff-84ba-4937-8b50-b8511a977253", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          businessName: formData.businessName,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Erro ao salvar no Google Sheets:", result);
        setFormStatus({ success: false, message: result.message || "Erro desconhecido." });
      } else {
        setFormStatus({ success: true, message: result.message || "Dados enviados com sucesso!" });
        setFormData({ name: '', email: '', whatsapp: '', businessName: '' }); // Limpa os campos
      }
    } catch (error) {
      setFormStatus({ success: false, message: 'Erro ao enviar os dados. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/afetto-logo-transparent.png"
              alt="Afetto Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#como-funciona" className="text-sm font-medium hover:text-[#E97777] transition-colors">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-[#E97777] transition-colors">
              Benefícios
            </Link>
            <Link href="#diferenciais" className="text-sm font-medium hover:text-[#E97777] transition-colors">
              Diferenciais
            </Link>
          </nav>
          <Button className="bg-[#E97777] hover:bg-[#d86c6c] text-white" onClick={scrollToForm}>
            Quero testar o Afetto
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FAFAF9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#121212]">
                  Transforme clientes em fãs da sua marca
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Afetto é a plataforma de fidelização afetiva e inteligente que conecta pequenos negócios aos seus
                  clientes de forma humana e tecnológica.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#E97777] hover:bg-[#d86c6c] text-white h-12 px-8" onClick={scrollToForm}>
                    Quero testar o Afetto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Dor do Cliente */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F9CFCF] bg-opacity-30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Reconhece esses desafios?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sabemos que não é fácil manter um pequeno negócio crescendo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              {/* Problema 1 */}
              <div className="rounded-lg border border-[#F9CFCF] p-6">
                <h3 className="text-xl font-bold mb-4">Clientes que compram apenas uma vez</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">O que acontece:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Muitos clientes compram apenas uma vez</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Não existe estratégia de pós-venda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Falta de dados sobre os clientes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Sem ações de recall</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">Consequências:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Alto custo para conseguir novos clientes e baixo LTV</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Prejuízo a longo prazo, pois o crescimento vira uma corrida eterna por novos clientes
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Problema 2 */}
              <div className="rounded-lg border border-[#F9CFCF] p-6">
                <h3 className="text-xl font-bold mb-4">Dificuldade em construir relacionamentos duradouros</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">O que acontece:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Atendimento acontece só no momento da venda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Falta de comunicação contínua com os clientes, como mensagens personalizadas, promoções
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Não existe uma base de dados organizada dos clientes (CRM)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Falta de tempo ou estrutura para pensar em relacionamento: o foco está 100% na operação
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">Consequências:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>A marca não é lembrada — o cliente não cria laço emocional com o negócio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>O negócio vira "mais um", perdendo espaço para concorrentes maiores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>O boca a boca (marketing natural) diminui drasticamente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Problema 3 */}
              <div className="rounded-lg border border-[#F9CFCF] p-6">
                <h3 className="text-xl font-bold mb-4">Pouca personalização no atendimento</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">O que acontece:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Atendimento genérico para todos os clientes, sem considerar histórico ou preferências
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Falta de scripts personalizados ou inteligência no contato</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Pouco ou nenhum uso de dados comportamentais (frequência de compra, ticket médio, produtos
                          favoritos)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">Consequências:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Clientes não se sentem valorizados ou compreendidos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Perda de oportunidades de vender mais (cross-sell e upsell)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Baixa fidelização: o cliente vai embora ao menor sinal de concorrência com melhor experiência
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Problema 4 */}
              <div className="rounded-lg border border-[#F9CFCF] p-6">
                <h3 className="text-xl font-bold mb-4">Poucos recursos para usar tecnologia de fidelização</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">O que acontece:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Ferramentas robustas de CRM, automação e fidelização são caras ou complexas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Falta de conhecimento para integrar soluções tecnológicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Medo de investir em algo que parece "tecnológico demais"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Dificuldade de tempo para testar plataformas e criar campanhas de fidelidade inteligentes
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E97777] mb-2">Consequências:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>
                          Ficam fora do jogo das grandes empresas que usam dados e tecnologia para engajar o cliente
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>Os poucos clientes fiéis não são premiados — e acabam não enxergando valor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#E97777] shrink-0 mt-0.5" />
                        <span>O negócio perde em recorrência, engajamento e previsibilidade de receita</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Solução com Afetto */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Solução com Afetto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Uma plataforma completa para criar relacionamentos duradouros com seus clientes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-[#F9CFCF]">
                <div className="p-2 rounded-full bg-[#F9CFCF]">
                  <RefreshCw className="h-6 w-6 text-[#E97777]" />
                </div>
                <h3 className="text-xl font-bold">Cashback fechado na sua loja</h3>
                <p className="text-gray-500 text-sm">
                  Seus clientes ganham créditos que só podem ser usados no seu negócio, garantindo que voltem.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-[#F9CFCF]">
                <div className="p-2 rounded-full bg-[#F9CFCF]">
                  <MessageCircle className="h-6 w-6 text-[#E97777]" />
                </div>
                <h3 className="text-xl font-bold">CRM emocional com IA</h3>
                <p className="text-gray-500 text-sm">
                  Nossa inteligência artificial entende o momento do cliente e cria conexões emocionais.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-[#F9CFCF]">
                <div className="p-2 rounded-full bg-[#F9CFCF]">
                  <MessageCircle className="h-6 w-6 text-[#E97777]" />
                </div>
                <h3 className="text-xl font-bold">Mensagens personalizadas</h3>
                <p className="text-gray-500 text-sm">
                  Comunicação automática e personalizada via WhatsApp que mantém seu negócio presente.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg border border-[#F9CFCF]">
                <div className="p-2 rounded-full bg-[#F9CFCF]">
                  <Users className="h-6 w-6 text-[#E97777]" />
                </div>
                <h3 className="text-xl font-bold">Indicações automáticas</h3>
                <p className="text-gray-500 text-sm">
                  Sistema que incentiva seus clientes a indicarem amigos, multiplicando sua base.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformações */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9CFCF] bg-opacity-30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transformações reais para seu negócio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O que muda quando você implementa o Afetto
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Aumento na frequência de compra</h3>
                  <p className="text-gray-500">Seus clientes voltam mais vezes e compram com mais regularidade.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Clientes mais fiéis e conectados</h3>
                  <p className="text-gray-500">
                    Relacionamento emocional que transforma clientes em promotores da sua marca.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Economia com marketing</h3>
                  <p className="text-gray-500">
                    Reduza custos de aquisição enquanto aumenta a recorrência e o valor médio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Relacionamento automatizado</h3>
                  <p className="text-gray-500">Mantenha contato constante sem depender de tempo ou equipe dedicada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Em apenas 3 passos simples
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 mt-12">
              <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-lg border border-[#F9CFCF]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white text-xl font-bold">
                  1
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl font-bold">O cliente compra e recebe cashback</h3>
                  <p className="text-gray-500">
                    Após cada compra, o cliente recebe um percentual em créditos para usar exclusivamente no seu
                    negócio.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-lg border border-[#F9CFCF]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white text-xl font-bold">
                  2
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl font-bold">A IA entende o momento e manda mensagens afetuosas</h3>
                  <p className="text-gray-500">
                    Nossa inteligência artificial analisa o comportamento do cliente e envia mensagens personalizadas em
                    momentos estratégicos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-lg border border-[#F9CFCF]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E97777] text-white text-xl font-bold">
                  3
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-xl font-bold">O cliente volta, indica amigos e compra mais</h3>
                  <p className="text-gray-500">
                    O ciclo de fidelização se completa: seus clientes retornam, trazem novos clientes e aumentam o valor
                    médio de compra.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button className="bg-[#E97777] hover:bg-[#d86c6c] text-white h-12 px-8" onClick={scrollToForm}>
                Quero testar o Afetto
              </Button>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9CFCF] bg-opacity-30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Diferenciais da Afetto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O que nos torna únicos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border border-[#F9CFCF]">
                <MessageCircle className="h-8 w-8 text-[#E97777]" />
                <h3 className="text-xl font-bold">Fidelização emocional</h3>
                <p className="text-gray-500">
                  Vamos além das recompensas financeiras, criando conexões emocionais duradouras com seus clientes.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border border-[#F9CFCF]">
                <MessageCircle className="h-8 w-8 text-[#E97777]" />
                <h3 className="text-xl font-bold">Relacionamento por IA</h3>
                <p className="text-gray-500">
                  Nossa inteligência artificial personaliza cada interação, tornando a comunicação relevante e efetiva.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border border-[#F9CFCF]">
                <RefreshCw className="h-8 w-8 text-[#E97777]" />
                <h3 className="text-xl font-bold">Recorrência com propósito</h3>
                <p className="text-gray-500">
                  Criamos um ciclo virtuoso onde seus clientes voltam porque se sentem valorizados, não apenas por
                  descontos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border border-[#F9CFCF]">
                <CheckCircle className="h-8 w-8 text-[#E97777]" />
                <h3 className="text-xl font-bold">Criado para pequenos negócios</h3>
                <p className="text-gray-500">
                  Desenvolvido especificamente para as necessidades e realidades dos pequenos empreendedores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="waitlist-form" className="w-full py-12 md:py-24 lg:py-32 bg-[#121212] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforme seu relacionamento com clientes hoje
                </h2>
                <p className="text-gray-400 md:text-xl/relaxed">
                  Receba acesso antecipado e transforme o jeito que você fideliza seus clientes
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl bg-[#1d1d1d] p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Quero entrar na lista de espera</h3>
                  <p className="text-sm text-gray-400">
                    Preencha seus dados e seja um dos primeiros a experimentar o Afetto
                  </p>
                </div>
                <form id="waitlist-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nome"
                        className="bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="WhatsApp"
                        className="bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Nome do seu negócio"
                        className="bg-[#2d2d2d] border-[#3d3d3d] text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="bg-[#E97777] hover:bg-[#d86c6c] text-white w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Quero receber novidades"}
                  </Button>
                  {formStatus && (
                    <div className={`text-sm text-center ${formStatus.success ? "text-green-400" : "text-red-400"}`}>
                      {formStatus.message}
                    </div>
                  )}
                  <p className="text-xs text-gray-400 text-center">
                    Ao se cadastrar, você concorda com nossa política de privacidade.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-[#FAFAF9]">
        <div className="container flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/afetto-logo-transparent.png"
                alt="Afetto Logo"
                width={100}
                height={30}
                className="h-6 w-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-500 hover:text-[#E97777]">
                Termos
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-[#E97777]">
                Privacidade
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Afetto. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
