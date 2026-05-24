---
description: "Use when working on Next.js dynamic content, CMS-driven pages, server rendering, caching, revalidation, block composition, or database-backed editable layouts. Covers the project's practical dynamic-site architecture."
applyTo: "app/**,components/**,utils/**"
---
# Dynamic Next.js System Guidance

- Treat this repo as a dynamic content system running on Next.js, not as a static brochure site.
- Prefer server-rendered content composition over client-fetched page assembly.
- Keep Vercel/Next caching semantics in mind. Changes should support cached dynamic delivery and future revalidation strategies.
- Avoid converting editorial content surfaces into heavy client-only trees unless the interaction model demands it.
- When a page is driven by dynamic content, keep the component registry predictable and explicit.
- Normalize raw content near the rendering boundary before it spreads through multiple components.
- Preserve editable content flows. Do not hardcode copy, URLs, or media that should remain owned by content.
- If a page needs deeper application logic, isolate that logic intentionally instead of letting it leak through generic content blocks.
- Favor strong block contracts over ad hoc presentation flags.
- If a component is being modernized, leave the content model clearer than you found it.