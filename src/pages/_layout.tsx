import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/layout/v1/nav';
import NavBarV2 from '../components/layout/v2/navbarv2';
import Footer from '../components/layout/v1/footer';
import FooterV2 from '../components/layout/v2/footerv2';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();

    const renderNavbar = () => {
        if (router.pathname !== '/') {
            return <NavBarV2 />;
        }
        return <NavBar />;
    };

    const renderFooter = () => {
        if (router.pathname !== '/') {
            return <FooterV2 />;
        }
        return <Footer />;
    };

    return (
        <div className="w-full flex flex-col items-center overflow-x-hidden">
            {renderNavbar()}
            <main>{children}</main>
            {renderFooter()}
        </div>
    );
};

export default Layout;
