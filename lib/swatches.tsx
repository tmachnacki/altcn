import * as React from "react";

import { Swatch } from "~/components/swatch";

export const swatchVariants = [
  // base
  "outline",
  "base",
  "accent",
  "muted",
  "surface",
  "faded",
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
  "success-dotted",

  // warning
  "warning",
  "warning-accent",
  "warning-muted",
  "warning-surface",
  "warning-faded",
  "warning-tron",
  "warning-dotted",

  // input, tabs
  "underlined",

  // card
  // "solid",
  // "translucent"
] as const;

export type SwatchVariant = (typeof swatchVariants)[number];

export const swatches: Record<SwatchVariant, React.ReactNode> = {
  // base
  outline: <Swatch variant="outline" />,
  base: <Swatch variant="base" />,
  accent: <Swatch variant="accent" />,
  muted: <Swatch variant="muted" />,
  surface: <Swatch variant="surface" />,
  faded: <Swatch variant="faded" />,
  ghost: <Swatch variant="ghost" />,
  link: <Swatch variant="link" />,
  dotted: <Swatch variant="dotted" />,

  // primary
  primary: <Swatch variant="primary" />,
  "primary-accent": <Swatch variant="primary-accent" />,
  "primary-muted": <Swatch variant="primary-muted" />,
  "primary-surface": <Swatch variant="primary-surface" />,
  "primary-faded": <Swatch variant="primary-faded" />,
  "primary-tron": <Swatch variant="primary-tron" />,
  "primary-shadow": <Swatch variant="primary-shadow" />,
  "primary-gradient": <Swatch variant="primary-gradient" />,
  "primary-ghost": <Swatch variant="primary-ghost" />,
  "primary-dotted": <Swatch variant="primary-dotted" />,

  // secondary
  secondary: <Swatch variant="secondary" />,
  "secondary-accent": <Swatch variant="secondary-accent" />,
  "secondary-muted": <Swatch variant="secondary-muted" />,
  "secondary-surface": <Swatch variant="secondary-surface" />,
  "secondary-faded": <Swatch variant="secondary-faded" />,
  "secondary-tron": <Swatch variant="secondary-tron" />,
  "secondary-shadow": <Swatch variant="secondary-shadow" />,
  "secondary-gradient": <Swatch variant="secondary-gradient" />,
  "secondary-ghost": <Swatch variant="secondary-ghost" />,
  "secondary-dotted": <Swatch variant="secondary-dotted" />,

  // destructive
  destructive: <Swatch variant="destructive" />,
  "destructive-accent": <Swatch variant="destructive-accent" />,
  "destructive-muted": <Swatch variant="destructive-muted" />,
  "destructive-surface": <Swatch variant="destructive-surface" />,
  "destructive-faded": <Swatch variant="destructive-faded" />,
  "destructive-tron": <Swatch variant="destructive-tron" />,
  "destructive-shadow": <Swatch variant="destructive-shadow" />,
  "destructive-gradient": <Swatch variant="destructive-gradient" />,
  "destructive-ghost": <Swatch variant="destructive-ghost" />,
  "destructive-dotted": <Swatch variant="destructive-dotted" />,

  // success
  success: <Swatch variant="success" />,
  "success-accent": <Swatch variant="success-accent" />,
  "success-muted": <Swatch variant="success-muted" />,
  "success-surface": <Swatch variant="success-surface" />,
  "success-faded": <Swatch variant="success-faded" />,
  "success-tron": <Swatch variant="success-tron" />,
  "success-dotted": <Swatch variant="success-dotted" />,

  // warning
  warning: <Swatch variant="warning" />,
  "warning-accent": <Swatch variant="warning-accent" />,
  "warning-muted": <Swatch variant="warning-muted" />,
  "warning-surface": <Swatch variant="warning-surface" />,
  "warning-faded": <Swatch variant="warning-faded" />,
  "warning-tron": <Swatch variant="warning-tron" />,
  "warning-dotted": <Swatch variant="warning-dotted" />,

  // input, tabs
  underlined: <Swatch variant="underlined" />,
} as const;
