import { Radar } from "@antv/g2plot";
import { Card } from "antd";
import type { FC } from "react";
import { useEffect, useRef } from "react";

export interface ContentDistributionDataItem {
  item: string;
  user: string;
  score: number;
}
interface ContentDistributionProps {
  data: ContentDistributionDataItem[];
}
const ContentDistribution: FC<ContentDistributionProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current || !data.length) return;

    const radar = new Radar(container.current, {
      data,
      xField: "item",
      yField: "user",
      meta: {
        score: {
          min: 0,
          nice: true,
        },
      },
      area: {},
    });
    radar.render();
    return () => {
      if (radar) radar.destroy();
    };
  }, [data]);
  return (
    <Card title="内容题材分布" className="content-distribution">
      <div ref={container} className="w-full h-[150px]" key={data.length} />
    </Card>
  );
};

export default ContentDistribution;
