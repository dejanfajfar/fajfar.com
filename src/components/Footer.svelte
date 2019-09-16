<script>
    export let socialLinks;

    export let phoneNumber;

    export let email;
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';
    footer {
        background-color: $footer-bg-color;
        min-height: 60px;
        display: flex;
        justify-content: space-around;
        color: $footer-txt-color;
        margin-top: 40px;

        @include mobile {
            flex-direction: column;
            padding-bottom: 40px;
        }

        article {
            margin: 0 10px;

            h2 {
                color: $footer-txt-color;
            }

            a {
                text-decoration: none;
                color: $footer-txt-color;

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

        <p><i class="fas fa-phone-square"></i> {phoneNumber}</p>
        <p><i class="fas fa-envelope-square"></i> {email}</p>
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