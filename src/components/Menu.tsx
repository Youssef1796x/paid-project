import { menuCategories } from "@/src/data/menu";

export default function Menu() {
  return (
    <section
      id="menu"
      aria-label="المنيو"
      className="section-shell scroll-mt-18"
    >
      <div className="content-container py-16 sm:py-20 lg:py-24">
        <div>
          <span className="eyebrow">المنيو</span>

          <h2 className="mt-5 text-2xl font-bold text-(--ink) sm:text-3xl">
            اختار اللي نفسك فيه
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-(--ink-soft) sm:text-base">
            كل اللي بتحبه موجود عندنا، اختار القسم وشوف الأصناف.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="shrink-0 rounded-full border border-(--line) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--ink-soft)"
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-(--line) bg-(--surface) p-4"
            >
              <div className="aspect-4/3 rounded-xl bg-(--line-soft)" />
              <div className="mt-4 h-4 w-2/3 rounded bg-(--line)" />
              <div className="mt-3 h-3 w-full rounded bg-(--line-soft)" />
              <div className="mt-2 h-3 w-4/5 rounded bg-(--line-soft)" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
