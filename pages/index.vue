
<template>
  <div class="about-me">
    <h2 class="mb-2"> Hi! My name is Caleb Baird</h2>
    <v-divider />
    <div class="section mt-8">
      <h3 class="heading-underline">Skills</h3>
      <div class="skills">
        <div class="skill" v-for="skill in skills">
          <v-btn @click="log(skill.name)" icon>
            <img class="img" :alt="skill.name" :src="'/img/' + skill.icon" />
          </v-btn>
          <span class="name bg-surface">{{ skill.name }}</span>
          <!-- <v-expansion-panel :title="skill.name"  :text="skill.proficiency"/> -->
        </div>
      </div>
    </div>

    <div class="section mt-8">
      <h3 class="heading-underline">Bio</h3>
      <p>I am a software developer with about 5 years of experience.</p>
      <p>So far most of my development experience has been with web development. I enjoy and have a talent for web development but I am also interested in expanding into other development roles.</p>
    </div>
  </div>
</template>

<script lang="ts" setup="setup">
  const skills: Ref<Skill> = ref([
    {
      name: 'HTML5',
      tags: [Tag.frontend],
      proficiency: Proficiency.advanced,
      icon: 'html5.png',
    },
    {
      name: 'CSS',
      tags: [Tag.frontend],
      proficiency: Proficiency.advanced,
      icon: 'css.png',
    },
    {
      name: 'JavaScript',
      tags: [Tag.frontend, Tag.backend],
      proficiency: Proficiency.advanced,
      icon: 'js.png',
    },
    {
      name: 'SASS',
      tags: [Tag.frontend],
      proficiency: Proficiency.advanced,
      icon: 'scss.png',
    },
    {
      name: 'JQuery',
      tags: [Tag.frontend],
      proficiency: Proficiency.intermediate,
      icon: 'jquery.png',
    },
    {
      name: 'TypeScript',
      tags: [Tag.frontend, Tag.backend],
      proficiency: Proficiency.advanced,
      icon: 'ts.png',
    },
    {
      name: 'Node JS',
      tags: [Tag.backend],
      proficiency: Proficiency.advanced,
      icon: 'node.png',
    },
    {
      name: 'Express JS',
      tags: [Tag.backend],
      proficiency: Proficiency.advanced,
      icon: 'express.png',
    },
    {
      name: 'Sequelize JS',
      tags: [Tag.backend],
      proficiency: Proficiency.advanced,
      icon: 'sequelize.png',
    },
    {
      name: 'MySQL',
      tags: [Tag.backend],
      proficiency: Proficiency.intermediate,
      icon: 'mysql.png',
    },
    {
      name: 'MongoDB',
      tags: [Tag.backend],
      proficiency: Proficiency.beginner,
      icon: 'mongodb.png',
    },
    {
      name: 'Mongoose',
      tags: [Tag.backend],
      proficiency: Proficiency.beginner,
      icon: 'mongoose.png',
    },
    {
      name: 'Git',
      tags: [Tag.frontend, Tag.backend, Tag.devOps],
      proficiency: Proficiency.advanced,
      icon: 'git.png',
    },
    {
      name: 'Gitlab',
      tags: [Tag.devOps],
      proficiency: Proficiency.advanced,
      icon: 'gitlab.png',
    },
    {
      name: 'Github',
      tags: [Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'github.png',
    },
    {
      name: 'Linux',
      tags: [Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'linux.png',
    },
    {
      name: 'Bash',
      tags: [Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'bash.png',
    },
    {
      name: 'Apache',
      tags: [Tag.devOps],
      proficiency: Proficiency.beginner,
      icon: 'apache.png',
    },
    {
      name: 'nginx',
      tags: [Tag.devOps],
      proficiency: Proficiency.beginner,
      icon: 'nginx.png',
    },
    {
      name: 'docker',
      tags: [Tag.frontend, Tag.backend, Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'docker.png',
    },
    {
      name: 'docker-compose',
      tags: [Tag.frontend, Tag.backend, Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'docker-compose.png',
    },
    {
      name: 'Digital Ocean',
      tags: [Tag.devOps],
      proficiency: Proficiency.beginner,
      icon: 'digital-ocean.png',
    },
    {
      name: 'AWS',
      tags: [Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'aws.png',
    },
    {
      name: 'AWS S3 Bucket',
      tags: [Tag.devOps],
      proficiency: Proficiency.beginner,
      icon: 's3.png',
    },
    {
      name: 'AWS Route 53',
      tags: [Tag.devOps],
      proficiency: Proficiency.intermediate,
      icon: 'route53.png',
    },
    {
      name: 'Vue',
      tags: [Tag.frontend],
      proficiency: Proficiency.advanced,
      icon: 'vue.png',
    },
    {
      name: 'Nuxt JS',
      tags: [Tag.frontend],
      proficiency: Proficiency.advanced,
      icon: 'nuxt.png',
    },
    {
      name: 'Vuetify',
      tags: [Tag.frontend],
      proficiency: Proficiency.intermediate,
      icon: 'vuetify.png',
    },
    {
      name: 'React',
      tags: [Tag.frontend],
      proficiency: Proficiency.intermediate,
      icon: 'react.png',
    },
    {
      name: 'Angular',
      tags: [Tag.frontend],
      proficiency: Proficiency.beginner,
      icon: 'angular.png',
    },
  ])

interface Skill {
  name: string;
  tags: Tag[];
  proficiency: Proficiency;
  icon: string;
}

enum Tag {
  frontend = 0,
  backend,
  devOps,
}

enum Proficiency {
  beginner = 0,
  intermediate,
  advanced,
  expert,
}

function log(s) {
  console.log(s);
}

</script>

<style lang="scss" scoped>

.skills {
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.skill {
  position: relative;
  display: flex;
  justify-content: center;

  .v-btn {
    margin: 5px;
    width: 55px;
    height: 55px;
    padding: 10px;
    transition: .3s;

    :deep(img) {
      max-width: 100%;
    }

    &:hover {
      width: 60px;
      height: 60px;
      margin: 0 2.5px;

      + .name {
        display: block;
      }
    }
  }

  .name {
    position: absolute;
    top: -30px;
    display: none;
    font-size: 13px;
    padding: 5px;
    border-radius: 5px;
  }
}

</style>
