import { Given, When, Then} from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

// LOGIN STEPS

Given ("user is on sauce-demo page", async () => {
    await browser.url('https://www.saucedemo.com/')
})

When (/^user input username with "(.+)"$/, async (username) => {
    await browser.$('#user-name').setValue(username)

});

When (/^user input password with "(.+)"$/, async (password) => {
    await browser.$('#password').setValue(password)

})

When (/^user click button$/, async () => {
    await (await browser.$('#login-button')).click()
});

Then (/^user should redirect to homepage$/, async () => {
    const pageText = await browser.$('body');
    expect (pageText).toHaveText(expect.stringContaining('Sauce Labs Bike Light'))

});


// ADD TO CART STEPS

Given ("user is on sauce-demo dashboard page", async () => {
    await browser.url('https://www.saucedemo.com/inventory.html')
})

When ('user click add to cart button', async () => {
    await (await browser.$('#add-to-cart-sauce-labs-bike-light')).click()

})

Then ('cart badge should display value', async () => {
    const cartBadge = await browser.$('#shopping_cart_container > a > span');
    expect (cartBadge).toBeDisplayed()
    expect (cartBadge).toHaveText(expect.stringContaining('1'))
})

// REDIRECT TO CART PAGE

Given ("cart get a value", async () => {
    await browser.url('https://www.saucedemo.com/inventory.html')
})

When ('user click shoping cart link', async () => {
    await (await browser.$('#shopping_cart_container > a')).click()

})

When ('user redirect to cart page', async () => {
    await browser.url('https://www.saucedemo.com/cart.html')
    await browser.pause(5000)
});

Then ('item should be in the cart page', async () => {
    const cartItem = await browser.$('//*[@id="cart_contents_container"]/div/div[1]/div[3]')
    expect(cartItem).toBeDisplayed()
})