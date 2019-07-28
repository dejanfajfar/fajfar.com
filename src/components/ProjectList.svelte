<script>
    import ProjectItem from './ProjectItem.svelte'

    export let projects = [
        {
            title: 'ttouch',
            type: 'fab fa-github-square',
            description: 'Command line tool to easily create files! Contribute to dejanfajfar/ttouch development by creating an account on GitHub.',
            img: 'https://repository-images.githubusercontent.com/189295739/59d1f400-951e-11e9-8457-26f5462e0bcc'
        },
        {
            title: 'epoch.net',
            type: 'fab fa-github-square',
            description: 'A simple and non intrusive epoch tool for .net',
            img: 'https://repository-images.githubusercontent.com/91615216/ac9f8280-a822-11e9-90a4-b174f5209060'
        }
    ];
</script>

<style type="text/scss" lang="scss">
    .projects {
        display: flex;
        margin-top: 40px;
        flex-direction: row;
        justify-content: center;
    }
</style>

<div class="projects">
    {#each projects as project}
        <ProjectItem project={project}></ProjectItem>
    {/each}
</div>