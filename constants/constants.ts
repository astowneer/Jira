import moment from "moment"

export const navigationLinks = [
  {
    title: "Features",
    route: "/features",
  },
  {
    title: "Solutions",
    route: "/solutions",
    dropdown: [
      {
        title: "Teams",
        links: [
          {
            title: "Marketing",
            route: "/marketing"
          },
          {
            title: "Engeneering",
            route: "/engeneering"
          },
          {
            title: "Design",
            route: "/design"
          },
          {
            title: "Operations",
            route: "/opeartions"
          },
          {
            title: "IT",
            route: "/ite"
          },
        ]
      },
      {
        title: "Use cases",
        links: [
          {
            title: "Planning",
            route: "/planning"
          },
          {
            title: "Compain management",
            route: "/compaign-management"
          },
          {
            title: "Agile Project management",
            route: "/agile-project-management"
          },
          {
            title: "Program management",
            route: "/program-management"
          }
        ]
      },
      {
        title: "Company size",
        links: [
          {
            title: "Enterprise",
            route: "/enterprise"
          },
        ]
      },
    ]
  },
  {
    title: "Product guide",
    route: "/product-guide",
  },
  {
    title: "More",
    route: "/more",
  },
]

export const workManagements = [
  {
    title: "PRODUCT AND ISSUE TRACKING",
    subtitle: "Software Development",
    description: "Plan, track, release and support world-class software. Jira is the single source of truth for your entire development lifecycle.",
    posibilities: [
      {
        title: "Analytics",
        icon: "/svg/trending.svg"
      },
      {
        title: "Progress tracking",
        icon: "/svg/stack.svg"
      },
      {
        title: "Sprint planning",
        icon: "/svg/calendar.svg"
      },
      {
        title: "Forms",
        icon: "/svg/rocket.svg"
      },
    ],
    imagePreviewUrl: "/images/jira-card.webp",
    imageMainUrl: "/images/modalCardSoftwareDev.webp",
  },
  {
    title: "PLAN AND LAUNCH CAMPAIGNS",
    subtitle: "Marketing",
    description: "Make launching viral marketing campaigns a breeze. Break down complex campaigns into actionable steps, easily collect requests, and stay aligned with cross-functional teams.",
    posibilities: [
      {
        title: "Analytics",
        icon: "/svg/trending.svg"
      },
      {
        title: "Progress tracking",
        icon: "/svg/stack.svg"
      },
      {
        title: "Sprint planning",
        icon: "/svg/calendar.svg"
      },
      {
        title: "Forms",
        icon: "/svg/rocket.svg"
      },
    ],
    imagePreviewUrl: "/images/heroCardMarketing.webp",
    imageMainUrl: "/images/modalCardSoftwareDev.webp",
  },
  {
    title: "PLAN AND TRACK IT PROJECTS",
    subtitle: "IT support services",
    description: "Streamline IT projects and deliver reliable services to internal teams, from migration management to software deployment. Gain visibility across IT workflows to align technology projects to business goals.",
    posibilities: [
      {
        title: "Analytics",
        icon: "/svg/trending.svg"
      },
      {
        title: "Progress tracking",
        icon: "/svg/stack.svg"
      },
      {
        title: "Sprint planning",
        icon: "/svg/calendar.svg"
      },
      {
        title: "Forms",
        icon: "/svg/rocket.svg"
      },
    ],
    imagePreviewUrl: "/images/heroCardIt.webp",
    imageMainUrl: "/images/modalCardSoftwareDev.webp",
  },
  {
    title: "PRODUCT AND ISSUE TRACKING",
    subtitle: "Software Development",
    description: "Plan, track, release and support world-class software. Jira is the single source of truth for your entire development lifecycle.",
    posibilities: [
      {
        title: "Analytics",
        icon: "/svg/trending.svg"
      },
      {
        title: "Progress tracking",
        icon: "/svg/stack.svg"
      },
      {
        title: "Sprint planning",
        icon: "/svg/calendar.svg"
      },
      {
        title: "Forms",
        icon: "/svg/rocket.svg"
      },
    ],
    imagePreviewUrl: "/images/heroCardDesign.webp",
    imageMainUrl: "/images/modalCardSoftwareDev.webp",
  },
  {
    title: "PLAN AND LAUNCH CAMPAIGNS",
    subtitle: "Marketing",
    description: "Make launching viral marketing campaigns a breeze. Break down complex campaigns into actionable steps, easily collect requests, and stay aligned with cross-functional teams.",
    posibilities: [
      {
        title: "Calendar view",
        icon: "/svg/trending.svg"
      },
      {
        title: "Progress tracking",
        icon: "/svg/trending.svg"
      },
      {
        title: "Forms",
        icon: "/svg/trending.svg"
      },
      {
        title: "Reporting",
        icon: "/svg/trending.svg"
      },
    ],
    imagePreviewUrl: "/images/heroCardOps.webp",
    imageMainUrl: "/images/jira-card.webp",
  },
  {
    title: "PLAN AND TRACK IT PROJECTS",
    subtitle: "IT support services",
    description: "Streamline IT projects and deliver reliable services to internal teams, from migration management to software deployment. Gain visibility across IT workflows to align technology projects to business goals.",
    posibilities: [
      {
        title: "Intake requests",
        icon: "/svg/trending.svg"
      },
      {
        title: "Progress tracking",
        icon: "/svg/trending.svg"
      },
      {
        title: "Release management",
        icon: "/svg/trending.svg"
      },
      {
        title: "Reporting",
        icon: "/svg/trending.svg"
      },
    ],
    imagePreviewUrl: "/images/jira-card.webp",
    imageMainUrl: "/images/jira-card.webp",
  },
]

