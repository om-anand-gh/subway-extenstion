

// const article = document.querySelector('article');

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;

//   const wordMatchRegExp = /[^\s]+/g;
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement('p');
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add('color-secondary-text', 'type--caption');
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector('h1');
//   // Support for article docs with date
//   const date = article.querySelector('time')?.parentNode;

//   // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
//   (date ?? heading).insertAdjacentElement('afterend', badge);
// }


function waitForElement(selector, callback) {
  const interval = setInterval(() => {
    const element = document.querySelector(selector);
    if (element) {
      clearInterval(interval);
      callback(element);
    }
  }, 100); // Checks every 100 milliseconds
}


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


waitForElement('div.protein', (element) => {
  const cards = document.querySelectorAll('div.cardcomponent')

  for (const card of cards) {
    if (card.parentElement)
      if (card) {
        var cardTestId = card.getAttribute('data-testauto-id')

        // console.log(`Bread data ${breadData[0].name}`)
        const cardData = cardNutritionData.find(e =>
          Array.isArray(e.data_testauto_id) ? e.data_testauto_id.includes(cardTestId) : e.data_testauto_id === cardTestId)

        try {
          insertMacrosInElement(card, cardData)
        }
        catch (exceptionVar) {
          console.log(`Unable to insert macros in ${cardTestId} with macros ${cardData}`)
        }
        // nutritionElement.insertAdjacentElement('afterend', nutritonCalculated)

        // console.log(`Found nutrition price ${nutritionElement}  ${nutritionElement.textContent}`)

      }
  }
});
