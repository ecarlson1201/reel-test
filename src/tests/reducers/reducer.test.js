import {
    sortListAZ,
    sortListZA,
    sortListPercentHighLow,
    sortListPercentLowHigh,
    sortListTotalHighLow,
    sortListTotalLowHigh,
    sortListStatusActive,
    sortListStatusPaused,
    searchList,
    expandAll,
    clickCalcPrice,
    clickCalcItem,
    clickCalculate,
    clickDisplayCalc
} from '../../actions';
import reducer from '../../reducers';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
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

        }
        const state = reducer(undefined, { type: "__UNKNOWN" });
        expect(state).toEqual(initialState);
    });
    describe('Sort AZ', () => {
        it('Should sort data alphabetically', () => {
            let state;
            state = reducer(state, sortListAZ());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [{ "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true }],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('Sort ZA', () => {
        it('Should sort data reverse alphabetically', () => {
            let state;
            state = reducer(state, sortListZA());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true }
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('sortListPercentHighLow', () => {
        it('Should sort data from highest percent saved to lowest', () => {
            let state;
            state = reducer(state, sortListPercentHighLow());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('sortListPercentLowHigh', () => {
        it('Should sort data from lowest percent saved to highest', () => {
            let state;
            state = reducer(state, sortListPercentLowHigh());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('sortListTotalHighLow', () => {
        it('Should sort data from highest total to lowest', () => {
            let state;
            state = reducer(state, sortListTotalHighLow());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('sortListTotalLowHigh', () => {
        it('Should sort data from lowest total to highest', () => {
            let state;
            state = reducer(state, sortListTotalLowHigh());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('sortListStatusActive', () => {
        it('Should sort data active status first', () => {
            let state;
            state = reducer(state, sortListStatusActive());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('sortListStatusPaused', () => {
        it('Should sort data paused status first', () => {
            let state;
            state = reducer(state, sortListStatusPaused());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": true },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": true },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": true },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": true },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": true },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('searchList', () => {
        it('Should search the data', () => {
            let state;
            state = reducer(state, searchList('b'));
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": false },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": false },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": false },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": false },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": false },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('expandAll', () => {
        it('Should set all expanded to true', () => {
            let state;
            state = reducer(state, expandAll());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": false, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": false },
                    { "expanded": false, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": false },
                    { "expanded": false, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": false, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": false, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": false },
                    { "expanded": false, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": false },
                    { "expanded": false, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": false },
                    { "expanded": false, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": false
            });
        });
    });
    describe('clickCalcPrice', () => {
        it('Should set desired price for calculation', () => {
            let state;
            state = reducer(state, clickCalcPrice(1));
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 1,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": false },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": false },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": false },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": false },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": false },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('clickCalcItem', () => {
        it('Should set desired item for calculation', () => {
            let state;
            state = reducer(state, clickCalcItem(1));
            expect(state).toEqual({
                "calcItem": 1,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": false },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": false },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": false },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": false },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": false },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('clickCalculate', () => {
        it('Should execute a calculation', () => {
            let state;
            state = reducer(state, clickCalculate());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": '10500.00',
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": false },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": false },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": false },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": false },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": false },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": false,
                "expandAll": true
            });
        });
    });
    describe('clickDisplayCalc', () => {
        it('Should toggle display calc boolean', () => {
            let state;
            state = reducer(state, clickDisplayCalc());
            expect(state).toEqual({
                "calcItem": 0,
                "calcPrice": 0,
                "calculated": 0,
                "data": [
                    { "expanded": true, "name": "PlayStation 4", "percentSaved": "65", "status": "Paused", "total": "260", "visible": false },
                    { "expanded": true, "name": "Oculus Rift S", "percentSaved": "40", "status": "Paused", "total": "399", "visible": false },
                    { "expanded": true, "name": "Gucci Belt", "percentSaved": "90", "status": "Paused", "total": "400", "visible": true },
                    { "expanded": true, "name": "MacBook", "percentSaved": "45", "status": "Paused", "total": "1500", "visible": true },
                    { "expanded": true, "name": "Lumix G7 Camera", "percentSaved": "75", "status": "Active", "total": "700", "visible": false },
                    { "expanded": true, "name": "iPhone X", "percentSaved": "15", "status": "Active", "total": "1000", "visible": false },
                    { "expanded": true, "name": "LG 4k tv", "percentSaved": "15", "status": "Active", "total": "2000", "visible": false },
                    { "expanded": true, "name": "BMW 328ci", "percentSaved": "30", "status": "Active", "total": "35000", "visible": true },
                ],
                "displayCalc": true,
                "expandAll": true
            });
        });
    });
});;