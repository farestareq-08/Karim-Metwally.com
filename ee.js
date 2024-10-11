// Nutritional database (example values per 100g)
const nutritionalValues = {

    // Meat and Poultry (from previous list)
    beef_cooked: { protein: 27, carb: 0, fat: 12 },
    chicken_breast: { protein: 31, carb: 0, fat: 3.6 },
    roast_beef: { protein: 28, carb: 0, fat: 11 },
    beef_ground_packaged_frozen: { protein: 25, carb: 0, fat: 20 },
    beef_ground_3_percent_cooked: { protein: 26, carb: 0, fat: 3 },
    beef_ground_10_percent_cooked: { protein: 25, carb: 0, fat: 10 },
    kofta: { protein: 23, carb: 0, fat: 19 },
    beef_shank_cooked: { protein: 30, carb: 0, fat: 12 },
    veal_leg_top_round_boneless_cooked_grilled: { protein: 31, carb: 0, fat: 6 },
    full_rump_cooked_broiled: { protein: 30, carb: 0, fat: 8 },
    rib_steaks: { protein: 29, carb: 0, fat: 21 },
    mortadella: { protein: 14, carb: 0, fat: 29 },
    hot_dog_raw: { protein: 12, carb: 1.7, fat: 27 },
    sausages_beef_cooked: { protein: 13, carb: 1, fat: 26 },
    sadia_beef_franks_smoked_raw: { protein: 11, carb: 2, fat: 23 },
    deli_meat_smoked_turkey_breast: { protein: 18, carb: 1, fat: 1.5 },
    turkey_mortadella: { protein: 12, carb: 1, fat: 22 },
    chicken_breast_raw_without_skin: { protein: 23, carb: 0, fat: 1.2 },
    chicken_breast_cooked: { protein: 31, carb: 0, fat: 3.6 },
    squab_pigeon_cooked: { protein: 24, carb: 0, fat: 9 },
    frozen_chicken_burger_raw: { protein: 15, carb: 9, fat: 13 },
    chicken_breast_breaded_fried: { protein: 21, carb: 14, fat: 7 },
    chicken_broth_soup: { protein: 1, carb: 0.4, fat: 0.3 },
    beef_broth_soup: { protein: 1.7, carb: 0, fat: 0.1 },
    chicken_leg_cooked: { protein: 25, carb: 0, fat: 9 },
    duck_breast_cooked: { protein: 25, carb: 0, fat: 7 },
    duck_leg_cooked: { protein: 22, carb: 0, fat: 11 },
    turkey_breast_cooked: { protein: 29, carb: 0, fat: 3 },
    turkey_thighs_cooked: { protein: 28, carb: 0, fat: 7 },
    turkey_wings_cooked: { protein: 27, carb: 0, fat: 9 },
    egg: { protein: 6, carb: 0.6, fat: 5 },

    // Dairy and other foods (from previous list)
    caviar: { protein: 24, carb: 4, fat: 18 },
    greek_yogurt: { protein: 10, carb: 3.6, fat: 4 },
    low_fat_greek_yogurt: { protein: 10, carb: 4, fat: 1.5 },
    milk_full_cream: { protein: 3.2, carb: 4.8, fat: 3.6 },
    milk_reduced_fat: { protein: 3.4, carb: 5, fat: 1.5 },
    milk_skimmed: { protein: 3.6, carb: 5, fat: 0.2 },
    al_ain_reduced_fat_milk: { protein: 3.3, carb: 5.2, fat: 1.2 },
    joya_flavoured_soya_milk_vanilla: { protein: 3.3, carb: 7.9, fat: 1.2 },
    camel_milk_full_cream: { protein: 3.2, carb: 4.9, fat: 4.5 },
    almond_milk_fortified: { protein: 1, carb: 1, fat: 2.5 },
    nestle_sweet_condensed_milk: { protein: 8, carb: 56, fat: 9 },
    condensed_milk_unsweetened: { protein: 7.9, carb: 10, fat: 10 },
    arla_protein_yogurt: { protein: 10, carb: 4, fat: 1.5 },
    
    // Cheese (from previous list)
    roamy_cheese: { protein: 22, carb: 0, fat: 30 },
    cheddar_cheese: { protein: 25, carb: 1.3, fat: 33 },
    edam_cheese: { protein: 25, carb: 1.4, fat: 28 },
    marai_cheddar_cheese_slices: { protein: 21, carb: 1, fat: 25 },
    low_fat_cheddar_cheese: { protein: 23, carb: 1.5, fat: 15 },
    marai_low_fat_cheddar_cheese: { protein: 23, carb: 2, fat: 15 },
    marai_cheese_slices_fat_free: { protein: 20, carb: 1.3, fat: 0 },
    mersin_white_cheese: { protein: 12, carb: 2, fat: 14 },
    turkish_labneh_lite: { protein: 7, carb: 4, fat: 6 },

    // Oats, Bread, and similar foods
    oats_raw: { protein: 13, carb: 66, fat: 7 },
    oats_cooked: { protein: 2.5, carb: 12, fat: 1.4 },
    whole_wheat_bread: { protein: 13, carb: 41, fat: 4.2 },
    white_bread: { protein: 9, carb: 49, fat: 3.2 },
    multigrain_bread: { protein: 12, carb: 47, fat: 4 },
    pita_bread: { protein: 9, carb: 55, fat: 1.2 },
    rye_bread: { protein: 9, carb: 48, fat: 3 },
    baguette: { protein: 9, carb: 57, fat: 1.5 },
    sourdough_bread: { protein: 8, carb: 49, fat: 0.9 },
    quinoa: { protein: 14, carb: 64, fat: 6 },
    brown_rice_cooked: { protein: 3, carb: 23, fat: 0.9 },
    white_rice_cooked: { protein: 2.7, carb: 28, fat: 0.3 },
    pasta_cooked: { protein: 5, carb: 31, fat: 1.1 },
    couscous: { protein: 3.8, carb: 23, fat: 0.2 },
    barley: { protein: 12, carb: 73, fat: 2.3 },
    bulgur: { protein: 12, carb: 76, fat: 1 },
};

