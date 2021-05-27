export const CostASC = (invoices) =>{
    let propInvoices = invoices.slice();
    let sortedInvoices = propInvoices.sort((a,b) => a.cost - b.cost);

    return sortedInvoices;
}

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

