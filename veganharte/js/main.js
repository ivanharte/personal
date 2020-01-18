//Constants from entries.js:
//      featured
//      entries

/********************* CONTENT SERVING *********************/

/* Serves featured posts to carousel
----------------------------------------------------------*/
function serveFeatured() {
    const featuredContainer  = document.getElementById("featured-container"),
          featuredIndicators = document.getElementById("featured-indicators");
    
    for (let i = 0; i < featured.featured.length; i++) {
        const entryID = featured.featured[i],
              entry   = entries[entryID];
        
        featuredIndicators.innerHTML += 
            `<li data-target="#featured-posts" 
                data-slide-to="${i}" 
                class="bg-dark ${entryID === featured.activeID ? "active" : ""}"></li>`;
              
        featuredContainer.innerHTML += `
            <div class="carousel-item ${entryID === featured.activeID ? "active" : ""}">
                <img src="img/${entry.thumbnail.large}" 
                    class="d-block w-100" 
                    alt="${entry.thumbnail.altText}" 
                    id="featured-${i}">
                <a href="entries/${entry.URL}">
                    <div class="carousel-caption mx-auto px-4 px-md-5 text-dark rounded-pill">
                        <h2 class="h5">${entry.title}</h2>
                        <p class="d-none d-sm-block border-top border-dark pt-1">${entry.description}</p>
                    </div>
                </a>
            </div>`;
    }
}

/********************* RECEIPT BROWSER *********************/
//Classified receipts storage
const classifiedReceipts = {
    mainIngredient: {},
    course: {},
    cookingMethod: {},
    style: {},
    glutenFree: []
};

//Category list
const categories = Object.keys(classifiedReceipts);

//Filtered receipts control
const filteredReceipts = {
    filtered: undefined,
    mainIngredient: undefined,
    course: undefined,
    cookingMethod: undefined,
    style: undefined,
    glutenFree: undefined,
}

/* Fills browsing tags clusters with tags and their associated receipts
----------------------------------------------------------*/
function classifyReceipts(category) {
    for (let entry of entries) {
        if (entry.receipt) {
            const tagContainer = entry.receipt[category];
            
            for (let tag of tagContainer) {
                    
                if (tag === true || tag === false) {    //for boolean containers
                    if (tag === true) {
                        classifiedReceipts[category].push(entry.id);
                    }
                    break;
                } else {                                //For multi-tag containers
                    if (classifiedReceipts[category][tag] === undefined) {
                        classifiedReceipts[category][tag] = [entry.id];
                    } else {
                        classifiedReceipts[category][tag].push(entry.id);
                    }
                }
            }
        }
    }
}

/* Fills UI selects with classified browsing tags
----------------------------------------------------------*/
function fillSelectsWithBrowsingTags(category) {
    const field = document.getElementById(category),
          tags   = Object.keys(classifiedReceipts[category]);
    if (field.type === "select-one") {
        for (let tag of tags) {
            field.innerHTML += `<option value="${tag}">${tag[0].toUpperCase() + tag.substring(1)}</option>`;
        }
    }
}

/* Assigns event listeners to UI fields
----------------------------------------------------------*/
function assignEventListener(category) {
    const field = document.getElementById(category);

    if (field.type === "select-one") {  //selects
            //Assigns filtering criteria to filtered receipts control
        field.onchange = function() {
            if (field.value === "all") {
                filteredReceipts[category] = undefined;
            } else {
                filteredReceipts[category] = field.value;
            }
            filteredReceipts.filtered = filterReceipts();
        }
    } else {    //checkboxes
        field.onchange = function() {
            if (field.checked) {
                filteredReceipts[category] = true;
            } else {
                filteredReceipts[category] = undefined;
            }
            filteredReceipts.filtered = filterReceipts();
        }
    }
}

/* Filters receipts
----------------------------------------------------------*/
function filterReceipts() {
    let receipts = entries.filter(entry => entry.receipt);
    for (let category of categories) {
        if (filteredReceipts[category] !== undefined) {
            receipts = 
                receipts.filter(receipt => receipt.receipt[category].includes(filteredReceipts[category]));
        }
    }
    return receipts;
}

/* Ensembles the receipt browser
----------------------------------------------------------*/
function buildReceiptBrowser() {
    for (let category of categories) {
        classifyReceipts(category);
        fillSelectsWithBrowsingTags(category);
        assignEventListener(category);
    }
}

/********************* UI TWEAKS *********************/
/* Removes focus off carousel controls after mouse click, while keeping it for keyboard users
----------------------------------------------------------*/
function removeFocusAfterClick() {
    const carouselControls = document.getElementsByClassName("carousel-control");
    for (let control of carouselControls) {
        control.onmousedown = function(e) { e.preventDefault(); };
    }
}

/********************* SCRIPT EXECUTION *********************/
window.onload = function() {
    
    serveFeatured();

    removeFocusAfterClick();

    buildReceiptBrowser();  //al terminar de servir los datos

};