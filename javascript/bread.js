document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("bread-modal");
    const modalContent = document.getElementById("modal-bread-content");
    const close = document.getElementsByClassName("close")[0];

    const breadDescriptions = {
        sweet_pastry: `
            <img src="image/species_sweet_pastry_bread.jpg" alt="Sweet Pastry">
            <h3>Sweet Pastry</h3>
            <p>A quintessential French bread with a crisp, golden crust and a soft, airy interior.</p>
        `,
        wholegrain_bread: `
            <img src="image/species_wholegrain_bread.jpg" alt="Wholegrain Bread">
            <h3>Wholegrain Bread</h3>
            <p>Hearty, nutty flavor and dense, satisfying texture. Perfect for gourmet sandwiches or simple toast.</p>
        `,
        sourdough: `
            <img src="image/species_sourdough_bread.jpg" alt="Sourdough Bread">
            <h3>Sourdough Bread</h3>
            <p>Sourdough bread is a naturally leavened bread made with a fermented dough starter. It boasts a tangy flavor, chewy texture, and a crisp crust, thanks to the wild yeast and lactic acid bacteria that develop during fermentation. Perfect for toast, sandwiches, or enjoyed on its own.</p>
        `,
        baguette: `
            <img src="image/species_baguette.jpg" alt="Baguette">
            <h3>Classic Baguette</h3>
            <p>The classic baguette is a staple in French cuisine. Known for its crisp crust and chewy interior.</p>
        `,
        ciabatta: `
            <img src="image/species_Ciabatta_bread.jpg" alt="Ciabatta">
            <h3>Ciabatta</h3>
            <p>Italian bread known for its crisp crust and soft interior. Perfect for sandwiches or dipping in olive oil.</p>
        `,
        white_bread: `
            <img src="image/species_white_bread.jpg" alt="White Bread">
            <h3>White bread</h3>
            <p>Our white bread is a classic staple, baked to perfection with a soft, fluffy interior and a golden crust. Made with the finest ingredients, it offers a subtle, slightly sweet flavor that's perfect for sandwiches, toast, or enjoying on its own. Whether you're making a hearty breakfast or a simple snack, our white bread provides the perfect balance of taste and texture.</p>
        `,
        kaya_toast: `
            <img src="image/specialty_kaya_toast.jpg" alt="Kaya Toast">
            <h3>Kaya Toast</h3>
            <p>Indulge in the delightful flavors of our Kaya Toast, a beloved classic that captures the essence of Southeast Asia. Imagine perfectly toasted slices of bread, generously spread with a luscious layer of creamy kaya jam—a fragrant blend of coconut milk, eggs, and pandan leaves. Paired with a pat of butter that melts into every bite, this sweet and savory treat is perfect for breakfast or a midday snack. Enjoy it with a hot cup of coffee or tea for a truly comforting experience.</p>
        `,
        curry_bun: `
            <img src="image/specialty_curry_bun.jpg" alt="Curry Bun">
            <h3>Curry Bun</h3>
            <p>A delightful bun filled with flavorful curry, perfect for a quick meal or snack.</p>
        `,
        coffee_bun: `
            <img src="image/specialty_coffee_bun.webp" alt="Coffee Bun">
            <h3>Coffee Bun</h3>
            <p>A soft, sweet bun topped with a rich coffee-flavored crust that is sure to awaken your senses.</p>
        `,
        red_bean_bun: `
            <img src="image/specialty_red_bean.jpg" alt="Red Bean">
            <h3>Red Bean Bun</h3>
            <p>A sweet bun filled with smooth red bean paste, providing a delightful flavor that's loved in many Asian cultures.</p>
        `,
        michetta: `
            <img src="image/ourBread_Michetta_bread.jpeg" alt="Michetta Bread">
            <h3>Michetta Bread</h3>
            <p>A soft Italian bread with a crispy crust and an airy interior, perfect for sandwiches.</p>
        `,
        panino_all_olio: `
            <img src="image/ourBread_Panino_all'olio.webp" alt="Panino all'olio">
            <h3>Panino all'olio</h3>
            <p>A flavorful Italian sandwich bread made with olive oil, offering a delightful texture and taste.</p>
        `,
        pizza_bianca: `
            <img src="image/ourBread_Pizza_Bianca.webp" alt="Pizza Bianca">
            <h3>Pizza Bianca</h3>
            <p>A traditional Italian flatbread topped with olive oil and salt, perfect as a snack or appetizer.</p>
        `,
        grissini_torinesi: `
            <img src="image/ourBread_Grissini_Torinesi_Breadsticks.webp" alt="Grissini Torinesi Breadsticks">
            <h3>Grissini</h3>
            <p>Crunchy breadsticks originating from Turin, great for dipping or snacking.</p>
        `,
        fresella: `
            <img src="image/ourBread_Fresella.webp" alt="Fresella">
            <h3>Fresella</h3>
            <p>A traditional Southern Italian bread that is twice-baked and dried, perfect for soaking in liquids.</p>
        `
    };

    const breadIngredients = {
        sweet_pastry: [
            { ingredient: "Flour, Water, Yeast, Salt, Sugar", allergens: "Nuts, Eggs, Gluten" }
        ],
        wholegrain_bread: [
            { ingredient: "Flour, Water, Yeast, Salt, Honey, Milk, Olive oil", allergens: "Seeds, Nuts, Eggs, Gluten" }
        ],
        baguette: [
            { ingredient: "Flour, Water, Yeast, Salt", allergens: "Eggs, Gluten" }
        ],
        ciabatta: [
            { ingredient: "Flour, Water, Sourdough Starter, Salt", allergens: "None" }
        ],
        sourdough: [
            { ingredient: "Flour, Water, Yeast, Salt, Olive Oil", allergens: "Nuts, Eggs, Gluten" }
        ],
        white_bread: [
            { ingredient: "Flour, Water, Yeast, Salt, Sugar, Butter", allergens: "Gluten, Eggs" }
        ],
        kaya_toast: {
            toast: [
                { ingredient: "Flour, Water, Yeast, Salt, Sugar, Butter", allergens: "Gluten, Eggs" }
            ],
            kaya_jam: [
                { ingredient: "Coconut Milk, Sugar, Pandan Leaves, Butter", allergens: "Eggs" }
            ]
        },
        curry_bun: {
            Dough: [
                { ingredient: "Flour, Water, Yeast, Sugar, Salt, Butter, Milk", allergens: "Milk, Gluten" }
            ],
            Curry_Filling: [
                { ingredient: "Ground Meat (Chicken), Onion, Garlic, Ginger, Curry Powder, Potatoes, Carrots, Peas, Salt, Pepper, Olive Oil", allergens: "Peas" }
            ]
        },
        coffee_bun: {
            Dough: [
                { ingredient: "Flour, Water, Yeast, Sugar, Salt, Butter, Milk", allergens: "Milk, Gluten" }
            ],
            Coffee_Topping: [
                { ingredient: "Instant Coffee, Sugar, Butter, Flour", allergens: "Milk, Gluten" }
            ]
        },
        red_bean_bun: {
            Dough: [
                { ingredient: "Flour, Water, Yeast, Sugar, Salt, Butter, Milk", allergens: "Milk, Gluten" }
            ],
            Red_Bean_Filling: [
                { ingredient: "Red Beans, Sugar, Coconut Milk", allergens: "None" }
            ]
        },
        michetta: [
            { ingredient: "Flour, Water, Yeast, Salt", allergens: "Gluten" }
        ],
        panino_all_olio: [
            { ingredient: "Flour, Water, Yeast, Olive Oil, Salt", allergens: "Gluten" }
        ],
        pizza_bianca: [
            { ingredient: "Flour, Water, Yeast, Salt, Olive Oil", allergens: "Gluten" }
        ],
        grissini_torinesi: [
            { ingredient: "Flour, Water, Yeast, Olive Oil, Salt", allergens: "Gluten" }
        ],
        fresella: [
            { ingredient: "Flour, Water, Yeast, Salt", allergens: "Gluten" }
        ]
    };

    function updateModal(breadType) {
        modalContent.innerHTML = breadDescriptions[breadType] || "<p>Description not found.</p>";

        if (breadType === 'kaya_toast') {
            const sections = ['toast', 'kaya_jam'];
            sections.forEach(section => addIngredientTable(breadType, section));
        } else if (['curry_bun', 'coffee_bun', 'red_bean_bun'].includes(breadType)) {
            const sections = ['Dough', breadType === 'curry_bun' ? 'Curry_Filling' : breadType === 'coffee_bun' ? 'Coffee_Topping' : 'Red_Bean_Filling'];
            sections.forEach(section => addIngredientTable(breadType, section));
        } else {
            addIngredientTable(breadType);
        }
        
        modal.style.display = "block";
    }

    function addIngredientTable(breadType, section = null) {
        const title = document.createElement('h5');
        title.innerText = section ? `${section.replace('_', ' ')} Ingredients` : 'Ingredients';
        modalContent.appendChild(title);

        const table = document.createElement('table');
        table.classList.add('table');

        const headerRow = document.createElement('tr');
        const headerIngredient = document.createElement('th');
        headerIngredient.innerText = 'Ingredient';
        const headerAllergens = document.createElement('th');
        headerAllergens.innerText = 'Allergens';
        headerRow.appendChild(headerIngredient);
        headerRow.appendChild(headerAllergens);
        table.appendChild(headerRow);

        const ingredients = section ? breadIngredients[breadType][section] : breadIngredients[breadType];
        ingredients.forEach(item => {
            const row = document.createElement('tr');
            const cellIngredient = document.createElement('td');
            cellIngredient.innerText = item.ingredient;
            const cellAllergens = document.createElement('td');
            cellAllergens.innerText = item.allergens;
            row.appendChild(cellIngredient);
            row.appendChild(cellAllergens);
            table.appendChild(row);
        });

        modalContent.appendChild(table);
    }

    // Update the event listener for all "Read More" buttons
    document.querySelectorAll('.read-more-button').forEach(button => {
        button.addEventListener('click', function() {
            const breadType = this.getAttribute('data-bread');
            updateModal(breadType);
        });
    });

    close.onclick = function() {
        modal.style.display = "none";
    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

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


    


});


