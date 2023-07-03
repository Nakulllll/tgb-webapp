import React, {ReactNode} from 'react';
import NavBar from './../components/nav';
import Footer from './../components/footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children } : LayoutProps) => {
    return (
        <div className="w-full flex flex-col items-center">
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
