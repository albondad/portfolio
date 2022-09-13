export type CertificationType = {
    date: string
    id: string
    imageSources: string[]
    links: {
        text: string
        url: string
    }[]
    name: string
    organizationImageSource: string
    organizationName: string
}

export const certifications: CertificationType[] = [
    {
        date: '2021-02-01T18:23:00.000Z',
        id: '8a718f57-f85c-43d2-9ebd-2e8c85c9e855',
        imageSources: [
            '/images/university-of-alberta-01.png',
            '/images/university-of-alberta-design-patterns-01.png',
        ],
        links: [
            {
                text: 'Show Certification',
                url: 'https://www.coursera.org/account/accomplishments/certificate/TYH7Q4DG9CQM',
            },
        ],
        name: 'Design Patterns',
        organizationImageSource: '/images/university-of-alberta-01.png',
        organizationName: 'University of Alberta',
    },
    {
        date: '2021-01-01T18:23:00.000Z',
        id: '0181c51f-dfee-4697-977b-06a6e7644b36',
        imageSources: [
            '/images/university-of-alberta-01.png',
            '/images/university-of-alberta-object-oriented-design-01.png',
        ],
        links: [
            {
                text: 'Show Certification',
                url: 'https://www.coursera.org/account/accomplishments/certificate/CPKMD47MTNT6',
            },
        ],
        name: 'Object Oriented Design',
        organizationImageSource: '/images/university-of-alberta-01.png',
        organizationName: 'University of Alberta',
    },
    {
        date: '2020-11-01T18:23:00.000Z',
        id: '624d6c97-4adb-4e07-b3f6-bc1d5df58458',
        imageSources: [
            '/images/udemy-01.png',
            '/images/the-complete-node-js-developer-course-01.png',
        ],
        links: [
            {
                text: 'Show Certification',
                url: 'https://www.udemy.com/certificate/UC-b19570d0-e1c7-481e-a1e3-9b5f0de1f768/',
            },
        ],
        name: 'The Complete Node.js Developer Course',
        organizationImageSource: '/images/udemy-01.png',
        organizationName: 'Udemy',
    },
    {
        date: '2020-10-01T18:23:00.000Z',
        id: '4c551fc5-e693-40ca-aa5e-c03b1e6349f5',
        imageSources: [
            '/images/udemy-01.png',
            '/images/react-the-complete-guide-01.png',
        ],
        links: [
            {
                text: 'Show Certification',
                url: 'https://www.udemy.com/certificate/UC-8e31cc87-6e6e-4183-b4c3-0199395d37c6/',
            },
        ],
        name: 'React the Complete Guide',
        organizationImageSource: '/images/udemy-01.png',
        organizationName: 'Udemy',
    },
    {
        date: '2021-02-01T18:23:00.000Z',
        id: '36030436-1308-433b-80f8-1ab7d9d1bfe2',
        imageSources: [
            '/images/amazon-web-services-01.png',
            '/images/aws-certified-cloud-practioner-01.png',
        ],
        links: [
            {
                text: 'Show Certification',
                url: 'https://aw.certmetrics.com/amazon/public/verification.aspx',
            },
        ],
        name: 'AWS Certified Cloud Practitioner',
        organizationImageSource: '/images/amazon-web-services-01.png',
        organizationName: 'Amazon Web Services',
    },
]
