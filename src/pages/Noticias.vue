<script setup>
import Banner from '../components/Banner.vue'
import Tarjetita from '../components/Tarjetita.vue'
import auditorio from '../assets/auditorio.png'
import primaria from '../assets/primaria.png'
import secundaria from '../assets/secundaria.png'
import nosotros1 from '../assets/nosotros1.png'
</script>

<template>
    <div>
        <Banner
            title="NOTICIAS"
            description="En la Institución Educativa “José Pardo y Barreda”, las normas de convivencia están orientadas a promover un ambiente armónico, respetuoso y seguro para todos los miembros de la comunidad educativa."
            :image="auditorio"
        />
        <div class="tarjetas-container">
            <Tarjetita
            titulo="Nivel Inicial"
            descripcion="Explora nuestras actividades para el desarrollo temprano."
            :imagen="primaria"
            :accion="'https://ejemplo.com/inicial'"
            />

            <Tarjetita
            titulo="Nivel Secundaria"
            descripcion="Fomentamos el pensamiento crítico y la preparación para el futuro."
            :imagen="nosotros1"
            :accion="'https://ejemplo.com/secundaria'"
            />


        </div>
    </div>
</template>

<style scoped>
.tarjetas-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* espacio entre tarjetas */
  padding: 1rem 1rem;
}
</style>
