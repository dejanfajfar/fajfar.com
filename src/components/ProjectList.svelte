<script>
    import ProjectItem from './ProjectItem.svelte'

    export let projects = [
        {
            title: 'ttouch',
            type: 'fab fa-github-square',
            description: 'Command line tool to easily create files! ',
            img: 'https://repository-images.githubusercontent.com/189295739/59d1f400-951e-11e9-8457-26f5462e0bcc',
            href: 'https://github.com/dejanfajfar/ttouch'
        },
        {
            title: 'epoch.net',
            type: 'fab fa-github-square',
            description: 'A simple and non intrusive epoch tool for .net',
            img: 'https://repository-images.githubusercontent.com/91615216/ac9f8280-a822-11e9-90a4-b174f5209060',
            href: 'https://github.com/dejanfajfar/epoch.net'
        },
        {
            title: 'theWall',
            type: 'fab fa-github-square',
            description: 'A little something to keep the wall mounted TVs bussy, build with svelte',
            img: 'https://repository-images.githubusercontent.com/184530099/d10a3880-8767-11e9-81e3-c564109ba52b',
            href: 'https://github.com/dejanfajfar/thewall'
        },
        {
            title: 'gRPC the new shiny',
            type: 'fab fa-medium',
            description: 'gRPC is gaining momentum as the \“last mile\” communication mechanism. So, it is time to take a look at what it is all about.',
            img: 'https://miro.medium.com/max/1200/1*q5DUbq7QrnWZtSH2oJFwqg.png',
            href: 'https://medium.com/@dejanfajfar/grpc-the-new-shinny-5e1118ff82ba'
        }
    ];
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    .content{
        width: 80%;
        margin: 0 auto;
    }

    .projectsList {
        display: flex;
        justify-content: center;

        @include desktop{
            flex-direction: row;
            flex-wrap: wrap;
        }

        @include mobile{
            flex-direction: column;
        }
    }
</style>

<article>

    <div class="content">
        <h1>Some of my work</h1>

        <p>Sadly because of various NDAs I can not publish all of my work, which I would like to do. 
        So please take some time to look at what is here.</p>
    </div>

    <div class="projectsList">
        {#each projects as project}
            <ProjectItem project={project}></ProjectItem>
        {/each}
    </div>
</article>