export function truncateOverview(overview: string): string {
  let maxLength = 50;
  if (overview.length <= maxLength) {
    return overview;
  } else {
    return overview.slice(0, maxLength) + "...";
  }
}
