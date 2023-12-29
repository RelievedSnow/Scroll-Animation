// selects all the elements that has box as class name and stores them in an array
const boxes = document.querySelectorAll('.box');  

// adds event listener when scrolled the checkbox function is called
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes(){
    // animation will be visible till 80% of the window height
    const triggerButton = (window.innerHeight / 5) * 4 

    // the loop iterates the boxes ie.10
    boxes.forEach(box =>{
        // calculates the distance between each box from the top and bottom of the viewport
        const boxTop = box.getBoundingClientRect().top

        // if the top distance is less than the bottom of the screen then add the box else remove it
        if(boxTop < triggerButton){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}