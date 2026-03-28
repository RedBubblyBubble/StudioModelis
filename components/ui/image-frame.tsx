import Image from "next/image";

import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ImageFrame({ src, alt, className, priority = false }: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border shadow-[0_24px_50px_-34px_rgba(0,0,0,0.85)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}
