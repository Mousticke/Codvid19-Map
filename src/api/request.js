
export const baseAPI = () => {
    return `/`
}

export const getConfirmedTotal = () => {
    return `/confirmed`
}

export const getRecoveredTotal = () => {
    return `/recovered`;
}

export const getDeathTotal = () => {
    return `/deaths`;
}

export const getDailyInfo = () => {
    return `/daily`;
}

export const getInfoFromDate = (date) => {
    return `/daily/${date}`;
}

export const getCountries = () => {
    return `/countries`
}

export const getSummaryCountryDay = (country) => {
    return `/countries/${country}`
}

export const getDetailsConfirmedInCountry = (country) => {
    return `/countries/${country}/confirmed`;
}

export const getDetailsRecoveredInCountry = async (country) => {
   return `/countries/${country}/recovered`;
}

export const getDetailsDeathsInCountry = async (country) => {
    return `/countries/${country}/deaths`;
}