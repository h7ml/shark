import Mock from "mockjs";

import { setupMock, isSSR } from "@/utils";

if (!isSSR) {
  setupMock({
    mock: true, // 是否开启mock 默认关闭
    setup: () => {
      Mock.mock("/api/table", {
        "data|30-1000": [
          {
            "key|+1": 1,
            name: "@cname",
            "age|18-30": 1,
            address: "@county(true)",
            tags: ["@city", "@city"],
          },
        ],
      });
    },
  });
}