const breads = [
    { 
        name: 'Sweet Pastry', 
        category: 'classic', 
        price: 4.00, 
        rating: 4.6 
    },
    { 
        name: 'Sourdough Bread', 
        category: 'classic', 
        price: 4.00, 
        rating: 4.5 
    },
    { 
        name: 'White Bread', 
        category: 'classic', 
        price: 2.60, 
        rating: 4.4 
    },
    { 
        name: 'Wholegrain Bread', 
        category: 'classic', 
        price: 3.50, 
        rating: 4.3 
    },
    { 
        name: 'Classic Baguette', 
        category: 'classic', 
        price: 8.00, 
        rating: 4.1 
    },
    { 
        name: 'Ciabatta', 
        category: 'classic', 
        price: 4.20, 
        rating: 4.2 
    },
    { 
        name: 'Michetta Bread', 
        category: 'italy', 
        price: 4.10, 
        rating: 4.3 
    },
    { 
        name: 'Panino all\'olio', 
        category: 'italy', 
        price: 3.50, 
        rating: 4.4 
    },
    { 
        name: 'Pizza Bianca', 
        category: 'italy', 
        price: 4.50, 
        rating: 4.5 
    },
    { 
        name: 'Grissini', 
        category: 'italy', 
        price: 3.50, 
        rating: 4.3 
    },
    { 
        name: 'Fresella', 
        category: 'italy', 
        price: 4.50, 
        rating: 4.2 
    },
    { 
        name: 'Kaya Toast', 
        category: 'specialty', 
        price: 5.50, 
        rating: 4.5 
    },
    { 
        name: 'Curry Bun', 
        category: 'specialty', 
        price: 4.30, 
        rating: 4.7 
    },
    { 
        name: 'Coffee Bun', 
        category: 'specialty', 
        price: 4.00, 
        rating: 4.6 
    },
    { 
        name: 'Red Bean Bun', 
        category: 'specialty', 
        price: 4.10, 
        rating: 4.3 
    }
];

