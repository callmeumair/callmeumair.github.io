"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  index?: number
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <CardHeader className="p-0 overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              width={500}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-300"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">{title}</CardTitle>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-6 pt-0">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Github className="mr-1 h-4 w-4" />
            Code
          </Link>
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Live Demo
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

