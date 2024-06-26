import { ProCard, StatisticCard } from "@ant-design/pro-components";
import RcResizeObserver from "rc-resize-observer";
import { useEffect, useRef, useState } from "react";
import { t } from "@/utils";

const { Statistic } = StatisticCard;

function Home() {
  const [responsive, setResponsive] = useState<boolean>(false);
  const [extra, setExtra] = useState<string>("");
  const intervalIdRef = useRef<number>(0); // 使用 useRef 存储定时器 ID

  // 优化时间格式化操作
  const formatDateTime = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  };

  useEffect(() => {
    const updateExtra = () => {
      setExtra(formatDateTime()); // 调用格式化函数
    };

    // 使用 requestAnimationFrame 来优化性能
    const frameHandler = () => {
      updateExtra();
      intervalIdRef.current = requestAnimationFrame(frameHandler);
    };

    frameHandler(); // 启动动画帧
    // 返回清理函数来停止动画帧
    return () => {
      cancelAnimationFrame(intervalIdRef.current); // 清理定时器
    };
  }, []);

  useEffect(() => {
    // 用于响应式布局的逻辑代码，未改变
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries)
        setResponsive(entry.target.clientWidth < 596);
    });

    const container = document.getElementById("root");
    if (container) resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title={t("VXGVzvwc")}
        extra={extra}
        split={responsive ? "horizontal" : "vertical"}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: t("qDFtEOIR"),
                  value: 234,
                  description: (
                    <Statistic
                      title={t("TKVmcZrC")}
                      value="8.04%"
                      trend="down"
                    />
                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: t("iMzlGPDr"),
                  value: 234,
                  description: (
                    <Statistic title={t("PtRRKuBl")} value="8.04%" trend="up" />
                  ),
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: t("QiznfbIw"),
                  value: "12/56",
                  suffix: t("ksynzFGa"),
                }}
              />
              <StatisticCard
                statistic={{
                  title: t("lVFlJVyT"),
                  value: "134",
                  suffix: t("ksynzFGa"),
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title={t("evEeYiWL")}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                width="100%"
              />
            }
          />
        </ProCard>
        <StatisticCard
          title={t("MbDJXyEd")}
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
              alt={t("HVkBPAGd")}
              width="100%"
            />
          }
        />
      </ProCard>
    </RcResizeObserver>
  );
}

export default Home;
