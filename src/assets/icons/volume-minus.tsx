import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import type { SVGProps } from "react";
export function MdiLightVolumeMinus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 9h4l4-4h2v15h-2l-4-4H2zm1 6h3.41l4 4H11V6h-.59l-4 4H3zm11-2v-1h7v1z"
      ></path>
    </svg>
  );
}
export function IconVolumeMinus(props: Partial<CustomIconComponentProps>) {
  return <Icon component={MdiLightVolumeMinus} {...props} />;
}
