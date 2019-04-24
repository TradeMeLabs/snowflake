// @flow
import * as d3 from 'd3'

export type TrackId = 'TOOLS' | 'STORYTELLING' | 'ANALYTICAL_APPLICATION' | 'BUSINESS_KNOWLEDGE' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'TOOLS': Milestone,
  'STORYTELLING': Milestone,
  'ANALYTICAL_APPLICATION': Milestone,
  'BUSINESS_KNOWLEDGE': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'TOOLS': Track,
  'STORYTELLING': Track,
  'ANALYTICAL_APPLICATION': Track,
  'BUSINESS_KNOWLEDGE': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
    "STORYTELLING": {
        "description": "Develops expertise in sharing insights through written or verbal communication and visual design, and through dashboards and reports.",
        "category": "A",
        "milestones": [
            {
                "summary": "Identifies key takeaways for stakeholders and communicates at the correct level for their audience.",
                "examples": [
                    "Wrote up the results their work to contribute to other analysts' work.",
                    "Used the correct chart to visualise data",
                    "Summarised information in a chart or dashboard to provide an update to a decisionmaker."
                ],
                "signals": [
                    "Provides plain-language summary of analysis results",
                    "Chooses appropriate methods for visualising/conveying data.",
                    "Can explain and justify their analytic approach to peers."
                ]
            },
            {
                "summary": "Assists stakeholders with decisionmaking by providing tools and guidance appropriate to the problem.",
                "examples": [
                    "Explained the results of an A/B Test to the product owner, and provided options for further investigation.",
                    "Sat down with users of a dashboard to talk them through its use.",
                    ""
                ],
                "signals": [
                    "Provides guidance on interpreting the results of their analysis.",
                    "Shapes the style of their delivery to fit the audience.",
                    "Contributes to discussions of peers' research"
                ]
            },
            {
                "summary": "Present results of research to internal stakeholders at an appropriate level, influencing strategic decisionmaking.",
                "examples": [
                    "Built a dashboard that showed ongoing results and could be understood without verbal guidance",
                    "Gave a presentation to the whole company on the results of some research.",
                    "Contributed calculations and assumptions on likely reach and impact of product ideas to strategic planners."
                ],
                "signals": [
                    "Demonstrates implications of research for the organisation's broader strategic direction.",
                    "Takes opporunities to share the experiences within the organisation.",
                    ""
                ]
            },
            {
                "summary": "Represents the organisation externally on topics related to their discipline.",
                "examples": [
                    "Published a public-facing blog post on research outcomes",
                    "Spoke at a conference relevant to discipline",
                    ""
                ],
                "signals": [
                    "Contributes to an internal culture of data-driven decisionmaking",
                    "Able to field questions from a diverse audience.",
                    ""
                ]
            },
            {
                "summary": "As a leader communicates complex ideas effectively across all levels and disciplines internally and externally",
                "examples": [
                    "Presenting to the board on the strategic direction",
                    "Keynote speaker at an analytics conference",
                    "Featured in a blog with international reach"
                ],
                "signals": [
                    "Initiates conversations about strategic direction",
                    "",
                    ""
                ]
            }
        ],
        "displayName": "Storytelling"
    }

,

    "BUSINESS_KNOWLEDGE": {
        "description": "Turning business problems into questions that can be answered with data, problem-solving stakeholder needs.",
        "category": "A",
        "milestones": [
            {
                "summary": "Uses appropriate available data to answer stakeholder questions",
                "examples": [
                    "Used Google Analytics to report on changes in user numbers over time.",
                    "Used data from the user database to provide summary stats on user ages, tenure, etc.",
                    ""
                ],
                "signals": [
                    "Asks questions to establish a clear understanding of stakeholder needs",
                    "Familiar with some of the main sources of data for the organisation",
                    ""
                ]
            },
            {
                "summary": "Works with stakeholders to shape questions to fit available data.",
                "examples": [
                    "Worked with stakeholder to find correct dimensions by which to segment users.",
                    "Explained the consequences for the product of using a particular algorithmm.",
                    "Explained the difference between Unique Browsers and Page views, and suggested the appropriate measure to use for this question."
                ],
                "signals": [
                    "Suggests \"proxy\" measures that to substitute for unavailable data.",
                    "Understands strengths and weaknesses of various data sources",
                    "Can explain how data in the database is generated by front-end processes"
                ]
            },
            {
                "summary": "Works with the business to expand the scope of available data, and to define measures for business outcomes.",
                "examples": [
                    "Collated data from a new or unstructured data source to understand complex user behaviour",
                    "",
                    ""
                ],
                "signals": [
                    "Provide inisights by working with other stakeholders to better define appropriate measures ",
                    "Helps to define measures to better understand business performance",
                    ""
                ]
            },
            {
                "summary": "Helps the business to identify and define business problems, and leads research of these problems",
                "examples": [
                    "Identified that the business is affected by weather, and lead research to measure this.",
                    "",
                    ""
                ],
                "signals": [
                    "Proactively identifies research topics.",
                    "Constructively challenges existing analysis with appropriate justification.",
                    ""
                ]
            },
            {
                "summary": "Identifies new opportunities to expand the solutions the business can tackle",
                "examples": [
                    "Identifies a new market segment by using new technology",
                    "Build a new data warehouse / graph database to identify new business opportunities",
                    ""
                ],
                "signals": [
                    "Indentifies new business opportunities.",
                    "",
                    ""
                ]
            }
        ],
        "displayName": "Business Knowledge"
    }

