

export let companyTicker = 'FGEN'
export let key = 'XFQMEZGTK4PCZO3HKDM1AWE6YDF1GEEB'
export let periodLength = 'year'



export let priceHistoryURL = `https://api.tdameritrade.com/v1/marketdata/${companyTicker}/pricehistory`;



export let priceHistoryParams = {
    apikey: key,
    periodType: periodLength,
    period: 1,
    frequencyType: 'daily',
    frequency: 1,
    endDate: null,
    startDate: null,
    needExtendedHoursData: false
}


