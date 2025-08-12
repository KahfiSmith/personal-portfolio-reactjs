import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function KpopPulls() {
  useTitle("Kpop Pulls");
  useScrollToTop();

  return (
    <Motion>
      {" "}
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="Kpop Pulls - Gacha for my bias, eating instant noodles for a week is not a problem"
            subtitle="July 8, 2025"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/kpopulls.png"
            alt="relive"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-[14px] leading-6 md:leading-7">
              KpopPulls is a web game that lets fans collect, track, and show
              off their favorite idols through a simple pull mechanic. Each tap
              on Pull Card reveals a new capsule with rarity tiers—Rising Star,
              Superstar, Idol Queen, and the ultra-rare Ultimate Bias. A
              transparent Pity Progress system keeps luck feeling fair, ensuring
              every pull moves you closer to a dream card. The clean interface
              highlights what matters—Pull Card, progress badges, Show Stats,
              and a Mute toggle—while My Collection acts like a digital binder
              where you can sort by group, rarity, or bias, view set completion,
              and share snapshots of your haul. Lightweight, fast, and
              mobile-friendly, KPOP Idol Gacha creates a cozy, fan-made space
              for both casual collectors and rare-card hunters—no pressure, just
              the thrill of the next reveal. Fan project; not affiliated with
              any agency or idol.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Home
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  On the Home page after a pull, the center Idol Gacha panel
                  showcases the card you just won in a large, clean preview so
                  the result feels front-and-center. The header keeps navigation
                  simple with the site branding plus two buttons—Home to stay on
                  the gacha screen and My Collection to view, sort, and save
                  your cards. Just below, quick controls let you Mute or unmute
                  the sound and open Show Stats to review pull counts, rarity
                  distribution, and recent drops. The Pity Progress badges
                  display live counters (e.g., 1/20) for Rising Star, Superstar,
                  Idol Queen, and Ultimate Bias, making your path toward a
                  guaranteed reward clear and fair. From here you can spin again
                  for an upgrade or jump to My Collection to organize and share
                  your haul—everything lightweight, responsive, and focused on
                  your latest pull.
                </span>
                <div>
                  <ImageLazy
                    src="/images/kpopulls-1.png"
                    alt="relive-1"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                History Pull
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The pull history appears when you tap Show Stats. At the top,
                  Pull Statistics summarizes your session: total pulls and how
                  many you’ve hit in each rarity (Rookie/Rising
                  Star/Superstar/Idol Queen/Ultimate Bias), plus simple
                  percentages so you can see your distribution at a glance; Pity
                  Pulls shows how many results were granted by the pity system.
                  Below that, Recent Pulls is a scrollable log where each row
                  records the exact time of the pull, the idol’s name, their
                  group, the rarity you got, and whether it was triggered by
                  pity (Yes/No). New pulls appear at the top, making it easy to
                  audit your streaks, spot duplicates, and verify that pity
                  counters are behaving as expected. Use Hide Stats to collapse
                  the panel and return to the main gacha view.
                </span>
                <div>
                  <ImageLazy
                    src="/images/kpopulls-2.png"
                    alt="relive-2"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Collection
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  This is the Collection page. A stats ribbon at the top
                  summarizes your library (e.g., “22 total cards, 14 unique”)
                  and offers quick actions to Export, Import, Share, or Clear
                  your collection. The Filters bar lets you narrow by Rarity and
                  Group, search by name, and choose a sort key (e.g., Date
                  Obtained) with an Ascending/Descending toggle. Below, Your
                  Collection displays cards in a grid. Each card is a mini
                  profile: the top label shows the group and a small bubble
                  indicates duplicate count; a large photo sits above details
                  like the idol’s name, a rarity pill (Rookie, Superstar,
                  Ultimate Bias, etc.), birthday, origin, positions/roles, and a
                  short quote. The View Profile button opens the full card info.
                  Overall, it’s built for fast browsing—adjust filters, watch
                  the grid update, and manage or share your collection in a
                  couple of clicks.
                </span>
                <div>
                  <ImageLazy
                    src="/images/kpopulls-3.png"
                    alt="relive-3"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Card Kpop
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  This is the Card Detail (profile) modal that opens when you
                  tap View Profile on a card. The title bar at the top shows the
                  idol’s name. On the left is a large portrait of the card; on
                  the right, the Idol Information panel lists key fields in a
                  clean, read-only layout: Full Name, Stage Name, Group, a color
                  Rarity badge, Birthdate, Birthplace, and Position(s). Beneath
                  the info, a highlighted quote box displays the card’s tagline
                  or catchphrase. Use the Close button in the bottom-right to
                  exit the modal and return to your collection. It’s a focused
                  view meant for quickly confirming a card’s bio and rarity
                  without leaving the collection page. Ask ChatGPT
                </span>
                <div>
                  <ImageLazy
                    src="/images/kpopulls-4.png"
                    alt="relive-3"
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
