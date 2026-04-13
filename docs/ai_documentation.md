# Dokumentation des KI-Einsatzes

## Start mit KI
Als Allererstes habe ich mit Claude Code die Webseite erstellt. Claude Code ist sehr gut, verbraucht jedoch sehr schnell viele Tokens. Die Ergebnisse waren zwar sehr gut, jedoch konnte ich es wegen des hohen Tokenverbrauchs nicht lange benutzen.

Danach brauchte ich Antigravity, eine KI-IDE von Google. Da ich Gemini Pro habe, konnte ich diese ebenfalls verwenden. Auch damit liess sich die Webseite sehr gut programmieren. Allerdings merkte ich schnell, dass man bei den Prompts sehr genau sein muss, wenn man etwas Bestimmtes möchte.

Deshalb begann ich, nach konkreten Beispielen von anderen Leuten zu suchen und mir Inspiration für Dinge zu holen, die ich auf meiner Webseite umsetzen wollte.

### Inspiration & Quellen
- **Apple:** https://www.apple.com/
- **3D Cube Transforms:** https://3dtransforms.desandro.com/cube

---

## Vergleich der KI-Tools

| Kriterium | Claude Code | Antigravity |
| :--- | :--- | :--- |
| **Entwickler** | Anthropic | Google |
| **Art** | KI-Coding-Tool | KI-IDE (Entwicklungsumgebung mit KI) |
| **Programmierqualität**| Sehr gute Ergebnisse beim Programmieren | Ebenfalls sehr gute Programmierergebnisse |
| **Tokenverbrauch** | Verbraucht schnell viele Tokens | Kein starkes Tokenproblem bei Nutzung mit Gemini Pro |
| **Genauigkeit der Prompts** | Liefert automatisch gute Ergebnisse | Prompts müssen sehr genau formuliert sein |
| **Nutzung** | Gut für schnelle Code-Generierung | Gut für längeres Arbeiten an Projekten |
| **Integration** | Fokus auf KI-Codegenerierung | Vollständige IDE mit KI-Unterstützung |
| **Persönliche Erfahrung**| Sehr stark, aber wegen Tokens nur kurz nutzbar | Gut nutzbar, wenn man präzise Prompts schreibt |

---

## Hilfe beim Prompt-Schreiben
Als Hilfe beim Prompt schreiben habe ich bereits zuvor dieses Blatt zum perfekten Prompt angeschaut:

![Prompt Tipps](../images/prompt.png)

---

## Zielgerichteter Einsatz von KI im Detail

### Für effiziente Entwicklung
- **Boilerplate-Code Generierung:** Grundstrukturen für HTML-Seiten und CSS-Reset-Dateien wurden zu Beginn durch KI generiert. Dies ersparte repetitive Tipparbeit.
- **Fehlersuche (Debugging):** Bei komplexen Problemen (z.B. Z-Index Konflikte beim Glassmorphismus oder fehlerhafte Ausrichtungen in CSS Grid) wurde die Problembeschreibung an die KI übergeben, um Lösungsansätze zu erhalten.
- **Refactoring:** Spaghetticode in JavaScript (z.B. für die Scroll-Animationen oder Filterfunktionen) wurde an die KI übergeben mit der Bitte: "Mache diesen Code modularer und effizienter".

### Zur Weiterbildung
- **Konzept-Erklärungen:** Anstatt fertige Snippets direkt zu kopieren, habe ich Prompts genutzt wie: "Erkläre mir, wie CSS Grid `minmax()` funktioniert und zeige mir ein simples Beispiel für ein Responsive Layout."
- **Alternative Lösungswege:** Nach der Fertigstellung eines Features habe ich die KI oft gefragt: "Gäbe es einen moderneren Weg, dies in Vanilla JS umzusetzen, vielleicht mit der neuen Intersection Observer API?" So habe ich Best Practices für modernes Web Development gelernt.

### Praktische Anwendungsfälle

#### Layout
KI half massgeblich bei der Erstellung komplexer, responsiver Layouts:
- Prompt: "Erstelle ein CSS Grid Layout für Projektkarten. Auf Desktop 3 Spalten, Tablet 2 Spalten, Mobile 1 Spalte."
- Die KI lieferte den CSS Code mit Media Queries, den ich anschliessend an mein Design (`var(--sp-md)`, etc.) anpasste.

#### Codevorschläge
Besonders bei der JavaScript Logik:
- Prompt: "Schreibe eine JS-Funktion, die auf URL-Parameter hört und dementsprechend CSS-Klassen für Filter-Buttons hinzufügt, um Projekte ohne Seitenreload zu sortieren."
- So entstand die Grundlage für das URL-basierte Kategoriesystem in `projekte.html`.

#### UI-Optimierungen
- Prompt: "Ich habe hier diesen CSS Code für Buttons. Wie kann ich ihn 'Premium' aussehen lassen, ähnlich wie bei Apple? Welche Hover-Effekte und Schatten empfiehlst du?"
- Das Ergebnis waren die soften Schatten (`box-shadow`), Pill-Shapes und Farbverläufe, die dem Portfolio nun dieses hochwertige Feeling verleihen.
