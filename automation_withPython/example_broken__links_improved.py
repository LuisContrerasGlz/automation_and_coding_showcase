import requests
from selenium import webdriver
from selenium.webdriver.common.by import By


def get_links(driver):
    elements = driver.find_elements(By.TAG_NAME, "a")

    urls = set()

    for element in elements:
        href = element.get_attribute("href")

        if href and href.startswith(("http://", "https://")):
            urls.add(href)

    return urls


def check_url(url):

    try:
        response = requests.get(
            url,
            timeout=10,
            allow_redirects=True
        )

        return response.status_code

    except requests.exceptions.RequestException:
        return None


driver = webdriver.Chrome()

driver.get("https://example.com")

urls = get_links(driver)

broken_urls = []

for url in urls:

    status_code = check_url(url)

    if status_code is None:
        print(f"ERROR: {url}")
        broken_urls.append(url)

    elif status_code >= 400:
        print(f"BROKEN: {url} -> {status_code}")
        broken_urls.append(url)

    else:
        print(f"OK: {url} -> {status_code}")


driver.quit()


print("\nBroken URLs:")

for url in broken_urls:
    print(url)