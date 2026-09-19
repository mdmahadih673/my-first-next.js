import React from 'react';

const DesignerCard = ({ designer }) => {
    return (
        <div className=" max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
                    {designer.name.charAt(0)}
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        {designer.name}
                    </h2>
                    <p className="text-sm text-gray-500">{designer.role}</p>
                </div>
            </div>

            <p className="mb-5 text-sm leading-6 text-gray-600">
                {designer.bio}
            </p>

            <div className="mb-5 space-y-2 text-sm text-gray-600">
                <p>
                    <span className="font-semibold text-gray-900">Experience:</span>{" "}
                    {designer.experience}
                </p>

                <p>
                    <span className="font-semibold text-gray-900">Location:</span>{" "}
                    {designer.location}
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {designer.skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default DesignerCard;