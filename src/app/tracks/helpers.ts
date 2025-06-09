export const parseTime = (decimalSeconds: string, includeMilliseconds = true) => {
  const newDecimalSeconds = parseFloat(decimalSeconds);
  if (!decimalSeconds) return includeMilliseconds ? ["00", "00", "00", "000"] : ["00", "00", "00"];
  const hours = Math.floor(newDecimalSeconds / 3600);
  const minutes = Math.floor((newDecimalSeconds % 3600) / 60);
  const seconds = Math.floor(newDecimalSeconds % 60);
  const milliseconds = Math.floor(newDecimalSeconds * 1000) % 1000;
  if (includeMilliseconds) {
    return [
      // hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0")
      // milliseconds.toString().padStart(3, "0")
    ];
  } else {
    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0")
    ];
  }
};