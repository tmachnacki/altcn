import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  const avatarFallbackVariants = [
    "default",
    "outline",
    "base",
    "accent",
    "muted",
    "surface",
    "faded",
    "primary",
    "primary-accent",
    "primary-muted",
    "primary-surface",
    "primary-faded",
    "secondary",
    "secondary-accent",
    "secondary-muted",
    "secondary-surface",
    "secondary-faded",
  ] as const;

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://github.com/tmachnacki.png"
            alt="@tmachnacki"
          />
          <AvatarFallback>TM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>TM</AvatarFallback>
        </Avatar>
        <Avatar className="size-12">
          <AvatarImage
            src="https://github.com/tmachnacki.png"
            alt="@tmachnacki"
          />
          <AvatarFallback>TM</AvatarFallback>
        </Avatar>
        <Avatar className="rounded-lg">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarImage
              src="https://github.com/tmachnacki.png"
              alt="@tmachnacki"
            />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarImage
              src="https://github.com/tmachnacki.png"
              alt="@tmachnacki"
            />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex -space-x-2 hover:space-x-1 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale *:data-[slot=avatar]:transition-all *:data-[slot=avatar]:duration-300 *:data-[slot=avatar]:ease-in-out">
          <Avatar>
            <AvatarImage
              src="https://github.com/tmachnacki.png"
              alt="@tmachnacki"
            />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {avatarFallbackVariants.map((variant) => (
          <Avatar key={`avatar-fallback-${variant}`}>
            <AvatarFallback variant={variant}></AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
}
