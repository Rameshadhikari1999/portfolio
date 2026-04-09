import { MdDoorFront } from "react-icons/md";
import { SiBackendless } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import img1 from '../images/project-1.png';
import img2 from '../images/project-2.png';
import img3 from '../images/project-3.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const menu = [
    {
        id: 1,
        name: "Home",
        link: "home"
    },
    {
        id: 2,
        name: "Services",
        link: "services"
    },
    {
        id: 3,
        name: "Skills",
        link: "skills"
    },
    {
        id: 4,
        name: "Experience",
        link: "experience"
    },
    {
        id: 5,
        name: "Projects",
        link: "projects"
    },
    {
        id: 6,
        name: "Contact",
        link: "contact"}];


const slides = [
    {
        id: 1,
        title: "Web Development",
        Icon: MdDoorFront,
        skils: [
            {
                id: "1a",
                name: "Full-Stack Web Development using Laravel and React JS",
            },
            {
                id: "1b",
                name: "Crafting responsive and interactive UI/UX with Tailwind CSS",
            },
            {
                id: "1c",
                name: "Delivering secure and scalable business web applications",
            },
            {
                id: "1d",
                name: "Optimizing modern frontend performance and accessibility",
            }]},

    {
        id: 2,
        title: "RESTful API",
        Icon: SiBackendless,
        skils: [
            {
                id: "2a",
                name: "Designing and implementing robust RESTful APIs using Laravel",
            },
            {
                id: "2b",
                name: "Seamless integration with external services and frontends",
            },
            {
                id: "2c",
                name: "Database performance optimization and query tuning",
            },
            {
                id: "2d",
                name: "Implementing secure user authentication and data management",
            }]},

    {
        id: 3,
        title: "System Architecture",
        Icon: CgWebsite,
        skils: [
            {
                id: "3a",
                name: "Designing comprehensive data architecture and inventory systems",
            },
            {
                id: "3b",
                name: "Refactoring legacy codebases for enhanced performance",
            },
            {
                id: "3c",
                name: "Automating operational workflows and business logic",
            },
            {
                id: "3d",
                name: "Architecting scalable and maintainable enterprise software solutions",
            }]},
];


 const projects = [
    {
        id: 1,
        name: "Foodmandu clone",
        img: img1,
        link: "https://foodmandu-clone-101.netlify.app/",
    },
    {
        id: 2,
        name: "Test Project",
        img: img2,
        link: "https://test-gsap-project.netlify.app/",
    },
    {
        id: 3,
        name: "Musichub Nepal App",
        img: img3,
        link: "https://musichubnepal.netlify.app/",
    },
];

const contactInfo =[
    {
        id: 1,
        name: "Mobile Number",
        icon: FaPhoneAlt,
        link: "+977-9865295585",
    },
    {
        id: 2,
        name: "Email",
        icon: MdEmail,
        link: "rameshadhikari199917@gmail.com",
    },
    {
        id: 3,
        name: "Address",
        icon: FaLocationDot,
        link: "Kathmandu, Nepal",
    },
    ]


        export {
            menu,
            slides,
            projects,
            contactInfo,
        }