// Initialize when DOM is loaded
class BreadShop {
    constructor() {
        this.searchInput = null;
        this.sortSelect = null;
        this.breadItems = null;
        this.categoryButtons = null;
    }

    init() {
        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Get DOM elements
            this.searchInput = document.getElementById('bread-search');
            this.sortSelect = document.getElementById('sort');
            this.breadItems = document.querySelectorAll('.bread-item');
            this.categoryButtons = document.querySelectorAll('.bread-category-nav button');

            this.initializeBreadItems();
            this.setupEventListeners();
        });
    }

    initializeBreadItems() {
        this.breadItems.forEach(item => {
            const breadName = item.querySelector('h3').textContent;
            const breadData = breads.find(bread => bread.name === breadName);
            if (breadData) {
                item.setAttribute('data-category', breadData.category);
                item.setAttribute('data-price', breadData.price);
                item.setAttribute('data-rating', breadData.rating);
            }
        });
    }

    setupEventListeners() {
        // Search functionality
        this.searchInput.addEventListener('input', () => this.filterAndSortBreads());

        // Sort functionality
        this.sortSelect.addEventListener('change', () => this.filterAndSortBreads());

        // Category filter functionality
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.textContent.toLowerCase();
                this.categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.filterAndSortBreads(category);
            });
        });
    }

    filterAndSortBreads(selectedCategory = 'all') {
        const searchTerm = this.searchInput.value.toLowerCase();
        const sortValue = this.sortSelect.value;

        // Convert NodeList to Array for sorting
        let breadItemsArray = Array.from(this.breadItems);

        // Filter by search term and category
        breadItemsArray.forEach(item => {
            const breadName = item.querySelector('h3').textContent.toLowerCase();
            const category = item.getAttribute('data-category');
            const matchesSearch = breadName.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

            item.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
        });

        // Sort items
        if (sortValue) {
            breadItemsArray.sort((a, b) => {
                if (sortValue === 'Price') {
                    return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
                } else if (sortValue === 'Rating') {
                    return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
                } else if (sortValue === 'Bread Type') {
                    const nameA = a.querySelector('h3').textContent.toLowerCase();
                    const nameB = b.querySelector('h3').textContent.toLowerCase();
                    return nameA.localeCompare(nameB);
                }
            });

            // Reorder DOM elements
            const container = document.querySelector('.bread-grid');
            breadItemsArray.forEach(item => container.appendChild(item));
        }
    }
}

