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

        <h2>I am software enthusiast based in Austria making the world a better place one deployment at a time!</h2>

        <p>
            I have spend a lot of my time latelly staying on top of all the emerging web frameworks and technologies. 
            So while in the <i>office</i> I usually help my team or clients with a web UI problem or two. Mostly arround SPAs and PWAs.
        </p>

        <p>
            To not over specialize on the web UI front I try to stay in touch with the server site by working with <strong>python</strong> and <strong>go lang</strong> on server site problems.        
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