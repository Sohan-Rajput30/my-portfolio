/* ==================================================
   PORTFOLIO CONTENT
   Edit everything about the site here. Components
   read from this file, so you never touch JSX to
   update text, links, skills or projects.
================================================== */

export const profile = {
  name: 'Sohan Rajput',
  initials: 'SR',
  firstName: 'SOHAN',
  lastName: 'RAJPUT.',
  email: 'rajsohanh1@gmail.com',
  location: 'India',

  // Hero text
  topline: 'CYBERSECURITY · DEVELOPMENT',
  status: 'BUILDING MY NEXT CHAPTER',
  heroLines: [
    'Computer Science graduate.',
    'Cybersecurity postgraduate student.',
    'Curious about how things work — and how to secure them.',
  ],
  footerLeft: 'SECURITY MINDED. ALWAYS LEARNING.',

  // Optional portrait: put a photo in /public (e.g. public/me.jpg) and set '/me.jpg'.
  // Leave empty to hide it. A 4:5 portrait crop looks best.
  photo: 'profile.png',

  // Put your resume PDF inside the /public folder (for example public/resume.pdf)
  // and set this to '/resume.pdf'. Leave empty to hide the button.
  resume: 'C_V.pdf',

  // Empty links are hidden automatically.
  socials: [
    { label: 'GitHub', href: 'https://github.com/Sohan-Rajput30' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sohansingh-rajput/' },
  ],

  // Contact section text
  contactEyebrow: 'HAVE SOMETHING IN MIND?',
  contactText:
    'Questions, collaboration ideas or feedback on a project — send a message and I will reply by email.',
}

export const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export const sectionIds = ['home', ...navLinks.map((link) => link.id)]

export const about = {
  label: 'A LITTLE ABOUT ME',
  summary:
    'A Computer Science graduate pursuing an M.Sc. in Cybersecurity. I am building practical skills in security analysis, digital investigations, and software development — one project at a time.',
  focus: [
    {
      title: 'Security analysis',
      text: 'Learning to scan, assess and report on weaknesses in websites and networks, with findings that are clear and actionable.',
    },
    {
      title: 'Digital forensics',
      text: 'Understanding how evidence is collected and preserved, and how an incident is investigated step by step.',
    },
    {
      title: 'Software development',
      text: 'Writing in C, Java and JavaScript, and building React interfaces like this one.',
    },
  ],
}

export const skills = [
  { name: 'C Programming', category: 'Programming' },
  { name: 'Java', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Postgre-sql', category: 'Database' },
  { name: 'HTML & CSS', category: 'Web' },
  { name: 'React', category: 'Web' },
  { name: 'Networking Fundamentals', category: 'Security' },
  { name: 'Digital Forensics', category: 'Security' },
  { name: 'Wireshark', category: 'Security' },
  { name: 'Nmap', category: 'Security' },
  { name: 'Linux', category: 'Systems' },
]

export const projects = [
  {
    number: '01',
    title: 'SentinelAI',
    category: 'Cyber Security',
    description:
      'AI assisted penetration testing framework built to scan URLs and websites, collect information, find vulnerabilities, define risks and generate reports.',
    status: 'IN DEVELOPMENT',
    tags: ['Python', 'AI', 'Vulnerability Scanning'],
    image: '/projects/SentinelAI.png', // optional screenshot, e.g. '/projects/sentinelai.png' (file in /public/projects)
    links: { github: 'https://github.com/Sohan-Rajput30/SentinelAI', live: '' },
  },
  {
    number: '02',
    title: 'Web Security Lab',
    category: 'APPLICATION SECURITY',
    description:
      'A planned collection of controlled exercises for understanding common web vulnerabilities and documenting remediation.',
    status: 'LEARNING PROJECT',
    tags: ['OWASP', 'Web Security', 'Testing'],
    image: '/projects/Pentest.jpg', // optional screenshot, e.g. '/projects/sentinelai.png' (file in /public/projects)
    links: { github: 'https://drive.google.com/drive/folders/1VHHkhH7F4XqHGO30wfzfWa2UIuONPv4V', live: '' },
  },
    {
    number: '03',
    title: 'My Portfolio',
    category: 'DEVELOPMENT',
    description:
      'A professional well developed portfolio website that showcases the web development skills in detail.',
    status: 'LEARNING PROJECT',
    tags: ['Web Development', 'Profile', 'Coding'],
    image: '/projects/Portfolio.png', // optional screenshot, e.g. '/projects/sentinelai.png' (file in /public/projects)
    links: { github: 'https://github.com/Sohan-Rajput30/my-portfolio', live: 'https://my-portfolio-ten-mu-75.vercel.app/' },
  },
  {
    number: '04',
    title: 'Network Analysis Lab',
    category: 'NETWORK SECURITY',
    description:
      'A learning project exploring packet captures, network protocols, and suspicious traffic patterns in a controlled lab.',
    status: 'PLANNED',
    tags: ['Wireshark', 'TCP/IP', 'Networking'],
    image: '', // optional screenshot, e.g. '/projects/sentinelai.png' (file in /public/projects)
    links: { github: '', live: '' },
  },
  
]

export const education = [
  {
    title: 'M.Sc. Cybersecurity',
    detail: 'Currently pursuing',
  },
  {
    title: 'B.Sc. Computer Science',
    detail: 'Completed',
  },
]

/* Sample entries below: replace them with your own.
   Add or remove items freely. The section hides itself if the list is empty. */
export const experience = [
  // {
  //   role: 'Your role title',
  //   org: 'Organisation name',
  //   period: 'Month Year — Present',
  //   location: 'City / Remote',
  //   points: [
  //     'Describe something you built, fixed or learned in this role.',
  //     'Add a result or number if you have one.',
  //   ],
  // },
  {
    role: 'Java developer Intern',
    org: 'SPCL Infotech Solutions Pvt. Ltd.',
    period: 'Internship(12/10/2026-Present))',
    location: 'Warje, Pune',
    points: ['Currently learning concepts',' Working under Guidance'],
  },
]

export const certifications = [
  {
    title: 'Certified Ethical Hacker(Currently pursuing)',
    issuer: 'EC Council',
    year: '2026',
    link: '', // optional credential URL
  },
  {
    title: 'Networking',
    issuer: 'Zscaler Academy',
    year: '2026',
    link: 'https://drive.google.com/file/d/15fJrjVPoJ4nEy-0859E2dGaSpBgeNyPo/view?usp=drivesdk',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Cisco Academy',
    year: '2026',
    link: 'https://drive.google.com/file/d/1MD3--zLfEpB4jL-NeqksjwOP1kQz1sFF/view?usp=drivesdk',
  },
    {
    title: 'Java trainee',
    issuer: 'Spoken tutorial development(Edupyramids)',
    year: '2025',
    link: 'https://drive.google.com/file/d/13xwSOaPUIH_VwM483igONtOs_icbZ3lh/view?usp=drivesdk',
  },
     {
    title: 'Claude AI 11 certifications',
    issuer: 'ANTROPIC',
    year: '2026',
    link: 'https://drive.google.com/drive/folders/1fzONjiRAMyhNUabDKgvJ3hh4bD3T-zxY',
  },
]
