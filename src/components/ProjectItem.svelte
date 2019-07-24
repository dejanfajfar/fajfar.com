<script>
    export let project = {
        title: 'ttouch',
        type: 'fab fa-github-square',
        description: 'Command line tool to easily create files! Contribute to dejanfajfar/ttouch development by creating an account on GitHub.',
        img: 'https://repository-images.githubusercontent.com/189295739/59d1f400-951e-11e9-8457-26f5462e0bcc'
    };
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    article {
        position: relative;
        width: 350px;
        border: 1px solid $color4;
        display: block;

        img {
            width: inherit;
        }

        i {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
            border-radius: 0 0 10px 0;
            background-color: $color4;
            color: $color3;
            font-size: xx-large;
        }
        
        .content {
            padding: 0 10px;
        }
    }
</style>

<article>
    <i class="{project.type}"></i>
    <img src="{project.img}" alt="{project.title}">
    
    <div class="content">
        <h1>{project.title}</h1>
    
        <p>{project.description}</p>
    </div>
</article>