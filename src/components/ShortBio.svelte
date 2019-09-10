<script></script>

<style lang="scss" type="text/scss">
@import 'src/styles/component.scss';

    .shortbio {
        display: flex;

        @include desktop{
            width: 80%;
            margin: 0 auto;
            justify-content: space-between;
            flex-direction: row;
            margin-top: 40px;
        }

        @include mobile{
            flex-direction: column;
            align-items: center;
            width: 100%;
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
        }
        
        div {
            display: block;

            @include mobile{
                margin: 0 10px;
            }
        }
    }
</style>

<article class="shortbio">
    <img src="/images/profile.jpg" alt="" />
    <div>
        <h1>Dejan Fajfar is</h1>

        <h2>A software architect based in Austria who helps his clients get the most out of their infrastructure an keep on top of current trends in the industry</h2>

        <p>
            Coming from a <strong>C#</strong> background he knows his way around all variants of the <strong>.NET</strong> framework.
            <i>ASP.NET</i> and <strong>ASP.NET core MVC</strong> have taken up quite some of his time. 
            Before switching to <strong>REST</strong> he developer quite a few <strong>WCF</strong> based services.
            As alternatives to REST like <strong>GraphQL</strong> or other variations of <i>RPC</i> like <strong>gRPC</strong> became more popular he plunged himself into that world.
        </p>

        <p>
            With his professional focus mostly being on web technologies he got into <strong>Node JS</strong> and with that came the numerous web frameworks and technologies. 
            Professionally he lead the development of a major <strong>Angular</strong> base web application. Personally he is more interested in the likes of <strong>VueJs</strong> and <strong>Svelte</strong>.
        </p>

        <p>
            Being interested in the complete software life cycle he learned <strong>Docker</strong> and quite some <strong>CI/CP</strong> systems. 
            Those include Jenkins, TeamCity, Travis-CI, AppVeyor, GitHub actions and Azure pipelines.
        </p>

        <p>
            Lately he is being drawn to <strong>machine learning</strong> and <strong>IoT</strong>. 
            This has prompted him to investigate things like <strong>Tensor Flow</strong> and <strong>ML.net</strong>.
            With that came the inevitable learning of additional programming languages like <strong>Go-lang</strong>, <strong>Python</strong> and lately <strong>Rust</strong>.
        </p>

        <p>
            When not in the office he spends time with his family and works on his <a href="https://github.com/dejanfajfar" target="_blank">open source projects</a>. Reading and playing games is also somewhere in there. 
            All in all his live never gets boring.
        </p>
    </div>
</article>