,

    "ANALYTICAL_APPLICATION": {
        "description": "Develops expertise in common analytical approaches, such as statistical analysis, charting, networks, model building. Systematic and rigorous application of these.",
        "category": "A",
        "milestones": [
            {
                "summary": "Uses appropriate established techniques to solve problems, and documents their work adequately.",
                "examples": [
                    "Sought guidance on the correct technique to solve a given problem",
                    "Set up an A/B test using the A/B testing framework",
                    ""
                ],
                "signals": [
                    "Code used for analysis can be shared, and results are reproducable.",
                    "Generates effective descriptive statistics on data",
                    "Sanity-checks results with domain experts, Seeks peer review for their work."
                ]
            },
            {
                "summary": "Adapts established techniques to novel circumstances or makes minor improvements to existing processes.",
                "examples": [
                    "Selected the correct significance test to measure the results of an A/B Test",
                    "",
                    ""
                ],
                "signals": [
                    "Documents the reasons for their chosen analytic approach.",
                    "Validates analysis by comparison with other data sources",
                    "Examines assumptions and tests these with data"
                ]
            },
            {
                "summary": "Researches and applies techniques from the wider discipline, and documents their approach to allow others to replicate.",
                "examples": [
                    "Developed an effective metric for measuring the effectiveness of customer segmentation",
                    "Designed an effective significance testing approach for a difficult context, and documented this approach so other analysts could use it.",
                    ""
                ],
                "signals": [
                    "Investigates alernative techniques and compares multiple solutions to solve a problem",
                    "Looking for opportunities to peer reviews others work.",
                    ""
                ]
            },
            {
                "summary": "Develops novel techniques or designs innovative solutions to solve business problems, with rigorous documentation demonstrating benefits or broader applications.",
                "examples": [
                    "Developed a custom solution for measuring ROI of marketing campaigns",
                    "Finds word2vec is a good fit for synomyn detection and develops a novel technique for achieving this",
                    ""
                ],
                "signals": [
                    "Work references wider research in the discipline",
                    "Adapts techniques to fit in new contexts",
                    "Sets up a peer review process for research work."
                ]
            },
            {
                "summary": "Publishes contributions of broader significance to the discipline.",
                "examples": [
                    "Published open source package used widely in the discipline",
                    "Presented a paper that has undergone significant peer review",
                    ""
                ],
                "signals": [
                    "Work draws on leading-edge research",
                    "Invents industry-leading techniques to solve complex problems.",
                    ""
                ]
            }
        ],
        "displayName": "Analytical Application"
    }

,

    "TOOLS": {
        "description": "Develops expertise in core analytics tools, such as SQL, Python, or R.",
        "category": "A",
        "milestones": [
            {
                "summary": "Works effectively within established structures, following current best practices",
                "examples": [
                    "Created a report in Tableau or Power BI",
                    "Loaded data for basic manipulation using R or Python",
                    "Wrote a SQL query joining several tables to provide an accurate result"
                ],
                "signals": [
                    "Code follows appropriate best-practice for style, linting etc.",
                    "Participates in peer-review of code.",
                    ""
                ]
            },
            {
                "summary": "Develops new applications of existing tools or expands scope of existing architecture.",
                "examples": [
                    "Created a SQL stored procedure",
                    "Created a Python module",
                    ""
                ],
                "signals": [
                    "Chooses the appropriate tool for a given problem",
                    "Can explain their choice of design pattern in developing software",
                    "Software is generaliseable where appropriate"
                ]
            },
            {
                "summary": "Contributes to establishing organisational best-practice, builds standalone data products or processes for internal use.",
                "examples": [
                    "Wrote a python module that is used by other analysts",
                    "Set the standards for GA loggging",
                    ""
                ],
                "signals": [
                    "Acts as primary maintainer for existing critical systems\n",
                    "Builds data sources that meet the needs of a broad range of internal users",
                    ""
                ]
            },
            {
                "summary": "Develops internal tools for data processes, pioneering best-practice for other analysts.",
                "examples": [
                    "Contributed to an open source library",
                    "Built an ETL process for cloud data lake",
                    "Architect of an A/B framework"
                ],
                "signals": [
                    "Makes appropriate buy vs build choices\n",
                    "Writes the documentation for best practice.",
                    ""
                ]
            },
            {
                "summary": "Is an industry-level expert in one or more tools, sets strategic data platform direction for analytics team.",
                "examples": [
                    "Microsoft MVP Status",
                    "",
                    ""
                ],
                "signals": [
                    "Designs tools that are widely used across the industry.",
                    "Identifies and solves systemic problems with current architecture\n",
                    ""
                ]
            }
        ],
        "displayName": "Tools"
    }

