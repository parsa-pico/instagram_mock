export default function interestsLevel(level) {
  level = level.toLowerCase();
  switch (level) {
    case "beginner":
      return 25;
    case "intermidate":
      return 50;
    case "pro":
      return 75;
    case "god":
      return 100;
  }
}
