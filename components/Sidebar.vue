<template>
  <v-navigation-drawer v-model="sidePanel" permanent :rail="rail" class="side-panel" app>
		<v-list>
			<v-list-item>
        <v-avatar>
          <v-img class="white--text align-end" height="100%" :src="avatar" />
        </v-avatar>
        <h2 v-if="!rail" class="text-center"> Caleb Baird </h2>
			</v-list-item>

      <v-list-item :href="'tel:' + phone">
        <v-icon icon="mdi-phone" />
        <span v-if="!rail">{{ phone }}</span>
      </v-list-item>

      <v-list-item :href="'mailto:' + email">
        <v-icon icon="mdi-email" />
        <span v-if="!rail">{{ email }}</span>
      </v-list-item>

      <v-list-item target="blank" href="https://www.linkedin.com/in/calebbaird">
        <v-icon icon="mdi-linkedin" />
        <span v-if="!rail">linkedin.com/in/calebbaird</span>
      </v-list-item>

      <v-list-item @click="setRail">
        <v-icon v-if="rail" icon="mdi-unfold-more-vertical" />
        <v-icon v-else icon="mdi-unfold-less-vertical" />
        <span v-if="!rail">Minimize Sidebar</span>
      </v-list-item>

      <v-list-item @click="toggleTheme">
        <v-icon icon="mdi-theme-light-dark" />
        <span v-if="!rail">
          Switch to {{ theme.global.current.value.dark ? 'light' : 'dark' }} mode</span>

      </v-list-item>

		</v-list>

	</v-navigation-drawer>
</template>

<script lang="ts" setup="setup">
  import { useTheme } from 'vuetify'
const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? 'solarizedLight' : 'solarizedDark';
}

if (window.matchMedia
  && window.matchMedia("(prefers-color-scheme)".media !== "not at all")
  && window.matchMedia("(prefers-color-scheme: light)")
  && window.matchMedia("(prefers-color-scheme: light)").matches) {
  theme.global.name.value = 'solarizedLight';
}

const sidePanel: Rev<boolean | null> = ref(true);
const rail: Rev<boolean> = ref(false);

function setRail() {
  console.log('setRail')
  rail.value = !rail.value;
}
  const avatar = ref('/portfolio/img/profile.png');
const name = ref('Caleb Baird');
const phone = ref('208-390-8659');
const email = ref('calebbaird5@gmail.com');
const linkedin = ref('https://linkedin.com/in/calebbaird');
const drawer = ref(true);
</script>

<style lang="scss" scoped>
.side-panel {
  padding-left: 25px;
  border-right: 1px solid white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 240px;

  .v-avatar {
    width: 100%;
    padding-top: 100%;

    & > * {
      position: absolute;
      top: 0;
    }
  }

  .v-icon {
    margin-right: 10px;
  }

}
</style>
