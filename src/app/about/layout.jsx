import React from "react";

const AboutLayout = ({ children }) => {
    return (
        <div className="grid min-h-screen grid-cols-[180px_1fr] bg-gray-950">

            {/* Sidebar */}
            <aside className="border-r border-gray-200 bg-gray-950 px-3 py-6">
                <h2 className="mb-6 px-3 text-base font-semibold text-gray-100">
                    About
                </h2>

                <nav className="space-y-1">
                    <a
                        href="/about"
                        className="block rounded-md px-3 py-2 text-sm text-gray-100 transition hover:bg-gray-200 hover:text-gray-900"
                    >
                        Overview
                    </a>

                    <a
                        href="/about/designer"
                        className="block rounded-md px-3 py-2 text-sm text-gray-100 transition hover:bg-gray-200 hover:text-gray-900"
                    >
                        Designer
                    </a>

                    <a
                        href="/about/developers"
                        className="block rounded-md px-3 py-2 text-sm text-gray-100 transition hover:bg-gray-200 hover:text-gray-900"
                    >
                        Developers
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="p-6">
                {children}
            </main>

        </div>
    );
};

export default AboutLayout;