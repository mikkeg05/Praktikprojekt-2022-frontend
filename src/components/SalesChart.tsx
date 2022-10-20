// import dynamic from "next/dynamic"
import { PureComponent } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { chartDayData, chartWeekData, chartMonthData } from "mockData/salesMock"

export class SalesChartDay extends PureComponent {
  render () {
    return (
      <ResponsiveContainer minWidth={"100%"} height={260}>
        <BarChart
          data={chartDayData}
          barGap={2}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }}/>
          <YAxis padding={{ top: 0, bottom: 1 }} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#f38d10" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export class SalesChartWeek extends PureComponent {
  render () {
    return (
      <ResponsiveContainer minWidth={"100%"} height={260}>
        <BarChart
          data={chartWeekData}
          barGap={2}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }}/>
          <YAxis padding={{ top: 0, bottom: 1 }} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#f38d10" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export class SalesChartMonth extends PureComponent {
  render () {
    return (
      <ResponsiveContainer minWidth={"100%"} height={260}>
        <BarChart
          data={chartMonthData}
          barGap={2}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" padding={{ left: 0, right: 0 }}/>
          <YAxis padding={{ top: 0, bottom: 1 }} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#f38d10" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
