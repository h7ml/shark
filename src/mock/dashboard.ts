import Mock from "mockjs";

import { isSSR, setupMock } from "@/utils";

if (!isSSR) {
  setupMock({
    mock: true, // 是否开启mock 默认关闭
    setup: () => {
      Mock.mock(RegExp("/api/column/dashboard"), {
        "data|12-20": [
          {
            "key|+1": 1,
            "type|1": ["github", "gitee", "android", "ios"],
            "value|270-300": 1,
            year: '@date("yyyy")',
          },
        ],
      });
    },
  });
}