function calculateMeals() {
    // Get target macros from user input
    const targetProtein = parseFloat(document.getElementById("target-protein").value);
    const targetCarbs = parseFloat(document.getElementById("target-carb").value);
    const targetFat = parseFloat(document.getElementById("target-fat").value);

    // Calculate distribution for meals
    const mealDistribution = {
        breakfast: { protein: targetProtein * 0.275, carbs: targetCarbs * 0.225, fat: targetFat * 0.35 },
        lunch: { protein: targetProtein * 0.2, carbs: targetCarbs * 0.2, fat: targetFat * 0.15 },
        preWorkout: { protein: targetProtein * 0.15, carbs: targetCarbs * 0.1, fat: targetFat * 0.1 },
        postWorkout: { protein: targetProtein * 0.3, carbs: targetCarbs * 0.25, fat: targetFat * 0.3 },
        dinner: { protein: targetProtein * 0.2, carbs: targetCarbs * 0.25, fat: targetFat * 0.1 },
    };

    // Get ingredient inputs
    const meals = ["breakfast", "lunch", "preWorkout", "postWorkout", "dinner"];
    const resultTable = document.getElementById("result-table").getElementsByTagName('tbody')[0];

    // Clear previous results
    resultTable.innerHTML = "";

    // Process each meal
    meals.forEach(meal => {
        const ingredientsList = document.querySelectorAll(`#${meal}-meal .ingredient-entry`);
        let totalProteinNeeded = mealDistribution[meal].protein;
        let totalCarbsNeeded = mealDistribution[meal].carbs;
        let totalFatNeeded = mealDistribution[meal].fat;

        let totalNutritionalValues = { protein: 0, carb: 0, fat: 0 };
        ingredientsList.forEach(entry => {
            const ingredient = entry.querySelector('.ingredient-name').textContent;
            totalNutritionalValues.protein += nutritionalValues[ingredient].protein;
            totalNutritionalValues.carb += nutritionalValues[ingredient].carb;
            totalNutritionalValues.fat += nutritionalValues[ingredient].fat;
        });

        let ingredientString = '';
        ingredientsList.forEach(entry => {
            const ingredient = entry.querySelector('.ingredient-name').textContent;

            // Calculate the grams required to meet the target macros for this meal
            const proteinRatio = nutritionalValues[ingredient].protein / totalNutritionalValues.protein;
            const carbsRatio = nutritionalValues[ingredient].carb / totalNutritionalValues.carb || 0;
            const fatRatio = nutritionalValues[ingredient].fat / totalNutritionalValues.fat;

            const gramsForProtein = (totalProteinNeeded * proteinRatio * 100) / nutritionalValues[ingredient].protein;
            const gramsForCarbs = (totalCarbsNeeded * carbsRatio * 100) / nutritionalValues[ingredient].carb || 0;
            const gramsForFat = (totalFatNeeded * fatRatio * 100) / nutritionalValues[ingredient].fat;

            const grams = Math.max(gramsForProtein, gramsForCarbs, gramsForFat);

            ingredientString += `${grams.toFixed(2)}g of ${ingredient}, `;
        });

        // Add row to the result table if there's any ingredient selected
        if (ingredientString) {
            resultTable.innerHTML += `
                <tr>
                    <td>${meal.charAt(0).toUpperCase() + meal.slice(1)}</td>
                    <td>${ingredientString.slice(0, -2)}</td>
                    <td>Protein: ${totalProteinNeeded.toFixed(2)}g, Carbs: ${totalCarbsNeeded.toFixed(2)}g, Fat: ${totalFatNeeded.toFixed(2)}g</td>
                </tr>
            `;
        }
    });
}

// Add event listeners for adding ingredients
document.querySelectorAll('.add-ingredient-btn').forEach(button => {
    button.addEventListener('click', function() {
        const mealDiv = button.closest('.meal');
        const select = mealDiv.querySelector('.ingredient-select');
        const selectedValue = select.value;

        if (selectedValue) {
            const ingredientsList = mealDiv.querySelector('.ingredients-list');
            const newIngredientDiv = document.createElement('div');
            newIngredientDiv.classList.add('ingredient-entry');
            newIngredientDiv.innerHTML = `
                <span class="ingredient-name">${selectedValue}</span>
                <button type="button" class="remove-ingredient-btn">Remove</button>
            `;
            ingredientsList.appendChild(newIngredientDiv);
            select.value = ""; // Reset the select box after adding
        }
    });
});

// Add event delegation for removing ingredients
document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-ingredient-btn')) {
        e.target.parentElement.remove(); // Remove the ingredient entry
    }
});

// Handle form submission
document.getElementById("macro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    calculateMeals();
});


document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
