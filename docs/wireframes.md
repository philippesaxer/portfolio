# Wireframes

Dieses Dokument beschreibt den schematischen Aufbau (Wireframes) der drei Hauptansichten der Portfolio-Website: Desktop, Tablet und Mobile. 
Die Seite folgt einem "Mobile First" bzw. responsiven Ansatz, wobei sich die Layout-Struktur an die jeweilige Bildschirmbreite anpasst.

---

## 1. Desktop (ab > 1024px)

Auf grossen Bildschirmen wird der Platz optimal genutzt. Elemente werden oft in Rastern (Grids) nebeneinander dargestellt.

### Startseite (Home)
```text
+---------------------------------------------------------+
| [Logo PS]               Home  Projekte  [♡]  [Kontakt]  |  <-- Sticky Header
+---------------------------------------------------------+
|                                                         |
|                     [ 3D Cube ]                         |
|                    Hero Section                         |  <-- Full Height
|               Portfolio Philippe Saxer                  |
|                                                         |
+---------------------------------------------------------+
| Alle Arbeiten                                           |
| Projekte                              [Horizontaler]    |
|                                       [   Scroll   ]    |
| [Card 1]  [Card 2]  [Card 3]  ...                       |
+---------------------------------------------------------+
| Themenbereiche                                          |
| Kategorien                                              |
|                                                         |
| [Games] [Backend] [IoT] [Frontend]                      |  <-- 4 Spalten
| [Prog ] [Database][Tools][Systems ]                     |
+---------------------------------------------------------+
| [Logo]   Navigation   Kontakt    Newsletter             |  <-- Footer (4 Spalten)
+---------------------------------------------------------+
```

### Kontaktseite (Kontakt)
```text
+---------------------------------------------------------+
| [Logo PS]               Home  Projekte  [♡]  [Kontakt]  |
+---------------------------------------------------------+
| Kontakt                                                 |
| Schreib mir                                             |
+---------------------------------------------------------+
|                                   |                     |
|  [ Name ]      [ E-Mail ]         |  [ Mail Icon ]      |
|                                   |  E-Mail Adresse     |
|  [ Betreff Dropdown ]             |                     |
|                                   |  [ Team Photo ]     |
|  [ Nachricht Textarea ]           |  Ausbildung (BMZ..) |
|                                   |                     |
|  [ Nachricht senden ]             |                     |
|                                   |                     |
+---------------------------------------------------------+
| Terminbuchung                                           |
| [ Cal.com Iframe / Fallback Button ]                    |
+---------------------------------------------------------+
```

---

## 2. Tablet (768px - 1024px)

Hier wird das Layout leicht komprimiert. Raster mit 3 oder 4 Spalten ändern sich häufig zu 2 Spalten.

### Startseite (Home)
```text
+---------------------------------------------------------+
| [Logo PS]             Home Projekte [♡] [Kontakt]       |
+---------------------------------------------------------+
|                                                         |
|                     [ 3D Cube ]                         |
|                                                         |
|               Portfolio Philippe Saxer                  |
|                                                         |
+---------------------------------------------------------+
| Projekte                              [Horizontaler]    |
| [Card 1]  [Card 2]  [Card 3]  ...                       |
+---------------------------------------------------------+
| Kategorien                                              |
| [Games]    [Backend]                                    |  <-- 2 Spalten
| [IoT  ]    [Frontend]                                   |
| ...        ...                                          |
+---------------------------------------------------------+
| [Logo]       |  Navigation                              |  <-- Footer (2 Spalten)
| Kontakt      |  Newsletter                              |
+---------------------------------------------------------+
```

---

## 3. Mobile (< 768px)

Elemente werden hauptsächlich untereinander angeordnet (Single-Column), um auf kleinen Bildschirmen lesbar und bedienbar zu bleiben.

### Startseite (Home)
```text
+-------------------------------------------+
| [Logo]                     [☰ Navigation] |
+-------------------------------------------+
|                                           |
|               [3D Cube]                   |
|                                           |
|             Philippe Saxer                |
|                                           |
|     [Alle Projekte] [Kontakt]             |
+-------------------------------------------+
| Projekte                                  |
| [Card 1] (voller Screen)                  |
| [Card 2]                                  |
| ...                                       |
+-------------------------------------------+
| Kategorien                                |
| [Games]                                   |  <-- Untereinander (od. max 2 klein)
| [Backend]                                 |
| [IoT]                                     |
| ...                                       |
+-------------------------------------------+
| [Logo & Info]                             |
| [Navigation]                              |
| [Kontakt]                                 |
| [Newsletter]                              |
+-------------------------------------------+
```

### Kontaktseite (Kontakt)
```text
+-------------------------------------------+
| [Logo]                     [☰ Navigation] |
+-------------------------------------------+
| Kontakt                                   |
| Schreib mir                               |
+-------------------------------------------+
| Kontaktformular                           |
| [Name]                                    |
| [E-Mail]                                  |
| [Betreff]                                 |
| [Nachricht]                               |
| [Senden]                                  |
+-------------------------------------------+
| Team Photo & Ausbildung                   |
+-------------------------------------------+
| Terminbuchung (Cal.com Embed)             |
+-------------------------------------------+
```
