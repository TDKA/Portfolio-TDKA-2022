<template>
  <div class="services">
    <h2 class="text-center fw-bold mb-5">Services:</h2>
    <div class="row card-container mx-auto">
      <div
        class="cards col-lg-4 mt-5 mb-5"
        v-for="service in services"
        :key="service.id"
      >
        <div class="my-card mx-auto p-4 text-center">
          <div class="card-body">
            <h4 class="card-title text-center">{{ service.title }}</h4>
            <p class="card-text">
              {{ service.content }}
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-second">Contactez-moi</a>
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
  cursor: pointer;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.4);
}

.my-card:before {
  border: solid var(--second-color);
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 7px;
  content: "";
  position: absolute;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  top: -33px;
  z-index: -1;
}
.my-card:hover {
  background: var(--main-gradient-color);
  color: var(--light-color);
}
.my-card:hover:before {
  top: 235px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
h4:hover {
  text-decoration: royalblue;
}
</style>