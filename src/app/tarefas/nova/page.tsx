"use client"
import { useState } from "react"
import { useTarefa } from "@/data/ContextTarefa"
import { useRouter } from "next/navigation"

export default function NovaTarefaPage() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const { adicionar } = useTarefa()
  const router = useRouter()

  const salvar = () => {
    if (titulo.trim() === "") return
    adicionar({
      id: Date.now(),
      titulo,
      descricao,
      concluida: false
    })
    router.push("/tarefas")
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Nova Tarefa</h1>
      <input className="block border p-2 mb-2 w-full" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <textarea className="block border p-2 mb-2 w-full" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={salvar}>Salvar</button>
    </main>
  )
}
