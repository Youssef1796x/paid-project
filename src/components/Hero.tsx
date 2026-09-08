import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="القسم الرئيسي"
      className="section-shell hero-section"
    >
      <div className="content-container grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-20">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">K & Runch</span>

          <div className="mt-5 max-w-md border-r-4 border-(--accent) pr-5">
            <h1 className="text-3xl font-bold leading-tight text-(--ink) sm:text-4xl">
              أكل يفرحك من أول لقمة
            </h1>

            <p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
              برجر، ساندوتشات وكريب معمولين بحب وطعم يخليك ترجع تاني.
            </p>

            <a
              href="#menu"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-(--accent) px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              شوف المنيو
            </a>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-[28px] border-2 border-[#e8623a45] lg:order-2">
          <Image
            src="/images/profile/banner.png"
            alt="بانر مطعم K & Runch"
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}