,

    "CRAFT": {
        "description": "Embodies and promotes practices to ensure excellent quality products and services",
        "category": "B",
        "milestones": [
            {
                "summary": "Delivers consistently good quality work",
                "examples": [
                    "Caught a bug on Hatch before it went live",
                    "Landed non-trivial PR with no caretaker comments",
                    "Wrote hermetic tests for the happy and sad cases"
                ],
                "signals": [
                    "Tests new code thoroughly, both locally, and in production once shipped",
                    "Writes tests for every new feature and bug fix",
                    "Writes clear comments and documentation"
                ]
            },
            {
                "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
                "examples": [
                    "Requested tests for a PR when acting as reviewer",
                    "Reduced the number of zelda fitzgerald exceptions",
                    "Fixed a TODO for someone else in the codebase"
                ],
                "signals": [
                    "Refactors existing code to make it more testable",
                    "Adds tests for uncovered areas",
                    "Deletes unnecessary code and deprecates proactively when safe to do so"
                ]
            },
            {
                "summary": "Improves others' ability to deliver great quality work",
                "examples": [
                    "Improved PRB to run the same volume of tests faster",
                    "Simplified hermetic test data modification",
                    "Created fixture system for visual quality"
                ],
                "signals": [
                    "Implements systems that enable better testing",
                    "Gives thoughtful code reviews as a domain expert",
                    "Adds tooling to improve code quality"
                ]
            },
            {
                "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
                "examples": [
                    "Added code coverage reporting to iOS CI pipeline",
                    "Iterated repeatedly to develop Medium's underlines solution",
                    "Defined and oversaw plan for closing Heartbleed vulnerability"
                ],
                "signals": [
                    "Builds systems so as to eliminate entire classes of programmer error",
                    "Focuses the team on quality with regular reminders",
                    "Coordinates Watch priorities and projects"
                ]
            },
            {
                "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
                "examples": [
                    "Negotiated resources for Fix-It week with exec team",
                    "Instituted and ensured success of a 20% time policy",
                    "Started The Watch"
                ],
                "signals": [
                    "Defines policies for the engineering org that encourage quality work",
                    "Identifies and eliminates single points of failure throughout the organization",
                    "Secures time and resources from execs to support great quality"
                ]
            }
        ],
        "displayName": "Craft"
    }

,

    "INITIATIVE": {
        "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
        "category": "B",
        "milestones": [
            {
                "summary": "Identifies opportunities for organizational change or product improvements",
                "examples": [
                    "Wrote about problems with TTR on Hatch",
                    "Wrote about content policy problems on Hatch",
                    "Reported a site issue in Github"
                ],
                "signals": [
                    "Writes Hatch posts about improvement opportunities",
                    "Raises meaningful tensions in tactical meetings",
                    "Asks leadership team probing questions at FAM"
                ]
            },
            {
                "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
                "examples": [
                    "Advocated on own behalf for a change in role",
                    "Implemented flow typing for promises",
                    "Audited web client performance in Chrome and proposed fixes"
                ],
                "signals": [
                    "Picks bugs off the backlog proactively when blocked elsewhere",
                    "Makes design quality improvements unprompted",
                    "Takes on trust and safety tasks proactively when blocked elsewhere"
                ]
            },
            {
                "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
                "examples": [
                    "Defined style guide to resolve style arguments",
                    "Proposed and implemented at-mentions prototype",
                    "Implemented video for Android independently, unprompted"
                ],
                "signals": [
                    "Demonstrates concepts proactively with prototypes",
                    "Fixes complicated bugs outside of regular domain",
                    "Takes ownership of systems that nobody owns or wants"
                ]
            },
            {
                "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
                "examples": [
                    "Created the interviewing rubric and booklet",
                    "Implemented and secured support for native login",
                    "Migrated medium2 to mono repo and bazel"
                ],
                "signals": [
                    "Champions and pioneers new technologies to solve new classes of problem",
                    "Exemplifies grit and determination in the face of persistent obstacles",
                    "Instigates major new features, services, or architectures"
                ]
            },
            {
                "summary": "Effects change that has a substantial positive impact on the whole company",
                "examples": [
                    "Migrated the organization from Holacracy",
                    "Built Medium Android prototype and convinced execs to fund it",
                    "Convinced leadership and engineering org to move to Medium Lite architecture"
                ],
                "signals": [
                    "Creates a new function to solve systemic issues",
                    "Galvanizes the entire company and garners buy in for a new strategy",
                    "Changes complex organizational processes"
                ]
            }
        ],
        "displayName": "Initiative"
    }

