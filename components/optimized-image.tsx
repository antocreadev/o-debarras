"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">
          Image non disponible
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${fill ? "" : ""}`}>
      {isLoading && (
        <div
          className={`absolute inset-0 bg-muted animate-pulse ${
            fill ? "" : ""
          }`}
          style={
            !fill && width && height
              ? { width: `${width}px`, height: `${height}px` }
              : undefined
          }
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${className} ${
          objectFit === "cover"
            ? "object-cover"
            : objectFit === "contain"
            ? "object-contain"
            : ""
        } transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        sizes={sizes}
        priority={priority}
        quality={85}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        loading={priority ? undefined : "lazy"}
        decoding="async"
        style={{
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
