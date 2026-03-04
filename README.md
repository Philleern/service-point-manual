# PostNord Service Point / Mypack Collect-håndbok

Dette repoet inneholder en docs-as-code-manual bygget med Docusaurus. Siden er satt opp som en ren dokumentasjonsside med norsk innhold, task-basert sidebar og lokalt søk.

## Kjør lokalt

```bash
npm install
npm start
```

## Bygg produksjonsversjon

```bash
npm run build
```

## Legg til nye sider

1. Opprett en ny `.mdx`- eller `.md`-fil i `docs/`.
2. Legg siden inn i `sidebars.ts`.
3. Bruk samme struktur som i eksisterende prosedyresider:
   `Når brukes dette?`, `Mål`, nummererte steg, `Kontrollpunkt` og `Vanlige feil`.

## Legg til screenshots

1. Lagre bildet i `static/img/pda/`.
2. Bruk navnekonvensjonen `<side>-<steg>-kortnavn.png`.
3. Bytt ut TODO-plassholderen i riktig docs-side med faktisk screenshot.
4. Følg `docs/screenshots-guide.mdx` for detaljer.

## Prosjektstruktur

- `docs/` inneholder selve håndboken
- `src/components/ProcedureStep/` inneholder stegmalen for prosedyresider
- `static/img/pda/` inneholder PDA-screenshots
- `docusaurus.config.ts` styrer docs-first-oppsett, navbar og søk

## Deploy

Ingen GitHub Pages-workflow er lagt inn ennå fordi repo-eier og mål-URL ikke er bekreftet. Når det er avklart, kan Docusaurus deployes med standard GitHub Pages-oppsett eller annen statisk hosting.
