import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      className="fixed bottom-4 right-4 bg-customSoft/60 rounded-md p-2 hover:text-white z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp />
    </button>
  );
}
