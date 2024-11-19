import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import { useScrollToTop, useTitle } from "@/hooks";

export default function EduVerse() {
  useTitle("EduVerse");
  useScrollToTop();

  return (
    <div className="w-full flex justify-center min-h-screen items-start pt-10">
      <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
        <BackButton
          title="EduVerse - Interactive Learning App for High School Students"
          subtitle="September 15, 2024"
          titleColor="text-customTextV3"
        />
        <ImageLazy
          src="/images/eduverse.svg"
          alt="eduverse"
          className="mb-6 rounded-lg"
        />
        <div className="text-justify mb-6">
          <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
            Introduction
          </h2>
          <p className="mb-6 text-sm md:text-base leading-6 md:leading-7">
            EduVersea is a learning application specifically designed for high
            school students. Offering interactive study materials, quizzes, and
            in-depth learning videos, EduVerse helps students understand
            concepts in a fun and effective way. With virtual classroom features
            and adaptive learning, Eduverse is the perfect study companion for
            preparing for exams and increasing knowledge in various high school
            subjects.
          </p>
          <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
            What are the features?
          </h2>
          <ul className="text-sm space-y-6 list-disc list-inside">
            <li className="font-medium text-lg">
              Dashboard
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                The dashboard provides an overview of the student's learning
                progress, including completed courses, quizzes, and
                achievements. It also allows students to access random quizzes
                to test their knowledge on various topics.
              </span>
              <div>
                <ImageLazy
                  src="/images/eduverse-1.svg"
                  alt="eduverse-1"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Material
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                This feature offers comprehensive study materials tailored to
                high school students. The materials are designed to be engaging
                and easy to understand, covering a wide range of subjects to
                support their academic needs.
              </span>
              <div>
                <ImageLazy
                  src="/images/eduverse-2.svg"
                  alt="eduverse-2"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Quiz
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                Students can participate in interactive quizzes to test their
                understanding of various topics. The quizzes are designed to be
                fun and engaging while providing immediate feedback to enhance
                learning.
              </span>
              <div>
                <ImageLazy
                  src="/images/eduverse-3.svg"
                  alt="eduverse-3"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Course
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                The platform offers structured courses that guide students
                through specific subjects or topics. Each course includes
                detailed explanations, examples, and exercises to help students
                master the material.
              </span>
              <div>
                <ImageLazy
                  src="/images/eduverse-4.svg"
                  alt="eduverse-4"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Discussion
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                The discussion feature allows students to interact with peers
                and educators in a collaborative environment. They can ask
                questions, share ideas, and engage in meaningful discussions to
                deepen their understanding.
              </span>
              <div>
                <ImageLazy
                  src="/images/eduverse-5.svg"
                  alt="eduverse-5"
                  className="rounded-lg"
                />
              </div>
            </li>
            <li className="font-medium text-lg">
              Rewards
              <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                The rewards system allows students to earn points based on their
                learning activities, such as completing materials, taking
                quizzes, or participating in discussions. These points can be
                redeemed for exciting rewards, including vouchers, exclusive
                access to premium content, or educational merchandise. This
                feature is designed to motivate students to stay active and
                consistent in their learning journey.
              </span>
              <div>
                <ImageLazy
                  src="/images/eduverse-6.svg"
                  alt="eduverse-6"
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
