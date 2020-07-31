<template>
  <div id="main">
    <div class="name">
      <vue-typer
        class="firstname"
        :text="['Daniel']"
        :repeat="0"
        initial-action="typing"
        :pre-type-delay="100"
        :type-delay="200"
        :pre-erase-delay="0"
        :erase-delay="0"
        erase-style="select-all"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
      <vue-typer
        class="lastname"
        :text="['Kiss']"
        :repeat="0"
        initial-action="typing"
        :pre-type-delay="1300"
        :type-delay="200"
        :pre-erase-delay="0"
        :erase-delay="0"
        erase-style="select-all"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
      <div class="bottom-text">
        <vue-typer
          :text="['Full Stack ']"
          :repeat="0"
          initial-action="typing"
          :pre-type-delay="2100"
          :type-delay="100"
          :pre-erase-delay="0"
          :erase-delay="0"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
        <vue-typer
          class="title"
          :text="['Web Developer']"
          :repeat="0"
          initial-action="typing"
          :pre-type-delay="3100"
          :type-delay="100"
          :pre-erase-delay="0"
          :erase-delay="0"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
    </div>
    <div class="button-container">
      <router-link to="about">
        <div class="btn">
          Get To Know Me
        </div>
      </router-link>
    </div>
    <div class="icons">
      <a href="https://github.com/kdaniel21" target="_blank"
        ><img
          src="https://res.cloudinary.com/kdaniel/image/upload/v1596171231/portfolio-site/other-icons/github_xl9ark.svg"
          alt="GitHub Logo"
          class="logo"
      /></a>
      <!-- <a href="#" target="_blank"
        ><img src="https://res.cloudinary.com/kdaniel/image/upload/v1596171231/portfolio-site/other-icons/linkedin_gjwvxg.svg" alt="LinkedIn Logo" class="logo"
      /></a> -->
      <a href="mailto:kissd621@gmail.com" target="_blank"
        ><img
          src="https://res.cloudinary.com/kdaniel/image/upload/v1596171231/portfolio-site/other-icons/mail_vx7ebc.svg"
          alt="Email Logo"
          class="logo"
      /></a>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'Main',
  components: {
    VueTyper
  }
};
</script>
<style scoped>
#main {
  margin-left: 1rem;
}
.name {
  margin-top: 10rem;
  text-transform: uppercase;
}
.lastname,
.firstname {
  font-family: Montserrat;
}
.firstname {
  font-size: 18.5vw;
  font-size: min(18.5vw, 160px);
  line-height: min(18.5vw, 160px);
}
.lastname {
  display: inline-block;
  font-size: 6.7vw;
  font-size: min(6.7vw, 60px);
  line-height: min(6.7vw, 60px);
  transform: translate(-30%, -60%) rotate(90deg);
}

.bottom-text {
  font-family: Arvo;
  font-size: 5.5vw;
  font-size: min(5.5vw, 60px) !important;
  line-height: min(5.5vw, 60px);
}
.btn {
  margin-top: 3rem;
  font-size: 8vw;
  font-size: min(8vw, 30px) !important;
  padding: 5px;
  width: 80vw;
  width: min(80vw, 17rem) !important;
}
.icons {
  margin-top: 3rem;
}
.logo {
  width: 17vw;
  width: clamp(40px, 17vw, 80px) !important;
  height: clamp(40px, 17vw, 80px);
  opacity: 0.6;
  margin-right: 2.5rem;
  margin-right: clamp(0.5rem, 2.5rem, 4rem) !important;
  cursor: pointer;
}
.icons:last-child {
  margin-right: 0;
}
</style>

<style>
.vue-typer .custom.char {
  color: #2b2d42;
}
span.vue-typer.title span span {
  color: #24b9ff !important;
}
.vue-typer .custom.caret.pre-type {
  visibility: hidden;
}
</style>
