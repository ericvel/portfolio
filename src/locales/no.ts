export default {
  nav: {
    projects: "Prosjekter",
    talks: "Foredrag",
    contact: "Ta kontakt",
    projectsMenu: "Prosjektmeny",
    language: "Språk",
  },
  hero: {
    eyebrow: "Frilans frontendspesialist",
    title: "Frontend som tåler virkeligheten.",
    lede:
      "Fem års erfaring med React, Vue og TypeScript. Testing og universell utforming er en " +
      "selvfølge. Jeg jobber alene eller i team.",
    proofProductionLabel: "I produksjon hos",
    proofProduction: "ASKO · Røde Kors",
    proofExpertiseLabel: "Foredrag om webplattformen",
    proofExpertise: "NDC London 2026 · Framsia",
    contact: "Send meg en e-post om et oppdrag",
    copyEmail: "Kopier {email}",
    copyRetryLabel: "Prøv å kopiere e-postadressen på nytt",
    copySuccess: "E-postadressen er kopiert.",
    copyFailure: "Kopieringen mislyktes. Marker adressen og kopier den manuelt.",
  },
  meta: {
    title: "Eric Veliyulin {separator} Frontendspesialist",
    titleProject: "Eric Veliyulin {separator} {project}",
    description:
      "Jeg jobber som frilans frontendspesialist med React, Vue og TypeScript. Testdekning og " +
      "universell utforming er en selvfølge. Jeg har levert løsninger for ASKO og Røde Kors, og " +
      "bygget Rewindify.",
  },
  a11y: {
    skip: "Hopp til hovedinnhold",
  },
  work: {
    heading: "Utvalgte prosjekter",
    readMore: "Se prosjektet",
    techLabel: "Teknologier",
    periodLabel: "Periode",
  },
  talks: {
    heading: "Foredrag",
    lede:
      "Jeg holder foredrag på konferanser, meetuper og internt om nye funksjoner i nettleseren og " +
      "hvordan de påvirker måten vi bygger grensesnitt på.",
    watch: "Se opptaket",
    ongoing: "Løpende",
    onRequest: "Etter avtale",
    ndc: {
      desc:
        "Popover API, dialog-elementet og nye layout-primitiver gjør nå mye av jobben som før " +
        "krevde en haug med biblioteker. Foredraget handler om hva du kan fjerne fra prosjektet i " +
        "dag, og hva du fortsatt trenger hjelp til.",
      meta: "60 min · engelsk",
      photoAlt: "Eric Veliyulin på scenen under NDC London 2026.",
      photoCaption: "Fra scenen, NDC London 2026",
    },
    framsia: {
      desc:
        "Jeg viser hvordan du bygger nedtrekksmenyer direkte på webplattformen, med " +
        "stilbarhet og universell utforming i behold.",
    },
    inhouse: {
      title: "Interne fagdelinger",
      desc:
        "Jeg holder jevnlige fagdelinger for utviklerteam om universell utforming, testing og nye " +
        "nettleser-API-er.",
    },
  },
  cta: {
    title: "Trenger du en frontendspesialist?",
    lede: "Send meg en e-post, så tar vi det derfra.",
  },
  project: {
    back: "Tilbake",
    /** Full destination for screen readers — the visible "Tilbake" alone names no target. */
    backLabel: "Tilbake til forsiden",
    tech: "Teknologier",
    role: "Rolle",
    repository: "GitHub",
    next: "Neste prosjekt",
    /** Landmark name for the pager at the foot of a project page. */
    pagerNav: "Prosjektnavigasjon",
  },
  projects: {
    asko: {
      blurb:
        "Netthandel og intern vareadministrasjon for titusenvis av varer, med tastaturnavigasjon " +
        "og forutsigbare tilstander.",
      role: "Lead frontendutvikler",
      /** Short caption for the ledger's dedicated lead-row screenshot. */
      leadCaption: "Forside med søk blant over 30 000 varer",
      sectionTitles: ["ASKO Servering", "Fiks"],
      body: [
        "ASKO Servering er netthandelen for storhusholdning. Den dekker varesøk, handlelister, " +
          "bestilling og oppfølging av leveranser. Jeg har jobbet med alle deler av løsningen, " +
          "blant annet søk og filtrering, bestillingsdetaljer og statussporing. Frontenden bruker " +
          "Vue og TypeScript, mens TanStack Query håndterer datahenting og mellomlagring.",
        "Fiks er administrasjonsløsningen bak ASKO Servering. Den håndterer varebøker med " +
          "titusenvis av varer, abonnementer og innstillinger for hver kjede og kunde. Store " +
          "tabeller må være raske, støtte tastaturnavigasjon og oppføre seg forutsigbart. Vitest " +
          "dekker logikken, mens Playwright kjører de kritiske flytene i pipeline.",
      ],
      captions: [
        "Handlekurven i ASKO Servering med vareforslag, ordrelinjer og leveringsdetaljer.",
        "Forsiden i Fiks med oversikt over kjeder og kunder.",
        "Vedlikehold av varebok i Fiks med søk, filtre, import, eksport og varestatus.",
      ],
    },
    rodekors: {
      blurb:
        "En løsning der frivillige kan planlegge og publisere aktiviteter og håndtere påmeldinger. " +
        "Universell utforming var et krav hele veien.",
      role: "Lead frontendutvikler",
      body: [
        "Mitt Røde Kors samler aktivitetene til de frivillige på ett sted. De kan opprette og " +
          "publisere arrangementer, håndtere påmeldinger og følge opp nye frivillige. Tusenvis av " +
          "frivillige bruker løsningen, og den digitale erfaringen deres varierer mye. Derfor " +
          "måtte den være enkel å forstå første gang og rask å bruke også gang nummer hundre.",
        "Løsningen er bygget i React og Next.js, med Tailwind CSS og et delt komponentbibliotek. " +
          "Universell utforming var et krav gjennom hele prosjektet. Hele flyten fungerer med " +
          "tastatur og skjermleser.",
      ],
      captions: ["Oversikt over kommende arrangementer med filtrering og påmeldingsstatus."],
    },
    rewindify: {
      blurb:
        "En musikkspiller for øving med presis spoling og A/B-looping av valgfrie partier i " +
        "Spotify.",
      role: "Eneutvikler",
      body: [
        "Jeg bygget Rewindify for å øve på instrument til musikk fra Spotify. I stedet for å sikte " +
          "på en fremdriftslinje kan jeg spole tilbake eller fremover med et fast antall sekunder. " +
          "Når jeg har funnet partiet jeg jobber med, setter jeg A- og B-punkter på tidslinjen og " +
          "lar det spille i loop.",
        "Appen er bygget i Vue, TypeScript og Pinia rundt Spotify Web Playback SDK. Hele " +
          "avspillingen kan styres fra tastaturet. Loop-punkter kan finjusteres, lagres per låt og " +
          "deles i URL-en. Egne desktop- og mobilvisninger gjør de samme presise kontrollene " +
          "brukbare på begge skjermstørrelser.",
      ],
      captions: [
        "Desktopvisning med bølgeform for hele låten, presise looppunkter og synlige tastatursnarveier.",
        "Mobilvisning med de samme loopkontrollene tilpasset berøring.",
      ],
    },
  },
};
