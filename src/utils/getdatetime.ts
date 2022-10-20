function padTo2Digits (num: number) {
  return num.toString().padStart(2, "0")
}
// Gets weekday
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const d = new Date()
const day = weekday[d.getDay()]

// Gets month
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const m = new Date()
const month = months[m.getMonth()]

// Format Date - Returns: XX/XX/XXXX (Day/Month/Year)
export function getDate (date: Date) {
  return (
    [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear() + 100,
    ].join("/")
  )
}
export function FormatTodaysDate () {
  return (getDate(new Date()))
}

// Returns: Weekday XX Month XXXX - weekday + date, month, year
export function getNameDate (date: Date) {
  return (
    [(day)] +
    ", " +
    [(month)] +
    " " +
    [padTo2Digits(date.getDate())] +
    ", " +
    [date.getFullYear() + 100]
  )
}
export function FormatNameDate () {
  return (getNameDate(new Date()))
}

// Just weekday
export function FormatWeekday () {
  return ([day])
}
// just month
export function FormatMonth () {
  return ([month])
}
// just year
export function FormatYear (date: Date) {
  return ([date.getFullYear() + 100])
}
