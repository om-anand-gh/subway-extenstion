let totalNutrition = {
  calories: 0,
  total_fat_g: 0,
  saturated_fat_g: 0,
  trans_fat_g: 0,
  carbohydrates_g: 0,
  fiber_g: 0,
  sugars_g: 0,
  protein_g: 0
}

function calculateCalories(protein, carbohydrate, fat) {
  return 4 * (protein + carbohydrate) + 9 * fat
}

function generateMacrosText(nutritionData, isFootlong = false) {
  // Double the values if it's a footlong
  const multiplier = isFootlong ? 2 : 1;

  const calories = calculateCalories(
    nutritionData.protein_g * multiplier,
    nutritionData.carbohydrates_g * multiplier,
    nutritionData.total_fat_g * multiplier
  );

  const nutritionCalculatedText =
    ' Macros ' + calories + ' Cals | Protein ' + (nutritionData.protein_g * multiplier) + 'g | Carbs ' + (nutritionData.carbohydrates_g * multiplier) + 'g (Fiber ' + (nutritionData.fiber_g * multiplier) + 'g Sugars ' + (nutritionData.sugars_g * multiplier) + 'g) | Fat ' + (nutritionData.total_fat_g * multiplier) + 'g (Saturated ' + (nutritionData.saturated_fat_g * multiplier) + 'g Trans ' + (nutritionData.trans_fat_g * multiplier) + 'g)';

  return nutritionCalculatedText;
}


function createOrUpdateMacrosElement(cardElement, nutritionData) {
  // Look for an existing element with the ID "macros-element"
  let macrosElement = cardElement.querySelector('#macros-element');

  if (!macrosElement) {
    // If the element doesn't exist, create it
    macrosElement = document.createElement('div');
    macrosElement.id = 'macros-element'; // Assign a unique ID
    macrosElement.className = 'cardcomponent__price';
  }

  // Update the content of the macros element
  macrosElement.textContent = generateMacrosText(nutritionData, isFootlongSelected());

  // Find the nutrition element where we want to insert the macros element after
  const nutritionElement = cardElement.querySelector('.cardcomponent__price');

  // If there's a nutrition element, insert the macros element after it
  if (nutritionElement) {
    nutritionElement.insertAdjacentElement('afterend', macrosElement);
  }
}

// Function to check if the element is visible
function isElementVisible(elem) {
  if (!elem) return false;
  const style = getComputedStyle(elem);
  return style && style.display !== 'none' && style.visibility !== 'hidden' && elem.offsetHeight > 0;
}

function getSubSize() {
  const subSize = document.querySelector('div.sizecomponent--selected').getAttribute("data-testauto-id")
  return subSize ? subSize : "footlong"
}

function isFootlongSelected() {
  return getSubSize() === "footlong"
}

function displayTotalNutrition() {
  const existingSpan = document.querySelector('[data-testauto-id="pdp-footer-calorie-each"]');

  if (existingSpan) {
    let totalNutritionSpan = document.getElementById('total-nutrition-calories');

    if (!totalNutritionSpan) {
      totalNutritionSpan = document.createElement('span');
      totalNutritionSpan.id = 'total-nutrition-calories';
      totalNutritionSpan.className = 'prodinfo__calorie';
      existingSpan.insertAdjacentElement('afterend', totalNutritionSpan);
    }

    const isFootlong = getSubSize() === "footlong";
    totalNutritionSpan.textContent = generateMacrosText(totalNutrition, isFootlong);
  }
}


function modifyElementContent(elem) {
  if (elem && isElementVisible(elem)) {
    const currentSubSize = getSubSize();
    const dataModified = elem.getAttribute('data-modified');
    const isIngredientSelected = elem.getAttribute("aria-checked") === 'true';
    const isIncludedInCalculation = elem.getAttribute("included-in-calculation") === 'true';

    let cardTestId = elem.getAttribute('data-testauto-id');
    const cardData = cardNutritionData.find(e =>
      Array.isArray(e.data_testauto_id) ? e.data_testauto_id.includes(cardTestId) : e.data_testauto_id === cardTestId);

    // Run if it's the initial load (data-modified not present) or if sub size changes
    if (!dataModified || dataModified !== currentSubSize) {
      elem.setAttribute('data-modified', currentSubSize);

      try {
        createOrUpdateMacrosElement(elem, cardData);
      } catch (exceptionVar) {
        console.log(`Unable to insert macros in ${cardTestId} with macros ${cardData}`);
      }
    }

    if (!isIncludedInCalculation && isIngredientSelected) {
      for (const macro in totalNutrition) {
        totalNutrition[macro] += cardData[macro];
      }
      elem.setAttribute("included-in-calculation", 'true');
    } else if (isIncludedInCalculation && !isIngredientSelected) {
      for (const macro in totalNutrition) {
        totalNutrition[macro] -= cardData[macro];
      }
      elem.setAttribute("included-in-calculation", 'false');
    }

    displayTotalNutrition();
  }
}

// Specify the selector for the target element
const targetSelector = "div.cardcomponent"; // Update this to match the element's ID or class

// Function to iterate over all matching elements and modify their content
function modifyAllVisibleElements() {
  const elements = document.querySelectorAll(targetSelector);
  elements.forEach((elem) => {
    modifyElementContent(elem);
  });
}

// MutationObserver to detect changes in the DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    modifyAllVisibleElements(); // Check all matching elements on any DOM change
  });
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});