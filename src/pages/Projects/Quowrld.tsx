import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function Quowrld() {
  useTitle("Quowrld");
  useScrollToTop();

  return (
    <Motion>
      {" "}
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="Quowrld - Where words find their place"
            subtitle="May 31, 2025"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/quowrld-page.png"
            alt="relive"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-[14px] leading-6 md:leading-7">
              Quowrld is a quote-sharing platform designed to "capture and
              immortalize meaningful words" from anyone, and then display them
              on colored cards that reflect the emotions behind each sentence.
              Once logged in, users are greeted with a concise dashboard
              featuring blocks like "Trending Today", "Editor’s Pick", and
              "Quote of the Day" that are continuously updated, keeping the
              community's creativity alive. The hashtag exploration feature
              makes it easy to discover quotes based on specific topics or
              nuances, complete with a list of popular hashtags that change in
              real-time. With a combination of a "vibe-based" interface, a
              minimalist writing tool, private saving options, anonymity
              controls, and light analytics and export options, Quowrld aims to
              be a safe and enjoyable digital home for anyone who wants to
              write, discover, and share inspiration in the form of words.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Dashboard Overview
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Dashboard Overview acts as your personal mission control,
                  greeting you with a concise snapshot of everything that
                  matters the moment you sign in. At the top you’ll find key
                  stats—how many quotes you’ve published, the total “likes”
                  you’ve earned, and your overall reach—followed by dynamic
                  cards such as “Trending Today,” “Editor’s Pick,” “Quote of the
                  Day,” and quick links to “Explore Hashtags.” Every quote card
                  is tinted with a color that reflects its emotional tone (fiery
                  red for passion, calming green for serenity, and so on), so
                  you can sense a quote’s mood at a glance. Frequent writers
                  also see a “Streak Meter” on the side to encourage consistent
                  posting, and the entire layout adapts seamlessly from desktop
                  grids to a single-column mobile view.
                </span>
                <div>
                  <ImageLazy
                    src="/images/quowrld.png"
                    alt="relive-1"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Saved Quotes
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Saved Quotes is your private library, a safe shelf where you
                  can bookmark any inspiring words you come across. One tap on
                  the bookmark icon sends a quote to the default “All Saved”
                  folder, invisible to the public unless you choose otherwise.
                  You can tag each saved quote (#philosophy, #humor, #healing)
                  for easy sidebar filtering, search the full text to retrieve a
                  fragment instantly, and sort the collection by save date,
                  popularity, or even emotional color. When you want to share
                  your curation, you can open a folder in read-only
                  mode—spreading inspiration without surrendering privacy.
                </span>
                <div>
                  <ImageLazy
                    src="/images/quowrld-saved.png"
                    alt="relive-2"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Create Quotes
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Create Quotes opens a distraction-free canvas that focuses
                  entirely on your words. A roomy text area expands as you type,
                  while an AI-powered color picker suggests a background hue
                  that matches the detected emotion—though you can always choose
                  your own to personalize the “vibe card.” A single toggle lets
                  you publish anonymously, hashtag autocomplete offers popular
                  tag suggestions in real time, a live preview shows exactly how
                  the finished card will look, and an optional scheduler allows
                  you to time your post for a future release. Hitting “Publish”
                  triggers a success notice and immediately presents sharing
                  options so your fresh quote can travel far and wide.
                </span>
                <div>
                  <ImageLazy
                    src="/images/quowrld-create.png"
                    alt="relive-3"
                    className="rounded-lg"
                  />
                </div>
                <li className="font-medium text-lg">
                  Share Quotes
                  <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                    Share Quotes is engineered to maximize your quote’s reach
                    both inside and outside Quowrld. Within the platform, a
                    re-share function—similar to a retweet—propels your words
                    through followers’ feeds without duplicating content. For
                    external networks, the share panel provides a compact short
                    link (e.g., quo.world/abc123), a one-click export to
                    high-resolution PNGs in square or vertical formats, and
                    lightweight embed code for blogs or websites. Advanced
                    controls let you disable comments or block re-shares for
                    sensitive material, and a 24-hour analytics snapshot tracks
                    impressions, click-through rate, and save rate so you can
                    gauge the impact of every phrase.
                  </span>
                  <div>
                    <ImageLazy
                      src="/images/quowrld-download.png"
                      alt="relive-3"
                      className="rounded-lg"
                    />
                  </div>
                </li>
                <li className="font-medium text-lg">
                  Profile
                  <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                    Profile is your public showcase, balancing style and
                    substance in equal measure. A hero banner adopts a gradient
                    based on the emotional colors you use most often, giving
                    your page an instantly recognizable feel. Beneath it sit
                    your avatar, a brief bio of up to 160 characters (emoji
                    welcome), and a statistics panel that lists total quotes,
                    followers, followings, likes, and an “inspiration score”
                    that blends engagement with posting consistency. Three tabs
                    organize your activity: “Quotes” for everything you’ve
                    published (including drafts and anonymous posts),
                    “Collections” for public folders you’ve curated, and “Liked”
                    for quotes by others that you’ve favorited. All of it lives
                    at a clean vanity URL such as quowrld.com/@yourname, ready
                    for sharing in a portfolio or social-media bio.
                  </span>
                  <div>
                    <ImageLazy
                      src="/images/quowrld-profile.png"
                      alt="relive-3"
                      className="rounded-lg"
                    />
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Motion>
  );
}
