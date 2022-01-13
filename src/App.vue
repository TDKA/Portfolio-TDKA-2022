<template>
  <div id="app">
    <PageLoader />
    <Navbar />
    <div>
      <Particles
        id="tsparticles"
        :options="{
          background: {
            color: {
              value: '#fff',
            },
          },
          fpsLimit: 40,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 2,
                speed: 1.6,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: '#000',
            },
            links: {
              color: '#000',
              distance: 80,
              enable: true,
              opacity: 0.5,
              width: 0.3,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import PageLoader from "@/components/PageLoader.vue";
import Particles from "../node_modules/particles.vue3/dist/particles.vue";
import { ref } from "vue";

export default {
  components: { Navbar, Footer, PageLoader },

  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    return {
      count,
      inc,
    };
  },
};
</script>

<style>
#app {
  font-family: Perpetua, serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000 !important;
  z-index: -20 !important;
}
</style>
