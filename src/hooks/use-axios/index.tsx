import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type { MutationFunction } from 'react-query'
import { useMutation, useQuery } from 'react-query'

interface UseAxiosOptions extends AxiosRequestConfig {
  queryKey: string
}

export function useAxios<TData = unknown, TError = unknown>(
  options: UseAxiosOptions,
) {
  const { queryKey, ...axiosOptions } = options

  const fetchData = async () => {
    const response = await axios.request<TData, AxiosResponse<TData>>(
      axiosOptions,
    )
    return response.data
  }

  const query = useQuery<TData, TError>(queryKey, fetchData)
  const mutateData: MutationFunction<TData, TData> = async () => {
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

  return { ...query, mutation }
}
