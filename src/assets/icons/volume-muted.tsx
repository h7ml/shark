import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import type { SVGProps } from 'react'
export function SystemUiconsVolumeMuted(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 7.5h3l5-5v16l-5-5h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m10 1l4 4m-4 0l4-4z"
      >
      </path>
    </svg>
  )
}

export function IconVolumeMuted(props: Partial<CustomIconComponentProps>) {
  return <Icon component={SystemUiconsVolumeMuted} {...props} />
}
