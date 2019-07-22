<script>
	import Splash from './components/splash.svelte';
	import Menu from './components/menu.svelte';
	export let name;
</script>

<style global type="text/scss" lang="scss">
	@import 'src/styles/global.scss';
</style>

<Menu></Menu>
<Splash></Splash>