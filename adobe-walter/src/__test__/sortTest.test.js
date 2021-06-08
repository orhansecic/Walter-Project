import {toSort} from '../TestData.js';
import {sortedCostASC} from '../TestData.js';
import {sortedCostDES} from '../TestData.js';
import {sortedDateASC} from '../TestData.js';
import {sortedDateDES} from '../TestData.js';

import {CostASC, CostDES, DateASC, DateDES} from '../components/helper/Sort.js';


describe("Testing Sorting Function that sort by Cost or Date, ASC or DES", () => {

    it("Input Array is sorted ASC order by Cost", () => {
        expect(CostASC(toSort)).toStrictEqual(sortedCostASC);
    });
    it("Input Array is sorted DES order by Cost", () => {
        expect(CostDES(toSort)).toStrictEqual(sortedCostDES);
    });

    it("Input Array is sorted ASC order by Date", () => {
        expect(DateASC(toSort)).toStrictEqual(sortedDateASC);
    });
    it("Input Array is sorted DES order by Date", () => {
        expect(DateDES(toSort)).toStrictEqual(sortedDateDES);
    });
})