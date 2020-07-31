<template>
  <div id="techs">
    <div class="tech" v-for="tech in techs" :key="tech.name">
      <img
        :src="tech.img"
        :alt="`${tech.name} logo`"
        :title="tech.name"
        class="tech-icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['techs']
};
</script>

<style scoped>
/* TECHNOLOGIES LIST WITH ICONS */
#techs {
  display: flex;
  width: min(1000px, 95%);
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
</style>
