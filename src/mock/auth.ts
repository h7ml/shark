import Mock from 'mockjs'
import { isSSR } from '@/utils/is'
import setupMock from '@/utils/setupMock'
import { randomHexColor } from '@/utils/color'

if (!isSSR) {
  const captcha = Mock.mock({ regexp: /\w{4}/ }).regexp
  setupMock({
    mock: true, // 是否开启mock 默认关闭
    setup: () => {
      Mock.mock('/api/auth/captcha', {
        code: captcha,
        imageBase64: Mock.Random.image(
          '100x40',
          '#141414',
          randomHexColor(),
          captcha,
        ),
      })
    },
  })
}
