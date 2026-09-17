from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()
driver.get("https://example.com")

# explicit wait: poll until the condition is true, up to 10s, instead of
# a hard-coded time.sleep() that either wastes time or isn't long enough
element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.TAG_NAME, "h1"))
)

print(element.text)

driver.quit()
