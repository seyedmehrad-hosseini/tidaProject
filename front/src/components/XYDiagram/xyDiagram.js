import React, { useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const CHART_ID = "population_chart";

const Diagram = ({ chartId, data }) => {
  const chartRef = useRef(null);

  React.useEffect(() => {
    console.log(data);
    if (!chartRef.current) {
      chartRef.current = am4core.create(CHART_ID, am4charts.XYChart);

      chartRef.current.data = data;

      // Add X Axis
      let xAxis = chartRef.current.xAxes.push(new am4charts.CategoryAxis());
      xAxis.dataFields.category = "title";
      xAxis.renderer.cellStartLocation = 0;
      xAxis.renderer.cellEndLocation = 1;
      xAxis.renderer.grid.template.strokeOpacity = 0;
      xAxis.renderer.labels.template.fill = am4core.color("black");
      xAxis.renderer.labels.template.fontSize = 12;

      // Add Y Axis
      let yAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());
      yAxis.renderer.grid.template.stroke = am4core.color("#f0f2fa");
      yAxis.renderer.grid.template.strokeOpacity = 0;
      yAxis.renderer.labels.template.fill = am4core.color("black");
      yAxis.renderer.labels.template.fontSize = 15;

      // Create series
      let series = chartRef.current.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "count";
      series.dataFields.categoryX = "title";
      series.name = "count";
      series.fillOpacity = 1;
      series.fill = am4core.color("#4472c4");
      series.strokeWidth = 0;
      series.columns.template.column.cornerRadiusTopLeft = 2;
      series.columns.template.column.cornerRadiusTopRight = 2;

      // Series tooltip
      series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.tooltip.pointerOrientation = "down";
      series.tooltip.dy = 0;
      series.tooltip.background.filters.clear();
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color("#4472c4");
      series.tooltip.background.stroke = am4core.color("#4472c4");

      // Add cursor
      chartRef.current.cursor = new am4charts.XYCursor();

      // Disable axis lines
      chartRef.current.cursor.lineX.disabled = false;
      chartRef.current.cursor.lineY.disabled = false;

      // Disable axis tooltips
      xAxis.cursorTooltipEnabled = false;
      yAxis.cursorTooltipEnabled = false;

      // Disable zoom
      chartRef.current.cursor.behavior = "none";
    }
  }, [data]);

  // Load data into chart
  React.useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = data;
    }
  }, [data]);

  React.useEffect(() => {
    // ...
    return () => {
      chartRef.current && chartRef.current.dispose();
    };
  }, []);

  return (
    <>
      {
        <div
          id={chartId || CHART_ID}
          style={{
            width: "100%",
            height: "300px",
            margin: "50px 0",
          }}
        />
      }
    </>
  );
};

export default Diagram;
