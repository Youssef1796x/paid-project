"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";
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
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <article className="flex overflow-hidden rounded-2xl border border-(--line) bg-(--surface)">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-(--line-soft) sm:h-32 sm:w-32">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="128px"
          className="object-contain"
        />

        <button
          type="button"
          onClick={() => setIsImageOpen(true)}
          aria-label={`تكبير صورة ${item.name}`}
          className="absolute bottom-2 start-2 inline-flex size-9 items-center justify-center rounded-lg border border-white/20 bg-black/65 text-white shadow-sm backdrop-blur-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
        >
          <Maximize2 size={15} aria-hidden="true" />
        </button>
      </div>

      <div className="min-w-0 flex-1 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-base font-bold text-(--ink)">{item.name}</h3>
            <p className="mt-1.5 text-sm leading-6 text-(--ink-soft)">
              {item.description}
            </p>
          </div>

          <span className="shrink-0 text-sm font-bold text-(--accent)">
            {item.price} جنيه
          </span>
        </div>

        <div className="mt-3">
          {!item.available ? (
            <span className="text-sm font-semibold text-(--ink-muted)">
              غير متاح حاليًا
            </span>
          ) : quantity === 0 ? (
            <button
              type="button"
              onClick={onAdd}
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-(--accent) px-4 py-2 text-sm font-bold text-(--foreground) transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
            >
              عايز ده +
            </button>
          ) : (
            <div className="flex w-fit items-center rounded-xl border border-(--line) bg-(--background) p-1">
              <button
                type="button"
                aria-label={`زود ${item.name}`}
                onClick={onIncrease}
                className="flex size-9 items-center justify-center rounded-lg text-lg font-bold text-(--ink) transition-colors hover:bg-(--accent-glow) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                +
              </button>

              <span className="min-w-9 text-center text-sm font-bold text-(--ink)">
                {quantity}
              </span>

              <button
                type="button"
                aria-label={`قلل ${item.name}`}
                onClick={onDecrease}
                className="flex size-9 items-center justify-center rounded-lg text-lg font-bold text-(--ink) transition-colors hover:bg-(--accent-glow) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                −
              </button>
            </div>
          )}
        </div>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`صورة ${item.name}`}
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-(--surface)"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="إغلاق الصورة"
              className="absolute end-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-black/70 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="relative h-[70vh] max-h-[700px] w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 768px) 672px, calc(100vw - 32px)"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
