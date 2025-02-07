/* eslint-disable react/prop-types */

function Header({currentMode}) {
  return (
    <div className={`px-[10px] py-[5px] ${currentMode.bgColor} rounded-3xl border border-white border-solid`}>
      <img src={currentMode.image} alt="logo" className="size-[28px] inline" />
      <p className="ml-2 text-white text-[16px] inline">{currentMode.title}</p>
    </div>
  );
}

export default Header;
