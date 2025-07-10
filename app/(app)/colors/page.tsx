import { colors } from "~/lib/colors";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

const classNames = "h-9 w-20 font-medium";

export default function Colors() {
  return (
    <main className="container py-content">
      <h1 className="text-2xl font-bold">Colors</h1>

      <div className="mt-16 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant={"muted"} className={classNames}>
            Text
          </Button>
          <Button variant={"faded"} className={classNames}>
            Text
          </Button>
          <Button variant={"faded"} className={`${classNames} border-none`}>
            Text
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"primary-muted"} className={classNames}>
            Text
          </Button>
          <Button variant={"primary-faded"} className={classNames}>
            Text
          </Button>
          <Button
            variant={"primary-faded"}
            className={`${classNames} border-none`}
          >
            Text
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"secondary-muted"} className={classNames}>
            Text
          </Button>
          <Button variant={"secondary-faded"} className={classNames}>
            Text
          </Button>
          <Button
            variant={"secondary-faded"}
            className={`${classNames} border-none`}
          >
            Text
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"destructive-muted"} className={classNames}>
            Text
          </Button>
          <Button variant={"destructive-faded"} className={classNames}>
            Text
          </Button>
          <Button
            variant={"destructive-faded"}
            className={`${classNames} border-none`}
          >
            Text
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"success-muted"} className={classNames}>
            Text
          </Button>
          <Button variant={"success-faded"} className={classNames}>
            Text
          </Button>
          <Button
            variant={"success-faded"}
            className={`${classNames} border-none`}
          >
            Text
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"warning-muted"} className={classNames}>
            Text
          </Button>
          <Button variant={"warning-faded"} className={classNames}>
            Text
          </Button>
          <Button
            variant={"warning-faded"}
            className={`${classNames} border-none`}
          >
            Text
          </Button>
        </div>
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
