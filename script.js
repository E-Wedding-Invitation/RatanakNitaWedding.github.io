// =========================================================
// LOADING SCREEN - Hide after animation completes
// =========================================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingScreenMobile = document.getElementById('loading-screen-mobile');
    
    // Determine which loading screen to use based on screen size
    const isMobile = window.innerWidth <= 450;
    const activeScreen = isMobile ? loadingScreenMobile : loadingScreen;
    
    // Different durations for PC (0.5s) and mobile (3.5s)
    const duration = isMobile ? 3500 : 500;
    
    setTimeout(() => {
        if (activeScreen) {
            activeScreen.classList.add('fade-out');
            setTimeout(() => {
                activeScreen.style.display = 'none';
            }, 300);
        }
    }, duration);
});


// =========================================================
// GLOBAL TRANSLATIONS
// =========================================================
const translations = {
    pageTitle: {
        km: 'សិរីមង្គលអាពាហ៍ពិពាហ៍ | ជិន សុវណ្ណរតនៈ​  & គឹម ច័ន្ទដាហ្សូនីតា',
        en: 'Wedding Ceremony | Chin Sovannrotanak & Kim Chandajonita'
    },
    entranceRespect: { km: 'សូមគោរពអញ្ជើញ', en: 'Respectfully invite' },
    entranceCeremony: { km: 'សិរីមង្គលអាពាហ៍ពិពាហ៍', en: 'Auspicious Wedding Ceremony' },
    enterInvitation: { km: 'បើកសំបុត្រអាពាហ៍ពិពាហ៍', en: 'Open the invitation' },
    mainCeremony: { km: 'សិរីមង្គលអាពាហ៍ពិពាហ៍', en: 'Auspicious Wedding Ceremony' },
    parentTitleFemale: { km: 'លោកស្រី ជិន សុភ័ក្រនារី', en: 'Mrs. CHIN Sophakneary' },
    parentNamePlaceholder1: { km: 'ជិន សុភ័ក្រនារី', en: 'CHIN Sophakneary' },
    parentNamePlaceholder2: { km: 'គឹម សាវឿន', en: 'KIM Savoeun' },
    parentNamePlaceholder3: { km: 'សំ​ សុផារី', en: 'SAM Sophary' },
    parentTitle2: { km: 'ឯកឧត្តម គឹម សាវឿន', en: 'H.E. KIM Savoeun' },
    parentTitle3: { km: 'លោកជំទាវ សំ​ សុផារី', en: 'H.E. SAM Sophary' },
    honorInvite: { km: 'មានកិត្តិយសសូមគោរពអញ្ជើញ', en: 'Our great honor to respectfully invite' }, //////
    invitationBody: {
        km: 'សម្ដេច ទ្រង់ ឯកឧត្តម លោកជំទាវ ​លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត ចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដីជ័យមង្គលក្នុងពិធីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ',
        en: 'We are deeply honored to have Samdech, His Excellency, Lok Chumteav, Lok Oknha, Neak Oknha, Oknha, ladies and gentlemen, and our cherished friends join us as officiants and distinguished guests to bless our son and daughter with a life filled with happiness, health, and everlasting love.'
    },
    groomLabel: { km: 'កូនប្រុសនាម', en: 'Groom' },
    brideLabel: { km: 'កូនស្រីនាម', en: 'Bride' },
    brideName: { km: 'គឹម ', en: 'Kim ' },
    brideName1: { km: 'គឹម ច័ន្ទដាហ្សូនីតា', en: 'Kim Chandajonita' },//////
    groomName: { km: 'ជិន', en: '' }, 
    groomName1: { km: 'ជិន សុវណ្ណរតនៈ', en: 'Chin Sovanrotanak' },//////
    takingPlace: { km: 'ដែលប្រព្រឹត្តទៅនៅ', en: 'which will held on' },
    weddingDate: { km: 'ថ្ងៃសៅរ៍ - ២៨ - កុម្ភៈ - ២០២៦', en: 'Saturday - 28 - February - 2026' },
    venueName: { km: 'ដឹព្រេមៀ សេនធ័រ សែនសុខ (អាគារ I)', en: 'At The Premier Center Sen Sok (Building I)' },
    startTime: { km: 'ចាប់ពីម៉ោង ០៦:៣០​ ព្រឹក តទៅ​!', en: 'Starting from 6:30 am' },
    locationTitle: { km: 'ទីតាំងកម្មវិធី', en: 'Wedding Venue' },
    scanMap: { km: 'ស្កេនទីនេះដើម្បីមើលទីតាំង', en: 'Scan to check the map!' },
    viewMap: { km: 'មើលទីផែនទី', en: 'View Map' },
    agendaTitle: { km: 'កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍', en: 'Wedding Ceremony' },
    agendaDateMorning: { km: 'ព្រឹក និងរសៀល (អាគារ I)', en: 'Morning & Afternoon (Building I)' },
    agendaPeriodMorning: { km: 'ពេលព្រឹក ( អាគារ I)', en: 'Morning (Building I)' },
    agendaPeriodEvening: { km: 'ពេលល្ងាច ( អាគារ I)', en: 'Evening (Building I)' },
    time6am: { km: '៦:០០នាទីព្រឹក', en: '6:00 AM' },
    time7am: { km: '៧:០០នាទីព្រឹក', en: '7:00 AM' },
    time8am: { km: '៨:០០នាទីព្រឹក', en: '8:00 AM' },
    time830am: { km: '៨:៣០នាទីព្រឹក', en: '8:30 AM' },
    time9am: { km: '៩:០០នាទីព្រឹក', en: '9:00 AM' },
    time1030am: { km: '១០:៣០នាទីព្រឹក', en: '10:30 AM' },
    time12noon: { km: '១២:០០ថ្ងៃត្រង់', en: '12:00 PM' },
    time5pm: { km: '១៧:០០នាទីល្ងាច', en: '5:00 PM' },
    time6pm: { km: '៦:០០នាទីល្ងាច', en: '6:00 PM' },
    ceremonyProcession: { km: 'ពិធីក្រុងពាលី', en: 'Processional Ceremony' },
    ceremonyBlessing: { km: 'ពិធីហែជំនូន (កំណត់)', en: 'Groom\'s Procession (Hai Goan Gomloh)' },
    ceremonyHairCut: { km: 'ពីធីរៀបរាប់ផ្លែឈើ និងបំពាក់ចិញ្ជៀន', en: 'Fruit Arrangement & Ring Ceremony' },
    ceremonyAncestor: { km: 'ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត', en: 'Monk\'s Blessing Ceremony' },
    ceremonySevenRotations: { km: 'ពិធីកាត់សក់បង្កក់សិរី', en: 'Hair Cutting Ceremony (Gaat Sah)' },
    ceremonyStringTying: { km: 'ពិធីសំពះពេលា បើកវាំងនន បាចផ្កាស្លា បង្វិលពពិល ពិធីគួចចំណងដៃព្រះថោងតោងស្បៃនាងនាគ', en: 'Sompeas Pelea Ceremony, Unveiling Ceremony, Areca Flower Scattering Ceremony (Baach Phka Sla), Passing of Blessings (Bongvul Prompel), Hand-Tying, Preah Thong and Neang Neak Ceremony' },
    ceremonyLunch: { km: 'អញ្ជើញភ្ញៀវពិសារអាហារថ្ងៃត្រង់', en: 'Guests enjoy the lunch banquet.' },
    ceremonyGuestReception: { km: 'អញ្ជើញភ្ញៀវពិសារអាហារពេលល្ងាច', en: 'Gala-Dinner and After Party Celebration' },
    countdownTitle: { km: 'រាប់ថយក្រោយទៅថ្ងៃមង្គល', en: 'Countdown to the big day' },
    labelDays: { km: 'ថ្ងៃ', en: 'Days' },
    labelHours: { km: 'ម៉ោង', en: 'Hours' },
    labelMinutes: { km: 'នាទី', en: 'Minutes' },
    labelSeconds: { km: 'វិនាទី', en: 'Seconds' },
    weddingDateText: { km: 'ថ្ងៃទី ២៨ ខែ កុម្ភៈ ឆ្នាំ ២០២៦', en: '28 February 2026' },
    calendarButtonText: { km: 'កត់ទុកក្នុងប្រតិទិន', en: 'Save to calendar' },
    albumTitle: { km: 'វិចិត្រសាល', en: 'Gallery' },  //////
    wishTitle: { km: 'សារជូនពរដល់គូស្វាមីភរិយាថ្មី', en: 'Write a wish to a new married couple' },
    labelGuestName: { km: 'ឈ្មោះរបស់អ្នក', en: 'Your name' },
    placeholderGuestName: { km: 'ឈ្មោះរបស់អ្នក', en: 'Your Name' },
    labelWishMessage: { km: 'សារជូនពរ', en: 'Wish message' },
    placeholderWishMessage: { km: 'សរសេរសារ...', en: 'Write your message...' },
    submitWish: { km: 'ផ្ញើសារជូនពរ', en: 'Send wish' },
    wishesSubtitle: { km: 'សារជូនពរ', en: 'Wishing' },
    seeMore: { km: 'មើលសារបន្ថែម', en: 'See more wishes' },
    countdownComplete: { km: 'ដល់ថ្ងៃមង្គលហើយ!', en: "It's wedding day!" },
    loadingWishes: { km: 'កំពុងទាញយក...', en: 'Loading...' },
    noWishes: { km: 'មិនមានសារលឹក', en: 'No messages yet.' },
    offline: { km: 'មិនមានការតភ្ជាប់អ៊ីនធឺណេត', en: 'No internet connection.' },
    sendingWish: { km: 'កំពុងផ្ញើ...', en: 'Sending...' },
    emptyMessageAlert: { km: 'សូមវាយបញ្ចូលសារ', en: 'Please enter a message' },
    rsvpTitle: { km: 'បញ្ជាក់ការចូលរួម', en: 'Confirm Your Attendance' },
    rsvpYes: { km: 'ចូលរួម', en: 'Attend' },
    rsvpNo: { km: 'មិនបានចូលរួម', en: 'Unable to attend' },
    appreciationTitle: { km: 'សេចក្ដីថ្លែងអំណរគុណ និងសូមអភ័យទោស', en: 'Thank You & Our Sincere Apology' },
    appreciationMessage: { km: 'យើងខ្ញុំជាមាតាបិតា កូនទាំងពីរ សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តមរបស់​ សម្ដេច ទ្រង់ ឯកឧត្តម​ លោកជំទាវ លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោក​​ លោកស្រី អ្នកនាងកញ្ញា ដែលបានអញ្ជើញចូលរួមជាកិត្តិយសក្នុងពិធីសិរីសួស្ដីអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់យើងខ្ញុំនាពេលខាងមុខនេះ។​ យើងខ្ញុំសូមការខន្តីអភ័យទោស ដែលពុំបានជូនលិខិតអញ្ជើញនេះដោយផ្ទាល់។​ ដោយគាវរកិច្ចដ៏ខ្ពង់ខ្ពស់ពីយើងខ្ញុំ​។​', en: 'We, the parents of the bride and groom, would like to express our deepest gratitude and heartfelt appreciation for the honorable presence of Samdech, His Excellency, Lok Chumteav, Lok Neak Oknha, Neak Oknha, Lok Oknha, Oknha, ladies and gentlemen, who have graciously attended and honored the upcoming wedding ceremony of our beloved son and daughter. We sincerely apologize for not being able to deliver this invitation to you in person. With our highest respects.' }
};

