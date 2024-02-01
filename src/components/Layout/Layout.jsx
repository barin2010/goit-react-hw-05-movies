import React, { Suspense} from "react";
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Loader } from "components/Loader/Loader"


export  const Layout = ({ children }) => {
    return (
        <div>
            <header className={css.header}>
                <nav>
                    <ul className={css.headerList}>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Home</NavLink></li>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/movies">Movies</NavLink></li>
                        
          <Suspense
          fallback={<Loader/>}
        >
          <Outlet />
        </Suspense>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            
        </div>
    );
}
