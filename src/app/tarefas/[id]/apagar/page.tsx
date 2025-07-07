"use client"
import { useParams, useRouter } from "next/navigation"
import { useTarefa } from "@/data/ContextTarefa"

export default function ApagarTarefaPage() {
  const { id } = useParams()
  const router = useRouter()
  const { tarefas, remover } = useTarefa()

  const tarefa = tarefas.find((t: any) => t.id === Number(id))

  const confirmar = () => {
    remover(Number(id))
    router.push("/tarefas")
  }

  if (!tarefa) return <p className="p-4">Tarefa não encontrada</p>

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Apagar Tarefa</h1>
      <p><strong>Título:</strong> {tarefa.titulo}</p>
      <p><strong>Descrição:</strong> {tarefa.descricao}</p>
      <p className="mt-4 text-red-600">Tem certeza que deseja apagar esta tarefa?</p>
      <button onClick={confirmar} className="bg-red-600 text-white px-4 py-2 rounded mt-4">Sim, Apagar</button>
    </main>
  )
}
