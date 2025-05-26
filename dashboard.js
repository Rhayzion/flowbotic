document.addEventListener('DOMContentLoaded', () => {
    // ===== INJECT STYLES =====
    const injectStyles = (css) => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    };

    // ===== MODERN DASHBOARD CSS =====
    injectStyles(`
        :root {
            --primary: #3B82F6;
            --secondary: #10B981;
            --warning: #F59E0B;
            --danger: #EF4444;
            --card-bg: #FFFFFF;
            --border: #E5E7EB;
            --text-primary: #1F2937;
            --text-secondary: #6B7280;
        }

        /* Stats Cards */
        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--border);
            position: relative;
            overflow: hidden;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
            font-size: 0.8125rem;
            color: var(--text-secondary);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .stat-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
        }

        .stat-card.secondary .stat-icon {
            background: rgba(16, 185, 129, 0.1);
            color: var(--secondary);
        }

        .stat-card.warning .stat-icon {
            background: rgba(245, 158, 11, 0.1);
            color: var(--warning);
        }

        .stat-card.danger .stat-icon {
            background: rgba(239, 68, 68, 0.1);
            color: var(--danger);
        }

        .stat-value {
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
            color: var(--text-primary);
        }

        .stat-change {
            font-size: 0.8125rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .stat-change.positive { color: var(--secondary); }
        .stat-change.negative { color: var(--danger); }

        /* Contextual Tooltips */
        .stat-tooltip {
            position: relative;
            display: inline-block;
            cursor: help;
        }

        .stat-tooltip .tooltip-text {
            visibility: hidden;
            width: 200px;
            background-color: var(--card-bg);
            color: var(--text-primary);
            text-align: center;
            border-radius: 6px;
            padding: 8px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            opacity: 0;
            transition: opacity 0.3s;
            border: 1px solid var(--border);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            font-size: 0.75rem;
            font-weight: normal;
        }

        .stat-tooltip:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        /* Quick Actions */
        .quick-actions {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .quick-action-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.25rem;
            background: var(--primary);
            color: white;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s ease;
            border: none;
        }

        .quick-action-btn:hover {
            background: #2563EB;
        }

        .quick-action-btn.secondary {
            background: var(--secondary);
        }

        .quick-action-btn.secondary:hover {
            background: #0E9F6E;
        }

        /* Automation Toggle */
        .automation-toggle {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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
            color: var(--text-primary);
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
            height: 20px;
            width: 20px;
            left: 3px;
            bottom: 3px;
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

        /* Charts */
        .analytics-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .chart-container {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--border);
            position: relative;
        }

        .chart-updated {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 0.75rem;
            color: var(--text-secondary);
            z-index: 10;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .section-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .chart-actions {
            display: flex;
            gap: 0.5rem;
        }

        /* AI Insights */
        .ai-insights {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--border);
            margin-bottom: 2rem;
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
            color: var(--primary);
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

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 0.8125rem;
            cursor: pointer;
            transition: all 0.2s ease;
            border: 1px solid transparent;
            gap: 0.375rem;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background: #2563EB;
        }

        .btn-secondary {
            background: var(--card-bg);
            color: var(--text-primary);
            border-color: var(--border);
        }

        .btn-secondary:hover {
            background: #F3F4F6;
        }

        .btn-sm {
            padding: 0.375rem 0.75rem;
            font-size: 0.75rem;
        }

        /* Activity Feed */
        .activity-feed {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--border);
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
            background: #F3F4F6;
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

        /* Widget Controls */
        .widget-controls {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .widget-btn {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: 0.875rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
        }

        .widget-btn:hover {
            background: rgba(0,0,0,0.05);
        }

        /* Modal Overlay */
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

        /* Modal Container */
        .modal-container {
            background: white;
            border-radius: 12px;
            width: 100%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(20px);
            transition: transform 0.3s ease;
            position: relative;
        }

        .modal-overlay.active .modal-container {
            transform: translateY(0);
        }

        /* Modal Header */
        .modal-header {
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .modal-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #6b7280;
            padding: 0.25rem;
        }

        .modal-close:hover {
            color: #1f2937;
        }

        /* Modal Content */
        .modal-content {
            padding: 1.5rem;
        }

        /* Tweet Compose Area */
        .tweet-compose {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .tweet-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #e5e7eb;
            flex-shrink: 0;
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
            color: #1f2937;
        }

        .tweet-input::placeholder {
            color: #9ca3af;
        }

        /* Tweet Actions */
        .tweet-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #e5e7eb;
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
            color: #3b82f6;
            transition: background 0.2s ease;
        }

        .tweet-media-btn:hover {
            background: #e0e7ff;
        }

        .tweet-submit-btn {
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 9999px;
            padding: 0.5rem 1.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        .tweet-submit-btn:hover {
            background: #2563eb;
        }

        .tweet-submit-btn:disabled {
            background: #9ca3af;
            cursor: not-allowed;
        }

        /* Character Counter */
        .character-counter {
            font-size: 0.875rem;
            color: #6b7280;
            margin-right: 1rem;
        }

        .character-counter.warning {
            color: #f59e0b;
        }

        .character-counter.error {
            color: #ef4444;
        }

        /* Advanced Options */
        .advanced-options {
            margin-top: 1.5rem;
            border-top: 1px solid #e5e7eb;
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
            color: #1f2937;
        }

        .advanced-options-content {
            display: none;
            margin-top: 1rem;
        }

        .advanced-options.active .advanced-options-content {
            display: block;
        }

        /* Poll Options */
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
            border: 1px solid #e5e7eb;
            border-radius: 6px;
        }

        .poll-option button {
            background: none;
            border: none;
            color: #ef4444;
            cursor: pointer;
        }

        .add-poll-option {
            background: none;
            border: none;
            color: #3b82f6;
            font-weight: 500;
            cursor: pointer;
            margin-top: 0.5rem;
        }

        /* Schedule Options */
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
            border: 1px solid #e5e7eb;
            border-radius: 6px;
        }

        .timezone-select {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            margin-bottom: 1rem;
        }

        /* Recurring Options */
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

        /* Preview Section */
        .tweet-preview {
            margin-top: 1.5rem;
            padding: 1rem;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: #f9fafb;
        }

        .preview-header {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1f2937;
        }

        /* Emoji Picker */
        .emoji-picker-container {
            position: absolute;
            bottom: 60px;
            left: 50px;
            z-index: 10;
            display: none;
        }

        .emoji-picker-container.visible {
            display: block;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .analytics-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 640px) {
            .stats-container {
                grid-template-columns: 1fr 1fr;
            }
            
            .section-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .chart-actions {
                width: 100%;
                overflow-x: auto;
                padding-bottom: 8px;
            }

            .quick-actions {
                flex-direction: column;
            }

            .quick-action-btn {
                justify-content: center;
            }

            .modal-container {
                max-width: 95%;
                margin: 0 auto;
            }
            
            .tweet-compose {
                flex-direction: column;
            }
            
            .schedule-row {
                flex-direction: column;
                gap: 0.5rem;
            }
        }

        @media (max-width: 480px) {
            .stats-container {
                grid-template-columns: 1fr;
            }
        }
    `);

    // ===== MODAL TEMPLATES =====
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
                        <div class="tweet-avatar"></div>
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
                            <div class="emoji-picker-container"></div>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <span class="character-counter">280</span>
                            <button type="button" class="tweet-submit-btn" disabled>Tweet</button>
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
                        <div class="tweet-avatar"></div>
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
                            <!-- More timezones would be added dynamically -->
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
                            <div class="emoji-picker-container"></div>
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

    // ===== MODAL FUNCTIONS =====
    function openModal(modal) {
        document.body.appendChild(modal);
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Add event listener for close button
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => closeModal(modal));
        
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
        modal.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }

    function initPollFunctionality(modal) {
        const pollCheckbox = modal.querySelector('#addPoll');
        const pollOptions = modal.querySelector('.poll-options');
        const addOptionBtn = modal.querySelector('.add-poll-option');
        
        pollCheckbox.addEventListener('change', () => {
            pollOptions.style.display = pollCheckbox.checked ? 'block' : 'none';
        });
        
        addOptionBtn.addEventListener('click', () => {
            if (modal.querySelectorAll('.poll-option').length >= 4) return;
            
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
        
        header.addEventListener('click', () => {
            options.classList.toggle('active');
            const icon = header.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    }

    function initTweetInput(modal) {
        const textarea = modal.querySelector('.tweet-input');
        const counter = modal.querySelector('.character-counter');
        const submitBtn = modal.querySelector('.tweet-submit-btn');
        const previewContent = modal.querySelector('.preview-content');
        const previewSection = modal.querySelector('.tweet-preview');
        
        textarea.addEventListener('input', () => {
            const remaining = 280 - textarea.value.length;
            counter.textContent = remaining;
            
            // Update counter color based on remaining characters
            counter.className = 'character-counter';
            if (remaining < 20) counter.classList.add('warning');
            if (remaining < 0) counter.classList.add('error');
            
            // Enable/disable submit button
            submitBtn.disabled = textarea.value.length === 0 || textarea.value.length > 280;
            
            // Update preview
            if (textarea.value) {
                previewContent.textContent = textarea.value;
                previewSection.style.display = 'block';
            } else {
                previewSection.style.display = 'none';
            }
        });
        
        // Submit functionality
        submitBtn.addEventListener('click', () => {
            const tweetContent = textarea.value;
            if (tweetContent.length === 0 || tweetContent.length > 280) return;
            
            if (modal.querySelector('.modal-title').textContent === 'Compose Tweet') {
                console.log('Posting tweet:', tweetContent);
                // In a real app, you would send this to your backend
                showToast('Tweet posted successfully!');
            } else {
                const date = modal.querySelector('#scheduleDate').value;
                const time = modal.querySelector('#scheduleTime').value;
                console.log('Scheduling tweet:', tweetContent, 'for', date, time);
                // In a real app, you would send this to your backend
                showToast('Tweet scheduled successfully!');
            }
            
            closeModal(modal);
        });
    }

    function initRecurringOptions(modal) {
        const toggle = modal.querySelector('#recurringToggle');
        const options = modal.querySelector('.recurring-options');
        
        toggle.addEventListener('change', () => {
            options.classList.toggle('active');
        });
    }

    function initMediaButtons(modal) {
        // This would be more fully implemented with actual media upload functionality
        // For now, we'll just log to console
        modal.querySelectorAll('.tweet-media-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const icon = e.currentTarget.querySelector('i');
                
                if (icon.classList.contains('fa-image')) {
                    console.log('Media upload clicked');
                    // This would trigger a file input
                } else if (icon.classList.contains('fa-film')) {
                    console.log('GIF picker clicked');
                } else if (icon.classList.contains('fa-chart-pie')) {
                    console.log('Poll creation clicked');
                    modal.querySelector('#addPoll').click();
                } else if (icon.classList.contains('fa-smile')) {
                    console.log('Emoji picker clicked');
                    // This would show an emoji picker
                }
            });
        });
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#10B981';
        toast.style.color = 'white';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        toast.style.zIndex = '1000';
        toast.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s';
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }

    // ===== DASHBOARD MARKUP =====
    const dashboardTab = document.getElementById('dashboard');
    dashboardTab.innerHTML = `
        <!-- Quick Action Buttons -->
        <div class="quick-actions">
            <button class="quick-action-btn" id="composeTweetBtn">
                <i class="fas fa-pen"></i> Compose Tweet
            </button>
            <button class="quick-action-btn secondary" id="scheduleTweetBtn">
                <i class="fas fa-calendar-plus"></i> Schedule Tweet
            </button>
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
                <span class="chart-updated">Updated just now</span>
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

        <!-- Charts with Widget Controls -->
        <div class="widget-controls">
            <button class="widget-btn" data-widget="engagementChart">
                <i class="fas fa-eye-slash"></i> Hide Engagement
            </button>
            <button class="widget-btn" data-widget="followerChart">
                <i class="fas fa-eye-slash"></i> Hide Followers
            </button>
            <button class="widget-btn" id="resetWidgets">
                <i class="fas fa-redo"></i> Reset Layout
            </button>
        </div>

        <div class="analytics-grid">
            <div class="chart-container" id="engagementWidget">
                <div class="section-header">
                    <h3 class="section-title">Engagement Analytics</h3>
                    <div class="chart-actions">
                        <button class="btn btn-primary btn-sm" id="engagementWeekBtn">7 Days</button>
                        <button class="btn btn-secondary btn-sm" id="engagementMonthBtn">30 Days</button>
                        <button class="btn btn-secondary btn-sm" id="engagementCustomBtn">Custom</button>
                    </div>
                </div>
                <span class="chart-updated">Updated 2 minutes ago</span>
                <div id="engagementChart" style="min-height: 300px;"></div>
            </div>
            <div class="chart-container" id="followerWidget">
                <div class="section-header">
                    <h3 class="section-title">Follower Growth</h3>
                    <div class="chart-actions">
                        <button class="btn btn-primary btn-sm" id="followerWeekBtn">Week</button>
                        <button class="btn btn-secondary btn-sm" id="followerMonthBtn">Month</button>
                    </div>
                </div>
                <span class="chart-updated">Updated 5 minutes ago</span>
                <div id="followerChart" style="min-height: 300px;"></div>
            </div>
        </div>

        <!-- Activity Feed -->
        <div class="activity-feed">
            <div class="section-header">
                <h3 class="section-title">Recent Activity</h3>
                <div>
                    <span class="chart-updated" style="margin-right: 1rem;">Updated just now</span>
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

    // ===== CHART FUNCTIONS =====
    let engagementChart, followerChart;

    function initEngagementChart(period = 'week') {
        const weekData = {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [
                { name: 'Posts', data: [5, 8, 6, 9, 7, 10, 8] },
                { name: 'Likes', data: [42, 65, 58, 72, 63, 89, 76] },
                { name: 'Replies', data: [12, 18, 15, 21, 17, 25, 20] }
            ]
        };

        const monthData = {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            series: [
                { name: 'Posts', data: [32, 28, 35, 30] },
                { name: 'Likes', data: [280, 320, 295, 310] },
                { name: 'Replies', data: [75, 82, 68, 72] }
            ]
        };

        const data = period === 'week' ? weekData : monthData;

        const options = {
            series: data.series,
            chart: {
                type: 'area',
                height: '100%',
                toolbar: { show: true },
                animations: { enabled: true },
                fontFamily: 'Inter, sans-serif',
                zoom: { enabled: false }
            },
            colors: ['#3B82F6', '#10B981', '#F59E0B'],
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth', width: 2 },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.2,
                    stops: [0, 90, 100]
                }
            },
            xaxis: {
                categories: data.categories,
                labels: { style: { colors: '#6B7280', fontSize: '12px' } },
                axisBorder: { show: false },
                axisTicks: { show: false },
                title: { text: 'Time Period', style: { color: '#6B7280', fontSize: '12px' } }
            },
            yaxis: {
                labels: { style: { colors: '#6B7280', fontSize: '12px' } },
                min: 0,
                title: { text: 'Engagement Count', style: { color: '#6B7280', fontSize: '12px' } }
            },
            tooltip: {
                y: { formatter: (val) => val }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '14px',
                markers: { radius: 8 }
            },
            grid: {
                borderColor: '#E5E7EB',
                strokeDashArray: 3,
                padding: { top: 0, right: 20, bottom: 0, left: 20 }
            }
        };

        if (engagementChart) engagementChart.destroy();
        engagementChart = new ApexCharts(document.querySelector("#engagementChart"), options);
        engagementChart.render();
    }

    function initFollowerChart(period = 'week') {
        const weekData = {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [{ name: 'Followers', data: [502, 507, 512, 515, 518, 520, 525] }]
        };

        const monthData = {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            series: [{ name: 'Followers', data: [480, 495, 510, 525] }]
        };

        const data = period === 'week' ? weekData : monthData;

        const options = {
            series: data.series,
            chart: {
                type: 'line',
                height: '100%',
                toolbar: { show: false },
                animations: { enabled: true },
                fontFamily: 'Inter, sans-serif'
            },
            colors: ['#3B82F6'],
            stroke: { curve: 'straight', width: 3 },
            markers: { size: 5 },
            xaxis: {
                categories: data.categories,
                labels: { style: { colors: '#6B7280', fontSize: '12px' } },
                axisBorder: { show: false },
                axisTicks: { show: false },
                title: { text: 'Time Period', style: { color: '#6B7280', fontSize: '12px' } }
            },
            yaxis: {
                labels: { style: { colors: '#6B7280', fontSize: '12px' } },
                min: period === 'week' ? 500 : 475,
                title: { text: 'Follower Count', style: { color: '#6B7280', fontSize: '12px' } }
            },
            tooltip: {
                y: { formatter: (val) => `${val} followers` }
            },
            grid: {
                borderColor: '#E5E7EB',
                strokeDashArray: 3,
                padding: { top: 0, right: 20, bottom: 0, left: 20 }
            }
        };

        if (followerChart) followerChart.destroy();
        followerChart = new ApexCharts(document.querySelector("#followerChart"), options);
        followerChart.render();
    }

    // ===== WIDGET MANAGEMENT =====
    function setupWidgetControls() {
        const widgets = {
            engagementWidget: true,
            followerWidget: true
        };

        document.querySelectorAll('.widget-btn[data-widget]').forEach(btn => {
            btn.addEventListener('click', function() {
                const widgetId = this.getAttribute('data-widget');
                const widget = document.getElementById(widgetId + 'Widget');
                
                if (widgets[widgetId + 'Widget']) {
                    widget.style.display = 'none';
                    widgets[widgetId + 'Widget'] = false;
                    this.innerHTML = `<i class="fas fa-eye"></i> Show ${widgetId === 'engagementChart' ? 'Engagement' : 'Followers'}`;
                } else {
                    widget.style.display = 'block';
                    widgets[widgetId + 'Widget'] = true;
                    this.innerHTML = `<i class="fas fa-eye-slash"></i> Hide ${widgetId === 'engagementChart' ? 'Engagement' : 'Followers'}`;
                }
            });
        });

        document.getElementById('resetWidgets').addEventListener('click', function() {
            document.querySelectorAll('.chart-container').forEach(widget => {
                widget.style.display = 'block';
            });
            document.querySelectorAll('.widget-btn[data-widget]').forEach(btn => {
                btn.innerHTML = `<i class="fas fa-eye-slash"></i> Hide ${btn.getAttribute('data-widget') === 'engagementChart' ? 'Engagement' : 'Followers'}`;
            });
            Object.keys(widgets).forEach(key => {
                widgets[key] = true;
            });
        });
    }

    // ===== REAL-TIME UPDATES =====
    function simulateRealTimeUpdates() {
        // Update "last updated" times every minute
        setInterval(() => {
            const now = new Date();
            document.querySelectorAll('.chart-updated').forEach(el => {
                if (Math.random() > 0.7) { // Randomly update some elements
                    const minutes = Math.floor(Math.random() * 5) + 1;
                    el.textContent = `Updated ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
                }
            });
        }, 60000);
    }

    // ===== EVENT HANDLERS =====
    function handleTabSwitch(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    function setActiveButton(activeBtn, ...otherBtns) {
        activeBtn.classList.replace('btn-secondary', 'btn-primary');
        otherBtns.forEach(btn => {
            btn.classList.replace('btn-primary', 'btn-secondary');
        });
    }

    // ===== INITIALIZE =====
    initEngagementChart();
    initFollowerChart();
    setupWidgetControls();
    simulateRealTimeUpdates();

    // ===== EVENT LISTENERS =====
    // Quick Action Buttons
    document.getElementById('composeTweetBtn').addEventListener('click', () => {
        const modal = createComposeTweetModal();
        openModal(modal);
    });

    document.getElementById('scheduleTweetBtn').addEventListener('click', () => {
        const modal = createScheduleTweetModal();
        openModal(modal);
    });

    // Automation Toggle
    document.getElementById('automationToggle').addEventListener('change', (e) => {
        console.log(`Automation ${e.target.checked ? 'enabled' : 'disabled'}`);
    });

    // Settings Button (switches to automation tab)
    document.getElementById('automationSettings').addEventListener('click', () => {
        handleTabSwitch('automation');
    });

    // Engagement Chart Period Buttons
    const engagementWeekBtn = document.getElementById('engagementWeekBtn');
    const engagementMonthBtn = document.getElementById('engagementMonthBtn');
    const engagementCustomBtn = document.getElementById('engagementCustomBtn');

    engagementWeekBtn.addEventListener('click', () => {
        setActiveButton(engagementWeekBtn, engagementMonthBtn, engagementCustomBtn);
        initEngagementChart('week');
    });

    engagementMonthBtn.addEventListener('click', () => {
        setActiveButton(engagementMonthBtn, engagementWeekBtn, engagementCustomBtn);
        initEngagementChart('month');
    });

    engagementCustomBtn.addEventListener('click', () => {
        setActiveButton(engagementCustomBtn, engagementWeekBtn, engagementMonthBtn);
        console.log('Custom date range selected');
    });

    // Follower Chart Period Buttons
    const followerWeekBtn = document.getElementById('followerWeekBtn');
    const followerMonthBtn = document.getElementById('followerMonthBtn');

    followerWeekBtn.addEventListener('click', () => {
        setActiveButton(followerWeekBtn, followerMonthBtn);
        initFollowerChart('week');
    });

    followerMonthBtn.addEventListener('click', () => {
        setActiveButton(followerMonthBtn, followerWeekBtn);
        initFollowerChart('month');
    });

    // Refresh Activity
    document.getElementById('refreshActivity').addEventListener('click', () => {
        console.log('Refreshing activity...');
        document.querySelector('.activity-feed .chart-updated').textContent = 'Updated just now';
        showToast('Activity feed refreshed');
    });

    // Keyboard shortcuts for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
        
        // Shortcut for compose tweet (Ctrl+Enter or Cmd+Enter)
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
});