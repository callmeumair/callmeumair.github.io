"use client"

// Simplified toast implementation for the portfolio
import { createContext, useContext } from "react"

type ToastProps = {
  title?: string
  description?: string
}

const ToastContext = createContext<{
  toast: (props: ToastProps) => void
}>({
  toast: () => {},
})

export const toast = (props: ToastProps) => {
  // In a real implementation, this would show a toast notification
  console.log("Toast:", props.title, props.description)
  alert(`${props.title}\n${props.description}`)
}

export const useToast = () => {
  return useContext(ToastContext)
}

