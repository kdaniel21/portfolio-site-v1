<template>
  <div id="cookie-consent" v-show="show">
    <p>
      Hey! I just wanted to say that the site uses some cookies. But no reason
      for panic, because we all love 🍪, right?
    </p>
    <span><button class="btn-outline" @click="accept">Sure</button></span>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return { show: true };
  },
  created() {
    this.show = !localStorage.getItem('cookieConsentAccepted');
  },
  methods: {
    accept() {
      localStorage.setItem('cookieConsentAccepted', true);
      this.show = false;
    }
  }
};
</script>

<style scoped>
#cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100vw - 42px);
  background: #fff;
  padding: 5px 20px;
  border: 1px solid #24b9ff;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 0;
}

p {
  font-size: 1.3rem;
}

.btn-outline {
  font-size: 1rem;
  padding: 0.4rem 1rem;
}

span {
  margin-left: auto;
}
</style>
