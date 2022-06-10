const buttons = document.querySelectorAll(".cart_button");
const unitPrices = [[54.99, 94,99], [74.99, 124.99]];
const shippingPrice = 19;

for (let btn of buttons) {
    btn.addEventListener("click", () => {
        const num = btn.parentElement.querySelector(".cart_num");
        const pricePanel = btn.parentElement.parentElement.querySelector(".price_panel");
        const texts = pricePanel.querySelectorAll("p");
        let actualPrice = parseFloat(texts[1].innerText.slice(1));
        let actualOrigPrice = parseFloat(texts[2].innerText.slice(1));

        let unitPrice = [];

        if (texts[0].innerText === "Vintage Backbag") {
            unitPrice = unitPrices[0]
        } 
        
        else if (texts[0].innerText === "Levi Shoes") {
            unitPrice = unitPrices[1]
        }

        if (btn.classList.contains("add")) {
            num.innerText++;

            texts[1].innerText = `$${Math.round((actualPrice + unitPrice[0]) * 100) / 100}`;
            texts[2].innerText = `$${Math.round((actualOrigPrice + unitPrice[1]) * 100) / 100}`;
        } 
        
        else if (btn.classList.contains("subtract") && btn.parentElement.querySelector(".cart_num").innerText > 1) {
            num.innerText--;

            texts[1].innerText = `$${Math.round((actualPrice - unitPrice[0]) * 100) / 100}`;
            texts[2].innerText = `$${Math.round((actualOrigPrice - unitPrice[1]) * 100) / 100}`;
        }
        
        // Calculate the final price
        let price1 = parseFloat(document.querySelector("#product-price-1").innerText.slice(1));
        let price2 = parseFloat(document.querySelector("#product-price-2").innerText.slice(1));
        let total = price1 + price2 + shippingPrice;
        document.querySelector("#total").innerText = `$${total}`;
    });
}
