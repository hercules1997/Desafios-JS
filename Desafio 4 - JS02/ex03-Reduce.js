






const companies = [
    { name: 'Samsung', marktValue: 50, CEO: 'Kim Kun Sum', foundOn: 1938 },
    { name: 'Microsorft', marktValue: 415, CEO: 'Satya Nadella', foundOn: 1975 },
    { name: 'Intel', marktValue: 117, CEO: 'Brian Krzanich', foundOn: 1968 },
    { name: 'Facebook', marktValue: 383, CEO: 'Mark Zuckerberg', foundOn: 2004 },
    { name: 'Sportfy', marktValue: 30, CEO: 'Daniel Ek', foundOn: 2006 },
    { name: 'Apple', marktValue: 845, CEO: 'Tim Cook', foundOn: 1976 },
]

const newCompanies = companies.reduce(((acc,current) => acc + current.marktValue), 0)
console.log(newCompanies)
