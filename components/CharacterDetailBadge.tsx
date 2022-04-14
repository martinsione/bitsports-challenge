interface Props {
  label: string;
  value?: string;
}
export default function CharacterDetailBadge({ label, value }: Props) {
  return (
    <div className="-mr-6 flex justify-between border-b py-4 text-[17px]">
      <p className="font-bold text-[#828282]">{label}</p>
      {value && <p className="mr-6 font-bold">{value}</p>}
    </div>
  );
}
