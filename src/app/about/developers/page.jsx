import DeveloperCard from "./developerCard";

const developers = [
    {
        id: 1,
        name: "Arif Hasan",
        role: "Frontend Developer",
        experience: "2 Years",
        bio: "Frontend developer focused on building clean, responsive, and user-friendly web interfaces.",
        skills: ["React", "JavaScript", "Tailwind CSS"],
        location: "Dhaka, Bangladesh",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        role: "Full Stack Developer",
        experience: "3 Years",
        bio: "Full stack developer passionate about building scalable web applications and modern user experiences.",
        skills: ["React", "Node.js", "MongoDB"],
        location: "Chattogram, Bangladesh",
    },
    {
        id: 3,
        name: "Tanvir Ahmed",
        role: "Backend Developer",
        experience: "4 Years",
        bio: "Backend developer specializing in APIs, databases, authentication, and server-side applications.",
        skills: ["Node.js", "Express.js", "PostgreSQL"],
        location: "Rajshahi, Bangladesh",
    },
    {
        id: 4,
        name: "Sadia Rahman",
        role: "Frontend Developer",
        experience: "2 Years",
        bio: "Frontend developer who enjoys turning designs into fast, accessible, and responsive websites.",
        skills: ["Next.js", "TypeScript", "CSS"],
        location: "Sylhet, Bangladesh",
    },
    {
        id: 5,
        name: "Mahin Islam",
        role: "MERN Stack Developer",
        experience: "3 Years",
        bio: "MERN stack developer experienced in creating complete web applications from frontend to backend.",
        skills: ["MongoDB", "Express", "React", "Node.js"],
        location: "Rangpur, Bangladesh",
    },
    {
        id: 6,
        name: "Fahim Chowdhury",
        role: "Software Developer",
        experience: "5 Years",
        bio: "Software developer interested in writing maintainable code and solving complex technical problems.",
        skills: ["Java", "Spring Boot", "MySQL"],
        location: "Dhaka, Bangladesh",
    },
    {
        id: 7,
        name: "Mehedi Hasan",
        role: "React Developer",
        experience: "2 Years",
        bio: "React developer focused on reusable components, modern UI patterns, and smooth web experiences.",
        skills: ["React", "Redux", "JavaScript"],
        location: "Khulna, Bangladesh",
    },
    {
        id: 8,
        name: "Tanjila Akter",
        role: "Mobile App Developer",
        experience: "3 Years",
        bio: "Mobile developer creating cross-platform applications with a focus on performance and usability.",
        skills: ["React Native", "Firebase", "TypeScript"],
        location: "Barishal, Bangladesh",
    },
    {
        id: 9,
        name: "Raihan Kabir",
        role: "Backend Engineer",
        experience: "4 Years",
        bio: "Backend engineer building secure APIs, database systems, and reliable server-side applications.",
        skills: ["Node.js", "Python", "PostgreSQL"],
        location: "Mymensingh, Bangladesh",
    },
    {
        id: 10,
        name: "Siam Ahmed",
        role: "Next.js Developer",
        experience: "2 Years",
        bio: "Next.js developer passionate about performance, SEO, server-side rendering, and modern web architecture.",
        skills: ["Next.js", "React", "TypeScript"],
        location: "Cumilla, Bangladesh",
    },
    {
        id: 11,
        name: "Jannatul Ferdous",
        role: "Software Engineer",
        experience: "5 Years",
        bio: "Software engineer who enjoys designing reliable systems and building practical solutions for real-world problems.",
        skills: ["Python", "Django", "PostgreSQL"],
        location: "Gazipur, Bangladesh",
    },
    {
        id: 12,
        name: "Adnan Karim",
        role: "Full Stack Engineer",
        experience: "4 Years",
        bio: "Full stack engineer working across frontend, backend, databases, and cloud-based applications.",
        skills: ["Next.js", "Node.js", "MongoDB"],
        location: "Narayanganj, Bangladesh",
    },
];


const developersPage = () => {
    return (
        <div className="grid grid-cols-3 gap-4">

            {
                developers.map((developer) => (
                    <DeveloperCard key={developer.id} developer={developer} />
                ))
            }
        </div>
    );
};

export default developersPage;