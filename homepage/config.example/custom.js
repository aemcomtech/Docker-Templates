/* ==============================================================================
   AUTHOR:  aemcomtech.au
   VERSION: 1.2026.02.10.203000
   PURPOSE: DOM manipulation for Glassmorphism & Dynamic Weather.
   NOTE:    Hooks into React's Virtual DOM via MutationObserver.
   ============================================================================== */

// --- CONFIGURATION ---
const CONFIG = {
    fonts: {
        id: 'custom-google-fonts',
        url: 'https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Bitcount+Grid+Single:wght@100..900&family=Comforter+Brush&family=Grape+Nuts&family=Londrina+Shadow&display=swap'
    },
    selectors: {
        // Targets cards in standard layouts
        cards: '.layout-column > div > a, .grid > div > a',
        // Targets text elements within cards
        cardTitles: '.font-bold, .text-base, .truncate',
        // Targets OpenWeatherMap widget text
        weatherText: '.information-widget-openweathermap span, .information-widget-openweathermap div',
        // Targets the icon container
        weatherRow: '.flex'
    },
    weather: {
        // Regex for temperature (supports decimals/negatives)
        tempRegex: /(-?\d+(\.\d+)?)°C/,
        // Temperature thresholds (Celsius)
        colors: {
            freezing: { max: 2, color: '#ffffff' },      // < 2°C
            cold:     { max: 21, color: '#38bdf8' },     // 2°C - 20.9°C
            perfect:  { max: 28, color: '#4ade80' },     // 21°C - 27.9°C
            warm:     { max: 36, color: '#fb923c' },     // 28°C - 35.9°C
            hot:      { color: '#f87171' }               // 36°C+
        }
    }
};

console.log("AEM ComTech Homepage: Custom JS Loaded");

/**
 * 1. FORCE LOAD FONTS
 * Bypasses potential Rocket Loader blocks.
 */
function loadGoogleFonts() {
    if (!document.getElementById(CONFIG.fonts.id)) {
        const link = document.createElement('link');
        link.id = CONFIG.fonts.id;
        link.rel = 'stylesheet';
        link.href = CONFIG.fonts.url;
        document.head.appendChild(link);
    }
}

/**
 * 2. CLASS INJECTOR
 * Adds 'ServiceCard' class to generic Tailwind divs for CSS targeting.
 */
function injectCustomClasses() {
    const cards = document.querySelectorAll(CONFIG.selectors.cards);

    cards.forEach(card => {
        card.classList.add('ServiceCard');
        const title = card.querySelector(CONFIG.selectors.cardTitles);
        if (title) {
            title.classList.add('service-title-fix');
        }
    });
}

/**
 * 3. DYNAMIC WEATHER COLORS
 * Recolors weather icons based on temperature severity.
 */
function applyDynamicWeatherColors() {
    const textElements = document.querySelectorAll(CONFIG.selectors.weatherText);
    const { tempRegex, colors } = CONFIG.weather;

    textElements.forEach(el => {
        const text = el.textContent;
        const tempMatch = text.match(tempRegex);

        if (tempMatch) {
            const temp = parseFloat(tempMatch[1]);
            let color = colors.hot.color;

            if (temp < colors.freezing.max) color = colors.freezing.color;
            else if (temp < colors.cold.max) color = colors.cold.color;
            else if (temp < colors.perfect.max) color = colors.perfect.color;
            else if (temp < colors.warm.max) color = colors.warm.color;

            // Apply color to the icon in the same row
            const parentRow = el.closest(CONFIG.selectors.weatherRow);
            if (parentRow) {
                const icon = parentRow.querySelector('svg, .tabler-icon');
                if (icon) {
                    icon.style.color = color;
                    icon.style.filter = `drop-shadow(0 0 5px ${color})`;
                    icon.style.transition = 'color 0.5s ease, filter 0.5s ease';
                }
            }
        }
    });
}

/**
 * 4. MASTER UPDATE LOOP
 * Handles React's Virtual DOM updates via MutationObserver.
 */
let timeout;
function updateDashboard() {
    loadGoogleFonts();
    
    // Debounce to prevent flickering
    clearTimeout(timeout);
    
    // 200ms delay ensures React has finished painting
    timeout = setTimeout(() => {
        injectCustomClasses();
        applyDynamicWeatherColors();
    }, 200);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', updateDashboard);

// Observe body for changes (Navigation, Pings, API updates)
const observer = new MutationObserver(updateDashboard);
observer.observe(document.body, { childList: true, subtree: true });