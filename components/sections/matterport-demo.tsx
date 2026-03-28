import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function MatterportDemo() {
  return (
    <section className="pb-4">
      <Container>
        <MotionReveal>
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.7)]">
            {/* Barre de titre */}
            <div className="flex items-center justify-between border-b border-border/50 bg-surface/60 px-5 py-3 backdrop-blur-sm">
              <div className="space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Démonstration live
                </p>
                <p className="text-sm font-medium text-fg">
                  Explorez un chantier réel — naviguez, zoomez, mesurez
                </p>
              </div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-accent/60" />
              </div>
            </div>

            {/* Iframe Matterport */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://my.matterport.com/show/?m=hs2taVhRcDE"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
                title="Scan 3D Matterport — démonstration chantier Studio Modelis"
              />
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
