<template>
  <div id="contact">
    <!-- TITLE AND LEAD TEXT -->
    <h1>Get in touch with me</h1>
    <p>
      Do you have a <span class="blue">great idea</span> or just want to say hi?
      Fill out the contact form below or send me an email and I’ll connect with
      you as soon as I can (I promise!). I’m looking forward get in touch with
      you! 🙌
    </p>
    <!-- SUCCESS OR ERROR MESSAGE -->
    <transition
      appear
      appear-class="show-message"
      appear-active-class="show-message-active"
    >
      <div class="contact-form" v-if="showSuccess || showError">
        <p v-if="showSuccess">
          Your message was <span class="blue">successfully</span> sent!
        </p>
        <p v-if="showSuccess">
          Thanks for contacting me! I'll reach out to you as soon as possible
          and I hope we'll do something big <span class="blue">together</span>!
        </p>
        <p v-if="showError">
          Hey! Unfortunately something went wrong... Could you please try again
          via <span class="blue">email</span>?
        </p>
        <a href="mailto:kissd621@gmail.com" v-if="showError">
          <img
            src="https://res.cloudinary.com/kdaniel/image/upload/v1596171231/portfolio-site/other-icons/mail_vx7ebc.svg"
            title="Send me an email!"
            alt="Email icon"
            class="email-icon"
          />
          <span style="margin-left: 0.5rem" class="blue">Send me an email</span>
        </a>
      </div>
    </transition>
    <!-- CONTACT FORM -->
    <form
      class="contact-form"
      @submit.prevent="sendContact"
      v-if="!showError && !showSuccess"
    >
      <div class="form-group">
        <div class="label">Your Name</div>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <div class="label">Your Email</div>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <div class="label">Your Message</div>
        <textarea v-model="message" required></textarea>
      </div>
      <div class="btn-container">
        <button class="btn-outline">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showSuccess: false,
      showError: false
    };
  },
  methods: {
    sendContact() {
      if (!this.name || !this.email || !this.message) return;

      this.$Progress.start();

      axios
        .post(`${process.env.VUE_APP_API_URL}/contacts`, {
          name: this.name,
          email: this.email,
          message: this.message
        })
        .then(() => {
          this.$Progress.finish();

          this.showSuccess = true;
        })
        .catch(() => {
          this.$Progress.fail();
          this.showError = true;
        });
    }
  }
};
</script>
<style scoped>
#contact {
  margin-top: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.contact-form {
  width: 100%;
  width: min(40rem, 100%) !important;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 4%;
  padding: min(2rem, 4%) !important;
  font-family: Arvo;
}
.form-group {
  margin-bottom: 1rem;
}
input,
textarea {
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Kanit;
  padding: 3px 10px;
  border: 1px solid #24b9ff;
  transition: transform 0.25s;
}
.label {
  margin-bottom: 10px;
}
input {
  width: 80%;
  width: min(20rem, 80%);
}
input:focus,
textarea:focus {
  border: 1px solid #2b2b42;
  transform: scale(1.03);
}
textarea {
  width: 95%;
  max-width: 30rem;
  height: 10rem;
}
.btn-container {
  max-width: 31.5rem;
  text-align: right;
}
.btn-outline {
  margin-top: 1rem;
  font-size: 18px;
  padding: 0.5rem 0.8rem;
}

.email-icon {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

.show-message-active {
  transition: all 2s ease-in;
}
.show-message {
  opacity: 0;
}

/* @media only screen and (max-width: 700px) {
  .contact-form {
    padding: 1rem 2rem;
  }
  p {
    width: 90%;
    font-size: 15px;
  }
  h1 {
    font-size: 55px;
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 1100px) {
  h1 {
    font-size: 65px;
  }
  p {
    width: 80%;
  }
} */
</style>
