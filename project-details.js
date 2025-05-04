// project-details.js

// Multiple projects data
const projectsData = {
 'flight': {
        header: {
            title: "Flight Booking",
            subtitle: "This is a simple flight booking system that allows users to search for available flights and book them with ease. The system provides a user-friendly interface to view flight details, check availability, and complete bookings efficiently.",
            links: [
                // { class: "github-link", href: "https://github.com/yourusername/ecommerce-dashboard", icon: "fab fa-github", text: "Source Code" },
                // { class: "demo-link", href: "#", icon: "fas fa-play", text: "Interactive Demo", id: "demo-btn" },
                // { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "images/project/Flight/flight(1).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Flight"
            },
            {
                type: "image",
                src: "images/project/Flight/flight(2).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Flight"
            }, {
                type: "image",
                src: "images/project/Flight/flight(3).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Flight"
            }, {
                type: "image",
                src: "images/project/Flight/flight(4).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Flight"
            },
            {
                type: "image",
                src: "images/project/Flight/flight(5).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Flight"
            },
            // {
            //     type: "video",
            //     videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
            //     thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
            //     caption: "Explosive Intro Video",
            //     github: "https://github.com/yourusername/intro-video"
            // }
        ],
        technology: ["HTML5", "CSS3", "Bootstrap 5", "Angular 15", "TypeScript", "C#", ".NET Core", "Entity Framework Core", "SQL Server"]
        ,
        features: [
            "Flight search with filters (destination, date, etc.)",
            "User-friendly flight booking process",
            "Real-time flight availability updates",
            
        ],
        challenges: [
            { title: "Data Consistency",solution: "Implemented transactional operations with Entity Framework Core." },
            { title: "Scalability", solution: "Designed RESTful APIs with .NET Core and optimized SQL queries." },
            { title: "Responsive Design", solution: "Used Bootstrap 5 and Angular components for mobile-friendly UI." },
        ]
    },
    'blog': {
        header: {
            title: "Blog",
            subtitle: "This blog project allows users to create and share their own blog posts. Users can easily add a new blog by providing a title, content, and optional image. It's a simple and user-friendly platform for expressing ideas, sharing knowledge, and connecting with others through writing.",
            links: [
                // { class: "github-link", href: "https://github.com/yourusername/ecommerce-dashboard", icon: "fab fa-github", text: "Source Code" },
                // { class: "demo-link", href: "#", icon: "fas fa-play", text: "Interactive Demo", id: "demo-btn" },
                // { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "images/project/Blog/blog (1).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            },
            {
                type: "image",
                src: "images/project/Blog/blog (2).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            }, {
                type: "image",
                src: "images/project/Blog/blog (3).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            }, {
                type: "image",
                src: "images/project/Blog/blog (4).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            },
            {
                type: "image",
                src: "images/project/Blog/blog (5).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            },
            {
                type: "image",
                src: "images/project/Blog/blog (6).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            },
            {
                type: "image",
                src: "images/project/Blog/blog (7).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/Blog"
            },
            // {
            //     type: "video",
            //     videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
            //     thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
            //     caption: "Explosive Intro Video",
            //     github: "https://github.com/yourusername/intro-video"
            // }
        ],
        technology: ["HTML5", "CSS3", "Bootstrap 5", "Angular 15", "TypeScript", "C#", ".NET Core", "Entity Framework Core", "SQL Server"]
        ,
        features: [
            "User can create and publish blog posts with title, content, and images",
            "Edit and update existing blog posts easily",
            "Clean and responsive user interface for a smooth blogging experience",
            "Role-based access control for managing user permissions (e.g., Admin, Editor, Viewer)",
        ],
        
        challenges: [
            { title: "Content Management", solution: "Implemented CRUD operations using .NET Core and Entity Framework." },
            { title: "User Experience", solution: "Designed a clean UI using Angular and Bootstrap for better readability." },
            { title: "Image Handling", solution: "Integrated image upload and preview features with proper validation." },
            { title: "Role & Rights Management", solution: "Developed a flexible RBAC system with dynamic permission assignment in both backend (.NET Core) and frontend (Angular)." },
        ]
    }
    ,
    'chat': {
        header: {
            title: "Chat",
            subtitle: "This is a full-featured real-time chat application developed using ASP.NET Core, SignalR, and SQL Server. The system is designed to offer a seamless messaging experience with support for user-to-user chat, group conversations, and role-based control within chat groups",
            links: [
                // { class: "github-link", href: "https://github.com/yourusername/ecommerce-dashboard", icon: "fab fa-github", text: "Source Code" },
                // { class: "demo-link", href: "#", icon: "fas fa-play", text: "Interactive Demo", id: "demo-btn" },
                // { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "images/project/Chat/chat1.png",
                caption: "",
                github: ""
            },
            {
                type: "image",
                src: "images/project/Chat/chat2.png",
                caption: "",
                github: ""
            },{
                type: "image",
                src: "images/project/Chat/chat2.png",
                caption: "",
                github: ""
            },
            // {
            //     type: "video",
            //     videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
            //     thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
            //     caption: "Explosive Intro Video",
            //     github: "https://github.com/yourusername/intro-video"
            // }
        ],
        technology: ["HTML5", "CSS3", "Bootstrap 5", "MVC", "SignalR", "C#", ".NET Core", "Entity Framework Core", "SQL Server"]
        ,
        features: [
            "Allows secure and instant communication between individual users with real-time message delivery using SignalR.",
            "Users can create chat groups and invite others to participate. Each group maintains its own thread of conversations, and messages are broadcast to all group members in real time.",
            "The creator of a group is automatically assigned as the group admin. Admins can manage group members, remove users, and control group settings, giving them full authority over the group chat environment",
            "Users can be mentioned within group messages using @username format. Mentioned users receive a separate notification for better visibility",
             ,"Real-time typing indicators and online/offline user statuses improve user engagement and mimic modern chat app experiences."       
        ],
        
        challenges: [ 
            { 
                title: "Real-Time Communication", 
                solution: "Integrated SignalR with .NET Core to enable real-time messaging between users and within groups." 
            },
            { 
                title: "User-to-User Messaging", 
                solution: "Handled one-on-one private conversations with persistent message storage and user connection tracking." 
            },
            { 
                title: "Group Management", 
                solution: "Implemented group creation, user invitations, and chat broadcasting using SignalR groups." 
            },
            { 
                title: "Group Admin Controls", 
                solution: "Developed admin privileges allowing group owners to manage members, including removing users and editing group info." 
            },
            { 
                title: "Database Structure", 
                solution: "Designed normalized SQL Server schema to manage users, messages, group memberships, and chat history efficiently." 
            },
            { 
                title: "Connection Management", 
                solution: "Maintained active user connections and ensured delivery of messages even when users reconnect." 
            },
            { 
                title: "Mention & Notification System", 
                solution: "Implemented user mentions with `@username` recognition and triggered real-time notifications." 
            },
            { 
                title: "Security & Access Control", 
                solution: "Secured chat endpoints and group access using token-based authentication and user-role validation." 
            }
        ]
    },
    'salesmonitoringsystem': {
        header: {
            title: "Sales Monitoring System",
            subtitle: "The Sales Monitoring System is a powerful, web-based application built to streamline the tracking and analysis of business performance through real-time sales data and user activity. Designed with scalability and usability in mind, the system provides a comprehensive set of features for administrators and stakeholders to make informed, data-driven decisions.",
            links: [
                // { class: "github-link", href: "https://github.com/yourusername/ecommerce-dashboard", icon: "fab fa-github", text: "Source Code" },
                // { class: "demo-link", href: "#", icon: "fas fa-play", text: "Interactive Demo", id: "demo-btn" },
                // { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "images/project/SalesMonitoringSystem/Capture.png",
                caption: "",
                github: ""
            },
            {
                type: "image",
                src: "images/project/SalesMonitoringSystem/Capture2.png",
                caption: "",
                github: ""
            },
            {
                type: "image",
                src: "images/project/SalesMonitoringSystem/Capture3.png",
                caption: "",
                github: ""
            },
            {
                type: "image",
                src: "images/project/SalesMonitoringSystem/Capture4.png",
                caption: "",
                github: ""
            },
            {
                type: "image",
                src: "images/project/SalesMonitoringSystem/Capture5.png",
                caption: "",
                github: ""
            },
            {
                type: "image",
                src: "images/project/SalesMonitoringSystem/Capture6.png",
                caption: "",
                github: ""
            },
            // {
            //     type: "video",
            //     videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
            //     thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
            //     caption: "Explosive Intro Video",
            //     github: "https://github.com/yourusername/intro-video"
            // }
        ],
        technology: ["HTML5", "CSS3", "Bootstrap 5", "MVC", , "C#", ".NET Core", "Entity Framework Core", "SQL Server"]
        ,
        features: [
            "Tracks daily, weekly, and monthly sales transactions with real-time updates.",
            "Monitors performance metrics by product, sales agent, or region for better decision-making.",
            "Logs and tracks user activities across the system, including login history and action logs.",
            "Displays active users and their real-time activity to enhance transparency and control.",
            "Synchronizes data in real time using SignalR (or similar), ensuring instant updates across the dashboard.",
            "Provides a centralized admin dashboard with KPIs, graphs, and key performance summaries.",
            "Enables filtering, exporting, and scheduling of detailed sales reports for analysis.",
            "Supports role-based access control, allowing the admin to assign roles and manage user permissions.",
            "Highlights top-performing products, sales reps, and regions using interactive charts.",
            "Identifies anomalies or suspicious behavior through user monitoring features and activity logs."
        ]
        ,
        
        challenges:[ 
            { 
                title: "Real-Time Data Updates", 
                solution: "Implemented SignalR to push real-time updates for sales transactions and user activity to all connected clients." 
            },
            { 
                title: "Sales Data Aggregation", 
                solution: "Designed optimized SQL queries to aggregate and filter sales data across various dimensions like date, region, and product." 
            },
            { 
                title: "User Activity Tracking", 
                solution: "Developed a monitoring system to log and display user actions, login times, and session durations." 
            },
            { 
                title: "Admin Dashboard Visualization", 
                solution: "Built interactive charts and summary cards to visualize sales KPIs using chart libraries and custom components." 
            },
            { 
                title: "Role-Based Access Control", 
                solution: "Integrated a flexible RBAC system to manage permissions and access rights for different types of users." 
            },
            { 
                title: "System Performance", 
                solution: "Optimized backend API performance and ensured scalability to handle large volumes of sales and user data." 
            },
            { 
                title: "Data Consistency", 
                solution: "Ensured synchronization between frontend views and backend data sources to reflect real-time changes accurately." 
            },
            { 
                title: "Security & Data Privacy", 
                solution: "Implemented secure authentication and authorization using JWT tokens and HTTPS protocols to protect sensitive data." 
            }
        ]
    },
    'hms': {
        header: {
            title: "Hostel Management System",
            subtitle: "The Hostel Management System is a comprehensive web-based platform built to streamline the operations of hostel accommodations for both owners and students. It enables efficient management of hostel facilities, room allocations, student records, bookings, and payments from a centralized interface.",
            links: [
                // { class: "github-link", href: "https://github.com/yourusername/ecommerce-dashboard", icon: "fab fa-github", text: "Source Code" },
                // { class: "demo-link", href: "#", icon: "fas fa-play", text: "Interactive Demo", id: "demo-btn" },
                // { class: "case-study-link", href: "#", icon: "fas fa-book-open", text: "Case Study", id: "case-study-btn" }
            ]
        },
        gallery: [
            {
                type: "image",
                src: "images/project/hms/hms (1).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            
            {
                type: "image",
                src: "images/project/hms/hms (3).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (4).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (5).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (6).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (7).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (8).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (10).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (11).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (12).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (13).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (14).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            {
                type: "image",
                src: "images/project/hms/hms (6).png",
                caption: "",
                github: "https://github.com/IhtishamUl-haq/hostelmanagmentsystem"
            },
            
            // {
            //     type: "video",
            //     videoSrc: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
            //     thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1130&q=80",
            //     caption: "Explosive Intro Video",
            //     github: "https://github.com/yourusername/intro-video"
            // }
        ],
        technology: ["HTML5", "CSS3", "Bootstrap 5", "MVC", , "C#", ".NET", "Entity Framework", "SQL Server"]
        ,
        features : [
            "Allows hostel owners to add and manage multiple hostels with details like name, address, facilities, and images.",
            "Enables the creation and categorization of rooms by type (e.g., single, double, triple occupancy) with pricing and availability.",
            "Tracks room status in real time, including available, booked, and under maintenance.",
            "Maintains student records with personal details, contact information, ID proof, and guardian info.",
            "Supports a complete booking system where students can search hostels, view available rooms, and request bookings.",
            "Prevents overbooking by dynamically updating room availability based on confirmed bookings.",
            "Allows hostel owners to approve, reject, and manage student bookings from a centralized panel.",
            "Handles payment management including rent, booking fees, and additional charges with receipt generation.",
            "Displays a real-time admin dashboard showing total rooms, occupancy, active students, and monthly revenue.",
             
        ]
        ,
        
        challenges: [ 
            { 
                title: "Hostel and Room Structuring", 
                solution: "Designed a scalable database schema to efficiently manage multiple hostels, room types, and availability status." 
            },
            { 
                title: "Real-Time Room Availability", 
                solution: "Implemented SignalR to reflect real-time room booking and availability status without requiring page refresh." 
            },
            { 
                title: "Booking Management", 
                solution: "Handled overlapping booking requests and ensured accurate room allocation through backend validation." 
            },
            { 
                title: "Student Information Handling", 
                solution: "Developed secure modules to collect and manage detailed student records with data validation and privacy protection." 
            },
            { 
                title: "Payment Integration", 
                solution: "Integrated payment tracking and receipt generation to manage booking fees, rent, and additional charges effectively." 
            },
            { 
                title: "Admin Dashboard Reporting", 
                solution: "Built an intuitive dashboard with dynamic charts and metrics to help hostel owners monitor bookings, payments, and occupancy." 
            },
            { 
                title: "Role & Access Control", 
                solution: "Implemented RBAC to restrict and define access for admins, hostel managers, and students using token-based authentication." 
            },
            { 
                title: "Notification and Reminder System", 
                solution: "Added automated reminders for pending payments and booking confirmations to enhance user communication." 
            }
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

    // gsap.from('.project-links .action-btn', {
    //     opacity: 0,
    //     y: 50,
    //     stagger: 0.25,
    //     duration: 1.5,
    //     ease: 'back.out(1.7)',
    //     delay: 1.3
    // });

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