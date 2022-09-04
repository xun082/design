import React from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menu-item";
import SubMenu from "./components/Menu/subMenu";

const App: React.FC = () => {
  return (
    <div>
      {/* 菜单 */}
      <Menu
        defaultIndex={"0"}
        onSelected={(index) => {
          console.log(index);
        }}
        mode="vertical"
        defaultOpenSubMenu={["2"]}
      >
        <MenuItem>click 1</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
        </SubMenu>
        <SubMenu title="default-dropdown">
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
        </SubMenu>
        <MenuItem>click 4</MenuItem>
      </Menu>
      <hr />
      <Menu
        defaultIndex={"0"}
        onSelected={(index) => {
          console.log(index);
        }}
        mode="vertical"
      >
        <MenuItem>click 1</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
        </SubMenu>
        <MenuItem>click 3</MenuItem>
        <MenuItem>click 4</MenuItem>
      </Menu>
      <hr />
      <Menu
        defaultIndex={"0"}
        onSelected={(index) => {
          console.log(index);
        }}
        mode="horizontal"
      >
        <MenuItem>click 1</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
          <MenuItem>click 2</MenuItem>
        </SubMenu>
        <MenuItem>click 3</MenuItem>
        <MenuItem>click 4</MenuItem>
      </Menu>
      <hr />
      <Menu
        defaultIndex={"0"}
        onSelected={(index) => {
          console.log(index);
        }}
        mode="vertical"
      >
        <MenuItem>click 1</MenuItem>
        <MenuItem disabled>click 2</MenuItem>
        <MenuItem>click 3</MenuItem>
        <MenuItem>click 4</MenuItem>
        <div>1111</div>
      </Menu>
      <Menu
        defaultIndex={"0"}
        onSelected={(index) => {
          console.log(index);
        }}
      >
        <MenuItem index={"0"}>click 1</MenuItem>
        <MenuItem index={"1"} disabled>
          click 2
        </MenuItem>
        <MenuItem index={"2"}>click 3</MenuItem>
        <MenuItem index={"3"}>click 4</MenuItem>
      </Menu>
      {/* 按钮 */}
      <Button className="test" btnType={ButtonType.Default} disabled>
        你好
      </Button>
      <Button autoFocus>自动获取焦点</Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        btnType={ButtonType.Primary}
      >
        点击事件
      </Button>
      <Button className="test" btnType={ButtonType.Default}>
        你好
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        你好
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        你好
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="https://www.baidu.com"
        target="_black"
        size={ButtonSize.Large}
      >
        你好
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="sajdajshdash"
        size={ButtonSize.Large}
        disabled
      >
        你好
      </Button>
    </div>
  );
};

export default App;
