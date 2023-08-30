interface FootBarProps {
  isVisible?: boolean;
}
const FootBar = ({ isVisible = true }: FootBarProps) => {
  return (
    <div
      className={`text-s flex justify-center pb-[80px] ${
        isVisible ? "text-[#8F8C8C]" : "text-black"
      }`}
    >
      <div className="flex flex-col space-y-[1px] text-center">
        <p>
          INSTA <a href="https://instagram.com/pearluk_kr">@pearluk_kr</a>
        </p>
        <div className="h-[20px]"></div>
        <p>펄룩 PEARLUK</p>
        <p>BUSINESS NO 203-73-81668</p>
        <p>TELL 010-9465-7903</p>
        <p>E-MAIL gunho227@naver.com</p>
      </div>
    </div>
  );
};

export default FootBar;
