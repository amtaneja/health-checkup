const categoryFormula = (bmi) => {
    switch (true) {
        case ((bmi <= 18.4)):
            return { bmiCategory: 'Underweight', healthRisk: 'Malnutrition risk' };
        case ((bmi >= 18.5) && (bmi <= 24.9)):
            return { bmiCategory: 'Normalweight', healthRisk: 'Malnutrition risk' };
        case ((bmi >= 25) && (bmi <= 29.9)):
            return { bmbmiCategoryi: 'Overweight', healthRisk: 'Malnutrition risk' };
        case ((bmi >= 30) && (bmi <= 34.9)):
            return { bmiCategory: 'Moderately obese', healthRisk: 'Malnutrition risk' };
        case ((bmi >= 35) && (bmi <= 39.9)):
            return { bmiCategory: 'Severel obese', healthRisk: 'Malnutrition risk' };
        case ((bmi >= 40)):
            return { bmiCategory: 'Very severely obese', healthRisk: 'Malnutrition risk' };
        default:
            return { bmiCategory: 'Match not found', healthRisk: 'Match not found' }
    }
}

const bmiFormula = (mass, height) => {
    return Number((mass / (height / 100)).toFixed(2));
}

module.exports = { categoryFormula, bmiFormula };