import React, { createContext, useState } from "react";

import classNames from "classnames";
import { MenuItemProps } from "./menu-item";

// 排列方式
type MenuMode = "horizontal" | "vertical";
type SelectCallback = (SelectIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelected?: SelectCallback;
  children?: React.ReactNode;
  defaultOpenSubMenu?: string[];
}

interface IMenuContext {
  index: string;
  onSelected?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenu?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex = "0",
    mode = "horizontal",
    style,
    children,
    onSelected,
    defaultOpenSubMenu = [],
  } = props;

  const [currentActive, setCurrentActive] = useState(defaultIndex);

  const classes = classNames("xun-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelected) {
      onSelected(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelected: handleClick,
    mode,
    defaultOpenSubMenu,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;

      const { displayName } = childElement.type;

      if (displayName === "MenuItem" || displayName === "SubMenu")
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      else
        console.error(
          "Waring:Menu hsa a child which is not a MenuItem component"
        );
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
