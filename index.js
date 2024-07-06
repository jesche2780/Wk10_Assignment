class Company {
    constructor(id, company, symbol, price) {
        this.id = id;
        this.company = company;
        this.symbol = symbol;
        this.price = price;
    }
}

//Started by creating a class called "Company" where a constructor is created that will construct the inputs and output a class with an id, company name, symbol, and price.

let companies = [];
let companyId = 0;

//Created an array and starting companyId (for later reference) so that the companies can be added to (later as individual company of the companies) and the companyId can be added to with a loop with each new addition.

document.getElementById('new-company').addEventListener('click', () => {
    companies.push(new Company(companyId++,
document.getElementById('new-company-name').value,
document.getElementById('new-company-symbol').value,
document.getElementById('new-company-price').value));
    drawDOM();
})

//Added an event listener 'click' where when the click is conducted, the input values will then be pushed to the companies array, grabbed by the Ids "new-company-*" parts of the html document input by the user and then draw the DOM.

function drawDOM() {
    let companyDiv = document.getElementById('companies');
    companyDiv.innerHTML = '';
    let table = createCompanyTable()
    for (let company of companies) {
        addCompanyToTable(table, company)
    }
    companyDiv.appendChild(table);
}

//Created function to draw the DOM by getting the element "companies" from the HTML document, and adding a table to the area below the input area of the document, using a "for" loop that will list each company of companies
//and will add the company to the table by appending the child "table" with the listed table and company.

function createCompanyTable() {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped');
    let headerRow = table.insertRow(0);
    let companyColumn = headerRow.insertCell(0);
    let symbolColumn = headerRow.insertCell(1);
    let priceColumn = headerRow.insertCell(2);
    companyColumn.innerHTML = 'Company';
    symbolColumn.innerHTML = 'Symbol';
    priceColumn.innerHTML = 'Price';
    return table;
}

//created function "create company table" that will give the added table the CSS/bootstrap elements of "table-dark" and "table-striped", with each added row an insert from the company, symbol, and price column.

function addCompanyToTable(table, company) {
    let dataRow = table.insertRow(-1);
    let companyData = dataRow.insertCell(0);
    let symbolData = dataRow.insertCell(1);
    let priceData = dataRow.insertCell(2);
    companyData.innerHTML = company.company;
    symbolData.innerHTML = company.symbol;
    priceData.innerHTML = company.price;
}

// Finally, created a function to add the company to the table so that new table was not created each time the company, symbol, and price was input, instead added data to the original table with the original headers on the top.
