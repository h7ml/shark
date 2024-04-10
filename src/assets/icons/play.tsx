import Icon from '@ant-design/icons'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import React from 'react'
import type { SVGProps } from 'react'

export function F7PlayCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="currentColor"
        d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-4.125-11.297l12.539-7.406c.914-.563.89-1.852 0-2.367l-12.54-7.454c-.96-.562-2.226-.117-2.226.938v15.352c0 1.078 1.196 1.546 2.227.937"
      >
      </path>
    </svg>
  )
}
export function IconPlay(props: Partial<CustomIconComponentProps>) {
  return <Icon component={F7PlayCircle} {...props} />
}
