<template>
  <div class="page-loader" v-if="!isLoading">
    <h2 class="text-center">TDKA.</h2>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from "vue";

export default {
  setup() {
    const isLoading = ref(false);

    onMounted(() => {
      document.onreadystatechange = () => {
        console.log(document.onreadystatechange);
        if (document.readyState == "complete") {
          setTimeout(() => {
            isLoading.value = true;
          }, 3000);
        }
      };
    });

    return { isLoading };
  },
};
</script>

<style scoped>
h2 {
  margin-top: auto;
  margin-bottom: auto;
  color: var(--light-color);
  display: block !important;
}
.page-loader {
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--dark-color);
  z-index: 999;
}

.circle {
  widows: 130px;
  height: 40px;
  margin-right: 10px;
  padding: 30px;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: auto;
}
.circle:nth-child(2) {
  background: var(--main-color);
  animation: circle-1 2s infinite;
}
.circle:nth-child(3) {
  background: var(--light-color);
  animation: circle-2 2s infinite;
}
.circle:nth-child(4) {
  background: var(--second-color);
  animation: circle-3 2s infinite;
}
.circle:nth-child(5) {
  background: var(--grey-color);
  animation: circle-4 2s infinite;
}
@keyframes circle-1 {
  25% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes circle-2 {
  25% {
    transform: translateY(60px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes circle-3 {
  25% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes circle-4 {
  25% {
    transform: translateY(60px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>