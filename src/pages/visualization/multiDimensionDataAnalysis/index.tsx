import { Col, Row, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  ContentConsumption,
  ContentConsumptionTrend,
  ContentDistribution,
  ContentSource,
  OverviewStatistics,
  TodayMetrics,
  UserRetention,
  UserRetentionTrend,
} from "./components";
import type { ContentDistributionDataItem } from "./components/ContentDistribution";
import type { ContentSourceProps } from "./components/ContentSource";
import type { DataItem } from "./components/OverviewStatistics";
import type { TodayDataItem } from "./components/TodayMetrics";

const MultiDimensionDataAnalysis: React.FC = () => {
  const [overviewData, setOverviewData] = useState<DataItem[]>([]);
  const [todayData, setTodayData] = useState<TodayDataItem[]>([]); // 今日数据
  const [contentDistributionData, setContentDistributionData] = useState<
    ContentDistributionDataItem[]
  >([]); // 内容分布数据
  const [userRetentionData, setUserRetentionData] = useState([]); // 用户留存数据
  const [contentConsumptionData, setContentConsumptionData] = useState([]); // 内容消费数据
  const [contentSourceData, setContentSourceData] = useState<
    ContentSourceProps["data"]
  >({}); // 内容来源数据
  const [userRetention, setUserRetention] = useState([]); // 用户留存趋势
  const [contentConsumption, setContentConsumption] = useState([]); // 内容消费趋势
  const fetchOverData = async () => {
    try {
      const {
        data: {
          overview,
          today,
          contentDistribution,
          userRetention,
          userRetentionData,
          contentConsumptionTrend,
          contentConsumptionData,
          contentSource,
        },
      } = await axios.get("/api/visualization/overview");
      setOverviewData(overview);
      setTodayData(today);
      setContentDistributionData(contentDistribution);
      setUserRetention(userRetention);
      setContentConsumptionData(contentConsumptionData);
      setContentSourceData(contentSource);
      setUserRetentionData(userRetentionData);
      setContentConsumption(contentConsumptionTrend);
    } catch (error) {
      console.error("Error fetching overview data:", error);
      message.error(`Failed to fetch overview data${error}`);
    }
  };

  useEffect(() => {
    fetchOverData();
  }, []);

  return (
    <div className="multi-dimension-data-analysis w-full h-full">
      <Row gutter={[16, 16]} className="mb-8">
        {/* 上部分 */}
        <Col span={18}>
          <OverviewStatistics data={overviewData} />
        </Col>
        <Col span={6}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <TodayMetrics data={todayData} />
            </Col>
            <Col span={24}>
              <ContentDistribution data={contentDistributionData} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mb-8">
        {/* 中部分 */}
        <Col span={6}>
          <UserRetentionTrend data={userRetention} />
        </Col>
        <Col span={6}>
          <UserRetention data={userRetentionData} />
        </Col>
        <Col span={6}>
          <ContentConsumptionTrend data={contentConsumption} />
        </Col>
        <Col span={6}>
          <ContentConsumption data={contentConsumptionData} />
        </Col>
      </Row>
      {/* 下部分 */}
      <ContentSource data={contentSourceData} />
    </div>
  );
};

export default MultiDimensionDataAnalysis;
