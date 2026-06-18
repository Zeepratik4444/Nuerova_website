# Nuerova brand kit — "Strata"

Drop-in logo assets for the Nuerova website.

## Files
| File | Use |
|---|---|
| `Logo.tsx` | React component — `<NuerovaLogo />` and `<NuerovaMark />`. Copy to `src/components/`. |
| `nuerova-mark.svg` | The blue Strata mark, transparent bg. |
| `nuerova-mark-mono-white.svg` | White layered version for dark/footer use. |
| `favicon.svg` | Replace `public/favicon.svg`. |
| `apple-touch-icon.png` | 180×180, replace `public/apple-touch-icon.png`. |
| `favicon-32.png`, `favicon-48.png` | PNG fallbacks if you want them. |
| `og-icon-preview.png` | 1200×630 starter for `public/og-image.png` (add headline text as desired). |

## Colors
- Front plane / primary: `#1275E2` (your `--primary`)
- Mid plane: `#5A9BEA`
- Back plane: `#9CC2F4`

## Use in code
```tsx
import { NuerovaLogo, NuerovaMark } from "@/components/Logo";

// Header lockup (mark + wordmark)
<NuerovaLogo size={30} />

// Mark only (e.g. mobile, favicon-like spots)
<NuerovaMark size={28} />

// On a light background
<NuerovaLogo color="#181c22" />
```

## Navigation.tsx
Replace the text-only brand link:

```tsx
<Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
	<NuerovaLogo size={30} />
</Link>
```
(import `NuerovaLogo` at the top of the file).

## index.html / favicon
`public/favicon.svg` and `public/apple-touch-icon.png` are already referenced in your `index.html` — just replace the files.
