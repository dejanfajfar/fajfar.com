<script>
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    section{
        @include desktop{
            width: 80%;
            margin: 0 auto;
            margin-top: 40px;
        }

        @include mobile{
            margin: 0 20px;
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
    }
</style>

<section>
    <h1>Some of my work</h1>

    <p>
        Because of various <strong>NDAs</strong> I can not share most of my work. But here is a little sample of projects I have, and still am, doing in my spare time.
    </p>

    <div class="projectsList">
        <slot></slot>
    </div>
</section>