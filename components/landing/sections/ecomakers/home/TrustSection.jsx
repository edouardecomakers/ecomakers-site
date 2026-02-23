export default function TrustSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Références
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ils nous font confiance
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Des acteurs majeurs de la GTB/GTC et de la transition énergétique
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-24 md:gap-40 max-sm:flex-col max-sm:gap-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/schneider-electric.png"
            alt="Schneider Electric"
            className="h-24 sm:h-32 md:h-40 w-auto object-contain"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/spie.png"
            alt="SPIE"
            className="h-24 sm:h-32 md:h-40 w-auto object-contain"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logos/carb0n.png"
            alt="Carb0n"
            className="h-24 sm:h-32 md:h-40 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
