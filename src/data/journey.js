// The Milestones timeline (section id "journey"): every move, oldest first. Add a milestone here and it shows up on the page.
//
// type: which filter it belongs to: 'technical', 'workshop', 'networking' or 'education'.
//       A filter button only appears once at least one milestone has that type.
//       No type = shown only under "All" (like the "Next" card).
//
// To add a workshop, event or project, copy this, fill it in and put it in date order:
//   {
//     type: 'workshop',
//     when: 'November 2026',
//     title: 'Name of the workshop · Who ran it',
//     body: 'One or two sentences: what you learned or built.',
//     tags: ['Topic', 'Tool'],
//     icon: 'lightbulb', // any name from src/components/ui/Icon.jsx
//   },

// Filter labels, in the order the buttons appear
export const journeyTypes = {
  technical: 'Technical',
  workshop: 'Workshops',
  networking: 'Networking',
  education: 'Education',
}

export const journey = {
  title: 'From a borrowed seat to shipping software',
  milestones: [
    {
      type: 'education',
      when: 'Where it started',
      title: 'Kakuma refugee camp, Kenya',
      body: "Competed for a seat in a free vocational training center's HTML, CSS, and JavaScript course — and the logic clicked.",
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: 'lightbulb',
    },
    {
      type: 'education',
      when: 'Feb 2024 – Feb 2025',
      title: 'Teaching Assistant · Somali Bantu Secondary School',
      body: 'Taught over 500 high school students in Math, Chemistry and Physics, and gave career guidance and mental health support.',
      tags: ['Teaching', 'Mentoring'],
      icon: 'people',
    },
    {
      type: 'education',
      when: 'Aug 2025 – May 2029 · 2nd year',
      title: 'Software Engineering · McGill University',
      body: 'Second-year SE student in Montréal. Currently enjoying Java and my software systems coursework.',
      tags: ['Java', 'Software Systems', 'Python', 'C'],
      icon: 'mortarboard',
    },
    {
      type: 'networking',
      when: 'Jul 2026 – Present',
      title: 'Co-founder · Settle MTL',
      body: 'Co-founded a student services startup helping newly arrived students settle into life in Montréal.',
      tags: ['Startup', 'Leadership'],
      icon: 'lightbulb',
    },
    {
      type: 'networking',
      when: 'Aug 2026 – Present',
      title: 'WUSC SRP Co-ordinator · Student council',
      body: 'Align with co-chairs on priorities and program goals, and mobilize members to welcome newly admitted Student Refugee Program students.',
      tags: ['Leadership', 'Community'],
      icon: 'people',
    },
    {
      type: 'technical',
      when: 'Aug 10 – 28, 2026',
      title: 'Technical Lead · Riipen Labs',
      body: 'Led the technical work on a 30-hour, four-week fan-engagement project for FanRyng, and developed the strategy and operations documents. Earned the project completion certificate.',
      tags: ['Leadership', 'Teamwork', 'Strategy'],
      icon: 'code-slash',
    },
    {
      type: 'networking',
      when: 'October 19, 2026',
      title: 'Volunteer · McGill Tech Fair',
      body: 'Volunteered at least 3 hours in a row on each of the two days, guiding students and employers around the fair to keep the event running smoothly.',
      tags: ['Volunteering', 'Events', 'Networking'],
      icon: 'people',
    },
    {
      type: 'workshop',
      when: 'November 6, 13 & 20, 2026',
      title: 'LLM Workshops · McGill University',
      body: 'Three sessions: writing effective prompts, then using a single AI agent to reach a goal, then using multiple AI agents together.',
      tags: ['Prompt Engineering', 'AI Agents', 'Multi-Agent Systems'],
      icon: 'cpu',
    },
    {
      type: 'technical',
      when: 'Now',
      title: 'Going full-stack',
      body: 'Shipping React + Tailwind frontends and learning FastAPI on the backend — this portfolio included.',
      tags: ['React', 'Tailwind', 'FastAPI'],
      icon: 'lightning-charge',
    },
    {
      type: 'technical',
      when: 'Starting January 2027',
      title: 'Project with a McGill professor',
      body: 'Joining a project led by one of my McGill professors, in Python and/or Java.',
      tags: ['Python', 'Java', 'Collaboration'],
      icon: 'people',
    },
    {
      when: 'Next',
      title: 'Open to internships & new roles',
      body: "Looking for a team that treats craft as seriously as deadlines. Let's talk.",
      tags: ['Internships', 'Freelance'],
      icon: 'rocket-takeoff',
      cta: { label: 'Get in touch', href: '#contact' },
    },
  ],
}
