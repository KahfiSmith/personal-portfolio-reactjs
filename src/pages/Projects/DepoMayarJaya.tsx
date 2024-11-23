import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function DepoMayarJaya() {
  useTitle("Depo Mayar Jaya");
  useScrollToTop();

  return (
    <Motion>
      {" "}
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="Depo Mayar Jaya - A sales management website"
            subtitle="August 22, 2023"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/depomayarjaya-4.png"
            alt="depomayarjaya-4"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-base leading-6 md:leading-7">
              Welcome to Depo Mayar Jaya a comprehensive web platform
              specifically designed to facilitate the management of sales and
              distribution of products such as gallons of water and LPG. With
              this website you can optimize your business operations from one
              integrated dashboard, enabling stock, customer and sales
              management to be more efficient and effective.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Dashboard
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The dashboard is a control center where you can see various
                  key performance metrics, including revenue per day, per month,
                  per year, as well as total income during operating time. This
                  feature is very important because it provides a quick overview
                  of your business's financial performance in real-time. This
                  revenue data is also presented in graphical form, making it
                  easier for you to see sales trends and patterns as well as
                  helping in analysis and strategic decision making.
                </span>
                <div>
                  <ImageLazy
                    src="/images/depomayarjaya-1.png"
                    alt="depomayarjaya-1"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                Customer
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  This feature saves and displays a list of all your customers.
                  Information about customers such as name, contact and other
                  details is stored here, allowing you to better manage customer
                  relationships. You may use this information for promotional
                  activities, customer service, or more targeted marketing
                  initiatives.
                </span>
                <div>
                  <ImageLazy
                    src="/images/depomayarjaya-2.png"
                    alt="depomayarjaya-2"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                History
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  The history section presents a complete list of all
                  transactions that have been carried out. Every transaction is
                  recorded with details including date, amount and items
                  purchased. This feature is also equipped with the ability to
                  filter transaction history results based on various criteria
                  such as date, customer, or amount, which makes it easier to
                  search for specific transactions. In addition, there is an
                  option to print transactions which makes it easier to create
                  physical reports or other documentation needs.
                </span>
                <div>
                  <ImageLazy
                    src="/images/depomayarjaya-3.png"
                    alt="depomayarjaya-3"
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
