export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrates complex forms and SMS notifications by using Next.js, Appwrite, Twilio, Sentry, and Figma to design the webpage and enhance operational workflows',
        href: 'https://sms-carepluse.vercel.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
            {
                id: 5,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
        ],
    },
    {
        title: 'Digital Marketing for Red Bull',
        desc: "During my mentorship with the manager of Masala Kitchen, I spearheaded a project to create an engaging advertisement for Red Bull. Through in-depth research into Red Bull's brand identity, I meticulously planned the video flow to ensure alignment with their vision. The final product was a compelling advertisement that showcased our collaborative spirit and innovative approach.",
        subdesc:
            "By leveraging powerful design tools such as Canva, Figma, and DaVinci Resolve, we facilitated efficient and impactful communication that effectively met user needs.",
        href: 'https://drive.google.com/file/d/1VmpSi0VFcZTy4UcvbZRQHA8ZsjAhsKee/view',
        texture: '/textures/project/RED BULL CANVA NO AUDIO.mp4',
        logo: '/assets/redbull.png',
        logoStyle: {
            backgroundColor: '#ffffff', // White background color
            background:
                'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)', // Keeping the white gradient
            border: '0.2px solid rgba(208, 213, 221, 1)', // Keeping the border color as is
            boxShadow: '0px 0px 60px 0px rgba(255, 255, 255, 0.3)', // White shadow color
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Canva',
                path: '/assets/canva.png',
            },
            {
                id: 2,
                name: 'DaVinci Resolve',
                path: 'assets/DaV.png',
            },
            {
                id: 3,
                name: 'Figma',
                path: '/assets/figma.svg',
            },

        ],
    },
    ];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.07 : 0.065,
        deskPosition: isMobile ? [0.5, -5.5, 0] : [0.5,-8.6, 0],
        cubePosition: isSmall ? [5, -5, 0] : isMobile ? [6, -6, 2] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [4, 4, 0] : isMobile ? [5, 4, 4] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-10, 12, 0] : isMobile ? [-10, 10, 12] : isTablet ? [-15, 12, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-7, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];