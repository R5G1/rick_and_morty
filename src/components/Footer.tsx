import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Vite Project. All rights reserved.</p>
        </footer>
    );
};

export default Footer;