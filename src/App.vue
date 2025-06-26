<script setup>
import { RouterView } from 'vue-router'
import BarraMenu from './components/BarraMenu.vue'
import Ultimo from './components/Ultimo.vue'
</script>

<template>
  <div class="layout">
    <header>
      <BarraMenu />
    </header>

    <main class="main">
      <RouterView /> <!-- Aquí cambia el contenido -->
    </main>

    <footer>
      <Ultimo />
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

.main {
  padding-top: 100px;
  flex: 1;
}

</style>
