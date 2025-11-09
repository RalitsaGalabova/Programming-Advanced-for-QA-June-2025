const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: false,
    workers: 1,
    timeout: 60000,
    reporter: 'html',

    //settings

    use:{
        baseURL: "http://localhost:3000",
       //Visualization
        headless: true,
        slowMo: 2500,
        viewport: { width: 1800, height: 1000},

        //Debugging
        screenshot:'only-on-failure',
        video: 'retain-on-failure'
    },
    projects:[
        {
            name:'chromium',
            use:{
                ...devices['Desktop Chrome'],
                launchOptions:{
                    slowMo: 2500,
                    args:[
                        '--start-maximized'
                    ]
                }
            }
        },
        // {
        //     name:'firefox',
        //     use:{
        //         ...devices['Desktop Firefox'],
        //         launchOptions:{
        //             slowMo: 500,
        //             args:[
        //                 '--start-maximized'
        //             ]
        //         }
        //     }
        // }
    ],

    webServer: [
        {
            command: 'npm run start', //FE server
             port: 3000,
             timeout: 120 * 1000,
             reuseExistingServer: !process.env.CI,
        },
         {
            command: 'npm run server', //BE server
             port: 3030,
             timeout: 120 * 1000,
             reuseExistingServer: !process.env.CI,
        }
    ]
})