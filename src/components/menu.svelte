<script>
    import MenuItem from './MenuItem.svelte';

    export let links = [
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

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';
    .menu {
        height: 50px;
        background-color: $color4;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>

<div class="menu">
    {#each links as link (link.text)}
        <MenuItem link={link}/>
    {/each}
</div>