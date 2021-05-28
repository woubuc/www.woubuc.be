<template>
	<page-intro-block colour="green">
		<div class="space-y-4 leading-7">
			<div class="flex">
				<span class="flex-none w-7">👋</span>
				<p class="flex-grow">Hi, I'm <strong>Wouter</strong>. I build applications and web things using <strong>Rust</strong>, <strong>Typescript</strong>, and <strong>C#</strong>. I love designing and creating <strong>user interfaces</strong>, building <strong>REST APIs</strong>, and <strong>developing products</strong> to make them better than ever, as well as <strong>writing</strong> technical documentation and blog articles.</p>
			</div>
			<div class="flex">
				<span class="flex-none w-7">❤️</span>
				<p class="flex-grow">In my spare time I build games and other cool stuff over at <a href="https://games.epicteddy.com" target="_blank" rel="noreferrer noopener">Epic Teddy Games</a>. I also enjoy making music, reading, playing board games, and cycling (if the weather's good).</p>
			</div>
			<div class="flex">
				<span class="flex-none w-7">💼</span>
				<p class="flex-grow">I'm always open to talk about new opportunities. Interested in working with me? <a href="mailto:hi@woubuc.be">Reach out</a>.</p>
			</div>
			<div class="flex">
				<span class="flex-none w-7">💬</span>
				<div class="flex-grow">
					<p>Fancy a chat? Find me on <a href="https://twitter.com/woubuc" target="_blank" rel="noreferrer noopener">Twitter</a> or email me at <a href="mailto:hi@woubuc.be">hi@woubuc.be</a>.</p>
					<p class="text-xs text-green-700 italic"><small class="text-xs">* I speak English and Dutch</small></p>
				</div>
			</div>
		</div>
	</page-intro-block>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PageIntroBlock from './PageIntroBlock.vue';

@Component({
	name: 'IndexPageIntro',
	components: { PageIntroBlock },
})
export default class IndexPageIntro extends Vue {

}
</script>

<style scoped>
p > a {
	@apply px-1.5 py-0.5 -mx-1.5 -my-0.5 text-green-800 underline font-semibold
		hover:text-black hover:no-underline focus-visible:text-black focus-visible:no-underline
		focus-visible:ring-2 focus-visible:rounded focus-visible:outline-none ring-green-400;
}
</style>
