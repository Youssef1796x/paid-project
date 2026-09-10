"use client";

import { useState } from "react";
import { menuCategories, menuItems } from "@/src/data/menu";
import CartSummary from "@/src/components/CartSummary";
import MenuItemCard from "@/src/components/MenuItemCard";

const maxItemsInCategory = Math.max(
  ...menuCategories.map(
    (category) => menuItems.filter((item) => item.category === category.id).length,
  ),
);

const mixedMenuItems = Array.from({ length: maxItemsInCategory }, (_, index) =>
  menuCategories
    .map((category) =>
      menuItems.find(
        (item) =>
          item.category === category.id &&
          menuItems.filter((candidate) => candidate.category === category.id).indexOf(item) === index,
      ),
    )
    .filter((item): item is (typeof menuItems)[number] => Boolean(item)),
).flat();

const initialVisibleCount = 6;

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const getSelectedOptionLabel = (itemId: string) => selectedOptions[itemId];

  const getDefaultOptionLabel = (itemId: string) =>
    menuItems.find((item) => item.id === itemId)?.priceOptions?.[0]?.label;

  const getCartKey = (itemId: string, optionLabel?: string) =>
    optionLabel ? `${itemId}::${optionLabel}` : itemId;

  const updateQuantity = (
    itemId: string,
    optionLabel: string | undefined,
    change: number,
  ) => {
    setQuantities((current) => {
      const cartKey = getCartKey(itemId, optionLabel);
      const nextQuantity = Math.max(0, (current[cartKey] ?? 0) + change);

      return {
        ...current,
        [cartKey]: nextQuantity,
      };
    });
  };

  const selectOption = (itemId: string, label: string) => {
    setSelectedOptions((current) => ({
      ...current,
      [itemId]: label,
    }));
  };

  const activeCategory = menuCategories.find(
    (category) => category.id === activeCategoryId,
  );

  const filteredItems = activeCategoryId
    ? menuItems.filter((item) => item.category === activeCategoryId)
    : mixedMenuItems;

  const hasMoreItems = !activeCategoryId && filteredItems.length > initialVisibleCount;
  const showLoadMore = hasMoreItems && visibleCount < filteredItems.length;
  const visibleItems = hasMoreItems
    ? filteredItems.slice(0, visibleCount)
    : filteredItems;

  const handleCategoryChange = (categoryId: string) => {
    setVisibleCount(initialVisibleCount);
    setActiveCategoryId((current) => (current === categoryId ? null : categoryId));
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

        <div
          className="menu-category-tabs mt-8 flex gap-2 overflow-x-auto pb-2"
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
                onClick={() => handleCategoryChange(category.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                  isActive
                    ? "border-(--accent) bg-(--accent) text-foreground"
                    : "border-(--line) bg-(--surface) text-(--ink-soft) hover:border-(--accent) hover:text-(--ink)"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div
          className="mt-8"
          role="tabpanel"
          aria-label={activeCategory?.name ?? "كل الأصناف"}
        >
          <div className="grid gap-4">
            {visibleItems.map((item) => {
              const selectedOptionLabel =
                getSelectedOptionLabel(item.id) ?? getDefaultOptionLabel(item.id);
              const cartKey = getCartKey(item.id, selectedOptionLabel);

              return (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  quantity={quantities[cartKey] ?? 0}
                  selectedOptionLabel={selectedOptionLabel}
                  onSelectOption={(label) => selectOption(item.id, label)}
                  onAdd={() => updateQuantity(item.id, selectedOptionLabel, 1)}
                  onDecrease={() => updateQuantity(item.id, selectedOptionLabel, -1)}
                  onIncrease={() => updateQuantity(item.id, selectedOptionLabel, 1)}
                />
              );
            })}
          </div>

          {showLoadMore ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((current) => current + initialVisibleCount)}
                className="rounded-full border border-(--line) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--ink) transition-colors hover:border-(--accent) hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                عرض المزيد
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <CartSummary
        items={menuItems}
        quantities={quantities}
        onDecrease={(itemId, optionLabel) => updateQuantity(itemId, optionLabel, -1)}
        onIncrease={(itemId, optionLabel) => updateQuantity(itemId, optionLabel, 1)}
      />
    </section>
  );
}
