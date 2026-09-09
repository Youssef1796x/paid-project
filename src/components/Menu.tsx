"use client";

import { useState } from "react";
import { menuCategories, menuItems } from "@/src/data/menu";
import MenuItemCard from "@/src/components/MenuItemCard";

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const previewCategory = menuCategories[0];
  const previewItems = menuItems.slice(0, 2);

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities((current) => {
      const nextQuantity = Math.max(0, (current[itemId] ?? 0) + change);

      return {
        ...current,
        [itemId]: nextQuantity,
      };
    });
  };

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
          <span className="shrink-0 rounded-full border border-(--accent) bg-(--accent-glow) px-4 py-2 text-sm font-semibold text-(--ink)">
            {previewCategory.name}
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {previewItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              quantity={quantities[item.id] ?? 0}
              onAdd={() => updateQuantity(item.id, 1)}
              onDecrease={() => updateQuantity(item.id, -1)}
              onIncrease={() => updateQuantity(item.id, 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
