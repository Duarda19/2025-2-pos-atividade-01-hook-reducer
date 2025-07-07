"use client"
import { createContext, useContext, useReducer, useEffect } from "react"
import { tarefaReducer } from "@/lib/tarefaReducer"
import { Tarefa } from "@/types/tarefa"

const TarefaContext = createContext<any>(null)

export const TarefaProvider = ({ children }: { children: React.ReactNode }) => {
  const [tarefas, dispatch] = useReducer(tarefaReducer, [])

  // opcional: localStorage
  useEffect(() => {
    const salvas = localStorage.getItem("tarefas")
    if (salvas) dispatch({ type: "LOAD", payload: JSON.parse(salvas) })
  }, [])

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  const adicionar = (t: Tarefa) => dispatch({ type: "ADICIONAR", payload: t })
  const editar = (t: Tarefa) => dispatch({ type: "EDITAR", payload: t })
  const remover = (id: number) => dispatch({ type: "REMOVER", payload: id })

  return (
    <TarefaContext.Provider value={{ tarefas, adicionar, editar, remover }}>
      {children}
    </TarefaContext.Provider>
  )
}

export const useTarefa = () => useContext(TarefaContext)
