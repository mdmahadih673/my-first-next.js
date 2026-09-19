import Link from 'next/link';

const Post = ({ blog }) => {
    const { title, category, author, date, readTime, description } = blog;
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#141C26] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-[#5EC8B7]/50">
            <div className="border-b border-white/10 bg-[#18212C] p-6">
                <span className="inline-flex rounded-full bg-[#1E2B38] px-3 py-1 text-xs font-medium text-[#5EC8B7] ring-1 ring-white/10">
                    {category}
                </span>

                <h2 className="mt-4 line-clamp-2 text-xl font-semibold leading-7 text-[#EAF0F5]">
                    {title}
                </h2>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <p className="line-clamp-3 text-sm leading-6 text-[#9AACBC]">
                    {description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-[#7C8C9B]">
                    <div>
                        <p className="font-medium text-[#D6E0E8]">{author}</p>
                        <p>{date}</p>
                    </div>

                    <span className="rounded-md bg-[#1E2B38] px-3 py-2 text-xs text-[#BACAD7]">
                        {readTime}
                    </span>
                </div>

                <div className="mt-auto pt-6">
                    <Link
                        href={`/Blog/${blog.id}`}
                        className="inline-flex items-center gap-2 rounded-md bg-[#5EC8B7] px-4 py-2.5 text-sm font-semibold text-[#10201F] transition hover:bg-[#8FE3D5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EC8B7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141C26]"
                    >
                        Read more
                        <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Post;