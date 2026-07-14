# Developer Portfolio Platform

A sleek, fast, and fully responsive personal portfolio built using **Nuxt 4** and **Vue 3**. This project showcases modern full-stack developer capabilities, technical competencies, and active software projects using clean engineering practices, a highly optimized unified component architecture, and fluid user interactions.

## Features

- **Dark / light theme toggle** with a persisted color-mode preference (defaults to dark)
- **Multi-language support** — English, Russian, and Estonian via `@nuxtjs/i18n`
- **Responsive project carousel** with auto-fitting card text and touch-friendly navigation
- **CV download** and smooth-scrolling **back to top** button
- **Prerendered** landing route for fast, static delivery

## Technical Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3 composition API layout ecosystem)
- **Language:** TypeScript (strictly typed codebase and clean interfaces)
- **Component UI:** [Nuxt UI](https://ui.nuxt.com/) ecosystem
- **Internationalization:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) (English, Russian, Estonian)
- **Icons:** Lucide (`@iconify-json/lucide`) and Simple Icons (`@iconify-json/simple-icons`)
- **Styling:** Tailwind CSS v4 utility classes with bespoke CSS variable color mapping

---

## 📂 Project Structure

```text
├── app/
│   ├── components/
│   │   ├── AboutMe.vue          # Biography section with asymmetrical layout
│   │   ├── BackToTop.vue        # Floating scroll-to-top control
│   │   ├── ContactMe.vue        # Social links and mailto contact node
│   │   ├── Header.vue           # Landing section intro splash
│   │   ├── Navbar.vue           # Sticky nav with theme + language dropdown
│   │   ├── Projects.vue         # Repository carousel with auto-fit card text
│   │   └── Skills.vue           # Skill badges alongside a timeline visualization
│   ├── layouts/
│   │   └── default.vue          # Base page layout
│   ├── pages/
│   │   └── index.vue            # Core page viewport coordinating all sections
│   ├── assets/css/main.css      # Global styles and CSS variables
│   ├── app.config.ts            # Nuxt UI theme/component overrides
│   ├── app.vue                  # Root app shell
│   └── router.options.ts        # Custom scroll-behavior configuration
├── i18n/locales/                # en.json, ru.json, et.json translation files
├── public/                      # Static assets (favicon, CV, decorative images)
└── nuxt.config.ts                # Nuxt modules, i18n, color mode, ESLint config
```

---

## License

Licensed under the [MIT License](LICENSE).
