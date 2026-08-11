// ============================================================================
// biography.js — the single source of truth for every word on this site.
// Edit the text in this file to update the site — nothing else needs to change.
// ============================================================================

export const person = {
  fullName: 'Edward Prince Akachukwu',
  firstName: 'Edward',
  title: 'Chemical Engineering Student',
  university: 'Federal University of Technology Owerri',
  universityShort: 'FUTO',
  department: 'Chemical Engineering',
  classOf: 'Class of 2029',
  state: 'Imo State',
  country: 'Nigeria',
  lga: 'Mbaitoli Local Government Area',
 email: 'edwardzethan792@gmail.com',
  phone: '+2347087806251',
  whatsapp: '2347087806251', // digits only, no + or spaces — required format for wa.me links
  twitter: 'https://x.com/zethanE21841',
  linkedin: '',
  github: '',
  // Path to your photo once you add it to the public/ folder, e.g. '/edward.jpg'.
  photo: '',
  initials: 'EPA',
}

export const chapters = [
  { id: 'cover', number: '01', label: 'Cover' },
  { id: 'person', number: '02', label: 'The Person' },
  { id: 'origin', number: '03', label: 'Origin' },
  { id: 'education', number: '04', label: 'Education' },
  { id: 'engineering', number: '05', label: 'Chemical Engineering' },
  { id: 'journey', number: '06', label: 'The Journey' },
  { id: 'skills', number: '07', label: 'The Toolkit' },
  { id: 'projects', number: '08', label: 'Projects' },
  { id: 'vision', number: '09', label: 'The Vision' },
  { id: 'mindset', number: '10', label: 'The Mindset' },
  { id: 'nextchapter', number: '11', label: 'Next Chapter' },
  { id: 'contact', number: '12', label: 'Connect' },
  { id: 'thanks', number: '13', label: 'Thank You' },
]


export const coverChapter = {
  kicker: 'The story is still being written.',
  disciplineLine: 'Chemical Engineering \u00d7 Artificial Intelligence \u00d7 Software',
  tagline: 'A future engineer building at the intersection of science, technology, and intelligence.',
  roles: ['Chemical Engineering Student', 'Artificial Intelligence & Machine Learning Explorer', 'Software Development Enthusiast'],
  cta: 'Open the story',
}

export const personChapter = {
  eyebrow: 'Chapter Two',
  title: 'The Person',
  subtitle: 'Behind the Engineer',
  narrative: [
    'Edward Prince Akachukwu is a quiet, playful, and caring person who takes the people around him seriously and values the relationships he builds.',
    'Although naturally quiet, Edward has another side that appears when it comes to things he cares about. When it comes to business, technology, learning, or something he is determined to accomplish, he becomes focused and serious.',
    'He is someone who does not give up easily.',
    'When a problem becomes difficult, his instinct is not simply to walk away. He researches, experiments, breaks the problem apart, tries different approaches, and keeps going until he begins to understand it.',
    'That persistence is one of the qualities he values most about himself.',
  ],
  mattersHeading: 'What Matters',
  matters: [
    { label: 'Faith', body: 'God is an important part of Edward\u2019s life and foundation.' },
    { label: 'Family', body: 'Family remains one of the principles that strongly influences the way he thinks about life and success.' },
    { label: 'Honesty & Respect', body: 'Edward values honesty, responsibility, respect, and treating people properly.' },
    { label: 'Independence', body: 'He believes in developing the ability to stand on his own, create opportunities, and build something meaningful.' },
    { label: 'Helping Others', body: 'Success, to Edward, should not exist only for personal gain. He wants what he learns and eventually builds to have value for other people.' },
  ],
  beyondHeading: 'Beyond the Classroom',
  beyondIntro: 'When Edward is not studying or building something, he enjoys:',
  beyondClassroom: ['Coding', 'Building websites', 'Exploring Artificial Intelligence', 'Learning new things', 'Listening to music', 'Church activities', 'Taekwondo'],
  music: 'His music taste includes Gospel, Afrobeats, and international artists.',
}

