import { Col, Row, message } from "antd";
import axios from "axios";
import type { FC } from "react";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
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
import { useGlobalStore } from "@/store/global";

const MultiDimensionDataAnalysis: FC = () => {
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
  const [userRetention, setUserRetention] = useState([]); // {t('wpVTrIbg')}
  const [contentConsumption, setContentConsumption] = useState([]); // {t('fHAcoQib')}
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
  const { lang } = useGlobalStore();
  const { i18n } = useTranslation();
  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(lang);
    };
    changeLanguage();
  }, [lang, i18n]);
  useEffect(() => {
    fetchOverData();
  }, []);

  return (
    <div className="multi-dimension-data-analysis w-full h-full">
      <Row gutter={[16, 16]} className="mb-8">
        {/* 上部分 */}
        <Col span={18} lg={24} xl={18} xs={24} className="w-[100%]">
          <OverviewStatistics data={overviewData} />
        </Col>
        <Col span={6} lg={24} xl={6} xs={24} className="w-[100%]">
          <Row gutter={[16, 16]}>
            <Col span={24} xs={24} sm={24} lg={12} xl={24}>
              <TodayMetrics data={todayData} />
            </Col>
            <Col span={24} xs={24} sm={24} lg={12} xl={24}>
              <ContentDistribution data={contentDistributionData} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="mb-8">
        {/* 中部分 */}
        <UserRetentionTrend data={userRetention} />
        <UserRetention data={userRetentionData} />
        <ContentConsumptionTrend data={contentConsumption} />
        <ContentConsumption data={contentConsumptionData} />
      </Row>
      {/* 下部分 */}
      <Row gutter={[16, 16]} className="mb-8">
        {/* 中部分 */}
        <Col lg={24} xl={24} className="w-[100%]">
          <ContentSource data={contentSourceData} />
        </Col>
      </Row>
    </div>
  );
};

export default MultiDimensionDataAnalysis;
