<template>
  <div class="hero lt-grid-container">
    <div class="lt-Logo">
      <img src="../../static/logo.svg" :alt="settings.site_name" class="logo" />
    </div>
    <div class="lt-Text1">
      <h1 class="hero-title" v-html="settings.hero_title" />
    </div>
    <div class="lt-Text2">
      <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json"),
      logo: require("../../static/logo.svg")
    };
  }
};
</script>

<style>
.lt-grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-items: center;
  grid-gap: 2rem 4rem;
}

@media (min-width: 920px) {
  .lt-Logo {
    grid-area: 1 / 1 / 3 / 2;
  }

  .lt-Text1 {
    grid-area: 1 / 2 / 2 / 3;
  }

  .lt-Text2 {
    grid-area: 2 / 2 / 3 / 3;
  }
}

.logo {
  width: 20rem;
  min-width: 250px;
  filter: invert(81%) sepia(47%) saturate(3958%) hue-rotate(358deg)
    brightness(106%) contrast(107%);
}
.hero {
  text-align: center;
  /* width: 480px; */
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  text-align: left;
}
.hero-title p,
.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1.3em;
  font-weight: 500;
  padding: 0;
  margin: 0;
  text-align: justify;
}
</style>