export const originChapter = {
  eyebrow: 'Chapter Three',
  title: 'Where the Story Began',
  place: 'Imo State, Nigeria',
  narrative: [
    'Edward Prince Akachukwu is from Mbaitoli Local Government Area of Imo State.',
    'His origin is part of the foundation of his identity \u2014 a reminder of where the journey began and the values that continue to shape it.',
    'From his background comes a desire to learn, grow, become independent, and eventually build things that can create value beyond himself.',
  ],
  shortLines: ['Home is not simply a location.', 'It is part of the story.', 'And every ambitious journey begins somewhere.'],
  closing: 'For Edward, that beginning is Imo State.',
}

export const educationChapter = {
  eyebrow: 'Chapter Four',
  title: 'The Academic Journey',
  timeline: [
    {
      year: '2016 \u2014 2022',
      heading: 'Iho Comprehensive Secondary School',
      subheading: 'Imo State, Nigeria',
      body: 'Edward\u2019s formal educational journey before university began at Iho Comprehensive Secondary School, where he spent six years developing the academic foundation that would eventually lead him toward engineering.',
    },
    {
      year: person.classOf,
      heading: person.university,
      subheading: person.department,
      body: 'Edward is currently studying Chemical Engineering at FUTO. Choosing Chemical Engineering was not simply about selecting an easy path \u2014 quite the opposite. He wanted a challenge, deliberately choosing a course that would push his understanding of mathematics, science, engineering, and problem-solving.',
    },
  ],
  closing: 'University has become more than a place to earn a degree. It is where Edward is learning how to think like an engineer.',
}

export const engineeringChapter = {
  eyebrow: 'Chapter Five',
  title: 'Engineering the Future',
  intro: 'Chemical Engineering represents one of the biggest challenges Edward has chosen to take on. What attracted him to the field was simple: he wanted a challenging course. That desire to challenge himself continues to influence the way he approaches his education.',
  interestsHeading: 'Areas of Interest',
  interestsBody: 'Edward\u2019s interests within Chemical Engineering are still developing, but Process Engineering is one of the areas that currently attracts him most. He is particularly interested in understanding how industrial processes work, how they can be optimized, and how technology can eventually make them more intelligent.',
  learningHeading: 'Currently Learning',
  learningItems: [
    { subject: 'Thermodynamics', body: 'Understanding energy, heat, work, and the behavior of systems.' },
    { subject: 'Materials Science', body: 'Understanding materials, their properties, behavior, and applications.' },
  ],
  learningClosing: 'These foundations are helping Edward develop the engineering knowledge he hopes to eventually combine with technology.',
  mindsetHeading: 'The Engineering Mindset',
  mindsetItems: ['Breaking problems down.', 'Researching until he understands.', 'Experimenting with different approaches.', 'Persisting when things become difficult.'],
  mindsetClosing: 'For him, solving a problem is not simply about finding an answer. It is about understanding why the answer works.',
}

export const journeyChapter = {
  eyebrow: 'Chapter Six',
  title: 'The Journey',
  subtitle: 'Learning. Building. Discovering.',
  intro: 'Edward\u2019s journey is not limited to the classroom. Alongside Chemical Engineering, he has been building a second foundation in technology.',
  sections: [
    { heading: 'Programming', body: 'He began exploring programming and gradually developed an interest in using code to create things rather than simply consuming technology.' },
    {
      heading: 'Web Development',
      body: 'He has explored HTML, CSS, JavaScript, React, Vite, and Node.js. Through web development, he has been learning how ideas can become interactive digital experiences.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Node.js'],
    },
    { heading: 'Python', body: 'Python became another important part of his technology journey, opening the door toward programming, data, Artificial Intelligence, and Machine Learning.' },
    { heading: 'Git & GitHub', body: 'Edward has also explored modern development workflows using Git and GitHub, learning how developers manage and build projects collaboratively.' },
    { heading: 'Artificial Intelligence', body: 'The deeper he explored technology, the more his interest moved toward Artificial Intelligence and Machine Learning. That interest eventually became more than curiosity. It became a vision.' },
  ],
}

