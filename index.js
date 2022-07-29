const healthData = require('./healthData.js');
const { categoryFormula, bmiFormula } = require('./utils.js');
const bmiData = [];


const bmiCalculation = (data) => {
    data.map((personHealthData) => {
        bmiData.push({
            bmi: bmiFormula(personHealthData.WeightKg, personHealthData.HeightCm),
            ...categoryFormula(bmiFormula(personHealthData.WeightKg, personHealthData.HeightCm))
        })
    })
}

bmiCalculation(healthData);
console.log(bmiData);