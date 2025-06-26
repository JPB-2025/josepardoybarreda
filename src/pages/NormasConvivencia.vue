<script setup>
import Banner from '../components/Banner.vue'
import insignia_pardo from '../assets/insignia_pardo.png'
import auditorio from '../assets/auditorio.png'
import personita from '../assets/personita.png'


</script>

<template>
    <div>
        <Banner
            title="NORMAS DE CONVIVENCIA"
            description="En la Institución Educativa “José Pardo y Barreda”, las normas de convivencia están orientadas a promover un ambiente armónico, respetuoso y seguro para todos los miembros de la comunidad educativa."
            :image="auditorio"
        />
            <!-- Contenido NORMASJPB -->
        <div class="nconvivencia-contenedor">
            <!-- Columna de Normas  -->
            <div class="columna texto-col">
                <ol class="descripcion">
                   <li>Promovemos una cultura de ética, moral, cívica, respeto y aceptación a las diferentes ideas, opiniones, manifestaciones culturales y habilidades de los demás dentro y fuera de la IE de manera permanente.</li>
                   <li>Cumplimos los horarios establecidos de manera permanente, siendo puntuales y comprometidos de acuerdo a nuestras funciones en la IE.</li>
                   <li>Practicamos la honestidad en el campo académico, reconociendo la importancia del esfuerzo individual y colectivo en el logro de los aprendizajes, participando con responsabilidad e interés en las actividades de aprendizajes de manera autónoma y reflexiva.</li>
                   <li>Fomentamos la inclusión y la empatía, siendo proactivos en la integración de aquellos que puedan sentirse excluidos.</li>
                    <li>Resolvemos los conflictos, promoviendo el diálogo proactivo y empático buscando soluciones que fortalezcan nuestras relaciones y la convivencia positiva en la comunidad educativa.</li>
                    <li>Respetamos la privacidad de los integrantes de la comunidad educativa, evitando difundir información personal sin consentimiento.</li>
                    <li>Promovemos el bienestar integral de los miembros de la comunidad educativa aplicando estrategias concretas y restaurativas.</li>
                    <li>Mantenemos limpios nuestros ambientes, creando un espacio armonioso de convivencia institucional, practicando el autocuidado, la higiene y el cuidado de nuestro medio ambiente.</li>
                    <li>Promovemos el uso de las 5 R: reciclar, reducir, reutilizar, reparar, recuperar.</li>
                    <li>Fortalecemos el sentido de pertenencia hacia la IE, participando con entusiasmo en la organización de eventos y actividades, asumiendo compromiso y trabajo en equipo.</li>
                    <li>Promovemos la práctica de hábitos alimenticios saludables y de actividades físicas como psicológicas para prevenir enfermedades y fortalecer nuestro cuerpo y bienestar.</li>
                    <li>Fomentamos el respeto a los espacios laborales de los miembros de la comunidad educativa.</li>
                    <li>Utilizamos los recursos digitales para aprender y para ello promovemos el uso responsable de la tecnología.</li>
                </ol>
            </div>
            <!-- Columna de imagen -->
            <div class="columna imagen-col">
                <img :src="insignia_pardo" alt="Insignia_pardo" class="insignia_pardo-img" />
                <img :src="personita" alt="personita" class="personita-img" />
            </div>
        </div>
    </div>
</template>

<style>




/* NORMAS E IMAGEN */

.nconvivencia-contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;              /* separación entre columnas */
  max-width: 1000px;
  margin: 2rem auto;      /* centra horizontal y separa vertical */
  padding: 0 1rem;        /* espacio en móviles */
}

.nconvivencia-contenedor li{
  margin-bottom: 1rem; 
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
.personita-img {
  display: block;        /* convierte el img en bloque */
  width: 43%;
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
  color: #02542D;
  line-height: 1.4;
  text-align: justify;
}
/* AJUSTE EN DISPOSITIVOS MÓVILES */
@media (max-width: 768px) {
  .nconvivencia-contenedor {
    grid-template-columns: 1fr;
  }

}

</style>