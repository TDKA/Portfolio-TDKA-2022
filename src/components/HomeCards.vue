<template>
  <div class="services">
    <h3 class="text-center fw-bold">Services:</h3>
    <div class="row card-container mx-auto">
      <div
        class="cards col-lg-4 mt-5 mb-5"
        v-for="service in services"
        :key="service.id"
      >
        <div class="my-card mx-auto p-4 text-center">
          <div class="card-body">
            <h5 class="card-title text-center">{{ service.title }}</h5>
            <p class="card-text">
              {{ service.content }}
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-second">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const services = ref([
      {
        id: 1,
        title: "Developpement Web",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. .",
      },
      {
        id: 2,
        title: "UI/UX Design",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. .",
      },
      {
        id: 3,
        title: "A propos de moi",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. .",
      },
    ]);

    return { services };
  },
};
</script>

<style scoped>
p {
  line-height: 1.2rem;
  font-size: 0.96rem;
}
.my-card {
  background: var(--light-color);
  border-radius: 100px;
  padding: 15px;
  color: var(--dark-color);
  position: relative;
}

.my-card:before {
  content: "";
  position: absolute;
  height: 100px;
  width: 100px;
  transform: rotate(180deg);
  background: var(--main-gradient-color);
  overflow: hidden;
  border-radius: 10px;
  top: -20px;
  z-index: -1;
}
</style>