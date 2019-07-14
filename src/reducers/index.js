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
    CLICK_DISPLAY_CALC
} from '../actions'

const initialState = {
    data: [
        { name: 'BMW 328ci', status: 'Active', percentSaved: '30', total: '35000', visible: true, expanded: true },
        { name: 'Gucci Belt', status: 'Paused', percentSaved: '90', total: '400', visible: true, expanded: true },
        { name: 'MacBook', status: 'Paused', percentSaved: '45', total: '1500', visible: true, expanded: true },
        { name: 'LG 4k tv', status: 'Active', percentSaved: '15', total: '2000', visible: true, expanded: true },
        { name: 'PlayStation 4', status: 'Paused', percentSaved: '65', total: '260', visible: true, expanded: true },
        { name: 'Lumix G7 Camera', status: 'Active', percentSaved: '75', total: '700', visible: true, expanded: true },
        { name: 'iPhone X', status: 'Active', percentSaved: '15', total: '1000', visible: true, expanded: true },
        { name: 'Oculus Rift S', status: 'Paused', percentSaved: '40', total: '399', visible: true, expanded: true },
    ],
    expandAll: true,
    calcPrice: 0,
    calcItem: 0,
    calculated: 0,
    displayCalc: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SORT_LIST_AZ:
            function compare(a, b) {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                let comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                } else if (nameA < nameB) {
                    comparison = -1;
                };
                return comparison;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(compare)]
            });
        case SORT_LIST_ZA:
            function reverseCompare(a, b) {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                let comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                } else if (nameA < nameB) {
                    comparison = -1;
                };
                return comparison * -1;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(reverseCompare)]
            });
        case SORT_LIST_PERCENT_HIGH_LOW:
            function compareHighPercent(a, b) {
                const numA = parseInt(a.percentSaved);
                const numB = parseInt(b.percentSaved);

                let comparison = 0;
                if (numA > numB) {
                    comparison = -1;
                } else if (numA < numB) {
                    comparison = 1;
                };
                return comparison;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(compareHighPercent)]
            });
        case SORT_LIST_PERCENT_LOW_HIGH:
            function compareLowPercent(a, b) {
                const numA = parseInt(a.percentSaved);
                const numB = parseInt(b.percentSaved);

                let comparison = 0;
                if (numA > numB) {
                    comparison = 1;
                } else if (numA < numB) {
                    comparison = -1;
                };
                return comparison;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(compareLowPercent)]
            });
        case SORT_LIST_TOTAL_HIGH_LOW:
            function compareHighTotal(a, b) {
                const numA = parseInt(a.total);
                const numB = parseInt(b.total);

                let comparison = 0;
                if (numA > numB) {
                    comparison = -1;
                } else if (numA < numB) {
                    comparison = 1;
                };
                return comparison;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(compareHighTotal)]
            });
        case SORT_LIST_TOTAL_LOW_HIGH:
            function compareLowTotal(a, b) {
                const numA = parseInt(a.total);
                const numB = parseInt(b.total);

                let comparison = 0;
                if (numA > numB) {
                    comparison = 1;
                } else if (numA < numB) {
                    comparison = -1;
                };
                return comparison;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(compareLowTotal)]
            });
        case SORT_LIST_STATUS_ACTIVE:
            function compareActive(a, b) {
                const nameA = a.status.toUpperCase();
                const nameB = b.status.toUpperCase();

                let comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                } else if (nameA < nameB) {
                    comparison = -1;
                };
                return comparison;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(compareActive)]
            });
        case SORT_LIST_STATUS_PAUSED:
            function comparePaused(a, b) {
                const statusA = a.status.toUpperCase();
                const statusB = b.status.toUpperCase();

                let comparison = 0;
                if (statusA > statusB) {
                    comparison = 1;
                } else if (statusA < statusB) {
                    comparison = -1;
                }
                return comparison * -1;
            };
            return Object.assign({}, state, {
                data: [...state.data.sort(comparePaused)]
            });
        case SEARCH_LIST:
            const searchedList = state.data.map((val, index) => {
                let num = val.name.toLowerCase().search(action.text.toLowerCase())
                if (num < 0) {
                    val.visible = false
                } else {
                    val.visible = true;
                };
                return val;
            });
            return Object.assign({}, state, {
                data: [...searchedList]
            });
        case CHANGE_STATUS:
            let newData = state.data.map((val, index) => {
                let newStatus = action.item.status === 'Paused' ? 'Active' : 'Paused';
                if (index !== action.item.index) {
                    return val
                }
                return Object.assign({}, val, {
                    status: newStatus
                })
            });
            return Object.assign({}, state, {
                data: [...newData]
            });
        case CHANGE_EXPAND:
            let expanded = state.data.map((val, index) => {
                let newExpand = action.item.expanded === false ? true : false;
                if (index !== action.item.index) {
                    return val
                }
                return Object.assign({}, val, {
                    expanded: newExpand
                })
            });
            return Object.assign({}, state, {
                data: [...expanded]
            });
        case EXPAND_ALL:
            let newState = !state.expandAll
            let expandAll = state.data.map((val, index) => {
                return Object.assign({}, val, {
                    expanded: newState
                });
            });
            return Object.assign({}, state, {
                data: expandAll,
                expandAll: newState
            });
        case CLICK_CALC_PRICE:
            let newClickPrice = action.num;
            return Object.assign({}, state, {
                calcPrice: newClickPrice
            });
        case CLICK_CALC_ITEM:
            let newClickItem = action.num;
            return Object.assign({}, state, {
                calcItem: newClickItem
            });
        case CLICK_CALCULATE:
            let activeItems = state.data.reduce((acc, val) => {
                if (val.status === 'Active' && val.visible === true) {
                    acc.push(val)
                };
                return acc;
            }, []);

            let expandedItems = state.data.reduce((acc, val) => {
                if (val.expanded === true && val.visible === true) {
                    acc.push(val)
                };
                return acc;
            }, []);

            let currSavedAmt = function (array) {
                let total = 0;
                for (let i = 0; i < array.length; i++) {
                    let curr = parseInt(array[i].total) * (parseInt(array[i].percentSaved) / 100);
                    total += curr;
                };
                return total;
            };

            let currAmtRemain = function (array) {
                let total = 0;
                for (let i = 0; i < array.length; i++) {
                    let curr = parseInt(array[i].total) * (parseInt(array[i].percentSaved) / 100);
                    let calcRemain = array[i].total - curr;
                    total += calcRemain;
                };
                return total;
            };

            let totalPrice = function (array) {
                let total = 0;
                for (let i = 0; i < array.length; i++) {
                    let curr = parseInt(array[i].total);
                    total += curr;
                };
                return total;
            };

            let newCalculated = function () {
                if (state.calcItem === 0 && state.calcPrice === 0) {
                    return currSavedAmt(activeItems);
                } else if (state.calcItem === 0 && state.calcPrice === 1) {
                    return currAmtRemain(activeItems);
                } else if (state.calcItem === 0 && state.calcPrice === 2) {
                    return totalPrice(activeItems);
                } else if (state.calcItem === 1 && state.calcPrice === 0) {
                    return currSavedAmt(expandedItems);
                } else if (state.calcItem === 1 && state.calcPrice === 1) {
                    return currAmtRemain(expandedItems);
                } else if (state.calcItem === 1 && state.calcPrice === 2) {
                    return totalPrice(expandedItems);
                } else if (state.calcItem === 2 && state.calcPrice === 0) {
                    return currSavedAmt(state.data);
                } else if (state.calcItem === 2 && state.calcPrice === 1) {
                    return currAmtRemain(state.data);
                } else if (state.calcItem === 2 && state.calcPrice === 2) {
                    return totalPrice(state.data);
                };
            };
            return Object.assign({}, state, {
                calculated: newCalculated().toFixed(2)
            });
            case CLICK_DISPLAY_CALC:
                let newDisplayCalc = !state.displayCalc;
                console.log(newDisplayCalc)
                return Object.assign({}, state, {
                    displayCalc: newDisplayCalc
                });
        default: return state;
    };
};