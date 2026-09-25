// My skills. This list is used in three places:
//   1. the Skills section (grouped by category, with progress bars)
//   2. the "core stack" box in About (skills with status 'completed')
//   3. the scrolling tech strip under the hero (skills with an icon that aren't 'pending')
//
// status: 'completed', 'learning' or 'pending'
// note:   optional, shown after the name (e.g. "coursework")
// icon:   optional, an icon name from src/components/ui/Icon.jsx
export const skills = {
  title: 'What I work with',
  categories: [
    {
      name: 'languages',
      skills: [
        { name: 'Python', status: 'completed', note: 'coursework', icon: 'filetype-py' },
        { name: 'JavaScript', status: 'completed', icon: 'filetype-js' },
        { name: 'TypeScript', status: 'pending' },
        { name: 'Java', status: 'learning', note: 'coursework', icon: 'cup-hot' },
        { name: 'C', status: 'learning', note: 'coursework', icon: 'braces' },
      ],
    },
    {
      name: 'frontend',
      skills: [
        { name: 'React', status: 'learning', icon: 'filetype-jsx' },
        { name: 'Tailwind CSS', status: 'completed', icon: 'wind' },
        { name: 'HTML', status: 'completed', icon: 'filetype-html' },
        { name: 'CSS', status: 'completed', icon: 'filetype-css' },
        { name: 'Next.js', status: 'pending' },
      ],
    },
    {
      name: 'backend & databases',
      skills: [
        { name: 'FastAPI', status: 'learning', icon: 'lightning-charge' },
        { name: 'Node.js', status: 'pending' },
        { name: 'Express', status: 'pending' },
        { name: 'PostgreSQL', status: 'pending' },
        { name: 'MySQL', status: 'pending' },
      ],
    },
    {
      name: 'tools',
      skills: [
        { name: 'Git', status: 'completed', icon: 'git' },
        { name: 'GitHub', status: 'completed', icon: 'github' },
        { name: 'VS Code', status: 'completed', icon: 'code-square' },
        { name: 'Docker', status: 'pending' },
        { name: 'Figma', status: 'pending' },
        { name: 'AWS', status: 'pending' },
      ],
    },
  ],
}

// Labels for the status filter buttons
export const skillStatuses = {
  completed: { label: 'Completed' },
  pending: { label: 'Pending' },
  learning: { label: 'Learning' },
}

// The lists below are built from the data above. No need to edit them.

// Every skill in one flat list
export const allSkills = skills.categories.flatMap((category) => category.skills)

// Names shown in the About "core stack" box
export const coreStack = allSkills.filter((skill) => skill.status === 'completed').map((skill) => skill.name)

// The two rows of the tech strip: (languages + frontend) and (backend + tools)
function showOnStrip(skill) {
  return skill.icon && skill.status !== 'pending'
}
const [languages, frontend, backend, tools] = skills.categories
export const techStripRows = [
  [...languages.skills, ...frontend.skills].filter(showOnStrip),
  [...backend.skills, ...tools.skills].filter(showOnStrip),
]
