import React from "react";
import DayWiseDropDown from "./DayWiseDropDown";
import CustomDateFilter from "./CustomDateFilter";
import SearchFilter from "./SearchFilter";

const MainCommonFilter = ({
  filterData,
  setFilterData,
  searchApiHandler,
  addPropsFilter,
  pagination,
  setPagination,
  isSearchTooltip,
  userSearchApiHandler,
}) => {
  const commonOptions = ["All Days", "Custom"];
  return (
    <>
      <div className={"filter_details_tab_section"}>
        <div className={"filter_inner_tab_info"}>
          {/* <DayWiseDropDown
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
          )} */}
          <CustomDateFilter
              filterData={filterData}
              setFilterData={setFilterData}
              addPropsFilter={addPropsFilter?.isTDSChallan}
            />
          <SearchFilter
            filterData={filterData}
            setFilterData={setFilterData}
            searchApiHandler={searchApiHandler}
            pagination={pagination}
            setPagination={setPagination}
            isSearchTooltip={isSearchTooltip}
            userSearchApiHandler={userSearchApiHandler}
            isTdsUser={addPropsFilter?.isTdsUser}
          />
        </div>
      </div>
    </>
  );
};

export default MainCommonFilter;