// Initialize the bread shop
const breadShop = new BreadShop();
breadShop.init();


document.addEventListener('DOMContentLoaded', function() {
    // Get all "Learn More" buttons in the slider
    const learnMoreButtons = document.querySelectorAll('#slides .read-more-button');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const breadType = this.getAttribute('data-bread');
            const breadSection = document.querySelector(`.bread-item[data-bread="${breadType}"]`);
            
            if (breadSection) {
                // Scroll to the bread section
                breadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Highlight the section briefly
                breadSection.style.transition = 'background-color 0.5s';
                breadSection.style.backgroundColor = '#ffffcc';
                setTimeout(() => {
                    breadSection.style.backgroundColor = '';
                }, 1500);
            }
        });
    });
});

class ProductSlider {
    constructor(selector) {
        this.selector = selector;
        this.swiper = null;
    }

    init() {
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library is not loaded');
            return;
        }

        // Create new Swiper instance
        this.swiper = new Swiper(this.selector, {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        });
    }

    destroy() {
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }
}

// Wait for DOM content and ensure Swiper is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if all required scripts are loaded
    const checkScriptsLoaded = setInterval(() => {
        if (typeof Swiper !== 'undefined') {
            clearInterval(checkScriptsLoaded);
            
            // Initialize the product slider
            const productSlider = new ProductSlider(".product-row");
            productSlider.init();
            
            // Add error handling
            if (!productSlider.swiper) {
                console.error('Failed to initialize Swiper');
            }
        }
    }, 100); // Check every 100ms

    setTimeout(() => {
        clearInterval(checkScriptsLoaded);
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library failed to load within timeout period');
        }
    }, 5000);
});



