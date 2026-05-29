// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the FreeCodeCamp curriculum question bank (~141 questions spanning
// basic-javascript and basic-html-and-html5).
//
// FCC_SUB_TOPICS groups every question into a domain-shaped cluster keyed by
// id (the id-form is simpler than the string-form used in vcPolish.ts, and
// matches the careerTechPolish.ts convention).
//
// FCC_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge that names the spec, the API, or the common pitfall —
// voice: senior web developer mentoring a bootcamp student.
//
// FCC_CORRECT_SHORTENED trims `correct` strings flagged by the length-heuristic
// audit (correct ≥1.8x longer than longest distractor AND ≥20 chars longer).
// Trimmed payload is reattached via `lessonAddendum` so no info is lost.

// -----------------------------------------------------------------------------
// SUB_TOPICS — id -> cluster name. Clusters mirror the conceptual rungs a
// bootcamp curriculum walks a learner up: variables, arithmetic, strings,
// arrays, objects, control flow, functions, loops, recursion, then HTML
// document structure, content elements, links/images, lists, and forms.
// -----------------------------------------------------------------------------

export const FCC_SUB_TOPICS: Record<number, string> = {
  // ---------- JavaScript Fundamentals: Variables & Declarations ----------
  5008751296119: 'JavaScript Variables & Declarations',
  5003782918292: 'JavaScript Variables & Declarations',
  5003450207034: 'JavaScript Variables & Declarations',
  5008304550300: 'JavaScript Variables & Declarations',
  5006529468921: 'JavaScript Variables & Declarations',
  5008456948509: 'JavaScript Variables & Declarations',
  5007346787847: 'JavaScript Variables & Declarations',
  5001878830542: 'JavaScript Variables & Declarations',
  5003751501656: 'JavaScript Variables & Declarations',
  5002592079290: 'JavaScript Variables & Declarations',
  5006649652401: 'JavaScript Variables & Declarations',

  // ---------- JavaScript Arithmetic & Operators ----------
  5005182114619: 'JavaScript Arithmetic & Operators',
  5006709245950: 'JavaScript Arithmetic & Operators',
  5006064742232: 'JavaScript Arithmetic & Operators',
  5005202008621: 'JavaScript Arithmetic & Operators',
  5006351567726: 'JavaScript Arithmetic & Operators',
  5002892806490: 'JavaScript Arithmetic & Operators',
  5007961334427: 'JavaScript Arithmetic & Operators',
  5007096640085: 'JavaScript Arithmetic & Operators',
  5007771949498: 'JavaScript Arithmetic & Operators',
  5007220169871: 'JavaScript Arithmetic & Operators',
  5003172697992: 'JavaScript Arithmetic & Operators',
  5007323529630: 'JavaScript Arithmetic & Operators',
  5005253360861: 'JavaScript Arithmetic & Operators',
  5006261523010: 'JavaScript Arithmetic & Operators',
  5002738920928: 'JavaScript Arithmetic & Operators',
  5004781930251: 'JavaScript Arithmetic & Operators',
  5005005224063: 'JavaScript Arithmetic & Operators',
  5007043597012: 'JavaScript Arithmetic & Operators',
  5007395561465: 'JavaScript Arithmetic & Operators',

  // ---------- JavaScript Strings ----------
  5008494133960: 'JavaScript Strings',
  5007123387752: 'JavaScript Strings',
  5001616952822: 'JavaScript Strings',
  5004932425711: 'JavaScript Strings',
  5003536180201: 'JavaScript Strings',
  5008865156355: 'JavaScript Strings',
  5001680610691: 'JavaScript Strings',
  5003301063924: 'JavaScript Strings',
  5004531609281: 'JavaScript Strings',
  5008534641234: 'JavaScript Strings',
  5007757300577: 'JavaScript Strings',
  5004362289759: 'JavaScript Strings',
  5007771815010: 'JavaScript Strings',
  5007210115758: 'JavaScript Strings',

  // ---------- JavaScript Arrays ----------
  5009084779187: 'JavaScript Arrays',
  5003072577186: 'JavaScript Arrays',
  5008316951723: 'JavaScript Arrays',
  5005843167980: 'JavaScript Arrays',
  5002727450312: 'JavaScript Arrays',
  5003741694232: 'JavaScript Arrays',
  5004828563118: 'JavaScript Arrays',
  5008210135537: 'JavaScript Arrays',
  5008637550844: 'JavaScript Arrays',
  5001381101388: 'JavaScript Arrays',
  5001783357441: 'JavaScript Arrays',

  // ---------- JavaScript Objects ----------
  5005661616774: 'JavaScript Objects',
  5006190473110: 'JavaScript Objects',
  5006982973800: 'JavaScript Objects',
  5007226406889: 'JavaScript Objects',
  5006849009509: 'JavaScript Objects',
  5008208358479: 'JavaScript Objects',
  5005202564396: 'JavaScript Objects',
  5008864725974: 'JavaScript Objects',
  5004037087903: 'JavaScript Objects',
  5001318629728: 'JavaScript Objects',
  5002125774136: 'JavaScript Objects',
  5001842325254: 'JavaScript Objects',

  // ---------- JavaScript Comparison & Logical Operators ----------
  5001101330071: 'JavaScript Comparison & Logical Operators',
  5008641464015: 'JavaScript Comparison & Logical Operators',
  5001797111858: 'JavaScript Comparison & Logical Operators',
  5003710380897: 'JavaScript Comparison & Logical Operators',
  5005731216507: 'JavaScript Comparison & Logical Operators',
  5006424293118: 'JavaScript Comparison & Logical Operators',
  5003807832967: 'JavaScript Comparison & Logical Operators',
  5007993434918: 'JavaScript Comparison & Logical Operators',
  5004163551481: 'JavaScript Comparison & Logical Operators',
  5003925681431: 'JavaScript Comparison & Logical Operators',
  5007435562020: 'JavaScript Comparison & Logical Operators',

  // ---------- JavaScript Conditionals & Control Flow ----------
  5008478539271: 'JavaScript Conditionals & Control Flow',
  5001522769984: 'JavaScript Conditionals & Control Flow',
  5002342395387: 'JavaScript Conditionals & Control Flow',
  5006076739551: 'JavaScript Conditionals & Control Flow',
  5002572784245: 'JavaScript Conditionals & Control Flow',
  5005172069458: 'JavaScript Conditionals & Control Flow',
  5001297124930: 'JavaScript Conditionals & Control Flow',
  5002401730527: 'JavaScript Conditionals & Control Flow',
  5006012017194: 'JavaScript Conditionals & Control Flow',
  5002740691002: 'JavaScript Conditionals & Control Flow',
  5005632550672: 'JavaScript Conditionals & Control Flow',
  5008250320763: 'JavaScript Conditionals & Control Flow',

  // ---------- JavaScript Loops & Iteration ----------
  5002706254100: 'JavaScript Loops & Iteration',
  5007238307584: 'JavaScript Loops & Iteration',
  5007742860944: 'JavaScript Loops & Iteration',
  5007863553099: 'JavaScript Loops & Iteration',
  5008621884716: 'JavaScript Loops & Iteration',
  5009182606111: 'JavaScript Loops & Iteration',
  5001888066097: 'JavaScript Loops & Iteration',
  5007333880174: 'JavaScript Loops & Iteration',

  // ---------- JavaScript Functions & Scope ----------
  5003869245502: 'JavaScript Functions & Scope',
  5005592546202: 'JavaScript Functions & Scope',
  5008307685870: 'JavaScript Functions & Scope',
  5001345106628: 'JavaScript Functions & Scope',
  5004768741902: 'JavaScript Functions & Scope',
  5008948313821: 'JavaScript Functions & Scope',
  5009162589553: 'JavaScript Functions & Scope',
  5007118223452: 'JavaScript Functions & Scope',
  5001259820878: 'JavaScript Functions & Scope',
  5006051059491: 'JavaScript Functions & Scope',
  5003091682013: 'JavaScript Functions & Scope',
  5007552064716: 'JavaScript Functions & Scope',

  // ---------- JavaScript Recursion ----------
  5001527571880: 'JavaScript Recursion',
  5008788754630: 'JavaScript Recursion',
  5007277098451: 'JavaScript Recursion',

  // ---------- HTML Document Structure ----------
  5005331752903: 'HTML Document Structure',
  5002843950973: 'HTML Document Structure',
  5005181645570: 'HTML Document Structure',
  5008238811116: 'HTML Document Structure',
  5002318662325: 'HTML Document Structure',
  5002799779631: 'HTML Document Structure',
  5004991698982: 'HTML Document Structure',
  5002441560597: 'HTML Document Structure',

  // ---------- HTML Content Elements ----------
  5004822626048: 'HTML Content Elements',
  5006811264108: 'HTML Content Elements',
  5008926846974: 'HTML Content Elements',

  // ---------- HTML Links & Anchors ----------
  5005267237963: 'HTML Links & Anchors',
  5008500535255: 'HTML Links & Anchors',
  5002241760010: 'HTML Links & Anchors',
  5003192504322: 'HTML Links & Anchors',
  5005184339364: 'HTML Links & Anchors',

  // ---------- HTML Lists ----------
  5002484710566: 'HTML Lists',
  5003549189268: 'HTML Lists',

  // ---------- HTML Forms & Inputs ----------
  5003418743578: 'HTML Forms & Inputs',
  5008521219831: 'HTML Forms & Inputs',
  5002379892647: 'HTML Forms & Inputs',
  5001559923711: 'HTML Forms & Inputs',
  5002005227018: 'HTML Forms & Inputs',
  5004874510979: 'HTML Forms & Inputs',
  5008222186092: 'HTML Forms & Inputs',
  5005555580584: 'HTML Forms & Inputs',
  5004993542841: 'HTML Forms & Inputs',
  5002315824719: 'HTML Forms & Inputs',
}

