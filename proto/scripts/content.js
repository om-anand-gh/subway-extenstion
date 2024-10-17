function calculateCalories(protein, carbohydrate, fat) {
  return 4 * (protein + carbohydrate) + 9 * fat
}

function createMacrosElement(nutritionData) {
  const nutritonCalculated = document.createElement('div');
  nutritonCalculated.className = 'cardcomponent__price'
  const nutritonCalculatedText = ' Macros ' + calculateCalories(nutritionData.protein_g, nutritionData.carbohydrates_g, nutritionData.total_fat_g) + 'Cals | Protein ' + nutritionData.protein_g + 'g | Carbs ' + nutritionData.carbohydrates_g + 'g (Fiber ' + nutritionData.fiber_g + 'g Sugars ' + nutritionData.sugars_g + 'g) | Fat ' + nutritionData.total_fat_g + 'g (Saturated ' + nutritionData.saturated_fat_g + 'g Trans ' + nutritionData.trans_fat_g + 'g)'
  const newContent = document.createTextNode(nutritonCalculatedText)
  nutritonCalculated.appendChild(newContent)
  return nutritonCalculated
}

function insertMacrosInElement(cardElement, nutritionData) {
  const nutritionElement = cardElement.getElementsByClassName('cardcomponent__price')[0]
  macrosElement = createMacrosElement(nutritionData)
  nutritionElement.insertAdjacentElement('afterend', macrosElement)
}


// Function to check if the element is visible
function isElementVisible(elem) {
  if (!elem) return false;
  const style = getComputedStyle(elem);
  return style && style.display !== 'none' && style.visibility !== 'hidden' && elem.offsetHeight > 0;
}

// Function to modify the content of the specific element
function modifyElementContent(elem) {
  if (elem && isElementVisible(elem) && !elem.getAttribute('data-modified')) {
    elem.setAttribute('data-modified', 'true');

    var cardTestId = elem.getAttribute('data-testauto-id')

    const cardData = cardNutritionData.find(e =>
      Array.isArray(e.data_testauto_id) ? e.data_testauto_id.includes(cardTestId) : e.data_testauto_id === cardTestId)

    try {
      insertMacrosInElement(elem, cardData)
    }
    catch (exceptionVar) {
      console.log(`Unable to insert macros in ${cardTestId} with macros ${cardData}`)
    }
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