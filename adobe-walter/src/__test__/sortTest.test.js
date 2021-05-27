import {toSort} from '../TestData.js';
import {sortedCostASC} from '../TestData.js';
import {sortedCostDES} from '../TestData.js';
import {sortedDateASC} from '../TestData.js';
import {sortedDateDES} from '../TestData.js';

import {CostASC} from '../components/helper/Sort.js';
/* Sort Function */

/*
const CostASC = (invoices) =>{
    let propInvoices = invoices.slice();
    let sortedInvoices = propInvoices.sort((a,b) => a.cost - b.cost);

    return sortedInvoices;
}
*/
export const CostDES = (invoices) =>{
    let propInvoices = invoices.slice();
    let sortedInvoices = propInvoices.sort((a,b) => b.cost - a.cost);

    return sortedInvoices;
}

export const DateASC = (invoices) => {
    const propInvoices = invoices.slice();
    const sortedInvoices = propInvoices.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));

    return sortedInvoices;
}

export const DateDES = (invoices) => {
    const propInvoices = invoices.slice();
    const sortedInvoices = propInvoices.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));

    return sortedInvoices;
}

describe("Testing Sorting Function that sort by Cost or Date, ASC or DES", () => {
    /*
    it("Input Array is sorted ASC order by Cost", () =>{
        expect(CostASC(toSort)).toStrictEqual(sortedCostASC);
    })
    */
    it("Input Array is sorted ASC order by Cost", () => {
        expect(CostASC(toSort)).toStrictEqual(sortedCostASC);
    });

    it("Input Array is sorted DES order by Cost", () => {
        expect(CostDES(toSort)).toStrictEqual(sortedCostDES);
    })

    it("Input Array is sorted ASC order by Date", () => {
        expect(DateASC(toSort)).toStrictEqual(sortedDateASC);
    })
    it("Input Array is sorted DES order by Date", () => {
        expect(DateDES(toSort)).toStrictEqual(sortedDateDES);
    })
})