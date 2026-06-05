// ============================================================================
//  EDIT THIS FILE to replace placeholder content with the real company details.
//  Everything on the website (text, services, projects, testimonials, contact)
//  is driven from here. No need to touch the design code.
// ============================================================================

export const company = {
  name: "Verve Digital",
  // Used for SEO (sitemap, canonical, Open Graph). Update to the real domain
  // once deployed (e.g. your Netlify URL or custom domain).
  url: "https://verve-digital.netlify.app",
  tagline: "Marketing that moves the needle.",
  description:
    "We're a full-service digital marketing agency helping brands grow through data-driven strategy, bold creative, and campaigns that actually convert.",
  email: "hello@vervedigital.com",
  phone: "+1 (555) 012-3456",
  address: "221 Market Street, Suite 400, San Francisco, CA",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  rating: { score: "4.9", count: "200+" },
};

// Client names shown in the scrolling logo marquee. Replace with real clients.
export const clients = [
  "Northwind",
  "Vertex",
  "Lumière",
  "Metro Fitness",
  "Atlas",
  "Greenfield",
  "Skyline",
  "Cobalt",
  "Harbor & Co.",
  "Brightwave",
];

export const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "4.2x", label: "Avg. ROI on ad spend" },
  { value: "12", label: "Industry awards" },
];

// Homepage "Statistics" section (numbers count up from 1 → target).
export const homeStats = [
  { value: "25+", label: "Happy Customers" },
  { value: "100%", label: "Work Quality" },
  { value: "25+", label: "Projects Completed" },
];

// Homepage "Business Growth Pipeline" — 5 connected stages.
// `visual` selects which mini business mock renders inside the card.
export type BusinessPlan = {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  visual: "roadmap" | "branding" | "social" | "growth" | "analytics";
};

