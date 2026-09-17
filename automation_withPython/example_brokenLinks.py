import requests
from selenium import webdriver
from selenium.webdriver.common.by import By

# Página que quieres revisar
url = "https://example.com"

driver = webdriver.Chrome()
driver.get(url)

# Obtener todos los elementos <a>
links = driver.find_elements(By.TAG_NAME, "a")

broken_links = []

for link in links:
    href = link.get_attribute("href")

    # Ignorar enlaces vacíos
    if not href:
        continue

    # Ignorar enlaces que no sean HTTP/HTTPS
    if not href.startswith("http"):
        continue

    try:
        response = requests.get(
            href,
            timeout=10,
            allow_redirects=True
        )

        if response.status_code >= 400:
            print(f"BROKEN: {href} -> {response.status_code}")
            broken_links.append((href, response.status_code))
        else:
            print(f"OK: {href} -> {response.status_code}")

    except requests.exceptions.RequestException as error:
        print(f"ERROR: {href} -> {error}")
        broken_links.append((href, str(error)))

driver.quit()

print("\n========== BROKEN LINKS ==========")

for broken in broken_links:
    print(broken)