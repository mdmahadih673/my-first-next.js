import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-3 text-4xl font-bold tracking-tight">
                    About
                </h1>

                <p className="mb-10 text-gray-400">
                    Get to know more about the people behind this project.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                    <Link
                        href="/about/designer"
                        className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-gray-800"
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl transition group-hover:bg-blue-600">
                            🎨
                        </div>

                        <h2 className="text-xl font-semibold">
                            Designer
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Learn more about the designer and their creative
                            work.
                        </p>

                        <span className="mt-5 inline-block font-medium text-blue-400 transition group-hover:translate-x-1">
                            View Profile →
                        </span>
                    </Link>

                    <Link
                        href="/about/developers"
                        className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-gray-800"
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-2xl transition group-hover:bg-blue-600">
                            💻
                        </div>

                        <h2 className="text-xl font-semibold">
                            Developer
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            Explore the developer, skills, and technical
                            journey.
                        </p>

                        <span className="mt-5 inline-block font-medium text-blue-400 transition group-hover:translate-x-1">
                            View Profile →
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;