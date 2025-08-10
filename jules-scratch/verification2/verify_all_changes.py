from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Verify desktop view of index.html
    page.goto("file:///app/index.html")
    page.screenshot(path="jules-scratch/verification2/desktop_view.png")

    # Verify mobile view with sidebar animation
    page.set_viewport_size({"width": 375, "height": 667})
    page.goto("file:///app/index.html")
    page.locator("#mobile-menu-button").click()
    page.wait_for_timeout(500) # wait for animation
    page.screenshot(path="jules-scratch/verification2/mobile_view_animated.png")

    # Verify NitroBit page functionality
    page.goto("file:///app/nitrobit.html")
    connect_button = page.locator("#connect-button")
    connect_button.hover()
    page.mouse.down()
    page.wait_for_timeout(1500)
    page.mouse.up()
    page.wait_for_timeout(2500)
    page.screenshot(path="jules-scratch/verification2/nitrobit_connected.png")

    # Verify translation
    page.goto("file:///app/index.html")
    page.locator(".language-selector > button").click()
    page.locator("[data-lang='hi']").click()
    page.wait_for_timeout(500)
    page.screenshot(path="jules-scratch/verification2/index_hindi.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
