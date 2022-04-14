import Image from "next/image";

export default function LoadingMessage() {
  return (
    <div className="my-6 flex items-center justify-center gap-2">
      <Image alt="loading gif" height="16" src="/img/loader.gif" width="16" />
      <p className="text-[17px] font-bold text-[#828282]">Loading</p>
    </div>
  );
}
