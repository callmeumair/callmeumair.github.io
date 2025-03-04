"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  index?: number
}

export default function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
      className="flex items-center justify-center rounded-lg border bg-background p-4 text-sm font-medium transition-all duration-300"
    >
      {name}
    </motion.div>
  )
}

