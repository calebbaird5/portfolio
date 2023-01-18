<template>
  <div class="projects">

    <v-card class="project _2048">
      <div class="card-header d-flex align-center">
        <v-img alt="2048 Icon"
               :src="runtimeConfig.public.filePrefix + 'img/2048.png'"/>
        <div class="versions d-flex justify-space-around">
          <div class="links d-flex flex-column">
            <h3>Vue Version: </h3>
            <v-btn href="https://github.com/calebbaird5/2048-vue">
              <v-img
                class="github-icon mr-2"
                :src="runtimeConfig.public.filePrefix + 'img/github.png'"
                />
              Code Repository
            </v-btn>
            <v-btn class="justify-start" href="https://calebbaird5.github.io/2048-vue">
              <v-icon icon="mdi-web" class="on-black mr-2" /> Live Demo </v-btn>
          </div>
          <div class="links d-flex flex-column">
            <h3>React Version: </h3>
            <v-btn href="https://github.com/calebbaird5/2048-react">
              <v-img
                class="github-icon mr-2"
                :src="runtimeConfig.public.filePrefix + 'img/github.png'"
                />
              Code Repository
            </v-btn>
            <v-btn class="justify-start" href="https://calebbaird5.github.io/2048-react">
              <v-icon icon="mdi-web" class="on-black mr-2" /> Live Demo </v-btn>
          </div>
        </div>
      </div>
      <v-card-title>2048 Game</v-card-title>
      <v-card-text>When I first started learning Vue while working at Clever Coding I recreated the game 2048 as way to become more familiar with vue. Later I recreated the game using react for the same reason.</v-card-text>
    </v-card>

    <p>I have created a number of projects in my free time. I am currently working on uploading them here.</p>
    <h3>Coming Soon!</h3>
  </div>
</template>

<script lang="ts" setup="setup">
  const runtimeConfig = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.project {
  &._2048 {
    .v-img {
      max-width: 200px;

      &.github-icon {
        width: 20px;
      }
    }
    .versions {
      margin: 0 10px;
      gap: 20px;
    }
  }
}
</style>
