import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-col gap-8">
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
        <Avatar>
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarFallback variant="primary"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="primary-accent"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="primary-muted"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="primary-surface"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="primary-faded"></AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarFallback variant="secondary"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="secondary-accent"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="secondary-muted"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="secondary-surface"></AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback variant="secondary-faded"></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
