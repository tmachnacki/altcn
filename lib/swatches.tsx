export const swatchVariants = [
  // base
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
  "base-gradient",
  "ghost",
  "link",
  "dotted",

  // primary
  "primary",
  "primary-accent",
  "primary-muted",
  "primary-surface",
  "primary-faded",
  "primary-tron",
  "primary-shadow",
  "primary-gradient",
  "primary-ghost",
  "primary-dotted",

  // secondary
  "secondary",
  "secondary-accent",
  "secondary-muted",
  "secondary-surface",
  "secondary-faded",
  "secondary-tron",
  "secondary-shadow",
  "secondary-gradient",
  "secondary-ghost",
  "secondary-dotted",

  // destructive
  "destructive",
  "destructive-accent",
  "destructive-muted",
  "destructive-surface",
  "destructive-faded",
  "destructive-tron",
  "destructive-shadow",
  "destructive-gradient",
  "destructive-ghost",
  "destructive-dotted",

  // success
  "success",
  "success-accent",
  "success-muted",
  "success-surface",
  "success-faded",
  "success-tron",
  "success-shadow",
  "success-gradient",
  "success-dotted",
  "success-ghost",

  // warning
  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
  "warning-tron",
  "warning-shadow",
  "warning-gradient",
  "warning-dotted",
  "warning-ghost",

  // input, tabs
  "underlined",

  // card
  // "solid",
  // "translucent"
] as const;

export type SwatchVariant = (typeof swatchVariants)[number];
