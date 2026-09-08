export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-container py-8 flex flex-col items-center gap-2 text-center">
        <span className="text-base font-bold text-(--ink)">K & Runch</span>
        <span className="text-sm text-(--ink-soft)">مطعم مصري جامد</span>
        <span className="text-xs text-(--ink-muted)">
          © {new Date().getFullYear()} K & Runch
        </span>
      </div>
    </footer>
  );
}
