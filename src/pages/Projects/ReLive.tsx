import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import { useScrollToTop, useTitle } from "@/hooks";

export default function ReLive() {
  useTitle("ReLive");
  useScrollToTop();

  return (
    <div className="w-full flex justify-center min-h-screen items-start pt-10">
      <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
        <BackButton
          title="ReLive - Online Consultation Platform"
          subtitle="June 28, 2023"
          titleColor="text-customTextV3"
        />
        <ImageLazy
          src="/images/relive.png"
          alt="relive"
          className="mb-6 rounded-lg"
        />
        <div className="text-justify mb-6">
          <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
            Introduction
          </h2>
          <p className="mb-6 text-sm md:text-[14px] leading-6 md:leading-7">
            ReLive is an online consultation platform designed to provide easy
            and fast access to users who need psychological help. Through
            ReLive, users can choose a psychologist that suits their needs and
            carry out online consultations. ReLive main features include user
            profiles, psychologist selection, chat services for consultations,
            consultation history, as well as discussion forums or communities to
            share experiences and get support from fellow users. The platform is
            built with modern technologies such as React, Node, and Express,
            ensuring an intuitive and responsive user experience.
          </p>
          <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
            What are the features?
          </h2>
          <ul className="text-sm space-y-6 list-disc list-inside">
            <li className="font-medium text-lg">
              Choose a psychologist
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                Users can choose from a list of available psychologists based on
                their specialization, experience and reviews of other users.
                This feature allows users to find the psychologist who best
                suits their needs.
              </span>
              <div>
                <ImageLazy
                  src="/images/relive-1.png"
                  alt="relive-1"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Chat
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                The chat service allows users to have real-time consultations
                with the psychologist they choose via WhatsApp. Users can start
                a chat on the ReLive website, who will then be directed to the
                WhatsApp application to continue the discussion and get direct
                psychological assistance.
              </span>
            </li>
            <li className="font-medium text-lg">
              History
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                This feature keeps complete records of all consultation sessions
                carried out by the user. Users can look back at their
                consultation history at any time for reference and follow-up.
              </span>
              <div>
                <ImageLazy
                  src="/images/relive-2.png"
                  alt="relive-2"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Community
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                Discussion forums or communities allow users to share
                experiences, get support, and interact with other users facing
                similar challenges. This feature helps build a sense of
                community and support between users.
              </span>
              <div>
                <ImageLazy
                  src="/images/relive-3.png"
                  alt="relive-3"
                  className="rounded-lg"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
