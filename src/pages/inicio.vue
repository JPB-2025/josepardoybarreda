<script setup>
import Banner from '../components/Banner.vue'
import principal from '../assets/principal.png'
import mision from '../assets/mision.png'
import vision from '../assets/vision.png'
import nosotros1 from '../assets/nosotros1.png'
</script>

<template>
  <div class="contenido">
    <!-- Banner principal -->
    <img :src="principal" alt="Principal Pardo Foto" class="principal-img" />
    <h1>ALMA MATER DE LA JUVENTUD CHINCHANA</h1>
    <h2>"JUVENTUD JUVENTUD A LA GLORIA"</h2>
    <p>- DESDE 1918 -</p>
    <p>Al servicio de niños y jóvenes, dedicado a brindar una educación basada en valores y con altos estándares académicos.</p>

    <!-- Galería de Misión y Visión -->
    <div class="galeria">
      <div class="item item-mision">
        <img :src="mision" alt="Misión" />
        <h3>MISIÓN</h3>
        <p class="descripcion">
          Asegurar que los estudiantes completen su formación escolar con éxito, afianzando los
          aprendizajes del Currículo Nacional de la Educación Básica y cultivando virtudes que
          contribuyan al desarrollo de la región ICA, provincia de Chincha y distrito de Chincha Alta.
        </p>
      </div>
      <div class="item item-vision">
        <img :src="vision" alt="Visión" />
        <h3>VISIÓN</h3>
        <p class="descripcion">
          Alcanzar el reconocimiento como una comunidad educativa líder, acreditada y certificada,
          que brinde una formación integral de excelencia y alto nivel académico.
        </p>
      </div>
    </div>

    <!-- BANNER NOSOTROS-->
    <Banner
        title="NOSOTROS"
        description="Somos el Colegio José Pardo y Barreda, con más de 100 años de historia dedicados a formar
          ciudadanos responsables y comprometidos con el progreso de la juventud chinchana."
        :image="nosotros1"
        :buttons="[
        { label: 'Ver más', to: '/nosotros' },
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

.principal-img,
.nosotros-img {
  width: 100%;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
}

/* Títulos */
.contenido h1 {
  color: #02542D;
  margin-top: 1rem;
}
.contenido h2 {
  color: #A88C05;
  margin-bottom: 1rem;
}

/* Galería Misión/Visión */
.galeria {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.item {
  text-align: center;
}

.item img {
  width: 40%;
  margin: 0 auto 1rem;
  display: block;
  object-fit: cover;
}

.item h3 {
  color: #02542D;
  margin-bottom: 0.5rem;
}

.descripcion {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
  text-align: justify;
}



/* Responsive */
@media (max-width: 768px) {
  .galeria {
    grid-template-columns: 1fr;
  }
  .item img {
    width: 60%;
  }
  
}

</style>
