import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string; // ← optional, not required
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        `
        px-6 py-3 rounded-xl font-semibold text-white
        bg-gradient-to-br from-primary to-primary-light
        border border-white/20
        shadow-glow shadow-inset
        transition-all duration-300
        hover:brightness-110 hover:shadow-[0_12px_40px_rgba(0,168,255,0.45)]
        active:scale-95
        `,
        className
      )}
    >
      {children}
    </button>
  );
}
