<template>
	<div>
		<colour-badge :colour="post.colour" :text="post.type || 'post'" rotation="right" />

		<nuxt-link :to="url" class="relative block no-underline">
			<h3 class="text-2xl font-semibold text-gray-700">{{ post.title }}</h3>
		</nuxt-link>

		<div class="flex flex-wrap gap-x-4 mb-2 text-gray-500">
			<date-label :date="post.date" />
			<span v-if="post.subject">{{ post.subject }}</span>
			<span>{{ post.readingTime.text }}</span>
		</div>

		<div class="text-gray-700 max-w-full mb-3">
			<nuxt-content :document="{ body: post.excerpt }" />
		</div>

		<nuxt-link :to="url"
				   class="inline-block px-2.5 py-1 m-0 rounded font-semibold text-white"
				   :class="`bg-${ post.colour }-400 hover:bg-${ post.colour }-500`">
			Read full {{ post.type || 'post' }}
		</nuxt-link>
	</div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Component, Prop, Vue } from 'nuxt-property-decorator';

import Post from '~/models/Post';
import { bgColourClass, textColourClass } from '~/utils/colours';
import ColourBadge from './ColourBadge.vue';

import DateLabel from './DateLabel.vue';

@Component({
	name: 'ContentListPost',
	components: { ColourBadge, DateLabel },
})
export default class ContentListPost extends Vue {

	@Prop({ required: true }) public readonly post : IContentDocument & Post;

	get bgColour() : string {
		return bgColourClass(this.post.colour);
	}

	get textColour() : string {
		return textColourClass(this.post.colour);
	}

	get url() {
		return { name: 'blog-post-postId', params: { postId: this.post.slug } };
	}
}
</script>
