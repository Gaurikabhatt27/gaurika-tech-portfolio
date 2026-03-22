"use client"

import Particles from "@tsparticles/react"

export default function ParticlesBg(){

return(

<Particles
options={{
background:{color:"transparent"},
particles:{
number:{value:60},
color:{value:"#8b5cf6"},
links:{enable:true,color:"#6366f1"},
move:{enable:true,speed:1},
size:{value:3}
}
}}
/>

)
}