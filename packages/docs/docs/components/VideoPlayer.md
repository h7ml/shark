---
order: 6
title: VideoPlayer
group: 介绍

apiHeader:
  docUrl: https://github.com/h7ml/shark/blob/master/packages/docs/docs/components/VideoPlayer.md
  sourceUrl: https://github.com/h7ml/shark/blob/master/packages/docs/docs/components/demos/VideoPlayer.tsx
---

## 使用

这是一个视频播放器组件，可以用于在网页中播放视频。

### 用法示例

<code src="./demos/VideoPlayer.tsx" nopadding></code>

### API

| 参数                   | 说明                                                         | 类型                                         | 默认值  |
| ---------------------- | ------------------------------------------------------------ | -------------------------------------------- | ------- |
| src                    | 视频源地址                                                   | string                                       | -       |
| width                  | 视频播放器宽度                                               | string                                       | "100%"  |
| height                 | 视频播放器高度                                               | string                                       | "auto"  |
| onPlayPause            | 播放/暂停时的回调函数                                       | () => void                                   | -       |
| onReload               | 重新加载视频时的回调函数                                     | () => void                                   | -       |
| onFastForward          | 快进时的回调函数                                             | () => void                                   | -       |
| onRewind               | 倒带时的回调函数                                             | () => void                                   | -       |
| onVolumeUp             | 增加音量时的回调函数                                         | () => void                                   | -       |
| onVolumeDown           | 减小音量时的回调函数                                         | () => void                                   | -       |
| onVolumeChange         | 音量改变时的回调函数，参数为当前音量                         | (volume: number) => void                     | -       |
| onFullScreen           | 进入/退出全屏模式时的回调函数                                | () => void                                   | -       |
| onTogglePictureInPicture | 切换画中画模式时的回调函数                                   | () => void                                   | -       |
| showControls           | 是否展示控制条                                               | boolean                                      | true    |
| autoPlay               | 是否自动播放视频                                             | boolean                                      | false   |

#### 使用说明

- 将 `src` 属性设置为视频的 URL 地址。
- 可以通过设置 `width` 和 `height` 属性调整视频播放器的大小。
- 通过传递相应的回调函数，可以监听播放/暂停、重新加载、快进、倒带、音量调节、全屏模式等操作。
- 如果需要视频加载完成后自动播放，可以将 `defaultPlay` 属性设置为 `true`。

更多详情请查看[文档](https://github.com/h7ml/shark/blob/master/packages/docs/docs/components/VideoPlayer.md)，示例代码可在[源代码](https://github.com/h7ml/shark/blob/master/packages/docs/docs/components/demos/VideoPlayer.tsx)中查看。
