import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import type { SVGProps } from "react";

export function OuiFullScreen(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M13 3v4h-1V4H9V3zM3 3h4v1H4v3H3zm10 10H9v-1h3V9h1zM3 13V9h1v3h3v1zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006zm1 0v12.012c0 .548.446.994.994.994h12.012a.995.995 0 0 0 .994-.994V1.994A.995.995 0 0 0 14.006 1H1.994A.995.995 0 0 0 1 1.994"
      ></path>
    </svg>
  );
}
export function IconFullScreen(props: Partial<CustomIconComponentProps>) {
  return <Icon component={OuiFullScreen} {...props} />;
}
