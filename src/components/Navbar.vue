<template>
  <nav>
    <div class="container py-3">
      <div>
        <h2>TDKA.</h2>
      </div>
      <div class="menu-wraper">
        <input type="checkbox" class="toogle" />
        <div class="burger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.menu-wraper {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
}
.menu-wraper .toogle {
  position: absolute;
  top: 10px;
  right: 100px;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}
.menu-wraper .burger {
  position: absolute;
  top: 10px;
  right: 100px;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: var(--dark-color);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in-out;
}
.menu-wraper .burger:hover,
.menu-wraper .menu:hover {
  background: var(--main-gradient-color);
}

.menu-wraper .burger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}
.menu-wraper .burger div:before,
.menu-wraper .burger > div:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: #fff;
}
.menu-wraper .burger > div::after {
  top: 10px;
}
.menu-wraper .toogle:checked + .burger > div {
  transform: rotate(135deg);
}
.menu-wraper .toogle:checked + .burger > div:before,
.menu-wraper .toogle:checked + .burger > div:after {
  top: 0;
  transform: rotate(90deg);
}

/* Rotate when checked */
.menu-wraper .toogle:checked:hover + .burger > div {
  transform: rotate(225deg);
}

/* Show menu */
.menu-wraper .toogle:checked ~ .menu {
  visibility: visible;
}

.menu-wraper .toogle:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: 1s;
}

.menu-wraper .toogle:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 1s ease 0.4s;
}

.menu-wraper .menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--second-color);
}

.menu-wraper .menu > div {
  background: var(--main-gradient-color);
  width: 200vw;
  height: 200vw;
  border-radius: 100% !important;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--second-color);
  transform: scale(0);
  transition: all 0.4s ease-in-out;
}
.menu-wraper .menu > div > div {
  text-align: center;
  max-width: 90vw;
  flex: none;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.menu-wraper .menu > div > div > ul > li {
  padding: 0.8rem;
}
.menu-wraper .menu > div > div > ul > li > a {
  color: var(--light-color);
  font-size: 1.24rem;
}

@media (max-width: 640px) {
  .menu-wraper .toogle {
    top: 0;
    right: 0;
  }
  .menu-wraper .burger {
    top: 0;
    right: 0;
  }
}
</style>