export const accordeonItems = [
  {
    title: "Plan and organize tasks",
    description: "From short projects, to large cross-functional programs, Jira helps break big ideas down into achievable steps. Organize work, create milestones, map dependencies and more.",
    imageUrl: "/images/new-collaborate-1.webp",
  },
  {
    title: "Align work to goals",
    description: "Link work to goals so everyone can see how their work contributes to company objectives and stay aligned to what’s important.",
    imageUrl: "/images/new-collaborate-2.webp",
  },
  {
    title: "Track work your way",
    description: "Visualize work with lists, boards, backlogs, and more. Make workflows for any process and integrate with tools you love.",
    imageUrl: "/images/new-collaborate-3.webp",
  },
  {
    title: "Optimize with insights",
    description: "Get visibility into project progress, understand risks, and surface insights from real-time data to help you improve team performance.",
    imageUrl: "/images/new-collaborate-4.webp",
  },
]

export const featureCards = [
  {
    title: "Everything in one place",
    subtitle: "The context you need, when you need it. See software team release dates, real-time views of Figma designs, and more, all inside Jira.",
    btnTitle: "Explore features",
    imageUrl: "/images/new-staggered-double-feature-2.webp",
  },
  {
    title: "Tailor it for your team",
    subtitle: "Configure Jira to match your team’s processes, workflows, language, and more. Integrate with every tool you use to get work done.",
    btnTitle: "Learn more",
  },
]

export const newFeatureCards = [
  {
    title: "Easily see every team’s progress",
    subtitle: "Track every team’s work in a single timeline. Understand progress, map dependencies, and stay ahead of risks.",
    imageUrl: "/images/new-double-feature-1.webp"
  },
  {
    title: "Map work to company impact",
    subtitle: "With goals in Jira, it’s easy to track all the tasks across projects that contribute to a goal, no matter what team is working on it.",
    imageUrl: "/images/new-double-feature-2.webp"
  },
]

export const sponsorsCards = [
  {
    imageUrl: "/svg/nasa.png",
    width: 220,
    height: 184,
    imageAlt: "nasa logo"
  },
  {
    imageUrl: "/svg/air-canada.png",
    width: 1024,
    height: 134,
    imageAlt: "air-canada logo"
  },
  {
    imageUrl: "/svg/canva.png",
    width: 640,
    height: 240,
    imageAlt: "canva logo"
  },
  {
    imageUrl: "/svg/domino's.png",
    width: 512,
    height: 515,
    imageAlt: "domino's logo"
  },
  {
    imageUrl: "/svg/ford.png",
    width: 1024,
    height: 384,
    imageAlt: "ford logo"
  },
  {
    imageUrl: "/svg/figma.png",
    width: 800,
    height: 1200,
    imageAlt: "figma logo"
  },
];

