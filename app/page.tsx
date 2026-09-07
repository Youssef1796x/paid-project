export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
        <nav className="mx-auto flex h-14 max-w-5xl items-center px-4 sm:px-6 lg:px-8">
          <span className="text-sm text-neutral-400">شريط التنقل</span>
        </nav>
      </header>

      <main className="flex-1">
        <section
          id="hero"
          aria-label="القسم الرئيسي"
          className="scroll-mt-14 border-b border-neutral-100"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <span className="text-sm text-neutral-400">القسم الرئيسي</span>
          </div>
        </section>

        <section
          id="menu"
          aria-label="المنيو"
          className="scroll-mt-14 border-b border-neutral-100"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <span className="text-sm text-neutral-400">المنيو</span>
          </div>
        </section>

        <section
          id="about"
          aria-label="من نحن"
          className="scroll-mt-14 border-b border-neutral-100"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <span className="text-sm text-neutral-400">من نحن</span>
          </div>
        </section>

        <section
          id="reviews"
          aria-label="آراء العملاء"
          className="scroll-mt-14 border-b border-neutral-100"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <span className="text-sm text-neutral-400">آراء العملاء</span>
          </div>
        </section>

        <section
          id="location"
          aria-label="الموقع والتواصل"
          className="scroll-mt-14"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <span className="text-sm text-neutral-400">الموقع والتواصل</span>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <span className="text-sm text-neutral-400">التذييل</span>
        </div>
      </footer>
    </>
  );
}
