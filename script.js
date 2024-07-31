document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input
    let weight = parseFloat(document.getElementById('weight').value);
    let heightCm = parseFloat(document.getElementById('height').value);
    
    // Validate inputs
    if (weight <= 0 || heightCm <= 0) {
        alert('Please enter valid positive values for weight and height.');
        return;
    }
    
    // Convert height from cm to m
    let height = heightCm / 100;
    
    // Calculate BMI
    let bmi = calculateBMI(weight, height);
    
    // Determine BMI category
    let bmiCategory = getBMICategory(bmi);
    
    // Display result
    displayResult(bmi, bmiCategory);
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

function displayResult(bmi, category) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(1)}<br>Category: ${category}`;

    let container = document.querySelector('.container');
    switch (category) {
        case 'Underweight':
            container.style.backgroundColor = 'rgba(255, 165, 0, 0.4)'; // Orange with transparency
            break;
        case 'Normal weight':
            container.style.backgroundColor = 'rgba(0, 128, 0, 0.4)'; // Green with transparency
            break;
        case 'Overweight':
            container.style.backgroundColor = 'rgba(255, 0, 0, 0.4)'; // Red with transparency
            break;
        case 'Obesity':
            container.style.backgroundColor = 'rgba(255, 255, 0, 0.4)'; // Yellow with transparency
            break;
    }

    let resultContainer = document.getElementById('resultContainer');
    resultContainer.style.display = 'block'; // Make result container visible

    let categoriesContainer = document.getElementById('categoriesContainer');
    categoriesContainer.style.display = 'block'; // Make categories container visible
}
