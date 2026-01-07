# PollinAction Website

A webiste for PollinAction built with Astro.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Image Optimization

The project uses a centralized image optimization utility to ensure consistent compression and format across the site.

- **Global Config:** Settings like quality (`50`) and format (`webp`) are defined in `src/utils/images.ts`.
- **Usage:** Instead of using the standard `astro:assets` components directly for every image, we use the `getOptimizedImage` helper:

```astro
---
import { getOptimizedImage } from '../utils/images';
import myImage from '../assets/images/example.jpg';

const optimized = await getOptimizedImage(myImage);
---
<img src={optimized.src} ... />
```

This approach drastically reduces the bundle size (e.g., large hero images) without manual resizing.
