<script></script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    .splash {
        background: $bg-color;
        display: flex;
        align-items: center;
        
        @include desktop{
            background-image: url('/images/profile.jpg');
            background-position: top left;
            background-repeat: no-repeat;
            justify-content: flex-end;
            height: 600px;
            @include boxShadow;
        }

        @include mobile{
            height: 200px;
            justify-content: center;
        }

        .logo {
            text-align: center;
            
            @include mobile {
                margin: auto 0;
            }

            @include desktop {
                margin: auto 10px 10px 0;
            }

            p {
                margin: auto 0;
                font-weight: 700;
                color: $menu-item;
                text-shadow: $logo-shadow 2px 2px 5px; 

                @include mobile {
                    font-size: 10vw;
                }

                @include desktop {
                    font-size: 4rem;
                }
            }

            img {
                height: 180px;
                filter: drop-shadow($logo-shadow 2px 2px 5px);

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