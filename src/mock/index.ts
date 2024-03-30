import './user'
import './message-box'
import './table'
import './auth'
import './visualization'

import Mock from 'mockjs'

import { isSSR } from '@/utils'

if (!isSSR) {
  Mock.setup({
    timeout: '500-1500',
  })
}
