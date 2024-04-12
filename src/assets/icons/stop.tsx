import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import React from "react";
import type { SVGProps } from "react";

export function GgPlayStopO(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path d="M15 9H9v6h6z"></path>
        <path
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
export function IconStop(props: Partial<CustomIconComponentProps>) {
  return <Icon component={GgPlayStopO} {...props} />;
}
