# Web Foundations
*Build real, accessible web pages from the structure outward — HTML, CSS, forms, and the habits of responsible publishing.*

**ID**: `basic_html_and_html5` · **Discipline**: Computing

## Course Aim
Web Foundations teaches high-school students how the web actually works, starting from the page and moving outward to the network. Students learn the difference between structure (HTML), presentation (CSS), behavior (JavaScript), and delivery (HTTP) so they can reason about a page instead of copying snippets and hoping. The throughline is craft: pages that are understandable to people, browsers, and assistive technology alike.

The course is foundation-first and accessibility-first. Rather than chasing frameworks, students master semantic HTML, the cascade and box model, responsive layout with flexbox and grid, accessible forms, and the discipline of testing and debugging with browser developer tools. Every chapter pairs a small set of concrete concepts with a buildable output, so the abstract ideas immediately become something a learner can open in a browser.

By the end, a student can hand-write a small, valid, responsive, accessible multi-page website, explain why each element was chosen, and audit and fix common defects. These are durable skills: they transfer to any framework and they map directly to how professional web teams talk about quality.

## Course Design Notes
This syllabus draws on MDN Learn Web Development, the W3C WAI accessibility tutorials and WCAG success criteria, and web.dev learning materials. It deliberately separates structure, presentation, behavior, and network delivery before introducing any tooling, because conflating those layers is the single most common source of beginner confusion. Accessibility is treated as a first-class concern from Chapter 1, not bolted on at the end. Assessment favors building and auditing real pages over memorizing tag lists; the question bank tests judgment ("which element communicates meaning best?") alongside syntax.

## Chapter 1: How the Web Works
- **Core questions**: What happens, step by step, after a user enters a URL? Which layer controls content, style, behavior, or delivery? What can developer tools reveal about a loaded page?
- **Key concepts**: browser, server, URL, HTTP request-response cycle, HTML/CSS/JS separation of concerns, status codes, developer tools (Elements, Console, Network).
- **Applied skills**: trace a page request from URL to render; classify a given line of code as structure, presentation, or behavior; open DevTools and inspect an element.
- **Common traps**: thinking the browser "runs" HTML like a program; confusing HTTP with HTML; assuming the server sends a finished picture rather than text the browser renders.

## Chapter 2: HTML Document Structure
- **Core questions**: What belongs in `<head>` versus `<body>`? Which boilerplate element is missing? Why does correct nesting matter?
- **Key concepts**: `<!DOCTYPE html>`, `<html lang>`, `<head>`, `<body>`, `<title>`, `<meta charset>`, `<meta name="viewport">`, element nesting, validation.
- **Applied skills**: write a valid HTML5 skeleton from memory; place metadata in the head and content in the body; validate a page and read the errors.
- **Common traps**: putting visible content in `<head>`; omitting the doctype, charset, or viewport meta tag; closing tags in the wrong order.

## Chapter 3: Semantic Content
- **Core questions**: Which element communicates the meaning best? Is this content a list, a table, or a set of paragraphs? What should the link text say?
- **Key concepts**: headings (`h1`–`h6`) and document outline, paragraphs, ordered/unordered lists, links and descriptive link text, images with `alt`, tables for tabular data, `<article>`, `<section>`, `<nav>`, `<header>`, `<main>`, `<footer>`.
- **Applied skills**: choose the semantically correct element for given content; write meaningful `alt` text and link text; build a logical heading hierarchy.
- **Common traps**: using `<div>` for everything; skipping heading levels; "click here" link text; using a table for layout or a list for tabular data.

## Chapter 4: CSS Basics and Layout
- **Core questions**: Which rule wins when several apply? Why is the rendered box larger than the declared width? How should this layout respond on a small screen?
- **Key concepts**: selectors and specificity, the cascade and inheritance, the box model, `box-sizing`, `display`, flexbox (main vs cross axis, `justify-content`, `align-items`), grid basics, relative units, media queries.
- **Applied skills**: predict which rule applies given specificity; compute an element's rendered width under `content-box` vs `border-box`; build a one-row flex layout that wraps on small screens.
- **Common traps**: forgetting padding and border add to width under the default `content-box`; confusing `justify-content` (main axis) with `align-items` (cross axis); using fixed pixel widths that break on phones.

