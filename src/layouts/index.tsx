import { Outlet } from 'react-router-dom'

import type { FC } from 'react'
import Content from '@/layouts/content'
import Header from '@/layouts/header'
import Slide from '@/layouts/slide'

const BasicLayout: FC = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <Header />
      <Slide />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}
export default BasicLayout
