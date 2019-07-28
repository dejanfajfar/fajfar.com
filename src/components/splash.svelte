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
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            text-align: center;
            margin: auto 0;

            p {
                margin: auto 0;
                font-weight: 700;
                color: $color3;
                text-shadow: $shadow-color 2px 2px 5px; 

                @include mobile {
                    font-size: 10vw;
                }

                @include desktop {
                    font-size: 4rem;
                }
            }

            img {
                height: 180px;
                filter: drop-shadow($shadow-color 2px 2px 5px);
            }
        }
    }
</style>

<div class="splash">
    <div class="logo">
        <img src="/images/logo_light.svg" alt=""/>
        <p>fajfar.com</p>
    </div>
</div>