export const skillsChapter = {
  eyebrow: 'Chapter Seven',
  title: 'The Digital Toolkit',
  subtitle: 'Technology I\u2019m Building With',
  groups: [
    {
      category: 'Development',
      items: [
        { name: 'HTML', body: 'Web structure and semantic content.' },
        { name: 'CSS', body: 'Responsive layouts, styling, and visual design.' },
        { name: 'JavaScript', body: 'Interactive web applications and programming logic.' },
        { name: 'React', body: 'Modern component-based frontend development.' },
        { name: 'Vite', body: 'Modern frontend development and build tooling.' },
        { name: 'Node.js', body: 'JavaScript development beyond the browser.' },
      ],
    },
    {
      category: 'Programming',
      items: [{ name: 'Python', body: 'A foundation for programming, experimentation, and exploration into Artificial Intelligence and Machine Learning.' }],
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Git', body: 'Tracking and managing changes across projects.' },
        { name: 'GitHub', body: 'Collaborating and building alongside other developers.' },
      ],
    },
    {
      category: 'Artificial Intelligence',
      items: [{ name: 'AI & Machine Learning', body: 'Currently an area of active learning, experimentation, and long-term development.' }],
    },
  ],
  closing: 'Edward\u2019s goal is not to collect technologies simply for the sake of having a long skills list. The objective is to understand how these technologies can eventually become tools for solving engineering problems.',
}

export const projectsChapter = {
  eyebrow: 'Chapter Eight',
  title: 'Projects',
  subtitle: 'Building the Ideas',
  intro: 'Edward believes that learning becomes more meaningful when ideas are turned into something real. Two projects represent important parts of that journey.',
  hasProjects: true,
  items: [
    {
      id: 'rackyweb',
      title: 'Rackyweb Global Media',
      tagline: 'A Digital Vision in Progress',
      summary: 'Rackyweb Global Media represents Edward\u2019s interest in technology, digital products, web development, and building something of his own. It is part of a larger ambition to create technology and digital experiences rather than simply use them.',
      status: 'Growing',
      chapterStatus: 'Still being written',
      tags: [],
    },
    {
      id: 'rackygpt',
      title: 'RackyGPT / RackyAI',
      tagline: 'Building Intelligence',
      summary: 'RackyGPT/RackyAI represents Edward\u2019s exploration into Artificial Intelligence. The idea comes from a desire to understand AI beyond simply using existing tools. The long-term ambition is to understand how intelligent systems can be designed, developed, and eventually applied to meaningful real-world problems.',
      status: 'In Development',
      chapterStatus: 'The beginning of a larger journey',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Software Development', 'Engineering Intelligence'],
    },
  ],
}

export const visionChapter = {
  eyebrow: 'Chapter Nine',
  title: 'The Vision',
  subtitle: 'Engineering Intelligence into Industry',
  intro: ['Edward does not simply want to become a Chemical Engineer.', 'He wants to stand at the intersection of:'],
  intersection: 'Chemical Engineering \u00d7 Artificial Intelligence \u00d7 Machine Learning \u00d7 Software Development',
  body: [
    'His long-term vision is to pioneer intelligent systems capable of understanding, monitoring, and improving complex industrial and chemical processes.',
    'He imagines a future where machines do more than simply operate.',
  ],
  emphasis: 'They learn.',
  more: [
    'Where industrial systems can identify problems before they become failures.',
    'Where intelligent software can help engineers maintain equipment, optimize processes, improve efficiency, reduce waste, and create better machines.',
    'Where Artificial Intelligence becomes a genuine part of Process Engineering rather than something that exists separately from it.',
  ],
  ambitionHeading: 'The Ambition',
  ambitionIntro: 'To help create a new generation of intelligent industrial systems.',
  ambitionItems: [
    'Systems that can assist engineers.',
    'Systems that can learn from processes.',
    'Systems that can help predict problems.',
    'Systems that can improve efficiency.',
    'Systems that can contribute to better machines.',
  ],
  closing: 'Edward\u2019s ultimate ambition is to become one of the people pushing Artificial Intelligence into the heart of Process Engineering.',
  closingEmphasis: 'Not simply using the technology of the future.',
  finalEmphasis: 'Building it.',
}

