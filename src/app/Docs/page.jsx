
const docsPage = () => {
    return (
        <div className="flex min-h-screen bg-[#FAF8F4] text-[#1B1B18]">
            {/* Left nav */}
            <nav className="hidden w-64 shrink-0 border-r border-black/10 px-6 py-10 lg:block">
                <p className="mb-8 font-serif text-lg text-[#1B1B18]">Docs</p>

                <div className="space-y-6 text-sm">
                    <div>
                        <p className="mb-2 text-[#8A8478]">Getting started</p>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="block rounded-md bg-[#3E4C8C]/10 px-2 py-1 text-[#3E4C8C]">Introduction</a></li>
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">Installation</a></li>
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">Quick start</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 text-[#8A8478]">Guides</p>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">Authentication</a></li>
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">Rate limits</a></li>
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">Webhooks</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 text-[#8A8478]">Reference</p>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">API</a></li>
                            <li><a href="#" className="block rounded-md px-2 py-1 text-[#4A453C] hover:bg-black/5">Errors</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="mx-auto w-full max-w-2xl px-6 py-12 lg:px-10">
                <p className="mb-2 text-sm text-[#8A8478]">Getting started</p>
                <h1 className="font-serif text-3xl leading-tight text-[#1B1B18]">Introduction</h1>

                <p className="mt-4 max-w-[65ch] text-[15px] leading-7 text-[#4A453C]">
                    Welcome to the documentation. This is where you&apos;ll find everything
                    needed to set things up, connect your data, and start building —
                    from your first request to production.
                </p>

                <h2 className="mt-10 font-serif text-xl text-[#1B1B18]">Before you start</h2>
                <p className="mt-3 max-w-[65ch] text-[15px] leading-7 text-[#4A453C]">
                    You&apos;ll need an API key and a project set up. If you haven&apos;t created
                    one yet, do that first — every request below depends on it.
                </p>

                <pre className="mt-5 overflow-x-auto rounded-lg bg-[#1B1B18] px-4 py-3.5 text-[13px] leading-6 text-[#E9E5DA]">
                    <code className="font-mono">{`curl https://api.example.com/v1/ping \\
  -H "Authorization: Bearer YOUR_KEY"`}</code>
                </pre>

                <h2 className="mt-10 font-serif text-xl text-[#1B1B18]">Next steps</h2>
                <ol className="mt-3 max-w-[65ch] list-decimal space-y-2 pl-5 text-[15px] leading-7 text-[#4A453C]">
                    <li>Install the SDK for your language.</li>
                    <li>Add your API key to the environment.</li>
                    <li>Send your first request.</li>
                </ol>
            </main>

            {/* On this page */}
            <aside className="hidden w-56 shrink-0 px-6 py-12 xl:block">
                <p className="mb-3 text-sm text-[#8A8478]">On this page</p>
                <ul className="space-y-2 border-l border-black/10 text-sm">
                    <li><a href="#" className="block border-l-2 border-[#3E4C8C] pl-3 -ml-px text-[#3E4C8C]">Before you start</a></li>
                    <li><a href="#" className="block pl-3 text-[#8A8478] hover:text-[#4A453C]">Next steps</a></li>
                </ul>
            </aside>
        </div>
    );
};

export default docsPage;