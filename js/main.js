document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar toggle
    initSidebar();
    
    // Initialize tab system
    initTabSystem();
    
    // Initialize the default tab
    initCurrentTab();
});

function initSidebar() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    
    // Button toggle
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        }
    });
    
    // Touch/swipe handling
    let touchStartX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const swipeDistance = touchEndX - touchStartX;
        
        if (swipeDistance > 50) { // Right swipe
            sidebar.classList.add('active');
            document.body.classList.add('sidebar-open');
        } else if (swipeDistance < -50) { // Left swipe
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        }
    }, { passive: true });
}

function initTabSystem() {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the tab name from data attribute
            const tabName = item.getAttribute('data-tab');
            
            // Switch to the new tab
            switchTab(tabName);
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        });
    });
}

function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all nav items
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show the selected tab content
    const tabContent = document.getElementById(`${tabName}-content`);
    if (tabContent) {
        tabContent.classList.add('active');
    }
    
    // Activate the clicked nav item
    const navItem = document.querySelector(`.sidebar-nav .nav-item[data-tab="${tabName}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Update the page title
    updatePageTitle(tabName);
    
    // Initialize the tab's JavaScript
    initTabScript(tabName);
}

function initCurrentTab() {
    // Find the initially active tab
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        const tabName = activeTab.id.replace('-content', '');
        initTabScript(tabName);
    }
}

function initTabScript(tabName) {
    // Convert tab name to function name (e.g., "dashboard" -> "initDashboard")
    const initFunctionName = `init${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`;
    
    // Call the initialization function if it exists
    if (typeof window[initFunctionName] === 'function') {
        window[initFunctionName]();
    }
}

function updatePageTitle(tabName) {
    const titleMap = {
        'dashboard': 'Dashboard',
        'analytics': 'Analytics',
        'content': 'Content Management',
        // ... other tab titles
    };
    
    const baseTitle = 'FlowBotic - AI Twitter Automation';
    document.title = `${titleMap[tabName]} | ${baseTitle}`;
    
  
}