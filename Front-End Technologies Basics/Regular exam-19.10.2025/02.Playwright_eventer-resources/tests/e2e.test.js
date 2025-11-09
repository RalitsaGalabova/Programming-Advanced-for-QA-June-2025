const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const host = 'http://localhost:3000';

let browser;
let context;
let page;

let user = {
    email : "",
    password : "123456",
    confirmPass : "123456",
};

let eventName = "";

async function loginUser(page, email, password) {
    await page.goto(host)
    await page.click('text=Login')
    await page.waitForSelector('form')
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(password)
    await page.click('[type="submit"]')
    await page.waitForURL(host + '/')
    await page.waitForSelector('nav >> text=Logout')
}

describe("e2e tests", () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    
    describe("authentication", () => {

        test('Registration with Valid Data', async () => {

            await page.goto(host)
            await page.click('text = Register')
            await page.waitForSelector('form')

            let random = Math.floor(Math.random() * 10000)
            user.email = `ralitsa_${random}@softuni.bg`

            await page.locator('#register-email').fill(user.email)
            await page.locator('#register-password').fill(user.password)
            await page.locator('#repeat-password').fill(user.confirmPass)

            await page.click('[type="submit"]')
            await page.waitForURL(host + '/')

            await expect(page.locator('nav >> text=Logout')).toBeVisible()
            expect(page.url()).toBe(host + '/')

        })

        test('Login with Valid Data', async () => {
            await loginUser(page, user.email, user.password)

            await expect(page.locator('nav >> text=Logout')).toBeVisible()
            expect(page.url()).toBe(host + '/')
        })

        test('Logout from the Application', async () => {
            await loginUser(page, user.email, user.password)

            await page.locator('nav >> text=Logout').click()
            await page.waitForURL(host + '/')

            await expect(page.locator('nav >> text=Login')).toBeVisible()
            expect(page.url()).toBe(host + '/')
        })
        
    });

    describe("navbar", () => {

        test('Navigation for Logged-In User', async () => {
            await loginUser(page, user.email, user.password)

            await expect(page.locator('nav >> text=Events')).toBeVisible()
            await expect(page.locator('nav >> text=Add Event')).toBeVisible()
            await expect(page.locator('nav >> text=Logout')).toBeVisible()

            await expect(page.locator('nav >> text=Login')).toBeHidden()
            await expect(page.locator('nav >> text=Register')).toBeHidden()
        })

        test('Navigation for Guest User', async () => {
            await page.goto(host)

            await expect(page.locator('nav >> text=Events')).toBeVisible()
            await expect(page.locator('nav >> text=Login')).toBeVisible()
            await expect(page.locator('nav >> text=Register')).toBeVisible()

            await expect(page.locator('nav >> text=Logout')).toBeHidden()
            await expect(page.locator('nav >> Add Event')).toBeHidden()
        })
        
    });

    describe("CRUD", () => {

        beforeEach(async () => {
            await loginUser(page, user.email, user.password)
        })

        test('Add an Event', async () => {

            await page.click('text=Add Event')
            await page.waitForSelector('form')

            let random = Math.floor(Math.random() * 100000)
            eventName = `Party_${random}`

            await page.fill('#name', eventName)
            await page.fill('#event-image', '/imagese/party-people.png')
            await page.fill('#event-category', 'fun')
            await page.fill('#event-description', 'Fun party for all ages!')
            await page.fill('#date', '10000')

            await page.click('[type="submit"]')

            await page.waitForURL(host + '/dashboard')
            expect(page.url()).toBe(host + '/dashboard')

            expect(page.locator('div.event p.name', { hasText: eventName }))

        })

        test('Edit an Event', async () => {

            await page.goto('http://localhost:3000/dashboard')

            await page.locator('text=Details').first().click()

            await page.click('#edit-btn')
            await page.waitForSelector('form')

            eventName = eventName + '_edited'

            await page.locator('#name').fill(eventName)

            await page.click('form [type="submit"]')

            expect(page.locator('div.event p.name', { hasText: eventName }))


        })
        test('Delete an Event', async () => {
            await page.goto('http://localhost:3000/dashboard')

            await page.locator('text=Details').first().click()

            page.on('dialog', async (dialog) => {
                expect(dialog.message()).toBe('Are you sure?');
                await dialog.accept();
            });

            await page.click('#delete-btn')

            expect(page.locator('div.event p.name', { hasText: eventName })).toHaveCount(0)
            await page.waitForURL(host + '/dashboard')
            expect(page.url()).toBe(host + '/dashboard')

        })
        
    });
});