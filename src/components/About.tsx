export default function About() {
  return (
    <section
      id="about"
      aria-label="من نحن"
      className="section-shell scroll-mt-18"
    >
      <div className="content-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">من نحن</span>

          <h2 className="mt-5 text-2xl font-bold text-(--ink) sm:text-3xl">
            أكل يفرّحك من أول لقمة
          </h2>

          <p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
            في K & Runch بنحب الأكل اللي يتعمل بحب ويتاكل وهو لسه سخن.
            هدفنا نقدم أكل طعمه جامد، بسيط، ويخليك ترجع تاني.
          </p>
        </div>
      </div>
    </section>
  );
}