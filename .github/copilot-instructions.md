# Project Guidelines

## Mission
- Build a high-end, design-led, editable site system on top of Next.js rather than a generic template port.
- Preserve the visual ambition and delivery pragmatism of design-first work while steadily replacing template residue with deliberate architecture.
- Treat the current codebase as scaffolding for an elite build, not as the final standard.

## Product Philosophy
- This project is intentionally dynamic. Content lives in a database/CMS layer and is rendered through Next.js.
- Dynamic content is a core feature, not a compromise. Next.js and Vercel are expected to serve cached, server-rendered, revalidatable content well.
- Design quality matters. Do not flatten strong visual direction into generic enterprise UI.
- Delivery reality matters. It is acceptable that some surfaces started from templates or design-first assembly. Improve them without contempt for the original constraints.

## Architecture Priorities
- Keep the content-driven rendering model unless a task clearly requires pulling a route into a more explicit application surface.
- Favor constrained dynamic systems: explicit block/component registries, normalized props, and predictable data contracts.
- When editing components, reduce hidden coupling between raw CMS payloads, layout decisions, and client-side behavior.
- Prefer server-rendered content and minimal client JavaScript for editorial surfaces.
- Use client components only where interactivity materially requires them.
- Preserve caching and revalidation friendliness. Avoid changes that force unnecessary client fetching or purely client-side rendering.

## Design-First Rewrite Standard
- Assume the visual target is ambitious and intentional.
- Preserve or improve the design signal of a page when refactoring. Do not replace strong layouts with safe boilerplate.
- Old templates may be the starting point, but rewrites should remove legacy assumptions rather than re-skin them.
- Prefer a component system that can absorb premium design references while still accepting editable content.
- Distinguish between reusable layout primitives and one-off theme leftovers.

## Working With Dynamic Content
- Expect content to come from the CMS/database and be composed into pages dynamically.
- Normalize data at component boundaries rather than scattering defensive checks throughout markup.
- Keep content contracts explicit. If a component depends on title, body, CTA, media, theme, or list structures, make that obvious in the code.
- Avoid presentation hacks in content fields when a component prop or variant would be clearer.
- Prefer a small set of strong block variants over unconstrained free-form flags.

## Component Refactor Rules
- When touching legacy class components, jQuery behavior, or theme-era markup, move the implementation toward modern React patterns if the scope reasonably allows.
- Do not preserve jQuery/plugin behavior by default in new or rewritten components unless there is a concrete dependency that still requires it.
- Separate content concerns from interaction concerns.
- Keep component APIs readable and reusable enough for future page-builder use.
- Reuse existing content fields when practical, but do not let backward compatibility force obviously poor architecture.

## Header And Hero Direction
- Header and hero surfaces are high-leverage brand components and should be treated as authored system pieces, not generic template fragments.
- Header work should prioritize information hierarchy, mobile navigation behavior, strong typography, and a clear CTA strategy.
- Hero work should prioritize composition, art direction, CTA clarity, and content flexibility without losing visual control.
- If multiple hero/header implementations exist, prefer consolidating toward the cleaner CMS-aware version instead of extending the oldest theme file.

## File And Style Conventions
- Follow the existing Next.js App Router structure unless the task explicitly justifies route changes.
- Prefer focused component rewrites over broad unrelated cleanup.
- Keep styling cohesive. Use CSS modules or established local styles when rewriting isolated presentation components.
- Avoid introducing a second design language inside the same surface.

## Validation
- After edits, run the narrowest useful validation available for the touched slice.
- For visual component rewrites, prefer a targeted build/lint/error check and note when browser validation is still needed.
- Call out legacy issues that predate the change instead of silently folding them into the current task.

## Collaboration Expectations
- Assume future AI contributors should help modernize the system incrementally, not restart it from scratch.
- Be opinionated when a design-first or template-origin choice is hurting the system, but keep recommendations practical and incremental.
- Optimize for an elite end state that still respects editable content, cached dynamic delivery, and real-world production constraints.