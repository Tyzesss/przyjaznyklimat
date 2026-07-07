import { Snowflake } from "lucide-react";
import { LOGO_URL, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  showName?: boolean;
};

export function SiteLogo({ className, imageClassName, showName = true }: SiteLogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      {LOGO_URL ? (
        <img
          src={LOGO_URL}
          alt={SITE_NAME}
          className={cn(
            "h-11 w-auto max-w-[min(100%,17rem)] object-contain object-left sm:h-12 sm:max-w-[min(100%,19rem)] md:h-14",
            imageClassName,
          )}
          width={250}
          height={59}
          decoding="async"
        />
      ) : (
        <>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glow">
            <Snowflake className="h-5 w-5" />
          </div>
          {showName && <span className="font-bold tracking-tight text-foreground">{SITE_NAME}</span>}
        </>
      )}
    </span>
  );
}
