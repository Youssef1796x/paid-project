"use client";

import { useState } from "react";

const navLinks = [
  { id: "hero", label: "الرئيسية" },
  { id: "menu", label: "المنيو" },
  { id: "about", label: "من نحن" },
  { id: "reviews", label: "آراء العملاء" },
  { id: "location", label: "الموقع والتواصل" },
];

const sections = [
  { id: "menu", label: "المنيو" },
  { id: "about", label: "من نحن" },
  { id: "reviews", label: "آراء العملاء" },
  { id: "location", label: "الموقع والتواصل" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="content-container flex h-[72px] items-center justify-between gap-3 md:gap-6">
          <span className="sr-only">شريط التنقل</span>
          <a href="#hero" aria-label="الرئيسية" className="logo-link">
            <img
              src="/images/profile/logo.jpg"
              alt="شعار المطعم"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
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
        <section id="hero" aria-label="القسم الرئيسي" className="section-shell hero-section">
          <div className="content-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
            <div className="order-2 lg:order-1">
              <span className="eyebrow">القسم الرئيسي</span>
              <div className="mt-5 max-w-md border-r-4 border-[var(--accent)] pr-5">
                <div className="h-3 w-32 rounded-full bg-[var(--ink)]" />
                <div className="mt-4 h-3 w-52 rounded-full bg-[var(--ink)] opacity-75" />
                <div className="mt-6 h-2 w-40 rounded-full bg-[var(--ink-soft)] opacity-50" />
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_50px_rgba(0,0,0,0.25)] lg:order-2">
              <img
                src="/images/profile/banner.png"
                alt="بانر المطعم"
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
            className={`section-shell scroll-mt-[72px] ${index % 2 === 0 ? "section-tint" : ""}`}
          >
            <div className="content-container py-16 sm:py-20 lg:py-24">
              <div className="section-placeholder">
                <span className="eyebrow">{section.label}</span>
                <div className="mt-5 h-px w-full bg-[var(--line)]" />
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="site-footer">
        <div className="content-container py-8">
          <span className="text-sm text-[var(--ink-soft)]">التذييل</span>
        </div>
      </footer>
    </div>
  );
}
