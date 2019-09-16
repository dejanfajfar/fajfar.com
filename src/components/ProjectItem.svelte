<script>
    export let title = '';
    export let image = '';
    export let link = '';
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    article {
        position: relative;
        display: block;
        background-color: $logo-shadow;
        color: $logo-color;
        @include boxShadow;

        @include desktop{
            opacity: 0.8;
            border: 1px solid $bg-color;
            width: 350px;
            margin: 10px;

            transition: opacity .25s ease-in-out;
            -moz-transition: opacity .25s ease-in-out;
            -webkit-transition: opacity .25s ease-in-out;

            &:hover {
                opacity: 1;
                cursor: pointer;
            }
        }

        @include mobile{
            width: 90%;
            margin: 10px auto;
        }

        img {
            width: 100%;
        }

        i {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
            border-radius: 0 0 10px 0;
            background-color: $bg-color;
            color: $logo-color;
            font-size: xx-large;

            @include mobile{
                display: none;
            }
        }
        
        .content {
            padding: 0 10px;
        }

        a{
            text-decoration: none;
            color: $text-color;
        }
    }
</style>

<article>
    <a href="{link}" target="_blank" rel="noopener">
        <img src="{image}" alt="{title}">
    </a>

    <div class="content">
        <slot></slot>
    </div>
</article>