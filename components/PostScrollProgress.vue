<template>
	<div class="ScrollProgress" :class="`ScrollProgress-${ colour }`">
		<div :style="{ width: `${ scrollPercentage * 100 }%` }"></div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Colour } from '../utils/colours';

@Component({
	name: 'PostScrollProgress',
})
export default class PostScrollProgress extends Vue {

	@Prop({ required: true }) public readonly colour: Colour;

	private scrollPercentage = 0.0;

	mounted() {
		window.addEventListener('scroll', this.onScroll, { capture: true, passive: true });
		this.onScroll();
	}

	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		this.scrollPercentage = window.pageYOffset / (document.body.clientHeight - window.innerHeight);
	}
}
</script>

<style scoped>
.ScrollProgress {
	@apply fixed top-0 left-0 w-full h-[2px];
}
.ScrollProgress > div {
	@apply h-full;
}

.ScrollProgress-red > div { @apply bg-red-500 }
.ScrollProgress-orange > div { @apply bg-orange-500 }
.ScrollProgress-yellow > div { @apply bg-yellow-500 }
.ScrollProgress-green > div { @apply bg-green-500 }
.ScrollProgress-cyan > div { @apply bg-cyan-500 }
.ScrollProgress-blue > div { @apply bg-blue-500 }
.ScrollProgress-purple > div { @apply bg-purple-500 }
</style>
