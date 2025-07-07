"use client"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useTarefa } from "@/data/ContextTarefa"

export default function EditarTarefaPage() {
  const { id } = useParams()
  const router = useRouter()
  const { tarefas, editar } = useTarefa()

  const tarefa = tarefas.find((t: any) => t.id === Number(id))
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo)
      setDescricao(tarefa.descricao)
    }
  }, [tarefa])

  const salvar = () => {
    if (!tarefa) return
    editar({
      ...tarefa,
      titulo,
      descricao
    })
    router.push("/tarefas")
  }

  if (!tarefa) return <p className="p-4">Tarefa não encontrada</p>

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Editar Tarefa</h1>
      <input className="block border p-2 mb-2 w-full" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <textarea className="block border p-2 mb-2 w-full" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={salvar}>Salvar</button>
    </main>
  )
}
