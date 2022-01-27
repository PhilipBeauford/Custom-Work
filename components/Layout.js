import React from 'react'
import Footer from './Footer'
import NavAvatar from './NavAvatar'


export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <NavAvatar />
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    )
}
