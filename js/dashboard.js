// dashboard.js - Fully Functional Dashboard Implementation
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if we're on the dashboard
    if (document.getElementById('dashboard-content') && document.getElementById('dashboard-content').classList.contains('active')) {
        initDashboard();
    }
});

function initDashboard() {
    // Inject dashboard HTML content
    const dashboardContent = document.getElementById('dashboard-content');
    dashboardContent.innerHTML = `
        <style>
          
        .dashboard-dashboard {
            padding: 1.5rem;
            background: var(--dark);
            color: white;
            font-family: 'Inter', sans-serif;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .page-title {
            font-size: 1.75rem;
            font-weight: 700;
        }
        
        .header-actions {
            display: flex;
            gap: 1rem;
        }
        
            .stats-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                gap: 1.5rem;
                margin-bottom: 2rem;
            }

            .stat-card {
                background: rgba(30, 41, 59, 0.6);
                border-radius: 16px;
                padding: 1.5rem;
                border: 1px solid var(--border);
                position: relative;
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .stat-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            }

            .stat-card::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background: var(--primary);
            }

            .stat-card.secondary::after { background: var(--secondary); }
            .stat-card.warning::after { background: var(--warning); }
            .stat-card.danger::after { background: var(--danger); }

            .stat-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;
            }

            .stat-title {
                font-size: 0.875rem;
                color: var(--text-secondary);
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .stat-icon {
                width: 40px;
                height: 40px;
                border-radius: 8px;
                background: rgba(67, 97, 238, 0.1);
                color: var(--primary);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.25rem;
            }

            .stat-card.secondary .stat-icon {
                background: rgba(76, 201, 240, 0.1);
                color: var(--secondary);
            }

            .stat-card.warning .stat-icon {
                background: rgba(248, 150, 30, 0.1);
                color: var(--warning);
            }

            .stat-card.danger .stat-icon {
                background: rgba(247, 37, 133, 0.1);
                color: var(--danger);
            }

            .stat-value {
                font-size: 1.75rem;
                font-weight: 700;
                margin-bottom: 0.25rem;
            }

            .stat-change {
                font-size: 0.8125rem;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }

            .stat-change.positive { color: var(--success); }
            .stat-change.negative { color: var(--danger); }

            .stat-tooltip {
                position: absolute;
                display: block;
                cursor: help;
            }

            .stat-tooltip .tooltip-text {
                visibility: hidden;
                width: 200px;
                background-color: var(--card-bg);
                backdrop-filter: blur(10px);
                color: var(--text-primary);
                text-align: center;
                border-radius: 6px;
                padding: 8px;
                position: absolute;
                z-index: 1;
                bottom: 10%;
                left: 50%;
                margin-left: 10px;
                opacity: 0;
                transition: opacity 0.3s;
                border: 1px solid var(--border);
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                font-size: 0.75rem;
                font-weight: normal;
              
            }

            .stat-tooltip:hover .tooltip-text {
                visibility: visible;
                transition: all .3s ease;
                opacity: 1;
            }

            .ai-insights {
                background: var(--card-bg);
                border-radius: 16px;
                padding: 1.5rem;
                border: 1px solid var(--border);
                margin-bottom: 2rem;
                transition: all 0.3s ease;
            }

            .ai-insights:hover {
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }

            .ai-insight-item {
                display: flex;
                gap: 1rem;
                padding: 0.75rem 0;
                border-bottom: 1px solid var(--border);
                align-items: flex-start;
            }

            .ai-insight-item:last-child {
                border-bottom: none;
            }

            .ai-insight-icon {
                color: var(--primary-light);
                font-size: 1.25rem;
                margin-top: 0.25rem;
            }

            .ai-insight-content {
                flex: 1;
            }

            .ai-insight-title {
                font-weight: 600;
                margin-bottom: 0.25rem;
            }

            .ai-insight-text {
                font-size: 0.875rem;
                color: var(--text-secondary);
                line-height: 1.5;
            }

            .automation-toggle {
                background: var(--card-bg);
                border-radius: 16px;
                padding: 1.25rem 1.5rem;
                border: 1px solid var(--border);
                margin-bottom: 2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .toggle-content {
                display: flex;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .toggle-label {
                font-weight: 600;
            }

            .toggle-description {
                font-size: 0.8125rem;
                color: var(--text-secondary);
                margin-top: 0.25rem;
            }

            .toggle-switch {
                position: relative;
                display: inline-block;
                width: 50px;
                height: 26px;
            }

            .toggle-switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--border);
                transition: .4s;
                border-radius: 34px;
            }

            .slider:before {
                position: absolute;
                content: "";
                height: 18px;
                width: 18px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                transition: .4s;
                border-radius: 50%;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }

            input:checked + .slider {
                background-color: var(--primary);
            }

            input:checked + .slider:before {
                transform: translateX(24px);
            }

            .activity-feed {
                background: var(--card-bg);
                border-radius: 16px;
                padding: 1.5rem;
                border: 1px solid var(--border);
                transition: all 0.3s ease;
            }

            .activity-feed:hover {
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }

            .activity-item {
                padding: 1rem 0;
                border-bottom: 1px solid var(--border);
                display: flex;
                gap: 1rem;
            }

            .activity-item:last-child {
                border-bottom: none;
            }

            .activity-icon {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: rgba(67, 97, 238, 0.1);
                color: var(--primary);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .activity-content {
                flex: 1;
                font-size: 0.8125rem;
            }

            .activity-text {
                margin-bottom: 0.25rem;
                line-height: 1.5;
            }

            .activity-time {
                color: var(--text-secondary);
                font-size: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }


            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(20px); }
            }

            /* Modal styles */
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .modal-overlay.active {
                opacity: 1;
                visibility: visible;
            }

            .modal-container {
                background: var(--darker);
                border-radius: 16px;
                width: 100%;
                max-width: 600px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                transform: translateY(20px);
                transition: transform 0.3s ease;
                position: relative;
                border: 1px solid var(--border);
            }

            .modal-overlay.active .modal-container {
                transform: translateY(0);
            }

            .modal-header {
                padding: 1.25rem 1.5rem;
                border-bottom: 1px solid var(--border);
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .modal-title {
                font-size: 1.25rem;
                font-weight: 600;
            }

            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--text-secondary);
                padding: 0.25rem;
            }

            .modal-close:hover {
                color: var(--primary);
            }

            .modal-content {
                padding: 1.5rem;
            }

            .tweet-compose {
                display: flex;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }

            .tweet-avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background: rgba(67, 97, 238, 0.2);
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary);
            }

            .tweet-input-container {
                flex: 1;
            }

            .tweet-input {
                width: 100%;
                border: none;
                resize: none;
                font-size: 1.125rem;
                min-height: 100px;
                outline: none;
                font-family: inherit;
                color: var(--text-primary);
                background: transparent;
            }

            .tweet-input::placeholder {
                color: var(--text-tertiary);
            }

            .tweet-actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid var(--border);
                padding-top: 1rem;
                margin-top: 1rem;
            }

            .tweet-media-actions {
                display: flex;
                gap: 0.5rem;
            }

            .tweet-media-btn {
                background: none;
                border: none;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: var(--primary);
                transition: background 0.2s ease;
            }

            .tweet-media-btn:hover {
                background: rgba(67, 97, 238, 0.1);
            }

            .tweet-submit-btn {
                background: var(--primary);
                color: white;
                border: none;
                border-radius: 9999px;
                padding: 0.5rem 1.25rem;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.2s ease;
            }

            .tweet-submit-btn:hover {
                background: var(--primary-dark);
            }

            .tweet-submit-btn:disabled {
                background: var(--text-tertiary);
                cursor: not-allowed;
            }

            .character-counter {
                font-size: 0.875rem;
                color: var(--text-secondary);
                margin-right: 1rem;
            }

            .character-counter.warning {
                color: var(--warning);
            }

            .character-counter.error {
                color: var(--danger);
            }

            .advanced-options {
                margin-top: 1.5rem;
                border-top: 1px solid var(--border);
                padding-top: 1.5rem;
            }

            .advanced-options-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                cursor: pointer;
            }

            .advanced-options-title {
                font-weight: 600;
            }

            .advanced-options-content {
                display: none;
                margin-top: 1rem;
            }

            .advanced-options.active .advanced-options-content {
                display: block;
            }

            .poll-options {
                margin-top: 1rem;
            }

            .poll-option {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
            }

            .poll-option input {
                flex: 1;
                padding: 0.5rem;
                border: 1px solid var(--border);
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.05);
                color: var(--text-primary);
            }

            .poll-option button {
                background: none;
                border: none;
                color: var(--danger);
                cursor: pointer;
            }

            .add-poll-option {
                background: none;
                border: none;
                color: var(--primary);
                font-weight: 500;
                cursor: pointer;
                margin-top: 0.5rem;
            }

            .schedule-options {
                margin-top: 1.5rem;
            }

            .schedule-row {
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .schedule-input {
                flex: 1;
                padding: 0.5rem;
                border: 1px solid var(--border);
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.05);
                color: var(--text-primary);
            }

            .timezone-select {
                width: 100%;
                padding: 0.5rem;
                border: 1px solid var(--border);
                border-radius: 6px;
                margin-bottom: 1rem;
                background: rgba(255, 255, 255, 0.05);
                color: var(--text-primary);
            }

            .recurring-options {
                margin-top: 1rem;
            }

            .recurring-toggle {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }

            .recurring-fields {
                display: none;
                margin-top: 1rem;
            }

            .recurring-options.active .recurring-fields {
                display: block;
            }

            .tweet-preview {
                margin-top: 1.5rem;
                padding: 1rem;
                border: 1px solid var(--border);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.05);
                display: none;
            }

            .preview-header {
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
        </style>

        <div class="dashboard-dashboard">

          <div class="header">
                <h1 class="page-title">Good Afternoon, Ralph</h1>
                <div class="header-actions">
                    <button class="btn btn-secondary" id="composeTweetBtn">
                        <i class="fas fa-pen"></i> Compose Tweet
                    </button>
                    <button class="btn btn-primary" id="scheduleTweetBtn">
                        <i class="fas fa-calendar-plus"></i> Schedule Tweet
                    </button>
                </div>
            </div>
    

        <!-- Stats Cards with Contextual Tooltips -->
        <div class="stats-container" id="dashboardWidgets">
            <div class="stat-card">
                <div class="stat-header">
                    <div>
                        <div class="stat-title">Posts Today</div>
                        <div class="stat-value">8</div>
                        <div class="stat-change positive">
                            <i class="fas fa-arrow-up"></i> 14% from yesterday
                        </div>
                        <div class="stat-tooltip">
                            <i class="fas fa-info-circle"></i>
                            <span class="tooltip-text">You're posting more than 75% of similar accounts. Keep it up for better engagement!</span>
                        </div>
                    </div>
                    <div class="stat-icon">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                </div>
            </div>
            <div class="stat-card secondary">
                <div class="stat-header">
                    <div>
                        <div class="stat-title">Likes Given</div>
                        <div class="stat-value">127</div>
                        <div class="stat-change positive">
                            <i class="fas fa-arrow-up"></i> 22% from yesterday
                        </div>
                        <div class="stat-tooltip">
                            <i class="fas fa-info-circle"></i>
                            <span class="tooltip-text">Engaging with others' content helps build relationships and can lead to more followers.</span>
                        </div>
                    </div>
                    <div class="stat-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
            <div class="stat-card warning">
                <div class="stat-header">
                    <div>
                        <div class="stat-title">New Followers</div>
                        <div class="stat-value">9</div>
                        <div class="stat-change negative">
                            <i class="fas fa-arrow-down"></i> 5% from yesterday
                        </div>
                        <div class="stat-tooltip">
                            <i class="fas fa-info-circle"></i>
                            <span class="tooltip-text">Try engaging with trending topics in your niche to attract more followers.</span>
                        </div>
                    </div>
                    <div class="stat-icon">
                        <i class="fas fa-user-plus"></i>
                    </div>
                </div>
            </div>
            <div class="stat-card danger">
                <div class="stat-header">
                    <div>
                        <div class="stat-title">Engagement Rate</div>
                        <div class="stat-value">18.7%</div>
                        <div class="stat-change positive">
                            <i class="fas fa-arrow-up"></i> 3.2% from yesterday
                        </div>
                        <div class="stat-tooltip">
                            <i class="fas fa-info-circle"></i>
                            <span class="tooltip-text">Above average engagement rate! Your content is resonating well with your audience.</span>
                        </div>
                    </div>
                    <div class="stat-icon">
                        <i class="fas fa-chart-bar"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- AI Insights Section -->
        <div class="ai-insights">
            <div class="section-header">
                <h3 class="section-title">AI-Powered Insights</h3>
            </div>
            <div class="ai-insight-item">
                <div class="ai-insight-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div class="ai-insight-content">
                    <div class="ai-insight-title">Content Trend Alert</div>
                    <div class="ai-insight-text">Posts about "AI tools" are getting 32% more engagement in your niche this week.</div>
                </div>
            </div>
            <div class="ai-insight-item">
                <div class="ai-insight-icon">
                    <i class="fas fa-smile"></i>
                </div>
                <div class="ai-insight-content">
                    <div class="ai-insight-title">Sentiment Analysis</div>
                    <div class="ai-insight-text">Your recent tweets have 85% positive sentiment, which is great for audience connection.</div>
                </div>
            </div>
            <div class="ai-insight-item">
                <div class="ai-insight-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="ai-insight-content">
                    <div class="ai-insight-title">Best Posting Times</div>
                    <div class="ai-insight-text">Your audience is most active between 9-11 AM and 7-9 PM (your local time).</div>
                </div>
            </div>
        </div>

        <!-- Automation Toggle -->
        <div class="automation-toggle">
            <div class="toggle-content">
                <div>
                    <div class="toggle-label">Automation Status</div>
                    <div class="toggle-description">Turn on/off all automation features</div>
                </div>
                <label class="toggle-switch">
                    <input type="checkbox" id="automationToggle" checked>
                    <span class="slider"></span>
                </label>
            </div>
            <button class="btn btn-secondary btn-sm" id="automationSettings">
                <i class="fas fa-cog"></i> Settings
            </button>
        </div>

        <!-- Activity Feed -->
        <div class="activity-feed">
            <div class="section-header">
                <h3 class="section-title">Recent Activity</h3>
                <div>
                    <button class="btn btn-secondary btn-sm" id="refreshActivity">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                </div>
            </div>
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas fa-reply"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-text">
                        <strong>Replied</strong> to @techguru: "Great insights! We've been using similar techniques..."
                    </div>
                    <div class="activity-time">
                        <i class="far fa-clock"></i> 2 hours ago
                    </div>
                </div>
            </div>
            <div class="activity-item">
                <div class="activity-icon" style="color: var(--danger);">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-text">
                        <strong>Liked</strong> a tweet from @marketingpro: "10 content marketing strategies..."
                    </div>
                    <div class="activity-time">
                        <i class="far fa-clock"></i> 4 hours ago
                    </div>
                </div>
            </div>
            <div class="activity-item">
                <div class="activity-icon" style="color: var(--secondary);">
                    <i class="fas fa-paper-plane"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-text">
                        <strong>Posted</strong> scheduled tweet: "Just launched our new AI-powered dashboard..."
                    </div>
                    <div class="activity-time">
                        <i class="far fa-clock"></i> 6 hours ago
                    </div>
                </div>
            </div>
            <div class="activity-item">
                <div class="activity-icon" style="color: var(--warning);">
                    <i class="fas fa-user-plus"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-text">
                        <strong>Gained 3 new followers</strong> @aitools, @digitalmarketer, @techwriter
                    </div>
                    <div class="activity-time">
                        <i class="far fa-clock"></i> 8 hours ago
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize dashboard functionality
    initDashboardModals();
    initDashboardEventListeners();
    initTooltips();
    initRealTimeUpdates();
}

function initDashboardModals() {
    // Create modal templates
    window.composeTweetModal = createComposeTweetModal();
    window.scheduleTweetModal = createScheduleTweetModal();
}

function createComposeTweetModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h3 class="modal-title">Compose Tweet</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-content">
                <div class="tweet-compose">
                    <div class="tweet-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="tweet-input-container">
                        <textarea class="tweet-input" placeholder="What's happening?" maxlength="280"></textarea>
                        <div class="tweet-preview" style="display: none;">
                            <div class="preview-header">Preview</div>
                            <div class="preview-content"></div>
                        </div>
                    </div>
                </div>
                
                <div class="advanced-options">
                    <div class="advanced-options-header">
                        <span class="advanced-options-title">Advanced Options</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="advanced-options-content">
                        <div class="poll-creation">
                            <label>
                                <input type="checkbox" id="addPoll"> Add poll
                            </label>
                            <div class="poll-options" style="display: none;">
                                <div class="poll-option">
                                    <input type="text" placeholder="Option 1">
                                    <button type="button"><i class="fas fa-times"></i></button>
                                </div>
                                <div class="poll-option">
                                    <input type="text" placeholder="Option 2">
                                    <button type="button"><i class="fas fa-times"></i></button>
                                </div>
                                <button type="button" class="add-poll-option">Add option</button>
                            </div>
                        </div>
                        
                        <div class="location-tagging" style="margin-top: 1rem;">
                            <label>
                                <input type="checkbox" id="addLocation"> Add location
                            </label>
                        </div>
                        
                        <div class="media-options" style="margin-top: 1rem;">
                            <div class="media-option">
                                <label>
                                    <input type="checkbox" id="addAltText"> Add alt text for images
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tweet-actions">
                    <div class="tweet-media-actions">
                        <button type="button" class="tweet-media-btn" title="Media">
                            <i class="fas fa-image"></i>
                        </button>
                        <button type="button" class="tweet-media-btn" title="GIF">
                            <i class="fas fa-film"></i>
                        </button>
                        <button type="button" class="tweet-media-btn" title="Poll">
                            <i class="fas fa-chart-pie"></i>
                        </button>
                        <button type="button" class="tweet-media-btn" title="Emoji">
                            <i class="far fa-smile"></i>
                        </button>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span class="character-counter">280</span>
                        <button type="button" class="tweet-submit-btn" disabled>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return modal;
}

function createScheduleTweetModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h3 class="modal-title">Schedule Tweet</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-content">
                <div class="tweet-compose">
                    <div class="tweet-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="tweet-input-container">
                        <textarea class="tweet-input" placeholder="What's happening?" maxlength="280"></textarea>
                        <div class="tweet-preview" style="display: none;">
                            <div class="preview-header">Preview</div>
                            <div class="preview-content"></div>
                        </div>
                    </div>
                </div>
                
                <div class="schedule-options">
                    <div class="schedule-row">
                        <div style="flex: 1;">
                            <label>Date</label>
                            <input type="date" class="schedule-input" id="scheduleDate">
                        </div>
                        <div style="flex: 1;">
                            <label>Time</label>
                            <input type="time" class="schedule-input" id="scheduleTime">
                        </div>
                    </div>
                    
                    <select class="timezone-select" id="timezoneSelect">
                        <option value="local">Local Time</option>
                        <option value="utc">UTC</option>
                    </select>
                    
                    <div class="recurring-options">
                        <div class="recurring-toggle">
                            <input type="checkbox" id="recurringToggle">
                            <label for="recurringToggle">Recurring Tweet</label>
                        </div>
                        <div class="recurring-fields">
                            <div class="schedule-row">
                                <div style="flex: 1;">
                                    <label>Frequency</label>
                                    <select class="schedule-input" id="recurringFrequency">
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </div>
                                <div style="flex: 1;">
                                    <label>End Date</label>
                                    <input type="date" class="schedule-input" id="recurringEndDate">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 1rem;">
                        <label>
                            <input type="checkbox" id="optimalTimeToggle"> Use optimal posting time (AI suggested)
                        </label>
                    </div>
                </div>
                
                <div class="advanced-options">
                    <div class="advanced-options-header">
                        <span class="advanced-options-title">Advanced Options</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="advanced-options-content">
                        <div class="poll-creation">
                            <label>
                                <input type="checkbox" id="addPoll"> Add poll
                            </label>
                            <div class="poll-options" style="display: none;">
                                <div class="poll-option">
                                    <input type="text" placeholder="Option 1">
                                    <button type="button"><i class="fas fa-times"></i></button>
                                </div>
                                <div class="poll-option">
                                    <input type="text" placeholder="Option 2">
                                    <button type="button"><i class="fas fa-times"></i></button>
                                </div>
                                <button type="button" class="add-poll-option">Add option</button>
                            </div>
                        </div>
                        
                        <div class="media-options" style="margin-top: 1rem;">
                            <div class="media-option">
                                <label>
                                    <input type="checkbox" id="addAltText"> Add alt text for images
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tweet-actions">
                    <div class="tweet-media-actions">
                        <button type="button" class="tweet-media-btn" title="Media">
                            <i class="fas fa-image"></i>
                        </button>
                        <button type="button" class="tweet-media-btn" title="GIF">
                            <i class="fas fa-film"></i>
                        </button>
                        <button type="button" class="tweet-media-btn" title="Poll">
                            <i class="fas fa-chart-pie"></i>
                        </button>
                        <button type="button" class="tweet-media-btn" title="Emoji">
                            <i class="far fa-smile"></i>
                        </button>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span class="character-counter">280</span>
                        <button type="button" class="tweet-submit-btn" disabled>Schedule</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function initDashboardEventListeners() {
    // Quick Action Buttons
    document.getElementById('composeTweetBtn').addEventListener('click', () => {
        openModal(window.composeTweetModal);
    });

    document.getElementById('scheduleTweetBtn').addEventListener('click', () => {
        openModal(window.scheduleTweetModal);
    });

    // Automation Toggle
    const automationToggle = document.getElementById('automationToggle');
    if (automationToggle) {
        automationToggle.addEventListener('change', (e) => {
            const status = e.target.checked ? 'enabled' : 'disabled';
            console.log(`Automation ${status}`);
            showToast(`Automation ${status}`);
            
            // Update stats to reflect automation status
            const statsContainer = document.querySelector('.stats-container');
            if (statsContainer) {
                const statCards = statsContainer.querySelectorAll('.stat-card');
                statCards.forEach(card => {
                    if (e.target.checked) {
                        card.style.opacity = '1';
                    } else {
                        card.style.opacity = '0.7';
                    }
                });
            }
        });
    }

    // Settings Button
    const automationSettings = document.getElementById('automationSettings');
    if (automationSettings) {
        automationSettings.addEventListener('click', () => {
          showToast('Redirecting to automation automation');
            // In a real app, this would navigate to settings tab
            const automationTab = document.querySelector('.nav-item[data-tab="automation"]');
            if (automationTab) {
                automationTab.click();
            }
        });
    }

    // Refresh Activity
    const refreshActivity = document.getElementById('refreshActivity');
    if (refreshActivity) {
        refreshActivity.addEventListener('click', () => {
            showToast('Activity feed refreshed');
            
            // Simulate refresh with new random times
            const activityItems = document.querySelectorAll('.activity-item');
            activityItems.forEach(item => {
                const timeElement = item.querySelector('.activity-time');
                if (timeElement) {
                    const minutes = Math.floor(Math.random() * 10) + 1;
                    timeElement.innerHTML = `<i class="far fa-clock"></i> ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
                }
            });
        });
    }
}

