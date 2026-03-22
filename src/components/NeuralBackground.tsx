"use client"

import Particles from "@tsparticles/react"
import { useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"

export default function NeuralBackground() {

  const [init, setInit] = useState(false)

  useEffect(() => {
    const initParticles = async () => {
      const engine = (await import("@tsparticles/engine")).tsParticles
      await loadSlim(engine)
      setInit(true)
    }

    initParticles()
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        background: {
          color: {
            value: "transparent"
          }
        },

        particles: {
          number: {
            value: 70
          },

          color: {
            value: ["#8b5cf6", "#3b82f6", "#06b6d4"]
          },

          links: {
            enable: true,
            distance: 150,
            color: "#6366f1",
            opacity: 0.4,
            width: 1
          },

          move: {
            enable: true,
            speed: 1
          },

          size: {
            value: 3
          }
        }
      }}
    />
  )
}