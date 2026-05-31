import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { ScenarioSelector } from "@/components/ScenarioSelector";
import { Accommodation } from "@/components/Accommodation";
import { AtmosphereTimeline } from "@/components/AtmosphereTimeline";
import { Wellness } from "@/components/Wellness";
import { Gastronomy } from "@/components/Gastronomy";
import { Events } from "@/components/Events";
import { TerritoryMap } from "@/components/TerritoryMap";
import { Corporate } from "@/components/Corporate";
import { Packages } from "@/components/Packages";
import { UGC } from "@/components/UGC";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sfera / Сфера — глэмпинг-резорт у реки Дубна" },
      {
        name: "description",
        content:
          "Премиальный глэмпинг-резорт в 100–150 км от Москвы. Домики, баня, гастрономия, wellness, камерные события и корпоративные выезды на 25 га природной территории.",
      },
      { property: "og:title", content: "Sfera / Сфера — сфера восстановления и осмысленных событий" },
      {
        property: "og:description",
        content:
          "Премиальный загородный отдых у реки Дубна: домики для пар и семей, баня, гастрономия, ретриты и корпоративные выезды.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Manifesto />
      <ScenarioSelector />
      <Accommodation />
      <AtmosphereTimeline />
      <Wellness />
      <Gastronomy />
      <Events />
      <TerritoryMap />
      <Corporate />
      <Packages />
      <UGC />
      <BookingForm />
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.20 0.01 60)",
            border: "1px solid oklch(0.72 0.10 80 / 0.4)",
            color: "oklch(0.97 0.01 85)",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </main>
  );
}