let currentLanguage = 'km';

const t = (key, fallback = '') => translations[key]?.[currentLanguage] || fallback;

// =========================================================
// ENGLISH FONT CONFIGURATION - EASY TO CUSTOMIZE
// =========================================================
const englishFontConfig = {
    // Keys with Kugile_Demo font (special styling) - MODIFY FONT SIZES HERE
    special: {
        keys: ['honorInvite', 'brideName', 'groomName', 'albumTitle', 'mainCeremony', 'appreciationTitle','agendaTitle',
             'wishTitle', 'countdownTitle', 'wishesSubtitle','groomName1','groomName', 'brideName1','brideName'],
        fontFamily: "'EnglishSpecial', sans-serif",
        fontSize: {
            'honorInvite': '1.1em',      // Change this to adjust font size
            'brideName': '1.2em',        // Change this to adjust font size
            'groomName': '1.4em',        // Change this to adjust font size
            'albumTitle': '2em',       // Change this to adjust font size
            'mainCeremony': '1.1em' ,    // Change this to adjust font size
            'appreciationTitle': '0.9em',   // Change this to adjust font size
            'agendaTitle': '1.2em'   ,    // Change this to adjust font size
            'wishTitle': '0.9em',      // Change this to adjust font size
            'countdownTitle': '1.2em',     // Change this to adjust font size
            'wishesSubtitle': '1.2em',     // Change this to adjust font size
            'groomName1': '1.2em' ,        // Change this to adjust font size
            'groomName': '1.2em' ,         // Change this to adjust font size
            'brideName1': '1.2em' ,        // Change this to adjust font size
            'brideName': '1.2em'           // Change this to adjust font size
            
            

        }
    },
    // Standard Crimson-Roman font - MODIFY FONT SIZE HERE
    standard: {
        fontFamily: "'EnglishStandard', sans-serif",
        fontSize: {
            'invitationBody': '1em',      // Body text
            'parentTitleFemale': '0.8em',    // Parent title
            'parentNamePlaceholder1': '0.9em',  // Parent name
            'parentTitle2': '0.8em',         // Parent title
            'parentNamePlaceholder2': '0.9em',  // Parent name
            'parentTitle3': '0.8em',         // Parent title
            'parentNamePlaceholder3': '0.9em',  // Parent name
            'takingPlace': '0.9em',          // Taking place text
            'weddingDate': '0.95em',         // Wedding date
            'venueName': '0.85em',           // Venue name
            'startTime': '0.9em',            // Start time
            'locationTitle': '1em',          // Location title
            'scanMap': '0.8em',              // Scan map text
            'viewMap': '0.85em',             // View map button
            'agendaDate': '0.8em',           // Agenda date
            'agendaPeriod': '0.85em',        // Agenda period
            'time6am': '0.9em',              // Time display
            'time6pm': '0.9em',              // Time display
            'ceremonyProcession': '0.9em',  // Ceremony items
            'ceremonyBlessing': '0.9em',
            'ceremonyHairCut': '0.9em',
            'ceremonyAncestor': '0.9em',
            'ceremonySevenRotations': '0.9em',
            'ceremonyStringTying': '0.9em',
            'ceremonyLunch': '0.9em',
            'ceremonyGuestReception': '0.9em',
            'labelDays': '0.8em',            // Countdown labels
            'labelHours': '0.8em',
            'labelMinutes': '0.8em',
            'labelSeconds': '0.8em',
            'weddingDateText': '0.8em',      // Wedding date text
            'calendarButtonText': '0.8em',   // Calendar button
            'labelGuestName': '0.85em',      // Wish form labels
            'placeholderGuestName': '0.85em',
            'labelWishMessage': '0.85em',
            'placeholderWishMessage': '0.85em',
            'submitWish': '0.85em',          // Submit button
            'seeMore': '0.8em',              // See more button
            'countdownComplete': '1em',      // Countdown complete
            'loadingWishes': '0.8em',        // Loading text
            'noWishes': '0.85em',            // No wishes text
            'offline': '0.85em',             // Offline message
            'sendingWish': '0.85em',         // Sending message
            'emptyMessageAlert': '0.85em',   // Alert message
            'appreciationMessage': '0.9em',  // Appreciation text
            'agendaPeriodMorning': '0.9em', // Agenda period morning
            'agendaPeriodEvening': '0.9em', // Agenda period evening
            'appreciationMessage': '1em'  // Appreciation text
        },
        defaultFontSize: '0.9em'  // Default size for any key not listed above
    },
    
};

