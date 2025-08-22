import os
from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Get the absolute path to the HTML files
    base_path = os.path.abspath(os.path.dirname(__name__))
    index_path = f"file://{os.path.join(base_path, 'index.html')}"

    # Navigate to the index page
    page.goto(index_path)

    # Find the "Field Reports" section and then the first "View" link within it
    field_reports_section = page.locator("#field-reports-division")
    view_link = field_reports_section.get_by_role("link", name="View").first
    view_link.click()

    # Wait for the new page to load and verify the title
    expect(page).to_have_title("KrishiMitra - Field Details")

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
