"use client";

export default function CDDivider() {
  return (
    <div className="bg-black relative pointer-events-none select-none">
      {/* Static base — full composition stays still */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cd.png"
        alt=""
        aria-hidden
        className="w-full block opacity-90"
      />

      {/*
        Spinning vinyl overlay:
        - A circle div sized and positioned exactly over the vinyl disk in the image
        - background-image shows the same cd.png, scaled/offset so the disk aligns
        - The circle spins around its own centre — like a real turntable platter
        - Nothing outside the circle moves

        Tuning guide (if disc looks off):
          left / top  → shift the circle to match the disc centre
          width       → grow/shrink the circle to match the disc diameter
          backgroundSize → must stay at (100% / width_fraction) to match the base image scale
          backgroundPosition → shifts which part of the image shows inside the circle
      */}
      <div
        className="absolute rounded-full animate-spin-slow"
        style={{
          /* disc centre ≈ 33 % from left, 50 % from top in the 1920×1080 image */
          left: "7%",         /* centre_x − radius = 33% − 26% */
          top: "3.8%",        /* centre_y − radius(as % of height) = 50% − 46.2% */
          width: "52%",       /* diameter = 2 × 26% of image width */
          aspectRatio: "1/1",
          backgroundImage: "url('/cd.png')",
          backgroundSize: "192% auto",   /* 100% ÷ 0.52 = image fills at same scale as base <img> */
          backgroundPosition: "14.6% 50%",
        }}
      />
    </div>
  );
}
