<template>
	<div class="py-8">
		<div v-for="(document, i) in content" :key="document.slug" class="flex">
			<div v-if="i !== content.length" class="flex-none w-2.5 mr-4 flex flex-col items-center">
				<div class="flex-none h-10 opacity-80" :class="i > 0 ? 'border-l-2 border-dashed border-gray-200' : ''"></div>
				<div class="flex-none h-8 lg:h-10 opacity-80" :class="i > 0 ? 'border-l-2 border-dashed border-gray-200' : ''"></div>
				<div class="flex-none mx-px w-2.5 h-2.5 rounded-full border-2 border-gray-200"></div>
				<div class="relative flex-grow">
					<div class="relative h-full border-l-2 border-dashed border-gray-200 opacity-80"></div>
					<div v-if="i >= content.length - 1" class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white"></div>
				</div>
			</div>

			<div class="py-8 lg:py-10">
				<content-list-post v-if="document.dir === '/posts'" :post="document" />
				<content-list-project v-else-if="document.dir === '/projects'" :project="document" />

				<div v-else>
					<strong>Unknown document:</strong>
					<pre class="text-xs">{{ document }}</pre>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import ContentListPost from './ContentListPost.vue';
import ContentListProject from './ContentListProject.vue';

@Component({
	name: 'ContentOverview',
	components: { ContentListProject, ContentListPost },
})
export default class ContentOverview extends Vue {

	@Prop({ required: true }) public readonly content: IContentDocument[];

}
</script>
