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