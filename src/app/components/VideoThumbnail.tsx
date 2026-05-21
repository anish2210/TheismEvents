'use client';

import Image from 'next/image';
import { useState } from 'react';

const QUALITIES = ['maxresdefault', 'hqdefault', 'sddefault', 'mqdefault', 'default'];

export default function VideoThumbnail({
  id,
  title,
  priority,
}: {
  id: string;
  title: string;
  priority?: boolean;
}) {
  const [qi, setQi] = useState(0);

  return (
    <Image
      key={qi}
      src={`https://i.ytimg.com/vi/${id}/${QUALITIES[qi]}.jpg`}
      alt={title}
      fill
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setQi((q) => Math.min(q + 1, QUALITIES.length - 1))}
    />
  );
}
