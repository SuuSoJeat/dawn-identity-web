type InputProps = {};

export default function Input({
  name,
  type,
  placeholder,
  required,
  className,
  ...props
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className={
        `block w-full rounded-md border-2 border-transparent caret-crimson placeholder:text-slate-500 focus:border-crimson focus:outline-none focus:ring-0 focus-visible:outline-none dark:bg-midnight ` +
        className
      }
      {...props}
    />
  );
}
