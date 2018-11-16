export const slides = [
	{
		title: "*Insistently* Bow ties are cool! Come on Amy, I'm a normal bloke, tell me what normal blokes do!",
		content1: `I hate yogurt. It's just stuff with bits in. I am the Doctor, and you are the Daleks! I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship.`,
		content2: `<a href=#>Just a link to nowhere!</a><strong>I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship.</strong> <em> You know how I sometimes have really brilliant ideas?</em> I am the last of my species, and I know how that weighs on the heart so don't lie to me!`,
		backgroundColor: '#23f2a3'
	},
	{
		title: "They're not aliens, they're Earth…liens!",
		content1: `<a href=#>Just a link to nowhere!</a>All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? Did I mention we have comfy chairs?`,
		content2: `You've swallowed a planet! I am the last of my species, and I know how that weighs on the heart so don't lie to me! <strong> I am the Doctor, and you are the Daleks!</strong> <em> *Insistently* Bow ties are cool!</em> Come on Amy, I'm a normal bloke, tell me what normal blokes do!`,
		backgroundColor: 'orange'
	},
	{
		title: 'Stop talking, brain thinking. Hush.',
		content1: `You hate me; you want to kill me! Well, go on! Kill me! KILL ME! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself. You hit me with a cricket bat.`,
		content2: `Father Christmas. Santa Claus. Or as I've always known him: Jeff. I hate yogurt. It's just stuff with bits in. <strong> All I've got to do is pass as an ordinary human being.</strong> <em> Simple.</em> What could possibly go wrong?<a href=#>Just a link to nowhere!</a>`,
		backgroundColor: 'lightblue'
	}
];

export const slideArray = [
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: true,
	// 		breakOnDesktop: false,
	// 		extraClass: 'default-carousel'
	// 	},
	// 	carouselName: '1. Carousel with Slide Transition'
	// },
	{
		slides: slides,
		carouselOptions: {
			breakOnDesktop: false,
			transition: 'dissolve',
			extraClass: 'fade-carousel',
		},
		carouselName: '2. Carousel with Fade Transition'
	},
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: false,
	// 		breakOnDesktop: false,
	// 		extraClass: 'no-nav-arrows',
	// 	},
	// 	carouselName: '3. Carousel without Nav Arrows'
	// },
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: true,
	// 		breakOnDesktop: false,
	// 		autoPlay: 4000,
	// 		extraClass: 'autoplay-slide',
	// 	},
	// 	carouselName: '4. Carousel with Autoplay Slide Transition'
	// },
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: true,
	// 		breakOnDesktop: false,
	// 		autoPlay: 4000,
	// 		transition: 'dissolve',
	// 		extraClass: 'autoplay-fade',
	// 	},
	// 	carouselName: '5. Carousel with Autoplay Fade Transition'
	// },
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: true,
	// 		breakOnDesktop: true,
	// 		extraClass: 'break-on-desktop-slide',
	// 	},
	// 	carouselName: '6. Carousel Break on Desktop Slide Transition'
	// },
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: true,
	// 		breakOnDesktop: true,
	// 		transition: 'dissolve',
	// 		extraClass: 'break-on-desktop-fade',
	// 	},
	// 	carouselName: '7. Carousel Break on Desktop Fade Transition'
	// },
	// {
	// 	slides: slides,
	// 	carouselOptions: {
	// 		navArrows: true,
	// 		breakOnDesktop: true,
	// 		autoPlay: 4000,
	// 		extraClass: 'break-on-desktop-autplay',
	// 	},
	// 	carouselName: '8. Carousel Break on Desktop with Autoplay'
	// },
];
