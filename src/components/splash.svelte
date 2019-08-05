<script></script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    


    .splash {
        background: $color4;
        background: linear-gradient(160deg, $color4 61%, $color5 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        @include boxShadow;

        @include desktop{
            height: 400px;
        }

        @include mobile{
            height: 200px;
        }

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

                @include mobile{
                    height: 100px;
                }
            }
        }
    }
</style>

<div class="splash">
    <div class="logo">
        <img src="/images/logo.svg" alt=""/>
        <p>fajfar.com</p>
    </div>
</div>