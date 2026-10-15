# Cabinet de Psihologie - Iulia Spînu | Site Web Profesional

Site web complet, securizat și optimizat pentru Cabinetul Individual de Psihologie Iulia Spînu din Bârlad.

Construit cu design terapeutic cald, micro-interacțiuni fluide, secțiune de ghiduri audio cu plată securizată Stripe, protecție avansată a datelor (GDPR/CPR), pagină dedicată de eroare 404 și subsol aerisit pe 3 coloane.

---

## Arhitectură & Funcționalități

1. **Ghiduri Audio Terapeutice & Plăți Stripe (audio.html):**
   - 3 înregistrări audio structurate (~60 min fiecare la 49 RON): Somn Profund, Calmare Anxietate, Eliberare Tensiune Musculară.
   - Ofertă pachet complet 3 în 1 la 119 RON (economie de 28 RON).
   - Player audio demonstrativ interactiv pentru fiecare tehnică (mostră 45 secunde cu sinteză sonoră ambientală Web Audio).
   - Player privat dedicat post-achiziție (`asculta.html`) protejat împotriva indexării automate a motoarelor de căutare.

2. **Securitate & Protecție Anti-Vulnerabilități:**
   - **Antispam Honeypot:** Capcană invizibilă pentru roboții de spam în formularul de contact.
   - **Sanitizare Date & XSS Protection:** Filtrare riguroasă a datelor de căutare (`encodeURI`, `escapeHTML`) și validare regex a numerelor de telefon.
   - **Configurație Server (.htaccess):** Protecție `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, blocare listare directoare (`Options -Indexes`) și rutare eroare 404.
   - **Robots.txt & Sitemap.xml:** Excludere explicită a paginii private de ascultare (`Disallow: /asculta.html`) și mapare XML completă a paginilor publice pentru Google Search Console.

3. **Pagină Personalizată de Eroare (404.html):**
   - Design cald, reconfortant, care ghidează vizitatorul înapoi spre paginile cheie ale cabinetului sau spre apel direct.

4. **Confidențialitate & Deontologie Profesională (confidentialitate.html):**
   - Conformitate cu Legea 213/2004 (secret profesional), Codul Deontologic al Colegiului Psihologilor din România, GDPR (Regulamentul UE 2016/679) și OUG 34/2014 privind conținutul digital.

5. **Subsol (Footer) Aerisit pe 3 Coloane:**
   - Coloana 1: Identitate Cabinet & Acreditare Colegiul Psihologilor din România.
   - Coloana 2: Navigare rapidă verticală cu spațiere generoasă.
   - Coloana 3: Contact & Locație (buton evidențiat pentru apel direct la `0744 910 235`, adresă Policlinică și program).

---

## Structura Proiectului

```
Site Cabinet/
│
├── index.html                  # Acasă (Hero, Piloni, Servicii, Despre, Recenzii Google, FAQ)
├── servicii.html               # Tarife & Servicii detaliate (Copii, Adolescenți, Adulți)
├── audio.html                  # Ghiduri audio terapeutice cu mostre și linkuri de plată Stripe
├── asculta.html                # Player privat de ascultare pentru sesiunile deblocate
├── contact.html                # Contact cu status live, formular protejat, navigație GPS
├── 404.html                    # Pagină de eroare 404 terapeutică
├── confidentialitate.html      # Politică de confidențialitate, GDPR și termeni digitali
│
├── robots.txt                  # Directivă motoare de căutare (protejează asculta.html)
├── sitemap.xml                 # Harta site-ului pentru indexare Google SEO
├── .htaccess                   # Reguli securitate server, headers HTTP, rutare 404
│
├── css/
│   └── styles.css              # Stiluri CSS (paletă sage calmantă, clamp typography, responsive)
│
├── js/
│   └── main.js                 # Micro-interacțiuni, căutare securizată, player audio, status live
│
└── images/
    ├── hero-bg.jpg             # Imagine rezoluție înaltă cabinet
    ├── consiliere-copii.png    # Imagine card Consiliere Copii
    ├── consiliere-adolescenti.png # Imagine card Consiliere Adolescenți
    ├── consiliere-adulti.png   # Imagine card Consiliere Adulți
    └── simple-header-blended.png # Favicon
```