function initTooltips() {
    // Initialize tooltip hover functionality
    document.querySelectorAll('.stat-tooltip').forEach(tooltip => {
        tooltip.addEventListener('mouseenter', () => {
            const tooltipText = tooltip.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.style.visibility = 'visible';
                tooltipText.style.opacity = '1';
            }
        });
        
        tooltip.addEventListener('mouseleave', () => {
            const tooltipText = tooltip.querySelector('.tooltip-text');
            if (tooltipText) {
                tooltipText.style.visibility = 'hidden';
                tooltipText.style.opacity = '0';
            }
        });
    });
}

function initRealTimeUpdates() {
    // Simulate real-time updates to stats
    setInterval(() => {
        const statValues = document.querySelectorAll('.stat-value');
        statValues.forEach(valueElement => {
            if (Math.random() > 0.7) { // 30% chance to update each stat
                const currentValue = parseInt(valueElement.textContent);
                const change = Math.floor(Math.random() * 5) + 1;
                const newValue = Math.random() > 0.5 ? currentValue + change : Math.max(0, currentValue - change);
                valueElement.textContent = newValue;
                
                // Update the change indicator
                const changeElement = valueElement.nextElementSibling?.nextElementSibling;
                if (changeElement && changeElement.classList.contains('stat-change')) {
                    const isPositive = newValue > currentValue;
                    changeElement.className = isPositive ? 'stat-change positive' : 'stat-change negative';
                    changeElement.innerHTML = `<i class="fas fa-arrow-${isPositive ? 'up' : 'down'}"></i> ${Math.abs(newValue - currentValue)}% from previous`;
                }
            }
        });
    }, 10000); // Update every 10 seconds
}

