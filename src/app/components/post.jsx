import React from 'react';
import Link from 'next/link'

const Post = ({ blog }) => {
    const { title, category, author, date, readTime, description } = blog;
    return (

        <div className="   group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                    {blog.category}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white">
                    {blog.title}
                </h2>
            </div>

            <div className="p-6">
                <p className="mb-5 text-sm leading-6 text-gray-600">
                    {blog.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
                    <div>
                        <p className="font-medium text-gray-800">{blog.author}</p>
                        <p>{blog.date}</p>
                    </div>

                    <span className="rounded-lg bg-gray-100 px-3 py-2">
                        {blog.readTime}
                    </span>
                </div>

                <div>
                    <Link href={`/Blog/${blog.id}`} className="mt-5  rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-600">
                        Read More →
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Post;