export const integraionCards = [
  {
    imageUrl: "/images/ms-teams.webp",
    width: 368,
    height: 303,
    imageAlt: "MsTeams"
  },
  {
    imageUrl: "/images/google-drive.webp",
    width: 245,
    height: 204,
    imageAlt: "Google Drive"
  },
  {
    imageUrl: "/images/google-docs.webp",
    width: 261,
    height: 216,
    imageAlt: "Google Docs"
  },
  {
    imageUrl: "/images/figma.webp",
    width: 155,
    height: 195,
    imageAlt: "Figma"
  },
  {
    imageUrl: "/images/miro.webp",
    width: 283,
    height: 245,
    imageAlt: "Miro"
  },
  {
    imageUrl: "/images/slack.webp",
    width: 217,
    height: 210,
    imageAlt: "Slack"
  },
  {
    imageUrl: "/images/zoom.webp",
    width: 306,
    height: 67,
    imageAlt: "Zoom"
  },
]

export const footerLinks = [
  {
    main: true,
    imageUrl: "/images/logo.webp",
    links: [
      {
        title: "Company",
        route: "https://www.atlassian.com/company"
      },
      {
        title: "Careers",
        route: "https://www.atlassian.com/company/careers"
      },
      {
        title: "Events",
        route: "https://www.atlassian.com/company/events"
      },
      {
        title: "Blogs",
        route: "https://www.atlassian.com/blog"
      },
      {
        title: "Investor Relations",
        route: "https://investors.atlassian.com/"
      },
      {
        title: "Atlassian Foundation",
        route: "https://www.atlassianfoundation.org/"
      },
      {
        title: "Contact us",
        route: "https://www.atlassian.com/company/contact"
      },
    ]
  },
  {
    title: "Products",
    mainLinkTitle: "See all products",
    mainLinkRoute: "/see-all-products",
    links: [
      {
        title: "Rovo",
        route: "/rovo"
      },
      {
        title: "Jira",
        route: "/rovo"
      },
      {
        title: "Jira Align",
        route: "/rovo"
      },
      {
        title: "Jira Service Management",
        route: "/rovo"
      },
      {
        title: "Confluence",
        route: "/rovo"
      },
      {
        title: "Trello",
        route: "/rovo"
      },
      {
        title: "Bitbucket",
        route: "/rovo"
      },
    ]
  },
  {
    title: "Resources",
    mainLinkTitle: "Create support ticket",
    mainLinkRoute: "/create-support-ticket",
    links: [
      {
        title: "Technical support",
        route: "/rovo"
      },
      {
        title: "Purchasing & licensing",
        route: "/rovo"
      },
      {
        title: "Atlassian Community",
        route: "/rovo"
      },
      {
        title: "Knowledge base",
        route: "/rovo"
      },
      {
        title: "Marketplace",
        route: "/rovo"
      },
      {
        title: "My account",
        route: "/rovo"
      },
    ]
  },
  {
    title: "Learn",
    mainLinkTitle: "See all resources",
    mainLinkRoute: "/create-support-ticket",
    links: [
      {
        title: "Partners",
        route: "/rovo"
      },
      {
        title: "Training & certification",
        route: "/rovo"
      },
      {
        title: "Documentation",
        route: "/rovo"
      },
      {
        title: "Developer resources",
        route: "/rovo"
      },
      {
        title: "Enterprise services",
        route: "/rovo"
      },
    ]
  },
]

export const footerCopyrightLink = [
  {
    title: "Privacy policy",
    route: "https://www.atlassian.com/legal/privacy-policy#what-this-policy-covers"
  },
  {
    title: "Terms",
    route: "https://www.atlassian.com/legal/atlassian-customer-agreement#intro"
  },
  {
    title: "Impressum",
    route: "https://www.atlassian.com/legal/impressum"
  },
]

