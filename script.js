// const limitInput = document.getElementById('itemsLimit');
// limitInput.addEventListener('change', (e) => {
//     e.preventDefault();
//     const UserLimit = limitInput.value;
    
//     const itemsContainer = document.querySelector('.itemsContainer');
//     const computedStyle = getComputedStyle(itemsContainer);
//     const defaultHeight = computedStyle.getPropertyValue('max-height');
    
//     const singleItem = document.querySelectorAll('#singleItem');
//     singleItem.forEach((item) => {
//         const itemStyles = getComputedStyle(item);
//         const defaultItemHeight = itemStyles.getPropertyValue('height');

        
//     })
//     itemsContainer.style.maxHeight = UserLimit * defaultItemHeight;
//     console.log(itemsContainer.style.maxHeight = UserLimit * defaultItemHeight)

// })

const itemsContainer = document.querySelector('.itemsContainer');
const computedStyle = getComputedStyle(itemsContainer);
const loadMoreButton = document.getElementById('loadMoreButton');

loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    let computedStyle = window.getComputedStyle(itemsContainer);
    let currentMaxHeight = parseInt(computedStyle.getPropertyValue('max-height'));
    
    if ((currentMaxHeight + 100) > window.innerHeight) {
      return false;
    } else {
      itemsContainer.style.maxHeight = `${currentMaxHeight + 500}px`;
    }
  });
  