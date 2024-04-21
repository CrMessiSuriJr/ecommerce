import React from 'react';
import Menu from './Menu';
import '../styles.css';
import Hero from "./hero";

const Layout = ({
                    title = 'Title',
                    description = 'Description',
                    className,
                    children,
                }) => (
        <div>
            <Menu/>
            {title.toLowerCase().includes("home") ? (
                <>
                    <Hero/>
                    <div className={className}>{children}</div>
                </>) : (
                <>
                    <div className="jumbotron">
                        <h2>{title}</h2>
                        <p className='lead'>{description}</p>
                    </div>
                    <div className={className}>{children}</div>
                </>)
            }
        </div>
    )
;

export default Layout;
