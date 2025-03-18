import { colors } from "@/lib/colors";
import { Container } from "@/components/container";

export default function Colors() {
  return (
    <Container className="py-content">
      <h1 className="text-2xl font-bold">Colors</h1>

      <div className="mt-16 flex flex-col gap-8">
        {colors.map((color) => {
          return (
            <div className="flex flex-col gap-2" key={color.name}>
              <h2 className="text-sm font-medium">{color.name}</h2>
              <div className="grid grid-cols-11 gap-2">
                {color.swatches.map((swatch) => {
                  return (
                    <div className="flex flex-col gap-1" key={swatch.label}>
                      <div
                        className={`aspect-square overflow-hidden rounded-md border outline -outline-offset-1 outline-black/10 dark:outline-white/10 ${swatch.background}`}
                      />
                      <p className={`text-center font-mono text-sm ${color.text}`}>
                        {swatch.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
