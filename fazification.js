// Фазификация + получение значений истинности для следующего этапа (агрегирования)

const classifyQuality = (value) => {
  if (value >= 1 && value <= 4) {
    const low = value === 4 ? 0.5 : (4 - value) / 3;
    const medium = value === 4 ? 0.5 : Math.max(0, (value - 1) / 3);
    return {
      Low: Math.max(low, medium),
      Medium: Math.min(low, medium),
      High: 0,
    };
  } else if (value >= 4 && value <= 7) {
    return {
      Low: 0,
      Medium: Math.max(0, Math.min((7 - value) / 3, (value - 4) / 3)),
      High: Math.max(0, (value - 4) / 3),
    };
  } else if (value >= 7 && value <= 10) {
    return {
      Low: 0,
      Medium: 0,
      High: Math.max(0, (value - 7) / 3),
    };
  } else {
    return "недопустимое значение";
  }
};

console.log(classifyQuality(2));

const classifyReviews = (value) => {
  if (value >= 1 && value <= 4) {
    const low = value === 4 ? 0.5 : (4 - value) / 3;
    const medium = value === 4 ? 0.5 : Math.max(0, (value - 1) / 3);
    return {
      Low: Math.max(low, medium),
      Medium: Math.min(low, medium),
      High: 0,
    };
  } else if (value >= 4 && value <= 7) {
    return {
      Low: 0,
      Medium: Math.max(0, Math.min((7 - value) / 3, (value - 4) / 3)),
      High: Math.max(0, (value - 4) / 3),
    };
  } else if (value >= 7 && value <= 10) {
    return {
      Low: 0,
      Medium: 0,
      High: Math.max(0, (value - 7) / 3),
    };
  } else {
    return "недопустимое значение";
  }
};

const classifyDelivery = (value) => {
  if (value >= 1 && value <= 4) {
    const low = value === 4 ? 0.5 : (4 - value) / 3;
    const medium = value === 4 ? 0.5 : Math.max(0, (value - 1) / 3);
    return {
      Low: Math.max(low, medium),
      Medium: Math.min(low, medium),
      High: 0,
    };
  } else if (value >= 4 && value <= 7) {
    return {
      Low: 0,
      Medium: Math.max(0, Math.min((7 - value) / 3, (value - 4) / 3)),
      High: Math.max(0, (value - 4) / 3),
    };
  } else if (value >= 7 && value <= 10) {
    return {
      Low: 0,
      Medium: 0,
      High: Math.max(0, (value - 7) / 3),
    };
  } else {
    return "недопустимое значение";
  }
};

module.exports = {
  classifyQuality,
  classifyReviews,
  classifyDelivery,
};
