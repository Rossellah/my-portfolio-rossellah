function convertCurrency() {
    const phpAmount = document.getElementById('phpAmount').value;
    const conversionRates = {
        'US Dollar': 0.017,
        'Yuan': 0.12,
        'EUR': 0.016,
        'Yen': 2.67
    };

    document.getElementById('US Dollar').value = (phpAmount * conversionRates['US Dollar']);
    document.getElementById('Yuan').value = (phpAmount * conversionRates['Yuan']);
    document.getElementById('EUR').value = (phpAmount * conversionRates['EUR']);
    document.getElementById('Yen').value = (phpAmount * conversionRates['Yen']);
}
