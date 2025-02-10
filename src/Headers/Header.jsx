/* eslint-disable react/prop-types */

function Header({currentMode}) {
  return (
    <div className={`px-[10px] py-[5px] ${currentMode.buttonsColor} rounded-3xl border ${currentMode.borderColor} border-solid flex`}>
      <img src={currentMode.image} alt="logo" className="size-[28px]" />
      <p className={`${currentMode.textColor} mt-[0.1rem] font-semibold ml-2 text-[16px]`}>{currentMode.title}</p>
    </div>
  );
}

export default Header;