export const mindsetChapter = {
  eyebrow: 'Chapter Ten',
  title: 'The Mindset',
  subtitle: 'Keep Going.',
  intro: 'Edward knows that the journey will not always be easy. He recognizes his own weaknesses.',
  weaknessesHeading: 'Weaknesses',
  weaknesses: ['He sometimes procrastinates.', 'He can trust people too easily.', 'He can be stubborn.'],
  awareness: 'But he also understands that self-awareness is part of growth.',
  strengthsHeading: 'Strengths',
  strengthsIntro: 'His strengths are persistence and focus.',
  strengths: [
    'When something matters to him, he is willing to keep working at it.',
    'When he doesn\u2019t understand something, he researches.',
    'When one approach fails, he experiments with another.',
  ],
  reminder: 'And when the journey becomes difficult, he reminds himself of what is ahead:',
  pillars: ['His future.', 'His family.', 'His faith.', 'His ambition.', 'His independence.', 'His desire to build something meaningful.'],
}

export const nextChapterChapter = {
  eyebrow: 'Chapter Eleven',
  title: 'The Next Chapter',
  subtitle: 'The Story Is Not Finished.',
  lines: ['Edward is still a student.', 'Still learning.', 'Still experimenting.', 'Still building.', 'Still discovering what he is capable of.'],
  reflection: ['He does not have every detail of the future figured out.', 'And perhaps that is exactly what makes the journey exciting.'],
  today: 'Today, he is a Chemical Engineering student at FUTO.',
  tomorrow: 'Tomorrow, he hopes to become an engineer who can move comfortably between the physical world of industrial processes and the digital world of intelligent systems.',
  closingIntro: 'The future is not something he wants to simply wait for.',
  closingEmphasis: 'He wants to engineer it.',
}



// A quiet, rotating line — shown as a small floating accent across the site.
// Cycles on its own roughly once a minute; hovering or tapping jumps to the
// next one immediately. Edit this list any time to change what it says.
export const motivationalWords = [
  'Still learning. Still building.',
  'Understanding why is the real answer.',
  'Analyze. Plan. Execute.',
  'Every process can be optimized.',
  'Persistence over perfection.',
  'Faith. Family. Focus.',
  'Not just using tomorrow\u2019s tools \u2014 building them.',
  'Every failure is data.',
  'Discipline turns curiosity into mastery.',
  'The story is still being written.',
  'Keep going.',

]

export const contactChapter = {
  eyebrow: 'Final Page',
  title: 'Let\u2019s Connect',
  identity: {
    name: person.fullName,
    disciplines: 'Chemical Engineering \u00b7 Artificial Intelligence \u00b7 Machine Learning \u00b7 Software Development',
    university: person.university,
    departmentLine: `${person.department} \u2014 ${person.classOf}`,
    location: `${person.lga}, ${person.state}, ${person.country}`,
  },
  finalWord: 'I don\u2019t want to simply work with the technology of the future. I want to help build it.',
  closing: 'The story is still being written.',
}


export const thanksChapter = {
  eyebrow: 'Acknowledgments',
  title: 'With Appreciation',
  acknowledgments: [
    { to: 'To God', body: 'For strength, direction, and grace through every chapter of this journey.' },
    { to: 'To Family', body: 'For believing in the plan even before it had a name.' },
    { to: 'To You, the Reader', body: 'For taking the time to read this far.' },
  ],
  signOffLine: 'With gratitude,',
  replayLabel: 'Read it again, from the beginning',
}