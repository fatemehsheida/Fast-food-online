import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-slate-900 h-15 w-full flex flex-row justify-center fixed bottom-0 items-center px-10 py-4 text-slate-100">
      <div className="flex gap-[2px]">
        <div className="text-xs">
          <AiOutlineCopyrightCircle />
        </div>
        <p className="text-xs font-semibold">2024 تمامی حقوق محفوظ است.</p>
      </div>
    </div>
  );
}
