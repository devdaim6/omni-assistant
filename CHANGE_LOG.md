# Change Log

All notable changes to this project will be documented in this file.

## Types of Changes

- `feat`: A new feature for the user.
- `fix`: A bug fix for the user.
- `style`: Changes that do not affect the meaning of the code (e.g., formatting).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `chore`: Changes to the build process or auxiliary tools.

## How to Use

When making commits, please use one of the following prefixes in your commit message:

- **Feature:** `feat:` Your message here.
- **Bug Fix:** `fix:` Your message here.
- **Style:** `style:` Your message here.
- **Refactor:** `refactor:` Your message here.
- **Chore:** `chore:` Your message here.

## [Unreleased]

## [0.2.0] - 2024-01-28

### Added

- `feat`: Added a new registration form page (`app/register/page.tsx`)
- Introduces a user registration form for a seamless registration experience
- Enhances the user onboarding process by providing a dedicated registration route
- This addition lays the foundation for expanding user account management features

### Added

- `feat`: Created a new registration route for user sign-up.
- `refactor`: Updated prisma/schema.prisma to reflect changes related to user registration.

##### This update enhances the user experience by providing free token access for those who are not logged in. Authenticated users enjoy the added benefit of unlimited tokens upon login.

### Fixed

- `fix`: Resolve unique username issue in API auth route
- `fix`: Update authentication route to fix the unique username problem

### Added

- `refactor`:Modify prisma/schema.prisma to reflect the necessary schema changes

### Added

- `feat`: New component: Dropdown (components/Dropdown.tsx)

### Modified

- `feat`: Enhanced Navbar with user profile dropdown and signout button (components/ui/NavItems.tsx)

### Added

- `feat`: Authentication using NextAuth, Prisma, and PostgreSQL
- `feat`: Support for Google, GitHub, and simple credentials as authentication providers
- `feat`: Authentication routes in `app/api/auth/[...nextauth]/route.ts`
- `feat`: Session Provider in `app/Providers.tsx` for Client session
- `feat`: Prisma client (`lib/prisma.ts`) for database interactions
- `feat`: Redis client (`lib/redis.ts`) for caching
- `feat`: Database schema definition using Prisma (`prisma/schema.prisma`)

### Modified

- `refactor`: Updated layout

### Added

- `feat` : Contact page in `app/contact/page.tsx`

### Modified

- `fix` : Updated layout in `app/layout.tsx`
- `fix` : Updated page in `app/page.tsx`

### Removed

- `refactor` : Removed Footer component from the page and moved it to layout

### Added

- `feat`: Github Link Button in `components/ui/NavItems.tsx`

### Added

- `feat`: Dockerfile for containerization
- `feat`: About page in `app/about/page.tsx`
- `feat`: New service component in `components/Home/Services.tsx`
- `feat`: Restructured `components/Home` to `components/Home/Home.tsx`
- `feat`: Background sparkles component in `components/ui/BgSparkles.tsx`
- `feat`: Card component in `components/ui/Card.tsx`
- `feat`: Hover effect component in `components/ui/HoverEffect.tsx`
- `feat`: New assets for ChatMeh, Fun Zone, PDF Talks, and Recipe in `public/Assets`
- `feat`: New utility functions in `utils/services.ts`

### Modified

- `fix`: Updated layout in `app/layout.tsx`
- `fix`: Updated page in `app/page.tsx`
- `fix`: Modified navigation in `components/Nav.tsx`
- `fix`: Modified UI components: `components/ui/NavItems.tsx` and `components/ui/Sparkles.tsx`
- `fix`: Updated package-lock.json and package.json

### Renamed

- `fix`: Renamed `components/Home.tsx` to `components/Home/Home.tsx`

### Updated

- **Date:** 2024-02-01
- **Version:** 0.2.0

## [0.1.3] - 2024-01-27

### Added

- `feat:` Add Navbar and Home Component

### Updated

- **Date:** 2024-01-27
- **Version:** 0.1.3

## [0.1.2] - 2024-01-27

### Added

- `feat:` Vercel Deployment Button in README.md

### Updated

- **Date:** 2024-01-27
- **Version:** 0.1.2

## [0.1.1] - 2024-01-27

### Added

- `chore:` Labeler configuration in .github/labeler.yml

### Fixed

- `fix:` Resolve type error in NavItems component

### Added

- `feat:` NextUI provider in app/Providers.tsx

### Changed

- `chore:`Modified app/layout.tsx, app/page.tsx, tailwind.config.ts

### Removed

- `refactor:` Unused public/vercel.svg

### Updated

- **Date:** 2024-01-27
- **Version:** 0.1.1
