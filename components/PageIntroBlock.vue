<template>
	<div class="relative mb-10 md:mb-16">
		<div class="hidden sm:block absolute top-0 left-1 w-full h-full transform sm:rotate-1 rounded-sm" :class="`bg-${ colour }-50`"></div>
		<div class="absolute top-0 left-0 sm:top-0.5 sm:-left-0.5 w-full h-full transform sm:-rotate-1 rounded-sm" :class="`bg-${ colour }-100`"></div>
		<div class="relative px-6 pt-7 pb-6 sm:px-10 sm:pt-8 sm:pb-7 md:px-14 md:pt-12 md:pb-10" :class="[textColour]">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import { bgColourClass, Colour, textColourClass } from '~/utils/colours';

@Component({
	name: 'PageIntroBlock',
})
export default class PageIntroBlock extends Vue {

	@Prop({ required: true }) colour : Colour;

	get bgColour() : string {
		return bgColourClass(this.colour);
	}

	get textColour() : string {
		return textColourClass(this.colour);
	}
}
</script>
