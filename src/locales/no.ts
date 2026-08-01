export default {
  nav: {
    projects: "Prosjekter",
    talks: "Foredrag",
    contact: "Ta kontakt",
    projectsMenu: "Prosjektmeny",
    language: "Språk",
  },
  hero: {
    eyebrow: "Frontendspesialist · frilans",
    title: "Eric Veliyulin. Jeg bygger grensesnitt.",
    lede: "Fem år med React, Vue og TypeScript. Testdekning og tilgjengelighet som standard.",
  },
  work: {
    heading: "Utvalgte prosjekter",
    prev: "Forrige prosjekt",
    next: "Neste prosjekt",
    readMore: "Les mer →",
  },
  talks: {
    heading: "Foredrag",
    lede:
      "Jeg snakker om det som er nytt i nettleseren, og hva det betyr for hvordan vi bygger " +
      "grensesnitt — på konferanse, meetup og internt.",
    watch: "Se opptaket ↗",
    ongoing: "Løpende",
    onRequest: "Etter avtale",
    ndc: {
      desc:
        "Popover API, dialog-elementet og de nye layout-primitivene har overtatt jobben til en " +
        "haug med biblioteker. Hva du kan slette fra prosjektet ditt i dag — og hva du fortsatt " +
        "trenger hjelp til.",
      points: [
        "Popover API og top-layer",
        "Dialog og fokushåndtering",
        "Anchor positioning uten bibliotek",
      ],
      meta: "60 min · engelsk",
    },
    framsia: {
      desc: "Å bygge nedtrekksmenyer rett på plattformen — med stilbarhet og tilgjengelighet i behold.",
    },
    inhouse: {
      title: "Interne fagdeler",
      desc: "Faste innlegg for utviklerteam om tilgjengelighet, testing og nye nettleser-API-er.",
    },
  },
  cta: {
    title: "Ta kontakt om oppdrag",
    lede:
      "Jeg tar frilansoppdrag som frontendspesialist, alene eller i team. Send en e-post, så " +
      "svarer jeg samme uke.",
  },
  project: {
    back: "← Alle prosjekter",
    tech: "Teknologi",
    role: "Rolle",
    ctaTitle: "Trenger du noe liknende bygget?",
    ctaButton: "Ta kontakt →",
  },
  projects: {
    asko: {
      blurb:
        "Bidrag på tvers av ASKO Serverings nettsted og den tilknyttede administrasjonsløsningen " +
        "ASKO Servering Fiks.",
      role: "Frontendutvikler i produktteam",
      body: [
        "ASKO Servering er netthandelen for storhusholdning: varesøk, handleliste, bestillingsflyt " +
          "og oppfølging av leveranser. Jeg har jobbet i hele bredden av flaten — fra søk og " +
          "filtrering til bestillingsdetaljer og statussporing — med Vue og TypeScript, og " +
          "TanStack Query som ryggrad for datahenting og cache.",
        "Fiks er administrasjonsløsningen bak: vedlikehold av varebøker med titusenvis av varer, " +
          "abonnementer og innstillinger per kjede og kunde. Store tabeller stiller krav til " +
          "ytelse, tastaturnavigasjon og forutsigbare tilstander. Vitest dekker logikken, " +
          "Playwright kjører de kritiske flytene i pipeline.",
      ],
      captions: [
        "ASKO Servering — bestillingsdetaljer med leveringsstatus og ordresammendrag.",
        "ASKO Servering Fiks — vedlikehold av varebok med søk, filtre og statusredigering.",
      ],
    },
    rodekors: {
      blurb: "En tjeneste der frivillige kan planlegge, publisere og melde seg på aktiviteter.",
      role: "Frontendutvikler",
      body: [
        "Mitt Røde Kors samler aktivitetene til de frivillige på ett sted: opprette og publisere " +
          "arrangementer, håndtere påmeldinger, følge opp nye frivillige. Brukerne er tusenvis av " +
          "frivillige med svært ulik digital erfaring, så løsningen måtte være enkel å forstå " +
          "første gang og rask å bruke hundrede gang.",
        "Bygget i React og Next.js med Tailwind CSS på et delt komponentbibliotek. Universell " +
          "utforming var et krav, ikke et tillegg — hele flyten fungerer med tastatur og " +
          "skjermleser.",
      ],
      captions: ["Oversikt over kommende arrangementer med filtrering og påmeldingsstatus."],
    },
    habiit: {
      blurb:
        "Et digitalt verktøy og mobilspill som hjelper barn med rutiner, skoleoversikt og " +
        "refleksjon rundt følelser.",
      role: "iOS-utvikler",
      body: [
        "Habiit gjør hverdagsrutiner til oppdrag. Barna får ukeplan og timeplan i en form de " +
          "faktisk gidder å åpne, samler belønninger underveis, og får enkle måter å sette ord på " +
          "hvordan de har det.",
        "Appen er skrevet i Swift for iOS med Firebase som backend for data, autentisering og " +
          "synkronisering mellom barn og foresatte. Spillmekanikken bruker kart og posisjon, så " +
          "mye av arbeidet lå i å holde det lekent uten å gå på akkord med personvern og batteri.",
      ],
      captions: ["Habiit — avatar, kartbaserte oppdrag og ukens timeplan."],
    },
  },
};
