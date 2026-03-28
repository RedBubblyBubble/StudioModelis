import { cn } from "@/lib/utils";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function Heading({
  eyebrow,
  title,
  description,
  align = "left",
}: HeadingProps) {
  return (
    <header className={cn("space-y-4", align === "center" && "text-center")}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-title text-3xl font-semibold leading-tight tracking-tight text-fg md:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-light md:text-base",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
