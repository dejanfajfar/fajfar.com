<script>
    import MenuItem from './MenuItem.svelte';

    export let links;
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';
    .menu {
        height: 50px;
        background-color: $bg-color;
        display: flex;
        padding-left: 20px;
        align-items: center;
        justify-items: left;

        @include mobile{
            display: none;
        }
    }
</style>

<div class="menu">
    {#each links as link (link.text)}
        <MenuItem link={link}/>
    {/each}
</div>