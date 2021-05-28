<template>
	<div>
		<colour-badge :colour="project.colour" :text="project.type || 'project'" rotation="left" />

		<h3 class="block text-2xl font-semibold text-gray-700">{{ project.title }}</h3>

		<div class="flex space-x-4 mb-2 text-gray-500">
			<date-label :date="project.date" :format="project.date_format" />
		</div>

		<div v-if="hasImages" class="flex flex-wrap gap-1.5 mb-4 sm:flex-nowrap">
			<img v-for="image in project.images" :key="image" :src="image" alt="Project image" class="w-12 flex-grow h-40 object-cover object-center rounded-sm" />
		</div>

		<body-text :colour="project.colour" :document="project" />

		<p>
			<a v-if="project.link"
			   :href="project.link"
			   target="_blank"
			   rel="noreferrer noopener"
			   class="inline-block underline font-semibold hover:text-black"
			   :class="`text-${ project.colour }-900`">
				{{ displayLink }}
			</a>
		</p>
	</div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import Project from '~/models/Project';
import { bgColourClass, textColourClass } from '~/utils/colours';
import BodyText from './BodyText.vue';
import ColourBadge from './ColourBadge.vue';

import DateLabel from './DateLabel.vue';

@Component({
	name: 'ContentListProject',
	components: { BodyText, ColourBadge, DateLabel },
})
export default class ContentListProject extends Vue {

	@Prop({ required: true }) public readonly project : IContentDocument & Project;

	get bgColour() : string {
		return `bg-${ this.project.colour }-100`;
	}

	get textColour() : string {
		return `text-${ this.project.colour }-900`;
	}

	get hasImages(): boolean {
		return this.project.images !== undefined && this.project.images.length > 0;
	}

	get displayLink(): string {
		if (!this.project.link) {
			return '';
		}
		return this.project.link
			.replace('https://', '')
			.replace('http://', '')
			.replace(/\/$/, '');
	}
}
</script>
