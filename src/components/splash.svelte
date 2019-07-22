<script></script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    $bg-color: $color2;
    $text-color: $color1;
    $shadow-color: $text-color;


    .splash {
        background: $color4;
        background: linear-gradient(160deg, $color4 61%, $color5 100%);
        height: 400px;
        //box-shadow: $shadow-color 0 0 5px;
        display: flex;
        justify-content: center;
        position: relative;

        @include mobile {
            width: 100%;
            height: 30vh;
        }

        @include desktop {
            min-width: 650px;
            height: 400px;
        }

        h1 {
            margin: auto 0;
            font-weight: 700;
            color: $color3;
            text-shadow: darken($color4, 20%) 2px 2px 5px; 

            @include mobile {
                font-size: 10vw;
            }

            @include desktop {
                font-size: 4rem;
            }
        }
    }
</style>

<div class="splash">
    <h1>>_ fajfar.com</h1>
</div>