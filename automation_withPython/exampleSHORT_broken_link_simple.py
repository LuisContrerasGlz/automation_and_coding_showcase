import requests
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

links = driver.find_elements(By.TAG_NAME, "a")

for link in links:
    url = link.get_attribute("href")

    if url:
        response = requests.get(url)

        if response.status_code >= 400:
            print(url)