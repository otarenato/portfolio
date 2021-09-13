import { ChartType } from "angular-google-charts";

export const PIE_CHART = {
  title: '10 navegadores mais usados no mundo',
  type: ChartType.PieChart,
  data: [
     ['Chrome', 69.98],
     ['Edge', 9.40],
     ['Firefox', 7.02],
     ['Internet Explorer', 4.25],
     ['Safari', 3.58],
     ['QQ', 1.66],
     ['Sogou Explorer', 1.52],
     ['Opera', 0.97],
     ['Yandex', 0.92],
     ['UC Browser', 0.28]
  ],
  columnNames: ['Nome', 'Porcentagem'],
  options: {},
  width: 300,
  height: 200
}

export const LINE_CHART = {
  title: '10 navegadores mais usados no mundo',
  type: ChartType.LineChart,
  data: [
     ['Chrome', 69.98],
     ['Edge', 9.40],
     ['Firefox', 7.02],
     ['Internet Explorer', 4.25],
     ['Safari', 3.58],
     ['QQ', 1.66],
     ['Sogou Explorer', 1.52],
     ['Opera', 0.97],
     ['Yandex', 0.92],
     ['UC Browser', 0.28]
  ],
  columnNames: ['Nome', 'Porcentagem'],
  options: {},
  width: 300,
  height: 200
}

export const BAR_CHART = {
  title: '10 navegadores mais usados no mundo',
  type: ChartType.ColumnChart,
  data: [
     ['Chrome', 69.98],
     ['Edge', 9.40],
     ['Firefox', 7.02],
     ['Internet Explorer', 4.25],
     ['Safari', 3.58],
     ['QQ', 1.66],
     ['Sogou Explorer', 1.52],
     ['Opera', 0.97],
     ['Yandex', 0.92],
     ['UC Browser', 0.28]
  ],
  columnNames: ['Nome', 'Porcentagem'],
  options: {},
  width: 300,
  height: 200
}
