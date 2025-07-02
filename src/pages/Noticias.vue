<script setup>
import Banner from '../components/Banner.vue'
import Tarjetita from '../components/Tarjetita.vue'
import auditorio from '../assets/auditorio.png'
import primaria from '../assets/primaria.png'
import secundaria from '../assets/secundaria.png'
import nosotros1 from '../assets/nosotros1.png'
import tarjetaroja from '../assets/tarjetaroja.png'
import luchadroga from '../assets/luchadroga.jpg'
import campeones from '../assets/campeones.jpg'
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
            titulo="Sacale Tarjeta Roja a la Violencia"
            descripcion="Del 16 al 19 de junio del 2025, la comunidad educativa de la I.E.E. José Pardo y Barreda participa en la campaña SACALE TARJETA ROJA A LA VIOLENCIA - CHINCHA TE QUIERO LIBRE DE VIOLENCIA"
            :imagen="tarjetaroja"
            :accion="'https://www.facebook.com/share/v/1Ej9qhbgSc/'"
            />

            <Tarjetita
            titulo="Semana de Prevención"
            descripcion="Nuestro estudiantes de la IE, participarón activamente de la marcha interna por el - Día internacional de la lucha contra el uso indebido y el tráfico ilícito de drogras - Turno mañana."
            :imagen="luchadroga"
            :accion="'https://www.facebook.com/share/p/19HvzT6pQk/'"
            />
            
            <Tarjetita
            titulo="Campeón de Campeones - Campeón a la Excelencia"
            descripcion="🥇NUESTRAS FELICITACIONES🏆 De parte de la comunidad educativa, nuestra felcitaciones al equipo de desfile institucional, por el logro de haber obtenido el gardallete de Campeón de Campeones y el Confalón a la Excelencia."
            :imagen="campeones"
            :accion="'https://www.facebook.com/photo?fbid=1303838411743181&set=a.519138170213213'"
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
