import { BellOutlined, MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Input } from "antd";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Icon3 } from "@/assets/icons/3";
import { IconBuguang } from "@/assets/icons/buguang";
import { IconFangdajing } from "@/assets/icons/fangdajing";
import { IconJiaretaiyang } from "@/assets/icons/jiaretaiyang";
import { IconShuyi_fanyi36 } from "@/assets/icons/shuyi_fanyi-36";
import { defaultSetting } from "@/default-setting";
import { useStorage } from "@/hooks";
import { useGlobalStore } from "@/store/global";

function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { data: userName = "" } = useStorage("userName");
  const { darkMode, collapsed, setCollapsed, setDarkMode, setLang, lang } =
    useGlobalStore();

  const handleLogout = (handerInfo: { key: any }) => {
    const { key } = handerInfo;
    navigate(`/user/${key}`);
  };

  const menuItems = [
    { label: userName, key: "account" },
    { label: t("wPqFuoLF"), key: "login" },
  ].filter((item) => item.label);
  return (
    <div
      style={{ zIndex: 1001 }}
      className="h-[80px] flex basis-[48px] items-center px-0 gap-[16px] fixed top-0 right-0 left-0 bg-primary"
    >
      <div
        style={{ width: defaultSetting.slideWidth }}
        className=" flex justify-between items-center  <lg:hidden"
      >
        <div className="flex items-center gap-[4px] text-[20px] px-[24px] pr-0">
          <IconBuguang className="text-blue-500" />
          <h1 className="text-primary font-bold text-[22px]">shark</h1>
        </div>
        <div
          className="btn-icon"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          <MenuOutlined />
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 pr-[24px]">
        <Input
          style={{
            borderRadius: 8,
            outline: "none",
            boxShadow: "none",
          }}
          className="w-[400px] h-[50px] focus:(border-[rgb(135,94,196)]) <lg:hidden"
          size="large"
          prefix={
            <IconFangdajing
              style={{
                color: "#697586",
                paddingRight: 8,
              }}
            />
          }
          placeholder={t("jhqxJPbn")}
          allowClear
        />
        <div className="pl-[20px] lg:hidden">
          <div
            className="btn-icon"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <MenuOutlined />
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="btn-icon text-[20px]"
          >
            {darkMode ? <IconJiaretaiyang /> : <Icon3 />}
          </div>
          <Dropdown
            menu={{
              items: defaultSetting.languages.map((language) => ({
                label: `${t(language.name)} (${language.key.toUpperCase()})`,
                key: language.key,
              })),
              onClick: async ({ key }) => {
                await i18n.changeLanguage(key);
                setLang(key);
              },
            }}
            trigger={["click"]}
            placement="bottom"
            overlayClassName="w-[160px]"
          >
            <div className="btn-icon text-[20px] bg-[rgb(227,242,253)] dark:text-[rgb(30,136,229)] text-[rgb(30,136,229)] hover:(bg-[rgb(33,150,243)] dark:text-[rgb(227,242,253)] text-[rgb(227,242,253)])">
              {lang === "zh" ? (
                <IconShuyi_fanyi36 />
              ) : (
                <span className="text-[14px]">{lang.toUpperCase()}</span>
              )}
            </div>
          </Dropdown>
          <div className="btn-icon">
            <BellOutlined />
          </div>
          <Dropdown
            menu={{
              items: menuItems,
              onClick: handleLogout,
            }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <div className="btn-icon rounded-[27px] pl-[10px] pr-[14px] justify-between h-[48px] w-[75px] text-[20px] bg-[rgb(227,242,253)] text-[rgb(30,136,229)] hover:(bg-[rgb(33,150,243)] text-[rgb(227,242,253)])">
              <Avatar
                style={{ backgroundColor: "gold", verticalAlign: "middle" }}
                icon={<IconBuguang />}
              />
              <SettingOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
