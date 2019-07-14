export const SORT_LIST_AZ = 'SORT_LIST_AZ';
export const sortListAZ = () => ({
    type: SORT_LIST_AZ
});

export const SORT_LIST_ZA = 'SORT_LIST_ZA';
export const sortListZA = () => ({
    type: SORT_LIST_ZA
});

export const SORT_LIST_PERCENT_HIGH_LOW = 'SORT_LIST_PERCENT_HIGH_LOW';
export const sortListPercentHighLow = () => ({
    type: SORT_LIST_PERCENT_HIGH_LOW
});

export const SORT_LIST_PERCENT_LOW_HIGH = 'SORT_LIST_PERCENT_LOW_HIGH';
export const sortListPercentLowHigh = () => ({
    type: SORT_LIST_PERCENT_LOW_HIGH
});

export const SORT_LIST_TOTAL_HIGH_LOW = 'SORT_LIST_TOTAL_HIGH_LOW';
export const sortListTotalHighLow = () => ({
    type: SORT_LIST_TOTAL_HIGH_LOW
});

export const SORT_LIST_TOTAL_LOW_HIGH = 'SORT_LIST_TOTAL_LOW_HIGH';
export const sortListTotalLowHigh = () => ({
    type: SORT_LIST_TOTAL_LOW_HIGH
});

export const SORT_LIST_STATUS_ACTIVE = 'SORT_LIST_STATUS_ACTIVE';
export const sortListStatusActive = () => ({
    type: SORT_LIST_STATUS_ACTIVE
});

export const SORT_LIST_STATUS_PAUSED = 'SORT_LIST_STATUS_PAUSED';
export const sortListStatusPaused = () => ({
    type: SORT_LIST_STATUS_PAUSED
});

export const SEARCH_LIST = 'SEARCH_LIST';
export const searchList = (text) => ({
    type: SEARCH_LIST,
    text
});

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (item) => ({
    type: CHANGE_STATUS,
    item
});

export const CHANGE_EXPAND = 'CHANGE_EXPAND';
export const changeExpand = (item) => ({
    type: CHANGE_EXPAND,
    item
});

export const EXPAND_ALL = 'EXPAND_ALL';
export const expandAll = () => ({
    type: EXPAND_ALL
});

export const CLICK_CALC_PRICE = 'CLICK_CALC_PRICE';
export const clickCalcPrice = (num) => ({
    type: CLICK_CALC_PRICE,
    num
});

export const CLICK_CALC_ITEM = 'CLICK_CALC_ITEM';
export const clickCalcItem = (num) => ({
    type: CLICK_CALC_ITEM,
    num
});

export const CLICK_CALCULATE = 'CLICK_CALCULATE';
export const clickCalculate = () => ({
    type: CLICK_CALCULATE
});

export const CLICK_DISPLAY_CALC = 'CLICK_DISPLAY_CALC';
export const clickDisplayCalc = () => ({
    type: CLICK_DISPLAY_CALC
});