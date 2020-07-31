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
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170003/portfolio-site/tech-icons/javascript_oo047w.svg'
        },
        {
          name: 'Angular',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170008/portfolio-site/tech-icons/angular_ut7ry9.svg'
        },
        {
          name: 'Vue',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170003/portfolio-site/tech-icons/vue_ovr6z9.svg'
        },
        {
          name: 'Java',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170003/portfolio-site/tech-icons/java_azbwoq.svg'
        },
        {
          name: 'Node.js',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170002/portfolio-site/tech-icons/nodejs_dolm0a.svg'
        },
        {
          name: 'Express',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170006/portfolio-site/tech-icons/expressjs_nb3e9d.svg'
        },
        {
          name: 'Git',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170005/portfolio-site/tech-icons/git_i4eslw.svg'
        },
        {
          name: 'Firebase',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170006/portfolio-site/tech-icons/firebase_hw3khm.svg'
        },
        {
          name: 'MongoDB',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170003/portfolio-site/tech-icons/mongodb_jm7jrz.svg'
        },
        {
          name: 'CSS',
          img:
            'https://res.cloudinary.com/kdaniel/image/upload/v1596170007/portfolio-site/tech-icons/css_gw5jlc.svg'
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
