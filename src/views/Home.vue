<template>
  <div class="container">
    <div class="home">
      <div class="showcase row">
        <div class="left-side col-lg-6">
          <h2>
            Hello, <br />
            Je m'appelle Teodor KOBILAROV, <br />
            Développeur Web Junior <br />
            basé à Lyon
          </h2>
          <p class="my-4">
            Motivé et organisé, je saurais être autonome <br />
            dans mes missions et créatif dans mes réalisations <br />
            afin d'agrandir le volume de mes compétences et <br />
            vous accompagner dans ce monde merveilleux <br />
            qu'est le numérique.
          </p>
          <div class="cv-btn">
            <button class="btn-main">Télécharger mon CV</button>
          </div>
        </div>
        <div class="right-side offset-1 col-lg-5">
          <div class="">
            <div class="container-img mx-auto">
              <img class="img" src="@/assets/teo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rocket text-center">
      <img
        src="../assets/rocket.svg
       "
        alt=""
        class="ship"
      />
    </div>

    <!-- Cards -->
    <div class="cards">
      <HomeCards />
    </div>
  </div>

  <Footer />
</template>

<script>
// @ is an alias to /src
import HomeCards from "@/components/HomeCards.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: { HomeCards, Footer },
};
</script>

<style scoped>
.container-img {
  position: relative;
  padding: 180px;
  width: 300px;
  height: 180px;
  background: var(--main-gradient-color);
  border-radius: 30% 30% 30% 30% / 40% 40% 40% 40%;
}
.img {
  position: absolute;
  width: 300px;
  border-radius: 30% 30% 30% 30% / 40% 40% 40% 40%;
  left: 30.5px;
  bottom: 45px;
}
.showcase {
  margin-top: 50px;
}
.left-side {
  margin-top: 30px;
  font-family: "Bitter", serif;
}
.left-side p {
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  font-size: 1.1rem;
}
.cards {
  margin-top: 130px !important;
  margin-bottom: 130px !important;
}

.rocket {
  position: relative;
  padding-bottom: 100px;
}
.ship {
  position: absolute;
  height: 90px;
  cursor: pointer;

  animation: starship 3s ease-in-out;
  animation-iteration-count: infinite;
}
@keyframes starship {
  100% {
    transform: rotate(360deg);
  }
}

/* Medias */

@media (max-width: 640px) {
  .right-side {
    margin-top: 60px;
  }
  .rocket {
    margin-top: 50px;
  }
}
</style>
