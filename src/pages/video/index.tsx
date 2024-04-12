import { debounce, throttle } from "radash";
import type { ChangeEvent } from "react";
import React, { useRef, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useTranslation } from "react-i18next";
import VideoPlayer from "@/components/video-player";

const VideoPage: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>(
    "https://www.w3schools.com/html/mov_bbb.mp4",
  );
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();
  const handleUrlChangeDebounced = debounce({ delay: 500 }, (url: string) => {
    // 使用正则表达式验证 URL 格式
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (urlRegex.test(url)) {
      setIsValidUrl(true);
      setVideoSrc(url);
    } else {
      setIsValidUrl(false);
      message.error(t("qTvFdqOH"));
    }
  });

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    handleUrlChangeDebounced(url);
  };

  const handlePlayThrottled = throttle({ interval: 1000 }, () => {
    if (videoRef.current) videoRef.current.play();
    else message.error(`${`${t("eKfCNkqq")}videoPlayer${t("bikocJSR")}`}`);
  }); // 1000ms throttle interval

  const handleSubmit = () => {
    handlePlayThrottled();
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item name="videoSrc" initialValue={videoSrc}>
          <Input
            placeholder={`${`${t("NvDIWzLK")}mp4${t("EOtrIDGy")}`}`}
            onChange={handleUrlChange}
            value={videoSrc}
            suffix={
              <Button type="primary" htmlType="submit">
                {t("OWuSVBcv")}
              </Button>
            }
          />
        </Form.Item>
      </Form>
      {!isValidUrl && <p style={{ color: "red" }}>{`${t("qTvFdqOH")}`}</p>}
      <VideoPlayer ref={videoRef} src={videoSrc} />
    </div>
  );
};

export default VideoPage;
