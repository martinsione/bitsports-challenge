interface Props {
  message?: string;
}
export default function ErrorComponent({
  message = "Failed to Load Data",
}: Props) {
  return <p className="mt-6 text-[17px] font-bold text-[#ec5757]">{message}</p>;
}
