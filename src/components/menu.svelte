<script>
    import MenuItem from './MenuItem.svelte';

    export let links = [
        {
            text: 'linkedIn',
            logo: 'fa-linkedin',
            href: 'https://www.linkedin.com/in/dejan-fajfar-87204675/'
        },
        {
            text: 'GitHub',
            logo: 'fa-github-square',
            href: 'https://github.com/dejanfajfar'
        },
        {
            text: 'Medium',
            logo: 'fa-medium',
            href: 'https://medium.com/@dejanfajfar'
        },
        {
            text: 'Twitter',
            logo: 'fa-twitter-square',
            href: 'https://twitter.com/dejanfajfar'
        }
    ];
</script>

<style type="text/scss" lang="scss">
    .menu {
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;

        .logo {
            height: 40px;
        }
    }
</style>

<div class="menu">
    <img class="logo" src="favicon.ico" alt="">
    {#each links as link (link.text)}
        <MenuItem link={link}/> |
    {/each}
</div>