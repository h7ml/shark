import { Spin } from "antd";
import NProgress from "nprogress";
import { useEffect } from "react";

export function Loading() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="flex justify-center">
      <Spin />
    </div>
  );
}
