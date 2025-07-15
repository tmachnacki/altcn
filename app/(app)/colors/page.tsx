import { colors } from "~/lib/colors";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function Colors() {
  return (
    <main className="container py-content">
      <h1 className="text-2xl font-bold">Colors</h1>

      <div className="mt-16 grid w-full max-w-xs grid-cols-3 gap-x-2 gap-y-4">
        {/* base */}
        <Button
          variant={"accent"}
          className="bg-base-200/70 dark:bg-base-800/70"
        >
          Accent
        </Button>
        <Button variant={"surface"} className="bg-base-50 dark:bg-faded">
          Surface
        </Button>
        <Button
          variant={"surface"}
          className={`border-none bg-base-50 dark:bg-faded`}
        >
          Surface
        </Button>
        <Button variant={"accent"}>Accent</Button>
        <Button variant={"surface"}>Surface</Button>
        <Button variant={"surface"} className="border-none">
          Surface
        </Button>
        <Button
          variant={"muted"}
          className="bg-base-200/70 dark:bg-base-800/70"
        >
          Muted
        </Button>
        <Button variant={"faded"} className="bg-base-50 dark:bg-faded">
          Faded
        </Button>
        <Button
          variant={"faded"}
          className={`border-none bg-base-50 dark:bg-faded`}
        >
          Faded
        </Button>
        <Button variant={"muted"}>Muted</Button>
        <Button variant={"faded"}>Faded</Button>
        <Button variant={"faded"} className="border-none">
          Faded
        </Button>

        {/* primary */}
        <Button
          variant={"primary-accent"}
          className="bg-primary-100 dark:bg-primary-950"
        >
          Accent
        </Button>
        <Button
          variant={"primary-surface"}
          className="bg-primary-50 dark:bg-primary-950/50"
        >
          Surface
        </Button>
        <Button
          variant={"primary-surface"}
          className="border-none bg-primary-50 dark:bg-primary-950/50"
        >
          Surface
        </Button>
        <Button variant={"primary-accent"}>Accent</Button>
        <Button variant={"primary-surface"}>Surface</Button>
        <Button variant={"primary-surface"} className="border-none">
          Surface
        </Button>
        <Button
          variant={"primary-muted"}
          className="bg-primary-100 dark:bg-primary-950"
        >
          Muted
        </Button>
        <Button
          variant={"primary-faded"}
          className="bg-primary-50 dark:bg-primary-950/50"
        >
          Faded
        </Button>
        <Button
          variant={"primary-faded"}
          className="border-none bg-primary-50 dark:bg-primary-950/50"
        >
          Faded
        </Button>
        <Button variant={"primary-muted"}>Muted</Button>
        <Button variant={"primary-faded"}>Faded</Button>
        <Button variant={"primary-faded"} className="border-none">
          Faded
        </Button>

        {/* secondary */}
        <Button
          variant={"secondary-accent"}
          className="bg-secondary-100 dark:bg-secondary-950"
        >
          Accent
        </Button>
        <Button
          variant={"secondary-surface"}
          className="bg-secondary-50 dark:bg-secondary-950/50"
        >
          Surface
        </Button>
        <Button
          variant={"secondary-surface"}
          className={`border-none bg-secondary-50 dark:bg-secondary-950/50`}
        >
          Surface
        </Button>
        <Button variant={"secondary-accent"}>Accent</Button>
        <Button variant={"secondary-surface"}>Surface</Button>
        <Button variant={"secondary-surface"} className="border-none">
          Surface
        </Button>
        <Button
          variant={"secondary-muted"}
          className="bg-secondary-100 dark:bg-secondary-950"
        >
          Muted
        </Button>
        <Button
          variant={"secondary-faded"}
          className="bg-secondary-50 dark:bg-secondary-950/50"
        >
          Faded
        </Button>
        <Button
          variant={"secondary-faded"}
          className={`border-none bg-secondary-50 dark:bg-secondary-950/50`}
        >
          Faded
        </Button>
        <Button variant={"secondary-muted"}>Muted</Button>
        <Button variant={"secondary-faded"}>Faded</Button>
        <Button variant={"secondary-faded"} className="border-none">
          Faded
        </Button>

        {/* destructive */}
        <Button
          variant={"destructive-accent"}
          className="bg-destructive-100 dark:bg-destructive-950"
        >
          Accent
        </Button>
        <Button
          variant={"destructive-surface"}
          className="bg-destructive-50 dark:bg-destructive-950/50"
        >
          Surface
        </Button>
        <Button
          variant={"destructive-surface"}
          className="border-none bg-destructive-50 dark:bg-destructive-950/50"
        >
          Surface
        </Button>
        <Button variant={"destructive-accent"}>Accent</Button>
        <Button variant={"destructive-surface"}>Surface</Button>
        <Button variant={"destructive-surface"} className="border-none">
          Surface
        </Button>
        <Button
          variant={"destructive-muted"}
          className="bg-destructive-100 dark:bg-destructive-950"
        >
          Muted
        </Button>
        <Button
          variant={"destructive-faded"}
          className="bg-destructive-50 dark:bg-destructive-950/50"
        >
          Faded
        </Button>
        <Button
          variant={"destructive-faded"}
          className="border-none bg-destructive-50 dark:bg-destructive-950/50"
        >
          Faded
        </Button>
        <Button variant={"destructive-muted"}>Muted</Button>
        <Button variant={"destructive-faded"}>Faded</Button>
        <Button variant={"destructive-faded"} className="border-none">
          Faded
        </Button>

        {/* success */}
        <Button
          variant={"success-accent"}
          className="bg-success-100 dark:bg-success-950"
        >
          Accent
        </Button>
        <Button
          variant={"success-surface"}
          className="bg-success-50 dark:bg-success-950/50"
        >
          Surface
        </Button>
        <Button
          variant={"success-surface"}
          className="border-none bg-success-50 dark:bg-success-950/50"
        >
          Surface
        </Button>
        <Button variant={"success-accent"}>Accent</Button>
        <Button variant={"success-surface"}>Surface</Button>
        <Button variant={"success-surface"} className="border-none">
          Text
        </Button>
        <Button
          variant={"success-muted"}
          className="bg-success-100 dark:bg-success-950"
        >
          Muted
        </Button>
        <Button
          variant={"success-faded"}
          className="bg-success-50 dark:bg-success-950/50"
        >
          Faded
        </Button>
        <Button
          variant={"success-faded"}
          className="border-none bg-success-50 dark:bg-success-950/50"
        >
          Faded
        </Button>
        <Button variant={"success-muted"}>Muted</Button>
        <Button variant={"success-faded"}>Faded</Button>
        <Button variant={"success-faded"} className="border-none">
          Faded
        </Button>

        {/* warning */}
        <Button
          variant={"warning-accent"}
          className="bg-warning-100 dark:bg-warning-950"
        >
          Accent
        </Button>
        <Button
          variant={"warning-surface"}
          className="bg-warning-50 dark:bg-warning-950/50"
        >
          Surface
        </Button>
        <Button
          variant={"warning-surface"}
          className="border-none bg-warning-50 dark:bg-warning-950/50"
        >
          Surface
        </Button>
        <Button variant={"warning-accent"}>Accent</Button>
        <Button variant={"warning-surface"}>Surface</Button>
        <Button variant={"warning-surface"} className="border-none">
          Surface
        </Button>
        <Button
          variant={"warning-muted"}
          className="bg-warning-100 dark:bg-warning-950"
        >
          Muted
        </Button>
        <Button
          variant={"warning-faded"}
          className="bg-warning-50 dark:bg-warning-950/50"
        >
          Faded
        </Button>
        <Button
          variant={"warning-faded"}
          className="border-none bg-warning-50 dark:bg-warning-950/50"
        >
          Faded
        </Button>
        <Button variant={"warning-muted"}>Muted</Button>
        <Button variant={"warning-faded"}>Faded</Button>
        <Button variant={"warning-faded"} className="border-none">
          Faded
        </Button>

        <Button variant={"outline"}>Outline</Button>
        <Button
          variant={"outline"}
          className="border-base-200 hover:border-base-300 dark:border-base-800 dark:hover:border-base-700"
        >
          Outline
        </Button>
      </div>

      <div className="mt-16 grid grid-cols-5 w-full max-w-xs gap-x-2 gap-y-4 *:h-32 *:rounded-md">
        <div className="bg-chart-base-1"></div>
        <div className="bg-chart-base-2"></div>
        <div className="bg-chart-base-3"></div>
        <div className="bg-chart-base-4"></div>
        <div className="bg-chart-base-5"></div>

        <div className="bg-chart-primary-1"></div>
        <div className="bg-chart-primary-2"></div>
        <div className="bg-chart-primary-3"></div>
        <div className="bg-chart-primary-4"></div>
        <div className="bg-chart-primary-5"></div>

        <div className="bg-chart-secondary-1"></div>
        <div className="bg-chart-secondary-2"></div>
        <div className="bg-chart-secondary-3"></div>
        <div className="bg-chart-secondary-4"></div>
        <div className="bg-chart-secondary-5"></div>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        {colors.map((color) => (
          <div className="flex flex-col gap-2" key={color.name}>
            <h2 className="text-sm font-medium">{color.name}</h2>
            <div className="grid grid-cols-11 gap-2">
              {color.swatches.map((swatch) => (
                <div className="flex flex-col gap-1" key={swatch.label}>
                  <div
                    className={`aspect-square overflow-hidden rounded-md border outline -outline-offset-1 outline-black/10 dark:outline-white/10 ${swatch.background}`}
                  />
                  <p
                    className={`text-center font-mono text-xs sm:text-sm ${color.text}`}
                  >
                    {/* <span className="hidden lg:block">{swatch.label}</span> */}
                    <span className="block">
                      {swatch.label.split("-").pop()}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Card className="max-w-xl">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2 text-accent-foreground">
              <h2 className="text-sm font-medium">Accent Foreground</h2>
              <p className="w-full text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                aliquam odio molestiae totam quibusdam delectus, vero incidunt.
                Facere vero neque sit ut cupiditate, dolorum asperiores! A iusto
                tenetur tempore obcaecati? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquam rem illo voluptatibus
                delectus id explicabo, maxime porro, qui quia unde ex! Inventore
                modi fugit accusantium aut quisquam ducimus et eum!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-xl">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2 text-subtle-foreground hover:text-accent-foreground">
              <h2 className="text-sm font-medium">Subtle Foreground</h2>
              <p className="w-full text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                aliquam odio molestiae totam quibusdam delectus, vero incidunt.
                Facere vero neque sit ut cupiditate, dolorum asperiores! A iusto
                tenetur tempore obcaecati? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquam rem illo voluptatibus
                delectus id explicabo, maxime porro, qui quia unde ex! Inventore
                modi fugit accusantium aut quisquam ducimus et eum!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-xl">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2 text-muted-foreground hover:text-accent-foreground">
              <h2 className="text-sm font-medium">Muted Foreground</h2>
              <p className="w-full text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                aliquam odio molestiae totam quibusdam delectus, vero incidunt.
                Facere vero neque sit ut cupiditate, dolorum asperiores! A iusto
                tenetur tempore obcaecati? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquam rem illo voluptatibus
                delectus id explicabo, maxime porro, qui quia unde ex! Inventore
                modi fugit accusantium aut quisquam ducimus et eum!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
