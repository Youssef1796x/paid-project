import Image from "next/image";
import type { MenuItem } from "@/src/data/menu";

type MenuItemCardProps = {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
};

export default function MenuItemCard({
  item,
  quantity,
  onAdd,
  onDecrease,
  onIncrease,
}: MenuItemCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-(--line) bg-(--surface)">
      <div className="relative aspect-4/3 overflow-hidden bg-(--line-soft)">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-bold text-(--ink)">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-(--ink-soft)">
              {item.description}
            </p>
          </div>

          <span className="shrink-0 text-sm font-bold text-(--accent)">
            {item.price} جنيه
          </span>
        </div>

        <div className="mt-4">
          {!item.available ? (
            <span className="text-sm font-semibold text-(--ink-muted)">
              غير متاح حاليًا
            </span>
          ) : quantity === 0 ? (
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-(--accent) px-4 py-2 text-sm font-bold text-(--foreground) transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
            >
              عايز ده +
            </button>
          ) : (
            <div className="flex items-center justify-between rounded-xl border border-(--line) bg-(--background) p-1">
              <button
                type="button"
                aria-label={`زود ${item.name}`}
                onClick={onIncrease}
                className="flex size-10 items-center justify-center rounded-lg text-lg font-bold text-(--ink) transition-colors hover:bg-(--accent-glow)"
              >
                +
              </button>

              <span className="min-w-10 text-center text-sm font-bold text-(--ink)">
                {quantity}
              </span>

              <button
                type="button"
                aria-label={`قلل ${item.name}`}
                onClick={onDecrease}
                className="flex size-10 items-center justify-center rounded-lg text-lg font-bold text-(--ink) transition-colors hover:bg-(--accent-glow)"
              >
                −
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
