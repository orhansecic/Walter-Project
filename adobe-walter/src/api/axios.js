import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mockInvoices = new MockAdapter(Axios, {delayResponse: 4000});

mockInvoices.onGet("/invoices").reply(200, {
    invoices: [
        {id: 1, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
        {id: 2, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Jane Doe", cost: "120 KM", status: "Declined"},
        {id: 3, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Sugar Ray", cost: "250 KM", status: "Approved"},
        {id: 4, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Joe Rogan", cost: "20 KM", status: "Approved"},
        {id: 5, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "G.I. Joe", cost: "185 KM", status: "Pending"},
        {id: 6, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
        {id: 7, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
        {id: 8, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
        {id: 9, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
        {id: 10, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
        {id: 11, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
        {id: 12, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
        {id: 13, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
        {id: 14, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Declined"},
        {id: 15, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
    ]
}).onGet("/pending").reply(200, {
        invoices: [
            {id: 6, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
            {id: 7, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
            {id: 8, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
            {id: 9, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
            {id: 10, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Pending"},
        ]
}).onGet("/approved").reply(200,{
        invoices:[
            {id: 1, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "John Doe", cost: "200 KM", status: "Approved"},
            {id: 2, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Jane Doe", cost: "120 KM", status: "Approved"},
            {id: 3, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Sugar Ray", cost: "250 KM", status: "Approved"},
            {id: 4, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "Joe Rogan", cost: "20 KM", status: "Approved"},
            {id: 5, invoiceName: "Invoice name.pdf", date: "04/06/2020", issuedBy: "G.I. Joe", cost: "185 KM", status: "Approved"},
        ]
    })

export {mockInvoices};