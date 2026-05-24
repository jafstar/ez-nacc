---
description: "Use when rewriting template-origin components, hero sections, headers, navigation, landing-page sections, or design-first layouts while preserving a premium visual standard and editable content."
applyTo: "components/**"
---
# Design-First Modernization Guidance

- Assume many components began as old templates or rapid design-first assemblies.
- Do not shame the starting point in code or comments. Replace weak structure with stronger structure.
- Preserve the sense that the team cared about the visuals. Rewrites should feel more authored, not more generic.
- Favor decisive typography, spacing, art direction, and composition over safe default UI patterns.
- Keep the content model usable by editors, but do not let editable fields dictate poor markup or brittle component APIs.
- When modernizing a component, remove theme-era leftovers such as jQuery hooks, duplicated wrapper markup, and magic class dependencies where practical.
- Consolidate duplicate implementations when one cleaner component can own the surface.
- For header and hero work, treat those surfaces as system-defining brand components.
- Prefer reusable variants and structured props over one-off hacks copied from old templates.
- If a Flux or design reference exists, translate the intent into a durable component system rather than tracing the pixels blindly.