<template>
  <div id="about">
    <!-- INTRODUCTION SECTION -->
    <h1>
      About me
    </h1>
    <p>
      Hi! My name is Daniel Kiss, an aspiring
      <span class="blue">full-stack web developer</span> with a special interest
      in back-end development based in <span class="blue">Sopron</span>, Hungary
      🇭🇺.
    </p>
    <p>
      Currently I’m a high school student and I’m also teaching children to code
      in <span class="blue">Logiscool</span> Hungary. I’ve got a strong interest
      in the world of Computer Science, planning my future in this field 👨‍💻.
    </p>
    <p>
      Aside from programming I enjoy training and competing in the sport of
      <span class="blue">triathlon</span> 🏊🚴🏃.
    </p>
    <!-- TECHNOLOGIES SECTION -->
    <h2>Technologies I've worked with</h2>
    <techs :techs="techs"></techs>
    <h2>Objectives</h2>
    <p>
      My future plans include studying studying Computer Science somewhere in
      Europe in either German or English 🎓. I’m eager to sharpen my skills in
      web development and software engineering, learn new technologies,
      participate in challenging projects and meet interesting people.
    </p>
    <div class="action">
      <router-link to="projects">
        <div class="btn projects-btn">
          Take a look at my projects
        </div>
      </router-link>
      <router-link to="contact">
        <div class="btn">
          Contact Me
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import Techs from '../components/Techs';

export default {
  name: 'About',
  components: {
    Techs
  },
  data() {
    return {
      techs: [
        {
          name: 'JavaScript',
          img: 'javascript.svg'
        },
        {
          name: 'Angular',
          img: 'angular.svg'
        },
        {
          name: 'Vue',
          img: 'vue.svg'
        },
        {
          name: 'Java',
          img: 'java.svg'
        },
        {
          name: 'Node.js',
          img: 'nodejs.svg'
        },
        {
          name: 'Express',
          img: 'expressjs.svg'
        },
        {
          name: 'Git',
          img: 'git.svg'
        },
        {
          name: 'Firebase',
          img: 'firebase.svg'
        },
        {
          name: 'MongoDB',
          img: 'mongodb.svg'
        },
        {
          name: 'CSS',
          img: 'css.svg'
        }
      ]
    };
  }
};
</script>
<style scoped>
#about {
  margin-left: 1rem;
  color: #2b2d42;
}
.action {
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.projects-btn {
  margin-right: 1rem;
}
</style>
