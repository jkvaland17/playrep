import React from "react";
import moment from "moment";

const CustomDateFilter = ({ filterData, setFilterData, addPropsFilter }) => {
    const handleDatePicker = (event, type) => {
        const newValue = event.target.value;
        if (type === 'startDate') {
            setFilterData({
                ...filterData,
                [type]: moment(newValue).format('YYYY-MM-DD'),
                statusValue: "Custom",
                endDate: null
            });
        } else {
            setFilterData({ ...filterData, endDate: moment(newValue).format('YYYY-MM-DD') });
        }
    };

    return (
        <div className="custom_date_filter">
            <label className="date-label" htmlFor="start-date">Start date</label>
            <div className="start-date-picker">
                <input
                    type="date"
                    name="start-date"
                    value={filterData?.startDate || ''}
                    onChange={(event) => handleDatePicker(event, 'startDate')}
                    max={addPropsFilter?.isTDSChallan ? moment().subtract(1, 'day').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
                    placeholder="Select Start Date"
                />
            </div>

            {!addPropsFilter?.inActiveUsers && (
                <>
                    <label className="date-label" htmlFor="end-date">End date</label>
                    <div className="end-date-picker">
                        <input
                            type="date"
                            name="end-date"
                            value={filterData?.endDate || ''}
                            onChange={(event) => handleDatePicker(event, 'endDate')}
                            min={filterData?.startDate || ''}
                            max={addPropsFilter?.isTDSChallan ? moment().subtract(1, 'day').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
                            placeholder="Select End Date"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CustomDateFilter;
