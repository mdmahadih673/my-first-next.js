import React from 'react';

const DeveloperCard = ({ developer }) => {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#141C26] ring-1 ring-white/10 transition-colors duration-200 hover:ring-[#5EC8B7]/40 focus-within:ring-[#5EC8B7]/60">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[#5EC8B7]/50 transition-all duration-300 group-hover:h-[3px] group-hover:bg-[#5EC8B7]" />

            <div className="flex flex-col gap-5 p-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                    <div aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#1E2B38] text-sm font-semibold tracking-wide text-[#5EC8B7] ring-1 ring-white/10">
                        {developer.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                        <h2 className="truncate text-[17px] font-semibold leading-tight tracking-tight text-[#EAF0F5]">
                            {developer.name}
                        </h2>
                        <p className="mt-1 truncate text-sm text-[#9AACBC]">{developer.role}</p>
                    </div>
                </div>

                {/* Bio */}
                <p className="line-clamp-3 text-sm leading-6 text-[#9AACBC]">{developer.bio}</p>

                {/* Info */}
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10 text-sm">
                    <div className="bg-[#18212C] px-3 py-2.5">
                        <dt className="text-xs text-[#7C8C9B]">Experience</dt>
                        <dd className="mt-0.5 truncate text-[#D6E0E8]">{developer.experience}</dd>
                    </div>
                    <div className="bg-[#18212C] px-3 py-2.5">
                        <dt className="text-xs text-[#7C8C9B]">Location</dt>
                        <dd className="mt-0.5 truncate text-[#D6E0E8]">{developer.location}</dd>
                    </div>
                </dl>

                {/* Skills */}
                <ul className="flex flex-wrap gap-2">
                    {developer.skills.slice(0, 5).map((skill) => (
                        <li key={skill} className="rounded-md bg-[#1E2B38] px-2.5 py-1 text-xs text-[#BACAD7]">
                            {skill}
                        </li>
                    ))}
                    {developer.skills.length > 5 && (
                        <li className="rounded-md px-2.5 py-1 text-xs text-[#7C8C9B] ring-1 ring-inset ring-white/10">
                            +{developer.skills.length - 5} more
                        </li>
                    )}
                </ul>
            </div>

            {/* Footer */}
            <div className="mt-auto border-t border-white/10 px-6 py-4">
                <a href="#" className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-[#5EC8B7] outline-none transition-colors hover:text-[#8FE3D5] focus-visible:ring-2 focus-visible:ring-[#5EC8B7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141C26]">
                    View profile
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">&rsaquo;</span>
                </a>
            </div>
        </article>
    );
};

export default DeveloperCard;