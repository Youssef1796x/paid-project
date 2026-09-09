"use client";

import { useState } from "react";
import { menuCategories, menuItems } from "@/src/data/menu";
import CartSummary from "@/src/components/CartSummary";
import MenuItemCard from "@/src/components/MenuItemCard";

const previewItemIds = new Set([
  "chicken-hill",
  "classic-burger",
  "golden-strips",
  "king-smoked",
  "nutella-boom",
]);

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0]?.id ?? "");

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities((current) => {
      const nextQuantity = Math.max(0, (current[itemId] ?? 0) + change);

      return {
        ...current,
        [itemId]: nextQuantity,
      };
    });
  };

  const activeCategory = menuCategories.find(
    (category) => category.id === activeCategoryId,
  );

  const activeCategoryItems = menuItems.filter(
    (item) =>
      item.category === activeCategoryId && previewItemIds.has(item.id),
  );

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

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="أقسام المنيو"
        >
          {menuCategories.map((category) => {
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategoryId(category.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                  isActive
                    ? "border-(--accent) bg-(--accent) text-(--foreground)"
                    : "border-(--line) bg-(--surface) text-(--ink-soft) hover:border-(--accent) hover:text-(--ink)"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="mt-8" role="tabpanel" aria-label={activeCategory?.name}>
          {activeCategoryItems.length > 0 ? (
            <div className="grid gap-4">
              {activeCategoryItems.map((item) => (
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
          ) : (
            <div className="rounded-2xl border border-dashed border-(--line) bg-(--surface-tint) px-4 py-10 text-center">
              <h3 className="text-base font-bold text-(--ink)">
                {activeCategory?.name}
              </h3>
              <p className="mt-2 text-sm text-(--ink-soft)">
                القسم موجود، والأصناف هتتضاف هنا.
              </p>
            </div>
          )}
        </div>
      </div>

      <CartSummary
        items={menuItems}
        quantities={quantities}
        onDecrease={(itemId) => updateQuantity(itemId, -1)}
        onIncrease={(itemId) => updateQuantity(itemId, 1)}
      />
    </section>
  );
}
