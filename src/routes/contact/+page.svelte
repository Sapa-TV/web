<script lang="ts">
	import ContactBox from "$cmp/ContactBox.svelte";
	import SectionTitle from "$cmp/SectionTitle.svelte";
	import SocialLinks from "$cmp/SocialLinks.svelte";
</script>

<SectionTitle title="Связь" />

<ContactBox>
	<p class="contact-text">Вопросы, предложения, сабы — всё сюда!</p>
	<SocialLinks />
</ContactBox>

<style>
	.contact-text {
		color: var(--text-muted);
		margin-bottom: 1.5rem;
	}
</style>
