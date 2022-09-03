import React from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button/index";

const App: React.FC = () => {
  return (
    <div>
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
