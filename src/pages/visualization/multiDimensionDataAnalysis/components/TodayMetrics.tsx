import { Bar } from "@antv/g2plot";
import { Card } from "antd";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import { t } from "@/utils";
export interface TodayDataItem {
  type: string;
  sales: number;
}
interface TodayMetricsProps {
  data: TodayDataItem[];
}
const TodayMetrics: FC<TodayMetricsProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current || !data.length) return;

    const bar = new Bar(container.current, {
      data,
      xField: "sales",
      yField: "type",
      legend: {
        position: "top-left",
      },
      barBackground: {
        style: {
          fill: "rgba(0,0,0,0.1)",
        },
      },
      interactions: [{ type: "active-region", enable: false }],
    });
    bar.render();
    return () => {
      if (bar) bar.destroy();
    };
  }, [data]);
  return (
    <Card title={t("CupRZibN")} bordered={false} className="today-metrics">
      <div ref={container} className="w-full h-[150px]" key={data.length} />
    </Card>
  );
};

export default TodayMetrics;
