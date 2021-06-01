<template>
	<nuxt-link :to="to" class="PostTagLink" :class="colour">{{ tag }}</nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import { Colour } from '~/utils/colours';

@Component({
	name: 'PostTagLink',
})
export default class PostTagLink extends Vue {

	@Prop({ required: true }) public readonly tag: string;
	@Prop({ required: true }) public readonly colour: Colour;

	get to(): Record<string, any> {
		return {
			name: 'blog-tag-tag',
			params: { tag: this.tag.toLowerCase() },
		};
	}
}
</script>

<style>
.PostTagLink {
	@apply underline whitespace-nowrap;
}

.PostTagLink.red { @apply text-red-600 hover:text-red-900 }
.PostTagLink.orange { @apply text-orange-600 hover:text-orange-900 }
.PostTagLink.yellow { @apply text-yellow-600 hover:text-yellow-900 }
.PostTagLink.green { @apply text-green-600 hover:text-green-900 }
.PostTagLink.cyan { @apply text-cyan-600 hover:text-cyan-900 }
.PostTagLink.blue { @apply text-blue-600 hover:text-blue-900 }
.PostTagLink.purple { @apply text-purple-600 hover:text-purple-900 }
</style>
