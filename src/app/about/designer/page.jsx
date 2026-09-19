import DesignerCard from "./DesignerCard";

const designers = [
  {
    id: 1,
    name: "Arafat Hasan",
    role: "UI/UX Designer",
    experience: "3 Years",
    bio: "Creative UI/UX designer focused on building clean, modern, and user-friendly digital experiences.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Product Designer",
    experience: "4 Years",
    bio: "Product designer who loves turning complex ideas into simple and beautiful user experiences.",
    skills: ["Figma", "Wireframing", "Design System", "Prototyping"],
    location: "Chattogram, Bangladesh",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Visual Designer",
    experience: "2 Years",
    bio: "Visual designer passionate about typography, color, branding, and modern digital interfaces.",
    skills: ["Photoshop", "Illustrator", "Branding", "Typography"],
    location: "Rajshahi, Bangladesh",
  },
  {
    id: 4,
    name: "Sadia Rahman",
    role: "Web Designer",
    experience: "3 Years",
    bio: "Web designer creating responsive, elegant, and conversion-focused websites for modern brands.",
    skills: ["Figma", "Web Design", "Responsive Design", "HTML/CSS"],
    location: "Sylhet, Bangladesh",
  },
  {
    id: 5,
    name: "Mahin Islam",
    role: "UX Designer",
    experience: "2 Years",
    bio: "UX designer interested in user research, interaction design, and creating meaningful experiences.",
    skills: ["UX Research", "User Flow", "Figma", "Usability Testing"],
    location: "Rangpur, Bangladesh",
  },
];


const DesignerPage = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {
                designers.map((designer) => <DesignerCard key={designer.id} designer={designer} ></DesignerCard>
                )
            }
        </div>
    );
};

export default DesignerPage;