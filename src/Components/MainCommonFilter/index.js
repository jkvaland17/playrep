import React from "react";
import DayWiseDropDown from "./DayWiseDropDown";
import CustomDateFilter from "./CustomDateFilter";

const MainCommonFilter = ({
  filterData,
  setFilterData,
  searchApiHandler,
  addPropsFilter,
}) => {
  const commonOptions = ["All Days", "Custom"];
  return (
    <>
      <div className={"filter_details_tab_section"}>
        <div className={"filter_inner_tab_info"}>
          <DayWiseDropDown
            option={[...commonOptions]}
            name={"statusValue"}
            filterData={filterData}
            setFilterData={setFilterData}
          />
          {filterData?.statusValue === "Custom" && (
            <CustomDateFilter
              filterData={filterData}
              setFilterData={setFilterData}
              addPropsFilter={addPropsFilter?.isTDSChallan}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MainCommonFilter;
