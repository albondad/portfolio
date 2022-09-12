export type CertificationType = {
    date: string
    id: string
    links: string[]
    name: string
    organizationImageSource: string
    organizationName: string
}

export const certifications: CertificationType[] = [
    {
        date: '2021-02-01T18:23:00.000Z',
        id: '8a718f57-f85c-43d2-9ebd-2e8c85c9e855',
        links: [
            'https://www.linkedin.com/in/albondad/details/certifications/edit/forms/1754808893/?profileFormEntryPoint=PROFILE_SECTION',
        ],
        name: 'AWS Certified Cloud Practitioner',
        organizationImageSource: '/images/amazon-web-services-01.png',
        organizationName: 'Amazon Web Services',
    },
    {
        date: '2021-02-01T18:23:00.000Z',
        id: '8a718f57-f85c-43d2-9ebd-2e8c85c9e855',
        name: 'Design Patterns',
        links: [
            'https://www.coursera.org/account/accomplishments/certificate/TYH7Q4DG9CQM',
        ],
        organizationImageSource: '/images/university-of-alberta-01.png',
        organizationName: 'University of Alberta',
    },
    {
        date: '2021-01-01T18:23:00.000Z',
        id: '0181c51f-dfee-4697-977b-06a6e7644b36',
        links: [
            'https://www.coursera.org/account/accomplishments/certificate/CPKMD47MTNT6',
        ],
        name: 'Object Oriented Design',
        organizationImageSource: '/images/university-of-alberta-01.png',
        organizationName: 'University of Alberta',
    },
    {
        date: '2020-11-01T18:23:00.000Z',
        id: '624d6c97-4adb-4e07-b3f6-bc1d5df58458',
        links: [
            'https://www.udemy.com/certificate/UC-b19570d0-e1c7-481e-a1e3-9b5f0de1f768/',
        ],
        name: 'The Complete Node.js Developer Course',
        organizationImageSource: '/images/udemy-01.png',
        organizationName: 'Udemy',
    },
    {
        date: '2020-10-01T18:23:00.000Z',
        id: '4c551fc5-e693-40ca-aa5e-c03b1e6349f5',
        links: [
            'https://www.udemy.com/certificate/UC-8e31cc87-6e6e-4183-b4c3-0199395d37c6/',
        ],
        name: 'React the Complete Guide',
        organizationImageSource: '/images/udemy-01.png',
        organizationName: 'Udemy',
    },
]
