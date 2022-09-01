function getCurrentOrPrevYear(month) {
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()
if (currentMonth < month) {
    return currentYear - 1
}
return currentYear
}


window.fdjGamingWidgetOptions = {
bestBets: {
    displayScrollArrows: false,
    dateFormat: " ",
    eventTimeFormat: '%{shortDayName} %{day} %{monthName} %{hour}:%{minute}',
},
betslip: {
    dateFormat: '%{shortDayName} %{day} %{monthName} %{hour}:%{minute}',
    showPromotions: true,
    receiptDateFormat: '%{shortDayName} %{day} %{monthName} %{hour}:%{minute}',
},
navigation: {
    refreshInterval: 1000,
},
inPlay: {
    displayAllSportTab: true,
    maximumNumberOfSports: 6,
},
highlightBlock: {
    gutterWidth: 120,
    dateFormat: "%{shortDayName} %{day} %{shortMonthName}",
    refreshInterval: 5000,
    carouselGutter: 12,
    cmsUrl: "http://bet-uk-abp.lvs.co.uk:5001"
},
marketDisplay: {
    dateFormatOverride: '%{shortDayName} %{day} %{monthName} %{hour}:%{minute}'
},
settledBets: {
    dateFormatOverride: "%{day} %{shortMonthName}",
    eventStartDateFormat: "%{shortDayName} %{day} %{shortMonthName} %{hour}:%{minute}",
    dateFilters: ['TODAY_FILTER', 'YESTERDAY_FILTER', 'THREE_DAY_FILTER', 'PRESENT_WEEK', 'LAST_MONTH_FILTER', '1_MONTH_BACK', '2_MONTHS_BACK', '3_MONTHS_BACK', '4_MONTHS_BACK', '5_MONTHS_BACK', '6_MONTHS_BACK', '7_MONTHS_BACK', '8_MONTHS_BACK', '9_MONTHS_BACK', '10_MONTHS_BACK', '11_MONTHS_BACK']
},
cashOut: {
    dateFormatOverride: "%{day} %{monthName}",
    eventStartDateFormat: "%{shortDayName} %{day} %{monthName} %{hour}:%{minute}",
    dateFilters: ['TODAY_FILTER', 'YESTERDAY_FILTER', 'THREE_DAY_FILTER', 'PRESENT_WEEK', 'LAST_MONTH_FILTER', '1_MONTH_BACK', '2_MONTHS_BACK', '3_MONTHS_BACK', '4_MONTHS_BACK', '5_MONTHS_BACK', '6_MONTHS_BACK', '7_MONTHS_BACK', '8_MONTHS_BACK', '9_MONTHS_BACK', '10_MONTHS_BACK', '11_MONTHS_BACK']
},
usCoupon: {
    dateFormat: " ",
    eventTimeFormat: "%{shortDayName} %{day} %{monthName} %{hour}:%{minute}",
},
horseRacing : {
    rewriteLocation: window.location.pathname, /*  TO BE REPLACED */
    nextRaces: {
    numberOfRunners: 3,
    },
},
dogRacing : {
    rewriteLocation: window.location.pathname, /* TO BE REPLACED */
    nextRaces: {
    numberOfRunners: 3,
    },
},
common: {
    screenWidthThreshold: {
    desktopMinWidth: '1px',
    mobileMaxWidth: '0px'
    },
    currency: '£',
    language: 'EN',
    apiUrlPrefix: 'https://bet-uk-abp.lvs.co.uk:1301/metal',
    offer: {
    defaultSportCodes: ['FOOT', 'TENN', 'CRIC', 'GOLF', 'RUGU', 'RUGL'],
    urlGenerator: (pathObj) => {
        const { type, id, awayOpponent, homeOpponent, description, paths } = pathObj

        const isHorseRacing = paths
        .join('-')
        .toLowerCase()
        .includes('horse racing');

        const isGreyhoundRacing = paths
        .join('-')
        .toLowerCase()
        .includes('greyhound racing');

        if(isHorseRacing) return `/fixed-odds/horse-racing/${id}`

        if(isGreyhoundRacing) return `/fixed-odds/greyhound-racing/${id}`
        
        switch (type) {
        case "PATH":
            return `/fixed-odds/path/${id}`
        case "GAME":
            return `/fixed-odds/event/${id}`
        case 'RANK':
            return `/fixed-odds/event/${id}`
        default:
            return '/fixed-odds'
        }
    },
    urlKeyExtractor: (url) => {
        const temp = url.split('/')
        return temp[temp.length - 1].split('?')[0]
    }
    }
},
};
window.fdjGamingWidgetTranslations = {
"Betslip.Next": "Place Bet",
"Betslip.Accumulator / System": "MULTIPLES",
"Betslip.Total Stake": "Total Stake",
"Betslip.Return": "Potential Return",
"Betslip.Potential Returns": "Potential Return",
"Betslip.Total Return": "Potential Return",
"Betslip.Clear All": "Clear all",
"Betslip.Confirmation": "Confirm your bets",
"Betslip.Place": "Place bet",
"Competition.+%{marketCount}": "%{marketCount}",
"UsCoupon.+%{marketCount} More": "%{marketCount} Markets",
"UsCoupon.More events": "View all",
"Betslip.Stake": "0.00",
"Common.Your betslip": "Betslip",
"Common.Open bets": "Open Bets",
"Common.Settled bets": "Settled Bets",
"InPlay.Any Other": 'All Sports',
"InPlay.More live %{sport} events (%{number})": "View all",
"InPlay.Live now": "Live",
"InPlay.%{minutes} min":"%{minutes}'",
"BestBets.More live %{sport} events (%{number})": "View all",
"SettledBets.Stake %{debit}": "%{debit}",
"SettledBets.Return %{potentialReturn}": "%{currency}%{potentialReturn}",
"SettledBets.January": "January " + getCurrentOrPrevYear(0),
"SettledBets.February": "February " + getCurrentOrPrevYear(1),
"SettledBets.March": "March " + getCurrentOrPrevYear(2),
"SettledBets.April": "April " + getCurrentOrPrevYear(3),
"SettledBets.May": "May " + getCurrentOrPrevYear(4),
"SettledBets.June": "June " + getCurrentOrPrevYear(5),
"SettledBets.July": "July " + getCurrentOrPrevYear(6),
"SettledBets.August": "August " + getCurrentOrPrevYear(7),
"SettledBets.September": "September " + getCurrentOrPrevYear(8),
"SettledBets.November": "November " + getCurrentOrPrevYear(9),
"SettledBets.October": "October " + getCurrentOrPrevYear(10),
"SettledBets.December": "December " + getCurrentOrPrevYear(11),
"SettledBets.Please log in to access your settled bets": "Please login to access your bets.",
"SettledBets.No settled bets are available": "There are currently no bets to display.",
"Betslip.Please add some bets to your betslip": "Please add some bets.",
"CashOut.Stake %{debit}": "%{debit}",
"CashOut.Return":"Potential Return",
"CashOut.Return %{potentialReturn}": "%{currency}%{potentialReturn}",
"CashOut.January": "January " + getCurrentOrPrevYear(0),
"CashOut.February": "February " + getCurrentOrPrevYear(1),
"CashOut.March": "March " + getCurrentOrPrevYear(2),
"CashOut.April": "April " + getCurrentOrPrevYear(3),
"CashOut.May": "May " + getCurrentOrPrevYear(4),
"CashOut.June": "June " + getCurrentOrPrevYear(5),
"CashOut.July": "July " + getCurrentOrPrevYear(6),
"CashOut.August": "August " + getCurrentOrPrevYear(7),
"CashOut.September": "September " + getCurrentOrPrevYear(8),
"CashOut.November": "November " + getCurrentOrPrevYear(9),
"CashOut.October": "October " + getCurrentOrPrevYear(10),
"CashOut.December": "December " + getCurrentOrPrevYear(11),
"CashOut.No open bets are available": "There are currently no bets to display.",
"CashOut.Please log in to access your bets": "Please login to access your bets.",
FR: {
    'Betslip.You must be %{status} to place a bet Login or register': 'Vous devez être connecté pour parier',
    'Betslip.Your betslip is empty': 'Votre panier est vide',
    'Betslip.Please add some bets to your betslip': 'Sélectionnez au moins 1 cote pour effectuer un pari simple',
    'Common.Your betslip': 'Fiche De Mise',
    'Common.Settled bets': 'Mises Réglées',
    'Common.Open bets': 'Mises Ouvertes',
},
ES: {
    'Betslip.You must be %{status} to place a bet Login or register': 'Debes estar %{login} para %{register}',
    'Betslip.Your betslip is empty': 'No existen selecciones',
    'Betslip.Please add some bets to your betslip': 'Por favor agrega alguna selección a tu ticket',
    'Common.Your betslip': 'Ticket de apuesta',
    'Common.Settled bets': 'Mis apuestas',
    'Common.Open bets': 'Abiertas',
},
"UsCoupon.InPlay":"In-play",
}

console.log(document)

const body = document.getElementsByTagName('body')[0]

const div = document.createElement("div")

div.setAttribute('id', "fdjgs-widget-horse-racing");

body.appendChild(div)

console.log(document)

window.onload = () => {
    console.log(window)
    body.removeChild(div)
    document.getElementsByClassName("second")[0].appendChild(div)
    window.fdjGamingWidgetHorseRacing.load()
}



