<template>
  <div class="projects d-flex flex-column">
    <v-card class="project _2048">
      <div class="card-header d-flex align-center">
        <v-img
          alt="2048 Icon"
          :src="runtimeConfig.public.filePrefix + 'img/2048.png'"
        />
        <div class="versions d-flex justify-space-around">
          <div class="links d-flex flex-column">
            <h3>Vue Version:</h3>
            <v-btn href="https://github.com/calebbaird5/2048-vue">
              <v-img
                class="github-icon mr-2"
                :src="runtimeConfig.public.filePrefix + 'img/github.png'"
              />
              Code Repository
            </v-btn>
            <v-btn
              class="justify-start"
              href="https://calebbaird5.github.io/2048-vue"
            >
              <v-icon icon="mdi-web" class="on-black mr-2" /> Live Demo
            </v-btn>
          </div>
          <div class="links d-flex flex-column">
            <h3>React Version:</h3>
            <v-btn href="https://github.com/calebbaird5/2048-react">
              <v-img
                class="github-icon mr-2"
                :src="runtimeConfig.public.filePrefix + 'img/github.png'"
              />
              Code Repository
            </v-btn>
            <v-btn
              class="justify-start"
              href="https://calebbaird5.github.io/2048-react"
            >
              <v-icon icon="mdi-web" class="on-black mr-2" /> Live Demo
            </v-btn>
          </div>
        </div>
      </div>
      <v-divider />
      <v-card-title>2048 Game</v-card-title>
      <v-card-text
        >When I first started learning Vue while working at Clever Coding I
        recreated the game 2048 as way to become more familiar with vue. Later I
        recreated the game using react for the same reason.</v-card-text
      >
    </v-card>

    <v-card class="project permanent-recall">
      <div class="card-header d-flex align-center">
        <v-img
          alt="Permanent Recall Logo"
          :src="
            runtimeConfig.public.filePrefix + 'img/Permanent Recall Logo.png'
          "
        />
        <div class="versions d-flex flex-column ml-2">
          <v-btn
            href="https://github.com/calebbaird5/Permanent-Recall-Web-Suite"
            target="blank"
          >
            <v-img
              class="github-icon mr-2"
              :src="runtimeConfig.public.filePrefix + 'img/github.png'"
            />
            Code Repository
          </v-btn>
          <v-btn
            class="justify-start"
            disabled
            href="https://permanentrecall.com"
          >
            <v-icon icon="mdi-web" class="on-black mr-2" /> Live Version
          </v-btn>
          <span>(Still working on a hosting solution)</span>
        </div>
      </div>
      <v-divider />
      <v-card-title>Permanent Recall</v-card-title>
      <v-card-text>
        <p>A web application for memorizing text passages.</p>
        <p>
          Several years ago I got into memorization and I found a program
          designed to help you memorize a passage every day. It claimed that if
          you followed the program for two years then you would develop a
          photographic memory. I didn't put much stock in that claim but that it
          would be a good challenge regardless.
        </p>
        <p>
          The problem with memorizing so many passages is that you need to
          review the passages multiple times so you don't forget them. However
          when you add a new passage every day they really start to pile up. I
          was using index cards to store my memorized passages and I had a
          filing system for reviewing. But it was tedious and not mobile. So I
          decided to make it into a web app.
        </p>
        <div class="review-schedule">
          <h4>Review Schedule</h4>
          <div>
            After a passages is memorized it will be reviewed:
            <ul>
              <li>Once a day for a week</li>
              <li>Once a week for a month</li>
              <li>Once a month for a year</li>
            </ul>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup="setup">
const runtimeConfig = useRuntimeConfig();
</script>

<style lang="scss" scoped>
.projects {
  gap: 10px;
}

.project {
  .v-img {
    width: 200px;
    max-width: 200px;
    margin-right: 10px;

    &.github-icon {
      width: 20px;
    }
  }

  .v-btn {
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .v-divider {
    margin-top: 10px;
  }

  &._2048 {
    .versions {
      gap: 20px;
    }
  }

  &.permanent-recall {
    :deep(.review-schedule) {
      margin-top: 5px;

      h4 {
        margin-left: -10px;
        border-bottom: 1px solid;
        border-color: rgb(var(--v-theme-text));
      }
      padding-left: 10px;
    }
  }
}
</style>
