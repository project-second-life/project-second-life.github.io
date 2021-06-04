const smallGrid = document.querySelector("#small-grid");
const largeGrid = document.querySelector("#large-grid");
const singleGrid = document.querySelector("#single-grid");
const largeGridGraph = largeGrid.getElementsByTagName("g");
const smallGridGraph = smallGrid.getElementsByTagName("g");
const singleGridGraph = singleGrid.getElementsByTagName("g");
const hideItem = document.getElementsByClassName("hide");
const priorItem = document.getElementsByClassName("prior");
const totalItem = document.getElementById("total-item");
const cardItems = document.getElementsByClassName("card-item");

for (i = 0; i < smallGridGraph.length; i++) {
    smallGridGraph[i].style.fill = "white";
}

smallGrid.addEventListener("click", function (e) {
    e.preventDefault();

    for (i = 0; i < smallGridGraph.length; i++) {
        smallGridGraph[i].style.fill = "white";
    }
    for (i = 0; i < largeGridGraph.length; i++) {
        largeGridGraph[i].style.fill = "#707070";
    }
    for (i = 0; i < hideItem.length; i++) {
        hideItem[i].style.display="block";
    }

    for (i = 0; i < priorItem.length; i++) {
        priorItem[i].style.width="24%";
    }
    totalItem.innerHTML = "SHOWING 12 OF 401 ITEMS";
});

largeGrid.addEventListener("click", function (e) {
    e.preventDefault();
    for (i = 0; i < smallGridGraph.length; i++) {
        smallGridGraph[i].style.fill = "#707070";
    }

    for (i = 0; i < singleGridGraph.length; i++) {
        singleGridGraph[i].style.fill = "#707070";
    }
    for (i = 0; i < largeGridGraph.length; i++) {
        largeGridGraph[i].style.fill = "white";
    }
   

    if(screen.width<412){
        totalItem.innerHTML = "SHOWING 12 OF 401 ITEMS";
    }else{
        for (i = 0; i < hideItem.length; i++) {
            hideItem[i].style.display="none";
        }
    
        for (i = 0; i < priorItem.length; i++) {
            priorItem[i].style.width="49%";
        }
        totalItem.innerHTML = "SHOWING 4 OF 401 ITEMS";
    }

});

singleGrid.addEventListener("click", function (e) {
    e.preventDefault();
    for (i = 0; i < largeGridGraph.length; i++) {
        largeGridGraph[i].style.fill = "#707070";
    }
    for (i = 0; i < singleGridGraph.length; i++) {
        singleGridGraph[i].style.fill = "white";
    }
   
    if(screen.width<412){
        totalItem.innerHTML = "SHOWING 6 OF 401 ITEMS";

        for (i = 0; i < cardItems.length; i++) {
            if(i>5)cardItems[i].style.display="none";
            else cardItems[i].style.width="100%";
        }
    }
});


