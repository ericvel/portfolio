export default {
  nav: {
    projects: "Projects",
    talks: "Talks",
    contact: "Get in touch",
    projectsMenu: "Project menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Frontend specialist · freelance",
    title: "Frontend is my trade.",
    lede: "Five years of React, Vue and TypeScript. Test coverage and accessibility as standard.",
    proofProductionLabel: "Production",
    proofProduction: "ASKO · Røde Kors",
    proofExpertiseLabel: "Expertise",
    proofExpertise: "NDC London 2026",
    contact: "Get in touch about work",
    copyEmail: "Copy {email}",
  },
  meta: {
    title: "Eric Veliyulin {separator} Frontend dev",
    titleProject: "Eric Veliyulin {separator} {project}",
    description:
      "Freelance frontend specialist. React, Vue and TypeScript, with test coverage and " +
      "accessibility as standard. Projects for ASKO, Røde Kors and Habiit.",
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
      "I speak about what's new in the browser, and what it means for the way we build " +
      "interfaces — at conferences, meetups and in-house.",
    watch: "Watch the recording",
    ongoing: "Ongoing",
    onRequest: "On request",
    ndc: {
      desc:
        "The Popover API, the dialog element and the new layout primitives have taken over the " +
        "job of a pile of libraries. What you can delete from your project today — and what you " +
        "still need help with.",
      meta: "60 min · English",
      photoAlt: "Eric Veliyulin on stage at NDC London 2026.",
      photoCaption: "On stage, NDC London 2026",
    },
    framsia: {
      desc:
        "Building dropdowns straight on the platform — keeping both styling control and " +
        "accessibility.",
    },
    inhouse: {
      title: "In-house sessions",
      desc: "Regular sessions for development teams on accessibility, testing and new browser APIs.",
    },
  },
  cta: {
    title: "Get in touch about work",
    lede:
      "I take freelance work as a frontend specialist, solo or embedded in a team. Send an " +
      "email and we'll take it from there.",
  },
  project: {
    back: "Back",
    /** Full destination for screen readers — the visible "Back" alone names no target. */
    backLabel: "Back to home page",
    tech: "Technologies",
    role: "Role",
    next: "Next project",
    /** Landmark name for the pager at the foot of a project page. */
    pagerNav: "Project navigation",
  },
  projects: {
    asko: {
      blurb:
        "Product catalogues with tens of thousands of items, keyboard navigation and predictable " +
        "states — across the storefront and the Fiks administration tool.",
      role: "Lead frontend developer",
      /** Short caption for the ledger's lead-row screenshot; the full one is in `captions`. */
      leadCaption: "Order details with delivery status",
      body: [
        "ASKO Servering is the e-commerce platform for professional catering: product search, " +
          "shopping lists, ordering and delivery follow-up. I've worked across the whole surface " +
          "— from search and filtering to order details and status tracking — in Vue and " +
          "TypeScript, with TanStack Query as the backbone for data fetching and caching.",
        "Fiks is the administration tool behind it: maintaining product catalogues with tens of " +
          "thousands of items, subscriptions and settings per chain and customer. Large tables " +
          "put real demands on performance, keyboard navigation and predictable states. Vitest " +
          "covers the logic, Playwright runs the critical flows in the pipeline.",
      ],
      captions: [
        "ASKO Servering — order details with delivery status and order summary.",
        "ASKO Servering Fiks — catalogue maintenance with search, filters and status editing.",
      ],
    },
    rodekors: {
      blurb:
        "Activities for volunteers — planning, publishing and sign-ups. Accessibility was a " +
        "requirement, not an add-on.",
      role: "Lead frontend developer",
      body: [
        "Mitt Røde Kors gathers volunteer activity in one place: creating and publishing events, " +
          "handling sign-ups, following up new volunteers. The users are thousands of volunteers " +
          "with wildly different digital experience, so it had to be easy to understand the first " +
          "time and fast to use the hundredth time.",
        "Built in React and Next.js with Tailwind CSS on top of a shared component library. " +
          "Accessibility was a requirement, not an add-on — the entire flow works with keyboard " +
          "and screen reader.",
      ],
      captions: ["Overview of upcoming events with filtering and sign-up status."],
    },
    habiit: {
      blurb:
        "A digital tool and mobile game that helps children with routines, school schedules and " +
        "reflecting on their feelings.",
      role: "iOS developer",
      body: [
        "Habiit turns everyday routines into quests. Kids get their weekly plan and school " +
          "timetable in a form they'll actually open, collect rewards along the way, and get " +
          "simple ways to put words to how they're doing.",
        "The app is written in Swift for iOS with Firebase as the backend for data, " +
          "authentication and syncing between children and guardians. The game mechanics use maps " +
          "and location, so much of the work went into keeping it playful without compromising on " +
          "privacy or battery.",
      ],
      captions: ["Habiit — avatar, map-based quests and the week's timetable."],
    },
  },
};
