<script lang="ts" setup>
import { useTheme } from "vuetify";

const runtimeConfig = useRuntimeConfig();
const theme = useTheme();

const projects = [
  {
    class: "permanent-recall",
    headerClass: "py-4 px-2",
    logo: theme.global.current.value.dark
      ? "img/job-chemist-logo-horizontal-dark.svg"
      : "img/job-chemist-logo-horizontal.svg",
    logoAlt: "Job Chemist Logo",
    versions: [
      {
        groupLabel: "",
        links: [
          {
            type: "github",
            href: "https://github.com/",
            label: "Private Repository",
            disabled: true,
          },
          {
            type: "live",
            href: "https://admin.jobchemist.dev",
            label: "Live Version",
          },
        ],
      },
    ],
    credentials: {
      username: "demo@fakeemail.com",
      password: "password",
    },
    title: "Job Chemist",
    description:
      "A tool for travel nurse recruiting companies to facilitate making placements.",
    features: [
      "Mapped Job Search",
      "Mapped Candidate Search",
      "Saved Search. (Get notified when there are new results for an important candidate or job search.)",
    ],
  },
  {
    class: "permanent-recall",
    headerClass: "pa-2",
    logo: "img/Permanent Recall Logo.png",
    logoAlt: "Permanent Recall Logo",
    versions: [
      {
        groupLabel: "",
        links: [
          {
            type: "github",
            href: "https://github.com/calebbaird5/permanent-recall-nuxt",
            label: "Code Repository",
          },
          {
            type: "live",
            href: "https://permanent-recall.vercel.app/",
            label: "Live Version",
          },
        ],
      },
    ],
    credentials: {
      username: "demo@fakeemail.com",
      password: "password",
    },
    title: "Permanent Recall",
    description: "A web application for memorizing text passages.",
    extraText: [
      "Several years ago I got into memorization and I found a program designed to help you memorize a passage every day. It claimed that if you followed the program for two years then you would develop a photographic memory. I didn't put much stock in that claim but that it would be a good challenge regardless.",
      "The problem with memorizing so many passages is that you need to review the passages multiple times so you don't forget them. However when you add a new passage every day they really start to pile up. I was using index cards to store my memorized passages and I had a filing system for reviewing. But it was tedious and not mobile. So I decided to make it into a web app.",
    ],
    reviewSchedule: [
      "Once a day for a week",
      "Once a week for a month",
      "Once a month for a year",
    ],
  },
  {
    class: "_2048",
    headerClass: "pa-2",
    logo: "img/2048.png",
    logoAlt: "2048 Icon",
    versions: [
      {
        groupLabel: "Vue Version:",
        links: [
          {
            type: "github",
            href: "https://github.com/calebbaird5/2048-vue",
            label: "Code Repository",
          },
          {
            type: "live",
            href: "https://calebbaird5.github.io/2048-vue",
            label: "Live Demo",
          },
        ],
      },
      {
        groupLabel: "React Version:",
        links: [
          {
            type: "github",
            href: "https://github.com/calebbaird5/2048-react",
            label: "Code Repository",
          },
          {
            type: "live",
            href: "https://calebbaird5.github.io/2048-react",
            label: "Live Demo",
          },
        ],
      },
    ],
    title: "2048 Game",
    description:
      "When I first started learning Vue while working at Clever Coding I recreated the game 2048 as way to become more familiar with vue. Later I recreated the game using react for the same reason.",
  },
  {
    class: "go-todo",
    headerClass: "pa-2",
    logo: "img/Cobra_Icon.png",
    logoAlt: "Go Todo Icon",
    versions: [
      {
        groupLabel: "",
        links: [
          {
            type: "github",
            href: "https://github.com/calebbaird5/go-todo",
            label: "Code Repository",
          },
          {
            type: "live",
            label: "Live Demo",
            disabled: true,
          },
        ],
      },
    ],
    title: "Todo CLI",
    description:
      "I built a command-line todo application in Go to deepen my understanding of the language. Powered by Cobra, it lets you efficiently add, list, complete, delete, and tag tasks—all from your terminal. Whether you want to organize tasks with tags or quickly manage your to-dos, this CLI tool streamlines your workflow with simple, intuitive commands.",
  },
];
</script>

