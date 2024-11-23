import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function ReviewNime() {
  useTitle("ReviewNime");
  useScrollToTop();

  return (
    <Motion>
      {" "}
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="ReviewNime Platform that provides a list of the best anime films"
            subtitle="October 24, 2023"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/reviewnime-1.png"
            alt="reviewnime-1"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-[14px] leading-6 md:leading-7">
              Discover the wonders of the world of anime through ReviewNime a
              website that lists the best anime films ever made. With a simple
              and elegant interface, this website provides an interesting
              experience to explore stunning anime works without any hassle and
              clutter. At ReviewNime we believe that beauty lies in simplicity.
              That's why our designs prioritize clarity and ease of navigation.
              With an elegant color palette and minimalist layout, users can
              easily browse the list of anime films, from classics to the latest
              releases, all neatly arranged in a clean and organized interface.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Home
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  ReviewNime home page displays a series of anime films that are
                  currently popular and much talked about. Here, you'll find
                  everything trending and widely watched, from thrilling action
                  anime to heartwarming dramas. This page is designed to inspire
                  viewers with the latest updates and specially curated
                  editorial picks, so you never miss a thing in the world of
                  anime.
                </span>
                <div>
                  <ImageLazy
                    src="/images/reviewnime-1.png"
                    alt="reviewnime-1"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Anime List
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The Anime List feature provides an extensive directory that
                  includes a variety of anime movie titles, from newly released
                  ones to timeless classic series. Users can easily browse and
                  choose from an extensive list based on genre, year of release,
                  or popularity rating. Each entry in this list is organized in
                  an easy-to-navigate format, allowing users to intuitively find
                  content that suits their personal tastes.
                </span>
                <div>
                  <ImageLazy
                    src="/images/reviewnime-2.png"
                    alt="reviewnime-2"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Anime Description
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  In Anime Description users are provided with a complete and
                  in-depth synopsis for each anime. This information includes a
                  plot outline, character development, major themes, and a brief
                  review without revealing spoilers. The goal of these
                  descriptions is to give users enough insight so they can
                  decide whether the anime is what they are looking for, while
                  maintaining the elements of surprise and freshness of the
                  story.
                </span>
                <div>
                  <ImageLazy
                    src="/images/reviewnime-3.png"
                    alt="reviewnime-3"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Anime Character
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The Anime Character feature is a place to explore and
                  understand more deeply about the characters that form the
                  heart of every anime. Details offered include character
                  backgrounds, roles in the story, and relationship dynamics
                  with other characters. This feature is especially useful for
                  fans who want to get a complete picture of a character's
                  personality and evolution throughout the series.
                </span>
                <div>
                  <ImageLazy
                    src="/images/reviewnime-4.png"
                    alt="reviewnime-4"
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
