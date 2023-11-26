const radius = 5;
const PI = 3.1415;
const totalArea = PI * radius * radius;

console.log(`Total Area ${totalArea}`);

let spaceForSinglePlant = .8;
let initialNumberOfPlants = 20;
let spaceForInitialPlants = (spaceForSinglePlant * initialNumberOfPlants);
const initialUtilization = (spaceForInitialPlants / totalArea) * 100;
let weeklyMultiplier = 2;

console.log(`initialNumberOfPlants ${initialNumberOfPlants} spaceForInitialPlants ${spaceForInitialPlants} initialUtilization ${initialUtilization} `);

const afterWeek1NumberOfPlants = weeklyMultiplier * initialNumberOfPlants;
const afterWeek2NumberOfPlants = weeklyMultiplier * afterWeek1NumberOfPlants;
const afterWeek3NumberOfPlants = weeklyMultiplier * afterWeek2NumberOfPlants;

const afterWeek1SpaceRequired = spaceForSinglePlant * afterWeek1NumberOfPlants;
const afterWeek2SpaceRequired = spaceForSinglePlant * afterWeek2NumberOfPlants;
const afterWeek3SpaceRequired = spaceForSinglePlant * afterWeek3NumberOfPlants;

const afterWeek1Percent = (afterWeek1SpaceRequired / totalArea) * 100;
const afterWeek2Percent = (afterWeek2SpaceRequired / totalArea) * 100;
const afterWeek3Percent = (afterWeek3SpaceRequired / totalArea) * 100;

console.log(`After Week1 afterWeek1NumberOfPlants ${afterWeek1NumberOfPlants} afterWeek1SpaceRequired ${afterWeek1SpaceRequired} afterWeek1Percent ${afterWeek1Percent}`);
if (afterWeek1Percent > 80) {
    console.log(`After Week1 Utilization ${afterWeek1Percent} so time to Prune`);
} else if (afterWeek1Percent >= 50 && afterWeek1Percent < 80) {
    console.log(`After Week1 Utilization ${afterWeek1Percent} so time to Moderate`);
} else {
    console.log(`After Week1 Utilization ${afterWeek1Percent} so time to Plant more`);
}

console.log(`After Week2 afterWeek2NumberOfPlants ${afterWeek2NumberOfPlants} afterWeek2SpaceRequired ${afterWeek2SpaceRequired} afterWeek2Percent ${afterWeek2Percent}`);
if (afterWeek2Percent > 80) {
    console.log(`After Week2 Utilization ${afterWeek2Percent} so time to Prune`);
} else if (afterWeek2Percent >= 50 && afterWeek2Percent < 80) {
    console.log(`After Week2 Utilization ${afterWeek2Percent} so time to Moderate`);
} else {
    console.log(`After Week2 Utilization ${afterWeek2Percent} so time to Plant more`);
}


console.log(`After Week3 afterWeek3NumberOfPlants ${afterWeek3NumberOfPlants} afterWeek3SpaceRequired ${afterWeek3SpaceRequired} afterWeek3Percent ${afterWeek3Percent}`);
if (afterWeek3Percent > 80) {
    console.log(`After Week3 Utilization ${afterWeek3Percent} so time to Prune`);
} else if (afterWeek3Percent >= 50 && afterWeek3Percent < 80) {
    console.log(`After Week3 Utilization ${afterWeek3Percent} so time to Moderate`);
} else {
    console.log(`After Week3 Utilization ${afterWeek3Percent} so time to Plant more`);
}

//100 plants after 10 weeks
const totalPlantsAfter10WeeksWithoutPruning = 100 * Math.pow(2, 10);
const totalAreaAfter10WeeksWithoutPruning = totalPlantsAfter10WeeksWithoutPruning * spaceForSinglePlant;
const radiusOftotalAreaAfter10WeeksWithoutPruning = Math.sqrt(totalAreaAfter10WeeksWithoutPruning / PI);
console.log(`After 10WeeksWithoutPruning plants ${totalPlantsAfter10WeeksWithoutPruning} area ${totalAreaAfter10WeeksWithoutPruning} radius ${radiusOftotalAreaAfter10WeeksWithoutPruning} `);