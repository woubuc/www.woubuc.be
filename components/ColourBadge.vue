<template>
	<div class="ColourBadge" :class="`ColourBadge-${ colour }`">
		<span class="transform" :class="rotation === 'left' ? '-rotate-1' : 'rotate-1'" />
		<div>{{ text }}</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Colour } from '../utils/colours';

@Component({
	name: 'ColourBadge',
})
export default class ColourBadge extends Vue {

	@Prop({ required: true }) public readonly colour: Colour;
	@Prop({ default: 'right' }) public readonly rotation: 'left' | 'right';
	@Prop({ required: true }) public readonly text: string;

}
</script>

<style>
.ColourBadge {
	@apply inline-block relative mb-1 transform scale-90 origin-bottom-left
}

.ColourBadge > span {
	@apply block absolute top-0 left-0 w-full h-full rounded-sm
}

.ColourBadge > div {
	@apply relative px-1.5 py-0.5 text-xs uppercase font-semibold opacity-75;
}

.ColourBadge-red > span { @apply bg-red-100 }
.ColourBadge-red > div { @apply text-red-700 }

.ColourBadge-orange > span { @apply bg-orange-100 }
.ColourBadge-orange > div { @apply text-orange-700 }

.ColourBadge-yellow > span { @apply bg-yellow-100 }
.ColourBadge-yellow > div { @apply text-yellow-700 }

.ColourBadge-green > span { @apply bg-green-100 }
.ColourBadge-green > div { @apply text-green-700 }

.ColourBadge-cyan > span { @apply bg-cyan-100 }
.ColourBadge-cyan > div { @apply text-cyan-700 }

.ColourBadge-blue > span { @apply bg-blue-100 }
.ColourBadge-blue > div { @apply text-blue-700 }

.ColourBadge-purple > span { @apply bg-purple-100 }
.ColourBadge-purple > div { @apply text-purple-700 }
</style>
