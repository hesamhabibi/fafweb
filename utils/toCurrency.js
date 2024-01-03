const toCurrency = (value, locale, unit) => {

    value = value.toString().replaceAll('٬', '')

    return value && !isNaN(value) ? `${Number(value).toLocaleString((locale || locale === '') ? locale : 'fa-IR')}${unit || (unit === '' ? '' : ' ت')}` : value

    // if (value) {
    //
    //     if (locale === 'fa') {
    //
    //         value = value.toString().replaceAll('٬', '')
    //         // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '/');
    //         return value.replace(/\B(?=(\d{3})+(?!\d))/g, '٬');
    //
    //     }
    //
    // } else return value

}

export default toCurrency