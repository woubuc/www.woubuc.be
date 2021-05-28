<template>
	<div>
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

		<div class="px-6 md:px-12">
			<div class="max-w-screen-md mx-auto">
				<nuxt />
			</div>
		</div>

		<footer class="pt-16 pb-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
			<span>&copy; {{ new Date().getFullYear() }} Wouter Buckens</span>
			<a href="mailto:hi@woubuc.be" class="underline hover:text-black focus:text-black">hi@woubuc.be</a>
			<span>🍪 I don't track you</span>
		</footer>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
	name: 'DefaultLayout',
	components: {},
})
export default class DefaultLayout extends Vue {

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
