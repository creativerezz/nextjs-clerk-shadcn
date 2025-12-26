# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 dashboard application with Clerk authentication and shadcn/ui components. Uses Tailwind CSS v4 with OKLCH color theming and dark mode support.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Package manager:** npm (see package-lock.json)

## Architecture

### Authentication
- **Clerk** handles all authentication via `@clerk/nextjs`
- `middleware.ts` protects all routes except `/sign-in` and `/sign-up`
- `ClerkProvider` wrapper at `components/clerk-provider.tsx` applies the shadcn theme
- Sign-in/sign-up routes use catch-all segments: `app/sign-in/[[...sign-in]]/page.tsx`
- Clerk theming syncs with shadcn via `@clerk/themes/shadcn.css` import in globals.css

### UI Components
- **shadcn/ui** with "new-york" style variant (see `components.json`)
- Components in `components/ui/` are shadcn primitives
- Custom components in `components/` root (sidebar, navigation, providers)
- Icons from `lucide-react`

### Theming
- Tailwind CSS v4 with CSS variables in `app/globals.css`
- OKLCH color format for all theme colors
- Dark mode via `next-themes` with class-based switching
- Base color: stone

### Layout Structure
- Root layout wraps app in `ClerkProvider` > `ThemeProvider`
- Main page uses `SidebarProvider` with collapsible sidebar navigation
- `DashboardSidebar` contains route definitions and team switcher

### Path Aliases
```
@/* → ./*
```

### Key Files
- `middleware.ts` - Clerk auth middleware (protects all routes by default)
- `components/app-sidebar.tsx` - Dashboard navigation routes and sidebar layout
- `components/clerk-provider.tsx` - Clerk with shadcn theme integration
- `lib/utils.ts` - `cn()` utility for className merging
- `hooks/use-mobile.ts` - Mobile detection hook

## Adding shadcn Components

```bash
npx shadcn@latest add <component>
```

Custom registries configured:
- `@clerk` - Clerk UI components
- `@blocks` - Additional block components
