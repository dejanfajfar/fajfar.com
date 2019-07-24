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
            object-fit: contain;
            overflow: hidden;
            box-shadow: $shadow-color 0 0 5px;
            border: 5px solid $color3;
        }
        
        div {
            display: block;
        }
    }
</style>

<div class="shortbio">
    <img src="/images/profile.jpg" alt="">
    
    <div>
        <h2>Hello there</h2>

        <p>Welcome one and all to the wanderous webside of ill design and wors implementation</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel arcu posuere libero sagittis eleifend sit amet et magna. Donec iaculis nibh non est sodales pharetra. Pellentesque sed lectus nulla. Cras sodales hendrerit felis ut eleifend. Aenean elementum diam ut odio mollis, vitae finibus dolor pellentesque. Phasellus imperdiet consectetur interdum. Suspendisse id bibendum lectus, quis mattis nisl. Curabitur sollicitudin erat ligula, vel viverra sem interdum non. Nullam malesuada placerat lectus, eu consequat sem sagittis id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin pharetra mauris ut velit tincidunt accumsan. Nunc quis lorem in justo sagittis ullamcorper eget nec turpis. Cras congue quam urna, id fringilla est congue ac. Cras diam est, gravida volutpat molestie vitae, pretium a purus.</p>
    </div>
</div>