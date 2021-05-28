<template>
	<nuxt-link :to="to" :class="colour">{{ tag }}</nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import { Colour } from '~/utils/colours';

@Component({
	name: 'PostTagLink',
})
export default class PostTagLink extends Vue {

	@Prop({ required: true }) public readonly tag : string;
	@Prop({ required: true }) public readonly colour: Colour;

	get to(): Record<string, any> {
		return {
			name: 'blog',
			query: { tag: this.tag.toLowerCase() },
		};
	}
}
</script>

<style scoped>
a { @apply underline whitespace-nowrap }

a.red { @apply text-red-600 hover:text-red-900 }
a.orange { @apply text-orange-600 hover:text-orange-900 }
a.yellow { @apply text-yellow-600 hover:text-yellow-900 }
a.green { @apply text-green-600 hover:text-green-900 }
a.cyan { @apply text-cyan-600 hover:text-cyan-900 }
a.blue { @apply text-blue-600 hover:text-blue-900 }
a.purple { @apply text-purple-600 hover:text-purple-900 }
</style>
