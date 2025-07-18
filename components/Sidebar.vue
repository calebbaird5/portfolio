<template>
  <v-navigation-drawer
    v-model="sidePanel"
    permanent
    :rail="isRail"
    class="side-panel pl-25"
    :class="{ minimized: isMinimized }"
    app
    :width="isMinimized ? 60 : 280"
  >
    <v-list>
      <v-list-item>
        <v-avatar>
          <v-img class="white--text align-end" height="100%" :src="avatar" />
        </v-avatar>
        <h2 v-if="!isMinimized" class="text-center">Caleb Baird</h2>
      </v-list-item>

      <v-list-item :href="'tel:' + phone">
        <v-icon icon="mdi-phone" />
        <span v-if="!isMinimized">{{ phone }}</span>
      </v-list-item>

      <v-list-item :href="'mailto:' + email">
        <v-icon icon="mdi-email" />
        <span v-if="!isMinimized">{{ email }}</span>
      </v-list-item>

      <v-list-item target="blank" href="https://www.linkedin.com/in/calebbaird">
        <v-icon icon="mdi-linkedin" />
        <span v-if="!isMinimized">linkedin.com/in/calebbaird</span>
      </v-list-item>

      <v-list-item @click="setRail">
        <v-icon v-if="isMinimized" icon="mdi-unfold-more-vertical" />
        <v-icon v-else icon="mdi-unfold-less-vertical" />
        <span v-if="!isMinimized">Minimize Sidebar</span>
      </v-list-item>

      <v-list-item @click="toggleTheme">
        <v-icon icon="mdi-theme-light-dark" />
        <span v-if="!isMinimized">
          Switch to
          {{ theme.global.current.value.dark ? "light" : "dark" }} mode</span
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
import { useTheme } from "vuetify";
const theme = useTheme();

const props = defineProps<{
  sidePanel: boolean;
  mobile: boolean;
}>();
const emit = defineEmits(["update:side-panel"]);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "solarizedLight"
    : "solarizedDark";
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme)".media !== "not at all") &&
  window.matchMedia("(prefers-color-scheme: light)") &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  theme.global.name.value = "solarizedLight";
}

const isRail: Ref<boolean> = ref(false);

function setRail() {
  isRail.value = !isRail.value;
}

// isMinimized computed to be rail.value && !mobile
const isMinimized = computed(() => {
  return isRail.value;
});
const avatar = ref(runtimeConfig.public.filePrefix + "img/profile.png");
const name = ref("Caleb Baird");
const phone = ref("208-390-8659");
const email = ref("calebbaird5@gmail.com");
const linkedin = ref("https://linkedin.com/in/calebbaird");
const drawer = ref(true);

const sidePanel = computed({
  get: () => props.sidePanel,
  set: (val: boolean) => emit("update:side-panel", val),
});
const mobile = computed(() => props.mobile);
</script>

<style lang="scss" scoped>
.side-panel {
  border-right: 1px solid white;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &.minimized {
    padding-left: 0;
  }

  .v-list-item__content {
    align-items: center;
  }

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
