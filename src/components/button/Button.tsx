import { type ComponentProps } from "react";

type TVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: TButton) {
  return (
    <button
      {...rest}
      className={`
        cursor-pointer rounded px-2.5 py-2
        transition-colors duration-200
        ${checkVariant(variant)}
        ${className || ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant: TVariant) {
  if (variant === "primary") {
    return "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600";
  }

  if (variant === "secondary") {
    return "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";
  }

  if (variant === "success") {
    return "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600";
  }

  if (variant === "danger") {
    return "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600";
  }

  if (variant === "warning") {
    return "bg-yellow-400 text-gray-900 hover:bg-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-300";
  }

  return "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600";
}