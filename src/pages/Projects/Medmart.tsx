import BackButton from "@/components/BackButton";
import { useScrollToTop, useTitle } from "@/hooks";

export default function Medmart() {
  useTitle("Medmart");
  useScrollToTop();

  return (
    <div className="w-full flex justify-center min-h-screen items-start pt-10">
      <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
        <BackButton
          title="Medmart - Platform for buying and selling medicines"
          subtitle="June 28, 2023"
          titleColor="text-customTextV3"
        />
        <img
          src="/images/medmart.svg"
          alt="medmart"
          className="mb-6 rounded-lg"
        />
        <div className="text-justify mb-6">
          <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
            Introduction
          </h2>
          <p className="mb-2 text-sm md:text-base leading-6 md:leading-7">
            Actually, Medmart is one of the design competitions that I
            participated in via the Instagram platform. This design is designed
            to make it easier for you to get medicines quickly and safely from
            anywhere. With a simple design and elegant colors, this application
            offers an exceptional and intuitive user experience.
          </p>
          <p className="mb-6 text-sm md:text-base leading-6 md:leading-7">
            Our user interface was designed with a focus on simplicity and ease
            of navigation. The colors used in the app are carefully selected to
            create a display that is not only visually appealing but also easy
            on the eyes, ensuring a pleasant shopping experience.
          </p>
          <img
            src="/images/medmart-1.svg"
            alt="medmart-1"
            className="mb-6 rounded-lg"
          />
          <p className="mb-6 text-sm md:text-base leading-6 md:leading-7">
            Our user interface was designed with a focus on simplicity and ease
            of navigation. The colors used in the app are carefully selected to
            create a display that is not only visually appealing but also easy
            on the eyes, ensuring a pleasant shopping experience.
          </p>
          <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
            What are the features?
          </h2>
          <ul className="text-sm space-y-4 list-disc list-inside">
            <li className="font-medium text-lg">
              Medicine search feature
              <span className="block font-normal mt-1 text-sm md:text-base leading-6 md:leading-7 ml-6">
                This feature allows users to easily search for the medication
                they need. Users can enter drug names, categories, or disease
                symptoms to find a list of relevant medicine. This sophisticated
                search feature is designed to provide fast and accurate results,
                making it easier for users to navigate the wide selection of
                medications available in the application.
              </span>
            </li>
            <li className="font-medium text-lg">
              View medicine categories
              <span className="block font-normal mt-1 text-sm md:text-base leading-6 md:leading-7 ml-6">
                In this feature, medications are grouped by type of use, such as
                analgesics, antibiotics, or vitamins and supplements. It helps
                users to easily browse and select drugs based on specific
                categories according to their needs. These categories are
                arranged systematically to make it easier for users to find the
                right product.
              </span>
            </li>
            <li className="font-medium text-lg">
              Favorite product
              <span className="block font-normal mt-1 text-sm md:text-base leading-6 md:leading-7 ml-6">
                This feature allows users to save medicines that they frequently
                buy or that they want to buy in the future into their favorites
                list. This way, users can quickly access a list of these
                medications without needing to search again in the future,
                simplifying the repeat purchasing process.
              </span>
            </li>
            <li className="font-medium text-lg">
              Cart Features
              <span className="block font-normal mt-1 text-sm md:text-base leading-6 md:leading-7 ml-6">
                The basket feature functions as a place for users to save their
                choice of medicines before making payment. Users can add a
                number of medications to their cart while continuing to shop,
                and then edit the quantity or remove medications from the cart
                before completing the transaction.
              </span>
            </li>
            <li className="font-medium text-lg">
              Transaction
              <span className="block font-normal mt-1 text-sm md:text-base leading-6 md:leading-7 ml-6">
                This feature manages the payment process and purchase
                confirmation. Users can choose their preferred payment method,
                starting from payment via credit card, e-wallet, or bank
                transfer. The application also ensures transaction security by
                using the latest encryption and data protection to protect
                users' personal and financial information.
              </span>
            </li>
            <li className="font-medium text-lg">
              Product purchase history
              <p className="block font-normal mt-1 text-sm md:text-base leading-6 md:leading-7 ml-6">
                his feature allows users to view the history of all purchases
                they have previously made in the app. This is useful for
                tracking purchases, managing budgets, or for medical purposes
                where users need to know the history of medications they have
                taken.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
