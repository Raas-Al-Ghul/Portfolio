import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ResumeModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      
      <div className="relative w-[90%] h-[90%] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:scale-110 transition"
        >
          <X size={20} />
        </button>

        {/* PDF Viewer */}
        <iframe
          src="/Adarsh_Mishra_Resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default ResumeModal;