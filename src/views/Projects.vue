<template>
  <div id="projects">
    <h1>Projects</h1>
    <transition-group name="cards" class="projects-container" tag="div">
      <div
        class="project-wrapper"
        v-for="project in projects"
        :key="project.name"
      >
        <div class="project-card">
          <img
            :src="project.coverImg"
            class="card-img"
            alt="Project image"
            title="Project screenshot"
          />
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-description">{{ project.summary }}</p>
          <div class="actions">
            <div class="icons">
              <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank">
                <img
                  src="https://res.cloudinary.com/kdaniel/image/upload/v1596171231/portfolio-site/other-icons/github_xl9ark.svg"
                  title="GitHub Repository"
                  alt="GitHub Logo"
                  class="icon"
                />
              </a>
              <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank">
                <img
                  src="https://res.cloudinary.com/kdaniel/image/upload/v1596171231/portfolio-site/other-icons/webpage_elgxqa.svg"
                  title="Demo"
                  alt="Webpage Logo"
                  class="icon"
                />
              </a>
            </div>
            <router-link :to="`projects/${project.slug}`">
              <div class="btn-outline">
                Details
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Projects',
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.$Progress.start();
    axios
      .get(`${process.env.VUE_APP_API_URL}/projects`)
      .then(res => {
        this.projects = res.data.projects;
        this.$Progress.finish();
      })
      .catch(() => this.$Progress.fail());
  }
};
</script>
<style scoped>
#projects {
  margin-left: 1rem;
  transition: fade;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.project-wrapper {
  width: 28rem;
  height: 33rem;
}
.project-card {
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: min(25rem, 90vw);
  /* support browsers not supporting clamp() */
  height: 60vh;
  height: clamp(22rem, 60vh, 30rem) !important;
  transition: transform 0.2s ease-in;
}
.project-card:hover {
  transform: scale(1.05);
}
.card-img {
  max-width: 90vw;
  width: min(25rem, 90vw) !important;
  height: min(12rem, 20vh);
  border-radius: 15px;
}
h3.card-title {
  text-align: center;
  text-transform: capitalize;
  font-size: clamp(20px, 6vw, 35px);
  font-family: Arvo;
  margin-top: 10px;
}
p.card-description {
  font-size: 20px;
  text-transform: capitalize;
  font-family: Arvo;
  margin-top: 5px;
  margin-bottom: 0;
  white-space: pre-wrap;
  padding: 0 1rem;
  overflow: hidden;
  width: 95%;
}
.actions {
  position: absolute;
  display: flex;
  width: 90%;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  bottom: 1rem;
}
.icon {
  width: 44px;
  height: 44px;
  margin-right: 8px;
}
.btn-outline {
  width: 4rem;
  padding: 0.7rem;
  font-size: 17px;
}
.details-btn > a {
  text-decoration: none;
  color: #24b9ff;
  font-weight: 500;
}
.details-btn:hover {
  background-color: #24b9ff;
}
.details-btn:hover > a {
  color: #fff;
}

.cards-enter-active,
.cards-leave-active {
  transition: all 1s;
}
.cards-enter,
.cards-leave-to {
  transform: translateY(20%);
}
</style>
