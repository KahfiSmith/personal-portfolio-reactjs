import Motion from "@/components/Motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Motion>
      {" "}
      <div className="relative flex flex-col items-center justify-center h-screen bg-slate-900 overflow-hidden">
        <div className="custom-gradient-background"></div>
        <h1 className="text-[100px] font-bold text-slate-200 -tracking-tighter relative z-10">
          404
        </h1>
        <p className="text-slate-200 mb-6 relative z-10">
          Oops! The page you're looking for doesn't exist.
        </p>        <button
          onClick={handleGoBack}
          className="px-10 py-2 bg-gradient-to-r from-[#273751] to-[#182237] text-white rounded font-medium transition-all hover:shadow-lg hover:shadow-[#2b3c57]/70 shadow-lg shadow-[#2b3c57]/50 border-1 border-white/10"
        >
          Go to Home
        </button>
      </div>
    </Motion>
  );
}
