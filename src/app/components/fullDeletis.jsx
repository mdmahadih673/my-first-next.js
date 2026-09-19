import React from 'react';

const FullDeletis = ({ post }) => {
    return (
        <div>
            <h1 className="bg-blue-50 text-blue-600 p-4 m-2 rounded-2xl text-center">Post Details</h1>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Category & Read Time */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {post.category}
                    </span>

                    <span className="text-xs text-gray-500">
                        {post.readTime}
                    </span>
                </div>

                {/* Blog Details */}
                <div className="flex flex-1 flex-col p-6">

                    <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                        {post.title}
                    </h2>

                    <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                    </p>

                    {/* Author & Date */}
                    <div className="mt-auto border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {post.author}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    {post.date}
                                </p>
                            </div>

                            <span className="text-xs font-medium text-gray-500">
                                {post.tags[0]}
                            </span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FullDeletis;