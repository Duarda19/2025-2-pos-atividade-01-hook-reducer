"use client"
import Link from "next/link"
import { useTarefa } from "@/data/ContextTarefa"

export default function ListaTarefasPage() {
  const { tarefas } = useTarefa()

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Tarefas</h1>
      <Link href="/tarefas/nova" className="text-blue-500 underline">Nova tarefa</Link>
      <ul className="mt-4 space-y-2">
        {tarefas.map((t: any) => (
          <li key={t.id} className="border p-2 rounded">
            <h2 className="font-semibold">{t.titulo}</h2>
            <p>{t.descricao}</p>
            <div className="mt-2 space-x-2">
              <Link href={`/tarefas/${t.id}`} className="text-green-600 underline">Editar</Link>
              <Link href={`/tarefas/${t.id}/apagar`} className="text-red-600 underline">Apagar</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
