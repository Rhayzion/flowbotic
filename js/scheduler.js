// scheduler.js - Complete Scheduler Implementation
document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('scheduler-content') && document.getElementById('scheduler-content').classList.contains('active')) {
        initScheduler();
    }
});

function initScheduler() {
    // Inject scheduler HTML content
    const schedulerContent = document.getElementById('scheduler-content');
    schedulerContent.innerHTML = `
        <div class="scheduler-container">
            <!-- Scheduler Header -->
            <div class="scheduler-header">
                <h1 class="page-title">Content Scheduler</h1>
                <div class="header-actions">
                    <button class="btn btn-secondary" id="refresh-scheduler-btn">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                    <button class="btn btn-primary" id="new-scheduled-post-btn">
                        <i class="fas fa-plus"></i> New Scheduled Post
                    </button>
                </div>
            </div>
            
            <!-- Scheduler Tabs -->
            <div class="scheduler-tabs">
                <div class="tab active" data-tab="calendar-view">Calendar View</div>
                <div class="tab" data-tab="list-view">List View</div>
                <div class="tab" data-tab="queue-view">Queue</div>
            </div>
            
            <!-- Calendar View -->
            <div class="tab-content active" id="calendar-view-tab">
                <div class="calendar-view-container">
                    <div class="calendar-controls">
                        <button class="btn btn-secondary" id="prev-month-btn">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <h2 id="current-month-year">June 2023</h2>
                        <button class="btn btn-secondary" id="next-month-btn">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <button class="btn btn-secondary" id="today-btn">
                            Today
                        </button>
                    </div>
                    
                    <div class="calendar-grid" id="calendar-grid">
                        <!-- Calendar will be generated here -->
                    </div>
                </div>
            </div>
            
            <!-- List View -->
            <div class="tab-content" id="list-view-tab">
                <div class="list-view-container">
                    <div class="list-filters">
                        <div class="filter-group">
                            <label>Status:</label>
                            <select class="form-control" id="status-filter">
                                <option  class="range-list" value="all">All</option>
                                <option  class="range-list" value="scheduled">Scheduled</option>
                                <option  class="range-list" value="posted">Posted</option>
                                <option  class="range-list" value="failed">Failed</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label>Platform:</label>
                            <select class="form-control" id="platform-filter">
                                <option value="all">All</option>
                                <option value="twitter">Twitter</option>
                                <option value="facebook">Facebook</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="instagram">Instagram</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label>Date Range:</label>
                            <input type="date" class="form-control" id="start-date">
                            <span>to</span>
                            <input type="date" class="form-control" id="end-date">
                        </div>
                        <button class="btn btn-secondary" id="apply-filters-btn">
                            Apply Filters
                        </button>
                    </div>
                    
                    <div class="scheduled-posts-list" id="scheduled-posts-list">
                        <!-- Scheduled posts will be loaded here -->
                    </div>
                </div>
            </div>
            
            <!-- Queue View -->
            <div class="tab-content" id="queue-view-tab">
                <div class="queue-view-container">
                    <div class="queue-stats">
                        <div class="stat-card">
                            <div class="stat-value" id="queued-count">12</div>
                            <div class="stat-label">Posts in Queue</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="next-post-time">Today, 2:30 PM</div>
                            <div class="stat-label">Next Post Time</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="avg-daily-posts">8</div>
                            <div class="stat-label">Avg Daily Posts</div>
                        </div>
                    </div>
                    
                    <div class="queue-controls">
                        <button class="btn btn-secondary" id="pause-queue-btn">
                            <i class="fas fa-pause"></i> Pause Queue
                        </button>
                        <button class="btn btn-primary" id="add-to-queue-btn">
                            <i class="fas fa-plus"></i> Add to Queue
                        </button>
                    </div>
                    
                    <div class="queue-list" id="queue-list">
                        <!-- Queue items will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
        
        <!-- New Scheduled Post Modal -->
        <div class="modal" id="new-scheduled-post-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Schedule New Post</h3>
                    <button class="modal-close" id="close-schedule-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Post Content</label>
                        <textarea class="form-control" id="post-content" placeholder="Enter your post content" rows="5"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Platforms</label>
                        <div class="platform-selector">
                            <label class="platform-option">
                                <input type="checkbox" name="platform" value="twitter" checked>
                                <span class="platform-icon twitter"><i class="fab fa-twitter"></i></span>
                                <span class="platform-name">Twitter</span>
                            </label>
                            <label class="platform-option">
                                <input type="checkbox" name="platform" value="facebook">
                                <span class="platform-icon facebook"><i class="fab fa-facebook-f"></i></span>
                                <span class="platform-name">Facebook</span>
                            </label>
                            <label class="platform-option">
                                <input type="checkbox" name="platform" value="linkedin">
                                <span class="platform-icon linkedin"><i class="fab fa-linkedin-in"></i></span>
                                <span class="platform-name">LinkedIn</span>
                            </label>
                            <label class="platform-option">
                                <input type="checkbox" name="platform" value="instagram">
                                <span class="platform-icon instagram"><i class="fab fa-instagram"></i></span>
                                <span class="platform-name">Instagram</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Schedule Type</label>
                        <div class="schedule-type-selector">
                            <label class="schedule-type-option">
                                <input type="radio" name="schedule-type" value="specific-time" checked>
                                <span class="type-icon"><i class="fas fa-calendar-day"></i></span>
                                <span class="type-name">Specific Time</span>
                            </label>
                            <label class="schedule-type-option">
                                <input type="radio" name="schedule-type" value="optimal-time">
                                <span class="type-icon"><i class="fas fa-bolt"></i></span>
                                <span class="type-name">Optimal Time</span>
                            </label>
                            <label class="schedule-type-option">
                                <input type="radio" name="schedule-type" value="add-to-queue">
                                <span class="type-icon"><i class="fas fa-list-ol"></i></span>
                                <span class="type-name">Add to Queue</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="specific-time-options" id="specific-time-options">
                        <div class="form-group">
                            <label class="form-label">Date & Time</label>
                            <input type="datetime-local" class="form-control" id="post-datetime">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Time Zone</label>
                            <select class="form-control" id="timezone-select">
                                <option value="auto">Auto (Account Default)</option>
                                <option value="UTC">UTC</option>
                                <option value="EST">Eastern Time (EST)</option>
                                <option value="CST">Central Time (CST)</option>
                                <option value="MST">Mountain Time (MST)</option>
                                <option value="PST">Pacific Time (PST)</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="optimal-time-options" id="optimal-time-options" style="display: none;">
                        <div class="form-group">
                            <label class="form-label">Post Date</label>
                            <input type="date" class="form-control" id="optimal-post-date">
                        </div>
                        <div class="optimal-time-suggestion">
                            <i class="fas fa-lightbulb"></i>
                            <span>AI Suggestion: Best posting time is between 9-11 AM or 7-9 PM</span>
                        </div>
                    </div>
                    
                    <div class="advanced-options">
                        <div class="advanced-options-header">
                            <span>Advanced Options</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="advanced-options-content" style="display: none;">
                            <div class="form-group">
                                <label class="form-label">Post Category</label>
                                <select class="form-control" id="post-category">
                                    <option value="">None</option>
                                    <option value="promotional">Promotional</option>
                                    <option value="educational">Educational</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="announcement">Announcement</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">
                                    <input type="checkbox" id="repeat-post"> Repeat Post
                                </label>
                                <div class="repeat-options" style="display: none; margin-top: 0.5rem;">
                                    <div class="form-group">
                                        <label class="form-label">Frequency</label>
                                        <select class="form-control" id="repeat-frequency">
                                            <option value="daily">Daily</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label">End Date</label>
                                        <input type="date" class="form-control" id="repeat-end-date">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="cancel-schedule-btn">Cancel</button>
                    <button class="btn btn-primary" id="confirm-schedule-btn">Schedule Post</button>
                </div>
            </div>
        </div>
        
        <!-- Post Preview Modal -->
        <div class="modal" id="post-preview-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Post Preview</h3>
                    <button class="modal-close" id="close-preview-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="post-preview-container" id="post-preview-container">
                        <!-- Post preview will be generated here -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="back-to-edit-btn">Back to Edit</button>
                    <button class="btn btn-primary" id="confirm-post-btn">Confirm & Schedule</button>
                </div>
            </div>
        </div>
        
        <!-- Toast Container -->
        <div class="toast-container" id="toast-container"></div>
    `;

    //  CSS styles
    const style = document.createElement('style');
    style.textContent = `
        /* Scheduler Styles */
        .scheduler-container {
            padding: 1.5rem;
        }
        
        .scheduler-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .scheduler-tabs {
            display: flex;
            border-bottom: 1px solid var(--border);
            margin-bottom: 1.5rem;
            overflow-x: auto;
        }
        
        .scheduler-tabs .tab {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            position: relative;
            color: var(--text-secondary);
            font-weight: 500;
            white-space: wrap;
        }
        
        .scheduler-tabs .tab.active {
            color: var(--primary-light);
        }
        
        .scheduler-tabs .tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--primary);
        }
        
        /* Calendar View */
        .calendar-view-container {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1rem;
            border: 1px solid var(--border);
        }
        
        .calendar-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }
        
        .calendar-controls h2 {
            margin: 0;
            font-size: 1.25rem;
            min-width: 150px;
            text-align: center;
        }
        
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 0.5rem;
        }
        
        .calendar-day-header {
            text-align: center;
            font-size: 0.75rem;
            color: var(--text-secondary);
            padding: 0.5rem;
            text-transform: uppercase;
            font-weight: 500;
        }
        
        .calendar-day {
            aspect-ratio: .5/ .5;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 0.5rem;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }
        
        .calendar-day:hover {
            background: rgba(67, 97, 238, 0.1);
        }
        
        .calendar-day.today {
            background: rgba(67, 97, 238, 0.2);
            border: 1px solid var(--primary);
        }
        
        .calendar-day.selected {
            background: var(--primary);
            color: white;
        }
        
        .calendar-day.empty {
            background: transparent;
            cursor: default;
        }
        
        .day-number {
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.25rem;
        }
        
        .day-events {
            display: flex;
            flex-direction: column;
            align-item: center;
            justify-content: center;
            gap: 2px;
        }
        
        .day-event {
            height: 4px;
            
            border-radius: 2px;
            background: var(--primary);
            font-size: 0;
        }
        
        .day-event.twitter { background: var(--primary); }
        .day-event.facebook { background: #1877f2; }
        .day-event.linkedin { background: #0a66c2; }
        .day-event.instagram { background: #e4405f; }
        
        .day-more-events {
            font-size: 0.625rem;
            color: var(--primary-light);
            text-align: center;
            margin-top: 2px;
        }
        
        /* List View */
        .list-view-container {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid var(--border);
        }
        
        .list-filters {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            align-items: flex-end;
        }
        
        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
        
        .filter-group label {
            font-size: 0.75rem;
            color: var(--text-secondary);
        }
        
        .filter-group input[type="date"] {
            padding: 0.5rem;
        }
        
        .filter-group span {
            font-size: 0.75rem;
            color: var(--text-secondary);
            text-align: center;
        }
        
        .scheduled-posts-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .scheduled-post {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid var(--border);
            transition: all 0.2s ease;
        }
        
        .scheduled-post:hover {
            border-color: var(--primary);
        }
        
        .post-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .post-platforms {
            display: flex;
            gap: 0.5rem;
        }
        
        .platform-badge {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.75rem;
        }
        
        .platform-badge.twitter {
            background: var(--primary);
        }
        
        .platform-badge.facebook {
            background: #1877f2;
        }
        
        .platform-badge.linkedin {
            background: #0a66c2;
        }
        
        .platform-badge.instagram {
            background: #e4405f;
        }
        
        .post-status {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
        }
        
        .post-status.scheduled {
            background: rgba(67, 97, 238, 0.1);
            color: var(--primary);
        }
        
        .post-status.posted {
            background: rgba(74, 222, 128, 0.1);
            color: var(--success);
        }
        
        .post-status.failed {
            background: rgba(247, 37, 133, 0.1);
            color: var(--danger);
        }
        
        .post-schedule-time {
            font-size: 0.875rem;
            color: var(--text-primary);
            font-weight: 500;
        }
        
        .post-content {
            margin: 0.5rem 0;
            font-size: 0.875rem;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .post-actions {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
        }
        
        /* Queue View */
        .queue-view-container {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid var(--border);
        }
        
        .queue-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 1rem;
            text-align: center;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        
        .stat-label {
            font-size: 0.75rem;
            color: var(--text-secondary);
        }
        
        .queue-controls {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.5rem;
        }
        
        .queue-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .queue-item {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .queue-item-content {
            flex: 1;
        }
        
        .queue-item-time {
            font-size: 0.875rem;
            color: var(--text-primary);
            font-weight: 500;
        }
        
        .queue-item-platforms {
            display: flex;
            gap: 0.25rem;
            margin-top: 0.25rem;
        }
        
        .queue-item-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal-content {
            background: var(--darker);
            border-radius: 12px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid var(--border);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            animation: modalFadeIn 0.3s ease;
        }
        
        @keyframes modalFadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-title {
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .modal-close {
            background: transparent;
            border: none;
            color: var(--text-secondary);
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid var(--border);
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }
        
        /* Form Elements */
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .form-control {
            width: 100%;
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            border-radius: 6px;
            color: var(--text-primary);
            font-family: inherit;
            font-size: 0.875rem;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
        }
        
        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }
        
        /* Platform Selector */
        .platform-selector {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .platform-option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 6px;
            transition: all 0.2s ease;
        }
        
        .platform-option:hover {
            background: rgba(255, 255, 255, 0.05);
        }
        
        .platform-option input[type="checkbox"] {
            margin: 0;
        }
        
        .platform-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .platform-icon.twitter {
            background: var(--primary);
        }
        
        .platform-icon.facebook {
            background: #1877f2;
        }
        
        .platform-icon.linkedin {
            background: #0a66c2;
        }
        
        .platform-icon.instagram {
            background: #e4405f;
        }
        
        .platform-name {
            font-size: 0.875rem;
        }
        
        /* Schedule Type Selector */
        .schedule-type-selector {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .schedule-type-option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.75rem;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.05);
            flex: 1;
            min-width: 120px;
            transition: all 0.2s ease;
        }
        
        .schedule-type-option:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .schedule-type-option input[type="radio"] {
            margin: 0;
        }
        
        .type-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(67, 97, 238, 0.1);
            color: var(--primary);
        }
        
        .type-name {
            font-size: 0.875rem;
        }
        
        /* Optimal Time Suggestion */
        .optimal-time-suggestion {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem;
            background: rgba(67, 97, 238, 0.1);
            border-radius: 6px;
            color: var(--primary);
            font-size: 0.875rem;
            margin-top: 0.5rem;
        }
        
        /* Advanced Options */
        .advanced-options {
            border-top: 1px solid var(--border);
            padding-top: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .advanced-options-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        
        .advanced-options-header span {
            font-weight: 500;
        }
        
        .advanced-options-header i {
            transition: transform 0.2s ease;
        }
        
        .advanced-options-header.active i {
            transform: rotate(180deg);
        }
        
        .advanced-options-content {
            margin-top: 1rem;
        }
        
        /* Post Preview */
        .post-preview-container {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 1rem;
        }
        
        .preview-platform {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            background: var(--primary);
            color: white;
            border-radius: 4px;
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
        }
        
        .preview-content {
            font-size: 0.875rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }
        
        .preview-schedule {
            margin-top: 1rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
        }
        
        
        /* Responsive Styles */
        @media (max-width: 768px) {
            .scheduler-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .header-actions {
                width: 100%;
                justify-content: space-between;
            }
            
            .list-filters {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .filter-group {
                width: 100%;
            }
            
            .platform-selector, .schedule-type-selector {
                flex-direction: column;
            }
            
            .schedule-type-option {
                width: 100%;
            }
            
            .queue-item {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .queue-item-actions {
                width: 100%;
                justify-content: flex-end;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize scheduler functionality
    initSchedulerFunctionality();
}

function initSchedulerFunctionality() {
    // DOM Elements
    const tabs = document.querySelectorAll('.scheduler-tabs .tab');
    const tabContents = document.querySelectorAll('#scheduler-content .tab-content');
    const refreshBtn = document.getElementById('refresh-scheduler-btn');
    const newScheduledPostBtn = document.getElementById('new-scheduled-post-btn');
    const prevMonthBtn = document.getElementById('prev-month-btn');
    const nextMonthBtn = document.getElementById('next-month-btn');
    const todayBtn = document.getElementById('today-btn');
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthYear = document.getElementById('current-month-year');
    const applyFiltersBtn = document.getElementById('apply-filters-btn');
    const scheduledPostsList = document.getElementById('scheduled-posts-list');
    const pauseQueueBtn = document.getElementById('pause-queue-btn');
    const addToQueueBtn = document.getElementById('add-to-queue-btn');
    const queueList = document.getElementById('queue-list');
    const newScheduledPostModal = document.getElementById('new-scheduled-post-modal');
    const closeScheduleModal = document.getElementById('close-schedule-modal');
    const cancelScheduleBtn = document.getElementById('cancel-schedule-btn');
    const confirmScheduleBtn = document.getElementById('confirm-schedule-btn');
    const postPreviewModal = document.getElementById('post-preview-modal');
    const closePreviewModal = document.getElementById('close-preview-modal');
    const backToEditBtn = document.getElementById('back-to-edit-btn');
    const confirmPostBtn = document.getElementById('confirm-post-btn');
    const postPreviewContainer = document.getElementById('post-preview-container');
    const toastContainer = document.getElementById('toast-container');

    // Current date
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Sample data
    const scheduledPosts = [
        {
            id: 1,
            content: 'Check out our new feature release! We\'ve added advanced analytics to help you track your Twitter growth. #TwitterGrowth #Analytics',
            platforms: ['twitter'],
            scheduledTime: new Date(currentYear, currentMonth, 15, 9, 30),
            status: 'scheduled',
            category: 'announcement'
        },
        {
            id: 2,
            content: 'How to grow your Twitter audience in 2023 - our latest blog post covers all the strategies you need to know. Link in bio! #TwitterTips #SocialMedia',
            platforms: ['twitter', 'facebook', 'linkedin'],
            scheduledTime: new Date(currentYear, currentMonth, 18, 14, 0),
            status: 'scheduled',
            category: 'educational'
        },
        {
            id: 3,
            content: 'We\'re hosting a webinar next week on Twitter automation best practices. Sign up now! #Webinar #TwitterMarketing',
            platforms: ['twitter', 'linkedin'],
            scheduledTime: new Date(currentYear, currentMonth, 10, 11, 0),
            status: 'posted',
            category: 'promotional'
        },
        {
            id: 4,
            content: 'Our servers are currently undergoing maintenance. We apologize for any inconvenience. Service will be restored shortly. #Maintenance #Update',
            platforms: ['twitter', 'facebook'],
            scheduledTime: new Date(currentYear, currentMonth, 5, 8, 0),
            status: 'failed',
            category: 'announcement'
        },
        {
            id: 5,
            content: 'What\'s your biggest challenge with social media marketing? We\'d love to hear your thoughts! #Discussion #Community',
            platforms: ['twitter', 'facebook', 'instagram'],
            scheduledTime: new Date(currentYear, currentMonth, 22, 16, 30),
            status: 'scheduled',
            category: 'engagement'
        }
    ];

    const queueItems = [
        {
            id: 1,
            content: 'Monday motivation: Start your week strong with these productivity tips! #MondayMotivation #Productivity',
            platforms: ['twitter', 'linkedin'],
            scheduledTime: 'Today, 9:00 AM'
        },
        {
            id: 2,
            content: 'Did you know? Posts with images get 150% more retweets than those without. #TwitterFacts #SocialMedia',
            platforms: ['twitter'],
            scheduledTime: 'Today, 2:30 PM'
        },
        {
            id: 3,
            content: 'Our team is working on some exciting new features. Stay tuned for updates! #ComingSoon #Innovation',
            platforms: ['twitter', 'facebook'],
            scheduledTime: 'Tomorrow, 11:00 AM'
        }
    ];

    // Initialize the scheduler
    function init() {
        // Generate calendar
        generateCalendar(currentMonth, currentYear);
        
        // Load scheduled posts
        loadScheduledPosts(scheduledPosts);
        
        // Load queue items
        loadQueueItems(queueItems);
        
        // Set up event listeners
        setupEventListeners();
    }

    // Generate calendar
    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();
        
        // Set month and year in title
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        currentMonthYear.textContent = `${monthNames[month]} ${year}`;
        
        // Clear previous calendar
        calendarGrid.innerHTML = '';
        
        // Add day headers
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            // Check if it's today
            const today = new Date();
            if (date.getDate() === today.getDate() && 
                date.getMonth() === today.getMonth() && 
                date.getFullYear() === today.getFullYear()) {
                dayElement.classList.add('today');
            }
            
            // Add day number
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayElement.appendChild(dayNumber);
            
            // Add day events
            const dayEvents = document.createElement('div');
            dayEvents.className = 'day-events';
            
            // Get posts for this day
            const dayPosts = scheduledPosts.filter(post => {
                return post.scheduledTime.getDate() === day && 
                       post.scheduledTime.getMonth() === month && 
                       post.scheduledTime.getFullYear() === year;
            });
            
            // Add events (show max 3)
            const eventsToShow = dayPosts.slice(0, 3);
            eventsToShow.forEach(post => {
                post.platforms.forEach(platform => {
                    const event = document.createElement('div');
                    event.className = `day-event ${platform}`;
                    dayEvents.appendChild(event);
                });
            });
            
            // Show "more" indicator if there are more than 3 posts
            if (dayPosts.length > 3) {
                const moreEvents = document.createElement('div');
                moreEvents.className = 'day-more-events';
                moreEvents.textContent = `+${dayPosts.length - 3} more`;
                dayEvents.appendChild(moreEvents);
            }
            
            dayElement.appendChild(dayEvents);
            
            // Add click event
            dayElement.addEventListener('click', function() {
                // Remove selected class from all days
                document.querySelectorAll('.calendar-day').forEach(d => {
                    d.classList.remove('selected');
                });
                
                // Add selected class to clicked day
                this.classList.add('selected');
                
                // Show posts for this day
                if (dayPosts.length > 0) {
                    showToast(`You have ${dayPosts.length} scheduled posts on ${monthNames[month]} ${day}`, 'success');
                } else {
                    showToast(`No scheduled posts on ${monthNames[month]} ${day}`, 'info');
                }
            });
            
            calendarGrid.appendChild(dayElement);
        }
    }

    // Load scheduled posts
    function loadScheduledPosts(posts) {
        scheduledPostsList.innerHTML = '';
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'scheduled-post';
            
            // Format scheduled time
            const options = { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
            };
            const scheduledTime = post.scheduledTime.toLocaleString('en-US', options);
            
            postElement.innerHTML = `
                <div class="post-header">
                    <div class="post-platforms">
                        ${post.platforms.map(platform => `
                            <div class="platform-badge ${platform}">
                                <i class="fab fa-${platform}"></i>
                            </div>
                        `).join('')}
                    </div>
                    <div class="post-status ${post.status}">
                        ${post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </div>
                </div>
                <div class="post-schedule-time">${scheduledTime}</div>
                <div class="post-content">${post.content}</div>
                <div class="post-actions">
                    <button class="btn btn-secondary btn-sm edit-post-btn" data-id="${post.id}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-secondary btn-sm delete-post-btn" data-id="${post.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            
            scheduledPostsList.appendChild(postElement);
        });
        
        // Add event listeners to post buttons
        document.querySelectorAll('.edit-post-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = this.getAttribute('data-id');
                const post = posts.find(p => p.id == postId);
                showToast(`Editing post: ${post.content.substring(0, 30)}...`, 'info');
            });
        });
        
        document.querySelectorAll('.delete-post-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const postId = this.getAttribute('data-id');
                showToast(`Post ${postId} deleted`, 'success');
            });
        });
    }

    // Load queue items
    function loadQueueItems(items) {
        queueList.innerHTML = '';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'queue-item';
            
            itemElement.innerHTML = `
                <div class="queue-item-content">
                    <div class="queue-item-time">${item.scheduledTime}</div>
                    <div class="queue-item-platforms">
                        ${item.platforms.map(platform => `
                            <div class="platform-badge ${platform}">
                                <i class="fab fa-${platform}"></i>
                            </div>
                        `).join('')}
                    </div>
                    <div class="post-content">${item.content}</div>
                </div>
                <div class="queue-item-actions">
                    <button class="btn btn-secondary btn-sm edit-queue-item-btn" data-id="${item.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm delete-queue-item-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            queueList.appendChild(itemElement);
        });
        
        // Add event listeners to queue item buttons
        document.querySelectorAll('.edit-queue-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                const item = items.find(i => i.id == itemId);
                showToast(`Editing queue item: ${item.content.substring(0, 30)}...`, 'info');
            });
        });
        
        document.querySelectorAll('.delete-queue-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                showToast(`Queue item ${itemId} deleted`, 'success');
            });
        });
    }

    // Show toast notification
    function showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = '';
        if (type === 'success') icon = '<i class="fas fa-check-circle toast-icon"></i>';
        else if (type === 'error') icon = '<i class="fas fa-exclamation-circle toast-icon"></i>';
        else if (type === 'warning') icon = '<i class="fas fa-exclamation-triangle toast-icon"></i>';
        else icon = '<i class="fas fa-info-circle toast-icon"></i>';
        
        toast.innerHTML = `
            ${icon}
            <div class="toast-message">${message}</div>
            <button class="toast-close">&times;</button>
        `;
        
        toastContainer.appendChild(toast);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.remove();
        }, 5000);
        
        // Close button
        toast.querySelector('.toast-close').addEventListener('click', function() {
            toast.remove();
        });
    }

    // Set up event listeners
    function setupEventListeners() {
        // Tab switching
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
        
        // Refresh button
        refreshBtn.addEventListener('click', function() {
            this.innerHTML = '<span class="spinner"></span> Refreshing...';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
                showToast('Scheduler data refreshed', 'success');
            }, 1500);
        });
        
        // New scheduled post button
        newScheduledPostBtn.addEventListener('click', function() {
            newScheduledPostModal.classList.add('active');
        });
        
        // Close schedule modal
        closeScheduleModal.addEventListener('click', function() {
            newScheduledPostModal.classList.remove('active');
        });
        
        cancelScheduleBtn.addEventListener('click', function() {
            newScheduledPostModal.classList.remove('active');
        });
        
        // Calendar navigation
        prevMonthBtn.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentMonth, currentYear);
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentMonth, currentYear);
        });
        
        // Today button
        todayBtn.addEventListener('click', function() {
            const today = new Date();
            currentMonth = today.getMonth();
            currentYear = today.getFullYear();
            generateCalendar(currentMonth, currentYear);
        });
        
        // Apply filters button
        applyFiltersBtn.addEventListener('click', function() {
            const statusFilter = document.getElementById('status-filter').value;
            const platformFilter = document.getElementById('platform-filter').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            
            let filteredPosts = [...scheduledPosts];
            
            // Apply status filter
            if (statusFilter !== 'all') {
                filteredPosts = filteredPosts.filter(post => post.status === statusFilter);
            }
            
            // Apply platform filter
            if (platformFilter !== 'all') {
                filteredPosts = filteredPosts.filter(post => post.platforms.includes(platformFilter));
            }
            
            // Apply date range filter
            if (startDate) {
                const startDateObj = new Date(startDate);
                filteredPosts = filteredPosts.filter(post => post.scheduledTime >= startDateObj);
            }
            
            if (endDate) {
                const endDateObj = new Date(endDate);
                endDateObj.setHours(23, 59, 59, 999);
                filteredPosts = filteredPosts.filter(post => post.scheduledTime <= endDateObj);
            }
            
            loadScheduledPosts(filteredPosts);
            showToast(`Showing ${filteredPosts.length} filtered posts`, 'success');
        });
        
        // Pause queue button
        pauseQueueBtn.addEventListener('click', function() {
            if (this.textContent.includes('Pause')) {
                this.innerHTML = '<i class="fas fa-play"></i> Resume Queue';
                showToast('Queue paused', 'warning');
            } else {
                this.innerHTML = '<i class="fas fa-pause"></i> Pause Queue';
                showToast('Queue resumed', 'success');
            }
        });
        
        // Add to queue button
        addToQueueBtn.addEventListener('click', function() {
            showToast('Add to queue functionality coming soon!', 'info');
        });
        
        // Schedule type radio buttons
        document.querySelectorAll('input[name="schedule-type"]').forEach(radio => {
            radio.addEventListener('change', function() {
                document.getElementById('specific-time-options').style.display = 'none';
                document.getElementById('optimal-time-options').style.display = 'none';
                
                if (this.value === 'specific-time') {
                    document.getElementById('specific-time-options').style.display = 'block';
                } else if (this.value === 'optimal-time') {
                    document.getElementById('optimal-time-options').style.display = 'block';
                }
            });
        });
        
        // Advanced options toggle
        document.querySelector('.advanced-options-header').addEventListener('click', function() {
            const content = document.querySelector('.advanced-options-content');
            const icon = this.querySelector('i');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                this.classList.add('active');
            } else {
                content.style.display = 'none';
                this.classList.remove('active');
            }
        });
        
        // Repeat post checkbox
        document.getElementById('repeat-post').addEventListener('change', function() {
            const repeatOptions = document.querySelector('.repeat-options');
            repeatOptions.style.display = this.checked ? 'block' : 'none';
        });
        
        // Confirm schedule button
        confirmScheduleBtn.addEventListener('click', function() {
            const postContent = document.getElementById('post-content').value.trim();
            const selectedPlatforms = Array.from(document.querySelectorAll('input[name="platform"]:checked')).map(el => el.value);
            const scheduleType = document.querySelector('input[name="schedule-type"]:checked').value;
            
            if (!postContent) {
                showToast('Please enter post content', 'error');
                return;
            }
            
            if (selectedPlatforms.length === 0) {
                showToast('Please select at least one platform', 'error');
                return;
            }
            
            // Generate preview
            postPreviewContainer.innerHTML = `
                ${selectedPlatforms.map(platform => `
                    <div class="preview-platform ${platform}">
                        <i class="fab fa-${platform}"></i> ${platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </div>
                `).join('')}
                <div class="preview-content">${postContent}</div>
                <div class="preview-schedule">
                    Scheduled for: ${scheduleType === 'specific-time' ? 
                        document.getElementById('post-datetime').value : 
                        scheduleType === 'optimal-time' ? 
                        'Optimal time on ' + document.getElementById('optimal-post-date').value : 
                        'Added to posting queue'}
                </div>
            `;
            
            // Show preview modal
            newScheduledPostModal.classList.remove('active');
            postPreviewModal.classList.add('active');
        });
        
        // Back to edit button
        backToEditBtn.addEventListener('click', function() {
            postPreviewModal.classList.remove('active');
            newScheduledPostModal.classList.add('active');
        });
        
        // Confirm post button
        confirmPostBtn.addEventListener('click', function() {
            this.innerHTML = '<span class="spinner"></span> Scheduling...';
            
            // Simulate API call
            setTimeout(() => {
                this.innerHTML = 'Confirm & Schedule';
                postPreviewModal.classList.remove('active');
                showToast('Post scheduled successfully', 'success');
                
                // Reset form
                document.getElementById('post-content').value = '';
                document.querySelectorAll('input[name="platform"]').forEach(el => el.checked = false);
                document.querySelector('input[name="platform"][value="twitter"]').checked = true;
                document.querySelector('input[name="schedule-type"][value="specific-time"]').checked = true;
                document.getElementById('specific-time-options').style.display = 'block';
                document.getElementById('optimal-time-options').style.display = 'none';
                document.getElementById('post-datetime').value = '';
                document.getElementById('optimal-post-date').value = '';
                document.getElementById('repeat-post').checked = false;
                document.querySelector('.repeat-options').style.display = 'none';
                document.querySelector('.advanced-options-content').style.display = 'none';
                document.querySelector('.advanced-options-header').classList.remove('active');
                
                // In a real app, we would update the calendar and lists with the new post
            }, 1500);
        });
        
        // Close preview modal
        closePreviewModal.addEventListener('click', function() {
            postPreviewModal.classList.remove('active');
        });
    }

    // Initialize the scheduler
    init();
}