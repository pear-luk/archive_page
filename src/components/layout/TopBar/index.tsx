interface TopBarProps {
  isVisible?: boolean;
}

const TopBar = ({ isVisible = true }: TopBarProps) => {
  return (
    <div className="text-#FDE11D-100 flex -scale-x-100 transform justify-center bg-transparent py-8">
      <div>
        <div
          className={`text-[70px] font-black text-${
            isVisible ? "[#FDE11D]" : "black"
          }`}
        >
          PEARLUK
        </div>
      </div>
    </div>
  );
};

export default TopBar;
