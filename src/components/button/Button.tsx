import { type ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "success" | "danger" | "warning";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant, className , ...rest }: TButton) {
  return (
    <button
      {...rest}
      className={`
    p-2 rounded cursor-pointer px-2.5
    ${checkVariant(variant)}
    ${className || ""}
  `}
    >
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: TVariant) {
  if (variant === "primary") {
    return "bg-blue-500 text-white";
  }

  if (variant === "secondary") {
    return "bg-gray-300 text-black";
  }

  if (variant === "success") {
    return "bg-green-500 text-white";
  }

  if (variant === "danger") {
    return "bg-red-500 text-white";
  }

  if (variant === "warning") {
    return "bg-yellow-400 text-black";
  }

  return "bg-blue-500 text-white";
}