function openModal(modal) {
    if (!modal) return;
    
    document.body.appendChild(modal);
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Add event listener for close button
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
    }
    
    // Close when clicking outside modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // Initialize modal functionality
    if (modal.querySelector('#addPoll')) {
        initPollFunctionality(modal);
    }
    
    if (modal.querySelector('.advanced-options-header')) {
        initAdvancedOptions(modal);
    }
    
    if (modal.querySelector('.tweet-input')) {
        initTweetInput(modal);
    }
    
    if (modal.querySelector('#recurringToggle')) {
        initRecurringOptions(modal);
    }
    
    if (modal.querySelector('.tweet-media-btn')) {
        initMediaButtons(modal);
    }
    
    // Set default date/time for schedule modal
    if (modal.querySelector('#scheduleDate')) {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        modal.querySelector('#scheduleDate').value = dateStr;
        modal.querySelector('#scheduleTime').value = timeStr;
    }
}

function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('active');
    setTimeout(() => {
        if (modal.parentNode) {
            document.body.removeChild(modal);
        }
    }, 300);
}

function initPollFunctionality(modal) {
    const pollCheckbox = modal.querySelector('#addPoll');
    const pollOptions = modal.querySelector('.poll-options');
    const addOptionBtn = modal.querySelector('.add-poll-option');
    
    if (!pollCheckbox || !pollOptions || !addOptionBtn) return;
    
    pollCheckbox.addEventListener('change', () => {
        pollOptions.style.display = pollCheckbox.checked ? 'block' : 'none';
    });
    
    addOptionBtn.addEventListener('click', () => {
        if (modal.querySelectorAll('.poll-option').length >= 4) {
            showToast('Maximum of 4 poll options allowed');
            return;
        }
        
        const newOption = document.createElement('div');
        newOption.className = 'poll-option';
        newOption.innerHTML = `
            <input type="text" placeholder="Option ${modal.querySelectorAll('.poll-option').length + 1}">
            <button type="button"><i class="fas fa-times"></i></button>
        `;
        
        pollOptions.insertBefore(newOption, addOptionBtn);
        
        // Add event listener to remove button
        newOption.querySelector('button').addEventListener('click', () => {
            newOption.remove();
        });
    });
    
    // Add event listeners to existing remove buttons
    modal.querySelectorAll('.poll-option button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.poll-option').remove();
        });
    });
}