,

    "PROJECT_MANAGEMENT": {
        "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
        "category": "B",
        "milestones": [
            {
                "summary": "Effectively delivers individual tasks",
                "examples": [
                    "Wrote the technical spec for featured post images",
                    "Delivered stream item support for email digests",
                    "Delivered payment history dashboard"
                ],
                "signals": [
                    "Estimates small tasks accurately",
                    "Delivers tightly-scoped projects efficiently",
                    "Writes effective technical specs outlining approach"
                ]
            },
            {
                "summary": "Effectively delivers small personal projects",
                "examples": [
                    "Delivered promo editor",
                    "Delivered audio uploading for web client",
                    "Executed the recommends to claps backfill"
                ],
                "signals": [
                    "Performs research and considers alternative approaches",
                    "Balances pragmatism and polish appropriately",
                    "Defines and hits interim milestones"
                ]
            },
            {
                "summary": "Effectively delivers projects through a small team",
                "examples": [
                    "Ran project retro to assess improvement opportunities",
                    "Completed launch checklist unprompted for well controlled rollout",
                    "Facilitated project kickoff meeting to get buy-in"
                ],
                "signals": [
                    "Delegates tasks to others appropriately",
                    "Integrates business needs into project planning",
                    "Chooses appropriate project management strategy based on context"
                ]
            },
            {
                "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
                "examples": [
                    "Oversaw technical delivery of Hightower",
                    "Managed infrastructure migration to VPC",
                    "Involved marketing, legal, and appropriate functions at project start"
                ],
                "signals": [
                    "Finds ways to deliver requested scope faster, and prioritizes backlog",
                    "Manages dependencies on other projects and teams",
                    "Leverages recognition of repeated project patterns"
                ]
            },
            {
                "summary": "Manages major company pushes delivered by multiple teams",
                "examples": [
                    "Managed technical migration to SOA",
                    "Lead technical delivery of 10/7",
                    "Delivered multi-month engineering project on time"
                ],
                "signals": [
                    "Considers external constraints and business objectives when planning",
                    "Leads teams of teams, and coordinates effective cross-functional collaboration",
                    "Owns a key company metric"
                ]
            }
        ],
        "displayName": "Project management"
    }

,

    "COMMUNICATION": {
        "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
        "category": "B",
        "milestones": [
            {
                "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
                "examples": [
                    "Updated The Watch before running a backfill",
                    "Updated project status changes in Asana promptly",
                    "Gave thoughtful check-in and check-out comments"
                ],
                "signals": [
                    "Communicates project status clearly and effectively",
                    "Collaborates with others with empathy",
                    "Asks for help at the appropriate juncture"
                ]
            },
            {
                "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
                "examples": [
                    "Received and integrated critical feedback positively",
                    "Created cross-team Slack channel for payments work",
                    "Spoke to domain experts before writing spec"
                ],
                "signals": [
                    "Practises active listening and suspension of attention",
                    "Ensures stakeholders are aware of current blockers",
                    "Chooses the appropriate tools for accurate and timely communication"
                ]
            },
            {
                "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
                "examples": [
                    "Directed team response effectively during outages",
                    "Gave a substantial Eng All Hands presentation on React",
                    "Gave notice of upcoming related work in Eng Briefing"
                ],
                "signals": [
                    "Resolves communication difficulties between others",
                    "Anticipates and shares schedule deviations in plenty of time",
                    "Manages project stakeholder expectations effectively"
                ]
            },
            {
                "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
                "examples": [
                    "Lead off-site workshop on interviewing",
                    "Wrote Medium's growth framework and rationale",
                    "Aligned the entire organization around claps"
                ],
                "signals": [
                    "Communicates project risk and tradeoffs skillfully and with nuance",
                    "Contextualizes and clarifies ambiguous direction and strategy for others",
                    "Negotiates resourcing compromises with other teams"
                ]
            },
            {
                "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
                "examples": [
                    "Organized half year check-in company offsite",
                    "Created the communication plan for a large organizational change",
                    "Presented to the board about key company metrics and projects"
                ],
                "signals": [
                    "Defines processes for clear communication for the entire team",
                    "Shares the right amount of information with the right people, at the right time",
                    "Develops and delivers plans to execs, the board, and outside investors"
                ]
            }
        ],
        "displayName": "Communication"
    }

