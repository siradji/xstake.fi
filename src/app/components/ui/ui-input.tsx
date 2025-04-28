import React from "react";
import clsx from "clsx";

type InputVariants = "text" | "textarea" | "select";

interface BaseProps {
  id: string;
  name: string;
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
}

type TextInputProps = BaseProps & {
  variant?: "text";
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextareaProps = BaseProps & {
  variant: "textarea";
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type SelectProps = BaseProps & {
  variant: "select";
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type InputProps = TextInputProps | TextareaProps | SelectProps;

export const Input: React.FC<InputProps> = (props) => {
  const {
    id,
    name,
    label,
    helperText,
    error,
    className,
    disabled = false,
  } = props;

  const baseClass =
    "w-full px-4 py-2 rounded-lg outline-none transition-all";
  const errorClass = error ? "border-red-500 focus:ring-red-200" : "";
  const disabledClass = disabled ? "bg-gray-100 cursor-not-allowed" : "";

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm text-left font-medium mb-1 text-gray-700">
          {label}
        </label>
      )}

      {props.variant === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={props.rows || 4}
          placeholder={props.placeholder}
          disabled={disabled}
          value={props.value}
          onChange={props.onChange}
          className={clsx(baseClass, errorClass, disabledClass)}
        />
      ) : props.variant === "select" ? (
        <select
          id={id}
          name={name}
          disabled={disabled}
          value={props.value}
          onChange={props.onChange}
          className={clsx(baseClass, errorClass, disabledClass)}
        >
          <option value="" disabled>Select an option</option>
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={props.type || "text"}
          placeholder={props.placeholder}
          disabled={disabled}
          value={props.value}
          onChange={props.onChange}
          className={clsx(baseClass, errorClass, disabledClass)}
        />
      )}

      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};
