import { message } from 'antd'
import type { ForwardedRef, MutableRefObject } from 'react'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { t } from '@/utils'

interface VideoPlayerProps {
  src: string
  width?: string
  height?: string
}

const VideoPlayer = forwardRef(
  (props: VideoPlayerProps, ref: ForwardedRef<HTMLVideoElement>) => {
    const { src, width = '100%', height = '90%' } = props
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [currentTime, setCurrentTime] = useState('00:00')
    const [duration, setDuration] = useState('00:00')
    const [isPictureInPicture, setIsPictureInPicture] = useState(false)

    const formatTime = (time: number): string => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      const minutesStr = String(minutes).padStart(2, '0')
      const secondsStr = String(seconds).padStart(2, '0')
      return `${minutesStr}:${secondsStr}`
    }
    useEffect(() => {
      if (videoRef.current) {
        const videoElement = videoRef.current
        const handleTimeUpdate = () => {
          if (videoElement) {
            const currentTimeFormatted = formatTime(videoElement.currentTime)
            setCurrentTime(currentTimeFormatted)
            const durationFormatted = formatTime(videoElement.duration)
            setDuration(durationFormatted)
          }
        }
        const handleError = (event: Event) => {
          const errorEvent = event as any
          const handlemsg = errorEvent.target.error.message
          if (handlemsg) {
            console.error(`Video error:${handlemsg}`)
            message.warning(handlemsg)
            setIsPlaying(false)
          }
        }
        videoElement.addEventListener('timeupdate', handleTimeUpdate)
        videoElement.addEventListener('error', handleError)
        return () => {
          videoElement.removeEventListener('timeupdate', handleTimeUpdate)
          videoElement.removeEventListener('error', handleError)
        }
      }
    }, [])

    const handlePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying)
          videoRef.current.pause()
        else videoRef.current.play()

        setIsPlaying(!isPlaying)
      }
    }

    const handleReload = () => {
      if (videoRef.current) {
        videoRef.current.load()
        setIsPlaying(false)
        setProgress(0)
        setCurrentTime('00:00')
        setDuration('00:00')
      }
    }

    const handleFastForward = () => {
      if (videoRef.current) {
        videoRef.current.currentTime += 3
        setProgress(
          (videoRef.current.currentTime / videoRef.current.duration) * 100,
        )
      }
    }

    const handleRewind = () => {
      if (videoRef.current) {
        videoRef.current.currentTime -= 3
        setProgress(
          (videoRef.current.currentTime / videoRef.current.duration) * 100,
        )
      }
    }

    const handleVolumeUp = () => {
      if (videoRef.current) {
        const newVolume = Math.min(volume + 0.1, 1)
        setVolume(newVolume)
        videoRef.current.volume = newVolume
      }
    }

    const handleVolumeDown = () => {
      if (videoRef.current) {
        const newVolume = Math.max(volume - 0.1, 0)
        setVolume(newVolume)
        videoRef.current.volume = newVolume
      }
    }

    const handleFullScreen = () => {
      videoRef.current?.requestFullscreen()
    }

    const handleProgress = () => {
      if (!isDragging && videoRef.current) {
        const currentTime = videoRef.current.currentTime
        const duration = videoRef.current.duration
        const progressPercentage = (currentTime / duration) * 100
        setProgress(progressPercentage)
      }
    }

    const handleDragStart = () => {
      setIsDragging(true)
    }

    const handleDragEnd = (
      event:
        | React.MouseEvent<HTMLProgressElement>
        | React.TouchEvent<HTMLProgressElement>,
    ) => {
      if (videoRef.current) {
        const progressBar = event.currentTarget as HTMLProgressElement
        const clickPosition
          = event.type === 'touchend'
            ? (event as React.TouchEvent<HTMLProgressElement>).changedTouches[0]
                .clientX - progressBar.getBoundingClientRect().left
            : (event as React.MouseEvent<HTMLProgressElement>).clientX
            - progressBar.getBoundingClientRect().left
        const progressPercentage
          = (clickPosition / progressBar.offsetWidth) * 100
        setProgress(progressPercentage)
        videoRef.current.currentTime
          = (progressPercentage / 100) * videoRef.current.duration
      }
      setIsDragging(false)
    }

    const handleTogglePictureInPicture = () => {
      if (videoRef.current) {
        if (document.pictureInPictureElement) {
          document
            .exitPictureInPicture()
            .then(() => setIsPictureInPicture(false))
            .catch(error =>
              console.error('Error exiting Picture-in-Picture mode:', error),
            )
        }
        else {
          videoRef.current
            .requestPictureInPicture()
            .then(() => setIsPictureInPicture(true))
            .catch(error =>
              console.error('Error entering Picture-in-Picture mode:', error),
            )
        }
      }
    }

    return (
      <div className="relative">
        <video
          ref={(videoElement) => {
            if (videoElement) {
              (videoRef as MutableRefObject<HTMLVideoElement>).current
                = videoElement
              if (ref) {
                if (typeof ref === 'function') {
                  ref(videoElement)
                }
                else {
                  (ref as MutableRefObject<HTMLVideoElement>).current
                    = videoElement
                }
              }
            }
          }}
          style={{ width, height }}
          src={src}
          className="w-full h-auto"
          onTimeUpdate={handleProgress}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="absolute bottom-15 z-998 left-0 right-0 flex justify-center space-x-4">
          <button className="cursor-pointer text-ccc" onClick={handlePlayPause}>
            {isPlaying ? t('VSZdxVOM') : t('GTuxgysd')}
          </button>
          <button className="cursor-pointer text-ccc" onClick={handleReload}>
            {t('kYVkmXtK')}
            {' '}
            3
          </button>
          <button
            className="cursor-pointer text-ccc"
            onClick={handleFastForward}
          >
            {t('fZYVSWPZ')}
            {' '}
            3
            {t('lNCFQVIz')}
          </button>
          <button className="cursor-pointer text-ccc" onClick={handleRewind}>
            {t('KQExjfzI')}
            {' '}
            3
            {t('lNCFQVIz')}
          </button>
          <button className="cursor-pointer text-ccc" onClick={handleVolumeUp}>
            {t('tPLJAbEn')}
          </button>
          <button
            className="cursor-pointer text-ccc"
            onClick={handleVolumeDown}
          >
            {t('UzSeBVPp')}
          </button>
          <button
            className="cursor-pointer text-ccc"
            onClick={handleFullScreen}
          >
            {t('pltSfqMA')}
          </button>
          <button
            className="cursor-pointer text-ccc"
            onClick={handleTogglePictureInPicture}
          >
            {isPictureInPicture ? t('nKQaojFg') : t('LLefTaMy')}
          </button>
        </div>
        <div className="absolute bottom-5 left-0 right-0 mb-4 px-4  z-999">
          <progress
            value={progress}
            max={100}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            className="w-full h-2 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
          >
          </progress>
        </div>
        <div className="absolute bottom-0 left-0 right-0 mb-2 px-4 flex justify-between text-white">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>
      </div>
    )
  },
)

export default VideoPlayer
