import BackButton from "@/components/BackButton";
import ImageLazy from "@/components/ImageLazy";
import Motion from "@/components/Motion";
import { useScrollToTop, useTitle } from "@/hooks";

export default function CodeRoaster() {
  useTitle("Code Roaster");
  useScrollToTop();

  return (
    <Motion>
      {" "}
      <div className="w-full flex justify-center min-h-screen items-start pt-10">
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <BackButton
            title="Code Roaster - Code issues are my way of expressing that your coding is very poor"
            subtitle="July 21, 2025"
            titleColor="text-customTextV3"
          />
          <ImageLazy
            src="/images/coderoaster.png"
            alt="relive"
            className="mb-6 rounded-lg"
          />
          <div className="text-justify mb-6">
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              Introduction
            </h2>
            <p className="mb-6 text-sm md:text-[14px] leading-6 md:leading-7">
              Code Roaster is a playful code-review playground that turns
              feedback into something you’ll actually enjoy reading. Pick your
              reviewer “personality”—Sarcastic Roast, Brutally Honest, Mentor
              Supportive, Professional, Security Focus, or Best Practices—and
              get a tailored perspective on your code. Just drag & drop a file
              (JS/TS/JSX/TSX, Python, Java, C/C++, Go, Rust, PHP, and more) and
              the Code Review Results panel will deliver clear findings,
              actionable fixes, and quick wins. Save and compare runs in
              History, tweak the mode, and iterate fast. The goal: sharp, useful
              feedback—sometimes spicy, always constructive.
            </p>
            <h2 className="mb-3 font-medium text-lg md:text-xl lg:text-2xl">
              What are the features?
            </h2>
            <ul className="text-sm space-y-6 list-disc list-inside">
              <li className="font-medium text-lg">
                Code Reviewer
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  With the Sarcastic Roast persona selected, the right-hand Code
                  Review Results panel shows the output after you hit Start Code
                  Review. You’ll see a “Review complete” banner, a numeric Code
                  Quality Score (e.g., 3/10), and an Overall Roast summary—a
                  spicy, tongue-in-cheek take on your code’s state. Below that,
                  issues are listed in priority order with severity chips
                  (high/medium/low). Each card explains the problem in plain
                  English, adds roast-style commentary (often with a quick
                  analogy), and—most importantly—includes a concrete fix with
                  Before vs After code blocks (e.g., replace a hard-coded API
                  key with process.env.API_KEY). The list is scrollable so you
                  can tackle items one by one. You can switch personas at the
                  top to rerun the review in a different tone; the technical
                  findings remain, but the voice changes.
                </span>
                <div>
                  <ImageLazy
                    src="/images/coderoaster-1.png"
                    alt="relive-1"
                    className="rounded-lg"
                  />
                </div>
              </li>
              <li className="font-medium text-lg">
                History
                <span className="block font-normal text-sm md:text-[14px] leading-6 md:leading-7 ml-6 mb-4">
                  This is the Review History page—your archive of past code
                  reviews. A search bar and four summary tiles give a quick
                  pulse: total reviews, average score, total critical issues,
                  and how many languages you’ve reviewed. On the left, the
                  filter rail lets you narrow results by Language, Review Type
                  (persona), Severity, and Date Range; you can refresh the list,
                  export your history, or clear it entirely. Each item in the
                  list represents one review run. It shows the file name (e.g.,
                  index.ts), tags for language and persona (such as sarcastic),
                  a large Score tile, and counts of Critical, Warning, and Info
                  findings. The footer line records the timestamp, file size,
                  and total issues found. Use the eye icon to reopen the full
                  report and the trash icon to delete that entry. It’s built to
                  help you compare iterations and see whether your fixes are
                  actually improving the score over time.
                </span>
                <div>
                  <ImageLazy
                    src="/images/coderoaster-2.png"
                    alt="relive-2"
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
