import { Pie } from "@antv/g2plot";
import { Card, Col, Row } from "antd";
import type { FC } from "react";
import { useEffect, useRef } from "react";

export interface ContentSourceProps {
  data: {
    image?: {
      type: string;
      value: number;
    }[];
    text?: {
      type: string;
      value: number;
    }[];
    video?: {
      type: string;
      value: number;
    }[];
  };
}
const ContentSource: FC<ContentSourceProps> = ({ data }) => {
  const containers = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    if (!data.image?.length || !data.text?.length || !data.video?.length)
      return;
    console.log(
      "%c [ data ]-26",
      "font-size:13px; background:pink; color:#bf2c9f;",
      data,
    );
    const renderPieChart = (
      container: React.MutableRefObject<HTMLDivElement | null>,
      dataSource: { type: string; value: number }[],
    ) => {
      if (!container.current || dataSource.length === 0) return;

      const radar = new Pie(container.current, {
        appendPadding: 10,
        data: dataSource,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: (v) => `¥ ${v}`,
          },
        },
        label: {
          type: "inner",
          offset: "-50%",
          autoRotate: false,
          style: { textAlign: "center" },
          formatter: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        },
        statistic: {
          title: {
            offsetY: -8,
          },
          content: {
            offsetY: -4,
          },
        },
        interactions: [
          { type: "element-selected" },
          { type: "element-active" },
          {
            type: "pie-statistic-active",
            cfg: {
              start: [
                {
                  trigger: "element:mouseenter",
                  action: "pie-statistic:change",
                },
                {
                  trigger: "legend-item:mouseenter",
                  action: "pie-statistic:change",
                },
              ],
              end: [
                {
                  trigger: "element:mouseleave",
                  action: "pie-statistic:reset",
                },
                {
                  trigger: "legend-item:mouseleave",
                  action: "pie-statistic:reset",
                },
              ],
            },
          },
        ],
      });
      radar.render();
      return () => {
        radar.destroy();
      };
    };
    renderPieChart(containers[0], data.image);
    renderPieChart(containers[1], data.text);
    renderPieChart(containers[2], data.video);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, data.image, data.text, data.video]);

  return (
    <Card title="内容发布来源" className="h-[500px]">
      <Row gutter={[16, 16]} className="flex items-center justify-center">
        {containers.map((container, index) => (
          <Col span={6} key={index}>
            <div ref={container} className="w-full h-[350px]" />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ContentSource;
