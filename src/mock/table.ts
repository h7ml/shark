import Mock from 'mockjs'
import { isSSR } from '@/utils/is'
import setupMock from '@/utils/setupMock'

if (!isSSR) {
  setupMock({
    setup: () => {
      Mock.mock('/api/table', {
        'data|1-100': [
          {
            'key|+1': 1,
            'name': '@cname',
            'age|18-30': 1,
            'address': '@county(true)',
            'tags': ['@city', '@city'],
          },
        ],
      })
    },
  })
}
