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
    CHANGE_EXPAND
} from '../actions'

const initialState = {
    data: [
        { name: 'BMW 328ci', status: 'Active', percentSaved: '30', total: '35000', visible: true, expanded: false },
        { name: 'Gucci Belt', status: 'Paused', percentSaved: '90', total: '400', visible: true, expanded: false },
        { name: 'MacBook', status: 'Paused', percentSaved: '45', total: '1500', visible: true, expanded: false },
        { name: 'LG 4k tv', status: 'Active', percentSaved: '15', total: '2000', visible: true, expanded: false },
        { name: 'PlayStation 4', status: 'Paused', percentSaved: '65', total: '260', visible: true, expanded: false },
        { name: 'Lumix G7 Camera', status: 'Active', percentSaved: '75', total: '700', visible: true, expanded: false },
        { name: 'iPhone X', status: 'Active', percentSaved: '15', total: '1000', visible: true, expanded: false },
        { name: 'Oculus Rift S', status: 'Paused', percentSaved: '40', total: '399', visible: true, expanded: false },
    ]
}

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
            })
            return Object.assign({}, state, {
                data: [...newData]
            })

        case CHANGE_EXPAND:
            let expanded = state.data.map((val, index) => {
                let newExpand = action.item.expanded === false ? true : false;
                if (index !== action.item.index) {
                    return val
                }
                return Object.assign({}, val, {
                    expanded: newExpand
                })
            })
            return Object.assign({}, state, {
                data: [...expanded]
            })
        default: return state;
    };
};