document.addEventListener('DOMContentLoaded', function() {
    const branchData = {
        'taman-universiti': {
            name: 'Taman Universiti Branch',
            address: '1, Jalan Kebudayaan 2, Taman Universiti, 81300 Johor Bahru, Johor, Malaysia',
            phone: '+60 7-123 4567',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.414289764115!2d103.68523661475503!3d1.5392292989087251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6f47207f7ffd%3A0x11920b5bcd60ae0c!2s1%2C%20Jalan%20Kebudayaan%202%2C%20Taman%20Universiti%2C%2081300%20Skudai%2C%20Johor!5e0!3m2!1sen!2smy!4v1632928963026!5m2!1sen!2smy',
            directionsUrl: 'https://www.google.com/maps/dir//1,+Jalan+Kebudayaan+2,+Taman+Universiti,+81300+Johor+Bahru,+Johor/',
            directions: [
                'By bus: Wait at SK Taman Universiti 4 or go to Terminal Taman Universiti',
                'By car: Limited street parking available.',
                'By taxi or ride-hailing: Use apps like Grab or local taxi services.'
            ],
            attractions: [
                'Universiti Teknologi Malaysia (UTM) (5-minute drive)',
                'Taman Universiti Recreational Park (10-minute walk)',
                'Aeon Mall Taman Universiti (5-minute drive)'
            ]
        },
        'johor-bahru-city': {
            name: 'Johor Bahru City Branch',
            address: '50, Jalan Wong Ah Fook, 80000 Johor Bahru, Johor, Malaysia',
            phone: '+60 7-223 4567',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5232501618887!2d103.75901531475488!3d1.4612636989430927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12c2d5a1f3a1%3A0x6df69d086f4a7081!2sJalan%20Wong%20Ah%20Fook%2C%20Bandar%20Johor%20Bahru%2C%2080000%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1632929787657!5m2!1sen!2sus',
            directionsUrl: 'https://www.google.com/maps/dir//Jalan+Wong+Ah+Fook,+Bandar+Johor+Bahru,+80000+Johor+Bahru,+Johor,+Malaysia/',
            directions: [
                'By bus: Multiple city bus routes stop near Jalan Wong Ah Fook',
                'By car: Paid parking available at nearby shopping centers',
                'By train: 10-minute walk from JB Sentral station'
            ],
            attractions: [
                'Johor Bahru City Square (2-minute walk)',
                'Komtar JBCC (5-minute walk)',
                'Sultan Abu Bakar State Mosque (10-minute drive)'
            ]
        },
        'mount-austin': {
            name: 'Mount Austin Branch',
            address: '79, Jalan Austin Heights 3, Taman Mount Austin, 81100 Johor Bahru, Johor, Malaysia',
            phone: '+60 7-323 4567',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.385599270885!2d103.76881231475506!3d1.5595941988944067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6ded841d11a7%3A0x9aa46d8c41a6de89!2sJalan%20Austin%20Heights%203%2C%20Taman%20Mount%20Austin%2C%2081100%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1632930027521!5m2!1sen!2sus',
            directionsUrl: 'https://www.google.com/maps/dir//Jalan+Austin+Heights+3,+Taman+Mount+Austin,+81100+Johor+Bahru,+Johor,+Malaysia/',
            directions: [
                'By bus: Take bus route P211 to Austin Heights',
                'By car: Ample parking available in the Austin Heights area',
                'By taxi: 15-minute ride from Johor Bahru city center'
            ],
            attractions: [
                'Austin Heights Water & Adventure Park (5-minute drive)',
                'Austin Heights Golf & Hotel Resort (3-minute drive)',
                'AEON Mall Tebrau City (10-minute drive)'
            ]
        }
    };

    const branchSelect = document.getElementById('branch-select');
    if (branchSelect) {
        branchSelect.addEventListener('change', function() {
            const selectedBranch = this.value;
            if (selectedBranch) {
                const branch = branchData[selectedBranch];
                document.getElementById('branch-name').textContent = branch.name;
                document.getElementById('branch-address').textContent = branch.address;
                document.getElementById('branch-phone').textContent = branch.phone;
                document.getElementById('map-frame').src = branch.mapUrl;
                document.getElementById('get-directions').href = branch.directionsUrl;

                const directionsList = document.getElementById('directions-list');
                directionsList.innerHTML = '';
                branch.directions.forEach(direction => {
                    const li = document.createElement('li');
                    li.textContent = direction;
                    directionsList.appendChild(li);
                });

                const attractionsList = document.getElementById('attractions-list');
                attractionsList.innerHTML = '';
                branch.attractions.forEach(attraction => {
                    const li = document.createElement('li');
                    li.textContent = attraction;
                    attractionsList.appendChild(li);
                });
            }
        });
    }
    
});



// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll animation
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
    };

    // Offerings section animation
    const offeringCards = document.querySelectorAll('.offering-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px"
    };

    const offeringObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    offeringCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.5s ease-out";
        offeringObserver.observe(card);
    });

    // Product section animation
    const productBoxes = document.querySelectorAll('.product-box');
    
    const productObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    productBoxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "scale(0.8)";
        box.style.transition = "all 0.6s ease-out";
        productObserver.observe(box);
    });

    // Staff section animation
    const staffSection = document.querySelector('.staff-section');
    const staffContent = document.querySelector('.index_staff');
    const staffImage = document.querySelector('.container_staff');

    const staffObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                staffContent.style.opacity = "1";
                staffContent.style.transform = "translateX(0)";
                staffImage.style.opacity = "1";
                staffImage.style.transform = "translateX(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (staffSection) {
        staffContent.style.opacity = "0";
        staffContent.style.transform = "translateX(-50px)";
        staffContent.style.transition = "all 0.7s ease-out";
        staffImage.style.opacity = "0";
        staffImage.style.transform = "translateX(50px)";
        staffImage.style.transition = "all 0.7s ease-out";
        staffObserver.observe(staffSection);
    }

    // Qualification section animation
    const qualificationItems = document.querySelectorAll('.qualification-item');
    
    const qualificationObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) rotate(0deg)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    qualificationItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px) rotate(-10deg)";
        item.style.transition = `all 0.5s ease-out ${index * 0.2}s`;
        qualificationObserver.observe(item);
    });

   
});
// Initialize WOW.js for scroll animations
new WOW().init();

document.addEventListener('DOMContentLoaded', function() {
    // Animate the header section when page loads
    const header = document.querySelector('.special_order');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease-in-out';
        header.style.opacity = '1';
    }, 100);

    // Animate category cards on page load
    const categories = document.querySelectorAll('.sbs-container');
    categories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        setTimeout(() => {
            category.style.transition = 'all 0.5s ease-in-out';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });

    // Add hover animations to category cards
    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'scale(1.03)';
            category.style.transition = 'transform 0.3s ease-in-out';
        });

        category.addEventListener('mouseleave', () => {
            category.style.transform = 'scale(1)';
        });
    });

    // Animate steps section
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.classList.add('wow', 'fadeInLeft');
        step.setAttribute('data-wow-delay', '0.3s');
    });

    // Form field animations
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.style.transform = 'translateX(5px)';
            field.style.transition = 'transform 0.3s ease';
        });

        field.addEventListener('blur', () => {
            field.style.transform = 'translateX(0)';
        });
    });

    // Delivery address toggle animation
    const deliveryOption = document.getElementById('deliveryOption');
    const deliveryAddressGroup = document.getElementById('deliveryAddressGroup');

    deliveryOption.addEventListener('change', () => {
        if (deliveryOption.value === 'delivery') {
            deliveryAddressGroup.style.display = 'block';
            deliveryAddressGroup.classList.add('wow', 'fadeInUp');
        } else {
            deliveryAddressGroup.style.display = 'none';
        }
    });

    // Add smooth scroll animation for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});