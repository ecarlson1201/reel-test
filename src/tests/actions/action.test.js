import {
    SORT_LIST_AZ,
    SORT_LIST_ZA,
    SORT_LIST_PERCENT_HIGH_LOW,
    SORT_LIST_PERCENT_LOW_HIGH,
    SORT_LIST_TOTAL_HIGH_LOW,
    SORT_LIST_TOTAL_LOW_HIGH,
    SORT_LIST_STATUS_ACTIVE,
    SORT_LIST_STATUS_PAUSED,
    SEARCH_LIST,
    CHANGE_STATUS,
    CHANGE_EXPAND,
    EXPAND_ALL,
    CLICK_CALC_ITEM,
    CLICK_CALC_PRICE,
    CLICK_CALCULATE,
    CLICK_DISPLAY_CALC,
    sortListAZ,
    sortListZA,
    sortListPercentHighLow,
    sortListPercentLowHigh,
    sortListTotalHighLow,
    sortListTotalLowHigh,
    sortListStatusActive,
    sortListStatusPaused,
    searchList,
    changeStatus,
    changeExpand,
    expandAll,
    clickCalcItem,
    clickCalcPrice,
    clickCalculate,
    clickDisplayCalc,
} from '../../actions';

describe('sortListAZ', () => {
    it('Should return the action', () => {
        const action = sortListAZ();
        expect(action.type).toEqual(SORT_LIST_AZ);
    });
});

describe('sortListZA', () => {
    it('Should return the action', () => {
        const action = sortListZA();
        expect(action.type).toEqual(SORT_LIST_ZA);
    });
});

describe('sortListPercentHighLow', () => {
    it('Should return the action', () => {
        const action = sortListPercentHighLow();
        expect(action.type).toEqual(SORT_LIST_PERCENT_HIGH_LOW);
    });
});

describe('sortListPercentLowHigh', () => {
    it('Should return the action', () => {
        const action = sortListPercentLowHigh();
        expect(action.type).toEqual(SORT_LIST_PERCENT_LOW_HIGH);
    });
});

describe('sortListTotalHighLow', () => {
    it('Should return the action', () => {
        const action = sortListTotalHighLow();
        expect(action.type).toEqual(SORT_LIST_TOTAL_HIGH_LOW);
    });
});

describe('sortListTotalLowHigh', () => {
    it('Should return the action', () => {
        const action = sortListTotalLowHigh();
        expect(action.type).toEqual(SORT_LIST_TOTAL_LOW_HIGH);
    });
});

describe('sortListStatusActive', () => {
    it('Should return the action', () => {
        const action = sortListStatusActive();
        expect(action.type).toEqual(SORT_LIST_STATUS_ACTIVE);
    });
});

describe('sortListStatusPaused', () => {
    it('Should return the action', () => {
        const action = sortListStatusPaused();
        expect(action.type).toEqual(SORT_LIST_STATUS_PAUSED);
    });
});

describe('searchList', () => {
    it('Should return the action', () => {
        const action = searchList();
        expect(action.type).toEqual(SEARCH_LIST);
    });
});

describe('changeStatus', () => {
    it('Should return the action', () => {
        const action = changeStatus();
        expect(action.type).toEqual(CHANGE_STATUS);
    });
});

describe('changeExpand', () => {
    it('Should return the action', () => {
        const action = changeExpand();
        expect(action.type).toEqual(CHANGE_EXPAND);
    });
});

describe('expandAll', () => {
    it('Should return the action', () => {
        const action = expandAll();
        expect(action.type).toEqual(EXPAND_ALL);
    });
});

describe('clickCalcItem', () => {
    it('Should return the action', () => {
        const action = clickCalcItem();
        expect(action.type).toEqual(CLICK_CALC_ITEM);
    });
});

describe('clickCalcPrice', () => {
    it('Should return the action', () => {
        const action = clickCalcPrice();
        expect(action.type).toEqual(CLICK_CALC_PRICE);
    });
});

describe('clickCalculate', () => {
    it('Should return the action', () => {
        const action = clickCalculate();
        expect(action.type).toEqual(CLICK_CALCULATE);
    });
});

describe('clickDisplayCalc', () => {
    it('Should return the action', () => {
        const action = clickDisplayCalc();
        expect(action.type).toEqual(CLICK_DISPLAY_CALC);
    });
});