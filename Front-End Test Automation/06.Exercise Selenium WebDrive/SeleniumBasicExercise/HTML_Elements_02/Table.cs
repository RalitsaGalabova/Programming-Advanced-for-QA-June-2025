using System.Collections.ObjectModel;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace HTML_Elements_02
{
    [TestFixture]
    public class WorkingWithWebTable
    {
        IWebDriver driver;

        [SetUp]
        public void SetUp()
        {
            driver = new ChromeDriver();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
        }

        [Test]
        public void TestExtractProductInformation()
        {

            driver.Url = "http://practice.bpbonline.com/";


            IWebElement productTable = driver.FindElement(By.XPath("//*[@id='bodyContent']/div/div[2]/table"));


            ReadOnlyCollection<IWebElement> tableRows = productTable.FindElements(By.XPath("//tbody/tr"));


            string path = System.IO.Directory.GetCurrentDirectory() + "/productinformation.csv";


                if (File.Exists(path))
                File.Delete(path);


               foreach (IWebElement trow in tableRows)
            {
                ReadOnlyCollection<IWebElement> tableCols = trow.FindElements(By.XPath("td"));
                foreach (IWebElement tcol in tableCols)
                {

                    String data = tcol.Text;
                    String[] productinfo = data.Split('\n');
                    String printProductinfo = productinfo[0].Trim() + "," + productinfo[1].Trim() + "\n";


                    File.AppendAllText(path, printProductinfo);
                }
            }

            Assert.That(File.Exists(path), Is.True, "CSV file was not created.");
            Assert.That(new FileInfo(path).Length, Is.GreaterThan(0), "CSV file is empty.");
        }

        [TearDown]
        public void TearDown()
        {
            driver.Dispose();
        }
    }
}