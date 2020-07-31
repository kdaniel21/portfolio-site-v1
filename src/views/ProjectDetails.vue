<template>
  <div id="project-details">
    <transition
      appear
      appear-class="load-project"
      appear-active-class="load-project-active"
    >
      <div class="project" v-if="project">
        <img
          :src="project.img"
          alt="Project image"
          :title="project.name"
          class="project-image"
        />
        <h2>{{ project.name }}</h2>
        <p class="project-description">
          {{ project.description }}
        </p>
        <h2>Technologies Used</h2>
        <techs :techs="project.technologies"></techs>
        <div class="actions">
          <div class="date">Created: {{ project.created }}</div>
          <div class="buttons">
            <a :href="project.repoUrl" target="_blank" v-if="project.repoUrl">
              <div class="btn repo-btn">Repository</div>
            </a>
            <a :href="project.demoUrl" target="_blank" v-if="project.demoUrl">
              <div class="btn">Demo</div>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import Techs from '../components/Techs';

export default {
  name: 'ProjectDetails',
  components: { Techs },
  data() {
    return {
      project: {}
    };
  },
  mounted() {
    const { slug } = this.$route.params;

    this.$Progress.start();
    axios.get(`${process.env.VUE_APP_API_URL}/projects/${slug}`).then(res => {
      this.$Progress.finish();
      this.project = res.data.project;
    });
  }
};
</script>

<style scoped>
.project {
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  padding: 1rem;
}
h2 {
  font-size: clamp(20px, 12vw, 55px);
}
.project-image {
  width: 100%;
}
.project-description {
  width: 100%;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.buttons {
  display: flex;
  justify-content: space-between;
  width: min(16rem, 40vw);
}
.date {
  font-size: 20px;
  margin-top: auto;
  margin-left: 0.5rem;
  font-family: Kanit;
}

.load-project-active {
  transition: all 0.5s ease-in;
}
.load-project {
  opacity: 0;
}

@media only screen and (max-width: 800px) {
  .actions {
    flex-direction: column;
  }
  .buttons {
    margin-top: 0.8rem;
    justify-content: flex-end;
    width: 100%;
  }
  .btn {
    font-size: 18px;
    margin-right: 0.5rem;
  }
}
</style>