export const businessPlans: BusinessPlan[] = [
  {
    title: "Strategy",
    tagline: "Plan the roadmap",
    description:
      "We map a data-driven roadmap that aligns every channel with your business goals.",
    icon: "🧭",
    visual: "roadmap",
  },
  {
    title: "Branding",
    tagline: "Build the identity",
    description:
      "A distinct identity — logo, palette, and voice — that makes you instantly recognizable.",
    icon: "🎨",
    visual: "branding",
  },
  {
    title: "Content",
    tagline: "Create & engage",
    description:
      "Scroll-stopping content and campaigns crafted to engage your audience on every platform.",
    icon: "🎬",
    visual: "social",
  },
  {
    title: "Growth",
    tagline: "Scale the results",
    description:
      "Performance campaigns and funnels engineered to scale traffic, leads, and revenue.",
    icon: "📈",
    visual: "growth",
  },
  {
    title: "Analytics",
    tagline: "Measure & optimize",
    description:
      "Live dashboards and reporting that turn data into the next round of smart decisions.",
    icon: "📊",
    visual: "analytics",
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string; // emoji used as a lightweight icon placeholder
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    short: "Rank higher, get found, win the click.",
    description:
      "We make sure the right customers find you first. Technical audits, keyword strategy, content, and link building that compounds over time.",
    features: [
      "Technical SEO audits",
      "Keyword & content strategy",
      "On-page optimization",
      "Authority link building",
    ],
    icon: "🔍",
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    short: "Build a community that buys.",
    description:
      "From scroll-stopping content to community management, we turn followers into customers across every platform that matters to your audience.",
    features: [
      "Content calendars & creative",
      "Community management",
      "Influencer partnerships",
      "Performance reporting",
    ],
    icon: "📱",
  },
  {
    slug: "paid-ads",
    title: "Paid Advertising",
    short: "Spend smarter, scale faster.",
    description:
      "Google, Meta, TikTok, LinkedIn — we build and optimize paid campaigns that deliver measurable returns and cut wasted spend.",
    features: [
      "Google & Meta Ads",
      "Creative testing",
      "Conversion tracking",
      "Budget optimization",
    ],
    icon: "🎯",
  },
  {
    slug: "branding",
    title: "Branding & Creative",
    short: "A brand people remember.",
    description:
      "Identity, messaging, and visuals that make you instantly recognizable and impossible to ignore in a crowded market.",
    features: [
      "Brand identity & logos",
      "Messaging & voice",
      "Design systems",
      "Campaign creative",
    ],
    icon: "🎨",
  },
  {
    slug: "web-design",
    title: "Web Design & Development",
    short: "Websites that convert visitors.",
    description:
      "Fast, beautiful, mobile-first websites built to turn traffic into leads and sales — with the analytics to prove it.",
    features: [
      "Conversion-focused design",
      "Responsive development",
      "Landing pages",
      "Speed & SEO optimized",
    ],
    icon: "💻",
  },
  {
    slug: "analytics",
    title: "Analytics & Strategy",
    short: "Decisions backed by data.",
    description:
      "We track what matters, find the insights, and turn them into a roadmap for growth. No guesswork, just results.",
    features: [
      "Dashboards & reporting",
      "Conversion rate optimization",
      "Market research",
      "Growth roadmaps",
    ],
    icon: "📊",
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  tags: string[];
  // Gradient used as a fallback if the image is missing.
  gradient: string;
  // Path to the case-study image in /public.
  image: string;
};

export const projects: Project[] = [
  {
    slug: "northwind-coffee",
    image: "/images/work-northwind-coffee.webp",
    title: "Brewing a 6x return on ad spend",
    client: "Northwind Coffee Co.",
    category: "Paid Ads & Social",
    summary:
      "A direct-to-consumer coffee brand wanted to scale subscriptions without blowing the budget.",
    challenge:
      "Northwind had a loyal but small customer base and rising acquisition costs eating into margins.",
    solution:
      "We rebuilt their paid funnel, launched a UGC-driven social campaign, and optimized their subscription landing page.",
    results: [
      { value: "6.1x", label: "Return on ad spend" },
      { value: "+212%", label: "Subscription signups" },
      { value: "-38%", label: "Cost per acquisition" },
    ],
    tags: ["Paid Ads", "Social", "CRO"],
    gradient: "from-brand-500 to-accent-500",
  },
  {
    slug: "vertex-saas",
    image: "/images/work-saas.webp",
    title: "From unknown to category leader",
    client: "Vertex SaaS",
    category: "SEO & Content",
    summary:
      "A B2B software startup needed organic visibility to reduce reliance on paid channels.",
    challenge:
      "Vertex was invisible on search for their highest-intent keywords and competitors dominated page one.",
    solution:
      "A 9-month SEO and content engine: technical fixes, a pillar-cluster content strategy, and authority link building.",
    results: [
      { value: "+340%", label: "Organic traffic" },
      { value: "#1", label: "For 18 target keywords" },
      { value: "+157%", label: "Inbound demo requests" },
    ],
    tags: ["SEO", "Content", "Strategy"],
    gradient: "from-brand-700 to-accent-500",
  },
  {
    slug: "lumiere-beauty",
    image: "/images/work-aqualuna.webp",
    title: "A launch that sold out in 72 hours",
    client: "Lumière Beauty",
    category: "Branding & Social",
    summary:
      "A new skincare line needed a launch campaign that created buzz and demand from day one.",
    challenge:
      "No existing audience and a crowded beauty market full of established players.",
    solution:
      "Full brand identity, an influencer seeding program, and a coordinated multi-platform launch campaign.",
    results: [
      { value: "100%", label: "Inventory sold out" },
      { value: "48k", label: "New followers" },
      { value: "9.4M", label: "Campaign impressions" },
    ],
    tags: ["Branding", "Social", "Influencer"],
    gradient: "from-accent-500 to-brand-600",
  },
  {
    slug: "metro-fitness",
    image: "/images/work-fitness.webp",
    title: "Filling classes across 14 locations",
    client: "Metro Fitness",
    category: "Local SEO & Ads",
    summary:
      "A regional gym chain wanted to drive memberships across all of its locations.",
    challenge:
      "Inconsistent local presence and low foot traffic at newer locations.",
    solution:
      "Local SEO for every location, geo-targeted ad campaigns, and a referral-driven social strategy.",
    results: [
      { value: "+89%", label: "New memberships" },
      { value: "+3.2x", label: "Local search visibility" },
      { value: "14/14", label: "Locations profitable" },
    ],
    tags: ["Local SEO", "Paid Ads"],
    gradient: "from-accent-400 to-brand-500",
  },
  {
    slug: "atlas-travel",
    image: "/images/work-travel.webp",
    title: "Rebuilding a brand for the modern traveler",
    client: "Atlas Travel",
    category: "Web & Branding",
    summary:
      "An established travel agency needed a digital refresh to compete with online-first brands.",
    challenge:
      "A dated website and brand that wasn't resonating with younger audiences.",
    solution:
      "A complete rebrand and a new conversion-optimized website with integrated booking and content marketing.",
    results: [
      { value: "+128%", label: "Online bookings" },
      { value: "-41%", label: "Bounce rate" },
      { value: "2.7x", label: "Time on site" },
    ],
    tags: ["Web Design", "Branding", "Content"],
    gradient: "from-brand-400 to-brand-700",
  },
  {
    slug: "greenfield-foods",
    image: "/images/work-sustainable.webp",
    title: "Scaling a sustainable food brand nationally",
    client: "Greenfield Foods",
    category: "Full-Service",
    summary:
      "A sustainable food startup wanted to go from regional favorite to national name.",
    challenge:
      "Limited brand awareness outside their home market and a tight growth budget.",
    solution:
      "An integrated strategy across SEO, paid, social, and email to build awareness and drive retail demand.",
    results: [
      { value: "+260%", label: "Brand searches" },
      { value: "1,200+", label: "New retail doors" },
      { value: "5.3x", label: "Email revenue" },
    ],
    tags: ["Full-Service", "Email", "Paid Ads"],
    gradient: "from-accent-600 to-brand-600",
  },
];

export const testimonials = [
  {
    quote:
      "Verve didn't just run our ads — they understood our business. The results speak for themselves: we've never grown faster.",
    name: "Sarah Chen",
    role: "Founder, Northwind Coffee Co.",
  },
  {
    quote:
      "Within six months we went from invisible to ranking #1 for the keywords that matter most. Game-changing partnership.",
    name: "Marcus Reid",
    role: "VP Marketing, Vertex SaaS",
  },
  {
    quote:
      "Our launch sold out in three days. The team's creativity and execution were beyond anything we expected.",
    name: "Amara Okafor",
    role: "CEO, Lumière Beauty",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into your business, audience, and goals to understand what success really looks like.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "We build a data-backed plan tailored to your objectives, channels, and budget.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Our specialists launch campaigns, create content, and optimize relentlessly.",
  },
  {
    step: "04",
    title: "Grow",
    description:
      "We measure, report, and refine — compounding results month over month.",
  },
];

export const values = [
  {
    title: "Results over vanity metrics",
    description:
      "Likes are nice, revenue is better. We focus on the numbers that grow your business.",
  },
  {
    title: "Radical transparency",
    description:
      "Clear reporting, honest conversations, and no jargon. You always know where your money goes.",
  },
  {
    title: "Creativity with purpose",
    description:
      "Bold ideas are only good if they perform. Every creative decision is tied to a goal.",
  },
  {
    title: "True partnership",
    description:
      "We act like an extension of your team, invested in your wins as if they were our own.",
  },
];

export const faqs = [
  {
    q: "What services does your agency offer?",
    a: "We're full-service: SEO, paid advertising, social media, branding & creative, web design, and analytics. You can pick a single service or let us build an integrated strategy across all of them.",
  },
  {
    q: "How quickly will I see results?",
    a: "It depends on the channel. Paid campaigns can show movement within weeks, while SEO and content compound over 3–6 months. We set clear expectations and milestones up front so you always know what to expect.",
  },
  {
    q: "How do you report on performance?",
    a: "You get a live dashboard plus a clear monthly report tied to the metrics that matter to your business — revenue, leads, and ROI, not vanity metrics. We also meet regularly to review and adjust.",
  },
  {
    q: "What does it cost to work with you?",
    a: "Every engagement is scoped to your goals and budget, so pricing varies. Book a free strategy call and we'll put together a tailored proposal with transparent pricing — no surprises.",
  },
  {
    q: "Do you work with businesses in my industry?",
    a: "We've delivered results across e-commerce, SaaS, beauty, fitness, travel, and food brands. Our process adapts to any industry because it's built on research, testing, and data.",
  },
];

// About-page journey timeline.
export const milestones = [
  {
    year: "2017",
    title: "The beginning",
    description:
      "Founded with a single client and a belief that marketing should be measurable, not guesswork.",
  },
  {
    year: "2019",
    title: "First industry award",
    description:
      "Recognized as a rising agency after tripling a client's revenue in just six months.",
  },
  {
    year: "2021",
    title: "Going full-service",
    description:
      "Expanded into SEO, paid media, social, branding, web, and analytics — all under one roof.",
  },
  {
    year: "2023",
    title: "250+ projects delivered",
    description:
      "Crossed 250 completed projects with a 98% client retention rate and 12 industry awards.",
  },
  {
    year: "2026",
    title: "Where we are today",
    description:
      "A senior team of strategists, creatives, and data scientists scaling brands worldwide.",
  },
];

// Industries shown on the Work page.
export const industries = [
  "E-commerce",
  "SaaS & Tech",
  "Beauty & Skincare",
  "Health & Fitness",
  "Travel & Hospitality",
  "Food & Beverage",
  "Real Estate",
  "Finance",
];

export const team = [
  { name: "Jordan Blake", role: "Founder & CEO", initials: "JB" },
  { name: "Priya Nair", role: "Head of Strategy", initials: "PN" },
  { name: "Diego Santos", role: "Creative Director", initials: "DS" },
  { name: "Mei Tanaka", role: "Head of Paid Media", initials: "MT" },
];

// Homepage "Latest Blogs & News" + /blog pages. Drop images in
// /public/images/blog-<slug>.jpg or leave the gradient placeholder.
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  gradient: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "elevate-your-brand-in-2026",
    image: "/images/blog-brand.webp",
    title: "7 ways to elevate your brand online in 2026",
    excerpt:
      "From AI-assisted content to community-led growth, here are the trends shaping how modern brands win attention this year.",
    date: "May 28, 2026",
    category: "Branding",
    gradient: "from-brand-500 to-accent-500",
    body: [
      "The brands growing fastest in 2026 aren't shouting louder — they're showing up more usefully, more consistently, and in the right places. Here's what's actually moving the needle.",
      "First, lead with value. Audiences scroll past polish but stop for genuine insight. Build a content engine around the questions your customers are already asking.",
      "Second, treat community as a channel. Loyal customers now drive more new business than paid ads for many of our clients — invest in the people who already love you.",
      "Finally, measure what matters. Revenue and retention beat likes every time. Tie every campaign back to a business outcome and double down on what works.",
    ],
  },
  {
    slug: "social-media-strategy-that-converts",
    image: "/images/blog-social-media.webp",
    title: "Building a social media strategy that actually converts",
    excerpt:
      "Followers are nice, but revenue is better. Here's the framework we use to turn social audiences into paying customers.",
    date: "May 14, 2026",
    category: "Social Media",
    gradient: "from-accent-400 to-brand-600",
    body: [
      "A big following means nothing if it doesn't move your business forward. The brands that convert treat social as a funnel, not a billboard.",
      "Start at the top with content designed to be discovered — short, valuable, and shareable. In the middle, build trust with proof and personality. At the bottom, make the next step obvious.",
      "Consistency beats intensity. A steady cadence of useful posts compounds far more than an occasional viral hit that fizzles out.",
    ],
  },
  {
    slug: "seo-fundamentals-that-still-work",
    image: "/images/blog-fundamentals.webp",
    title: "The SEO fundamentals that still work (and what to skip)",
    excerpt:
      "Search keeps changing, but the fundamentals don't. Here's where to focus your energy for compounding organic growth.",
    date: "Apr 30, 2026",
    category: "SEO",
    gradient: "from-brand-400 to-accent-500",
    body: [
      "SEO headlines change every month, but the fundamentals are remarkably stable: great content, a fast technical foundation, and earned authority.",
      "Focus on intent. Understand what someone actually wants when they search a term, then be the best possible answer to that query.",
      "Skip the gimmicks. Keyword stuffing and shady link schemes are short-lived. Compounding organic growth comes from genuinely useful pages that earn their rankings.",
    ],
  },
];
