import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import type { ChangeEvent } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { i18n, t } from '@/utils'
import VideoPlayer from '@/components/video-player'
import { useGlobalStore } from '@/store/global'

const VideoPage: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>(
    'https://www.w3schools.com/html/mov_bbb.mp4',
  )
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { lang } = useGlobalStore()
  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(lang)
    }
    changeLanguage()
  }, [lang])
  const handleUrlChangeDebounced = debounce((url: string) => {
    // Use regular expression to validate URL format
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    if (urlRegex.test(url)) {
      setIsValidUrl(true)
      setVideoSrc(url)
    }
    else {
      setIsValidUrl(false)
      message.error(t('qTvFdqOH'))
    }
  }, 500) // 500ms debounce delay

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    handleUrlChangeDebounced(url)
  }

  const handlePlayThrottled = throttle(() => {
    if (videoRef.current)
      videoRef.current.play()
    else message.error(`${`${t('eKfCNkqq')}videoPlayer${t('bikocJSR')}`}`)
  }, 1000) // 1000ms throttle interval

  const handleSubmit = () => {
    handlePlayThrottled()
  }

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Form.Item name="videoSrc" initialValue={videoSrc}>
          <Input
            placeholder={`${`${t('NvDIWzLK')}mp4${t('EOtrIDGy')}`}`}
            onChange={handleUrlChange}
            value={videoSrc}
            suffix={(
              <Button type="primary" htmlType="submit">
                {t('OWuSVBcv')}
              </Button>
            )}
          />
        </Form.Item>
      </Form>
      {!isValidUrl && <p style={{ color: 'red' }}>{`${t('qTvFdqOH')}`}</p>}
      <VideoPlayer ref={videoRef} src={videoSrc} />
    </div>
  )
}

export default VideoPage
