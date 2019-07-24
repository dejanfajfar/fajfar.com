<script>
	import Splash from './components/splash.svelte';
	import Menu from './components/menu.svelte';
	import ShortBio from './components/ShortBio.svelte';
	import ProjectList from './components/ProjectList.svelte';
	export let name;
</script>

<style global type="text/scss" lang="scss">
	@import 'src/styles/global.scss';
</style>

<Menu></Menu>
<Splash></Splash>
<ShortBio></ShortBio>
<ProjectList></ProjectList>