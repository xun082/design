import React from "react";

import classNames from "classnames";

export type ButtonSize = "lg" | "sm";

export type ButtonType = "primary" | "default" | "danger" | "link";

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

// 可选类型 按钮(click)或者链接(target)
export type BUttonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<BUttonProps> = (props) => {
  const {
    disabled = false,
    size,
    className,
    btnType = "default",
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  return (
    <>
      {btnType === "link" && href ? (
        <a href={href} className={classes} {...restProps}>
          {children}
        </a>
      ) : (
        <button className={classes} disabled={disabled} {...restProps}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
