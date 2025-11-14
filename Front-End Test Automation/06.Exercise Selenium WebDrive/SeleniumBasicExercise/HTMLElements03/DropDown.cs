using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System.Collections.ObjectModel;
using static System.Net.Mime.MediaTypeNames;
using System.Xml.Linq;

namespace HTMLElements03
{
    [TestFixture]
    public class WorkingWithDropDown
    {
        private IWebDriver driver;

        [SetUp]
        public void SetUp()
        {
            driver = new ChromeDriver();

            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
        }

        [Test]
        public void TestSelectFromDropDown()
        {
            driver.Url = "http://practice.bpbonline.com/";

            string path = Directory.GetCurrentDirectory() + "/manufacturer.txt";

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            SelectElement manufDropdown = new SelectElement(driver.FindElement(By.Name("manufacturers_id")));

            IList<IWebElement> allManufacturers = manufDropdown.Options;

            List<string> manufNames = new List<string>();

            foreach (IWebElement manufName in allManufacturers)
            {
                manufNames.Add(manufName.Text);
            }

            manufNames.RemoveAt(0);

            foreach (string mname in manufNames)
            {
                manufDropdown.SelectByText(mname);
                manufDropdown = new SelectElement(driver.FindElement(By.XPath("//select[@name='manufacturers_id']")));

                if (driver.PageSource.Contains("There are no products available in this category."))
                {
                    File.AppendAllText(path, $"The manufacturer {mname} has no products\n");
                }
                else
                {

                    IWebElement productTable = driver.FindElement(By.ClassName("productListingData"));

                    File.AppendAllText(path, $"\n\nThe manufacturer {mname} products are listed--\n");
                    ReadOnlyCollection<IWebElement> rows = productTable.FindElements(By.XPath("//tbody/tr"));


                    foreach (IWebElement row in rows)
                    {
                        File.AppendAllText(path, row.Text + "\n");
                    }
                }
            }

            driver.Dispose();
        }
    }
}