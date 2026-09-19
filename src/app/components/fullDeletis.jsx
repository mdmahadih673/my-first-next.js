const FullDeletis = ({ post }) => {
    return (
        <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#141C26] ring-1 ring-white/10">
            <header className="border-b border-white/10 bg-[#18212C] px-6 py-8 sm:px-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-[#1E2B38] px-3 py-1 text-xs font-semibold text-[#5EC8B7] ring-1 ring-white/10">
                        {post.category}
                    </span>

                    <span className="text-xs text-[#7C8C9B]">
                        {post.readTime}
                    </span>
                </div>

                <h1 className="mt-6 text-3xl font-bold leading-tight text-[#EAF0F5] sm:text-4xl">
                    {post.title}
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[#9AACBC]">
                    {post.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#7C8C9B]">
                    <span className="font-medium text-[#D6E0E8]">{post.author}</span>
                    <span aria-hidden className="text-white/20">|</span>
                    <span>{post.date}</span>
                </div>
            </header>

            <div className="px-6 py-8 sm:px-10 sm:py-10">
                <div className="whitespace-pre-line text-base leading-8 text-[#BACAD7]">
                    {post.content}
                </div>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-[#1E2B38] px-2.5 py-1 text-xs text-[#BACAD7]"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default FullDeletis;