<template>
	<div class="max-w-screen-md mx-auto py-24 text-center">
		<h1 class="text-2xl font-medium">404</h1>
		<p>The page {{ page }} doesn't seem to exist.</p>
		<div class="pt-12">
			<site-button :to="{ name: 'index' }">Back home</site-button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import SiteButton from '~/components/SiteButton.vue';

@Component({
	name: 'NotFoundPage',
	components: { SiteButton },

	head: {
		title: 'Page not found - @woubuc',
	},
})
export default class NotFoundPage extends Vue {

}
</script>
