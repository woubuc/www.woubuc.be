<template>
	<nuxt-link :to="to" class="SiteButton" :class="`SiteButton-${ colour }`"><slot /></nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Colour } from '../utils/colours';

@Component({
	name: 'SiteButton',
})
export default class SiteButton extends Vue {

	@Prop({ required: true }) public readonly to: Record<string, any> | string;
	@Prop({ default: '' }) public readonly colour: Colour;

}
</script>

<style scoped>
.SiteButton {
	@apply m-0 px-2 py-1 border-2 rounded-sm text-gray-700 font-semibold border-gray-200;
}
.SiteButton:hover, .SiteButton:focus { @apply bg-gray-200 border-gray-200 text-black }
.SiteButton-red:hover, .SiteButton-red:focus { @apply text-red-900 bg-red-100 border-red-100 }
.SiteButton-orange:hover, .SiteButton-orange:focus { @apply text-orange-900 bg-orange-100 border-orange-100 }
.SiteButton-yellow:hover, .SiteButton-yellow:focus { @apply text-yellow-900 bg-yellow-100 border-yellow-100 }
.SiteButton-green:hover, .SiteButton-green:focus { @apply text-green-900 bg-green-100 border-green-100 }
.SiteButton-cyan:hover, .SiteButton-cyan:focus { @apply text-cyan-900 bg-cyan-100 border-cyan-100 }
.SiteButton-blue:hover, .SiteButton-blue:focus { @apply text-blue-900 bg-blue-100 border-blue-100 }
.SiteButton-purple:hover, .SiteButton-purple:focus { @apply text-purple-900 bg-purple-100 border-purple-100 }
</style>
