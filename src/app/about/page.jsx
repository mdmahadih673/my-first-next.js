import Link from "next/link";

const AboutPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
    <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
            About
        </h1>

        <p className="mb-10 text-gray-400">
            A little more about this project, its purpose, and the people
            behind it.
        </p>

        <div className="space-y-8">

            {/* Introduction */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <h2 className="mb-3 text-2xl font-semibold">
                    About This Project
                </h2>

                <p className="leading-7 text-gray-400">
                    This project is built as a simple and modern platform to
                    showcase creative work, technical skills, and useful
                    information in a clean and organized way. The main goal is
                    to keep the experience simple, fast, and easy to navigate.
                </p>
            </section>

            {/* Purpose */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <h2 className="mb-3 text-2xl font-semibold">
                    Our Purpose
                </h2>

                <p className="leading-7 text-gray-400">
                    The idea behind this project is to create a place where
                    design and development come together. It focuses on
                    presenting creative ideas, technical knowledge, and project
                    information without making the interface unnecessarily
                    complicated.
                </p>
            </section>

            {/* Design & Development */}
            <div className="grid gap-6 sm:grid-cols-2">
                <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                    <h2 className="mb-3 text-xl font-semibold">
                        🎨 Design
                    </h2>

                    <p className="leading-7 text-gray-400">
                        The interface follows a clean, minimal, and modern
                        visual style with a strong focus on readability,
                        spacing, and a comfortable user experience.
                    </p>
                </section>

                <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                    <h2 className="mb-3 text-xl font-semibold">
                        💻 Development
                    </h2>

                    <p className="leading-7 text-gray-400">
                        The project is developed with modern web technologies
                        and reusable components to keep the code organized,
                        maintainable, and easy to extend.
                    </p>
                </section>
            </div>

            {/* Technology */}
            <section className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <h2 className="mb-4 text-2xl font-semibold">
                    Technologies
                </h2>

                <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-300">
                        Next.js
                    </span>

                    <span className="rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-300">
                        React
                    </span>

                    <span className="rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-300">
                        Tailwind CSS
                    </span>

                    <span className="rounded-full bg-gray-800 px-4 py-2 text-sm text-gray-300">
                        JavaScript
                    </span>
                </div>
            </section>

            {/* Closing */}
            <section className="border-l-2 border-blue-500 pl-5">
                <p className="text-lg leading-8 text-gray-300">
                    Built with curiosity, creativity, and a continuous desire
                    to learn and improve.
                </p>
            </section>

        </div>
    </div>
</div>
        </div>

    );
};

export default AboutPage;