<script></script>

<style lang="scss" type="text/scss">
@import 'src/styles/component.scss';

    $bg-color: $color2;
    $text-color: $color1;
    $shadow-color: $text-color;

    .shortbio {
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        
        img {
            flex: none;
            margin: 20px;
            border-radius: 50%;
            height: 100px;
            width:  100px;
            overflow: hidden;
            box-shadow: $shadow-color 0 0 5px;
            border: 5px solid $color3;
        }
        
        div {
            display: block;
        }
    }
</style>

<article class="shortbio">
    <img src="/images/profile.jpg" alt="">
    
    <div>
        <h1>Hello there</h1>

        <p>My name is <strong>Dejan Fajfar</strong> and I am trying to make the world a better place one deployment at a time!</p>

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