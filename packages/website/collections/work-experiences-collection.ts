export type WorkExperienceType = {
  id: string;
  endDate: string;
  organization: string;
  startDate: string;
  title: string;
};

export const workExperience: WorkExperienceType[] = [
  {
    id: "5",
    endDate: "2022-08-01T07:00:00-05:00",
    organization: "Bodhi",
    startDate: "2021-02-01T06:00:00-06:00",
    title: "Software Developer",
  },
  {
    id: "4",
    endDate: "2020-11-01T06:00:00-06:00",
    organization: "Gyst Audio",
    startDate: "2020-02-01T06:00:00-06:00",
    title: "Frontend Developer",
  },
  {
    id: "3",
    endDate: "2020-10-01T07:00:00-05:00",
    organization: "Halo Science",
    startDate: "2020-09-01T07:00:00-05:00",
    title: "Full Stack Developer Intern",
  },
  {
    id: "2",
    endDate: "2020-10-01T07:00:00-05:00",
    organization: "Lifetime UI",
    startDate: "2020-09-01T07:00:00-05:00",
    title: "Web Developer",
  },
  {
    id: "1",
    endDate: "2020-05-01T07:00:00-05:00",
    organization: "Lifetime UI",
    startDate: "2020-04-01T07:00:00-05:00",
    title: "Web Developer",
  },
  {
    id: "0",
    endDate: "2020-03-01T06:00:00-06:00",
    organization: "Zaner",
    startDate: "2020-01-01T06:00:00-06:00",
    title: "UI and UX Developer",
  },
];
