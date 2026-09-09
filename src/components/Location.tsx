import { Clock3, MapPin, Phone } from "lucide-react";
import { restaurantConfig } from "@/src/data/restaurant";

export default function Location() {
  return (
    <section
      id="location"
      aria-label="الموقع والتواصل"
      className="section-shell scroll-mt-18"
    >
      <div className="content-container py-16 sm:py-20 lg:py-24">
        <div className="max-w-5xl">
          <span className="eyebrow">موقعنا</span>

          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold text-(--ink) sm:text-3xl">
                {restaurantConfig.location.heading}
              </h2>

              <p className="mt-4 text-sm leading-7 text-(--ink-soft) sm:text-base">
                {restaurantConfig.location.body}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-(--line) bg-(--surface) p-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="mt-0.5 shrink-0 text-(--accent)"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs text-(--ink-muted)">العنوان</p>
                      <p className="mt-2 text-sm font-semibold text-(--ink)">
                        {restaurantConfig.location.address}
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Nasr+City%2C+Cairo"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs font-bold text-(--accent) hover:underline"
                      >
                        شوف المكان على جوجل مابس
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-(--line) bg-(--surface) p-4">
                  <div className="flex items-start gap-3">
                    <Clock3
                      size={20}
                      className="mt-0.5 shrink-0 text-(--accent)"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs text-(--ink-muted)">مواعيدنا</p>
                      <p className="mt-2 text-sm font-semibold text-(--ink)">
                        {restaurantConfig.location.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-(--line) bg-(--surface) p-4">
                  <div className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="mt-0.5 shrink-0 text-(--accent)"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs text-(--ink-muted)">التواصل</p>
                      <a
                        href={`tel:${restaurantConfig.location.phone}`}
                        className="mt-2 block text-sm font-semibold text-(--ink) hover:text-(--accent)"
                      >
                        {restaurantConfig.location.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-(--line) bg-(--surface)">
              <iframe
                title="موقع المطعم على جوجل مابس"
                src="https://www.google.com/maps?q=Nasr%20City%2C%20Cairo&output=embed"
                className="h-72 w-full border-0 sm:h-80 lg:h-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
