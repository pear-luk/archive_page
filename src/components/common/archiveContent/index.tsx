interface ArchiveContentProps {
  content: string;
}

const ArchiveContent = ({ content }: ArchiveContentProps) => {
  console.log(content.split("\n"));
  return (
    <div className="w-full justify-center p-[24px] text-start text-[15px] font-normal text-[#FDE11D]">
      {content
        .split("\n")
        .map((line, i) => (line ? <p key={`${line}-${i}`}>{line}</p> : <br />))}
    </div>
  );
};

export default ArchiveContent;
