const footerItemEl = document.getElementsByClassName(".footer__item")
const iconsEl = document.getElementsByClassName("icons")
footerItemEl.addEventListener("click", () => {
    console.log("working!!")
})

//+++++++ FOR FUTURE REFERENCE ++++++
/* 
The queryselectorall doesnt seem to be working and that is prefered over any other code because it selects a lot of the elements with the same class.
*/
/* +++++++++++++++++++++++ */

/* 
PSEUDO CODE
-This should only happen when the viewport is below large size.

-When any of the footer__item is clicked this is suppossed to happen:
1: The icon rotate 180deg 
2: The footer__item_ul should be appended as a small div.

-If the footer__item is clicked again all things should be reversed.

*/