export const searchSuggestionList = [
  {
    query: "Jira Products: Accomplish Great Work as a Team",
    route: "/jira-products",
  },
  {
    query: "Revolutionize IT Support with Jira Service Management",
    route: "/jira-revolutionize",
  },
  {
    query: "End Bad Service Management Now with Jira Service Management",
    route: "/jira-service-management",
  },
  {
    query: "A better developer experience starts with Jira",
    route: "/developer-experience",
  },
  {
    query: "Jira Service Management Cloud Enterprise",
    route: "/jira-service-management-cloud",
  },
  {
    query: "Jira Service Management for software development teams",
    route: "/jira-service-management-development-teams",
  },
  {
    query: "Unlock the Best Jira Pricing Plans for Your Team Today",
    route: "/jira-pricing",
  },
  {
    query: "Master Agile Project Management with Jira Software",
    route: "/jira-agile-project-management",
  },
  {
    query: "Jira Workflows: Optimize Your Team’s Efficiency",
    route: "/jira-workflows",
  },
  {
    query: "How to Use Jira for Sprint Planning and Execution",
    route: "/jira-sprint-planning",
  },
  {
    query: "Get Started with Jira: A Beginner’s Guide",
    route: "/jira-beginner-guide",
  },
  {
    query: "Jira for DevOps: Improve Your CI/CD Pipeline",
    route: "/jira-devops",
  },
  {
    query: "Jira Software vs. Jira Service Management: Key Differences",
    route: "/jira-software-vs-service-management",
  },
  {
    query: "Jira Security Best Practices for Enterprise Teams",
    route: "/jira-security-best-practices",
  },
  {
    query: "Jira Plugins and Add-ons: Must-Have Tools for Teams",
    route: "/jira-plugins",
  },
  {
    query: "Jira Roadmaps: Plan and Track Your Projects Effectively",
    route: "/jira-roadmaps",
  },
  {
    query: "Jira Reporting: How to Generate Insightful Reports",
    route: "/jira-reporting",
  },
  {
    query: "Boost Collaboration with Jira and Confluence Integration",
    route: "/jira-confluence-integration",
  },
  {
    query: "Jira Automation: Save Time with Smart Workflows",
    route: "/jira-automation",
  },
  {
    query: "How to Manage IT Service Requests Using Jira",
    route: "/jira-it-service-requests",
  }
];

export const workflowSidebarLinks = [
  {
    title: "Your work",
    ref: "your-work",
    icon: "/svg/recent.svg",
  },
  {
    title: "Recent",
    icon: "/svg/recent.svg",
    submenu: true,
  },
  {
    title: "Starred",
    icon: "/svg/recent.svg",
    submenu: true,
  },
  {
    title: "Apps",
    icon: "/svg/recent.svg",
    subnav: [
      {
        title: "Explore more apps",
        route: "explore-more-apps",
      },
    ],
  },
  {
    title: "Projects",
    icon: "/svg/recent.svg",
  },
  {
    title: "Filters",
    icon: "/svg/recent.svg",
    subnav: [
      {
        icon: "/svg/recent.svg",
        title: "Search issues",
        route: "search-issues",
      },
      {
        title: "Default filters",
        subnav: [
          {
            title: "My open issues",
          },
        ],
      },
    ],
  },
];

export const sidebarDropdown = [
  {
    mainTitle: 'Recent',
    itemIcon: '/svg/project.svg',
    itemRef: '/',
    itemTitle: 'Сервіс залізничної компанії',
    submenu: true,
  },
  {
    mainTitle: 'Recommended',
    itemIcon: '/svg/project.svg',
    itemRef: '/',
    itemTitle: 'Go-to-market sample',
  },
];

export const linksWithAdditionalInfo = [
  { icon: '/svg/recent.svg', title: 'Recent' },
  { icon: '/svg/star.svg', title: 'Starred' },
];

export const recentSidebarLinks = [
  {
    icon: '/svg/star.svg',
    title: 'Remove from starred'
  },
  {
    icon: '/svg/user.svg',
    title: 'Add people'
  },
  {
    icon: '/svg/settings.svg',
    title: 'Project settings'
  },
  {
    trash: true,
    icon: '/svg/trash.svg',
    title: 'Delete projects'
  },
];

export const sidebarExtraItems: SidebarExtraSubmenuType[] = [
  {
    represent: {
      title: 'Recent',
      icon: '/svg/recent.svg',
    },
    submenu: [
      {
        icon: '/svg/recent.svg',
        title: 'SCRUM board',
        route: '/scrum-board',
        time: '33 minutes ago'
      },
      {
        icon: '/svg/recent.svg',
        route: '/service-of-rails-company',
        title: 'Сервіс залізничної компанії',
        time: '36 minutes ago'
      },
    ],
    empty: {
      icon: '',
      title: 'You haven’t history yet',
      description: 'Navigate through site and you will see your recent activity.'
    }
  },
  {
    represent: {
      title: 'Starred',
      icon: '/svg/star.svg',
    },
    submenu: [],
    empty: {
      icon: '/svg/starred.svg',
      title: 'You haven’t starred anything yet',
      description: 'Mark items that are important to you with a star to quickly access them. You’ll see those items here.'
    }
  }
]

