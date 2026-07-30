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
  },
  {
    slug: 'sound-recorder-pro',
    name: 'Sound Recorder Pro',
    shortName: 'Sound Recorder Pro',
    tagline: 'Same as free — plus optional Google Drive backup.',
    description:
      'All features from Private Sound Recorder, with one addition: optional Google Drive backup and restore to your own account. Everything else — schedules, rolling buffer, HQ formats — is already in the free app.',
    packageId: 'avinash42.soundrecorder.pro',
    playUrl:
      'https://play.google.com/store/apps/details?id=avinash42.soundrecorder.pro',
    tier: 'pro',
    features: [
      'Everything in Private Sound Recorder',
      'Optional Google Drive backup and restore — the only Pro difference',
      'Backup uploads only to your Drive — not our servers',
      'Sign in only when you choose to back up',
    ],
    privacyHighlights: [
      'No ads or analytics',
      'Drive backup only when you enable it',
      'Audio goes to your Google account',
    ],
    accent: '#be123c',
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
