import { restaurantConfig } from "@/src/data/restaurant";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-container flex flex-col items-center gap-1 py-8 text-center">
        <span className="text-base font-bold text-(--ink)">
          {restaurantConfig.footer.name}
        </span>

        <span className="text-sm text-(--ink-soft)">
          {restaurantConfig.footer.tagline}
        </span>

        <span className="mt-2 text-xs text-(--ink-muted)">
          © {new Date().getFullYear()} {restaurantConfig.name}
        </span>
      </div>
    </footer>
  );
}
