# Sharpsys Homepage

A responsive company homepage built with React for Sharpsys Software Solutions.

This project is focused on frontend UI development for a business website. I used reusable React components to build the full homepage layout, including the navbar, hero section, client trust bar, services, products, why-us section, CTA band, and footer.

It is a single-page frontend project built to practice real company-style website structure instead of a clone app.

## What’s in the project

- Sticky navbar with dropdown menus
- Mobile menu for smaller screens
- Hero section with CTA buttons
- Scrolling client logo trust bar
- Services section with reusable cards
- Products section with one flagship product block and smaller product cards
- Why Sharpsys section with proof points, stats, and testimonial
- CTA section
- Footer with grouped links and social icons

## Tech stack

- React
- JavaScript
- CSS3
- React Icons
- Create React App

## Main things I worked on

- Broke the homepage into reusable components
- Used local arrays to render nav links, services, products, and footer links
- Added responsive layouts for desktop, tablet, and mobile
- Built dropdown navigation and mobile menu behavior
- Added simple scroll reveal effects using a custom hook with IntersectionObserver
- Styled each section separately to keep the structure clean and easier to maintain

## Folder structure

- `src/components/layout` → Navbar and Footer
- `src/components/sections` → Homepage sections like Hero, Services, Products, Trust Bar, Why Sharpsys, and CTA
- `src/hooks` → custom scroll reveal hook
- `src/assets/logos` → logos and visual assets used across the page

## Run locally

```bash
npm install
npm start