# UX Decisions

## Product Goal

The website should increase restaurant orders while staying simple, fast, enjoyable, and easy to use.

The experience should feel like browsing and ordering from a real Egyptian restaurant, not a generic e-commerce store.

## Core Principles

- Arabic-first
- RTL
- Mobile-first
- Primary mobile reference: 390×844
- Responsive testing: 360×800, 390×844, 412×915, tablet, desktop
- Menu and ordering are the center of the experience
- Supporting sections must stay lightweight
- Avoid unnecessary features and complexity

## Homepage

Current section order:

Navbar
→ Hero
→ Menu
→ About
→ Reviews
→ Location / Contact
→ Footer

The Hero should be compact and quickly guide the user to the Menu.

The homepage should serve both:

- new visitors who need restaurant context and trust
- returning visitors who mainly want to reach the Menu quickly

## Menu

The Menu is the main part of the website.

Current categories:

- برجر
- ساندوتشات
- كريب حادق
- كريب حلو

Categories should help users jump between sections rather than hide/filter the rest of the menu.

The full menu can remain visible as vertically organized category sections.

Each item should clearly show:

- image
- name
- short description
- price
- availability
- add/quantity controls

Direct adding should be possible for available items.

The current menu contains 16 real items from `src/data/menu.ts`.

## Cart

The Cart should preserve the user's Menu context.

Initial direction:

- Mobile: floating cart summary + bottom-sheet/overlay
- Desktop: side drawer/overlay

The cart should clearly show:

- selected items
- quantities
- total
- remove/edit actions

The cart should become visible after the first item is added.

## Ordering Flow

Menu
→ Add item
→ Cart
→ Checkout
→ Final Review
→ WhatsApp

The user must be able to return and edit before the final WhatsApp handoff.

Checkout collects only:

- name
- phone
- address
- optional notes

No account, login, payment, or unnecessary fields.

## Final Review

A separate final review step is currently preferred.

Its purpose is to let the customer confirm the complete order before leaving the website.

It should show:

- items
- quantities
- prices
- total
- customer information

Actions:

- رجوع للتعديل
- اطلب عبر واتساب

## WhatsApp

The website prepares an Arabic WhatsApp message containing the order and customer information.

The website opens WhatsApp with the prepared message.

The customer manually presses Send.

The website must never claim that the restaurant accepted or confirmed the order.

## Supporting Sections

### About

Short and supportive. It should not delay access to the Menu.

### Reviews

The demo version may use clearly identifiable placeholder review data to demonstrate the layout and interaction.

Before final client launch, placeholder reviews must be replaced with real customer review data supplied or approved by the restaurant.

### Location / Contact

Should provide practical information such as address, hours, phone, and useful location/contact actions when real data is available.

### Footer

Keep it simple.

## Responsive Direction

Mobile and desktop share the same product logic but may use different layouts.

### Mobile

Prioritize:

- fast access to the Menu
- compact item presentation
- easy touch interaction
- persistent cart visibility after adding
- simple overlays

### Desktop

Use the available space to improve:

- menu presentation
- cart visibility
- overall breathing room

Do not simply scale the mobile layout up.

## Decisions Intentionally Still Open

These should be validated through real UI slices instead of being decided prematurely:

- exact Hero height
- mobile Menu card orientation
- whether category shortcuts should be sticky
- exact cart dimensions
- exact checkout/review presentation
- final color palette and visual design system

## Development Philosophy

Do not build the entire experience before validating it.

Prefer small vertical slices that prove real user behavior.

A typical validation slice should follow:

real data
→ visible UI
→ real interaction
→ state change
→ user-visible result
→ manual testing
→ checkpoint
→ expand only after the pattern is proven
