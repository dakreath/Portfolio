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
      when: 'Studying · 2nd year',
      title: 'Software Engineering · McGill University',
      body: 'Second-year SE student in Montréal. Currently enjoying Java and my software systems coursework.',
      tags: ['Java', 'Software Systems', 'Python', 'C'],
      icon: 'mortarboard',
    },
    {
      type: 'networking',
      when: 'Community',
      title: 'Volunteer · McGill Tech Fair',
      body: "Volunteered with the McGill Tech Fair team over two days — about 3 hours each day, nonstop — giving back to the tech community that's helping me grow.",
      tags: ['Volunteering', 'Events', 'Networking'],
      icon: 'people',
    },
    {
      type: 'technical',
      when: 'Completed',
      title: 'Technical Lead · Riipen Labs',
      body: 'Led the technical side of a Riipen Labs group project for FanRyng, a fan-engagement platform — producing strategy and operations documents with the team.',
      tags: ['Leadership', 'Teamwork', 'Strategy'],
      icon: 'code-slash',
    },
    {
      type: 'workshop',
      when: 'November 13 & 20, 2026',
      title: 'LLM Workshop · McGill University',
      body: 'Two 2-hour sessions on building with large language models, from single-agent to multi-agent systems.',
      tags: ['LLMs', 'AI Agents', 'Multi-Agent Systems'],
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
      when: 'Starting December 2026',
      title: 'Project with a McGill professor',
      body: 'Joining a project led by one of my McGill professors, starting next month.',
      tags: ['Mentorship', 'Collaboration'],
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
