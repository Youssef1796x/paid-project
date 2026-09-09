import { restaurantConfig } from "@/src/data/restaurant";

export default function Location() {
  return (
    <section
      id="location"
      aria-label="الموقع والتواصل"
      className="section-shell scroll-mt-18"
    >
      <div className="content-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">موقعنا</span>

          <h2 className="mt-5 text-2xl font-bold text-(--ink) sm:text-3xl">
            {restaurantConfig.location.heading}
          </h2>

          <p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
            {restaurantConfig.location.body}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-(--line) bg-(--surface) p-4">
              <p className="text-xs text-(--ink-muted)">العنوان</p>
              <p className="mt-2 text-sm font-semibold text-(--ink)">
                {restaurantConfig.location.address}
              </p>
            </div>

            <div className="rounded-2xl border border-(--line) bg-(--surface) p-4">
              <p className="text-xs text-(--ink-muted)">مواعيدنا</p>
              <p className="mt-2 text-sm font-semibold text-(--ink)">
                {restaurantConfig.location.hours}
              </p>
            </div>

            <div className="rounded-2xl border border-(--line) bg-(--surface) p-4">
              <p className="text-xs text-(--ink-muted)">التواصل</p>
              <p className="mt-2 text-sm font-semibold text-(--ink)">
                {restaurantConfig.location.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