,

    "WELLBEING": {
        "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
        "category": "C",
        "milestones": [
            {
                "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
                "examples": [
                    "Ensured group members were taking enough vacation",
                    "Put themself in another's shoes to understand their perspective",
                    "Checked in with colleague showing signs of burnout"
                ],
                "signals": [
                    "Keeps confidences unless legally or morally obliged to do otherwise",
                    "Applies the reasonable person principle to others",
                    "Avoids blame and focuses on positive change"
                ]
            },
            {
                "summary": "Creates a positive, supportive, engaging team environment for group members",
                "examples": [
                    "Coordinated a small celebration for a project launch",
                    "Connected tedious A|B testing project with overall company goals",
                    "Noted a team without a recent win and suggested some easy quick wins"
                ],
                "signals": [
                    "Sheds light on other experiences to build empathy and compassion",
                    "Validates ongoing work and sustains motivation",
                    "Proposes solutions when teams get bogged down or lose momentum"
                ]
            },
            {
                "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
                "examples": [
                    "Completed training on transference and counter transference",
                    "Completed training on compromise and negotiation techniques",
                    "Reframed a problem as a challenge, instead of a barrier, when appropriate"
                ],
                "signals": [
                    "Trains group members to separate stimulus from response",
                    "Maintains a pulse on individual and team morale",
                    "Helps group members approach problems with curiosity"
                ]
            },
            {
                "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
                "examples": [
                    "Relieved org tension around product direction by providing extra context",
                    "Encouraged group members to focus on what they can control",
                    "Guided people through complex organizational change"
                ],
                "signals": [
                    "Ensures team environments are safe and inclusive, proactively",
                    "Grounds group member anxieties in reality",
                    "Tracks team retention actively and proposes solutions to strengthen it"
                ]
            },
            {
                "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
                "examples": [
                    "Converted group member from a problem haver to a problem solver",
                    "Challenged false narrative and redirected to compassion and empathy",
                    "Cultivated and championed a culture of empathy within the entire team"
                ],
                "signals": [
                    "Recognizes and points out narratives when appropriate",
                    "Works to reshape narratives from victimization to ownership",
                    "Increases the psychological safety of the entire team"
                ]
            }
        ],
        "displayName": "Wellbeing"
    }

,

    "CAREER_DEVELOPMENT": {
        "description": "Provides strategic support to engineers to help them build the career they want",
        "category": "C",
        "milestones": [
            {
                "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
                "examples": [
                    "Collected and delivered feedback",
                    "Discussed career options and areas of interest informally",
                    "Hosted a Floodgate Academy intern"
                ],
                "signals": [
                    "Advocates on behalf and in defense of a group member",
                    "Shares opportunities for improvements and recognises achievements",
                    "Explains appropriate available industry paths"
                ]
            },
            {
                "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
                "examples": [
                    "Set up and attended regular, constructive 1:1s",
                    "Provided coaching on how to have difficult conversations",
                    "Taught group members the GROW model"
                ],
                "signals": [
                    "Ensure a group member has an appropriate role on their team",
                    "Offers effective career advice to group members, without being prescriptive",
                    "Creates space for people to talk through challenges"
                ]
            },
            {
                "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
                "examples": [
                    "Reviewed individual group member progression every 6 weeks",
                    "Suggested appropriate group member for Tech Lead position",
                    "Arranged a requested switch of discipline for a group member"
                ],
                "signals": [
                    "Discusses paths, and creates plans for personal and professional growth",
                    "Advocates to align people with appropriate roles within organization",
                    "Works with team leads to elevate emerging leaders"
                ]
            },
            {
                "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
                "examples": [
                    "Completed training on situational leadership",
                    "Built a resourcing plan based on company, team, and individual goals",
                    "Prevented regretted attrition with intentional, targeted intervention"
                ],
                "signals": [
                    "Manages team transitions smoothly, respecting team and individual needs",
                    "Develops best practices for conflict resolution",
                    "Ensures all group members' roles are meeting their career needs"
                ]
            },
            {
                "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
                "examples": [
                    "Provided coaching to group leads",
                    "Devised Pathwise curriculum for group leads",
                    "Advocated to execs for engineer development resources and programs"
                ],
                "signals": [
                    "Supports and develops senior leaders",
                    "Identified leadership training opportunities for senior leadership",
                    "Pushes everyone to be as good as they can be, with empathy"
                ]
            }
        ],
        "displayName": "Career development"
    }

