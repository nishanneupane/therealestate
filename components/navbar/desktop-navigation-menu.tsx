"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const navigationLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Properties",
        href: "/properties",
        children: [
            {
                title: "For Sale",
                href: "/properties/for-sale",
                description: "Explore the best properties for sale in Nepal.",
            },
            {
                title: "For Rent",
                href: "/properties/for-rent",
                description: "Find rental homes, apartments, and commercial spaces.",
            },
            {
                title: "Luxury Estates",
                href: "/properties/luxury",
                description: "Discover high-end luxury real estate in prime locations.",
            },
        ],
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
        children: [
            {
                title: "Buy Property",
                href: "/services/buy",
                description: "We help you find and purchase your dream property hassle-free.",
            },
            {
                title: "Sell Property",
                href: "/services/sell",
                description: "Get the best value for your property with our expert assistance.",
            },
            {
                title: "Property Management",
                href: "/services/management",
                description: "Complete management solutions for landlords and property owners.",
            },
            {
                title: "Legal & Consultation",
                href: "/services/legal",
                description: "Legal guidance and consultation for secure real estate transactions.",
            },
        ],
    },
    {
        title: "Contact",
        href: "/contact",
    },
];



export const DesktopNavigationMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navigationLinks.map((link) => {
                    if (link.children) {
                        return (
                            <NavigationMenuItem key={link.title}>
                                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 w-[400px] md:grid-cols-2">
                                        {link.children.map((child) => (
                                            <li key={child.title}>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        href={child.href}
                                                        className=" z-20 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {child.title}
                                                        </div>
                                                        <p className="text-sm leading-snug text-slate-500 line-clamp-2">
                                                            {child.description}
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    }
                    return (
                        <NavigationMenuItem key={link.title}>
                            <NavigationMenuLink asChild>
                                <a
                                    href={link.href}
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {link.title}
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};