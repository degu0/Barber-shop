import React from "react";

import style from './Layout.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <Header />
            <div>
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;