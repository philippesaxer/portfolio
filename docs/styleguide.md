# Styleguide

Dieser Styleguide definiert die visuellen Grundlagen (Farben, Typografie und Formensprache) des Portfolios, um ein einheitliches, "Premium Dark Mode" Aussehen über alle Seiten hinweg zu gewährleisten.

## 1. Farben (Color Palette)

Das Design basiert auf einem tiefen Schwarz/Dunkelblau-Hintergrund mit leuchtenden, neongestützten Akzentfarben im Apple-Stil.

### Hintergrund & Oberflächen
- **Base Background:** `#000000` (Reines Schwarz für maximalen Kontrast auf OLED-Displays)
- **Surface / Cards:** `#0a0a0a` bis `#161617` (Leichtes Dunkelgrau zur Abhebung vom Hintergrund)
- **Borders & Lines:** `rgba(255, 255, 255, 0.06)` bis `0.18` (Subtile, transparente weisse Linien)

### Textfarben
- **Primary Text:** `#F5F5F7` (Sehr helles, weiches Grau/Weiss - besser lesbar als reines Weiss)
- **Secondary Text:** `#86868B` (Mittelgrau für Beschreibungen)
- **Muted Text:** `#48484A` (Für Metadaten und unwichtigere Elemente)

### Akzentfarben (Brand Colors)
- **Primary Accent (Cyan/Apple Blue):** `#0071E3` (Für Buttons, aktive Links, Highlights)
- **Secondary Accent:** `#FF9F0A` (Amber)

### Kategorie-spezifische Farben (Tags & Icons)
- **Games:** `#FF6961` (Rot)
- **Backend:** `#64D2FF` (Hellblau)
- **IoT:** `#30D158` (Grün)
- **Frontend:** `#FFD60A` (Gelb)
- **Programming:** `#BF5AF2` (Lila)
- **Database:** `#FF6482` (Pink)

---

## 2. Typografie (Typography)

Die Schrifthierarchie nutzt einen Mix aus moderner Serifen- und serifenloser Schrift für einen edlen Kontrast.

### Hero & Display Schrift
- **Font-Family:** `Playfair Display`, Georgia, serif
- **Einsatz:** Nur für sehr grosse, markante Überschriften (z.B. "Philippe Saxer" im Hero-Bereich).
- **Stil:** Fett (Weight 900), edel, Editorial-Look.

### Headings & Base Body
- **Font-Family:** System UI Fonts (wie `-apple-system`, `Inter`, `Segoe UI`)
- **Einsatz:** Standardtext, Fliesstext, kleinere Überschriften (H2, H3, H4) und Buttons.
- **Grössen:** 
  - H1: ca. 4.75rem (Skaliert responsiv)
  - H2: ca. 2.75rem
  - Body: 1rem (16px) bei Zeilenhöhe 1.65

### Monospace / Technische Details
- **Font-Family:** `Space Grotesk`, sans-serif
- **Einsatz:** Für technische Begriffe, Labels, Metadaten (Zahlen) und Code-Ansichten.

---

## 3. UI Elemente & Formensprache

### Form & Rundungen
- **Abgerundete Ecken (Border-Radius):** 
  - Cards & Container: `16px` bis `24px` (Abgerundet, freundlich)
  - Buttons (Pill-Shape): `98px` (Vollständig abgerundet)

### Glassmorphism & Transparenz
Viele Elemente nutzen den "Glassmorphism"-Effekt: Ein leicht transparenter Hintergrund gepaart mit Weichzeichner (`backdrop-filter: blur(12px)`), oft kombiniert mit subtilen animierten Leuchteffekten (Blobs) im Hintergrund.

### Animationen & Transitionen
- Weiche, natürliche Verzögerungen: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`
- Hover-Effekte involvieren meist eine leichte Hebung (`transform: translateY(-4px)`) und einen stärkeren Schatten (`box-shadow`), um Interaktivität zu signalisieren.
- **Apple-Style Scroll Reveal:** Elemente (wie Projektkarten) faden weich von unten ein, wenn man zu ihnen scrollt.