<template>
  <div class="projects d-flex flex-column">
    <v-card v-for="(project, idx) in projects" :key="idx" class="project pa-4" :class="project.class">
      <div class="card-header d-flex align-center items-center flex-wrap" :class="project.headerClass">
        <v-img v-if="project.logo" :alt="project.logoAlt" :src="runtimeConfig.public.filePrefix + project.logo" />
        <template v-if="project.versions">
          <template v-for="(group, gIdx) in project.versions" :key="'group-' + gIdx">
            <div class="links d-flex flex-column">
              <h3 v-if="group.groupLabel">{{ group.groupLabel }}</h3>
              <template v-for="(link, lIdx) in group.links" :key="'l-' + lIdx">
                <v-btn :href="link.href" target="blank" class="justify-start"
                  :disabled="'disabled' in link && link.disabled">
                  <v-img v-if="link.type === 'github'" class="github-icon mr-2"
                    :src="runtimeConfig.public.filePrefix + 'img/github.png'" />
                  <v-icon v-else icon="mdi-web" class="on-black mr-2" />
                  {{ link.label }}
                </v-btn>
              </template>
            </div>
          </template>
        </template>
        <div v-if="project.credentials">
          <h4 class="mb-1">Credentials:</h4>
          <p class="text-body-2">
            Username:
            <v-code>{{ project.credentials.username }}</v-code>
          </p>
          <p class="text-body-2">
            password:
            <v-code class="ml-1">{{ project.credentials.password }}</v-code>
          </p>
        </div>
      </div>
      <v-divider />
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-text>
        <p v-if="project.description">{{ project.description }}</p>
        <div v-if="project.features" class="mt-2">
          <p>Features include:</p>
          <ul class="ml-4">
            <li v-for="(feature, fIdx) in project.features" :key="fIdx">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div v-if="project.extraText">
          <p v-for="(text, tIdx) in project.extraText" :key="tIdx">
            {{ text }}
          </p>
        </div>
        <div v-if="project.reviewSchedule" class="review-schedule">
          <h4 class="mb-2">Review Schedule</h4>
          <div>
            After a passages is memorized it will be reviewed:
            <ul class="ml-4">
              <li v-for="(item, rIdx) in project.reviewSchedule" :key="rIdx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  gap: 10px;
  padding: 8px;
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
    min-width: 160px;
    font-size: 1rem;
  }

  .v-divider {
    margin-top: 10px;
  }

  .card-header {
    gap: 16px;
    flex-wrap: wrap;
    align-items: flex-start;
    padding-bottom: 8px;
  }

  .links {
    margin-bottom: 8px;
  }

  .mb-1 {
    margin-bottom: 4px;
  }

  .mb-2 {
    margin-bottom: 8px;
  }

  .mt-2 {
    margin-top: 8px;
  }

  .ml-4 {
    margin-left: 16px;
  }

  .review-schedule {
    margin-top: 20px;

    h4 {
      border-bottom: 1px solid;
      border-color: rgb(var(--v-theme-text));
    }
  }

  // Responsive styles for mobile
  @media (max-width: 600px) {
    .card-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
    }

    .v-img {
      width: 170px;
      max-width: 170px;
      margin-right: 0;
      margin-bottom: 14px;
    }

    .v-btn {
      min-width: 120px;
      font-size: 0.95rem;
      margin-bottom: 8px;
      margin-right: 0;
    }

    .links {
      margin-bottom: 4px;
    }

    .v-card-title {
      font-size: 1.1rem;
      padding: 8px 0 4px 0;
    }

    .v-card-text {
      font-size: 0.98rem;
      padding: 0 2px;
    }

    .review-schedule {
      margin-top: 12px;

      h4 {
        font-size: 1rem;
      }
    }

    .ml-4 {
      margin-left: 10px;
    }
  }
}
</style>
