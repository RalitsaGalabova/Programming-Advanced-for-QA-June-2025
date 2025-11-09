const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require("@playwright/test")
const { chromium } = require('playwright')

const host = 'http://localhost:3000'

let browser;
let context;
let page;

let user = {
    email: '',
    password: '123456',
    confirmPassword: '123456'
}

let game = {
    title: '',
    category: '',
    id: '',
    maxLevel: '99',
    imageUrl: 'https://jpeg.org/images/jpeg-home.jpeg',
    summary: 'This is an amazing game'
}

describe('e2e tests', () => {
    beforeAll(async () => {
        browser = await chromium.launch()
    })

    afterAll(async () => {
        await browser.close()
    })

    beforeEach(async () => {
        context = await browser.newContext()
        page = await context.newPage()
    })

    afterEach(async () => {
        await context.close()
        await page.close()
    })

    describe('authentication tests', () => {
        test('Register with Valid Data', async () => {

            await page.goto(host)

            await page.click('text=Register')

            await page.waitForSelector('#register')

            let random = Math.floor(Math.random() * 1000)
            user.email = `softuni_${random}@abv.bg`

            await page.locator('#email').fill(user.email)
            await page.locator('#register-password').fill(user.password)
            await page.locator('#confirm-password').fill(user.confirmPassword)


            await page.click('[type="submit"]')
            await expect(page.locator('nav >> text=Logout')).toBeVisible()
            expect(page.url()).toBe(host + '/')

        })

        test('Register with Empty Fields', async () => {

            await page.goto(host)
            await page.click('text=Register')
            await page.waitForSelector('#register')

            await page.locator('#email').fill('')
            await page.locator('#register-password').fill('')
            await page.locator('#confirm-password').fill('')


            await page.click('[type="submit"]')


            page.on('dialog', async dialog => {
                expect(dialog.type().toContain('alert'))
                expect(dialog.message().toContain("No empty fields are allowed and confirm password has to match password!"))
                await dialog.accept();
            })

            await page.$('a[href="/register"]')
            const pageURL = page.url();
            expect(pageURL).toBe("http://localhost:3000/register")

        })

        test('Login with Valid Credentials', async () => {

            await page.goto(host)
            await page.click('text=Login')
            await page.waitForSelector('#login')

            await page.locator('#email').fill(user.email)
            await page.locator('#login-password').fill(user.password)

            await page.click('[type="submit"]')

            await expect(page.locator('nav >> text=Logout')).toBeVisible()
            expect(page.url()).toBe(host + '/')

        })

        test('Login with Empty Fields', async () => {

            await page.goto(host)
            await page.click('text=Login')
            await page.waitForSelector('#login')

            await page.locator('#email').fill('')
            await page.locator('#login-password').fill('')

            const dialogPromise = page.waitForEvent('dialog');

            await page.click('[type="submit"]');

            const dialog = await dialogPromise;
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain("Unable to log in!");
            await dialog.accept();


            expect(page.url()).toBe(host + '/login')

        })

    })

    describe('navbar tests', () => {
        test('Navigation Bar for Logged-In Use', async () => {
            await page.goto(host)

            await page.click('text=Login')

            await page.waitForSelector('#login')

            await page.locator('#email').fill(user.email)
            await page.locator('#login-password').fill(user.password)

            await page.click('[type="submit"]')

            await expect(page.locator('nav >> text=All games')).toBeVisible()
            await expect(page.locator('nav >> text=Create Game')).toBeVisible()
            await expect(page.locator('nav >> text=Logout')).toBeVisible()

        })

        test('Navigation Bar for Guest User', async () => {
            await page.goto(host)


            await expect(page.locator('nav >> text=All games')).toBeVisible()
            await expect(page.locator('nav >> text=Login')).toBeVisible()
            await expect(page.locator('nav >> text=Register')).toBeVisible()

        })
    })

    describe('CRUD', () => {
        beforeEach(async () => {
            await page.goto(host)
            await page.click('text=Login')

            await page.waitForSelector('#login')

            await page.locator('#email').fill(user.email)
            await page.locator('#login-password').fill(user.password)

            await Promise.all([
                page.waitForURL(host + '/'),
                page.click('[type="submit"]')
            ])
        })

        test('create does not work with empty fields', async () => {
            await page.click('text=Create Game')
            await page.waitForSelector('#create')


            await page.click('[type="submit"]')

            expect(page.url()).toBe(host + '/create')

        })

        test('create game with vlaid data successfully works', async () => {
            await page.click('text=Create Game')
            await page.waitForSelector('#create')

            let random = Math.floor(Math.random() * 1000)

            game.title = `Game title number ${random}`
            game.category = `Game category ${random}`

            await page.fill('#title', game.title)
            await page.fill('#category', game.category)
            await page.fill('#maxLevel', game.maxLevel)
            await page.fill('#imageUrl', game.imageUrl)
            await page.fill('#summary', game.summary)


            await Promise.all([
                page.waitForURL(host + '/'),
                page.click('[type="submit"]')
            ])

            await expect(page.locator('.game h3', { hasText: game.title })).toHaveCount(1)
            expect

            expect(page.url()).toBe(host + '/')

        })
    })
    describe('Home page', () => {
        test('Show home page', async () => {
            await page.goto(host)

            await expect(page.locator('.welcome-message h2')).toHaveText('ALL new games are')
            await expect(page.locator('.welcome-message h3')).toHaveText('Only in GamesPlay')
            await expect(page.locator('#home-page h1')).toHaveText('Latest Games')
        })
    })
})

