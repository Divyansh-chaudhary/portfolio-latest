/** Career start: Oodles Technology joining date (Sep 2021). */
export const CAREER_START = new Date(2021, 8, 1);

/**
 * Years since career start, rounded to the nearest half-year bucket:
 * 4+, 4.5+, 5+, 5.5+, …
 */
export function getExperienceLabel(now: Date = new Date()): string {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.max(0, (now.getTime() - CAREER_START.getTime()) / msPerYear);
  const halfYears = Math.round(years * 2) / 2;
  const label = Number.isInteger(halfYears)
    ? String(halfYears)
    : halfYears.toFixed(1);
  return `${label}+`;
}

export function getSummary(now: Date = new Date()): string {
  return `${getExperienceLabel(now)} years building scalable web apps with React, Vue, and TypeScript. Specialist in micro-frontends and state management — shipping measurable product outcomes end-to-end.`;
}
