<script>
    export let socialLinks;
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';
    footer {
        background-color: $bg-color;
        min-height: 60px;
        display: flex;
        justify-content: space-around;
        color: $logo-color;
        margin-top: 40px;

        article {
            margin: 0 10px;

            a {
                text-decoration: none;
                color: $logo-color;

                i {
                    font-size: xx-large;
                    margin: 0 5px;
                }
            }
        }
    }
</style>

<footer>
    <article class="column">
        <h2>Contact information</h2>

        <p><i class="fas fa-phone-square"></i> 0043 (0)650 500 56 44</p>
        <p><i class="fas fa-envelope-square"></i> dejan@fajfar.com</p>
    </article>
    <article class="column">
        <h2>Online Presence</h2>

        {#each socialLinks as link (link.text)}
            <a href="{link.href}" target="_blank" rel="noopener">
                <i class="{link.logo}"></i>
            </a>
        {/each}
    </article>
</footer>