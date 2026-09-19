import FullDeletis from '@/app/components/fullDeletis';
import React from 'react';

const blogData = [
    {
        id: 1,
        title: "What is JavaScript and Why Do We Need It?",
        category: "JavaScript",
        author: "Mahadi Hasan",
        date: "September 17, 2026",
        readTime: "8 min read",
        description:
            "JavaScript is one of the most popular programming languages used to make websites interactive and dynamic.",
        content: `
      JavaScript is a programming language that allows developers to create interactive and dynamic web pages. 
      HTML is used to create the structure of a website, CSS is used to design it, and JavaScript adds behavior and functionality.

      With JavaScript, we can handle button clicks, create animations, validate forms, change website content, 
      fetch data from APIs, and build complete web applications.

      JavaScript is also used outside the browser. With technologies like Node.js, developers can use JavaScript 
      to build backend applications, APIs, servers, and even desktop applications.

      If you are interested in web development, learning JavaScript is one of the most important steps because 
      many popular technologies such as React, Next.js, and Node.js are built around the JavaScript ecosystem.
    `,
        tags: ["JavaScript", "Web Development", "Programming"],
    },

    {
        id: 2,
        title: "Understanding React Components as a Beginner",
        category: "React",
        author: "Mahadi Hasan",
        date: "September 16, 2026",
        readTime: "9 min read",
        description:
            "React components help developers build modern websites by breaking the user interface into small and reusable pieces.",
        content: `
      React is a popular JavaScript library for building user interfaces. One of the most important concepts 
      in React is the component.

      A component is basically a reusable piece of the user interface. For example, a website can have a Navbar, 
      Button, Card, Footer, and Product component. Instead of writing the same code again and again, we can create 
      a component once and reuse it wherever we need.

      React components can also receive data through props. This makes components flexible and reusable. 
      For example, the same ProductCard component can display different products by receiving different product data.

      React also provides hooks such as useState and useEffect that allow components to manage state and perform 
      different types of operations.

      Understanding components properly makes it much easier to build large React applications because the entire 
      application can be divided into smaller and manageable parts.
    `,
        tags: ["React", "Components", "Frontend"],
    },

    {
        id: 3,
        title: "What is Git and Why Should Developers Use It?",
        category: "Git & GitHub",
        author: "Mahadi Hasan",
        date: "September 15, 2026",
        readTime: "8 min read",
        description:
            "Git is a version control system that helps developers track code changes and safely manage their projects.",
        content: `
      Git is a distributed version control system that is widely used by software developers. It helps developers 
      keep track of changes made to their code over time.

      Imagine you are working on a project and suddenly your new changes break everything. Without Git, going back 
      to an older working version can be difficult. Git solves this problem by allowing developers to create 
      commits that represent different stages of their project.

      Some common Git commands include git init, git add, git commit, git status, git push, and git pull.

      GitHub works together with Git and provides an online platform where developers can store and share their 
      repositories. It also makes collaboration easier because multiple developers can work on the same project.

      Learning Git is important for beginners because almost every professional development workflow uses some 
      form of version control.
    `,
        tags: ["Git", "GitHub", "Version Control"],
    },

    {
        id: 4,
        title: "API Explained: How Websites Talk to Each Other",
        category: "Web Development",
        author: "Mahadi Hasan",
        date: "September 14, 2026",
        readTime: "10 min read",
        description:
            "APIs allow different applications to communicate with each other and exchange information.",
        content: `
      API stands for Application Programming Interface. In simple terms, an API allows one application to 
      communicate with another application.

      For example, when you open a weather application, the application may request weather information from 
      a weather API. The API receives the request, processes it, and sends the required data back to the application.

      In web development, APIs are commonly used to send and receive data between frontend and backend applications. 
      A React application can request product information from an API and then display those products on the page.

      APIs commonly use HTTP methods such as GET, POST, PUT, PATCH, and DELETE. These methods allow applications 
      to perform different operations on data.

      Understanding APIs is extremely useful for frontend developers because modern websites and applications 
      frequently depend on external or backend APIs to provide dynamic data.
    `,
        tags: ["API", "HTTP", "Web Development"],
    },

    {
        id: 5,
        title: "What is TypeScript and Why Use It with JavaScript?",
        category: "TypeScript",
        author: "Mahadi Hasan",
        date: "September 13, 2026",
        readTime: "9 min read",
        description:
            "TypeScript adds static typing to JavaScript and helps developers find common errors before running their applications.",
        content: `
      TypeScript is a programming language developed by Microsoft and built on top of JavaScript. 
      It adds features such as static typing to JavaScript.

      In normal JavaScript, we can create a variable without specifying what type of data it should contain. 
      This flexibility is useful, but it can sometimes lead to unexpected errors.

      TypeScript allows developers to define types such as string, number, boolean, array, object, and custom types. 
      Because of this, many common mistakes can be detected while writing the code instead of discovering them later.

      TypeScript is especially useful when working on large applications because types make the code easier to 
      understand, maintain, and refactor.

      Today, TypeScript is commonly used with technologies such as React, Next.js, Node.js, and many other 
      JavaScript-based tools.

      For beginners who already understand JavaScript basics, learning TypeScript can be a useful next step 
      toward writing more structured and maintainable code.
    `,
        tags: ["TypeScript", "JavaScript", "React"],
    },
];

const postDetalisPage = async ({ params }) => {
    const { postId } = await params;
    const post = blogData.find(post => post.id === parseInt(postId))
    console.log(post);

    return (
        <div>
            <h1>Post Details</h1>
            <FullDeletis post={post}></FullDeletis>
            
        </div>
    );
};

export default postDetalisPage;