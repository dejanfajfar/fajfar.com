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
        <h1>Hello there</h1>

        <h2>A software architect based in Austria I help my clients to get the most out of their infrastructure and software.</h2>

        <p>
            Comming from a <strong>C#</strong> background I know my way arround all variants of the .NET framewor.
            
        </p>

        <p>
            Not beeing limeted by that I also know my way arrount docker and quite some CI/CP systems.
        </p>

        <p>
            Latelly I have found myself beeing drawn to the <strong>machine learning</strong> site of things so I guess it is only a time untill something in that way will be developed.
        </p>

        <p>
            When not in the office I try try to spen time with my familly and work on some of my open source projects. Reading and playing gamis is also somewhere in there. 
            All in all my live never gets boring.
        </p>
    </div>
</article>