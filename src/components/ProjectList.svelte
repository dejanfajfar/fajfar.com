<script>
    import ProjectItem from './ProjectItem.svelte'

    export let projects = [
        {}
    ];
</script>

<style type="text/scss" lang="scss">
    .projects {
        display: flex;
    }
</style>

<div class="projects">
    {#each projects as project}
        <ProjectItem></ProjectItem>
    {/each}
</div>