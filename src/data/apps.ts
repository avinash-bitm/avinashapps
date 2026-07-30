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
      'High-quality audio recording',
      'Background recording supported',
      'Clean, simple interface',
      'Waveform view and bookmarks',
      'Saves to your device Music folder',
    ],
    privacyHighlights: [
      'No internet permission',
      'Recordings stay on your device',
      'No analytics or ads',
    ],
    accent: '#2dd4bf',
  },
  {
    slug: 'sound-recorder-pro',
    name: 'Sound Recorder Pro',
    shortName: 'Sound Recorder Pro',
    tagline: 'Schedules, HQ formats, optional Drive backup.',
    description:
      'Everything in the free app, plus scheduled recordings, a rolling buffer, premium audio formats, and optional Google Drive backup to your own account — only when you choose.',
    packageId: 'avinash42.soundrecorder.pro',
    playUrl:
      'https://play.google.com/store/apps/details?id=avinash42.soundrecorder.pro',
    tier: 'pro',
    features: [
      'Everything in Private Sound Recorder',
      'Scheduled recordings',
      'Save last X minutes (rolling buffer)',
      'High-quality audio and premium formats (OGG, WebM, WAV)',
      'Google Drive backup and restore (optional)',
      'Backup uploads only to your Drive — not our servers',
    ],
    privacyHighlights: [
      'No ads or analytics',
      'Drive backup only when you enable it',
      'Audio goes to your Google account',
    ],
    accent: '#38bdf8',
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
