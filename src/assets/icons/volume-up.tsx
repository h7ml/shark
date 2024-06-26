import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import type { SVGProps } from "react";
export function CarbonVolumeUpAlt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4zM18 30a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1M4 20h6a1.2 1.2 0 0 1 .794.297L17 26.568V5.432l-6.206 6.271A1.201 1.201 0 0 1 10 12H4z"
      ></path>
    </svg>
  );
}

export function IconVolumeUp(props: Partial<CustomIconComponentProps>) {
  return <Icon component={CarbonVolumeUpAlt} {...props} />;
}
