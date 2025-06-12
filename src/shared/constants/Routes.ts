export enum Routes {
  HOME = "/",
  TRACKS = "/tracks",
  POEMS = "/poems",
  WEBSITE = "/website",
  NOT_FOUND = "/404",
  PRIVACY_POLICY = "/privacy-policy",
}

export const RoutesTranslation: Record<Routes, string> = {
  [Routes.HOME]: "HOME",
  [Routes.TRACKS]: "TRACKS",
  [Routes.POEMS]: "POEMS",
  [Routes.WEBSITE]: "WEBSITE",
  [Routes.NOT_FOUND]: "404",
  [Routes.PRIVACY_POLICY]: "privacy-policy"
};