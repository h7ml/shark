import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type { MutationFunction } from 'react-query'
import { useMutation, useQuery, useQueryClient } from 'react-query'

interface UseAxiosOptions extends AxiosRequestConfig {
  queryKey: string | string[]
}

export function useAxios<TData = unknown, TError = unknown>(
  options: UseAxiosOptions,
) {
  const { queryKey, ...axiosOptions } = options
  const queryClient = useQueryClient()

  const fetchData = async () => {
    const response = await axios.request<TData, AxiosResponse<TData>>(
      axiosOptions,
    )
    return response.data
  }

  const query = useQuery<TData, TError>(queryKey, fetchData)
  // eslint-disable-next-line unused-imports/no-unused-vars
  const mutateData: MutationFunction<TData, TData> = async (data) => {
    const response = await axios.request<TData, AxiosResponse<TData>>(
      axiosOptions,
    )
    return response.data
  }

  const mutation = useMutation<TData, TError, TData>(
    (data: TData) => mutateData(data),
    {
      onSuccess: () => {
        query.refetch()
      },
    },
  )

  const handleReload = (keys: string | string[]) => {
    const keyList = Array.isArray(keys) ? keys : [keys]
    keyList.forEach((key) => {
      queryClient.invalidateQueries(key)
    })
  }

  return { ...query, mutation, handleReload }
}
