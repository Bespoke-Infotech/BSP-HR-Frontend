import { Dispatch, FC, Fragment, SetStateAction } from "react";

interface ITab {
  text: string;
  id: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Tab: FC<ITab> = ({ text, id, activeTab, setActiveTab }) => {
  return (
    <Fragment>
      <div className="pr-10">
        <div
          className={` text-[16px] leading-[24px]  py-[12px]  cursor-pointer ${
            activeTab === id
              ? "border-b-2 text-[#212529] border-bespokeGreen font-semibold"
              : "font-normal text-[#6F7174]"
          }`}
          onClick={() => setActiveTab(id)}
        >
          {text}
        </div>
      </div>
    </Fragment>
  );
};

export default Tab;
