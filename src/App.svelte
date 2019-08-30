<script>
	import Splash from './components/splash.svelte';
	import Menu from './components/menu.svelte';
	import ShortBio from './components/ShortBio.svelte';
	import ProjectList from './components/ProjectList.svelte';
	import Footer from './components/Footer.svelte';

	export let socialLinks = [
        {
            text: 'linkedIn',
            logo: 'fab fa-linkedin',
            href: 'https://www.linkedin.com/in/dejan-fajfar-87204675/'
        },
        {
            text: 'GitHub',
            logo: 'fab fa-github-square',
            href: 'https://github.com/dejanfajfar'
        },
        {
            text: 'Medium',
            logo: 'fab fa-medium',
            href: 'https://medium.com/@dejanfajfar'
        },
        {
            text: 'Twitter',
            logo: 'fab fa-twitter-square',
            href: 'https://twitter.com/dejanfajfar'
        },
        {
            text: 'npm',
            logo: 'fab fa-npm',
            href: 'https://www.npmjs.com/~dejanfajfar'
        },
        {
            text: 'nuget',
            logo: 'fas fa-cube',
            href: 'https://www.nuget.org/profiles/dejanfajfar'
        },
        {
            text: 'docker',
            logo: 'fab fa-docker',
            href: 'https://hub.docker.com/u/dejanfajfar'
        }
    ];
</script>

<style global type="text/scss" lang="scss">
	@import 'src/styles/global.scss';
</style>

<Menu links={socialLinks}></Menu>
<Splash></Splash>
<ShortBio></ShortBio>
<hr>
<ProjectList></ProjectList>
<Footer socialLinks={socialLinks}></Footer>