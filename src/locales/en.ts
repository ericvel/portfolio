export default {
  nav: {
    projects: "Projects",
    talks: "Talks",
    contact: "Get in touch",
    projectsMenu: "Project menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Freelance frontend specialist",
    title: "Frontend built for the real world.",
    lede:
      "I've worked with React, Vue and TypeScript for five years. Testing and accessibility come " +
      "as standard. I work alone or join a team.",
    proofProductionLabel: "Production work",
    proofProduction: "ASKO · Røde Kors",
    proofExpertiseLabel: "Browser talks",
    proofExpertise: "NDC London 2026 · Framsia",
    contact: "Email me about a project",
    copyEmail: "Copy {email}",
    copyRetryLabel: "Try copying the email address again",
    copySuccess: "Email address copied.",
    copyFailure: "Copying failed. Select the address instead.",
  },
  meta: {
    title: "Eric Veliyulin {separator} Frontend specialist",
    titleProject: "Eric Veliyulin {separator} {project}",
    description:
      "I'm a freelance frontend specialist working with React, Vue and TypeScript. Testing and " +
      "accessibility come as standard. I've delivered work for ASKO and Røde Kors, and built " +
      "Rewindify.",
  },
  a11y: {
    skip: "Skip to main content",
  },
  work: {
    heading: "Selected projects",
    readMore: "View project",
    techLabel: "Technologies",
    periodLabel: "Period",
  },
  talks: {
    heading: "Talks",
    lede:
      "I speak at conferences, meetups and in-house sessions about new browser features and how " +
      "they change the way we build interfaces.",
    watch: "Watch the recording",
    ongoing: "Ongoing",
    onRequest: "On request",
    ndc: {
      desc:
        "The Popover API, the dialog element and new layout primitives can now do work that used " +
        "to require a pile of libraries. This talk covers what you can remove from a project " +
        "today and where you'll still need help.",
      meta: "60 min · English",
      photoAlt: "Eric Veliyulin on stage at NDC London 2026.",
      photoCaption: "On stage, NDC London 2026",
    },
    framsia: {
      desc:
        "I show how to build dropdowns with the web platform while keeping control over styling and " +
        "accessibility.",
    },
    inhouse: {
      title: "In-house sessions",
      desc:
        "I run regular sessions for development teams on accessibility, testing and new browser " +
        "APIs.",
    },
  },
  cta: {
    title: "Need a frontend specialist?",
    lede: "Send me an email and we'll take it from there.",
  },
  project: {
    back: "Back",
    /** Full destination for screen readers — the visible "Back" alone names no target. */
    backLabel: "Back to home page",
    tech: "Technologies",
    role: "Role",
    repository: "GitHub",
    next: "Next project",
    /** Landmark name for the pager at the foot of a project page. */
    pagerNav: "Project navigation",
  },
  projects: {
    asko: {
      blurb:
        "E-commerce and internal catalogue management for tens of thousands of items, with " +
        "keyboard navigation and predictable states.",
      role: "Lead frontend developer",
      /** Short caption for the ledger's dedicated lead-row screenshot. */
      leadCaption: "Home page with search across more than 30,000 products",
      sectionTitles: ["ASKO Servering", "Fiks"],
      body: [
        "ASKO Servering is the e-commerce platform for professional catering. It covers product " +
          "search, shopping lists, ordering and delivery follow-up. I've worked on all parts of " +
          "the product, including search and filtering, order details and status tracking. The " +
          "frontend uses Vue and TypeScript, while TanStack Query handles data fetching and " +
          "caching.",
        "Fiks is the administration tool behind ASKO Servering. It handles product catalogues " +
          "with tens of thousands of items, subscriptions and settings for each chain and " +
          "customer. Large tables have to stay fast, support keyboard navigation and behave " +
          "predictably. Vitest covers the logic, while Playwright runs the critical flows in the " +
          "pipeline.",
      ],
      captions: [
        "ASKO Servering checkout with suggested products, order lines and delivery details.",
        "Fiks home page with an overview of chains and customers.",
        "Fiks catalogue maintenance with search, filters, import, export and item status.",
      ],
    },
    rodekors: {
      blurb:
        "A tool for volunteers to plan and publish activities and manage sign-ups. Accessibility " +
        "was required throughout.",
      role: "Lead frontend developer",
      body: [
        "Mitt Røde Kors brings volunteer activities together in one place. Volunteers can create " +
          "and publish events, manage sign-ups and follow up with new volunteers. Thousands of " +
          "volunteers use Mitt Røde Kors, and their levels of digital experience vary widely. It " +
          "had to be easy to understand the first time and fast to use the hundredth time.",
        "It is built in React and Next.js, with Tailwind CSS and a shared component library. " +
          "Accessibility was a requirement throughout the project. The full flow works with a " +
          "keyboard and screen reader.",
      ],
      captions: ["Overview of upcoming events with filtering and sign-up status."],
    },
    rewindify: {
      blurb:
        "A music player for practice with precise stepping and A/B loops for any passage on " +
        "Spotify.",
      role: "Sole developer",
      body: [
        "I built Rewindify to practise an instrument with music from Spotify. Instead of aiming at " +
          "a progress bar, I can step backwards or forwards by a fixed number of seconds. Once I " +
          "find the passage I am working on, I set A and B points on the timeline and let it play " +
          "in a loop.",
        "The app is built with Vue, TypeScript and Pinia around the Spotify Web Playback SDK. The " +
          "entire player can be controlled from the keyboard. Loop points can be nudged, saved per " +
          "track and shared in the URL. Separate desktop and mobile views keep the same precise " +
          "controls usable at both screen sizes.",
      ],
      captions: [
        "Desktop view with a full-track waveform, precise loop points and visible keyboard shortcuts.",
        "Mobile view with the same loop controls adapted for touch.",
      ],
    },
  },
};