function initAdvancedOptions(modal) {
    const header = modal.querySelector('.advanced-options-header');
    const options = modal.querySelector('.advanced-options');
    
    if (!header || !options) return;
    
    header.addEventListener('click', () => {
        options.classList.toggle('active');
        const icon = header.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
    });
}

function initTweetInput(modal) {
    const textarea = modal.querySelector('.tweet-input');
    const counter = modal.querySelector('.character-counter');
    const submitBtn = modal.querySelector('.tweet-submit-btn');
    const previewContent = modal.querySelector('.preview-content');
    const previewSection = modal.querySelector('.tweet-preview');
    
    if (!textarea || !counter || !submitBtn) return;
    
    textarea.addEventListener('input', () => {
        const remaining = 280 - textarea.value.length;
        counter.textContent = remaining;
        
        // Update counter color based on remaining characters
        counter.className = 'character-counter';
        if (remaining < 20) counter.classList.add('warning');
        if (remaining < 0) counter.classList.add('error');
        
        // Enable/disable submit button
        submitBtn.disabled = textarea.value.length === 0 || textarea.value.length > 280;
        
        // Update preview if elements exist
        if (previewContent && previewSection) {
            if (textarea.value) {
                previewContent.textContent = textarea.value;
                previewSection.style.display = 'block';
            } else {
                previewSection.style.display = 'none';
            }
        }
    });
    
    // Submit functionality
    submitBtn.addEventListener('click', () => {
        const tweetContent = textarea.value;
        if (tweetContent.length === 0 || tweetContent.length > 280) return;
        
        const isCompose = modal.querySelector('.modal-title').textContent === 'Compose Tweet';
        
        if (isCompose) {
            console.log('Posting tweet:', tweetContent);
            showToast('Tweet posted successfully!');
            
            // Add to activity feed
            addToActivityFeed({
                type: 'post',
                content: tweetContent,
                time: 'just now'
            });
        } else {
            const date = modal.querySelector('#scheduleDate').value;
            const time = modal.querySelector('#scheduleTime').value;
            console.log('Scheduling tweet:', tweetContent, 'for', date, time);
            showToast('Tweet scheduled successfully!');
            
            // Add to activity feed
            addToActivityFeed({
                type: 'schedule',
                content: tweetContent,
                time: `${date} at ${time}`
            });
        }
        
        closeModal(modal);
    });
}