const applyLanguage = (lang = 'km') => {
    currentLanguage = lang;
    document.documentElement.setAttribute('lang', 'km');

    const title = translations.pageTitle?.['km'];
    if (title) document.title = title;

    // Always display Khmer with English translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const kmValue = translations[key]?.['km'];
        const enValue = translations[key]?.['en'];
        
        if (kmValue === undefined) return;

        // Display Khmer text
        el.textContent = kmValue;
        
        // Store English translation in a data attribute for display via CSS
        if (enValue) {
            el.setAttribute('data-i18n-en', enValue);
        }
        
        // Apply font styles for Khmer
        el.style.fontFamily = "";
        el.style.fontSize = "";
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const placeholderKey = el.dataset.i18nPlaceholder;
        const value = translations[placeholderKey]?.['km'];
        if (value !== undefined) {
            el.setAttribute('placeholder', value);
        }
    });
};

// =========================================================
// URL PERSONALIZATION LOGIC
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // WISHES/COMMENTS SECTION
    // =========================================================
    const wishesList = document.getElementById('wishesList');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDzcd9yZPHjWj8u_2hNwm4tJDnyvGkX1Bik-jSb3OBx26Q_WkxMACDWjXJLvtdrbZu/exec';

    const savedLanguage = localStorage.getItem('preferredLanguage') || 'km';
    applyLanguage(savedLanguage);
    
    // Load from Google Sheets (online storage)
    let allWishes = [];
    let currentLimit = 5;
    let isLoading = false;
    
    // Fetch all wishes from Google Sheets
    async function loadAllWishesFromSheets() {
        if (isLoading) return;
        isLoading = true;
        wishesList.innerHTML = `<p style="color: #f1d577;">${t('loadingWishes', 'Loading...')}</p>`;
        
        try {
            console.log('Fetching from:', SCRIPT_URL);
            const response = await fetch(SCRIPT_URL, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            });
            
            console.log('Response status:', response.status);
            if (!response.ok) {
                console.error('Response status:', response.status);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Raw data from API:', data);
            console.log('Data type:', typeof data);
            console.log('Is array:', Array.isArray(data));
            console.log('Data length:', data?.length);
            
            // Data is returned as an array directly from doGet
            if (Array.isArray(data) && data.length > 0) {
                console.log('Processing wishes...');
                console.log('First item structure:', data[0]);
                
                // Filter out blank/empty messages with better validation
                allWishes = data.filter(wish => {
                    // Check if wish object exists
                    if (!wish) return false;
                    
                    // Get message - handle different possible formats
                    const message = wish.message || wish.Message || wish.msg || '';
                    const name = wish.name || wish.Name || wish.guestName || '';
                    
                    // Convert to string if needed and check if not empty
                    const messageStr = String(message).trim();
                    const nameStr = String(name).trim();
                    
                    return messageStr.length > 0 && nameStr.length > 0;
                }).map(wish => ({
                    // Normalize the data structure
                    name: String(wish.name || wish.Name || wish.guestName || ''),
                    message: String(wish.message || wish.Message || wish.msg || ''),
                    date: String(wish.date || wish.Date || new Date().toLocaleString('km-KH') || '')
                }));
                
                console.log('Filtered wishes count:', allWishes.length);
                console.log('All wishes:', allWishes);
                currentLimit = 5;
                renderWishes();
                console.log('Wishes rendered successfully');
            } else {
                console.log('No API wishes, checking localStorage...');
                // Fallback to localStorage wishes if API returns empty
                const localWishes = JSON.parse(localStorage.getItem('localWishes') || '[]');
                if (localWishes.length > 0) {
                    console.log('Found local wishes:', localWishes);
                    allWishes = localWishes;
                    currentLimit = 5;
                    renderWishes();
                } else {
                    wishesList.innerHTML = `<p style="color: #f1d577;">${t('noWishes', 'No messages yet.')}</p>`;
                }
            }
        } catch (error) {
            console.error('Error loading wishes:', error);
            console.error('Error message:', error.message);
            console.error('SCRIPT_URL:', SCRIPT_URL);
            // Show "no messages" instead of error to avoid confusion
            wishesList.innerHTML = `<p style="color: #f1d577;">Debug Info: ${error.message}<br>Check console (F12) for details</p>`;
        }
        isLoading = false;
    }
    
    // Load wishes on page load
    loadAllWishesFromSheets();

    // --- The Intersection Observer ---
    const wishObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add class to fade in
                entry.target.classList.add('show');
            } else {
                // Remove class to fade out when scrolling away
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    function renderWishes() {
        wishesList.innerHTML = ''; 
        const visibleWishes = allWishes.slice(0, currentLimit);

        visibleWishes.forEach((wish) => {
            const card = document.createElement('div');
            card.className = 'wish-card';
            card.innerHTML = `
                <span class="wish-guest-name">${wish.name}</span>
                <div class="wish-text-content">${wish.message}</div>
                <span class="wish-date-time">${wish.date}</span>
            `;
            
            wishesList.appendChild(card);
            
            // Start watching this specific card for scroll
            wishObserver.observe(card);
        });

        if (allWishes.length > currentLimit) {
            seeMoreBtn.style.display = 'block';
        } else {
            seeMoreBtn.style.display = 'none';
        }
    }

    // Function to add only the new wish card without re-rendering everything
    function addNewWishCard(wish) {
        const card = document.createElement('div');
        card.className = 'wish-card new-wish';
        card.innerHTML = `
            <span class="wish-guest-name">${wish.name}</span>
            <div class="wish-text-content">${wish.message}</div>
            <span class="wish-date-time">${wish.date}</span>
        `;
        
        // Insert at the top of the list
        wishesList.insertBefore(card, wishesList.firstChild);
        
        // Watch this card for scroll fade-in
        wishObserver.observe(card);
        
        // Add fade-in effect
        setTimeout(() => {
            card.classList.add('show');
        }, 10);
    }

    // --- "See more wish" Button ---
    seeMoreBtn.addEventListener('click', () => {
        currentLimit += 5;
        renderWishes();
    });

    // --- Form Submission (will be consolidated below) ---

    renderWishes();
    
    // Google Sheets Configuration
    // Replace with your Google Sheet ID
    const GOOGLE_SHEET_ID = '1ZGsLXEYqLWg7Ax_PAvdgxxMIa-DY1WGc_fecNMYnV0w';
    const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name
    
    // Build Google Sheets CSV export URL
    const googleSheetsUrl = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;
    
    // Function to load guest names from Google Sheets
    async function loadGuestNamesFromSheet() {
        try {
            const response = await fetch(googleSheetsUrl);
            const csvText = await response.text();
            const lines = csvText.trim().split('\n');
            
            const guestNameMap = {};
            
            // Proper CSV parser function
            function parseCSVLine(line) {
                const result = [];
                let current = '';
                let insideQuotes = false;
                
                for (let i = 0; i < line.length; i++) {
                    const char = line[i];
                    const nextChar = line[i + 1];
                    
                    if (char === '"') {
                        if (insideQuotes && nextChar === '"') {
                            current += '"';
                            i++;
                        } else {
                            insideQuotes = !insideQuotes;
                        }
                    } else if (char === ',' && !insideQuotes) {
                        result.push(current.trim());
                        current = '';
                    } else {
                        current += char;
                    }
                }
                result.push(current.trim());
                return result;
            }
            
            // Skip header row (row 0) and process data rows
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim() === '') continue; // Skip empty lines
                
                const cells = parseCSVLine(lines[i]);
                if (cells.length >= 3) {
                    const urlKey = cells[1].replace(/^"(.*)"$/, '$1').trim();      // Column B: English name (URL key)
                    const displayName = cells[2].replace(/^"(.*)"$/, '$1').trim(); // Column C: Khmer name (display)
                    if (urlKey && displayName) {
                        guestNameMap[urlKey] = displayName;
                        console.log(`Loaded: ${urlKey} => ${displayName}`);
                    }
                }
            }
            
            console.log("Loaded guest names from Google Sheets:", guestNameMap);
            return guestNameMap;
        } catch (error) {
            console.error("Failed to load from Google Sheets:", error);
            // Fallback to empty map - URL encoded names will still work
            return {};
        }
    }
    
    // Load guest names and process URL parameter
    loadGuestNamesFromSheet().then(guestNameMap => {
        // 1. Look for the name in the URL (?to=ReadableKey)
        const urlParams = new URLSearchParams(window.location.search);
        const guestKey = urlParams.get('to');

        console.log("Checking for guest name in URL...");

        if (guestKey) {
            // Check if it's a readable key first, then fallback to URL-encoded format
            let cleanName = guestNameMap[guestKey] || guestKey.replace(/[\+_]/g, ' ');
            console.log("Found guest name:", cleanName);

            // 2. Update Page 1 Name
            const page1Element = document.getElementById('page1-guest-name');
            if (page1Element) {
                page1Element.innerText = cleanName;
                console.log("Successfully updated Page 1 text.");
            } else {
                console.error("Could not find the ID 'page1-guest-name' in your HTML!");
            }

            // 3. Update Page 2 Wish Form Input (if it exists)
            const formInput = document.getElementById('guestName');
            if (formInput) {
                formInput.value = cleanName;
                formInput.setAttribute('readonly', true);
            }
        } else {
            console.log("No 'to' parameter found in the URL. Showing default name.");
        }
    });
    
    // === DOM ELEMENT SELECTION ===
    const entrancePage = document.getElementById('entrance-page');
    const enterButton = document.getElementById('enter-button');
    const transitionOverlay = document.getElementById('transition-overlay');
    const transitionVideo = document.getElementById('transition-video');
    const bgMusic = document.getElementById('bg-music');
    const page2Main = document.getElementById('page-2-main');
    const invitationBox = document.querySelector('.main-invitation-box');
    
    // === GLOBAL VARIABLES ===
    const weddingDate = new Date("February 28, 2026 06:30:00").getTime();
    let musicStarted = false;

    // 💥 IMPORTANT: REPLACE THIS URL with your actual Sheet Monkey/SheetDB API URL 💥
    const WISH_API_URL = 'YOUR_API_SUBMISSION_ENDPOINT_HERE'; 


    // =========================================================
    // 0. STAGGERED REVEAL FOR ENTRANCE PAGE CONTENT
    // =========================================================

    function revealEntrancePage() {
        document.querySelectorAll('#entrance-page .fade-in-item').forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.15}s`; 
            item.classList.add('is-visible');
        });
    }
    revealEntrancePage(); 

    // =========================================================
    // 1. ENTRANCE LOGIC
    // =========================================================

    if (enterButton) {
        enterButton.addEventListener('click', () => {
            if (entrancePage) entrancePage.style.display = 'none';
            if (transitionOverlay) {
                transitionOverlay.style.display = 'flex';
                // Start with fade-from-white class (overlay invisible)
                transitionOverlay.classList.add('fade-from-white');
            }
            
            // Play video and audio, then fade in the transition
            setTimeout(() => {
                // Hide Page 1 videos and show Page 2 videos
                document.querySelectorAll('.page1-bg').forEach(video => {
                    video.style.display = 'none';
                });
                document.querySelectorAll('.page2-bg').forEach(video => {
                    video.style.display = 'block';
                });

                const bgVideo = document.getElementById('page2-bg-video-desktop') || document.getElementById('page2-bg-video-mobile');
                if (bgVideo) {
                    bgVideo.play().catch(e => console.log("BG video autoplay failed:", e));
                }

                // Ensure music is playing before transition video
                if (bgMusic && bgMusic.paused) {
                    bgMusic.play().catch(e => console.log("Music resume failed:", e));
                }

                if (transitionVideo) {
                    transitionVideo.currentTime = 0;
                    // Play transition video (muted to avoid audio interruption)
                    const videoPromise = transitionVideo.play();
                    if (videoPromise !== undefined) {
                        videoPromise.catch(e => console.log("Transition video play failed:", e));
                    }
                }

                // Note: Music autoplay is handled by the DOMContentLoaded event listener
                // to ensure it's triggered with highest priority
                
                // Remove fade-from-white to reveal the transition (fade in effect)
                if (transitionOverlay) {
                    transitionOverlay.classList.remove('fade-from-white');
                }
            }, 100);
        });
    }

    // =========================================================
    // 2. TRANSITION END LOGIC
    // =========================================================

    if (transitionVideo) {
        transitionVideo.onended = () => {
            // Trigger fade to white effect
            if (transitionOverlay) {
                transitionOverlay.classList.add('fade-to-white');
                
                // Hide transition overlay and show page 2 after white fade completes
                setTimeout(() => {
                    if (transitionOverlay) transitionOverlay.style.display = 'none';
                    if (page2Main) page2Main.style.display = 'block';
                    document.body.style.overflowY = 'scroll'; 

                    // Show page 2 background and fade it in
                    const page2Bg = document.getElementById('page-2-bg');
                    if (page2Bg) {
                        page2Bg.style.display = 'block';
                        // Trigger fade-in effect with slight delay for smooth transition
                        setTimeout(() => {
                            page2Bg.classList.add('fade-in-bg');
                        }, 50);
                    }

                    if (invitationBox) invitationBox.classList.add('border-fade-in');
                    
                    setupScrollReveal();
                    
                    // LOCK PAGE 2 BACKGROUND - Prevent zoom/scale on scroll
                    lockPage2Background();
                }, 500); // Match the 0.5s fade-to-white transition
            }
        };
    }

    // =========================================================
    // LOCK PAGE 2 BACKGROUND FUNCTION
    // =========================================================
    function lockPage2Background() {
        const page2BgVideos = document.querySelectorAll('.page2-bg');
        
        page2BgVideos.forEach(video => {
            // Force fixed positioning and prevent any transforms
            video.style.position = 'fixed';
            video.style.top = '0';
            video.style.left = '0';
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.transform = 'scale(1) translate(0, 0)';
            video.style.zIndex = '-1';
            video.style.backgroundAttachment = 'fixed';
        });
        
        // Prevent scroll events from affecting the background
        window.addEventListener('scroll', () => {
            page2BgVideos.forEach(video => {
                video.style.transform = 'scale(1) translate(0, 0)';
                video.style.position = 'fixed';
                video.style.top = '0';
                video.style.left = '0';
            });
        }, { passive: true });
        
        // Continuously lock the background during any DOM changes
        const observer = new MutationObserver(() => {
            page2BgVideos.forEach(video => {
                video.style.transform = 'scale(1) translate(0, 0)';
                video.style.position = 'fixed';
            });
        });
        
        page2BgVideos.forEach(video => {
            observer.observe(video, { attributes: true, attributeFilter: ['style'] });
        });
    }

    // =========================================================
    // LOCK PAGE 2 HORIZONTAL SCROLL
    // =========================================================
    function lockPage2HorizontalScroll() {
        const page2Main = document.getElementById('page-2-main');
        
        if (!page2Main) return;
        
        // Prevent horizontal scrolling with mouse wheel
        page2Main.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Ensure scrollLeft is always 0 to prevent horizontal scroll
        page2Main.addEventListener('scroll', () => {
            if (page2Main.scrollLeft !== 0) {
                page2Main.scrollLeft = 0;
            }
        }, { passive: false });
        
        // Prevent trackpad/touchpad horizontal scroll
        let lastScrollLeft = 0;
        setInterval(() => {
            if (page2Main.scrollLeft !== 0) {
                page2Main.scrollLeft = 0;
            }
        }, 50);
    }
    
    // Call lock function when page 2 is displayed
    const originalLockPage2Background = lockPage2Background;
    lockPage2Background = function() {
        originalLockPage2Background();
        lockPage2HorizontalScroll();
    };

    // =========================================================
    // 3. SCROLL REVEAL IMPLEMENTATION
    // =========================================================

    function setupScrollReveal() {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const element = entry.target;
                
                if (entry.isIntersecting) {
                    element.style.transitionDelay = '0s';
                    setTimeout(() => {
                        element.classList.add('is-visible');
                    }, 10);
                } else {
                    element.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('#page-2-main .fade-in-item').forEach((item) => {
            item.style.transitionDelay = '0s'; 
            observer.observe(item);
        });
    }
    
    // =========================================================
    // 4. COUNTDOWN TIMER LOGIC
    // =========================================================
  // Function to convert English numbers to Khmer digits
function toKhmerNumber(num) {
    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return num.toString().split('').map(digit => khmerDigits[digit] || digit).join('');
}

// 1. SET THE TARGET DATE: February 28, 2026
const targetDate = new Date("February 28, 2026 00:00:00").getTime();

const formatNumberForLang = (num) => {
    const padded = num < 10 ? `0${num}` : `${num}`;
    return currentLanguage === 'km' ? toKhmerNumber(padded) : padded;
};

function updateWeddingCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // 2. GET ELEMENTS BY ID
    const dElem = document.getElementById("days");
    const hElem = document.getElementById("hours");
    const mElem = document.getElementById("minutes");
    const sElem = document.getElementById("seconds");

    // 3. UPDATE ONLY IF ELEMENTS EXIST
    if (dElem && hElem && mElem && sElem) {
        dElem.innerText = formatNumberForLang(d);
        hElem.innerText = formatNumberForLang(h);
        mElem.innerText = formatNumberForLang(m);
        sElem.innerText = formatNumberForLang(s);
    } else {
        console.log("Countdown elements not found! Check your HTML IDs.");
    }

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        const timerGrid = document.querySelector(".timer-grid");
        if (timerGrid) timerGrid.innerHTML = `<h3>${t('countdownComplete', 'It\'s wedding day!')}</h3>`;
    }
}

// Run every second
const countdownInterval = setInterval(updateWeddingCountdown, 1000);

// Run once immediately so it doesn't wait 1 second to start
updateWeddingCountdown();
    // =========================================================
    // 5. ADD TO CALENDAR LOGIC
    // =========================================================

    function setupCalendarLink() {
        const title = "ពិធីមង្គលអាពាហ៍ពិពាហ៍ | ឃុន ខាយស៊ីន & ពេជ្រ ម៉ានីកា";
        const description = "សូមគោរពអញ្ជើញលោក លោកស្រី ចូលរួមពិធីមង្គលអាពាហ៍ពិពាហ៍កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ។";
        const location = "ដឹ ព្រេមៀ សេនធ័រ សែនសុខ (អាគារ D&E)";
        const startDateTime = "20260328T063000";
        const endDateTime = "20260328T143000";
        
        const googleCalendarLink = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

        const calendarButton = document.getElementById('add-to-calendar');
        if(calendarButton) {
            calendarButton.href = googleCalendarLink;
        }
    }
    setupCalendarLink();


    // =========================================================
    // 6. PERSONALIZED GREETING HANDLER (CRITICAL FIX)
    // =========================================================



document.getElementById('wishForm').addEventListener('submit', function(e) {
    e.preventDefault(); // STOP the page refresh and URL message appearance
    
    const name = document.getElementById('guestName').value;
    const message = document.getElementById('wishMessage').value;
    const btn = document.getElementById('submitBtn');
    const wishesList = document.getElementById('wishesList');
    
    if (!message.trim()) {
        alert(t('emptyMessageAlert', 'Please enter a message'));
        return;
    }
    
    btn.disabled = true;
    btn.innerText = t('sendingWish', 'Sending...');

    // Send to Google Sheets API only (no localStorage)
    const date = new Date().toLocaleString('km-KH');

    // Send to API
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ name: name, message: message, date: date })
    })
    .then(response => {
        console.log('Wish submitted successfully');
        // Reset form - clear only the message (keep guest name)
        document.getElementById('wishMessage').value = "";
        btn.disabled = false;
        btn.innerText = t('submitWish', 'Send wish');
        
        // Create the new wish object
        const newWish = {
            name: name,
            message: message,
            date: date
        };
        
        // Add the new wish to the top of the array
        allWishes.unshift(newWish);
        console.log('New wish added to display:', newWish);
        
        // Save to localStorage as backup
        const localWishes = JSON.parse(localStorage.getItem('localWishes') || '[]');
        localWishes.unshift(newWish);
        localStorage.setItem('localWishes', JSON.stringify(localWishes));
        console.log('Saved to localStorage:', localWishes);
        
        // Just add the new wish card (don't re-render entire list)
        addNewWishCard(newWish);
        console.log('New wish displayed');
    })
    .catch(error => {
        console.error('Error submitting wish:', error);
        btn.disabled = false;
        btn.innerText = t('submitWish', 'Send wish');
    });
});

    // =========================================================
    // 8. IMAGE LIGHTBOX/GALLERY LOGIC
    // =========================================================

    const albumImages = document.querySelectorAll("#wedding-album .album-photo");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    let currentIndex = 0;

    if (albumImages.length > 0 && lightbox) {
        albumImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                openLightbox();
            });
        });

        function openLightbox() {
            lightbox.style.display = "flex";
            if (lightboxImg) {
                lightboxImg.classList.remove("show");
                setTimeout(() => {
                    lightboxImg.src = albumImages[currentIndex].src;
                    lightboxImg.classList.add("show");
                }, 10);
            }
            updateDots();
        }

        // Initialize dots for pagination
        function initializeDots() {
            const dotsContainer = document.getElementById("lightboxDots");
            if (!dotsContainer) return;
            
            dotsContainer.innerHTML = "";
            albumImages.forEach((_, index) => {
                const dot = document.createElement("div");
                dot.className = "lightbox-dot";
                if (index === currentIndex) {
                    dot.classList.add("active");
                }
                dot.addEventListener("click", (e) => {
                    e.stopPropagation();
                    currentIndex = index;
                    updateLightboxImage();
                });
                dotsContainer.appendChild(dot);
            });
        }

        // Update dots to show which image is active
        function updateDots() {
            const dots = document.querySelectorAll(".lightbox-dot");
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }

        // Update lightbox image and dots
        function updateLightboxImage() {
            if (lightboxImg) {
                lightboxImg.classList.remove("show");
                setTimeout(() => {
                    lightboxImg.src = albumImages[currentIndex].src;
                    lightboxImg.classList.add("show");
                }, 10);
            }
            updateDots();
        }

        // Initialize dots when first image is clicked
        albumImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                initializeDots();
                openLightbox();
            });
        });
        if (lightboxClose) {
            lightboxClose.addEventListener("click", (e) => {
                e.stopPropagation();
                closeLightbox();
            });
        }

        lightbox.addEventListener("click", (e) => {
            // Close when clicking on the lightbox background or image
            if (e.target === lightbox || e.target === lightboxImg) {
                closeLightbox();
            }
        });

        // Close lightbox with fade out animation
        function closeLightbox() {
            lightbox.classList.add("fade-out");
            setTimeout(() => {
                lightbox.style.display = "none";
                lightbox.classList.remove("fade-out");
            }, 300);
        }

        // Arrow button navigation
        const lightboxPrev = document.getElementById("lightboxPrev");
        const lightboxNext = document.getElementById("lightboxNext");

        if (lightboxPrev) {
            lightboxPrev.addEventListener("click", (e) => {
                e.stopPropagation();
                swipePrev();
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener("click", (e) => {
                e.stopPropagation();
                swipeNext();
            });
        }

        let startX = 0;
        let isDown = false;
        let dragStartX = 0;

        lightbox.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        lightbox.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;
            if (diff > 50) swipeNext();
            if (diff < -50) swipePrev();
        });

        lightbox.addEventListener("mousedown", (e) => {
            isDown = true;
            dragStartX = e.clientX;
        });

        lightbox.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault(); 
        });

        lightbox.addEventListener("mouseup", (e) => {
            if (!isDown) return;
            isDown = false;
            let diff = dragStartX - e.clientX;
            if (diff > 50) swipeNext();
            if (diff < -50) swipePrev();
        });
        
        lightbox.addEventListener("mouseleave", () => {
            isDown = false;
        });

        function swipeNext() {
            if (!lightboxImg || currentIndex >= albumImages.length - 1) return;
            currentIndex++;
            lightboxImg.classList.remove("show");
            lightboxImg.classList.add("morph-out");
            setTimeout(() => {
                lightboxImg.classList.remove("morph-out");
                lightboxImg.src = albumImages[currentIndex].src;
                lightboxImg.classList.add("morph-in");
                setTimeout(() => {
                    lightboxImg.classList.remove("morph-in");
                    lightboxImg.classList.add("show");
                    updateDots();
                }, 300);
            }, 300);
        }

        function swipePrev() {
            if (!lightboxImg || currentIndex <= 0) return;
            currentIndex--;
            lightboxImg.classList.remove("show");
            lightboxImg.classList.add("morph-out");
            setTimeout(() => {
                lightboxImg.classList.remove("morph-out");
                lightboxImg.src = albumImages[currentIndex].src;
                lightboxImg.classList.add("morph-in");
                setTimeout(() => {
                    lightboxImg.classList.remove("morph-in");
                    lightboxImg.classList.add("show");
                    updateDots();
                }, 300);
            }, 300);
        }

        function animateSwipe(direction) {
            if (lightboxImg) {
                lightboxImg.classList.add(direction === "left" ? "swipe-left" : "swipe-right");
            }
        }
    }
    
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the elements
    const audio = document.getElementById('bg-music');
    const toggleButton = document.getElementById('music-toggle-button');
    const entranceButton = document.getElementById('enter-button'); 

    if (!audio || !toggleButton) {
        console.warn("Music element or toggle button missing.");
        return;
    }

    // Initialize audio to not muted to allow autoplay on user interaction
    audio.muted = false;
    audio.volume = 0.5;
    let musicStarted = false;

    // --- Utility Functions ---

    // Checks if the audio is muted
    const isMuted = () => audio.muted;

    // Updates the button icon (assumes you are using Font Awesome icons)
    const updateButtonIcon = () => {
        if (isMuted()) {
            toggleButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Muted icon
            toggleButton.title = 'Unmute background music';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Playing icon
            toggleButton.title = 'Mute background music';
        }
    };
    
    // --- Main Logic ---

    // 1. Mute/Unmute Toggle Function
    const toggleMusic = () => {
        if (isMuted()) {
            audio.muted = false;
            // When unmuting, ensure the music starts if it hasn't yet
            if (audio.paused) {
                audio.play().catch(e => console.log("Play error on unmute:", e));
            }
        } else {
            audio.muted = true;
        }
        updateButtonIcon();
    };

    // 2. Play Music on Entrance Button Click (HIGH PRIORITY AUTOPLAY)
    if (entranceButton) {
        entranceButton.addEventListener('click', () => {
            // PRIORITY: Play music immediately when decorative button is clicked
            if (!musicStarted && audio) {
                audio.muted = false;  // Ensure unmuted
                const playPromise = audio.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        musicStarted = true;
                        audio.muted = false;  // Ensure it stays unmuted
                        updateButtonIcon();
                        console.log("Music autoplay started successfully");
                    }).catch(error => {
                        console.error("Music autoplay failed on click:", error);
                        // Retry with a small delay
                        setTimeout(() => {
                            audio.play().then(() => {
                                musicStarted = true;
                                audio.muted = false;
                                updateButtonIcon();
                                console.log("Music autoplay succeeded on retry");
                            }).catch(e => console.error("Music retry failed:", e));
                        }, 100);
                    });
                }
            }
        });
        
        // Initialize button icon
        updateButtonIcon();
    } else {
         console.error("Entrance button not found. Please check the ID.");
    }

    // 3. Attach Mute/Unmute Listener
    toggleButton.addEventListener('click', toggleMusic);
});

// =========================================================
// NAVIGATION MENU FUNCTIONALITY
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle-button');
    const navigationMenu = document.getElementById('navigation-menu');
    const menuItems = document.querySelectorAll('.menu-item');

    // Toggle menu visibility
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            menuToggleBtn.classList.toggle('active');
            navigationMenu.classList.toggle('active');
        });
    }

    // Close menu when a menu item is clicked and smooth scroll to section
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close the menu
            menuToggleBtn.classList.remove('active');
            navigationMenu.classList.remove('active');
            
            // Smooth scroll to section
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isMenuClick = navigationMenu.contains(e.target);
        const isButtonClick = menuToggleBtn.contains(e.target);
        
        if (!isMenuClick && !isButtonClick && navigationMenu.classList.contains('active')) {
            menuToggleBtn.classList.remove('active');
            navigationMenu.classList.remove('active');
        }
    });
});

// =========================================================
// GALLERY PHOTO FADE IN ON SCROLL
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const albumPhotos = document.querySelectorAll('.album-photo');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);
    
    albumPhotos.forEach(photo => {
        observer.observe(photo);
    });
});

// =========================================================
// TIMELINE ITEMS FADE IN FROM RIGHT ON SCROLL - BIDIRECTIONAL
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    
    // Track scroll direction
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
    }, { passive: true });
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px 100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(timelineItems).indexOf(entry.target);
                
                if (scrollDirection === 'down') {
                    // Scrolling down: show items in order (1, 2, 3...)
                    entry.target.classList.add('animate');
                } else {
                    // Scrolling up: show items in reverse order (last, ..., 2, 1)
                    const reverseIndex = timelineItems.length - index - 1;
                    entry.target.style.animationDelay = `${reverseIndex * 0.15}s`;
                    entry.target.classList.add('animate');
                }
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

// =========================================================
// DIVIDER LOGO IMAGE FADE IN ON SCROLL
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const dividerLogo = document.querySelector('.divider-logo-image');
    
    if (!dividerLogo) return;
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);
    
    observer.observe(dividerLogo);
});

// =========================================================
// RSVP SECTION - Handle user responses
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const rsvpButtons = document.querySelectorAll('.rsvp-btn');
    const RSVP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7i5YbcJW2KBch9ng0iPPZnnDvcfqBmBJJPpbEo81FWBGzfu-ph_hOApXMfZPoIcxg/exec'
    
    // Get guest name from URL parameter or wish form
    function getGuestName() {
        // First, try to get from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const guestKey = urlParams.get('to');
        
        if (guestKey) {
            // Return the guest key from URL
            return guestKey.replace(/[\+_]/g, ' ');
        }
        
        // Fallback: try to get from wish form input
        const formInput = document.getElementById('guestName');
        if (formInput && formInput.value) {
            return formInput.value;
        }
        
        // Last resort: return 'Unknown Guest'
        return 'Unknown Guest';
    }
    
    // Don't load saved RSVP - always start unselected
    // Remove any saved response from localStorage to force fresh selection
    // localStorage.removeItem('rsvpResponse');
    
    // Handle RSVP button clicks
    rsvpButtons.forEach(button => {
        button.addEventListener('click', () => {
            const option = button.getAttribute('data-option');
            const guestName = getGuestName();
            const response = option === 'yes' ? 'ចូលរួម' : 'មិនបានចូលរួម';
            const date = new Date().toLocaleString('km-KH');
            
            // Remove selected class from all buttons
            rsvpButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            button.classList.add('selected');
            
            // Save response to localStorage
            localStorage.setItem('rsvpResponse', option);
            
            // Send RSVP to Google Sheets
            const rsvpData = {
                action: 'rsvp',
                guestName: guestName,
                response: response,
                date: date
            };
            
            console.log('Sending RSVP data:', rsvpData);
            
            fetch(RSVP_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rsvpData)
            })
            .then(() => {
                console.log('RSVP Response sent to Google Sheets');
                const optionText = option === 'yes' ? t('rsvpYes') : t('rsvpNo');
                console.log('RSVP Response saved:', optionText);
            })
            .catch(error => {
                console.error('Error sending RSVP:', error);
            });
        });
    });
});
