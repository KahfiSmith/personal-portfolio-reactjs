import { ExperienceItemProps } from "@/types";

export const dataExperience: ExperienceItemProps[] = [
  {
    title: "Web Developer",
    company: "Studyo.io - Contract",
    date: "November 2023 - February 2024",
    content: (
      <ul className="list-disc list-inside text-sm font-normal space-y-2">
        <li>
          Responsible as the programmer in developing a learning content
          management website using Laravel and Bootstrap, ensuring seamless user
          experience and responsive design.
        </li>
        <li>
          Integrate Firebase Firestore, Authentication, and Cloud Storage into
          the website.
        </li>
        <li>
          Work collaboratively within development teams to produce innovative
          and responsive web solutions.
        </li>
      </ul>
    ),
  },
  {
    title: "Web Development & UI/UX Design",
    date: "February 2024 - June 2024",
    company: "Infinite Learning Indonesia - Independent Study",
    content: (
      <ul className="list-disc list-inside text-sm font-normal space-y-2">
        <li>
          Responsible as the programmer in developing a ReLive website that
          integrates React.js, Node.js, and Express.js.
        </li>
        <li>
          Conduct market research to ensure that the website meets user needs in
          the health sector.
        </li>
        <li>
          Analyze business needs to create effective digital solutions in
          providing health information.
        </li>
      </ul>
    ),
  },
  {
    title: "Frontend Web Developer",
    date: "August 2024 - October 2024",
    company: "PT Itematik Pramitha Nusantara - Internship",
    content: (
      <ul className="list-disc list-inside text-sm font-normal space-y-2">
        <li>
          Responsible as a programmer in developing a goods rental website using
          React.js with TypeScript, Tailwind CSS, and Redux for state
          management.
        </li>
        <li>
          Analyze business needs to provide effective features to make it easier
          for users to digitally borrow goods.
        </li>
        <li>
          Manage inventory data and item rental transactions with PostgreSQL to
          ensure fast and efficient data storage and access.
        </li>
      </ul>
    ),
  },
];
