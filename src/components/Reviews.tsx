export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-label="آراء العملاء"
      className="section-shell scroll-mt-18"
    >
      <div className="content-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">آراء الناس</span>

          <h2 className="mt-5 text-2xl font-bold text-(--ink) sm:text-3xl">
            الناس قالت إيه عننا؟
          </h2>

          <p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
            آراء عملائنا الحقيقية هتظهر هنا.
          </p>
        </div>
      </div>
    </section>
  );
}