export const users = [
  {
    color: 'red',
    fullName: 'Drobidko Vladyslav Anatoliyovich'
  },
  {
    color: 'blue',
    fullName: 'Donald Knuth'
  },
  {
    color: 'yellow',
    fullName: 'Gang Of Four'
  },
];

export const timelineDropdownItems = [
  {
    title: 'Epic',
    className: 'max-sm:hidden',
    items: [
      { id: 'vision', title: 'Vision/Scope, business requirements' },
      { id: 'scope', title: 'Make user stories' },
      { id: 'backlog', title: 'Write backlog' }
    ]
  },
  {
    title: 'Type',
    className: 'max-lg:hidden',
    items: [
      { id: 'review', title: 'Review', icon: '/svg/review.svg', filter: "invert(55%) sepia(95%) saturate(5000%) hue-rotate(15deg) brightness(100%) contrast(90%)" },
      { id: 'story', title: 'Story', icon: '/svg/bookmark.svg', filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)" },
      { id: 'task', title: 'Task', icon: '/svg/checkbox.svg', filter: "invert(58%) sepia(71%) saturate(5949%) hue-rotate(205deg) brightness(103%) contrast(93%)" }
    ]
  },
  {
    title: 'Status Category',
    className: 'max-xl:hidden',
    items: [
      { id: 'todo', title: 'To Do' },
      { id: 'in-progress', title: 'In Progres' },
      { id: 'done', title: 'Done' }
    ]
  },
]

export const timelineActionItems = [
  {
    icon: "/svg/upload.svg",
    tooltipText: "Export",
    tooltipSide: "bottom"
  },
  {
    icon: "/svg/adjusment.svg",
    tooltipText: "View Settings",
    tooltipSide: "bottom"
  },
  {
    icon: "/svg/more.svg",
    tooltipText: "More actions",
    tooltipSide: "bottom"
  },
]

export const navbarItems = [
  { 
    icon: '/svg/bell.svg', 
    title: "notification" 
  }, 
  { 
    icon: '/svg/help.svg', 
    title: "help" 
  }, 
  { 
    icon: '/svg/settings.svg', 
    title: "settings" 
  }
];


export const tabsLinks = [
  { 
    icon: '/svg/globe.svg', 
    title: 'Summary', 
    route: '/projects'
  }, 
  {
    icon: '/svg/recent.svg', 
    title: 'Timeline', 
    route: '/timeline'
  }, 
  { 
    icon: '/svg/backlog.svg', 
    title: 'Backlog', 
    route: '/backlog'
  },
  { 
    icon: '/svg/stack.svg', 
    title: 'Board', 
    route: '/board'
  },
  { 
    icon: '/svg/calendar.svg', 
    title: 'Calendar', 
    route: '/calendar'
  },
  { 
    icon: '/svg/trending.svg', 
    title: 'Reports', 
    route: '/reports'
  },
  { 
    icon: '/svg/aim.svg', 
    title: 'Goals', 
    route: '/goals'
  },
];

export const projectsInfo = [
  {
    icon: '/svg/checkbox.svg',
    title: '0 Completed',
    timeDescription: 'in the last 7 days'
  },
  {
    icon: '/svg/adjusment.svg',
    title: '0 Updated',
    timeDescription: 'in the last 7 days'
  },
  {
    icon: '/svg/squares.svg',
    title: '0 Created',
    timeDescription: 'in the last 7 days'
  },
  {
    icon: '/svg/calendar.svg',
    title: '0 due soon',
    timeDescription: 'in the last 7 days'
  },
];

export const overviewList = [
  {
    color: 'blue',
    title: 'Future Spints'
  },
  {
    color: 'orange',
    title: 'To Do'
  },
  {
    color: 'red',
    title: 'Awaits Review'
  },
  {
    color: 'green',
    title: 'In Progress'
  },
  {
    color: 'blue',
    title: 'Done'
  },
  {
    color: 'yellow',
    title: 'Cancelled'
  },
]

