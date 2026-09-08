const sections = [
  { id: "menu", label: "المنيو" },
  { id: "about", label: "من نحن" },
  { id: "reviews", label: "آراء العملاء" },
  { id: "location", label: "الموقع والتواصل" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="content-container flex h-[72px] items-center justify-between">
          <span className="sr-only">شريط التنقل</span>
          <img
            src="/images/profile/logo.jpg"
            alt="شعار المطعم"
            className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-[0_4px_14px_rgba(24,20,17,0.12)]"
          />
          <div className="hidden items-center gap-8 text-sm font-semibold text-[var(--ink-soft)] md:flex">
            <a href="#hero" className="transition-colors hover:text-[var(--accent)]">
              الرئيسية
            </a>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition-colors hover:text-[var(--accent)]"
              >
                {section.label}
              </a>
            ))}
          </div>
          <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-[var(--accent)]">
            K &amp; R
          </span>
        </nav>
      </header>

      <main>
        <section id="hero" aria-label="القسم الرئيسي" className="section-shell hero-section">
          <div className="content-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
            <div className="order-2 lg:order-1">
              <span className="eyebrow">القسم الرئيسي</span>
              <div className="mt-5 max-w-md border-r-4 border-[var(--accent)] pr-5">
                <div className="h-3 w-32 rounded-full bg-[var(--ink)]" />
                <div className="mt-4 h-3 w-52 rounded-full bg-[var(--ink)] opacity-75" />
                <div className="mt-6 h-2 w-40 rounded-full bg-[var(--ink-soft)] opacity-40" />
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-[28px] border border-[var(--line)] bg-[#17130f] shadow-[0_18px_50px_rgba(24,20,17,0.12)] lg:order-2">
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