// -----------------------------------------------------------------------------
// MENTOR_HINTS — one-line second-person nudges in the voice of a senior web
// developer mentoring a bootcamp student. Each names the spec, API, or common
// pitfall without giving the literal answer away.
// -----------------------------------------------------------------------------

export const FCC_MENTOR_HINTS: Record<number, string> = {
  // ---------- JavaScript Variables & Declarations ----------
  5008751296119: 'The `=` operator assigns the right side to the left side. Declaration first, then assignment — or both in one line.',
  5003782918292: 'You can declare and initialize in one line. The right-hand side is evaluated, then bound to the name.',
  5003450207034: 'Uninitialized variables hold `undefined`. Doing math with `undefined` produces `NaN`, not zero.',
  5008304550300: 'JavaScript is case-sensitive. `myVar`, `MyVar`, and `MYVAR` are three different bindings. Stick to camelCase.',
  5006529468921: 'Assigning one variable to another copies the value for primitives, the reference for objects. Know which kind you have.',
  5008456948509: '`var` is the legacy declarator — function-scoped and hoisted. Reach for `let` or `const` in any modern code.',
  5007346787847: 'A string literal needs matching quotes — single, double, or backtick. Pick one style and keep it consistent.',
  5001878830542: 'var hoists and is function-scoped; let is block-scoped with a temporal dead zone. That is the whole difference.',
  5003751501656: '`const` binds the name to the value — for objects and arrays, the contents are still mutable. Prefer `const` by default.',
  5002592079290: '`//` for single-line, `/* */` for multi-line. Comments are stripped at parse time and cost nothing at runtime.',
  5006649652401: 'Booleans are the primitive type with only two values. JS also has truthy/falsy values — different concept, easy to confuse.',

  // ---------- JavaScript Arithmetic & Operators ----------
  5005182114619: '`x++` is post-increment — it returns the old value, then adds 1. Use `++x` if you want the new value back.',
  5006709245950: '`--` mirrors `++`. Post-decrement returns the value before subtraction; pre-decrement returns after.',
  5006064742232: 'The `%` operator returns the remainder, not the quotient. Use it to test divisibility: `n % 2 === 0` is even.',
  5005202008621: '`a += b` is shorthand for `a = a + b`. The compound form reads the variable once, which can matter in expressions with side effects.',
  5006351567726: '`-=` subtracts in place. Same rule as `+=` — equivalent to `a = a - b`, but more idiomatic.',
  5002892806490: '`*=` multiplies in place. Shorthand for `a = a * b`.',
  5007961334427: '`/=` divides in place. JS division is floating point; `7 / 2` is `3.5`, not `3`.',
  5007096640085: 'The `+` operator adds numbers but concatenates strings. `"5" + 5` is `"55"` — coercion is the source of half of all JS bugs.',
  5007771949498: '`-` is unambiguous: it always coerces both operands to numbers. `"5" - 1` is `4`, not `"51"`.',
  5007220169871: 'Plain multiplication with `*`. Watch for floating-point surprises: `0.1 * 3` is not exactly `0.3`.',
  5003172697992: 'Division returns a float. Integer division does not exist in JS — use `Math.floor(a / b)` if you need it.',
  5007323529630: 'Decimal multiplication has the same IEEE-754 floating-point gotchas. Round when displaying money.',
  5005253360861: 'Decimal division — same floating-point caveats. `1 / 3` cannot be represented exactly.',
  5006261523010: 'Number literals with a `.` are doubles. JS has only one numeric type; ints and floats share a representation.',
  5002738920928: '`parseInt(str, 10)` is the safe form — always pass the radix or you risk legacy octal interpretation.',
  5004781930251: '`parseInt` stops at the first non-numeric character. `parseInt("42abc")` is `42`, not `NaN`.',
  5005005224063: '`Math.random()` returns a float in `[0, 1)`. The upper bound is exclusive — you will never see exactly 1.',
  5007043597012: 'For an integer in `[0, n)`, use `Math.floor(Math.random() * n)`. Floor, not round — round biases the endpoints.',
  5007395561465: 'For `[min, max]` inclusive: `Math.floor(Math.random() * (max - min + 1)) + min`. The `+1` is what makes max inclusive.',

  // ---------- JavaScript Strings ----------
  5008494133960: 'Single quotes let you embed double quotes without escaping. Pick the outer quote to minimize escape pain.',
  5007123387752: 'Inside a double-quoted string, escape inner double quotes with `\\"`. Or just use single quotes outside.',
  5001616952822: 'The standard escapes: `\\n` newline, `\\t` tab, `\\\\` backslash, `\\"` quote, `\\\'` apostrophe. Memorize the set.',
  5004932425711: '`+` between two strings produces a new string — strings are immutable, so concatenation always allocates.',
  5003536180201: '`+=` appends in place semantically, but under the hood it still allocates a new string. Avoid in tight loops.',
  5008865156355: 'String concatenation with `+` works, but template literals (`` `Hello ${name}` ``) read much better. Reach for backticks.',
  5001680610691: 'Strings are immutable. `s[0] = "X"` silently fails in non-strict mode. Build a new string instead.',
  5003301063924: 'Build the sentence by concatenating fixed text with the parameters. Or use a template literal for clarity.',
  5004531609281: 'Append with `+=`. For more than a few pieces, build an array and `join("")` at the end — it is faster.',
  5008534641234: '`.length` is a property, not a method — no parentheses. It counts UTF-16 code units, which can surprise you with emoji.',
  5007757300577: '`str[i]` returns the character at index `i`, or `undefined` if out of range. Zero-indexed, like arrays.',
  5004362289759: 'Last character is at index `str.length - 1`. There is no negative-index access in JS strings (that is Python).',
  5007771815010: 'Nth-from-last is `str[str.length - n]`. Build the offset from `length`; do not try `str[-n]`.',
  5007210115758: 'First character is `str[0]`. Same zero-indexing as arrays.',

  // ---------- JavaScript Arrays ----------
  5009084779187: 'Arrays are heterogeneous — you can mix types. They are really objects with integer keys and a `length` property.',
  5003072577186: 'Array literal syntax: `[item1, item2, ...]`. The trailing comma is optional and harmless.',
  5008316951723: '`arr[i]` is the access syntax. Out-of-range returns `undefined` — no exception, no bounds check.',
  5005843167980: 'Bracket assignment mutates in place: `arr[i] = newValue`. Unlike strings, arrays are mutable.',
  5002727450312: '`.push(x)` appends to the end and returns the new length. Mutates the array — does not return a new one.',
  5003741694232: '`.pop()` removes and returns the last element. The inverse of push. Mutates in place.',
  5004828563118: '`.shift()` removes and returns the first element. O(n) because every other element re-indexes — avoid in hot loops.',
  5008210135537: '`.unshift(x)` prepends to the front and returns the new length. Also O(n). Mirror of shift.',
  5008637550844: 'Arrays can hold arrays — that is how you build a matrix. `arr[i][j]` walks two dimensions.',
  5001381101388: 'Multi-dimensional access chains brackets: `arr[outer][inner][deeper]`. Each pair drops one level.',
  5001783357441: 'Same rule as nested arrays: chain the brackets. Each level is its own index.',

  // ---------- JavaScript Objects ----------
  5005661616774: 'Object literal: `{ key: value, ... }`. Keys are strings (or Symbols); values can be anything including functions.',
  5006190473110: 'Dot notation requires a valid identifier name. `obj.name` works; `obj.first name` does not.',
  5006982973800: 'Bracket notation `obj["key"]` works for any string — including keys with spaces, hyphens, or computed at runtime.',
  5007226406889: 'When the key is in a variable, you must use brackets: `obj[varName]`. Dot notation reads the literal name, not the variable.',
  5006849009509: 'An object literal is the cleanest replacement for a long switch or if/else chain over equal-checks on a single value.',
  5008208358479: 'Nested objects and arrays compose freely. Walk the path one accessor at a time; optional chaining (`?.`) helps with missing levels.',
  5005202564396: 'Chain dot or bracket accessors to reach into nested objects. Optional chaining `?.` short-circuits to `undefined` on null.',
  5008864725974: 'Reassign by writing to the same key: `obj.key = newValue`. Existing key gets overwritten; new key gets created.',
  5004037087903: 'Adding a property is just an assignment to a new key: `obj.newKey = value`. No declaration needed.',
  5001318629728: '`delete obj.key` removes the property entirely. Different from setting it to `undefined` — `in` will return false after delete.',
  5002125774136: '`obj.hasOwnProperty(key)` or the `in` operator both test for property presence. `in` walks the prototype chain; hasOwnProperty does not.',
  5001842325254: 'Records with dynamic keys: use bracket notation. Use `hasOwnProperty` to check before reading to avoid prototype surprises.',

  // ---------- JavaScript Comparison & Logical Operators ----------
  5001101330071: '`==` coerces types before comparing — that is the source of most "wat" memes. Prefer `===` unless you specifically want coercion.',
  5008641464015: '`===` compares without coercion. `"5" === 5` is `false`. Use it by default; reach for `==` only with a deliberate reason.',
  5001797111858: '`!=` is the coercing inequality. Same rules as `==`, negated. Same caveats.',
  5003710380897: '`!==` is the strict inequality. Pair with `===` and never look back.',
  5005731216507: '`>` compares numerically if both sides are numbers, lexicographically if both are strings. Mixed types get coerced — surprise.',
  5006424293118: '`>=` is non-strict. `5 >= 5` is `true`. The boundary case is the one to think about every time.',
  5003807832967: '`<` mirrors `>`. Same coercion rules apply when one side is a string.',
  5007993434918: '`<=` includes equality. Watch for off-by-one bugs at loop boundaries.',
  5004163551481: '`&&` short-circuits — if the left side is falsy, the right side never runs. Useful for guarded access.',
  5003925681431: '`||` short-circuits the other way — returns the first truthy operand. Common pattern: `x || defaultValue`.',
  5007435562020: 'Build the chain top-down: most specific condition first, then broader fallbacks. Order matters when ranges overlap.',

  // ---------- JavaScript Conditionals & Control Flow ----------
  5008478539271: '`if (cond) { ... }` — the block runs when `cond` is truthy. Watch what counts as truthy: 0, "", null, undefined, NaN are falsy.',
  5001522769984: '`else` catches everything `if` did not. With just two branches, this is the cleanest control structure JS offers.',
  5002342395387: '`else if` chains lets you handle three or more cases. Conditions are evaluated top to bottom; first match wins.',
  5006076739551: 'Long if/else-if chains hint that a lookup table or switch would read better. Reach for the alternative once you hit four branches.',
  5002572784245: 'Order conditions from most specific to most general. `n > 0` before `n >= 0` — the first one would never match otherwise.',
  5005172069458: '`cond ? a : b` is the ternary. Use it for single-expression branches; reach for `if` when you need statements.',
  5001297124930: 'Ternaries can chain: `a ? x : b ? y : z`. Past two levels, switch back to `if/else` — readability collapses fast.',
  5002401730527: '`switch (value)` with `case` labels compares using strict equality. Do not forget the `break` — fallthrough is a bug magnet.',
  5006012017194: '`default:` runs when no case matches. Put it last by convention, even though position is not strictly required.',
  5002740691002: 'Stack `case` labels without `break` between them to share a body. This is the one place fallthrough is idiomatic.',
  5005632550672: 'Switch beats long if/else-if when all branches check the same expression for equality. Otherwise stick with if/else.',
  5008250320763: 'Use `if/else if/else` chains with explicit return — early returns flatten nesting and read better than deep else trees.',

  // ---------- JavaScript Loops & Iteration ----------
  5002706254100: 'Three parts in the `for`: init, condition, increment. `for (let i = 0; i < n; i++)` is the canonical form.',
  5007238307584: 'Change the increment expression to step by 2: `i += 2`. The init and condition stay the same.',
  5007742860944: 'Start at the high end, decrement, and condition on `>=` lower bound. Symmetric to counting up.',
  5007863553099: '`for (let i = 0; i < arr.length; i++)` walks an array. Or use `for...of` for the values directly.',
  5008621884716: 'Inner loop runs to completion for each step of the outer loop. Total iterations multiply. Watch the indices — `i` and `j` are the convention.',
  5009182606111: '`while (cond) { ... }` checks first, then runs. Make sure something inside the body changes the condition or you have an infinite loop.',
  5001888066097: '`do { ... } while (cond)` runs once before checking — useful when you want at least one execution regardless of condition.',
  5007333880174: 'Closure over an outer counter keeps state across calls. The function returns a value derived from accumulated state.',

  // ---------- JavaScript Functions & Scope ----------
  5003869245502: 'Function declaration: `function name(params) { body }`. Named functions hoist; function expressions assigned to variables do not.',
  5005592546202: 'Arguments are passed positionally and bound to parameter names inside the function. Extra arguments are silently ignored.',
  5008307685870: 'Variables declared outside any function are global. Globals are convenient and dangerous — avoid them in real code.',
  5001345106628: 'Variables declared inside a function exist only there. Lexical scope: the function sees outward but the outer scope cannot see in.',
  5004768741902: 'A local declaration shadows a global of the same name inside the function. The global is unaffected; only the inner reference changes.',
  5008948313821: '`return value` ends the function and produces the value to the caller. Without `return`, the function returns `undefined`.',
  5009162589553: 'A function call is an expression — its return value can be assigned, passed, or used in an expression like any other value.',
  5007118223452: 'Early return on guard clauses flattens nesting. Handle the edge cases first and bail; the happy path stays unindented.',
  5001259820878: 'A function with no `return`, or with a bare `return;`, produces `undefined`. Assigning that result yields `undefined`.',
  5006051059491: 'Return the comparison directly: `return x === y`. Avoid the `if (cond) return true; else return false;` antipattern.',
  5003091682013: 'A queue is FIFO: enqueue with `.push()`, dequeue with `.shift()`. The order in is the order out.',
  5007552064716: 'Iterate the array, check the contact name, then check whether the property exists with `hasOwnProperty` before returning it.',

  // ---------- JavaScript Recursion ----------
  5001527571880: 'Every recursion needs a base case and a recursive step. Base case: terminates. Recursive step: progresses toward the base case.',
  5008788754630: 'Base case: empty array or single element. Recursive step: prepend the current value and recurse on `n - 1`.',
  5007277098451: 'Any loop can be expressed recursively, but JS does not optimize tail calls — deep recursion blows the stack. Stick to loops for big inputs.',

  // ---------- HTML Document Structure ----------
  5005331752903: 'An HTML element is `<tag>content</tag>`. The tag name is the same on open and close; closing tag has a leading slash.',
  5002843950973: '`<head>` holds metadata (title, meta, link); `<body>` holds rendered content. Both nest inside `<html>`.',
  5005181645570: '`<!DOCTYPE html>` is the HTML5 doctype. It triggers standards mode — without it, browsers slip into quirks mode and CSS misbehaves.',
  5008238811116: 'HTML5 introduced semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`. Use them over generic divs.',
  5002318662325: 'Remove the elements wholesale — opening tag, content, and closing tag together. Partial deletion leaves the parser in a bad state.',
  5002799779631: '`<div>` is a generic block container. Use it for grouping when no semantic element fits. Prefer `<section>` or `<article>` when they do.',
  5004991698982: 'HTML comments are `<!-- ... -->`. To uncomment, strip the `<!--` and `-->` delimiters, leaving the content in place.',
  5002441560597: 'Wrap the content in `<!-- ... -->` to hide it from rendering. The browser still parses the comment but renders nothing.',

  // ---------- HTML Content Elements ----------
  5004822626048: '`<h1>` through `<h6>` are the heading levels. One `<h1>` per page is the accessibility convention; nest the rest hierarchically.',
  5006811264108: '`<p>` is a paragraph — a block-level element. Browsers add default top/bottom margin; reset with CSS if you need flush layout.',
  5008926846974: '`<img src="..." alt="...">` — self-closing void element. `alt` is mandatory for accessibility, even if just an empty string for decorative images.',

  // ---------- HTML Links & Anchors ----------
  5005267237963: '`<a href="https://...">text</a>` is the external link. Add `target="_blank"` plus `rel="noopener noreferrer"` if you open a new tab.',
  5008500535255: '`href="#"` is the placeholder link — points to the top of the page. Use it only as a temporary stub during layout.',
  5002241760010: 'Wrap the `<img>` inside the `<a>`: `<a href="..."><img src="..." alt="..."></a>`. Inline element nests inside the anchor.',
  5003192504322: '`<a>` is inline, `<p>` is block. The anchor sits inside the paragraph, with the link text as the anchor content.',
  5005184339364: '`href="#section-id"` jumps to the element with `id="section-id"` on the same page. The hash is the same-page selector.',

  // ---------- HTML Lists ----------
  5002484710566: '`<ul>` is unordered (bullets); each item is `<li>`. Order does not matter semantically — use for sets, not sequences.',
  5003549189268: '`<ol>` is ordered (numbered); same `<li>` children. Use when sequence matters: steps, rankings, instructions.',

  // ---------- HTML Forms & Inputs ----------
  5003418743578: '`<form action="..." method="...">` wraps the input fields. `method="post"` for state-changing submissions; `get` for queries.',
  5008521219831: '`<input type="text">` is the default single-line text field. Self-closing void element — no closing tag.',
  5002379892647: '`placeholder` is a hint shown when the field is empty. It is not a label — use `<label>` for accessibility.',
  5001559923711: 'The placeholder string sits in the `placeholder` attribute. It disappears as soon as the user types.',
  5002005227018: 'Radio buttons in the same group share a `name` — that is what makes them mutually exclusive. Different names = independent buttons.',
  5004874510979: 'Checkboxes are `<input type="checkbox">`. Unlike radios, multiple in the same group can be selected. Each needs a unique value.',
  5008222186092: 'The `value` attribute is what gets submitted with the form when the option is selected. The visible label is separate from the value.',
  5005555580584: 'Add the `checked` attribute (no value needed) to pre-select a radio or checkbox. Boolean HTML attributes are present-or-absent.',
  5004993542841: 'Add the `required` attribute to block form submission until the field has a value. Browser handles the validation UI.',
  5002315824719: '`<button type="submit">` or `<input type="submit">` triggers the form\'s action. Inside a `<form>`, `<button>` defaults to submit.',
}

