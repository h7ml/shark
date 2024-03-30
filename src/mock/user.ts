import Mock from 'mockjs'

import { isSSR, setupMock } from '@/utils'

if (!isSSR) {
  Mock.XHR.prototype.withCredentials = true

  setupMock({
    mock: true, // 是否开启mock 默认关闭
    setup: () => {
      // 用户信息
      Mock.mock(new RegExp('/api/user/userInfo'), () => {
        return Mock.mock({
          'name': '@cname',
          'avatar': 'https://source.unsplash.com/random/64x64',
          'userid': '@id',
          'email': 'mock.@domain',
          'signature': '@cparagraph',
          'jobName': '@cword(4)',
          'organization': '@cword(4)',
          'organizationName': '@cword(2)',
          'location': '@city(true)',
          'locationName': '@city(true)',
          'introduction': '@cparagraph(3, 5)',
          'personalWebsite': 'https://shark.h7ml.cn',
          'verified': true,
          'phoneNumber': Mock.mock(/177[*]{6}[0-9]{2}/),
          'accountId': Mock.mock(/[a-z]{4}[-][0-9]{8}/),
          'registrationTime': Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
          // permissions: generatePermission(userRole),
          'title': '@ctitle(3, 5)',
          'group': '@cword(4)－@cword(3)－@cword(4)－@cword(3)－@word(4)',
          'tags|6': [
            {
              'key|+1': 0,
              'label': '@ctitle(4)',
            },
          ],
          'notifyCount': '@integer(10, 20)',
          'unreadCount': '@integer(5, 15)',
          'country': '@city',
          'province': '@province',
          'geographic': {
            province: {
              label: '@province',
              key: Mock.mock(/\d{5,7}/),
            },
            city: {
              label: '@city',
              key: Mock.mock(/\d{5,7}/),
            },
          },
          'bio': '@cparagraph(3, 5)',
          'address': '@county(true)@cword(4)@natural(1, 100)号',
          'phone': '@integer(1000, 9999)-@integer(10000000, 99999999)',
        })
      })

      // 登录
      Mock.mock(new RegExp('/api/user/login'), (params) => {
        const { userName, password } = JSON.parse(params.body)
        if (!userName) {
          return {
            status: 'error',
            msg: '用户名不能为空',
          }
        }
        if (!password) {
          return {
            status: 'error',
            msg: '密码不能为空',
          }
        }
        if (userName === 'admin' && password === 'admin') {
          return {
            status: 'ok',
          }
        }
        return {
          status: 'error',
          msg: '账号或者密码错误',
        }
      })

      // 个人项目
      Mock.mock(new RegExp('/api/user/projects'), () => {
        return Mock.mock({
          'list|6': [
            {
              'id|+1': 1,
              'name': '@ctitle(3, 5)',
              'desc': '@cparagraph(5, 8)',
              'updatedAt': '@datetime',
              'star': '@integer(10, 100)',
              'status|1': ['active', 'exception', 'normal'],
              'percent': '@integer(10, 100)',
              'time': '@datetime',
              'title': '@cname(3, 5)',
            },
          ],
        })
      })

      // 团队
      Mock.mock(new RegExp('/api/user/teams'), () => {
        return Mock.mock({
          'list|60-100': [
            {
              'id|+1': 1,
              'title': '@ctitle(2,4)',
              'subtitle': '@ctitle(3, 5)',
              'type': '@cword(4)',
              'content': '@cparagraph(5, 8)',
              'name': '@ctitle(3, 5)',
              'count': '@integer(10, 10000)',
              'avatar': 'https://source.unsplash.com/random/64x64?q=1',
              'tag|2': [{ text: '@ctitle(2, 3)', color: '@color' }],
              'status|1': ['激活', '异常', 'normal'],
              'color': '@color',
              'progress': '@integer(10, 100)',
            },
          ],
        })
      })

      // 最新动态。返回新闻列表
      Mock.mock(new RegExp('/api/user/activities'), () => {
        return Mock.mock({
          'list|30-80': [
            {
              'id|+1': 1,
              'title': '@ctitle(6,13)',
              'time': '@datetime',
              'href': 'https://shark.h7ml.cn',
              'desc': '@cparagraph(10, 20)',
              'avatar': '@image()',
              'star': '@integer(10, 100)',
              'like': '@integer(10, 100)',
              'message': '@integer(10, 100)',
            },
          ],
        })
      })

      // facet
      Mock.mock(new RegExp('/api/user/facet'), () => {
        return Mock.mock({
          'list|20-60': [
            {
              'SepalLength': '@float(0, 10, 0, 2)',
              'SepalWidth': '@float(0, 10, 0, 2)',
              'PetalLength': '@float(0, 10, 0, 2)',
              'PetalWidth': '@float(0, 10, 0, 2)',
              'Species': '@cname(3, 5)',
              'id|+1': 1,
            },
          ],
        })
      })
    },
  })
}
