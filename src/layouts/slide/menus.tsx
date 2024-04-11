import { Menu } from 'antd'
import type { ItemType } from 'antd/es/menu/hooks/useItems'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useMatches } from 'react-router-dom'

import type { MenuItem } from '@/config/routes'
import { routeConfig } from '@/config/routes'
import { useGlobalStore } from '@/store/global'
import { t } from '@/utils'
import { useTitle } from '@/hooks'

function SlideMenu() {
  const location = useLocation()
  const matches = useMatches()
  const { lang } = useGlobalStore()
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [menuProps, setMenuProps] = useState<MenuItem | undefined>()
  const { collapsed } = useGlobalStore()
  useTitle(menuProps?.title || '')
  useEffect(() => {
    if (collapsed)
      setOpenKeys([])
    else setOpenKeys(matches.map(match => match.pathname))
  }, [matches, collapsed])

  const getMenuTitle = (menu: MenuItem) => {
    if (menu.children && menu.title)
      return t(menu.title)

    return <Link to={menu.path}>{menu.title ? t(menu.title) : ''}</Link>
  }

  const treeMenuData = useCallback(
    (menus: MenuItem[]): ItemType[] => {
      return menus
        .filter(o => o.icon)
        .map((menu: MenuItem) => {
          // eslint-disable-next-line unused-imports/no-unused-vars
          const { Component, ...rest } = menu
          return {
            ...rest,
            title: t(menu.title),
            key: menu.path,
            label: getMenuTitle(menu),
            icon: menu.icon,
            onClick: () => {
              setMenuProps(menu)
            },
            children: menu.children ? treeMenuData(menu.children) : null,
          }
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang],
  )

  const menuData = useMemo(() => {
    return treeMenuData(routeConfig || [])
  }, [treeMenuData])
  return (
    <Menu
      className="bg-primary"
      mode="inline"
      selectedKeys={[location.pathname]}
      style={{ height: '100%', borderRight: 0 }}
      items={menuData}
      inlineCollapsed={collapsed}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
    />
  )
}

export default SlideMenu
