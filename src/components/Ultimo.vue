<script setup>
// No se requiere lógica por ahora
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer-container">
      
      <!-- Logo y redes -->
      <div class="footer-column">
        <img src="../assets/jpb_insignia_.png" alt="Logo JPB" class="footer-logo" />
        <p class="footer-follow">Síguenos:</p>
        <div class="footer-socials">
          <a href="https://www.facebook.com/centenariaieejpb2025"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#"><i class="fab fa-youtube fa-lg"></i></a>
          <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
        </div>
      </div>

      <!-- Contacto -->
      <div class="footer-column">
        <h3>CONTACTO</h3>
        <p><i class="fas fa-map-marker-alt"></i> Av. Luis Gálvez Chipoco N.º 271</p>
        <p><i class="fas fa-phone"></i> 971 519 473</p>
        <p><i class="fas fa-envelope"></i> ieejosepardoybarreda@gmail.com</p>
      </div>

      <!-- Mapa -->
      <div class="footer-column">
        <iframe
          src="https://www.google.com/maps?q=IEE%20Jose%20Pardo%20y%20Barreda%20Chincha&output=embed"
          loading="lazy"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Línea final -->
    <div class="footer-bottom">
      Chincha | Ica - Perú | Todos los Derechos Reservados © 2025 - <strong>I.E.E. “JOSÉ PARDO Y BARREDA”</strong>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1.6px solid #02542D;
  box-shadow: 0 -2px 9px rgba(2, 84, 45, 0.15);
  background-color: #ffffff;
  width: 100%;
  padding: 2rem 0.5rem; /* menos espacio horizontal */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-container {
  width: 100%;
  max-width: 1000px;        /* más reducido que 1200px */
  margin: 0 auto;           /* centra el contenido */
  padding: 0 1rem;          /* espacio interno lateral */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.4rem;              /* menos separación entre columnas */
}

.footer-column {
  flex: 1 1 300px;
  padding: 0 0.5rem;        /* reduce espacio horizontal */
  color: #02542D;
  text-align: left;
}

.footer-logo {
  height: 130px;
  margin-bottom: 1rem;
}

.footer-follow {
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: -0.3rem; 
}

.footer-socials a {
  margin: 0 8px;
  color: inherit;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.footer-socials a:hover {
  color: #017a3a;
}

.footer-column h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.footer-column iframe {
  width: 100%;
  height: 190px;
  border: none;
  border-radius: 6px;
}

.footer-bottom {
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: #A88C05;
}

/* Responsivo */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }

  .footer-column {
    flex: 1 1 100%;
    padding: 0.5rem 0;
  }
}

</style>
