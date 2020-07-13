<template>
  <div id="app">
    <Header />
    <transition name="component-fade" mode="out-in">
      <router-view />
    </transition>
    <vue-progress-bar></vue-progress-bar>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Daniel Kiss';
    }
  },
  mounted() {
    document.title = 'Daniel Kiss';
  }
};
</script>

<style>
* {
  color: #2b2d42;
}
/* TYPOGRAPHY */
h1 {
  font-family: Montserrat;
  font-size: clamp(40px, 15vw, 80px);
  text-transform: uppercase;
  font-weight: normal;

  margin-top: 6rem;
  margin-bottom: 0.7rem;
}
h2 {
  font-family: Montserrat;
  font-weight: normal;

  font-size: clamp(20px, 13vw, 55px);
  text-transform: capitalize;
  margin-bottom: 1rem;
}
p {
  font-family: Kanit;
  font-size: clamp(22px, 2.2vw, 25px);
  width: clamp(94%, 80vw, 40rem);
  text-align: justify;
  text-justify: inter-word;
  margin-top: 0;
}

.blue {
  color: #24b9ff;
}

/* BUTTONS */
.btn {
  background-color: #24b9ff;
  border: 1px solid #24b9ff;
  border-radius: 10px;
  padding: 0.7rem 1.3rem;
  color: #fff;
  font-family: Kanit;
  /* font-size: 20px; */
  font-size: clamp(18px, 2.2vw, 20px);
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: transform 0.1s ease-in;
}
.btn:hover {
  background-color: #fff;
  color: #24b9ff;
  border: 1px solid #24b9ff;
  transform: scale(1.1);
}
.btn:hover > a {
  color: #24b9ff;
}
.btn-outline {
  background-color: #fff;
  border-radius: 10px;
  padding: 0.7rem 1.3rem;
  color: #24b9ff;
  border: 1px solid #24b9ff;
  font-family: Kanit;
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: transform 0.1s ease-in;
}
.btn-outline:hover {
  background-color: #24b9ff;
  color: #fff;
  transform: scale(1.1);
}

.btn a,
.btn-outline a {
  text-decoration: none;
  color: #fff;
}

/* TECHNOLOGIES LIST WITH ICONS */
.techs {
  display: flex;
  width: min(1000px, 90vw);
  flex-wrap: wrap;
  margin-left: 1.3rem;
}
.tech {
  width: clamp(160px, 20vw, 200px);
  margin-bottom: 1rem;
  transition: transoform 0.5s ease-in;
  text-align: center;
}

.tech:hover {
  transform: scale(1.2);
}
.tech-icon {
  width: 110px;
  height: 110px;
}

/* COMPONENT TRANSITIONS */
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
