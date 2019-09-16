<script>
	import Splash from './components/splash.svelte';
	import Menu from './components/menu.svelte';
	import ShortBio from './components/ShortBio.svelte';
    import ProjectList from './components/ProjectList.svelte';
    import ProjectItem from './components/ProjectItem.svelte'
	import Footer from './components/Footer.svelte';

	let socialLinks = [
        {
            text: 'linkedIn',
            logo: 'fab fa-linkedin',
            href: 'https://www.linkedin.com/in/dejan-fajfar-87204675/'
        },
        {
            text: 'GitHub',
            logo: 'fab fa-github-square',
            href: 'https://github.com/dejanfajfar'
        },
        {
            text: 'Medium',
            logo: 'fab fa-medium',
            href: 'https://medium.com/@dejanfajfar'
        },
        {
            text: 'Twitter',
            logo: 'fab fa-twitter-square',
            href: 'https://twitter.com/dejanfajfar'
        },
        {
            text: 'npm',
            logo: 'fab fa-npm',
            href: 'https://www.npmjs.com/~dejanfajfar'
        },
        {
            text: 'nuget',
            logo: 'fas fa-cube',
            href: 'https://www.nuget.org/profiles/dejanfajfar'
        },
        {
            text: 'docker',
            logo: 'fab fa-docker',
            href: 'https://hub.docker.com/u/dejanfajfar'
        }
    ];
</script>

<style global type="text/scss" lang="scss">
	@import 'src/styles/global.scss';
</style>

<Menu links={socialLinks}></Menu>
<Splash></Splash>
<ShortBio></ShortBio>
<hr>
<ProjectList>
    <ProjectItem 
        title="ttouch"
        image="https://repository-images.githubusercontent.com/189295739/59d1f400-951e-11e9-8457-26f5462e0bcc"
        link="https://github.com/dejanfajfar/ttouch">
        <p>
            Command line tool to easily create files!
        </p>
    </ProjectItem>
    <ProjectItem 
        title="epoch.net"
        image="https://repository-images.githubusercontent.com/91615216/ac9f8280-a822-11e9-90a4-b174f5209060"
        link="https://github.com/dejanfajfar/epoch.net">
        <p>
            A simple and non intrusive epoch tool for .net
        </p>
    </ProjectItem>
    <ProjectItem 
        title="theWall"
        image="https://repository-images.githubusercontent.com/184530099/d10a3880-8767-11e9-81e3-c564109ba52b"
        link="https://github.com/dejanfajfar/thewall">
        <p>
            A little something to keep the wall mounted TVs bussy, build with svelte
        </p>
    </ProjectItem>
    <ProjectItem 
        title="gRPC the new shiny"
        image="https://miro.medium.com/max/1200/1*q5DUbq7QrnWZtSH2oJFwqg.png"
        link="https://medium.com/@dejanfajfar/grpc-the-new-shinny-5e1118ff82ba">
        <p>
            gRPC is gaining momentum as the “last mile” communication mechanism. So, it is time to take a look at what it is all about.
        </p>
    </ProjectItem>
</ProjectList>
<Footer 
    socialLinks={socialLinks} 
    phoneNumber='0043 (0)650 500 56 44' 
    email='dejan@fajfar.com'>
</Footer>