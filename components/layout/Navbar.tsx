"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo trabajamos", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-(--border-subtle)" style={{
      backgroundColor: "rgba(13, 13, 13, 0.85)",
      backdropFilter: "blur(10px)",
    }}>
      <div className="flex items-center justify-between py-6 px-4 lg:px-20">
        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-3 text-accent hover:opacity-80 transition-opacity">
          <span className="font-mono font-semibold text-lg">DNM Studio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-brutal"
            >
              {link.label}
            </a>
          ))}
          <Button variant="fill" size="lg" href="#contacto">
            Agenda consulta
          </Button>
        </div>

        {/* Mobile Menu Toggle - Hidden on desktop */}
        <button
          className="btn btn-outline p-4 lg:hidden!"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          >
            {isMenuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-(--border-subtle) bg(--color-surface)">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-brutal text-base py-4 block w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="fill" href="#contacto" className="w-full">
                Agenda consulta
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