// -----------------------------------------------------------------------------
// FCC_CORRECT_SHORTENED — questions where the correct answer was substantially
// longer than the longest distractor (≥1.8x ratio and ≥20-char gap). Trimmed
// payload is reattached to the lesson via `lessonAddendum`.
// -----------------------------------------------------------------------------

export const FCC_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  5008494133960: {
    newCorrect: 'const myStr = \'<a href="..." target="_blank">Link</a>\';',
    lessonAddendum: 'The full anchor in the freeCodeCamp exercise uses `href="http://www.example.com"`. Single quotes outside let the double quotes inside the HTML attributes stand without escaping.',
  },
  5007123387752: {
    newCorrect: 'const myStr = "I am a \\"double quoted\\" string.";',
    lessonAddendum: 'The full freeCodeCamp answer reads `"I am a \\"double quoted\\" string inside \\"double quotes\\"."` — every literal double quote inside a double-quoted string needs a backslash escape.',
  },
  5001381101388: {
    newCorrect: 'const myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];',
    lessonAddendum: 'Style note: the freeCodeCamp original uses spaces after commas for readability — `[[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]`. Both forms are valid; the engine accepts either. The fourth sub-array is itself nested: its first element is the inner array `[10, 11, 12]`, so reaching `12` chains three brackets: `myArray[3][0][2]`.',
  },
  5002318662325: {
    newCorrect: '<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet...</p>',
    lessonAddendum: 'The full freeCodeCamp result keeps `<h2>CatPhotoApp</h2>` and the `<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>` paragraph — every other element (the `<h1>`, the second `<p>`, the comment block) has been removed to clear the small viewport.',
  },
}
