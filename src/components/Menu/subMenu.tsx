import React, { useContext, useState, FunctionComponentElement } from "react";

import classNames from "classnames";
import { MenuContext } from ".";
import { MenuItemProps } from "./menu-item";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props;
  const context = useContext(MenuContext);

  const openedSubMenus = context.defaultOpenSubMenu as Array<string>;
  const isOpen =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;

  const [menuOpen, setMenuOpen] = useState(isOpen);

  // 鼠标点击
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  //鼠标移动
  let timer: any = null;

  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};

  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });

  const renderChildren = () => {
    const subMenuClass = classNames("viking-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          "Waring:Menu hsa a child which is not a MenuItem component",
          "submenu"
        );
      }
    });
    return <ul className={subMenuClass}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
