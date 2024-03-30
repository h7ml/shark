import Mock from 'mockjs'

import { isSSR, setupMock } from '@/utils'

if (!isSSR) {
  setupMock({
    mock: true, // 是否开启mock 默认关闭
    setup: () => {
      Mock.mock('/api/visualization/overview', {
        // 数据总览
        'overview|30-50': [
          {
            'key|+1': 1,
            'name|1': ['小米', '华为', '苹果', '三星', 'OPPO', 'VIVO'],
            'year': '@date(yyyy)',
            'gdp|100-300': 1,
          },
        ],
        // 今日数据
        'today|30-50': [
          {
            'key|+1': 1,
            'type|1': ['点赞量', '转发量', '评论量'],
            'sales|100-300': 1,
          },
        ],
        // 内容题材分布
        'contentDistribution|30-50': [
          {
            'key|+1': 1,
            'item|1': [
              '国际',
              '娱乐',
              '纯文本',
              '图片类',
              '视频类',
              '体育',
              '科技',
              '财经',
              '汽车',
              '房产',
            ],
            'user|1': ['小米', '华为'],
            'score|100-300': 1,
          },
        ],
        // 用户留存趋势（呈上升趋势
        'userRetention|30-50': ['@integer(10, 300)'],
        // 用户留存量
        'userRetentionData|5-12': [
          {
            'key|+1': 1,
            'name|1': ['新增用户', '活跃用户', '留存用户'],
            'sales|100-300': 1,
            'month': '@date(MM)',
          },
        ],
        // 内容消费趋势
        'contentConsumptionTrend|30-50': ['@integer(10, 300)'],
        // 内容消费量
        'contentConsumptionData|30-100': [
          {
            'key|+1': 1,
            'name|1': ['文章', '视频', '音频'],
            'sales|100-300': 1,
            'month': '@date(MM)',
          },
        ],
        // 内容发布来源
        'contentSource': {
          // 纯文本
          'text|30-50': [
            {
              'key|+1': 1,
              'type|1': [
                'UGC',
                'PGC',
                '国外网站',
                '转载文章',
                '行业报告',
                '其他',
              ],
              'value|100-300': 1,
            },
          ],
          // 图片类
          'image|30-50': [
            {
              'key|+1': 1,
              'type|1': [
                'UGC',
                'PGC',
                '国外网站',
                '转载文章',
                '行业报告',
                '其他',
              ],
              'value|100-300': 1,
            },
          ],
          // 视频类
          'video|30-50': [
            {
              'key|+1': 1,
              'type|1': [
                'UGC',
                'PGC',
                '国外网站',
                '转载文章',
                '行业报告',
                '其他',
              ],
              'value|100-300': 1,
            },
          ],
        },
      })
    },
  })
}
