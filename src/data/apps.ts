export type AppTier = 'free' | 'pro';

export interface App {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  packageId: string;
  playUrl: string;
  tier: AppTier;
  features: string[];
  privacyHighlights: string[];
  accent: string;
  iconLabel: string;
}

export const apps: App[] = [
  {
    slug: 'sound-recorder',
    name: 'Private Sound Recorder',
    shortName: 'Sound Recorder',
    tagline: '100% offline. No ads. No tracking.',
    description:
      'Record audio privately without internet permission. Your recordings never leave your device — no cloud upload, no tracking, no account required. Works in airplane mode.',
    packageId: 'avinash42.soundrecorder',
    playUrl:
      'https://play.google.com/store/apps/details?id=avinash42.soundrecorder',
    tier: 'free',
    features: [
      'Completely offline — zero internet permission',
      'No ads, no data collection, no sign-up',
      'Unlimited recording time (limited only by storage)',
      'High-quality audio and premium formats (OGG, WebM, WAV)',
      'Scheduled recordings',
      'Save last X minutes (rolling buffer)',
      'Background recording supported',
      'Waveform view and bookmarks',
      'Clean, simple interface',
      'Saves to your device Music folder',
    ],
    privacyHighlights: [
      'No internet permission',
      'Recordings stay on your device',
      'No analytics or ads',
    ],
    accent: '#8b1538',
    iconLabel: 'SR',
  },
  {
    slug: 'flashlight',
    name: 'Flashlight (no UI)',
    shortName: 'Flashlight',
    tagline: 'Tap the icon. Light on. Tap again. Light off.',
    description:
      'A simple lightweight flashlight with no screen. Tap the app icon to turn on your phone’s torch, and tap again to turn it off — nothing else in the way.',
    packageId: 'avinash42.touch.torch',
    playUrl:
      'https://play.google.com/store/apps/details?id=avinash42.touch.torch',
    tier: 'free',
    features: [
      'No UI — control the torch from the app icon',
      'Lightweight and fast',
      'Tap once to turn on, tap again to turn off',
      'No ads, no tracking, no account',
    ],
    privacyHighlights: [
      'No data collected',
      'No data shared with third parties',
      'No analytics or ads',
    ],
    accent: '#b45309',
    iconLabel: 'FL',
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
