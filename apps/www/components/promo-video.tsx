"use client"

export function PromoVideo() {
  return (
    <video autoPlay muted playsInline>
      <source
        src="https://ui-shadcn.s3.amazonaws.com/ui-promo-hd.mp4"
        type="video/mp4"
      />
    </video>
  )
}
