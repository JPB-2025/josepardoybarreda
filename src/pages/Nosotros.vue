<script setup>
import Banner from '../components/Banner.vue'
import nosotros1 from '../assets/nosotros1.png'
import insignia_pardo from '../assets/insignia_pardo.png'
import auditorio from '../assets/auditorio.png'
</script>

<template>
  <div class="contenido">
        <!-- IMAGEN NOSOTROS -->
        <Banner
            title="NOSOTROS"
            description="Somos el Colegio José Pardo y Barreda, con más de 100 años de historia dedicados a formar
              ciudadanos responsables y comprometidos con el progreso de la juventud chinchana."
            :image="nosotros1"
        />

        <!-- Contenido HISTORIA JPB -->
        <div class="historia-contenedor">
            <!-- Columna de Historia  -->
            <div class="columna texto-col">
                <h1>HISTORIA</h1>
                <p class="descripcion">
                    La fundación del Colegio Nacional José Pardo y Barreda se remonta a 1917. Fue creado bajo la Ley 2560, la cual fue aprobada en el Congreso y refrendada por el presidente de la República, José Pardo y Barreda, durante su segundo mandato. 
                    Este paso crucial se dio en respuesta a la necesidad urgente de ofrecer una educación de calidad a una comunidad en crecimiento y con escasos recursos educativos formales.
                    Inicialmente, el colegio operaba como una escuela elemental. Sin embargo, gracias al compromiso de su comunidad educativa y el respaldo del Estado, la institución comenzó a evolucionar, pasando de ser una escuela básica a convertirse en una de las más prestigiosas del sur del Perú.
                </p>
            </div>
            <!-- Columna de imagen -->
            <div class="columna imagen-col">
                <img :src="insignia_pardo" alt="Insignia_pardo" class="insignia_pardo-img" />
            </div>
        </div>
        <Banner
            title="NORMAS DE CONVIVENCIA"
            description="En la Institución Educativa “José Pardo y Barreda”, las normas de convivencia están orientadas a promover un ambiente armónico, respetuoso y seguro para todos los miembros de la comunidad educativa."
            :image="auditorio"
            :buttons="[
              { label: 'Ver más', to: '/normasConvivencia' },
              ]"
        />
  </div>
</template>

<style scoped>
.contenido {
  text-align: center;
  margin: 0;
  padding: 0;
}
/* HISTORIA E IMAGEN */

.historia-contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;              /* separación entre columnas */
  max-width: 1000px;
  margin: 2rem auto;      /* centra horizontal y separa vertical */
  padding: 0 1rem;        /* espacio en móviles */
}

/* Columnas individuales */
.columna {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Imagen en la segunda columna */
.insignia_pardo-img {
  display: block;        /* convierte el img en bloque */
  width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  margin: 0 auto 1rem;  /* 0 arriba, auto izquierda/derecha, 1rem abajo */
}

/* Textos */
.texto-col h1{
  color: #A88C05;
  margin-bottom: 0.5rem;
}

.descripcion {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
  text-align: justify;
}

/* AJUSTE EN DISPOSITIVOS MÓVILES */
@media (max-width: 768px) {
  .historia-contenedor {
    grid-template-columns: 1fr;
  }
  .vision-img {
    margin-bottom: 0.8rem;
  }
}
</style>
