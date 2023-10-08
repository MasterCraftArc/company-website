<script>
	import '../reset.css';
	import '../styles.css';
	import '@fontsource-variable/montserrat';
	import '@fontsource/montserrat';
	import Nav from '../components/Nav/Nav.svelte';
	import Announcement from '../components/Home/Announcement.svelte';
	import Footer from '../components/Footer/Footer.svelte';
</script>

<svelte:head>
	<title>Defense Unicorns</title>
	<meta name="description" content="defense unicorns landing page" />
</svelte:head>
<Announcement />
<Nav />
<slot />
<Footer />