,

    "ORG_DESIGN": {
        "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
        "category": "C",
        "milestones": [
            {
                "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
                "examples": [
                    "Facilitated effective tactical meeting with empathy",
                    "Explained tactical meeting format to a new hire",
                    "Provided feedback on sprint planning meeting"
                ],
                "signals": [
                    "Reflects on meetings that leave them inspired or frustrated",
                    "Teaches others about existing processes",
                    "Actively participates and makes contributions within organizational processes"
                ]
            },
            {
                "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
                "examples": [
                    "Defined Frankenmeeting structure for small team",
                    "Improved Watch on-call rotation scheduling",
                    "Defined standard channels for inter-team communication"
                ],
                "signals": [
                    "Defines meeting structure and cadence that meets team needs",
                    "Engages in organizational systems thinking",
                    "Advocates for improved diversity and inclusion, and proposes ideas to help"
                ]
            },
            {
                "summary": "Develops processes to solve ongoing organizational problems",
                "examples": [
                    "Developed baseline team templates for consistency",
                    "Created bug-rotation program to address ongoing quality issues",
                    "Defined Guilds manifesto and charter"
                ],
                "signals": [
                    "Creates programs that meaningfully improve organizational diversity",
                    "Solves long-standing organizational problems",
                    "Reallocates resources to meet organizational needs"
                ]
            },
            {
                "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
                "examples": [
                    "Connected mobile recruiting difficulties to focus on excellence",
                    "Raised leadership level change discrepancies",
                    "Analyzed the hiring rubric for false negative potential"
                ],
                "signals": [
                    "Evaluates incentive structures and their effect on execution",
                    "Analyzes existing processes for bias and shortfall",
                    "Ties abstract concerns to concrete organizational actions or norms"
                ]
            },
            {
                "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
                "examples": [
                    "Lead efforts to increase number of mobile engineers",
                    "Directed resources to meaningfully improve diversity at all levels",
                    "Built the growth framework rubric"
                ],
                "signals": [
                    "Builds programs to train leadership in desired skills",
                    "Creates new structures that provide unique growth opportunities",
                    "Leads planning and communication for reorgs"
                ]
            }
        ],
        "displayName": "Org design"
    }

,

    "ACCOMPLISHMENT": {
        "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
        "category": "C",
        "milestones": [
            {
                "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
                "examples": [
                    "Completed training on diagnosing problems",
                    "Unblocked a group member",
                    "Reinforces and affirms positive feedback for good work"
                ],
                "signals": [
                    "Notices when someone is stuck and reaches out",
                    "Helps others break down problems into feasible, tangible next steps",
                    "Talks through problems non-judgmentally"
                ]
            },
            {
                "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
                "examples": [
                    "Completed training on decision making",
                    "Convinced a group member to solve a problem directly, rather than doing it for them",
                    "Gave honest feedback about poor performance, with compassion"
                ],
                "signals": [
                    "Gathers context outside the immediate problem",
                    "Recognizes issues within local environment and suggests change",
                    "Works to encourage ownership of actions and responsibilities"
                ]
            },
            {
                "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
                "examples": [
                    "Worked with group member to address persistent communication failures",
                    "Arranged a transfer to another team, resulting in improved performance",
                    "Managed group member closely to maximise chances of PIP success"
                ],
                "signals": [
                    "Aggregates signals of poor performance and creates process for improvement",
                    "Investigates motivation and externalities for consistent poor performance",
                    "Puts together comprehensive, achievable performance plans"
                ]
            },
            {
                "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
                "examples": [
                    "Empowered a team to drive forward amidst uncertainty",
                    "Protected team from externalities so they could focus on goals",
                    "Mediated sit-down between team members to address tension"
                ],
                "signals": [
                    "Recognizes heightened situations and toxic or aggressive interactions",
                    "Inserts themself into conflict where appropriate to calm and mediate",
                    "Encourages open dialog and builds trust between parties in conflict"
                ]
            },
            {
                "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
                "examples": [
                    "Turned around the performance of a problematic team",
                    "De-escalated serious tensions between teams",
                    "Rebuilt trust between senior team leads"
                ],
                "signals": [
                    "Takes control of dysfunctional teams to organise chaos",
                    "Repairs broken team dynamics and builds harmony",
                    "Presides over a well-oiled team of teams"
                ]
            }
        ],
        "displayName": "Accomplishment"
    }

