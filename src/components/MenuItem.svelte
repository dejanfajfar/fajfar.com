<script>
    export let link = {
        text: 'No Data',
        logo: 'fa-question',
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

            margin: 0 5px;

            i {
                margin-right: 5px;
            }

            p {
                text-transform: uppercase;
            }
        }
    }
</style>

<div class="menuItem">
    <a href="{link.href}" target="_blank">
        <i class="fab {link.logo}"></i>
        <p>{link.text}</p>
    </a>
</div>