import { MdDoorFront } from "react-icons/md";
import { SiBackendless } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";


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
        name: "Projects",
        link: "projects"
    },
    {
        id: 5,
        name: "Contact",
        link: "contact"}];


const slides = [
    {
        id: 1,
        title: "Frontend Developer",
        Icon: MdDoorFront,
        skils: [
            {
                id: "1a",
                name: "Proficient in HTML, CSS, and JavaScript",
            },
            {
                id: "1b",
                name: "Experienced with React.js and State Management",
            },
            {
                id: "1c",
                name: "Skilled in Tailwind CSS and Modern Design Principles",
            },
            {
                id: "1d",
                name: "Implemented Advanced Animations with GSAP",
            },
            {
                id: "1e",
                name: "Proficient in Git and GitHub",
            }]},

    {
        id: 2,
        title: "Backend Developer",
        Icon: SiBackendless,
        skils: [
            {
                id: "2a",
                name: "Proficient in Server-Side Technologies",
            },
            {
                id: "2b",
                name: "Database Management",
            },
            {
                id: "2c",
                name: "API Development and Integration",
            },
            {
                id: "2d",
                name: "Authentication and Security",
            },
            {
                id: "2e",
                name: "Deployment and Maintenance",
        }]},

    {
        id: 3,
        title: "Full Stack Developer",
        Icon: CgWebsite,
        skils: [
            {
                id: "3a",
                name: "Full-Stack Development Expertise",
            },
            {
                id: "3b",
                name: "Database Design and Management",
            },
            {
                id: "3c",
                name: "API Development and Integration",
            },
            {
                id: "3d",
                name: "Responsive and Interactive UI/UX Design",
            },
            {
                id: "3e",
                name: "Version Control and Collaboration",
            },
            {
                id: "3f",
                name: "Performance Optimization and Security",
            }]},
];


        export {
            menu,
            slides,
        }