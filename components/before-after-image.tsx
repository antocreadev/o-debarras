"use client";

import Image from "next/image";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export function BeforeAfterImage({
  beforeImage,
  afterImage,
  alt,
}: BeforeAfterImageProps) {
  return (
    <div className="relative h-56 w-full bg-gray-100">
      {/* Container avec grille pour les deux images */}
      <div className="absolute inset-0 flex">
        {/* Image AVANT - Côté gauche */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          }}
        >
          <Image
            src={beforeImage}
            alt={`${alt} - Avant`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Image APRÈS - Côté droit */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        >
          <Image
            src={afterImage}
            alt={`${alt} - Après`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Ligne de séparation blanche verticale */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          stroke="white"
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Labels Avant/Après */}
      <div className="absolute top-3 left-3 z-20">
        <div className="bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm">
          AVANT
        </div>
      </div>
      <div className="absolute top-3 right-3 z-20">
        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg">
          APRÈS
        </div>
      </div>
    </div>
  );
}
