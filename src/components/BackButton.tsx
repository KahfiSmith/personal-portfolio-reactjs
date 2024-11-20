import { BackButtonProps } from "@/types";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton({
  title,
  subtitle,
  titleColor,
}: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        onClick={handleBack}
        className="flex space-x-2 cursor-pointer group mb-6"
      >
        <MoveLeft className="transition-transform duration-300 ease-in-out group-hover:text-customTextV3 group-hover:-translate-x-2" />
        <span className="font-semibold">Back</span>
      </button>

      <div className="mb-6">
        <h2
          className={`mb-1 font-semibold text-xl md:text-2xl lg:text-3xl ${titleColor}`}
        >
          {title}
        </h2>
        <span className="font-normal text-base leading-7">{subtitle}</span>
      </div>
    </div>
  );
}
