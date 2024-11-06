import { type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  to: string;
  textOnly?: boolean;
  children: React.ReactNode;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  to?: never;
  textOnly?: boolean;
  children: React.ReactNode;
};

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  let buttonClasses = props.textOnly ? "button button--text-only" : "button";

  if (isLinkProps(props)) {
    return (
      <Link className={buttonClasses} {...props}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
}
