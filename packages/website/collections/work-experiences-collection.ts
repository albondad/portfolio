export type WorkExperienceType = {
    description: string
    endDate: string
    id: string
    imageSources: string[]
    organization: string
    responsibilities: string[]
    skills: string[]
    startDate: string
    title: string
}

export const workExperience: WorkExperienceType[] = [
    {
        description:
            'Bodhi is a software development company that builds web applications to manage and control a property’s technology, as well as building immigration platforms for the Bahamas. I worked with them for a year and a half as a software developer with a focus on frontend development, maintaining existing applications, developing new applications, and researching ways to improve our frontend development.',
        endDate: '2022-08-01T07:00:00-05:00',
        id: '5',
        imageSources: [
            '/images/bodhi-01.png',
            '/images/bodhi-02.png',
            '/images/bodhi-03.png',
            '/images/bodhi-04.png',
            '/images/bodhi-05.png',
            '/images/bodhi-06.png',
            '/images/bodhi-07.png',
        ],
        organization: 'Bodhi',
        responsibilities: [
            'Developed web application front-ends for new and existing applications',
            'Developed front-end of a web application to control electronic devices in hotels',
            'Developed front-end of a web application to manage future travel to the Bahamas',
            'Add and maintain features for existing web applications',
            'Connected front-ends to existing REST APIs',
            'Lead front-end development and trained a new front-end developer',
            'Collaborate with backend developers when designing features',
            'Researched new solutions for frontend development',
        ],
        skills: [
            'React',
            'Node',
            'Next.js',
            'Material UI',
            'React Query',
            'Redux',
            'Semantic UI',
            'MongoDB',
            'Figma',
            'Adobe XD',
        ],
        startDate: '2021-02-01T06:00:00-06:00',
        title: 'Software Developer',
    },
    {
        description:
            'Gyst Audio is a startup that provides audio services to online publishers. I worked with them for several months, starting as an intern and transitioning into a contracted front end developer position. During my time with them, I worked on company projects, as well as assisting the next batch of interns with their own development projects',
        endDate: '2020-11-01T06:00:00-06:00',
        id: '4',
        imageSources: [
            '/images/gyst-audio-01.png',
            '/images/gyst-audio-02.png',
            '/images/gyst-audio-03.png',
            '/images/gyst-audio-04.png',
            '/images/gyst-audio-05.png',
        ],
        organization: 'Gyst Audio',
        responsibilities: [
            'Developed tool to review accuracy of inhouse narrator recordings',
            'Implemented back end service to send review reports on narrator recordings',
            'Designed analytics dashboard to provide performance review of our service',
            'Developed inline audio player used in articles for client’s site',
            'Implemented and designed an improved company email template',
            'Migrated current site to use Wordpress.org for ease of use',
            'Transitioned from internship to contracted position',
        ],
        skills: [
            'AWS',
            'React',
            'Node',
            'Git',
            'GitLab',
            'Javascript',
            'HTML',
            'CSS',
            'Python',
            'Wordpress',
        ],
        startDate: '2020-02-01T06:00:00-06:00',
        title: 'Frontend Developer',
    },
    {
        description:
            'Halo is a startup that connects researchers and sponsors through their web application. I worked in the company as an full stack developer intern, updating the platform to be more accessible on both large and mobile devices, as well as performing weekly maintenance.',
        endDate: '2020-10-01T07:00:00-05:00',
        id: '3',
        imageSources: [
            '/images/halo-science-01.png',
            '/images/halo-science-02.png',
            '/images/halo-science-03.png',
            '/images/halo-science-04.png',
        ],
        organization: 'Halo Science',
        responsibilities: [
            'Updated existing pages to be responsive on mobile devices',
            'Implemented new authentication page with React and Ruby',
            'Performed maintenance on web platform issues',
        ],
        skills: [
            'Ruby on Rails',
            'React',
            'Node',
            'Git',
            'GitHub',
            'Javascript',
            'HTML',
            'CSS',
        ],
        startDate: '2020-09-01T07:00:00-05:00',
        title: 'Full Stack Developer Intern',
    },
    {
        description:
            'Lifetime UI is an organization focused on developing a React user interface library for developers. I joined the team as a web developer, working directly with both the main architect and the designer to implement the user interface components.',
        endDate: '2020-05-01T07:00:00-05:00',
        id: '1',
        imageSources: [
            '/images/lifetime-ui-01.png',
            '/images/lifetime-ui-02.png',
        ],
        organization: 'Lifetime UI',
        responsibilities: [
            'Built UI components to be used in the React based framework',
            'Collaborated with the lead developer and designer during development and design',
        ],
        skills: ['React', 'Git', 'GitHub', 'Figma'],
        startDate: '2020-04-01T07:00:00-05:00',
        title: 'Web Developer',
    },
    {
        description:
            'Zaner is a financial service company that specializes in risk management. I worked with the company as a contracted UI and UX developer improving the front end of their cryptocurrency platforms and developing an initial style guide for reference in future projects.',
        endDate: '2020-03-01T06:00:00-06:00',
        id: '0',
        imageSources: [
            '/images/zaner-01.png',
            '/images/zaner-02.png',
            '/images/zaner-03.png',
            '/images/zaner-04.png',
        ],
        organization: 'Zaner',
        responsibilities: [
            'Implemented improved user interface for company web applications',
            'Created a style guide for reference in current and future company products',
            'Provided web application mockups and wireframes',
        ],
        skills: [
            'ASP.NET Core',
            'Bootstrap',
            'Git',
            'Github',
            'Javascript',
            'HTML',
            'CSS',
        ],
        startDate: '2020-01-01T06:00:00-06:00',
        title: 'UI and UX Developer',
    },
]
