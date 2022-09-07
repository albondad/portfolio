export type WorkExperienceType = {
  endDate: string;
  id: string;
  imageSources: string[];
  organization: string;
  startDate: string;
  title: string;
};

export const workExperience: WorkExperienceType[] = [
  {
    endDate: "2022-08-01T07:00:00-05:00",
    id: "5",
    imageSources: ["/images/bodhi-01.png"],
    organization: "Bodhi",
    startDate: "2021-02-01T06:00:00-06:00",
    title: "Software Developer",
  },
  {
    endDate: "2020-11-01T06:00:00-06:00",
    id: "4",
    imageSources: ["/images/gyst-audio-01.png"],
    organization: "Gyst Audio",
    startDate: "2020-02-01T06:00:00-06:00",
    title: "Frontend Developer",
  },
  {
    endDate: "2020-10-01T07:00:00-05:00",
    id: "3",
    imageSources: ["/images/halo-science-01.png"],
    organization: "Halo Science",
    startDate: "2020-09-01T07:00:00-05:00",
    title: "Full Stack Developer Intern",
  },
  {
    endDate: "2020-05-01T07:00:00-05:00",
    id: "1",
    imageSources: ["/images/lifetime-ui-01.png"],
    organization: "Lifetime UI",
    startDate: "2020-04-01T07:00:00-05:00",
    title: "Web Developer",
  },
  {
    endDate: "2020-03-01T06:00:00-06:00",
    id: "0",
    imageSources: ["/images/zaner-01.png"],
    organization: "Zaner",
    startDate: "2020-01-01T06:00:00-06:00",
    title: "UI and UX Developer",
  },
];
