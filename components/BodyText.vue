<template>
	<div class="BodyText" :class="[`BodyText-${ colour }`, fullPage ? 'BodyText-full' : '']">
		<nuxt-content :document="document" />
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import { Colour } from '~/utils/colours';

import DownloadFile from './bodyText/DownloadFile.vue';

@Component({
	name: 'BodyText',
	components: { DownloadFile },
})
export default class BodyText extends Vue {

	@Prop({ required: true }) public readonly colour: Colour;
	@Prop({ required: true }) public readonly document: Record<string, any>;
	@Prop({ default: false }) public readonly fullPage: boolean;
}
</script>

<style scoped>
.BodyText {
	@apply text-gray-700 max-w-full;
}

.BodyText >>> h2 {
	@apply mt-24 mb-2 text-3xl font-semibold text-gray-700;
}
.BodyText >>> h3 {
	@apply mt-16 mb-2 text-xl font-semibold text-gray-700;
}
.BodyText >>> h4 {
	@apply mt-10 mb-2 text-lg font-semibold text-gray-700;
}
.BodyText >>> h2 + p, .BodyText >>> h2 + ol, .BodyText >>> h2 + ul,
.BodyText >>> h3 + p, .BodyText >>> h3 + ol, .BodyText >>> h3 + ul,
.BodyText >>> h4 + p, .BodyText >>> h4 + ol, .BodyText >>> h4 + ul {
	@apply mt-0;
}
.BodyText >>> h2 + h3 {
	@apply mt-8;
}
.BodyText >>> h3 + h4 {
	@apply mt-6;
}

.BodyText >>> p {
	@apply my-6 leading-7;
}
.BodyText >>> ul, ol {
	@apply list-outside my-6;
}
.BodyText >>> ul { @apply list-disc }
.BodyText >>> ol { @apply list-decimal }
.BodyText >>> li {
	@apply my-1.5;
}

.BodyText >>> a {
	@apply font-semibold underline;
}

.BodyText >>> p code, .BodyText >>> li code {
	@apply px-1 py-0.5 font-mono border rounded-sm text-sm whitespace-nowrap;
}

.BodyText >>> pre {
	@apply p-6 rounded-sm font-mono bg-gray-800 bg-opacity-95;
}
.BodyText >>> h6 {
	@apply mb-0 mt-6 px-6 py-2.5 text-sm text-white font-title font-semibold rounded-t-sm bg-black;
}
.BodyText >>> h6 + * > pre {
	@apply mt-0 pt-3.5 rounded-none rounded-b-sm;
}

.BodyText >>> img {
	@apply w-auto max-w-full rounded-sm;
}

/** Full page styles (narrower paragraphs, linked titles, wider images) */
.BodyText-full >>> h2, .BodyText-full >>> h3, .BodyText-full >>> h4 {
	@apply flex items-center sm:pr-6;
}
.BodyText-full >>> h2 a::before, .BodyText-full >>> h3 a::before, .BodyText-full >>> h4 a::before {
	content: '#';
}
.BodyText-full >>> h2 a, .BodyText-full >>> h3 a, .BodyText-full >>> h4 a {
	@apply hidden sm:inline-block w-6 p-0 pr-1.5 m-0 font-normal text-2xl text-right no-underline opacity-0 transition-opacity;
}
.BodyText-full >>> h3 a {
	@apply text-lg;
}
.BodyText-full >>> h4 a {
	@apply text-base;
}
.BodyText-full >>> h2:hover a, .BodyText-full >>> h3:hover a, .BodyText-full >>> h4:hover a {
	@apply opacity-100;
}

.BodyText-full >>> p { @apply sm:px-6 }
.BodyText-full >>> ul, .BodyText-full >>> ol { @apply pl-4 sm:pl-10 sm:pr-6 }
.BodyText-full >>> div { @apply sm:mx-6 }
.BodyText-full >>> div > pre { @apply sm:-mx-6 }

.BodyText-red >>> a { @apply text-red-600 hover:text-red-900 }
.BodyText-orange >>> a { @apply text-orange-600 hover:text-orange-900 }
.BodyText-yellow >>> a { @apply text-yellow-600 hover:text-yellow-900 }
.BodyText-green >>> a { @apply text-green-600 hover:text-green-900 }
.BodyText-cyan >>> a { @apply text-cyan-600 hover:text-cyan-900 }
.BodyText-blue >>> a { @apply text-blue-600 hover:text-blue-900 }
.BodyText-purple >>> a { @apply text-purple-600 hover:text-purple-900 }

.BodyText-red >>> p code, .BodyText-red >>> li code { @apply bg-red-50 border-red-200 text-red-900 }
.BodyText-orange >>> p code, .BodyText-orange >>> li code { @apply bg-orange-50 border-orange-200 text-orange-900 }
.BodyText-yellow >>> p code, .BodyText-yellow >>> li code { @apply bg-yellow-50 border-yellow-200 text-yellow-900 }
.BodyText-green >>> p code, .BodyText-green >>> li code { @apply bg-green-100 border-green-600 text-green-900 }
.BodyText-cyan >>> p code, .BodyText-cyan >>> li code { @apply bg-cyan-100 border-cyan-600 text-cyan-900 }
.BodyText-blue >>> p code, .BodyText-blue >>> li code { @apply bg-blue-100 border-blue-600 text-blue-900 }
.BodyText-purple >>> p code, .BodyText-purple >>> li code { @apply bg-purple-100 border-purple-600 text-purple-900 }
</style>
