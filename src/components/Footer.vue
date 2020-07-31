<template>
  <div id="footer">
    <span>2020 &copy; Created by Daniel Kiss using </span>
    <img
      src="https://res.cloudinary.com/kdaniel/image/upload/v1596170003/portfolio-site/tech-icons/vue_ovr6z9.svg"
      alt="Vue icon"
      title="Vue.js"
      class="vue-icon"
    />
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>
<style scoped>
#footer {
  font-family: Montserrat;
  font-size: clamp(15px, 2vw, 20px);
  text-align: right;
}
span {
  opacity: 0.7;
}
img {
  max-width: 20px;
  max-height: 20px;
  width: clamp(15px, 2vw, 20px);
  height: clamp(15px, 2vw, 20px);
  vertical-align: middle;
}
</style>
