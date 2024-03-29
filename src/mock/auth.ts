import Mock from "mockjs";
import { isSSR } from "@/utils/is";
import setupMock from "@/utils/setupMock";
import { randomHexColor } from "@/utils/color";

if (!isSSR) {
  setupMock({
    mock: true, // 是否开启mock 默认关闭
    setup: () => {
      Mock.mock(RegExp("/api/auth/captcha"), () => {
        const captcha = Mock.mock({ regexp: /\w{4}/ }).regexp;
        return {
          code: captcha,
          imageBase64: Mock.Random.image(
            "100x40",
            "#141414",
            randomHexColor(),
            captcha,
          ),
        };
      });
    },
  });
}
