import React from "react";
import { Button } from "@/components/ui/button";


import Link from "next/link";
import { DesktopNavigationMenu } from "./desktop-navigation-menu";
import { MobileNavigation } from "./mobile-navigation";

const Navbar = () => {
    return (
        <nav className="w-full border-b border-gray-200 bg-white py-4 px-4 fixed top-0 left-0 z-20">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center">
                        <svg
                            className="h-8 w-8 text-red-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                        <span className="ml-2 text-xl font-bold text-gray-900 font-sans">THEREALESTATE</span>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <DesktopNavigationMenu />
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="outline">Login</Button>
                    <Button>Sign Up</Button>
                </div>

                <div className="md:hidden">
                    <MobileNavigation />
                </div>
            </div>
        </nav>
    );
};

export default Navbar