,

    "COMMUNITY": {
        "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
        "category": "D",
        "milestones": [
            {
                "summary": "Is available and present on current teams, and works to contribute positively to company culture",
                "examples": [
                    "Joined and actively participated in the web client guild",
                    "Brought a small gift back from vacation for the team",
                    "Wrote entertaining and informative Prod Ops writeups on Hatch"
                ],
                "signals": [
                    "Participates in team activities and offsites",
                    "Treats colleagues and clients with respect",
                    "Joins groups or committees outside regular duties"
                ]
            },
            {
                "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
                "examples": [
                    "Created onboarding bingo",
                    "Brought shy and introverted people into a dominant conversation",
                    "Volunteered as secretary for a team"
                ],
                "signals": [
                    "Makes space for others to participate",
                    "Collaborates with other engineers outside direct responsibilities",
                    "Finds ways to ramp up and engage new hires quickly"
                ]
            },
            {
                "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
                "examples": [
                    "Lead Watch cycles with little support while still contributing to projects",
                    "Started and drove the LGBTQIA ERG",
                    "Stayed positive and improved team morale during period after layoffs"
                ],
                "signals": [
                    "Takes on additional Watch shifts at short notice",
                    "Pitches in to help other teams hit deadlines, without missing own deadlines",
                    "Uses position to raise difficult issues on someone's behalf"
                ]
            },
            {
                "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
                "examples": [
                    "Devoted large amount of time to helping outside direct responsibilities",
                    "Refactored hundreds of legacy Shepherd nodes",
                    "Acted as sole maintainer of Boxen for years"
                ],
                "signals": [
                    "Goes above and beyond on the Watch, serving the team without complaint",
                    "Implements concrete programs to signficantly improve team inclusivity",
                    "Takes on large amounts of tedious grunt work for the team without being asked"
                ]
            },
            {
                "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
                "examples": [
                    "Organized wine and olive tasting offsite to Napa for the whole engineering org",
                    "Devised, delivered and acted on findings from an engineer happiness survey",
                    "Challenged and corrected exclusionary behaviour or policies"
                ],
                "signals": [
                    "Brings separate teams together to build relatedness",
                    "Holds individuals, teams, and leadership accountable to Medium's values",
                    "Sets the tone, policy, and goals around maintaining an inclusive company"
                ]
            }
        ],
        "displayName": "Community"
    }

,

    "EVANGELISM": {
        "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
        "category": "D",
        "milestones": [
            {
                "summary": "Represents Medium well externally, and influences individuals positively",
                "examples": [
                    "Shared a Medium product launch post on Facebook",
                    "Acted as a guide for a non-friend visitor to the office",
                    "Supported PR efforts by giving a quote or having a photo taken"
                ],
                "signals": [
                    "Shares personal and organizational successes with their network",
                    "Attends Medium-hosted events and talks with guests",
                    "Communicates genuine and honest excitement about their work externally"
                ]
            },
            {
                "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
                "examples": [
                    "Volunteered as a helper for CODE2040 writing workshop",
                    "Organized a short tour of the office by college students",
                    "Talked at a Women Who Code event hosted at Medium"
                ],
                "signals": [
                    "Takes meaningful action to introduce people to Medium",
                    "Joined public Slack group and represented Medium appropriately, and well",
                    "Organizes positive small- or medium-sized events that bring people to Medium"
                ]
            },
            {
                "summary": "Works hard to positively influence large groups of people on their views of Medium",
                "examples": [
                    "Represented Medium on a panel at a conference of industry experts",
                    "Established close ties with Creative Commons",
                    "Built a durable, long-standing relationship with Code2040"
                ],
                "signals": [
                    "Mentors or participates in a high visibility way in an external organization",
                    "Builds fruitful partnerships with external organizations",
                    "Writes blog posts about Medium that receive moderate traffic"
                ]
            },
            {
                "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
                "examples": [
                    "Published a paper on Medium technology in a peer-reviewed journal",
                    "Authored joint-press release with EFF on DNT",
                    "Published \u201cWhy Content Editable Is Terrible\u201d on the Medium engineering blog"
                ],
                "signals": [
                    "Establishes themself as an industry thought leader who attracts talent",
                    "Publishes material about Medium's organizational or technical innovations",
                    "Leverages significant following to evangelise Medium"
                ]
            },
            {
                "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
                "examples": [
                    "Published or interviewed in a mainstream newspaper or website outside tech",
                    "Keynoted a conference with international attention",
                    "Represented Medium in national televised media"
                ],
                "signals": [
                    "Delivers key messages to broad, mainstream audiences",
                    "Influences people with large audiences to talk about Medium positively",
                    "Drives recognition and adoption of Medium in significant numbers"
                ]
            }
        ],
        "displayName": "Evangelism"
    }