export const teamWorkloadLinks = [
  {
    title: 'Unassigned',
    ref: '/projects',
    icon: '/svg/user.svg',
    filter: ''
  },
]



export const timelineGroups = [
  {
    id: 0, 
    title: '' 
  },
  { 
    id: 1,
    title: 'Vision/Scope, бізнес-вимоги та користувацькі історії' 
  }, 
  {
    id: 2, 
    title: 'Обробити користувацькі історії' 
  },
  {
    id: 3, 
    title: 'Сформувати список функцій, характеристик та/або вимог до продукту' 
  },
  {
    id: 4, 
    title: 'Сформувати базові варіанти використання' 
  },
  {
    id: 5, 
    title: 'Матриці перекриття конфліктів' 
  },
];

export const itemsOnTimeline = [
  {
    id: 1,
    group: 1,
    title: 'something',
    start_time: moment(),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'something',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(1.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'something',
    start_time: moment().add(9, 'hour'),
    end_time: moment().add(12, 'hour')
  },
  {
    id: 4,
    group: 4,
    title: 'something',
    start_time: moment().add(3, 'hour'),
    end_time: moment().add(5, 'hour')
  },
  {
    id: 5,
    group: 1,
    title: 'something',
    start_time: moment().add(9, 'hour'),
    end_time: moment().add(12, 'hour')
  },
];

export const boardCards = [
  {
    title: "To Do",
    isDone: false,
  },
  {
    title: "In Progress",
    isDone: false,
  },
  {
    title: "Name",
    isDone: true
  },
]

type TimeRangeOption = {
  title: string;
  changeOption: "day" | "week" | "month" | "year";
};


export const timeRangeOptions: TimeRangeOption[] =  [
  {
    title: "Today",
    changeOption: "day",
  },
  {
    title: "Week",
    changeOption: "week",
  },
  {
    title: "Month",
    changeOption: "month",
  },
  {
    title: "Year",
    changeOption: "year",
  },
]

export const backlogIssuesInitial = [
  {
    type: "Story",
    icon: "/svg/bookmark.svg",
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)",
    id: "ASDF-1",
    issuesText: "LKJADLKFJ",
    status: "In progress",
    storyPoints: "0",
    assignedTo: [
      {
        fullName: "Drobidko Vladyslav Anatoliyovich",
        color: "red",
      },
      {
        fullName: "Donald Knuth",
        color: "blue",
      }
    ]
  },
  {
    type: "Bug",
    icon: "/svg/bug.svg",
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)",
    id: "ASDF-2",
    issuesText: "aLKJFDLKj",
    status: "To do",
    storyPoints: "555",
    assignedTo: [
      {
        fullName: "Drobidko Vladyslav Anatoliyovich",
        color: "blue",
      }
    ]
  },
]

type StatusDropdown = {
  status: string;
}

export const issuesStatusDropdownList: StatusDropdown[] = [
  {
    status: "Done"
  },
  {
    status: "In Progress"
  },
  {
    status: "To Do"
  },
  {
    status: "Review"
  },
]


export const issues = [
  {
    title: "Story",
    icon: "/svg/bookmark.svg",
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)"
  },
   {
    title: "Bug",
    icon: "/svg/bug.svg",
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)"
  },
]



export const typesOfWorkLinks = [
  {
    title: 'Epic',
    ref: '/epic',
    icon: '/svg/bolt.svg',
    filter: 'invert(20%) sepia(90%) saturate(5000%) hue-rotate(250deg) brightness(100%) contrast(90%)'
  },
  {
    title: 'Task',
    ref: '/task',
    icon: '/svg/checkbox.svg',
    filter: "invert(58%) sepia(71%) saturate(5949%) hue-rotate(205deg) brightness(103%) contrast(93%)"
  },
  {
    title: 'Bug',
    ref: '/bug',
    icon: '/svg/bug.svg',
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)"
  },
  {
    title: 'Review',
    ref: '/review',
    icon: '/svg/review.svg',
    filter: "invert(55%) sepia(95%) saturate(5000%) hue-rotate(15deg) brightness(100%) contrast(90%)"
  },
  {
    title: 'Story',
    ref: '/story',
    icon: '/svg/bookmark.svg',
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)"
  },
]
