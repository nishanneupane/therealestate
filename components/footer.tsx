import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Facebook, Instagram, Linkedin, PinIcon as Pinterest, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="w-full bg-black text-white">
            {/* Links section */}
            <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FooterLinkSection
                    title="Popular Real Estate Markets"
                    links={[{ text: "Kathmandu, Nepal", href: "#" }, { text: "Pokhara, Nepal", href: "#" }]}
                />

                <FooterLinkSection title="New Constructions" links={[{ text: "Lalitpur, Nepal", href: "#" }]} />

                <FooterLinkSection title="Real Estate Resources" links={[{ text: "General Information", href: "#" }]} />

                <FooterLinkSection title="Homes for Sale by Region" links={[{ text: "Bagmati Province", href: "#" }]} />
            </div>

            {/* Social media and logos */}
            <div className="container mx-auto py-8 px-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-3">
                    <SocialIcon icon={<Facebook size={20} />} href="#" label="Facebook" />
                    <SocialIcon icon={<Twitter size={20} />} href="#" label="Twitter" />
                    <SocialIcon icon={<Linkedin size={20} />} href="#" label="LinkedIn" />
                    <SocialIcon icon={<Instagram size={20} />} href="#" label="Instagram" />
                    <SocialIcon icon={<Pinterest size={20} />} href="#" label="Pinterest" />
                    <SocialIcon icon={<Youtube size={20} />} href="#" label="YouTube" />
                </div>

                <div className="flex gap-4">
                    <Link href="#" aria-label="Househappy">
                        <Image
                            src="/house.jpg"
                            alt="Househappy logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <Link href="#" aria-label="Realtor.com">
                        <Image
                            src="/placeholder.svg?height=40&width=120&text=Realtor.com"
                            alt="Realtor.com logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Navigation links */}
            <div className="container mx-auto px-4 py-6 border-t border-gray-800">
                <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                    <FooterNavLink href="#" text="About Us" />
                    <FooterNavLink href="#" text="Careers" />
                    <FooterNavLink href="#" text="Accessibility" />
                    <FooterNavLink href="#" text="Feedback" />
                    <FooterNavLink href="#" text="Media Room" />
                    <FooterNavLink href="#" text="Ad Choices" />
                    <FooterNavLink href="#" text="Advertise with Us" />
                    <FooterNavLink href="#" text="Agent Support" />
                    <FooterNavLink href="#" text="Privacy" />
                    <FooterNavLink href="#" text="Terms" />
                </nav>

                <nav className="flex flex-wrap gap-x-6 gap-y-2">
                    <FooterNavLink href="#" text="Home Made" />
                    <FooterNavLink href="#" text="Tech Blog" />
                    <FooterNavLink href="#" text="Agent Blog" />
                    <FooterNavLink href="#" text="Sitemap" />
                    <Link href="#" className="text-sm text-yellow-400 hover:underline">
                        Do Not Sell or Share My Personal Information
                    </Link>
                </nav>
            </div>

            {/* App download section */}
            <div className="container mx-auto px-4 py-8 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-4">Get the App</h3>
                <div className="flex gap-4">
                    <Link href="#" aria-label="Download on the App Store">
                        <Image
                            src="/placeholder.svg?height=50&width=150&text=App+Store"
                            alt="Download on the App Store"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </Link>
                    <Link href="#" aria-label="Get it on Google Play">
                        <Image
                            src="/placeholder.svg?height=50&width=150&text=Google+Play"
                            alt="Get it on Google Play"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Legal text */}
            <div className="container mx-auto px-4 py-8 border-t border-gray-800 text-xs text-gray-400">
                <p className="mb-3">
                    Any mortgage lead generation activity in the state of Connecticut is performed by ABC Inc.
                </p>
                <p className="mb-3">* Based on an August 2024 proprietary survey among real estate professionals.</p>
                <p className="mb-3">
                    © 1995-2025{" "}
                    <Link href="#" className="underline">
                        National Association of Real Estate
                    </Link>
                    ® and{" "}
                    <Link href="#" className="underline">
                        Abc,inc
                    </Link>
                    . All rights reserved.
                </p>
            </div>
        </footer>
    );
}

// Helper components
interface FooterLinkSectionProps {
    title: string;
    links: { text: string; href: string }[];
}

function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
    return (
        <div>
            <h3 className="font-bold mb-4">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="text-sm hover:underline">
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="flex items-center text-sm mt-2 hover:underline">
                See more <ChevronDown size={16} className="ml-1" />
            </button>
        </div>
    );
}

interface SocialIconProps {
    icon: React.ReactNode;
    href: string;
    label: string;
}

function SocialIcon({ icon, href, label }: SocialIconProps) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
            {icon}
        </Link>
    );
}

interface FooterNavLinkProps {
    href: string;
    text: string;
}

function FooterNavLink({ href, text }: FooterNavLinkProps) {
    return (
        <Link href={href} className="text-sm hover:underline">
            {text}
        </Link>
    );
}