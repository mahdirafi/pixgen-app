"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-photos", label: "All Photos" },
    { href: "/pricing", label: "Pricing" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="border-b px-2">
      {/* Main Navbar Row */}
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/Logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex gap-4 items-center">
          {!user && (
            <ul className="flex items-center space-x-2 text-sm">
              <Button>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button variant="outline">
                <Link href="/signin">Sign In</Link>
              </Button>
            </ul>
          )}

          {user && (
            <div className="flex gap-2 items-center">
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-1 px-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-2 rounded-md hover:bg-gray-100 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Auth Section */}
        <div className="mt-3 px-2">
          {!user && (
            <div className="flex flex-col gap-2">
              <Button className="w-full">
                <Link href="/signup" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Link href="/signin" onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
            </div>
          )}

          {user && (
            <div className="flex items-center justify-between py-2">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button
                onClick={() => {
                  handleSignOut();
                  setMenuOpen(false);
                }}
                size="sm"
                variant="danger"
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;