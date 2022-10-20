/* eslint-disable no-console */
/* eslint-disable no-return-assign */

// ----- SalesChart data -----
// Day data
export const chartDayData = [
  {
    name: "00:00",
    revenue: 400.10,
    profit: 240.25,
    costumers: 9,
  },
  {
    name: "03:00",
    revenue: 300.15,
    profit: 139.25,
    costumers: 8,
  },
  {
    name: "06:00",
    revenue: 200.50,
    profit: 380.99,
    costumers: 21,
  },
  {
    name: "09:00",
    revenue: 278.99,
    profit: 308.10,
    costumers: 36,
  },
  {
    name: "12:00",
    revenue: 189.25,
    profit: 480.00,
    costumers: 36,
  },
  {
    name: "15:00",
    revenue: 239.50,
    profit: 380.00,
    costumers: 31,
  },
  {
    name: "18:00",
    revenue: 349.10,
    profit: 430.99,
    costumers: 28,
  },
  {
    name: "21:00",
    revenue: 349.99,
    profit: 430.15,
    costumers: 21,
  },
]

// Week data
export const chartWeekData = [
  {
    name: "Mon",
    revenue: 2307.58,
    profit: 2787.10,
    costumers: 190,
  },
  {
    name: "Tue",
    revenue: 3000.50,
    profit: 1398.20,
    costumers: 204,
  },
  {
    name: "Wed",
    revenue: 2000.99,
    profit: 9800.50,
    costumers: 208,
  },
  {
    name: "Thu",
    revenue: 2780.25,
    profit: 3908.20,
    costumers: 210,
  },
  {
    name: "Fri",
    revenue: 1890.99,
    profit: 3800.99,
    costumers: 216,
  },
  {
    name: "Sat",
    revenue: 2390.10,
    profit: 3800.25,
    costumers: 218,
  },
  {
    name: "Sun",
    revenue: 3490.25,
    profit: 3300.50,
    costumers: 226,
  },
]

// Month data
export const chartMonthData = [
  {
    name: "Jan",
    revenue: 70442.64,
    profit: 123182.96,
    costumers: 5928,
  },
  {
    name: "Feb",
    revenue: 76042.32,
    profit: 120498.99,
    costumers: 6692,
  },
  {
    name: "Mar",
    revenue: 59030.25,
    profit: 112773.25,
    costumers: 5928,
  },
  {
    name: "Apr",
    revenue: 41392.25,
    profit: 102143.20,
    costumers: 4409,
  },
  {
    name: "May",
    revenue: 51032.50,
    profit: 92103.99,
    costumers: 4024,
  },
  {
    name: "Jun",
    revenue: 71442.64,
    profit: 90503.50,
    costumers: 4950,
  },
  {
    name: "Jul",
    revenue: 70442.64,
    profit: 10892.99,
    costumers: 6150,
  },
  {
    name: "Aug",
    revenue: 77322.64,
    profit: 106232.20,
    costumers: 6910,
  },
  {
    name: "Sep",
    revenue: 65410.20,
    profit: 94300.50,
    costumers: 5310,
  },
  {
    name: "Oct",
    revenue: 50042.50,
    profit: 89450.25,
    costumers: 4820,
  },
  {
    name: "Nov",
    revenue: 60202.50,
    profit: 92820.50,
    costumers: 5883,
  },
  {
    name: "Dec",
    revenue: 81049.99,
    profit: 100822.20,
    costumers: 6769,
  },
]

// ----- TOTALS ----- //
// ----- DAY
// Revenue
export const dayRevTotal = chartDayData.reduce((total, currentValue) => total = total + currentValue.revenue, 0)
const dayRevAverage = chartDayData.reduce((a, b) => a + b.revenue, 0) / chartDayData.length / 8 / 100
export const dayRevPercent = dayRevAverage.toFixed(2)
// Profit
export const dayProTotal = chartDayData.reduce((total, currentValue) => total = total + currentValue.profit, 0)
const dayProAverage = chartDayData.reduce((a, b) => a + b.profit, 0) / chartDayData.length / 8 / 100
export const dayProPercent = dayProAverage.toFixed(2)
// Costumers
export const dayCosTotal = chartDayData.reduce((total, currentValue) => total = total + currentValue.costumers, 0)
const dayCosAverage = chartDayData.reduce((a, b) => a + b.costumers, 0) / chartDayData.length / 8 / 100

// ----- WEEK
// Revenue
export const weekRevTotal = chartWeekData.reduce((total, currentValue) => total = total + currentValue.revenue, 0)
const weekRevAverage = chartWeekData.reduce((a, b) => a + b.revenue, 0) / chartWeekData.length / 7 / 100
export const weekRevPercent = weekRevAverage.toFixed(2)
// Profit
export const weekProTotal = chartWeekData.reduce((total, currentValue) => total = total + currentValue.profit, 0)
const weekProAverage = chartWeekData.reduce((a, b) => a + b.profit, 0) / chartWeekData.length / 7 / 100
export const weekProPercent = weekProAverage.toFixed(2)
// Costumers
export const weekCosTotal = chartWeekData.reduce((total, currentValue) => total = total + currentValue.costumers, 0)
const weekCosAverage = chartWeekData.reduce((a, b) => a + b.costumers, 0) / chartWeekData.length / 8 / 100

// ----- MONTH
// Revenue
export const monthRevTotal = chartMonthData.reduce((total, currentValue) => total = total + currentValue.revenue, 0)
const monthRevAverage = chartMonthData.reduce((a, b) => a + b.revenue, 0) / chartMonthData.length / 12 / 100
export const monthRevPercent = monthRevAverage.toFixed(2)
// Profit
export const monthProTotal = chartMonthData.reduce((total, currentValue) => total = total + currentValue.profit, 0)
const monthProAverage = chartMonthData.reduce((a, b) => a + b.profit, 0) / chartMonthData.length / 12 / 100
// Costumers
export const monthCosTotal = chartMonthData.reduce((total, currentValue) => total = total + currentValue.costumers, 0)
export const monthCosAverage = chartMonthData.reduce((a, b) => a + b.costumers, 0) / chartMonthData.length / 8 / 100

// ----- SALES STATISTICS
export const salestats = [
  {
    id: 10,
    label: "Total Revenue",
    character: "$",
    percent: "%",
    numDay: dayRevTotal.toFixed(2),
    numWeek: weekRevTotal.toFixed(2),
    numMonth: monthRevTotal.toFixed(2),
    difDay: dayRevAverage.toFixed(2),
    difWeek: weekRevAverage.toFixed(2),
    difMonth: monthRevAverage.toFixed(2),
  },
  {
    id: 12,
    label: "Total Profit",
    character: "$",
    percent: "%",
    numDay: dayProTotal.toFixed(2),
    numWeek: weekProTotal.toFixed(2),
    numMonth: monthProTotal.toFixed(2),
    difDay: dayProAverage.toFixed(2),
    difWeek: weekProAverage.toFixed(2),
    difMonth: monthProAverage.toFixed(2),
  },
  {
    id: 11,
    label: "Total Customers",
    character: "",
    percent: "%",
    numDay: dayCosTotal,
    numWeek: weekCosTotal,
    numMonth: monthCosTotal,
    difDay: dayCosAverage.toFixed(2),
    difWeek: weekCosAverage.toFixed(2),
    difMonth: monthCosAverage.toFixed(2),
  },
]
