import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useEffect, useState, useRef } from 'react';

const { Statistic } = StatisticCard;

const Home = () => {
  const [responsive, setResponsive] = useState<boolean>(false);
  const [extra, setExtra] = useState<string>('');
  const intervalIdRef = useRef<number>(0); // 使用 useRef 存储定时器 ID

  // 优化时间格式化操作
  const formatDateTime = () => {
    const now = new Date();
    return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${now.getHours()}时${now.getMinutes()}分${now.getSeconds()}秒`;
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
      for (const entry of entries) {
        setResponsive(entry.target.clientWidth < 596);
      }
    });

    const container = document.getElementById('root');
    if (container) {
      resizeObserver.observe(container);
    }

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
        title="数据概览"
        extra={extra}
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '昨日全部流量',
                  value: 234,
                  description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计流量',
                  value: 234,
                  description: <Statistic title="月同比" value="8.04%" trend="up" />,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '运行中实验',
                  value: '12/56',
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史实验总数',
                  value: '134',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title="流量走势"
            chart={<img src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg" width="100%" />}
          />
        </ProCard>
        <StatisticCard
          title="流量占用情况"
          chart={<img src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png" alt="大盘" width="100%" />}
        />
      </ProCard>
    </RcResizeObserver>
  );
};

export default Home;