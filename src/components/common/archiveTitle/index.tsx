interface ArchiveTitleProps {
  title: string;
}
const ArchiveTitle = ({ title }: ArchiveTitleProps) => {
  return (
    <div className="mt-[24px] flex w-full justify-center text-[20px] font-extrabold text-[#FDE11D]">
      <div className="">{title}</div>
    </div>
  );
};

export default ArchiveTitle;
