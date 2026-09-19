

const BlogLayout = ({ children }) => {
    return (
        <main className="min-h-screen bg-gray-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Blog Header */}
                <div className="mb-10 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
                        My Blog
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        Thoughts, Ideas &{" "}
                        <span className="text-blue-500">Stories</span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Welcome to my blog. Here I share my learning journey,
                        programming experiences, useful tips, and interesting
                        things I discover along the way.
                    </p>
                </div>

                {/* Blog Content */}
                {children}
            </div>
        </main>
    );
};

export default BlogLayout;
