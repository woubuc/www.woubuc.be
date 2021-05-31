<template>
	<div class="flex flex-col min-h-screen">
		<img class="absolute top-0 left-0 pointer-events-none opacity-0" :src="`https://ping-api.woubuc.be/ingest.png?i=${ trackId }`" referrerpolicy="unsafe-url" aria-hidden="true" />

		<header class="p-6 md:px-12 md:py-10">
			<div class="max-w-screen-md mx-auto flex items-center justify-between">
				<nuxt-link :to="{ name: 'index' }" class="font-title font-semibold text-gray-800 no-underline">
					<span class="font-normal opacity-75">@</span>woubuc
				</nuxt-link>
				<nav class="Nav">
					<nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link>
					<nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
				</nav>
			</div>
		</header>

		<div class="flex-grow px-6 md:px-12">
			<div class="max-w-screen-md mx-auto">
				<nuxt />
			</div>
		</div>

		<footer class="pt-16 pb-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
			<span>&copy; {{ new Date().getFullYear() }} Wouter Buckens</span>
			<a href="mailto:hi@woubuc.be" class="underline hover:text-black focus:text-black">hi@woubuc.be</a>
			<span>🍪 No tracking cookies here</span>
		</footer>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component({
	name: 'DefaultLayout',
	components: {},
})
export default class DefaultLayout extends Vue {

	trackId: number = 1;

	@Watch('$route')
	onRouteChange() {
		this.trackId++;
	}
}
</script>

<style scoped>
.Nav {
	@apply flex items-center space-x-4;
}

.Nav a {
	@apply ml-px font-title font-medium text-gray-500 hover:text-gray-800 focus:text-gray-800;
}
.Nav a.nuxt-link-active {
	@apply ml-0 font-semibold text-gray-800;
}
</style>
