// Every status label on the site, in one place, in Title Case.
// `icon` picks the status dot: 'filled' (done), 'half' (in progress) or 'empty' (not started).
// The dot styles are `.dot--filled`, `.dot--half` and `.dot--empty` in index.css.

// Projects: filter buttons and the badge on each card
export const projectStatuses = {
  completed: { label: 'Completed', icon: 'filled' },
  'in-progress': { label: 'In Progress', icon: 'half' },
  upcoming: { label: 'Upcoming', icon: 'empty' },
}

// Skills: filter buttons and the dot next to each skill
export const skillStatuses = {
  completed: { label: 'Comfortable', icon: 'filled' },
  learning: { label: 'Learning', icon: 'half' },
  pending: { label: 'Up Next', icon: 'empty' },
}
