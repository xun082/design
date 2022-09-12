import React, { useState } from "react";

import Button from "./components/Button";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/menu-item";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon";
import Transition from "./components/Transition";
import Upload from "./components/Upload";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  // const [state, setState] = useState<string>("");

  // useEffect(() => {
  //   axios
  //     .get("https://run.mocky.io/v3/6871f2c4-f446-4e55-9f37-21fa01952e4c")
  //     .then((res) => {
  //       console.log(res.data);
  //       setState(res.data.test);
  //     });
  // });
  return (
    <div>
      {/* 文件 */}
      <Upload
        action="https://jsonplaceholder.typicode.com/posts"
        name="xun"
        data={{ key: "value" }}
        headers={{ "xxxxxxx-by": "xun" }}
        accept=".jpg"
        multiple
      />
      <br />
      <br />
      <br />
      {/* 动画 */}
      <div>
        <Button
          size="lg"
          onClick={() => {
            setShow(!show);
          }}
          btnType="primary"
        >
          点击动画
        </Button>
      </div>

      <Transition in={show} timeout={300} animation="zoom-in-left">
        <div>
          <div>
            <code>
              您还可以在组件中添加包装 DOM 节点并直接将 ref 附加到它。
            </code>
          </div>
          <div>
            <code>
              您还可以在组件中添加包装 DOM 节点并直接将 ref 附加到它。
            </code>
          </div>
          <div>
            <code>
              您还可以在组件中添加包装 DOM 节点并直接将 ref 附加到它。
            </code>
          </div>
          <div>
            <code>
              您还可以在组件中添加包装 DOM 节点并直接将 ref 附加到它。
            </code>
          </div>
        </div>
      </Transition>

      <Transition in={show} timeout={300} animation="zoom-in-left">
        <Button btnType="primary" size="lg">
          动画按钮
        </Button>
      </Transition>

      {/* 图标 */}
      <Icon icon="arrow-down" theme="danger" size="10x" />
      <Icon icon="arrow-down" theme="primary" size="10x" />
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
          <MenuItem>supper moment</MenuItem>
          <MenuItem>supper moment</MenuItem>
          <MenuItem>supper moment</MenuItem>
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
          <MenuItem>supper moment</MenuItem>
          <MenuItem>supper moment</MenuItem>
          <MenuItem>supper moment</MenuItem>
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
      <Button className="test" btnType="default" disabled>
        你好
      </Button>
      <Button autoFocus>自动获取焦点</Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        btnType="primary"
      >
        点击事件
      </Button>
      <Button className="test" btnType="default">
        你好
      </Button>
      <Button btnType="primary" size="lg">
        你好
      </Button>
      <Button btnType="danger" size="sm">
        你好
      </Button>
      <Button
        btnType="link"
        href="https://www.baidu.com"
        target="_black"
        size="lg"
      >
        你好
      </Button>
      <Button btnType="link" href="sajdajshdash" size="lg" disabled>
        你好
      </Button>
    </div>
  );
};

export default App;
