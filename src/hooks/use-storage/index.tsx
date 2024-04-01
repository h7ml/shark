import { t } from '@/utils'
import { useEffect, useState } from 'react'

import { Storage } from '@/utils'

export function useStorage(key: string) {
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    /**
     * 从Storage中获取数据，并设置到setData中
     */
    async function fetchData() {
      const storedData = await Storage.get(key)
      setData(storedData)
    }

    fetchData()
  }, [key])

  /**
   * 将数据存入缓存，并调用setData函数将数据存储到状态中
   *
   * @param key 数据缓存的键
   * @param value 数据缓存的值
   * @param dieTime 数据缓存的过期时间（单位：秒），可选参数
   * @returns Promise<void>
   */

  async function setDataAndStore(key: string, value: any, dieTime?: number) {
    await Storage.set(key, value, dieTime)
    setData(value)
  }

  /**
   * 清除数据
   *
   * @returns Promise<void>
   */
  async function clearData() {
    await Storage.remove(key)
    setData(null)
  }

  /**
   * 获取所有存储的键
   *
   * @returns Promise<void>
   */
  async function getAllKeys() {
    const keys = await Storage.keys()
    console.log(keys)
  }

  return { data, setData: setDataAndStore, clearData, getAllKeys }
}
