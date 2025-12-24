# Next.js + Clerk + shadcn/ui Boilerplate

A modern dashboard starter with authentication, theming, and UI components pre-configured.

## Stack

- **Next.js 16** with App Router
- **React 19**
- **Clerk** for authentication
- **shadcn/ui** (new-york style) with Radix primitives
- **Tailwind CSS v4** with OKLCH colors
- **next-themes** for dark mode
- **Framer Motion** for animations
- **Lucide** icons

## Quick Start

```bash
# 1. Copy environment variables
cp .env.example .env.local

# 2. Add your Clerk keys to .env.local
# Get them from https://dashboard.clerk.com

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

## Features

- Collapsible sidebar navigation
- Team switcher component
- Breadcrumb navigation
- Light/dark theme toggle
- Sign-in/sign-up pages with Clerk components
- Clerk theme synced with shadcn design tokens

## Adding Components

```bash
npx shadcn@latest add <component>
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Dashboard home
├── globals.css         # Theme variables (OKLCH)
├── sign-in/            # Clerk sign-in page
└── sign-up/            # Clerk sign-up page

components/
├── ui/                 # shadcn primitives
├── app-sidebar.tsx     # Main navigation
├── clerk-provider.tsx  # Clerk + shadcn theme
└── theme-provider.tsx  # next-themes wrapper

lib/
└── utils.ts            # cn() helper

hooks/
└── use-mobile.ts       # Mobile detection
```
