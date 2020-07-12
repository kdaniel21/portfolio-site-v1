<template>
  <div id="footer">
    <span>2020 &copy; Created by Daniel Kiss using</span>
    <img
      src="../assets/tech-icons/vue.svg"
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
  margin-top: clamp(0.5rem, 1.2vw, 1.5rem);
  font-family: Montserrat;
  font-size: clamp(15px, 2vw, 20px);
  text-align: right;
}
span {
  opacity: 0.7;
}
img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
