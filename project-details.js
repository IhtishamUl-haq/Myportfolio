// project-details.js

// Multiple projects data
const projectsData = {
    'ecommerce-dashboard1': {
        header: {
            title: "E-Commerce Analytics Dashboard",
            subtitle: "An electrifying platform fusing real-time analytics, AI-driven insights, and mesmerizing visuals to redefine e-commerce mastery.",
            links: [
                { class: "github-link", href: "https://github.com/yourusername/ecommerce-dashboard", icon: "fab fa-github", text: "Source Code" },
                { class: "demo-link", href: "#", icon: "fas fa-play", text: "Interactive Demo", id: "demo-btn" },
                { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Pulse-Pounding KPI Dashboard",
                github: "https://github.com/yourusername/dashboard-kpi"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
                caption: "Thrilling Sales Insights",
                github: "https://github.com/yourusername/sales-analytics"
            },
            {
                type: "video",
                videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
                thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
                caption: "Explosive Intro Video",
                github: "https://github.com/yourusername/intro-video"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Pulse-Pounding KPI Dashboard",
                github: "https://github.com/yourusername/dashboard-kpi"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
                caption: "Thrilling Sales Insights",
                github: "https://github.com/yourusername/sales-analytics"
            },
            {
                type: "video",
                videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
                thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
                caption: "Explosive Intro Video",
                github: "https://github.com/yourusername/intro-video"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Pulse-Pounding KPI Dashboard",
                github: "https://github.com/yourusername/dashboard-kpi"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
                caption: "Thrilling Sales Insights",
                github: "https://github.com/yourusername/sales-analytics"
            },
            {
                type: "video",
                videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
                thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
                caption: "Explosive Intro Video",
                github: "https://github.com/yourusername/intro-video"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Pulse-Pounding KPI Dashboard",
                github: "https://github.com/yourusername/dashboard-kpi"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80",
                caption: "Thrilling Sales Insights",
                github: "https://github.com/yourusername/sales-analytics"
            },
            {
                type: "video",
                videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
                thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
                caption: "Explosive Intro Video",
                github: "https://github.com/yourusername/intro-video"
            }
        ],
        technology: ["React 18", "TypeScript", "D3.js", "Node.js", "Express", "MongoDB"],
        features: [
            "Real-time sales tracking",
            "AI-driven customer segmentation",
            "Automated inventory management"
        ],
        challenges: [
            { title: "Real-time Data", solution: "WebSocket for seamless updates." },
            { title: "Performance", solution: "Virtual scrolling & aggregation." }
        ]
    },
    'portfolio-website': {
        header: {
            title: "Portfolio Website",
            subtitle: "A dynamic showcase of projects with stunning animations and responsive design.",
            links: [
                { class: "github-link", href: "https://github.com/yourusername/portfolio-website", icon: "fab fa-github", text: "Source Code" },
                { class: "demo-link", href: "#", icon: "fas fa-play", text: "Live Demo", id: "demo-btn" },
                { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Landing Page",
                github: "https://github.com/yourusername/portfolio-landing"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Project Showcase",
                github: "https://github.com/yourusername/portfolio-showcase"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Landing Page",
                github: "https://github.com/yourusername/portfolio-landing"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Project Showcase",
                github: "https://github.com/yourusername/portfolio-showcase"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Landing Page",
                github: "https://github.com/yourusername/portfolio-landing"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                caption: "Project Showcase",
                github: "https://github.com/yourusername/portfolio-showcase"
            }
        ],
        technology: ["HTML5", "CSS3", "JavaScript", "GSAP", "jQuery"],
        features: [
            "Smooth scroll animations",
            "Responsive layout",
            "Interactive galleries"
        ],
        challenges: [
            { title: "Animation Performance", solution: "Optimized with GSAP." },
            { title: "Cross-browser Support", solution: "CSS prefixes and fallbacks." }
        ]
    }
};

// Function to load project by ID
function loadProject(projectId) {
    const project = projectsData[projectId];
    if (!project) {
        console.error(`Project with ID ${projectId} not found`);
        $('.project-title').text("Project Not Found");
        $('.project-subtitle').text("Please check the project ID and try again.");
        return;
    }

    populateHeader(project.header);
    populateGallery(project.gallery);
    populateTechnology(project.technology);
    populateFeatures(project.features);
    populateChallenges(project.challenges);
    setupAnimations();
    setupInteractions(projectId);
}

// Function to populate header section
function populateHeader(header) {
    $('.project-title').text(header.title);
    $('.project-subtitle').text(header.subtitle);
    
    // const $links = $('.project-links');
    // $links.empty();
    // header.links.forEach(link => {
    //     $links.append(`
    //         <a href="${link.href}" class="action-btn ${link.class}" ${link.id ? `id="${link.id}"` : ''} target="_blank">
    //             <i class="${link.icon}"></i> ${link.text}
    //         </a>
    //     `);
    // });
}

// Function to populate gallery section
function populateGallery(gallery) {
    const $gallery = $('.project-gallery');
    $gallery.empty();
    
    gallery.forEach(item => {
        let mediaContent = '';
        if (item.type === "image") {
            mediaContent = `
                <img src="${item.src}" alt="${item.caption}" class="project-media">
            `;
        } else if (item.type === "video") {
            mediaContent = `
                <div style="position: relative; width: 100%; height: 100%; background: var(--dark-color);">
                    <i class="fas fa-play-circle play-video" data-video="${item.videoSrc}" style="font-size: 6rem; color: var(--light-color); position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; transition: all 0.4s ease;"></i>
                    <img src="${item.thumbnail}" alt="${item.caption}" class="project-media" style="opacity: 0.8;">
                </div>
            `;
        }
        
        $gallery.append(`
            <div class="gallery-item">
                <div class="media-container">
                    ${mediaContent}
                    <a href="${item.github}" class="github-code-btn" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                </div>
                <p class="media-caption">${item.caption}</p>
            </div>
        `);
    });
}

// Function to populate technology stack
function populateTechnology(technology) {
    const $techStack = $('.tech-stack');
    $techStack.empty();
    
    technology.forEach(tech => {
        $techStack.append(
            `<span class="tech-badge">${tech}</span>`
        );
    });
}

// Function to populate features
function populateFeatures(features) {
    const $featureList = $('.feature-list');
    $featureList.empty();
    
    features.forEach(feature => {
        $featureList.append(
            `<li>${feature}</li>`
        );
    });
}

// Function to populate challenges
function populateChallenges(challenges) {
    const $challengesGrid = $('.challenges-grid');
    $challengesGrid.empty();
    
    challenges.forEach(challenge => {
        $challengesGrid.append(`
            <div class="challenge-item">
                <h4>${challenge.title}</h4>
                <p>${challenge.solution}</p>
            </div>
        `);
    });
}

// Function to setup animations
function setupAnimations() {
    gsap.from('.project-header', {
        opacity: 0,
        y: 200,
        duration: 2,
        ease: 'power4.out'
    });

    gsap.from('.project-title', {
        opacity: 0,
        scale: 0.6,
        rotation: 15,
        duration: 2.2,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.5
    });

    gsap.from('.project-subtitle', {
        opacity: 0,
        y: 80,
        duration: 1.8,
        ease: 'power3.out',
        delay: 0.9
    });

    gsap.from('.project-links .action-btn', {
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1.5,
        ease: 'back.out(1.7)',
        delay: 1.3
    });

    $('.gallery-item').each(function(i) {
        gsap.from(this, {
            scrollTrigger: {
                trigger: this,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 150,
            scale: 0.85,
            rotation: i % 2 === 0 ? -20 : 20,
            duration: 1.8,
            ease: 'power4.out',
            delay: i * 0.25
        });
    });

    $('.details-section').each(function(i) {
        gsap.from(this, {
            scrollTrigger: {
                trigger: this,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: i % 2 === 0 ? -200 : 200,
            scale: 0.9,
            duration: 2,
            ease: 'power4.out'
        });
    });

    $('.challenge-item').each(function(i) {
        gsap.from(this, {
            scrollTrigger: {
                trigger: this,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: 1.5,
            ease: 'power3.out',
            delay: i * 0.25
        });
    });
}

// Function to setup interactions
function setupInteractions(projectId) {
    $('#demo-btn').on('click', function(e) {
        e.preventDefault();
        alert(`Interactive Demo for ${projectsData[projectId].header.title}: Experience it in action!`);
    });

    $('#case-study-btn').on('click', function(e) {
        e.preventDefault();
        alert(`Case Study: ${projectsData[projectId].header.title}
- Mission: Enhance user experience
- Hurdle: Dynamic content loading
- Breakthrough: jQuery with modular data
- Victory: Flexible project showcasing
- Arsenal: ${projectsData[projectId].technology.join(', ')}`);
    });

    const $videoModal = $('#videoModal');
    const $videoPlayer = $videoModal.find('video');
    const $closeModal = $('#closeModal');

    $(document).on('click', '.play-video', function() {
        const videoSrc = $(this).data('video');
        $videoPlayer.find('source').attr('src', videoSrc);
        $videoPlayer[0].load();
        $videoModal.addClass('active');
        gsap.from($videoModal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    $closeModal.on('click', function() {
        $videoModal.removeClass('active');
        $videoPlayer[0].pause();
        $videoPlayer[0].currentTime = 0;
        gsap.to($videoModal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: 'power3.in',
            onComplete: () => $videoModal.hide()
        });
    });

    $videoModal.on('click', function(e) {
        if (e.target === this) {
            $closeModal.trigger('click');
        }
    });
}