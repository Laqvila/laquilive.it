# laquilive.it

Sito di presentazione di **L'AquiLive**, l'app gratuita con gli eventi, le notizie, gli sconti e i servizi di L'Aquila e dintorni.

Sito statico (HTML, CSS e un po' di JavaScript, nessuna compilazione), pubblicato con **GitHub Pages** sul dominio `laquilive.it` (registrato su Aruba).

## File

| File | A cosa serve |
|---|---|
| `index.html` | La pagina dell'app, con testi, stili e dati strutturati per Google |
| `js/laquilive.js` | Conteggio dei tocchi nello Studio, store giusto per il telefono, comparsa dei blocchi |
| `scarica/` | Passaggio diretto allo store per QR, locandine e post (`laquilive.it/scarica/?da=instagram`) |
| `assets/` | Icone, immagine di anteprima per i social, QR e schermate dell'app |
| `privacy/`, `termini/`, `eliminazione-account/`, `regolamento-sconti/`, `fonti/` | I documenti legali dell'app (dal 17/11/2026 qui, prima su mirkorocci.it) |
| `assets/fonts/` | Inter e Space Grotesk serviti dal sito, con licenza OFL: nessuna richiesta a Google |
| `404.html` | Pagina per i link sbagliati |
| `CNAME` | Il dominio del sito, non toccarlo |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Indicazioni per i motori di ricerca e per le AI |

## Conteggi

I tocchi finiscono nella stessa tabella della pagina `mirkorocci.it/laquilive` (funzione `registra_click_link` su Supabase), con canale `laquilive-it` per chi arriva dritto sul dominio e `laquilive-scarica` per il passaggio diretto senza `?da=`. Si conta solo sul dominio vero, le prove in locale non vengono registrate.

## Pubblicare una modifica

```
git add -A
git commit -m "Descrizione della modifica"
git push
```

GitHub Pages aggiorna il sito in 1 o 2 minuti.

## Documenti legali

Dal 17 novembre 2026 privacy, termini, regolamento degli sconti, fonti ed eliminazione dell'account stanno qui, in cartelle con `index.html`. Le vecchie pagine `mirkorocci.it/laquilive-*.html` rimandano a queste. I sorgenti di privacy, termini ed eliminazione sono anche nel repository dell'app (`AQ-Live99/docs`): quando ne cambi uno, aggiorna tutte e due le copie.

Restano su mirkorocci.it solo `laquilive/evento/` e i file `.well-known`, perché i link agli eventi aprono l'app attraverso quel dominio finché un nuovo binario non riconosce anche laquilive.it.
