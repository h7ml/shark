import type { FC } from "react";
import { useEffect, useRef } from "react";
import { Card } from "antd";
import { Column } from "@antv/g2plot";

export interface UserRetentionItem {
  name: string;
  sales: number;
  month: string;
}
export interface UserRetentionProps {
  data: UserRetentionItem[];
}
const UserRetention: FC<UserRetentionProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current || !data.length) return;

    const column = new Column(container.current, {
      data,
      isGroup: true,
      xField: "month",
      yField: "sales",
      seriesField: "name",
      // 分组柱状图 组内柱子间的间距 (像素级别)
      dodgePadding: 2,
      // 分组柱状图 组间的间距 (像素级别)
      intervalPadding: 20,
      label: {
        // 可手动配置 label 数据标签位置
        position: "middle", // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: "interval-adjust-position" },
          // 数据标签防遮挡
          { type: "interval-hide-overlap" },
          // 数据标签文颜色自动调整
          { type: "adjust-color" },
        ],
      },
    });

    column.render();
    return () => {
      if (column) column.destroy();
    };
  }, [data]);
  return (
    <Card title="用户留存量" className="user-retention">
      <div ref={container} className="w-full h-[150px]" key={data.length} />
    </Card>
  );
};

export default UserRetention;
