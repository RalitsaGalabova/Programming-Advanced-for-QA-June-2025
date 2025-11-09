//const {test, expect} = require('@playwright/test')
import { test, expect } from '@playwright/test'

test('Verify "All books" link is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.waitForSelector("nav.navbar")

    const allBooksLink = await page.$('a[href="/catalog"]')
    const isLinkVisivble = await allBooksLink.isVisible()
    expect(isLinkVisivble).toBe(true)
})

test('Verify That the "Login" Button Is Visible', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.waitForSelector("nav.navbar")

    const loginButton = await page.$('a[href="/login"]')
    const isButtonVisivble = await loginButton.isVisible()
    expect(isButtonVisivble).toBe(true)
})

test('Verify That the "Register" Button Is Visible', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.waitForSelector("nav.navbar")

    const registerButton = await page.$('a[href="/register"]')
    const isButtonVisivble = await registerButton.isVisible()
    expect(isButtonVisivble).toBe(true)
})

test('Verify "All books" link is visible for logged users', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = "rally123@gmail.com"
    let userPassword = "rally123"

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)
    await page.click('input[value="Login"]')

    const allBooksLink = await page.$('a[href="/catalog"]')
    const isLinkVisivble = await allBooksLink.isVisible()
    expect(isLinkVisivble).toBe(true)
})

test('Submit the Form with Valid Credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = "rally123@gmail.com"
    let userPassword = "rally123"

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)
    await page.click('input[value="Login"]')

    await page.$('a[href="/catalog"]')
    const pageURL = page.url();
    expect(pageURL).toBe("http://localhost:3000/catalog")
})

test('Submit the Form with Empty Input Fields', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    await page.click('input[value="Login"]')

    page.on('dialog', async dialog => {
        expect(dialog.type().toContain('alert'))
        expect(dialog.message().toContain("All fields are required!"))
        await dialog.accept();
    })

    await page.$('a[href="/login"]')
    const pageURL = page.url();
    expect(pageURL).toBe("http://localhost:3000/login")
    
})
test('Submit the Form with Empty Email Input Field', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = " "
    let userPassword = "rally123"

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)

    await page.click('input[value="Login"]')

    page.on('dialog', async dialog => {
        expect(dialog.type().toContain('alert'))
        expect(dialog.message().toContain("All fields are required!"))
        await dialog.accept();
    })

    await page.$('a[href="/login"]')
    const pageURL = page.url();
    expect(pageURL).toBe("http://localhost:3000/login")
    
})

test('Submit the Form with Empty Password Input Field', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = "rally123@gmail.com"
    let userPassword = " "

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)

    await page.click('input[value="Login"]')

    page.on('dialog', async dialog => {
        expect(dialog.type().toContain('alert'))
        expect(dialog.message().toContain("All fields are required!"))
        await dialog.accept();
    })

    await page.$('a[href="/login"]')
    const pageURL = page.url();
    expect(pageURL).toBe("http://localhost:3000/login")
    
})

test('Add book with correct data', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = "rally123@gmail.com"
    let userPassword = "rally123"

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)
    await page.click('input[value="Login"]')

    await page.click('a[href="/create"]')
    await page.waitForSelector('#create-page')

    await page.fill('#title', 'Test Book')
    await page.fill('#description', 'Test description')
    await page.fill('#image', 'example url')
    await page.selectOption('#type', 'Fiction')

    await page.click('input[value="Add Book"]')

    await page.waitForURL("http://localhost:3000/catalog")

    const pageURL = page.url()
    expect(pageURL).toBe("http://localhost:3000/catalog")

})

test('Submit the Form with Empty Title Field', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = "rally123@gmail.com"
    let userPassword = "rally123"

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)
    await page.click('input[value="Login"]')
    
    await page.click('a[href="/create"]')
    await page.waitForSelector('#create-page')

    await page.fill('#title', ' ')
    await page.fill('#description', 'Test description')
    await page.fill('#image', 'example url')
    await page.selectOption('#type', 'Fiction')

    await page.click('input[value="Add Book"]')

    page.on('dialog', async dialog => {
        expect(dialog.type().toContain('alert'))
        expect(dialog.message().toContain("All fields are required!"))
        await dialog.accept();
    })

    await page.$('a[href="create"]')
    const pageURL = page.url()
    expect(pageURL).toBe("http://localhost:3000/create")

})
test('Verify That Logged-In User Sees Details Button and Button Works Correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/login')

    let userEmail = "rally123@gmail.com"
    let userPassword = "rally123"

    await page.fill('#email', userEmail)
    await page.fill("#password", userPassword)
    await page.click('input[value="Login"]')

    page.waitForURL("http://localhost:3000/catalog")
    await page.click('a[href="/catalog"]')

    await page.waitForSelector(".otherBooks")
    await page.click('.otherBooks a.button')
    
    await page.waitForSelector('.book-information')
    const detailPage = await page.textContent(".book-information h3")
    expect(detailPage).toBe("Test Book")
})