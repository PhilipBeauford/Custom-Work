import React from 'react'
import Footer from './Footer';
import NavTW from './NavTW';
import { NavMore } from './NavMore'


export default function Layout({ children }) {
    return (

        <div className="flex flex-col justify-between min-h-screen">
            <NavMore />
            <NavTW />
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    )
}
