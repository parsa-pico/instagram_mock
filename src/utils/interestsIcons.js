export const adventureIcon = require("../Images/Icons/interest_icon/adventure.png");
export const aquariumIcon = require("../Images/Icons/interest_icon/aquarium.png");
export const bakingIcon = require("../Images/Icons/interest_icon/baking.png");
export const baseballIcon = require("../Images/Icons/interest_icon/baseball.png");
export const basketballIcon = require("../Images/Icons/interest_icon/basketball.png");
export const beachIcon = require("../Images/Icons/interest_icon/beach.png");
export const bikeIcon = require("../Images/Icons/interest_icon/bike.png");
export const birdIcon = require("../Images/Icons/interest_icon/bird.png");
export const breadIcon = require("../Images/Icons/interest_icon/bread.png");
export const campingIcon = require("../Images/Icons/interest_icon/camping.png");
export const catIcon = require("../Images/Icons/interest_icon/cat.png");
export const cityIcon = require("../Images/Icons/interest_icon/city.png");
export const comedyIcon = require("../Images/Icons/interest_icon/comedy.png");
export const culturalIcon = require("../Images/Icons/interest_icon/cultural.png");
export const danceIcon = require("../Images/Icons/interest_icon/dance.png");
export const dogIcon = require("../Images/Icons/interest_icon/dog.png");
export const drawingIcon = require("../Images/Icons/interest_icon/drawing.png");
export const fishingIcon = require("../Images/Icons/interest_icon/fishing.png");
export const fitnessIcon = require("../Images/Icons/interest_icon/fitness.png");
export const footballIcon = require("../Images/Icons/interest_icon/football.png");
export const golfIcon = require("../Images/Icons/interest_icon/golf.png");
export const grillIcon = require("../Images/Icons/interest_icon/grill.png");
export const hikingIcon = require("../Images/Icons/interest_icon/hiking.png");
export const historyIcon = require("../Images/Icons/interest_icon/history.png");
export const horseRidingIcon = require("../Images/Icons/interest_icon/horse-riding.png");
export const italianCookingIcon = require("../Images/Icons/interest_icon/italien-cooking.png");
export const languageIcon = require("../Images/Icons/interest_icon/language.png");
export const leadershipIcon = require("../Images/Icons/interest_icon/leadership.png");
export const meditationIcon = require("../Images/Icons/interest_icon/meditation.png");
export const movieIcon = require("../Images/Icons/interest_icon/movie.png");
export const musicIcon = require("../Images/Icons/interest_icon/music.png");
export const natureIcon = require("../Images/Icons/interest_icon/nature.png");
export const nutritionIcon = require("../Images/Icons/interest_icon/nutrition.png");
export const paintIcon = require("../Images/Icons/interest_icon/paint.png");
export const photoIcon = require("../Images/Icons/interest_icon/photo.png");
export const publicSpeakingIcon = require("../Images/Icons/interest_icon/public-speaking.png");
export const readingIcon = require("../Images/Icons/interest_icon/reading.png");
export const scienceIcon = require("../Images/Icons/interest_icon/science.png");
export const sculptureIcon = require("../Images/Icons/interest_icon/sculpture.png");
export const selfImprovementIcon = require("../Images/Icons/interest_icon/self-improvement.png");
export const skiIcon = require("../Images/Icons/interest_icon/ski.png");
export const stressManagementIcon = require("../Images/Icons/interest_icon/stress-management.png");
export const sushiIcon = require("../Images/Icons/interest_icon/sushi.png");
export const taichiIcon = require("../Images/Icons/interest_icon/taichi.png");
export const tennisIcon = require("../Images/Icons/interest_icon/tennis.png");
export const theaterIcon = require("../Images/Icons/interest_icon/theater.png");
export const timeManagementIcon = require("../Images/Icons/interest_icon/time-management.png");
export const tvIcon = require("../Images/Icons/interest_icon/tv.png");
export const writingIcon = require("../Images/Icons/interest_icon/writing.png");
export const yogaIcon = require("../Images/Icons/interest_icon/yoga.png");

export const defaultIcon = require("../Images/Icons/interest_icon/interrogation-mark.png");

export function getInterestImgSource(speciality) {
  switch (speciality) {
    case "hiking":
      return hikingIcon;

    case "biking":
      return bikeIcon;

    case "camping":
      return campingIcon;

    case "fishing":
      return fishingIcon;

    case "skiing":
      return skiIcon;

    case "painting":
      return paintIcon;

    case "drawing":
      return drawingIcon;

    case "photography":
      return photoIcon;

    case "sculpture":
      return sculptureIcon;

    case "dance":
      return danceIcon;

    case "soccer":
      return footballIcon;

    case "basketball":
      return basketballIcon;

    case "tennis":
      return tennisIcon;

    case "baseball":
      return baseballIcon;

    case "golf":
      return golfIcon;

    case "reading":
      return readingIcon;

    case "writing":
      return writingIcon;

    case "history":
      return historyIcon;

    case "language":
      return languageIcon;

    case "science":
      return scienceIcon;

    case "movies":
      return movieIcon;

    case "tv shows":
      return tvIcon;

    case "music":
      return musicIcon;

    case "comedy":
      return comedyIcon;

    case "theater":
      return theaterIcon;

    case "baking":
      return bakingIcon;

    case "grilling":
      return grillIcon;

    case "sushi making":
      return sushiIcon;

    case "bread making":
      return breadIcon;

    case "italian cooking":
      return italianCookingIcon;

    case "beach vacacions":
      return beachIcon;

    case "city breaks":
      return cityIcon;

    case "nature retreats":
      return natureIcon;

    case "adventure trips":
      return adventureIcon;

    case "cultural exchange":
      return culturalIcon;

    case "yoga":
      return yogaIcon;

    case "meditation":
      return meditationIcon;

    case "tai chi":
      return taichiIcon;

    case "nutrition":
      return nutritionIcon;

    case "fitness":
      return fitnessIcon;

    case "self improvement":
      return selfImprovementIcon;

    case "public speaking":
      return publicSpeakingIcon;

    case "leadership":
      return leadershipIcon;

    case "time management":
      return timeManagementIcon;

    case "stress management":
      return stressManagementIcon;

    case "dog walking":
      return dogIcon;

    case "cat care":
      return catIcon;

    case "bird watching":
      return birdIcon;

    case "horseback riding":
      return horseRidingIcon;

    case "aquarium maintenance":
      return aquariumIcon;

    default:
      return defaultIcon;
  }
}
