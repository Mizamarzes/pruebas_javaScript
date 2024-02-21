function showResult(result) {
    document.getElementById("result").innerHTML = result;
}

function calculateSimilarity(chromosome1, chromosome2) {
    let totalDigits = chromosome1.length;
    let matchingDigits = 0;

    for (let i = 0; i < totalDigits; i++) {
        if (chromosome1.charAt(i) === chromosome2.charAt(i)) {
            matchingDigits++;
        }
    }
    let similarityPercentage = (matchingDigits / totalDigits) * 100;
    return similarityPercentage;
}

function findCulprit(mainChromosome, chromosomeList, names) {
    let highestSimilarity = -1; // Inicializamos con un valor negativo para asegurarnos de que cualquier similitud encontrada sea mayor
    let culpritChromosome = null;
    let culpritName= null;
    let culpritPercentage=null;

    for (let i = 0; i < chromosomeList.length; i++) {
        let chromosome = chromosomeList[i];
        let similarity = calculateSimilarity(mainChromosome, chromosome);
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            culpritChromosome = chromosome;
            culpritName = names[i];
            culpritPercentage = similarity;
        }
    }
    return { name: culpritName, chromosome: culpritChromosome, percentage: culpritPercentage };
}

function process(){
    let perpetratorDNA = document.getElementById("perpetrator").value; // Cromosoma 1
    let suspects_dna=[
        "00000101010101010101",
        "00101010101101110111",
        "00100010010000001001"
    ];
    let names = ["Pedro", "Juan", "Diego"];

    let culprit = findCulprit(perpetratorDNA, suspects_dna, names);
    showResult("The culprit chromosome is: " + culprit.chromosome + " of " + culprit.name + " with a " + culprit.percentage.toFixed(2) + "% parentage");
}