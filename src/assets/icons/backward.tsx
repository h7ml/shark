import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import type { SVGProps } from 'react'

export function IcomoonFreeBackward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m3 9L7.5 8L11 5.5zm-4 0L3.5 8L7 5.5z"
      >
      </path>
    </svg>
  )
}
export function IconBackward(props: Partial<CustomIconComponentProps>) {
  return <Icon component={IcomoonFreeBackward} {...props} />
}
