import clsx from "clsx";

type GlassProps = {
  children: React.ReactNode;
  variant?: "white" | "blue";
  className?: string;
};

export default function Glass({
  children,
  variant = "white",
  className,
}: GlassProps) {
  const base =
    "backdrop-blur-xl border rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]";

  const variants = {
    white: "bg-white/5 border-white/10",
    blue: "bg-sky-500/10 border-sky-400/20 shadow-[0_8px_32px_rgba(0,168,255,0.15)]",
  };

  return (
    <div className={clsx(base, variants[variant], className)}>{children}</div>
  );
}
