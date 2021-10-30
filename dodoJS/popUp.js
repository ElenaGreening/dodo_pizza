let btnEnter = document.querySelector('.dodo-button-enter')
    btnEnter.onclick = function () {
        const el = document.querySelector('.popUpEnter')
        if (el.style.display == "block") {
            el.style.display = "none"
        } else {
            (el.style.display = "block"),
                (el.style.position = "absolute")

        }
    }

    let btnBasket = document.querySelector('.dodo-button-basket')
    const popup = document.querySelector('.dodo-EmptyBasket')
    btnBasket.onmouseout = () => hidePopup(popup)
    btnBasket.onmouseover = () => showPopup(popup)
    const showPopup = (popup) => {
        popup.style.display = "flex"
    }
    const hidePopup = (popup) => {
        popup.style.display = "none"
    }
//     let field = document.querySelector('.dodo-body')
//     field.onclick = function () {
//         const headers = document.querySelectorAll('.dodo-desktop-products__header')
//         console.log(headers)
//         Array.from(headers).map(elem => elem.style.color = "red")
//         field.oncontextmenu = function () {
//             const headers = document.querySelectorAll('.dodo-desktop-products__header')
//             console.log(headers)
//             Array.from(headers).map(elem => elem.style.color = "black")
//         }
//     }
//
// }
//
// //     // не работает совсем
//     let field = document.querySelector('.dodo-body')
//     const changeColor = (event) => {
//         const header = document.querySelectorAll('.dodo-desktop-products__header')
//         console.log()
//         if (Array.from(header).every((item) => item.style.color == 'black')) {
//             Array.from(header).map(elem => elem.style.color = "red")
//         } else {
//             Array.from(header).map(elem => elem.style.color = "black")        }
//     }
//     field.addEventListener('click', changeColor)
//
// }

