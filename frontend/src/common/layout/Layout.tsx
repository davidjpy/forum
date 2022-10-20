import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import '@common/layout/Nav.css';
import Nav from '@common/layout/Nav';

const Layout: FC = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default Layout;