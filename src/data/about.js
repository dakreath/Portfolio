// The About section text
export const about = {
  title: 'About me',
  paragraphs: [
    "I'm a second-year Software Engineering student at McGill, and I like turning fuzzy ideas into working software. Right now that means building Gambella Marketplace, an e-commerce platform, with two teammates, and learning FastAPI so I can own the backend too. In class, Java and software systems are what I enjoy most.",
    "Outside class, I was technical lead on a Riipen Labs group project, volunteered with the McGill Tech Fair, and recently took McGill's two-day LLM workshop on single- and multi-agent systems. I ask questions until the goal is clear, I'm always willing to learn, and I'm drawn to teams that treat craft as seriously as deadlines.",
  ],
}

// The "fun_facts.zip" box in the About section.
// Each item has an emoji, a key word (shown in bold) and one line of text.
export const funFacts = {
  filename: 'fun_facts.zip',
  groups: [
    {
      title: 'fun facts',
      items: [
        {
          emoji: '🙋🏾',
          key: 'Curious',
          text: 'I ask at least one question in every class, even if it’s a cheap one 😂',
        },
        { emoji: '🤝', key: 'People person', text: 'I love connecting with new people.' },
        { emoji: '🕺🏾', key: 'Rooted', text: 'I love my cultural dance.' },
        { emoji: '📚', key: 'Bookworm', text: 'I love books.' },
        {
          emoji: '😄',
          key: 'Comedian on call',
          text: 'I have all kinds of good jokes to make you laugh, especially in my free time.',
        },
        { emoji: '🐍', key: 'Favorite languages', text: 'Python and Java, more than anything else.' },
        {
          emoji: '🧩',
          key: 'Clarity-driven',
          text: 'When requirements are fuzzy, I ask questions until the goal is crystal clear.',
        },
      ],
    },
  ],
}
