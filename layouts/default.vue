<template>
	<v-app>

    <Sidebar />

    <v-main>
		  <v-tabs v-model="activeTab" >
				<v-tab v-for="(item, i) in menuItems"> {{ item.title }} </v-tab>
      </v-tabs>
      <v-divider />

	    <v-container>
		    <slot />
	    </v-container>
		</v-main>

	</v-app>
</template>

<script lang="ts" setup="setup">
  import { useRouter, useRoute } from 'vue-router'

interface MenuItem {
  title: string;
  to?: string;
  private?: boolean;
  pageTitle?: string
}

const menuItems: Ref<MenuItem[]> = ref([
	{ title: 'About Me', to: '/' },
	{ title: 'Resume', to: '/resume' },
	{ title: 'Projects', to: '/projects' },
])

const activeTab = ref(0);

const router = useRouter();
const route = useRoute();

onMounted(() => {
  let currentTab = menuItems.value.findIndex(el => el.to === route.path)
  console.log('currentTab', currentTab)
  if (currentTab !== -1) activeTab.value = currentTab;
})

watch(activeTab, (newValue, oldValue) => {
  router.push(menuItems.value[newValue].to);
})

</script>

<!-- Scoped Styles -->
<style lang="scss" scoped>
.v-container {
  margin-left: 0;
}
</style>

<!-- Global Styles -->
<style lang="scss">
a {
  color: #66b;
}

.heading-underline {
  position: relative;
  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgb(var(--v-theme-secondary));
    width: 30%;
  }
}

</style>
