<script></script>

<style lang="scss" type="text/scss">
@import 'src/styles/component.scss';

    section {

        @include desktop{
            width: 80%;
            margin: 0 auto;
            margin-top: 40px;
        }

        @include mobile{
            margin: 0 20px;
        }

        q {
            font-size: 24px;
            font-family: Raleway;
            font-weight: 100;
            color: $text-highlight-color;
        }
        
        img {
            flex: none;
            overflow: hidden;

            @include desktop{
                display: none;
            }

            @include mobile{
                width: 100%;
                @include boxShadow;
            }
        }

        p {
            margin-bottom: 0;

            em {
                font-weight: 700;
                color: $text-highlight-color;
                font-style: normal;
            }
        }
    }
</style>

<section>
    <h1>Dejan Fajfar is</h1>

    <q>A software architect based in Austria who helps his clients get the most out of their infrastructure an keep on top of current trends in the industry</q>

    <p>
        Coming from a <em>C#</em> background he knows his way around all variants of the <em>.NET</em> framework.
        <i>ASP.NET</i> and <em>ASP.NET core MVC</em> have taken up quite some of his time. 
        Before switching to <em>REST</em> he developer quite a few <em>WCF</em> based services.
        As alternatives to REST like <em>GraphQL</em> or other variations of <i>RPC</i> like <em>gRPC</em> became more popular he plunged himself into that world.
    </p>

    <p>
        With his professional focus mostly being on web technologies he got into <em>Node JS</em> and with that came the numerous web frameworks and technologies. 
        Professionally he lead the development of a major <em>Angular</em> base web application. Personally he is more interested in the likes of <em>VueJs</em> and <em>Svelte</em>.
    </p>

    <p>
        Being interested in the complete software life cycle he learned <em>Docker</em> and quite some <em>CI/CP</em> systems. 
        Those include Jenkins, TeamCity, Travis-CI, AppVeyor, GitHub actions and Azure pipelines.
    </p>

    <p>
        Lately he is being drawn to <em>machine learning</em> and <em>IoT</em>. 
        This has prompted him to investigate things like <em>Tensor Flow</em> and <em>ML.net</em>.
        With that came the inevitable learning of additional programming languages like <em>Go-lang</em>, <em>Python</em> and lately <em>Rust</em>.
    </p>

    <p>
        When not in the office he spends time with his family and works on his <a href="https://github.com/dejanfajfar" target="_blank">open source projects</a>. Reading and playing games is also somewhere in there. 
        All in all his live never gets boring.
    </p>
</section>