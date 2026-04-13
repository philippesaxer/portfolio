# Dokumentation des KI-Einsatzes

In diesem Projekt wurde Künstliche Intelligenz (KI) aktiv genutzt, um den Entwicklungsprozess zu beschleunigen, neue Technologien zu erlernen und die Code-Qualität zu steigern. Dabei lag der Fokus darauf, KI nicht als "Auto-Pilot" zu betrachten, sondern als "Pair-Programming-Partner".

## 1. Zielgerichteter Einsatz von KI

### Für effiziente Entwicklung
- **Boilerplate-Code Generierung:** Grundstrukturen für HTML-Seiten und CSS-Reset-Dateien wurden zu Beginn durch KI generiert. Dies ersparte repetitive Tipparbeit.
- **Fehlersuche (Debugging):** Bei komplexen Problemen (z.B. Z-Index Konflikte beim Glassmorphismus oder fehlerhafte Ausrichtungen in CSS Grid) wurde die Problembeschreibung an die KI übergeben, um Lösungsansätze zu erhalten.
- **Refactoring:** Spaghetticode in JavaScript (z.B. für die Scroll-Animationen oder Filterfunktionen) wurde an die KI übergeben mit der Bitte: "Mache diesen Code modularer und effizienter".

### Zur Weiterbildung
- **Konzept-Erklärungen:** Anstatt fertige Snippets direkt zu kopieren, habe ich Prompts genutzt wie: "Erkläre mir, wie CSS Grid `minmax()` funktioniert und zeige mir ein simples Beispiel für ein Responsive Layout."
- **Alternative Lösungswege:** Nach der Fertigstellung eines Features habe ich die KI oft gefragt: "Gäbe es einen moderneren Weg, dies in Vanilla JS umzusetzen, vielleicht mit der neuen Intersection Observer API?" So habe ich Best Practices für modernes Web Development gelernt.

---

## 2. Praktische Anwendungsfälle

### Layout
KI half massgeblich bei der Erstellung komplexer, responsiver Layouts:
- Prompt: "Erstelle ein CSS Grid Layout für Projektkarten. Auf Desktop 3 Spalten, Tablet 2 Spalten, Mobile 1 Spalte."
- Die KI lieferte den CSS Code mit Media Queries, den ich anschliessend an mein Design (`var(--sp-md)`, etc.) anpasste.

### Codevorschläge
Besonders bei der JavaScript Logik:
- Prompt: "Schreibe eine JS-Funktion, die auf URL-Parameter hört und dementsprechend CSS-Klassen für Filter-Buttons hinzufügt, um Projekte ohne Seitenreload zu sortieren."
- So entstand die Grundlage für das URL-basierte Kategoriesystem in `projekte.html`.

### UI-Optimierungen
- Prompt: "Ich habe hier diesen CSS Code für Buttons. Wie kann ich ihn 'Premium' aussehen lassen, ähnlich wie bei Apple? Welche Hover-Effekte und Schatten empfiehlst du?"
- Das Ergebnis waren die soften Schatten (`box-shadow`), Pill-Shapes und Farbverläufe, die dem Portfolio nun dieses hochwertige Feeling verleihen.

---

## 3. Vergleich der KI-Tools: Gemini vs. Claude

Während der Entwicklung wurden zwei grosse KI-Modelle getestet und verglichen: **Google Gemini** und **Anthropic Claude**. 

Die Bewertung basiert auf drei selbst definierten Kriterien:

### Kriterium 1: Layout-Fähigkeiten (HTML/CSS & Responsiveness)
- **Claude:** Hervorragend. Claude versteht komplexe Layout-Anforderungen blind und schreibt sehr sauberes, nachvollziehbares CSS ohne überflüssige Hacks. Claude denkt proaktiv "Mobile First".
- **Gemini:** Sehr gut. Gemini generiert Layouts extrem schnell und bietet oft spannende, unkonventionelle Design-Vorschläge (wie z.B. komplexe Box-Shadow Animationen). Manchmal neigte Gemini aber dazu, leicht veraltete Flexbox-Workarounds statt Grid zu nutzen.
- **Gewinner:** Claude (für pure Struktur/Sauberkeit).

### Kriterium 2: Codevorschläge und Logik (JavaScript)
- **Claude:** Produziert sehr defensiven, robusten JavaScript-Code mit Try/Catch Blöcken und Error-Handling out-of-the-box. Die Erklärungen *warum* der Code so strukturiert ist, sind exzellent.
- **Gemini:** Produziert genial kompakten Code. Oft löst Gemini komplexe Arrays- oder Filteraufgaben in einem brillanten Einzeiler (ES6+ Syntax). Erklärt den Code sehr verständlich und Schritt-für-Schritt.
- **Gewinner:** Unentschieden. Claude für Robustheit, Gemini für clevere/kurze Problemlösungen.

### Kriterium 3: UI-Optimierung & Design-Verständnis (Aesthetics)
- **Claude:** Hat ein sehr nüchternes, zugängliches Design-Verständnis. Neigt dazu, hohe Kontraste und Accessibility-Richtlinien in den Vordergrund zu stellen. 
- **Gemini:** Ausserordentlich stark, wenn es um "Premium Feeling" oder "Wow-Effekte" geht. Als ich nach "Apple-Style Glassmorphism" fragte, lieferte Gemini genaue Hex-Werte, passendes Backdrop-Filter-CSS und SVG-Hintergrund-Hacks.
- **Gewinner:** Gemini.

### Fazit
Für tiefgründige Logik und saubere, robuste Architektur-Probleme ist **Claude** oft der verlässlichere Partner. Wenn es jedoch um die UI-Ästhetik, modernes CSS-Styling, Animationen und das gewisse "Etwas" geht, liefert **Gemini** die kreativeren und visuell ansprechenderen Ergebnisse. Beide Tools kombiniert sind ein unschlagbares Team.
