import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function EPkk() {
  useTitle("E-PKK");
  useScrollToTop();

  return (
    <Motion>
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="E-PKK - PKK data reporting website in Nganjuk district"
            subtitle="February 16, 2023"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/pkk-1.png"
            alt="pkk-1"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-base leading-6 md:leading-7">
              Welcome to E-PKK Kabupaten Nganjuk an innovative web platform
              specifically designed to help and simplify the process of
              reporting and managing PKK (Family Empowerment and Welfare) data
              in Nganjuk Regency. The platform provides efficient solutions for
              data collection, analysis and reporting, ensuring all information
              related to the PKK program can be easily accessed by various
              stakeholders.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Homepage
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The main page of this website displays a general overview or
                  important information regarding the PKK in Nganjuk Regency.
                  Visitors can see highlights of the latest news, important
                  announcements, as well as photo galleries from recent
                  activities. Its intuitive design allows users to get
                  up-to-date and relevant information quickly and easily.
                </span>
                <div>
                  <ImageLazy
                    src="/images/pkk-1.png"
                    alt="pkk-1"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Dashboard
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The dashboard feature provides a quick view of important
                  statistics including the number of incoming reports and the
                  number of active users in the system. This helps admins
                  monitor activity on the website and measure participation in
                  PKK programs. This dashboard is equipped with various
                  analytical tools that help in making strategic decisions based
                  on data.
                </span>
                <div>
                  <ImageLazy
                    src="/images/pkk-2.png"
                    alt="pkk-2"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                News
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Admin can add the latest news regarding PKK activities or
                  programs which will then appear on the homepage. This feature
                  allows dynamic management of news content, where admins can
                  post, edit and delete news as needed. This provides an
                  important means of keeping members and the general public
                  informed about the PKK's activities and achievements.
                </span>
                <div>
                  <ImageLazy
                    src="/images/pkk-3.png"
                    alt="pkk-3"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Announcement
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  This announcement feature is integrated with the PKK mobile
                  application, ensuring that all important announcements can be
                  accessed by users not only through the website but also
                  through the application on their mobile devices. This includes
                  announcements about upcoming events, policy changes, or other
                  important information that needs to be communicated quickly to
                  members and the public.
                </span>
                <div>
                  <ImageLazy
                    src="/images/pkk-4.png"
                    alt="pkk-4"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Gallery
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The gallery contains images of PKK activities that have been
                  uploaded via the mobile application. Admins have the task of
                  managing these images, including approving, editing, or
                  deleting inappropriate images before they appear on the
                  homepage. This gallery aims to visualize the PKK's activities
                  and achievements, providing visual evidence of the positive
                  impact of their activities.
                </span>
                <div>
                  <ImageLazy
                    src="/images/pkk-5.png"
                    alt="pkk-5"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Reporting
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Similar to galleries, workgroups contain reports received from
                  mobile applications. Admins are in charge of managing these
                  reports, which includes approving, editing, and deleting these
                  reports before they are published. This feature ensures that
                  only valid and quality reports are published, assisting in the
                  documentation and evaluation of PKK programs.
                </span>
                <div>
                  <ImageLazy
                    src="/images/pkk-6.png"
                    alt="pkk-6"
                    className="rounded-lg"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Motion>
  );
}
