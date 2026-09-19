import React, { Children } from 'react';

const blogLayoutPage = ({ children }) => {
    return (
        <div>
            <h1>Blog Layout</h1>
            {children}
        </div>
    );
};

export default blogLayoutPage;