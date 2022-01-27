import React from 'react'
import Footer from './Footer';
import NavTW from './NavTW';


export default function Layout({ children }) {
    return (

        <div className="flex flex-col justify-between min-h-screen">
            <NavTW />
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    )
}
