"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "hero", label: "الرئيسية" },
  { id: "menu", label: "المنيو" },
  { id: "about", label: "من نحن" },
  { id: "reviews", label: "آراء العملاء" },
  { id: "location", label: "الموقع والتواصل" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = navLinks.slice(1);

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="content-container flex h-18 items-center justify-between gap-3 md:gap-6">
          <span className="sr-only">شريط التنقل</span>

          <a href="#hero" aria-label="الرئيسية" className="logo-link">
            <Image
              src="/images/profile/logo.jpg"
              alt="شعار المطعم"
              width={64}
              height={64}
              className="logo-img"
            />
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold md:flex lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="menu-btn md:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2.5} aria-hidden="true" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div id="mobile-navigation" className="mobile-navigation md:hidden">
            <div className="content-container flex flex-col gap-1 pb-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="hero"
          aria-label="القسم الرئيسي"
          className="section-shell hero-section"
        >
          <div className="content-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
            <div className="order-2 lg:order-1">
              <span className="eyebrow">القسم الرئيسي</span>

              <div className="mt-5 max-w-md border-r-4 border-(--accent) pr-5">
                <div className="h-3 w-32 rounded-full bg-(--ink)" />
                <div className="mt-4 h-3 w-52 rounded-full bg-(--ink) opacity-75" />
                <div className="mt-6 h-2 w-40 rounded-full bg-(--ink-soft) opacity-50" />
              </div>
            </div>

            <div className="order-1 overflow-hidden rounded-[28px] border-2 border-[#e8623a45] lg:order-2">
 <Image
    src="/images/profile/banner.png"
    alt="بانر المطعم"
    width={1600}
    height={900}
    priority
    className="h-auto w-full object-cover"
  />
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            aria-label={section.label}
            className={`section-shell scroll-mt-18 ${
              index % 2 === 0 ? "section-tint" : ""
            }`}
          >
            <div className="content-container py-16 sm:py-20 lg:py-24">
              <div className="section-placeholder">
                <span className="eyebrow">{section.label}</span>
                <div className="mt-5 h-px w-full bg-(--line)" />
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="site-footer">
        <div className="content-container py-8">
          <span className="text-sm text-(--ink-soft)">التذييل</span>
        </div>
      </footer>
    </div>
  );
}