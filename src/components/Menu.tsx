"use client";

import { useState } from "react";
import { menuCategories, menuItems } from "@/src/data/menu";
import CartSummary from "@/src/components/CartSummary";
import MenuItemCard from "@/src/components/MenuItemCard";

const previewItemIds = new Set(["chicken-hill", "classic-burger"]);

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities((current) => {
      const nextQuantity = Math.max(0, (current[itemId] ?? 0) + change);

      return {
        ...current,
        [itemId]: nextQuantity,
      };
    });
  };

  const previewItems = menuItems.filter((item) => previewItemIds.has(item.id));

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

        <nav
          aria-label="أقسام المنيو"
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
        >
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#menu-${category.id}`}
              className="shrink-0 rounded-full border border-(--line) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--ink-soft) transition-colors hover:border-(--accent) hover:text-(--ink) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
            >
              {category.name}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-10">
          {menuCategories.map((category) => {
            const items = category.id === "burger" ? previewItems : [];

            return (
              <section
                key={category.id}
                id={`menu-${category.id}`}
                aria-labelledby={`menu-heading-${category.id}`}
                className="scroll-mt-24"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3
                      id={`menu-heading-${category.id}`}
                      className="text-lg font-bold text-(--ink)"
                    >
                      {category.name}
                    </h3>
                    <p className="mt-1 text-xs text-(--ink-muted)">
                      {items.length > 0
                        ? `${items.length} أصناف متاحة في المعاينة`
                        : "الأصناف هتظهر هنا قريب"}
                    </p>
                  </div>
                </div>

                {items.length > 0 ? (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {items.map((item) => (
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
                  <div className="mt-4 rounded-2xl border border-dashed border-(--line) bg-(--surface-tint) px-4 py-6 text-sm text-(--ink-soft)">
                    القسم موجود وجاهز لإضافة الأصناف.
                  </div>
                )}
              </section>
            );
          })}
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
