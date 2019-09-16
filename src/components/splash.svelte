<script></script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';

    section {
        background: $bg-color;
        display: flex;
        align-items: center;
        @include boxShadow;
        
        @include desktop{
            background-image: url('/images/profile.jpg');
            background-position: top left;
            background-repeat: no-repeat;
            justify-content: flex-end;
            height: 600px;
        }

        @include mobile{
            justify-content: center;
            flex-direction: column;
        }

        .profilePic {
            width: 100%;
            display: block;

            @include desktop {
                display: none;
            }
        }

        .logo {
            display: flex;
            justify-content: center;
            flex-direction: column;
            
            @include mobile {
                height: 200px;
                margin-top: 20px;
            }

            @include desktop {
                margin: auto 20px 10px 0;
            }

            p {
                margin: auto 0;
                font-weight: 100;
                color: $menu-item;
                text-shadow: $logo-shadow 2px 2px 5px; 
                font-family: Raleway;

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
                    display: inline-block;
                }
            }
        }
    }
</style>

<section class="splash">
    <div class="logo">
        <img src="/images/logo.svg" alt=""/>
        <p>Dejan Fajfar</p>
    </div>
    <img class="profilePic" src="/images/profile.jpg" alt=""/>
</section>