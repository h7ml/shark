import React, { forwardRef, useEffect, useRef, useState } from "react";
import './styles/index.less';

export interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
  onPlayPause?: () => void;
  onReload?: () => void;
  onFastForward?: () => void;
  onRewind?: () => void;
  onVolumeUp?: () => void;
  onVolumeDown?: () => void;
  onVolumeChange?: (volume: number) => void;
  onFullScreen?: () => void;
  onTogglePictureInPicture?: () => void;
  showControls?: boolean;
  autoPlay?: boolean;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (props, ref) => {
    const { src, width = "100%", height = "88vh", showControls = true, autoPlay = false, ...rest } = props;

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [duration, setDuration] = useState("00:00");
    const [isPictureInPicture, setIsPictureInPicture] = useState(false);

    const formatTime = (time: number): string => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      const minutesStr = String(minutes).padStart(2, "0");
      const secondsStr = String(seconds).padStart(2, "0");
      return `${minutesStr}:${secondsStr}`;
    };

    useEffect(() => {
      if (videoRef.current) {
        const videoElement = videoRef.current;

        const handleTimeUpdate = () => {
          const currentTimeFormatted = formatTime(videoElement.currentTime);
          setCurrentTime(currentTimeFormatted);
          const durationFormatted = formatTime(videoElement.duration);
          setDuration(durationFormatted);
        };

        const handleError = (event: Event) => {
          const errorEvent = event as any;
          const errorMessage = errorEvent.target.error.message;
          console.error(`Video error: ${errorMessage}`);
          setIsPlaying(false);
        };

        videoElement.addEventListener("timeupdate", handleTimeUpdate);
        videoElement.addEventListener("error", handleError);

        return () => {
          videoElement.removeEventListener("timeupdate", handleTimeUpdate);
          videoElement.removeEventListener("error", handleError);
        };
      }
    }, []);

    useEffect(() => {
      if (videoRef.current && autoPlay) {
        videoRef.current.play();
      }
    }, [autoPlay]);

    const handlePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) videoRef.current.pause();
        else videoRef.current.play();

        setIsPlaying(!isPlaying);
        if (rest.onPlayPause) rest.onPlayPause();

      }
    };

    const handleReload = () => {
      if (videoRef.current) {
        videoRef.current.load();
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime("00:00");
        setDuration("00:00");
        if (rest.onReload) rest.onReload();
      }
    };

    const handleFastForward = () => {
      if (videoRef.current) {
        videoRef.current.currentTime += 3;
        setProgress(
          (videoRef.current.currentTime / videoRef.current.duration) * 100
        );
        if (rest.onFastForward) rest.onFastForward();
      }
    };

    const handleRewind = () => {
      if (videoRef.current) {
        videoRef.current.currentTime -= 3;
        setProgress(
          (videoRef.current.currentTime / videoRef.current.duration) * 100
        );
        if (rest.onRewind) rest.onRewind();
      }
    };

    const handleVolumeUp = () => {
      if (videoRef.current) {
        const newVolume = Math.min(volume + 0.1, 1);
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        if (rest.onVolumeUp) rest.onVolumeUp();
      }
    };

    const handleVolumeDown = () => {
      if (videoRef.current) {
        const newVolume = Math.max(volume - 0.1, 0);
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        if (rest.onVolumeDown) rest.onVolumeDown();
      }
    };

    const handleVolume = (newVolume: number) => {
      if (videoRef.current) {
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        if (rest.onVolumeChange) rest.onVolumeChange(newVolume);
      }
    };

    const handleFullScreen = () => {
      if (videoRef.current) {
        videoRef.current.requestFullscreen();
        if (rest.onFullScreen) rest.onFullScreen();
      }
    };

    const handleProgress = () => {
      if (!isDragging && videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        if (!isNaN(duration) && duration > 0) {
          const progressPercentage = (currentTime / duration) * 100;
          setProgress(progressPercentage);
        }
      }
    };

    const handleDragStart = () => {
      setIsDragging(true);
    };

    const handleDragEnd = (
      event: React.MouseEvent<HTMLProgressElement> | React.TouchEvent<HTMLProgressElement>
    ) => {
      if (videoRef.current) {
        const progressBar = event.currentTarget as HTMLProgressElement;
        const clickPosition =
          event.type === "touchend"
            ? (event as React.TouchEvent<HTMLProgressElement>).changedTouches[0].clientX -
            progressBar.getBoundingClientRect().left
            : (event as React.MouseEvent<HTMLProgressElement>).clientX -
            progressBar.getBoundingClientRect().left;
        const progressPercentage = (clickPosition / progressBar.offsetWidth) * 100;
        setProgress(progressPercentage);
        videoRef.current.currentTime = (progressPercentage / 100) * videoRef.current.duration;
      }
      setIsDragging(false);
    };

    const handleTogglePictureInPicture = () => {
      if (videoRef.current) {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture()
            .then(() => setIsPictureInPicture(false))
            .catch((error) => console.error("Error exiting Picture-in-Picture mode:", error));
        } else {
          videoRef.current.requestPictureInPicture()
            .then(() => setIsPictureInPicture(true))
            .catch((error) => console.error("Error entering Picture-in-Picture mode:", error));
        }
        if (rest.onTogglePictureInPicture) rest.onTogglePictureInPicture();
      }
    };

    return (
      <div className="sk-video-player  bg-red-400	 relative" style={{ width, height }}>
        <video
          ref={(videoElement) => {
            if (videoElement) {
              videoRef.current = videoElement;
              if (typeof ref === "function") {
                ref(videoElement);
              } else if (ref) {
                ref.current = videoElement;
              }
            }
          }}
          src={src}
          className="w-full h-full"
          onTimeUpdate={handleProgress}
          onEnded={() => setIsPlaying(false)}
        />
        {showControls && (
          <div className="absolute bottom-15 z-998 left-0 right-0 flex justify-center space-x-4">
            <button className="cursor-pointer text-ccc" onClick={handlePlayPause}>
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button className="cursor-pointer text-ccc" onClick={handleReload}>
              Reload
            </button>
            <button className="cursor-pointer text-ccc" onClick={handleFastForward}>
              Fast Forward
            </button>
            <button className="cursor-pointer text-ccc" onClick={handleRewind}>
              Rewind
            </button>
            <button onClick={handleVolumeUp}>Volume Up</button>
            <button onClick={handleVolumeDown}>Volume Down</button>
            <button onClick={() => handleVolume(0)}>Mute</button>
            <button className="cursor-pointer text-ccc" onClick={handleFullScreen}>
              Full Screen
            </button>
            <button className="cursor-pointer text-ccc" onClick={handleTogglePictureInPicture}>
              {isPictureInPicture ? "Exit Picture-in-Picture" : "Enter Picture-in-Picture"}
            </button>
          </div>
        )}
        <div className="absolute bottom-5 left-0 right-0 mb-4 px-4  z-999">
          <progress
            value={progress}
            max={100}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            className="w-full h-2 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
          ></progress>
        </div>
        <div className="absolute bottom-0 left-0 right-0 mb-2 px-4 flex justify-between text-ccc">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>
      </div>
    );
  }
);

export default VideoPlayer;
