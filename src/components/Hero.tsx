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
  );
}
