import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function Ternakq() {
  useTitle("TernakQ");
  useScrollToTop();

  return (
    <Motion>
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="TernakQ - A Animal Husbandary Education"
            subtitle="May 22, 2025"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/ternakq-beranda.png"
            alt="ternakq-beranda"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-base leading-6 md:leading-7">
              Welcome to the Poultry Farm Management Website — a web-based
              platform designed specifically for broiler chicken farm owners and managers
              to efficiently handle their operations. This system provides integrated tools
              to manage coops, monitor chicken health, track feed consumption,
              and oversee financial performance. Beyond operational tools, the
              website also includes educational content and a discussion forum
              to foster a knowledge-sharing community among broiler farmers.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Dashboard Overview
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Monitor key broiler farming metrics in one centralized dashboard.
                  View real-time updates on coop occupancy, broiler population, feed stock,
                  and financial snapshots to support quick and effective farm management decisions.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-dashboard.png"
                    alt="dashboard"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Cage Management
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Efficiently manage broiler cages by tracking cage capacity, temperature,
                  hygiene levels, and stocking density. This helps create optimal conditions
                  for fast broiler growth while minimizing stress and disease risk.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-cage.png"
                    alt="ternakq-cage"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Chicken Management
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Keep precise records of your broilers, including batch origin, age, weight,
                  health monitoring, and mortality rate. Use this data to optimize performance
                  and support better decision-making throughout the broiler production cycle.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-chicken.png"
                    alt="ternakq-chicken"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Feed Management
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Track broiler feed inventory and record daily consumption to ensure balanced
                  nutrition at each growth stage. Reduce waste and improve feed conversion rates
                  by aligning feed portions with the specific needs of broiler chickens.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-food.png"
                    alt="ternakq-food"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Financial Management
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Manage income and expenses related to broiler farming with comprehensive financial tools.
                  Analyze profitability, track operational costs, and generate reports to improve farm budgeting
                  and financial planning.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-finance.png"
                    alt="ternakq-finance"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Educational Articles
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Access in-depth articles focused on broiler chicken farming practices. Learn about
                  proper feed formulation, disease prevention, ventilation, biosecurity, and tips
                  for maximizing broiler weight gain and survival rate.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-article.png"
                    alt="ternakq-article"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Discussion Forum
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  Engage with fellow broiler farmers through an integrated forum. Share practical
                  experiences, ask for solutions to common challenges, and stay updated on the
                  latest trends in broiler poultry farming.
                </span>
                <div>
                  <ImageLazy
                    src="/images/ternakq-forum.png"
                    alt="ternakq-forum"
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