## Chapter 5: Forms and User Input
- **Core questions**: Is the label programmatically connected to its input? What feedback helps a user recover from an error? Which `input` type fits the data?
- **Key concepts**: `<label for>`/`id`, `<input>` types (`text`, `email`, `tel`, `number`, `checkbox`, `radio`, `date`), `<button type>`, `<fieldset>`/`<legend>`, `required` and native validation, `autocomplete`, accessible error messaging, keyboard flow.
- **Applied skills**: associate every control with a visible label; pick the input type that triggers the right keyboard and validation; write a form that surfaces clear, recoverable errors.
- **Common traps**: using placeholder text as a label; leaving `for`/`id` mismatched; relying only on color to signal an error; assuming client-side validation is enough for security.

## Chapter 6: Accessibility From the Start
- **Core questions**: Can the page be used with a keyboard alone? Does the heading structure make sense read aloud? Is ARIA being used to replace a native element it shouldn't?
- **Key concepts**: semantic HTML as the foundation, keyboard operability and focus order, visible focus, color contrast (WCAG AA: 4.5:1 normal text, 3:1 large text), text alternatives, captions, the first rule of ARIA ("don't use ARIA if a native element exists").
- **Applied skills**: navigate and operate a page without a mouse; check text contrast against WCAG AA; audit a page and write before/after fixes.
- **Common traps**: `<div onclick>` instead of `<button>`; conveying meaning by color alone; adding ARIA roles to elements that already have them; missing or unhelpful `alt` text.

## Chapter 7: Debugging and Quality
- **Core questions**: Why is this style not applying? Which asset path is broken? What changes when the viewport shrinks?
- **Key concepts**: DevTools Elements/Console/Network inspection, HTML and CSS validation, relative vs absolute file paths, broken-link and broken-asset diagnosis, responsive testing, basic performance (image size, render-blocking).
- **Applied skills**: use the Elements panel to find an overridden rule; fix a broken relative asset path; reproduce and resolve a layout bug at a small viewport.
- **Common traps**: assuming a typo'd selector is a "browser bug"; wrong relative paths (`/`, `./`, `../`); editing the wrong CSS rule because of specificity or source order.

## Chapter 8: Publish a Small Website
- **Core questions**: Which files must ship together for the site to work? What content needs permission or attribution? What will be easy to update later?
- **Key concepts**: file and folder organization, relative links between pages and assets, version control basics (commit, history), privacy considerations, copyright and attribution, maintainability.
- **Applied skills**: organize a project so links survive deployment; attribute reused media correctly; structure markup and styles so future edits are low-risk.
- **Common traps**: hard-coded local absolute paths that break once published; shipping copyrighted media without permission; tangled markup that makes later edits fragile.

## Capstone
Design and publish a small informational website for a real or fictional school club, local project, or personal portfolio. The site must include semantic HTML across at least two pages, responsive CSS, accessible media with text alternatives, an accessible form with proper labels and validation, working in-site navigation, and a short quality checklist documenting accessibility, validation, and responsive testing. Students present a brief before/after note on at least three issues they found and fixed during development.

## Assessment Ideas
- HTML exercises graded on semantic structure and validity.
- CSS layouts graded on responsiveness, specificity discipline, and readability.
- An accessibility audit graded on keyboard operability, contrast, and text alternatives.
- Capstone graded on accessibility, maintainability, and working navigation.

## Research Notes
- MDN Learn Web Development: https://developer.mozilla.org/en-US/docs/Learn
- MDN HTML5 input types: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types
- MDN CSS box-sizing / box model: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
- MDN Aligning items in a flex container: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
- W3C WAI Forms Tutorial: https://www.w3.org/WAI/tutorials/forms/
- W3C WCAG 2.1 Contrast (Minimum) 1.4.3: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- web.dev Learn Web Development: https://web.dev/learn
