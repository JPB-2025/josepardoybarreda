<script setup>
import Banner from '../components/Banner.vue'
import auditorio from '../assets/auditorio.png' 
import inicial from '../assets/inicial.png' 
import primaria from '../assets/primaria.png' 
import secundaria from '../assets/secundaria.png' 
</script>

<template>
  <Banner
    title="NIVELES"
    description="En nuestra institución educativa, acompañamos a los estudiantes en cada etapa de su desarrollo, desde el nivel Inicial hasta Secundaria, brindando una formación integral, valores sólidos y experiencias de aprendizaje significativas. "
    :image="auditorio"
  />
    <Banner
    title="INICIAL"
    description="Promovemos el desarrollo integral de nuestros pequeños a través del juego, la creatividad y el afecto. Fomentamos la curiosidad, el respeto y la seguridad en un entorno cálido que les permite descubrir el mundo que los rodea."
    :image="inicial"
    :buttons="[
      { label: 'Visitar Facebook', href: 'https://www.google.com'  },
    ]"
  />
      <Banner
    title="PRIMARIA"
    description="Formamos estudiantes con sólidos valores, pensamiento crítico y amor por el aprendizaje. Acompañamos su crecimiento académico y emocional, fortaleciendo sus habilidades sociales y su autonomía con una educación dinámica y participativa."
    :image="primaria"
    :buttons="[
      { label: 'Visitar Facebook', href: 'https://www.google.com'  },
    ]"
  />

    <Banner
    title="SECUNDARIA"
    description="Guiamos a nuestros estudiantes hacia una formación académica sólida y una proyección personal responsable. Les brindamos herramientas para enfrentar los retos del futuro, desarrollar su identidad y prepararse para estudios superiores o técnicos."
    :image="secundaria"
    :buttons="[
      { label: 'Visitar Facebook', href: 'https://www.google.com'  },
    ]"
  />
</template>
