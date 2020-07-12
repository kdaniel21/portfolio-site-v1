<template>
  <!-- NAVIGATION BAR -->
  <div id="header">
    <div id="wrapper" @click="onNavbarClose">
      <nav>
        <!-- NAME ON THE LEFT -->
        <router-link to="/" id="logo">
          <span id="firstname">Daniel</span>
          <span id="lastname">Kiss</span>
        </router-link>
        <!-- NAVIGATION BUTTONS -->
        <ul>
          <router-link v-for="menu in menus" :to="'/' + menu.url">
            <li>
              {{ menu.name }}
            </li>
          </router-link>
          <!-- RESUME DOWNLOAD ICON AND BUTTON IN MOBILE VIEW -->
          <!-- <router-link to="/resume">
            <img
              src="../assets/resume.svg"
              alt="Resume icon"
              title="Download Resume"
              class="resume-icon"
            />
            <li class="resume-btn">Download Resume</li>
          </router-link> -->
        </ul>
        <!-- MOBILE RESPONSIVE HAMBURGER ICON -->
        <div id="hamburger-icon" @click="onNavbarOpen">
          <svg viewBox="0 0 10 8" width="30">
            <path
              d="M1 1h8M1 4h 8M1 7h8"
              stroke="#2b2d42"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menus: [
        {
          name: 'Get To Know Me',
          url: 'about'
        },
        {
          name: 'Projects',
          url: 'projects'
        },
        {
          name: 'Get In Touch',
          url: 'contact'
        }
      ]
    };
  },
  methods: {
    onNavbarOpen: () => {
      const wrapperEl = document.querySelector('#wrapper');
      wrapperEl.className = wrapperEl.className === 'active' ? '' : 'active';

      const ulEl = document.querySelector('ul');
      ulEl.className = ulEl.className === 'active' ? '' : 'active';
    },
    onNavbarClose: e => {
      if (e.target.parentElement.parentElement.id === 'hamburger-icon') return;

      const wrapperEl = document.querySelector('#wrapper');
      const ulEl = document.querySelector('ul');
      if (wrapperEl.className === 'active') {
        wrapperEl.className = '';
        ulEl.className = '';
      }
    }
  }
};
</script>

<style>
#header {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 500;

  font-family: Montserrat;
  background-color: #fff;

  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #24b9ff;
}

#wrapper {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

nav #logo {
  color: #2b2d42;
  display: flex;
  margin-left: 1rem;
}

#firstname {
  font-size: 42px;
  line-height: 51px;
  text-align: center;
  text-transform: uppercase;
}

#lastname {
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  transform: translateX(-50%) rotate(90deg);
}

nav ul {
  width: 60%;
  max-width: 25rem;
  /* WITH RESUME BUTTON */
  /* max-width: 30rem */
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  margin-right: 20px;
}

li {
  background-color: #24b9ff;
  padding: 0.7rem;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
}
.resume-btn {
  display: none;
}

a {
  text-decoration: none;
}

#hamburger-icon {
  display: none;
}

a:hover li {
  color: #24b9ff;
  background-color: #ffffff;
  border: 1px solid #24b9ff;
}

a.router-link-active li {
  text-decoration: underline;
}

.resume-icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  nav ul:not(.active) {
    display: none;
  }
  #wrapper:not(.active) > nav > #hamburger-icon {
    display: block;
    margin-right: 1.3rem;
    color: #24b9ff;
  }
  ul.active {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ul.active > a > li {
    margin-top: 0.8rem;
    padding: 0.7rem;
    background-color: #24b9ff;
    border: 1px solid #24b9ff;
    text-align: center;
  }
  ul.active > a:hover > li {
    color: #24b9ff;
    background-color: #fff;
  }
  .resume-btn {
    display: block;
  }
  #wrapper.active {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-x: hidden;
    transition: 0.5s;
  }
  .resume-icon {
    display: none;
  }
}
</style>
