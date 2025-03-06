"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { navigationLinks } from "./desktop-navigation-menu";

export const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col gap-4 py-4">
                    {navigationLinks.map((link) => (
                        <div key={link.title} className="px-1">
                            {link.children ? (
                                <details className="group">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <span className="text-sm font-medium">{link.title}</span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <nav className="mt-1.5 ml-4 flex flex-col">
                                        {link.children.map((child) => (
                                            <a
                                                key={child.title}
                                                href={child.href}
                                                className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                <span className="text-sm font-medium">
                                                    {child.title}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </details>
                            ) : (
                                <a
                                    href={link.href}
                                    className="flex items-center rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                >
                                    <span className="text-sm font-medium">{link.title}</span>
                                </a>
                            )}
                        </div>
                    ))}

                    <div className="mt-4 px-1 space-y-3">
                        <Button variant="outline" className="w-full">Login</Button>
                        <Button className="w-full">Sign Up</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};