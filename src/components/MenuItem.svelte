<script>
    export let link = {
        text: 'No Data',
        logo: 'fab fa-question',
        href: '#'
    };
</script>

<style type="text/scss" lang="scss">
    @import 'src/styles/component.scss';
    .menuItem {

        a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            color: $menu-item;

            margin-right: 20px;

            i {
                margin-right: 5px;
                opacity: 0.2;
            }

            p {
                text-transform: uppercase;
                margin: 0;
                opacity: 0.5;
            }

            &:hover {

                p {
                    text-decoration: underline;
                    opacity: 1;
                }

                i {
                    opacity: 1;
                }
            }
        }

        
    }
</style>

<div class="menuItem">
    <a href="{link.href}" target="_blank" rel="noopener">
        <i class="{link.logo}"></i>
        <p>{link.text}</p>
    </a>
</div>