var itemCount = 0;
var itemsContainer = document.getElementById("itemsContainer");
var loadMoreBtn = document.getElementById("loadMoreButton");
const defItem = `<div class="col-3 card" id="singleItem">
      <img src="Images/gloveCycling-2.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </div>`;

const userInput = document.getElementById('itemsLimit');
userInput.addEventListener('change', (e) => {
    e.preventDefault()
    
    const itemsToShow = userInput.value;
    loadItems(itemsToShow);

    loadMoreBtn.addEventListener("click", function () {
        loadItems(itemsToShow); 
      });
      
      function loadItems(count) {
        for (var i = 0; i < count; i++) {
          var item = createItem(defItem);
          itemsContainer.appendChild(item);
          itemCount++;
        }
      
        if (itemCount >= 20) {
          loadMoreBtn.style.display = "none"; // Hide the button when all items are loaded
        }
      }
      
      function createItem(htmlString) {
        var item = document.createElement("div");
        item.innerHTML = htmlString.trim();
        return item.firstChild;
      }
})

