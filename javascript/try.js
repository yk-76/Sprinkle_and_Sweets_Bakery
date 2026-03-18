document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("bread-modal");
    const modalContent = document.getElementById("modal-bread-content");
    const close = document.getElementsByClassName("close")[0];
    const searchInput = document.getElementById("bread-search");
    const sortSelect = document.getElementById("sort");
    const filterBtn = document.getElementById("filter-btn");

    // Bread data (you can expand this with more details)
    const breads = [
        { name: "Sweet Pastry", type: "classic", price: 6, rating: 4.6 },
        { name: "Sourdough Bread", type: "classic", price: 4, rating: 4.5 },
        { name: "White Bread", type: "classic", price: 2.6, rating: 4.4 },
        { name: "Wholegrain Bread", type: "classic", price: 3.5, rating: 4.3 },
        { name: "Classic Baguette", type: "classic", price: 8, rating: 4.1 },
        { name: "Ciabatta", type: "classic", price: 4.2, rating: 4.2 },
        { name: "Michetta Bread", type: "italian", price: 4.1, rating: 4.3 },
        { name: "Panino all'olio", type: "italian", price: 3.5, rating: 4.4 },
        { name: "Pizza Bianca", type: "italian", price: 4.5, rating: 4.5 },
        { name: "Grissini", type: "italian", price: 3.5, rating: 4.3 },
        { name: "Fresella", type: "italian", price: 4.5, rating: 4.2 },
        { name: "Kaya Toast", type: "specialty", price: 3.75, rating: 4.5 },
        { name: "Curry Bun", type: "specialty", price: 4.3, rating: 4.7 },
        { name: "Coffee Bun", type: "specialty", price: 4, rating: 4.6 },
        { name: "Red Bean Bun", type: "specialty", price: 5.1, rating: 4.3 }
    ];

    function renderBreads(filteredBreads = breads) {
        const classicContainer = document.querySelector('#classic .bread-grid');
        const italianContainer = document.querySelector('#italian .bread-grid');
        const specialtyContainer = document.querySelector('#specialty .bread-grid');

        classicContainer.innerHTML = '';
        italianContainer.innerHTML = '';
        specialtyContainer.innerHTML = '';

        filteredBreads.forEach(bread => {
            const breadElement = createBreadElement(bread);
            switch (bread.type) {
                case 'classic':
                    classicContainer.appendChild(breadElement);
                    break;
                case 'italian':
                    italianContainer.appendChild(breadElement);
                    break;
                case 'specialty':
                    specialtyContainer.appendChild(breadElement);
                    break;
            }
        });
    }

    function createBreadElement(bread) {
        const breadItem = document.createElement('div');
        breadItem.classList.add('bread-item');
        breadItem.innerHTML = `
            <div class="bread-image">
                <img src="image/${bread.name.toLowerCase().replace(/ /g, '_')}.jpg" alt="${bread.name}">
                <div class="read-more">
                    <button class="btn btn-light read-more-button" data-bread="${bread.name.toLowerCase().replace(/ /g, '_')}">Read More</button>
                </div>
            </div>
            <div class="bread-info">
                <h3>${bread.name}</h3>
                <p class="price_tag">RM${bread.price.toFixed(2)}</p>
                <p class="availability">Available</p>
                <p class="rating">${bread.rating}<i class="fa-solid fa-star"></i></p>
                <button class="btn btn-cart">Add to Cart</button>
            </div>
        `;
        return breadItem;
    }

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredBreads = breads.filter(bread => 
            bread.name.toLowerCase().includes(searchTerm)
        );
        renderBreads(filteredBreads);
    });

    // Sort functionality
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        let sortedBreads = [...breads];

        switch (sortValue) {
            case 'price':
                sortedBreads.sort((a, b) => a.price - b.price);
                break;
            case 'type':
                sortedBreads.sort((a, b) => a.type.localeCompare(b.type));
                break;
            case 'rating':
                sortedBreads.sort((a, b) => b.rating - a.rating);
                break;
        }

        renderBreads(sortedBreads);
    });

    // Filter functionality
    let activeFilters = new Set();

    filterBtn.addEventListener('click', function() {
        const filterOptions = ['classic', 'italian', 'specialty'];
        const filterPopup = document.createElement('div');
        filterPopup.classList.add('filter-popup');
        
        filterOptions.forEach(option => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = option;
            checkbox.checked = activeFilters.has(option);
            
            const label = document.createElement('label');
            label.htmlFor = option;
            label.textContent = option.charAt(0).toUpperCase() + option.slice(1);
            
            filterPopup.appendChild(checkbox);
            filterPopup.appendChild(label);
            filterPopup.appendChild(document.createElement('br'));
        });
        
        const applyButton = document.createElement('button');
        applyButton.textContent = 'Apply Filters';
        applyButton.addEventListener('click', applyFilters);
        filterPopup.appendChild(applyButton);
        
        document.body.appendChild(filterPopup);
    });

    function applyFilters() {
        activeFilters.clear();
        document.querySelectorAll('.filter-popup input:checked').forEach(checkbox => {
            activeFilters.add(checkbox.id);
        });
        
        const filteredBreads = activeFilters.size > 0
            ? breads.filter(bread => activeFilters.has(bread.type))
            : breads;
        
        renderBreads(filteredBreads);
        document.querySelector('.filter-popup').remove();
    }

    // Modal functionality
    const breadDescriptions = {
        sweet_pastry: "A delightful sweet pastry with a flaky crust...",
        sourdough_bread: "A tangy, chewy bread made from naturally fermented dough...",
        // Add descriptions for all breads
    };

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('read-more-button')) {
            const breadType = e.target.getAttribute('data-bread');
            const description = breadDescriptions[breadType] || "Description not available.";
            
            modalContent.innerHTML = `
                <h2>${breadType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
                <img src="image/${breadType}.jpg" alt="${breadType}" style="max-width: 100%; height: auto;">
                <p>${description}</p>
            `;
            
            modal.style.display = "block";
        }
    });

    close.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Initialize the page
    renderBreads();
});