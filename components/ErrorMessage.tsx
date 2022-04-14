interface Props {
  message?: string;
}
export default function ErrorComponent({
  message = "Failed to Load Data",
}: Props) {
  return (
    <div className="my-6 flex justify-center">
      <p className="text-[17px] font-bold text-[#ec5757]">{message}</p>
    </div>
  );
}
