import Post from "../components/post";
const blogsData = [
  {
    id: 1,
    title: "What is JavaScript and Why Do We Need It?",
    category: "JavaScript",
    author: "Mahadi Hasan",
    date: "September 17, 2026",
    readTime: "5 min read",
    description:
      "JavaScript is one of the most popular programming languages for making websites interactive. Learn what JavaScript is, how it works, and why developers use it.",
  },
  {
    id: 2,
    title: "Understanding React Components as a Beginner",
    category: "React",
    author: "Mahadi Hasan",
    date: "September 16, 2026",
    readTime: "6 min read",
    description:
      "React components help developers build websites by breaking the user interface into small and reusable pieces. This blog explains components in a simple way.",
  },
  {
    id: 3,
    title: "What is Git and Why Should Developers Use It?",
    category: "Git & GitHub",
    author: "Mahadi Hasan",
    date: "September 15, 2026",
    readTime: "5 min read",
    description:
      "Git is a version control system that helps developers track changes in their code. Learn the basic idea of Git and why it is important for modern development.",
  },
  {
    id: 4,
    title: "API Explained: How Websites Talk to Each Other",
    category: "Web Development",
    author: "Mahadi Hasan",
    date: "September 14, 2026",
    readTime: "7 min read",
    description:
      "APIs allow different applications to communicate with each other. This beginner-friendly guide explains APIs using simple real-world examples.",
  },
  {
    id: 5,
    title: "What is TypeScript and Why Use It with JavaScript?",
    category: "TypeScript",
    author: "Mahadi Hasan",
    date: "September 13, 2026",
    readTime: "6 min read",
    description:
      "TypeScript adds static typing to JavaScript and helps developers catch common errors earlier. Learn the basic concept and benefits of TypeScript.",
  },
];


const blogPage = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {
                blogsData.map(blog => <Post key={blog.id} blog={blog} ></Post>)
            }
        </div>
    );
};

export default blogPage;