,

    "RECRUITING": {
        "description": "Strengthens Medium's team by bringing in excellent staff members",
        "category": "D",
        "milestones": [
            {
                "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
                "examples": [
                    "Completed interview calibration",
                    "Set up casual sessions to practice asking questions",
                    "Referred appropriate individuals for open positions"
                ],
                "signals": [
                    "Reviews existing network for hiring leads regularly",
                    "Shadows interviews to gain familiarity with process",
                    "Reviews current job postings regularly"
                ]
            },
            {
                "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
                "examples": [
                    "Added observable evidence for every rating",
                    "Started a monthly brunch for candidates to meet Medium employees",
                    "Tested a new service for quality and diversity of candidates"
                ],
                "signals": [
                    "Uses interview rubric to provide clear, objective feedback on candidates",
                    "Interviews candidates with empathy and treats them all with equal respect",
                    "Researches approaches for sourcing candidates and diversifying hiring"
                ]
            },
            {
                "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
                "examples": [
                    "Wrote new interview question which meets our question quality criteria",
                    "Brought candidates into our pipeline proactively, with a high conversion rate",
                    "Proposed useful, tangible improvements to the interview process"
                ],
                "signals": [
                    "Teaches new interviewers how to interview with empathy",
                    "Models great interview technique and feedback when shadowed",
                    "Reverse shadows trainees and helps calibrate their feedback"
                ]
            },
            {
                "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
                "examples": [
                    "Planned engineering summit on interview process and training",
                    "Organized and lead Medium's presence at a recruitment fair",
                    "Started CODE2040 internship program"
                ],
                "signals": [
                    "Documents subtle cues in interviews that indicate values alignment",
                    "Makes hiring decisions, resolving discrepancies between conflicting reports",
                    "Top-grades candidates and teases out character traits"
                ]
            },
            {
                "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
                "examples": [
                    "Talked with a senior candidate over many months to fill a critical role",
                    "Organized efforts around convincing acquired engineers to join and stay",
                    "Set goals, then tracked and reported metrics on team demographics over time"
                ],
                "signals": [
                    "Sets the tone, policy and goals around building a diverse, high-quality team",
                    "Identifies and brings in promising acquisitions",
                    "Tracks industry activity, identifying opportunities for critical roles"
                ]
            }
        ],
        "displayName": "Recruiting"
    }

,

    "MENTORSHIP": {
        "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
        "category": "D",
        "milestones": [
            {
                "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
                "examples": [
                    "Acted as an onboarding buddy",
                    "Paired with an engineer to help them with an unfamiliar area",
                    "Helped a colleague understand their feelings"
                ],
                "signals": [
                    "Makes themself available for informal support and advice",
                    "Acts as sounding board for peers and more junior members",
                    "Provides sound advice when asked"
                ]
            },
            {
                "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
                "examples": [
                    "Shared interesting article with a team member to help with their growth",
                    "Offered unprompted feedback to help growth, with empathy",
                    "Lead from behind to support someone new to a leadership role"
                ],
                "signals": [
                    "Takes time to explain concepts and best practices",
                    "Asks questions to illuminate concepts, rather than stating them",
                    "Allows others to lead efforts when it will help their development"
                ]
            },
            {
                "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
                "examples": [
                    "Gave a brown bag presentation on payments",
                    "Wrote Hatch post on avoiding RDS backfill issues",
                    "Wrote Medium-U content module"
                ],
                "signals": [
                    "Avoids siloing information when it can be usefully shared with others",
                    "Works to increase the bus factor of systems",
                    "Finds tools that work best for a team member's personality"
                ]
            },
            {
                "summary": "Encourages people to mentor each other, and creates ways for them to do so",
                "examples": [
                    "Created and lead Medium's Women in Eng group",
                    "Organized an Eng All Hands with an outside speaker",
                    "Designed and taught web client guild curriculum"
                ],
                "signals": [
                    "Defines an entire curriculum for a discipline",
                    "Draws positive attention to well-modeled mentor and teaching behaviours",
                    "Creates brown bag series and lines up speakers"
                ]
            },
            {
                "summary": "Instills and promotes a culture of learning and development within the team",
                "examples": [
                    "Instituted the professional education budget for engineers",
                    "Mentored mentors",
                    "Started the eng advisor program and lined up external mentors"
                ],
                "signals": [
                    "Sets incentive structures to recognise and reward mentorship",
                    "Empowers team members to develop themselves",
                    "Role models productive and healthy mentor relationships"
                ]
            }
        ],
        "displayName": "Mentorship"
    }
}
export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}