function addToActivityFeed(activity) {
    const activityFeed = document.querySelector('.activity-feed');
    if (!activityFeed) return;
    
    const activityItems = activityFeed.querySelector('.activity-item');
    if (!activityItems) return;
    
    const newActivity = document.createElement('div');
    newActivity.className = 'activity-item';
    
    let icon, iconColor, actionText;
    if (activity.type === 'post') {
        icon = 'paper-plane';
        iconColor = 'var(--secondary)';
        actionText = 'Posted tweet';
    } else if (activity.type === 'schedule') {
        icon = 'calendar-plus';
        iconColor = 'var(--primary)';
        actionText = 'Scheduled tweet';
    } else {
        return;
    }
    
    newActivity.innerHTML = `
        <div class="activity-icon" style="color: ${iconColor};">
            <i class="fas fa-${icon}"></i>
        </div>
        <div class="activity-content">
            <div class="activity-text">
                <strong>${actionText}</strong>: ${activity.content.substring(0, 50)}${activity.content.length > 50 ? '...' : ''}
            </div>
            <div class="activity-time">
                <i class="far fa-clock"></i> ${activity.time}
            </div>
        </div>
    `;
    
    activityFeed.insertBefore(newActivity, activityItems);
}

function initRecurringOptions(modal) {
    const toggle = modal.querySelector('#recurringToggle');
    const options = modal.querySelector('.recurring-options');
    
    if (!toggle || !options) return;
    
    toggle.addEventListener('change', () => {
        options.classList.toggle('active');
    });
}

function initMediaButtons(modal) {
    modal.querySelectorAll('.tweet-media-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const icon = e.currentTarget.querySelector('i');
            if (!icon) return;
            
            if (icon.classList.contains('fa-image')) {
                showToast('Media upload dialog would open here');
            } else if (icon.classList.contains('fa-film')) {
                showToast('GIF picker would open here');
            } else if (icon.classList.contains('fa-chart-pie')) {
                const pollCheckbox = modal.querySelector('#addPoll');
                if (pollCheckbox) {
                    pollCheckbox.click();
                    showToast('Poll options added');
                }
            } else if (icon.classList.contains('fa-smile')) {
                showToast('Emoji picker would open here');
            }
        });
    });
}

function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            document.body.removeChild(toast);
        }
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape closes modals
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            closeModal(activeModal);
        }
    }
    
    // Ctrl+Enter or Cmd+Enter submits the active modal
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            const submitBtn = activeModal.querySelector('.tweet-submit-btn:not([disabled])');
            if (submitBtn) {
                submitBtn.click();
            }
        }
    }
});

// Initialize dashboard when loaded
if (document.getElementById('dashboard-content')) {
    initDashboard();
}