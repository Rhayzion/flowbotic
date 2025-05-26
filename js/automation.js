document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('automation-content') && document.getElementById('automation-content').classList.contains('active')) {
        initAutomation();
    }
});

function initAutomation() {
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --primary: #4361ee;
            --primary-dark: #3a0ca3;
            --primary-light: #4895ef;
            --secondary: #4cc9f0;
            --accent: #7209b7;
            --danger: #f72585;
            --warning: #f8961e;
            --success: #4ade80;
            --dark: #1a1a2e;
            --darker: #16213e;
            --light: #f8f9fa;
            --lighter: #e2e8f0;
            --border: rgba(255, 255, 255, 0.1);
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-tertiary: #71717a;
            --glass: rgba(255, 255, 255, 0.08);
            --glass-border: rgba(255, 255, 255, 0.1);
            --card-bg: rgba(30, 41, 59, 0.4);
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
            --mobile-breakpoint: 768px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--dark);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            transition: var(--transition);
            overflow-x: hidden;
        }

        .automation-container {
            width: 100%;
            padding: 1rem;
            transition: var(--transition);
        }

        .btn {
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 0.8125rem;
            cursor: pointer;
            transition: var(--transition);
            border: 1px solid transparent;
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            user-select: none;
        }

        .btn:active {
            transform: scale(0.98);
        }

        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            background: var(--primary-dark);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
            border-color: var(--border);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.15);
        }

        .btn-sm {
            padding: 0.375rem 0.75rem;
            font-size: 0.75rem;
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .page-title {
            font-size: 1.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.25rem;
            border: 1px solid var(--border);
            margin-bottom: 1.5rem;
            transition: var(--transition);
            animation: slideUp 0.5s ease;
        }

        .card:active {
            transform: scale(0.99);
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .card-title {
            font-size: 1.1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
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
        }

        input:checked + .slider {
            background-color: var(--primary);
        }

        input:checked + .slider:before {
            transform: translateX(24px);
        }

        .rule-card {
            background: rgba(30, 41, 59, 0.6);
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 1px solid var(--border);
            transition: var(--transition);
        }

        .rule-card:active {
            transform: scale(0.99);
        }

        .rule-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .rule-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .action-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            word-break: break-word;
        }

        .chips-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .chip {
            background: rgba(67, 97, 238, 0.2);
            padding: 0.375rem 0.75rem;
            border-radius: 999px;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            transition: var(--transition);
            cursor: pointer;
        }

        .chip:active {
            transform: scale(0.95);
        }

        .chip-danger {
            background: rgba(247, 37, 133, 0.2);
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            font-size: 0.875rem;
        }

        .form-control {
            width: 100%;
            padding: 0.5rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: var(--text-primary);
            transition: var(--transition);
            font-family: 'Inter', sans-serif;
            font-size: 0.875rem;
        }

        .form-control:focus {
            border-color: var(--primary);
            outline: none;
        }

        .grid-2 {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .fab {
            position: fixed;
            bottom: 1.5rem;
            right: 1.5rem;
            z-index: 100;
        }

        .fab-btn {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
            border: none;
            cursor: pointer;
            transition: var(--transition);
        }

        .fab-btn:active {
            transform: scale(0.95);
            box-shadow: 0 6px 16px rgba(67, 97, 238, 0.4);
        }

        .status-indicator {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 0.5rem;
        }

        .status-active {
            background: var(--success);
            animation: pulse 2s infinite;
        }

        .status-inactive {
            background: var(--danger);
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
            100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }

        .badge {
            background: var(--success);
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            font-size: 0.75rem;
            white-space: nowrap;
        }

        .tooltip {
            position: absolute;
            background: var(--darker);
            color: var(--text-primary);
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            font-size: 0.75rem;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s;
            max-width: 200px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .activity-table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
        }

        .activity-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
        }

        .activity-table th, .activity-table td {
            padding: 0.75rem;
            text-align: left;
        }

        .activity-table th {
            font-weight: 500;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border);
        }

        .activity-table tr:not(:last-child) {
            border-bottom: 1px solid var(--border);
        }

        .swipeable {
            position: relative;
            overflow: hidden;
        }

        .swipe-content {
            position: relative;
            z-index: 1;
            background: inherit;
            transition: transform 0.3s ease;
        }

        .swipe-actions {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            display: flex;
            align-items: center;
            padding-right: 1rem;
            background: var(--danger);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }

        .swipe-actions button {
            background: transparent;
            border: none;
            color: white;
            padding: 0.5rem;
            cursor: pointer;
        }

        .toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .ai-suggestion {
            border-left: 4px solid var(--accent);
        }

        .prediction-badge {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.75rem;
        }

        .nlp-input {
            background: rgba(114, 9, 183, 0.1);
            border: 1px solid var(--accent);
        }

        @media (min-width: 768px) {
            .automation-container {
                padding: 2rem;
            }
            
            .grid-2 {
                grid-template-columns: 1fr 1fr;
            }
            
            .rule-actions {
                grid-template-columns: 1fr 1fr;
            }
            
            .stats-grid {
                grid-template-columns: repeat(4, 1fr);
            }
            
            .page-title {
                font-size: 1.75rem;
            }
            
            .card-title {
                font-size: 1.25rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Inject HTML
    const automationContent = document.getElementById("automation-content");

    automationContent.innerHTML = `
        <!-- AI Suggestion Card -->
        <div class="card ai-suggestion">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-lightbulb"></i>
                    AI Rule Suggestions
                </h3>
                <span class="badge">3 new</span>
            </div>
            <div class="rule-card">
                <div class="rule-header">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <strong>@IndustryLeader</strong>
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">85% confidence</span>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="btn btn-primary btn-sm accept-suggestion">
                            <i class="fas fa-check"></i> Add
                        </button>
                        <button class="btn btn-secondary btn-sm reject-suggestion">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="action-item">
                    <i class="fas fa-reply" style="color: var(--primary);"></i>
                    <span>Reply when mentioned with expert analysis</span>
                </div>
            </div>
        </div>

        <!-- NLP Input Card -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-comment-dots"></i>
                    Create Rule with AI
                </h3>
            </div>
            <div class="form-group">
                <textarea class="form-control nlp-input" id="nlpRuleInput" 
                    placeholder="Describe what you want to automate (e.g. 'Reply to all tweets about AI with our guide')"></textarea>
            </div>
            <button class="btn btn-primary" id="generateRuleBtn" style="width: 100%;">
                <i class="fas fa-magic"></i> Generate Rule
            </button>
        </div>

        <div class="page-header">
            <h1 class="page-title">
                <i class="fas fa-robot"></i>
                Automation Dashboard
            </h1>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <label class="toggle-switch">
                        <input type="checkbox" id="masterToggle" checked>
                        <span class="slider"></span>
                    </label>
                    <span id="masterToggleText">All Active</span>
                </div>
                <button class="btn btn-secondary" data-tooltip="Get Help">
                    <i class="fas fa-question-circle"></i> <span class="mobile-hidden">Help</span>
                </button>
            </div>
        </div>

        <div class="grid-2">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <i class="fas fa-tachometer-alt"></i>
                        Automation Health
                    </h3>
                    <span class="badge">
                        92/100
                    </span>
                </div>
                <div class="stats-grid">
                    <div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Active</div>
                        <div style="font-size: 1.25rem; font-weight: 700;">6/8</div>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Actions</div>
                        <div style="font-size: 1.25rem; font-weight: 700;">42</div>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Time Saved</div>
                        <div style="font-size: 1.25rem; font-weight: 700;">9.2h</div>
                    </div>
                    <div>
                        <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.25rem;">Engagement</div>
                        <div style="font-size: 1.25rem; font-weight: 700;">+22%</div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <i class="fas fa-bolt"></i>
                        Quick Actions
                    </h3>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    <button class="btn btn-primary btn-sm" id="refreshBtn">
                        <i class="fas fa-sync-alt"></i> <span class="mobile-hidden">Refresh</span>
                    </button>
                    <button class="btn btn-secondary btn-sm" id="logsBtn">
                        <i class="fas fa-history"></i> <span class="mobile-hidden">Logs</span>
                    </button>
                    <button class="btn btn-secondary btn-sm" id="settingsBtn">
                        <i class="fas fa-sliders-h"></i> <span class="mobile-hidden">Settings</span>
                    </button>
                    <button class="btn btn-sm" id="stopBtn" style="background: var(--danger);">
                        <i class="fas fa-stop-circle"></i> <span class="mobile-hidden">Stop</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- AI Recommendations Card -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-robot"></i>
                    AI Recommendations
                </h3>
            </div>
            <div class="rule-card" style="border-left: 4px solid var(--warning);">
                <div class="rule-header">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                        <strong>Low success rate detected</strong>
                    </div>
                </div>
                <div class="action-item">
                    <span>Review failing actions</span>
                </div>
            </div>
            <div class="rule-card" style="border-left: 4px solid var(--success); margin-top: 0.5rem;">
                <div class="rule-header">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-clock" style="color: var(--success);"></i>
                        <strong>Peak activity at 9:00</strong>
                    </div>
                </div>
                <div class="action-item">
                    <span>Focus automation during this time</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-user-tag"></i>
                    User Targeting
                </h3>
                <button class="btn btn-primary btn-sm" id="addUserRuleBtn">
                    <i class="fas fa-plus"></i> <span class="mobile-hidden">Add Rule</span>
                </button>
            </div>

            <div class="rule-card swipeable" id="rule1">
                <div class="swipe-content">
                    <div class="rule-header">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <label class="toggle-switch">
                                <input type="checkbox" checked class="rule-toggle">
                                <span class="slider"></span>
                            </label>
                            <strong><span class="status-indicator status-active"></span> @TechInfluencer posts:</strong>
                            <span class="prediction-badge">
                                <span style="font-size: 0.75rem; color: var(--text-secondary);">Engagement:</span>
                                <span style="color: var(--success); font-weight: 600;">82%</span>
                                <i class="fas fa-chevron-up" style="color: var(--success); font-size: 0.75rem;"></i>
                            </span>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-secondary btn-sm edit-rule-btn">
                                <i class="fas fa-pen"></i>
                            </button>
                            <button class="btn btn-secondary btn-sm delete-rule-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="rule-actions">
                        <div class="action-item">
                            <i class="fas fa-reply" style="color: var(--primary);"></i>
                            <span>Reply with template: <strong>ExpertResponse</strong></span>
                            <button class="btn btn-sm enhance-response-btn" style="margin-left: auto; background: var(--accent);">
                                <i class="fas fa-wand-magic-sparkles"></i> Enhance
                            </button>
                        </div>
                        <div class="action-item">
                            <i class="fas fa-retweet" style="color: var(--primary);"></i>
                            <span>Retweet if engagement > 200 likes</span>
                        </div>
                        <div class="action-item">
                            <i class="fas fa-bookmark" style="color: var(--primary);"></i>
                            <span>Bookmark for later review</span>
                        </div>
                    </div>
                </div>
                <div class="swipe-actions">
                    <button class="swipe-delete-btn"><i class="fas fa-trash"></i></button>
                </div>
            </div>

            <div class="rule-card swipeable" id="rule2">
                <div class="swipe-content">
                    <div class="rule-header">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <label class="toggle-switch">
                                <input type="checkbox" checked class="rule-toggle">
                                <span class="slider"></span>
                            </label>
                            <strong><span class="status-indicator status-active"></span> @OurCustomer comments:</strong>
                            <span class="prediction-badge">
                                <span style="font-size: 0.75rem; color: var(--text-secondary);">Engagement:</span>
                                <span style="color: var(--warning); font-weight: 600;">68%</span>
                                <i class="fas fa-chevron-down" style="color: var(--warning); font-size: 0.75rem;"></i>
                            </span>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-secondary btn-sm edit-rule-btn">
                                <i class="fas fa-pen"></i>
                            </button>
                            <button class="btn btn-secondary btn-sm delete-rule-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="rule-actions">
                        <div class="action-item">
                            <i class="fas fa-comment-dots" style="color: var(--primary);"></i>
                            <span>Reply: "Have you tried our solution?"</span>
                            <button class="btn btn-sm enhance-response-btn" style="margin-left: auto; background: var(--accent);">
                                <i class="fas fa-wand-magic-sparkles"></i> Enhance
                            </button>
                        </div>
                        <div class="action-item">
                            <i class="fas fa-link" style="color: var(--primary);"></i>
                            <span>Include link to comparison guide</span>
                        </div>
                        <div class="action-item">
                            <i class="fas fa-clock" style="color: var(--primary);"></i>
                            <span>Wait 15 minutes before responding</span>
                        </div>
                    </div>
                </div>
                <div class="swipe-actions">
                    <button class="swipe-delete-btn"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-key"></i>
                    Keyword Targeting
                </h3>
                <button class="btn btn-primary btn-sm" id="addKeywordRuleBtn">
                    <i class="fas fa-plus"></i> <span class="mobile-hidden">Add Rule</span>
                </button>
            </div>

            <div class="grid-2">
                <div>
                    <h4 style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Target Keywords</h4>
                    <div class="chips-container" id="targetKeywords">
                        <span class="chip" onclick="removeChip(this)">
                            #AI <i class="fas fa-times"></i>
                        </span>
                        <span class="chip" onclick="removeChip(this)">
                            #Marketing <i class="fas fa-times"></i>
                        </span>
                        <span class="chip" onclick="removeChip(this)">
                            "best tool for" <i class="fas fa-times"></i>
                        </span>
                        <div style="display: flex; align-items: center;">
                            <input type="text" placeholder="Add..." class="form-control" id="keywordInput" style="width: 100px;">
                            <button class="btn btn-sm" style="margin-left: 0.25rem;" id="addKeywordBtn">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Excluded Terms</h4>
                    <div class="chips-container" id="excludedTerms">
                        <span class="chip chip-danger" onclick="removeChip(this)">
                            scam <i class="fas fa-times"></i>
                        </span>
                        <span class="chip chip-danger" onclick="removeChip(this)">
                            "free download" <i class="fas fa-times"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div class="rule-card" style="margin-top: 1rem;">
                <div class="rule-header">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <label class="toggle-switch">
                            <input type="checkbox" checked class="rule-toggle">
                            <span class="slider"></span>
                        </label>
                        <strong><span class="status-indicator status-active"></span> "best CRM":</strong>
                        <span class="prediction-badge">
                            <span style="font-size: 0.75rem; color: var(--text-secondary);">Engagement:</span>
                            <span style="color: var(--success); font-weight: 600;">91%</span>
                            <i class="fas fa-chevron-up" style="color: var(--success); font-size: 0.75rem;"></i>
                        </span>
                    </div>
                    <div>
                        <span style="background: var(--primary); padding: 0.25rem 0.5rem; border-radius: 999px; font-size: 0.75rem;">High</span>
                    </div>
                </div>
                <div class="rule-actions">
                    <div class="action-item">
                        <i class="fas fa-comment" style="color: var(--primary);"></i>
                        <span>Comment: "Our CRM solution offers..."</span>
                        <button class="btn btn-sm enhance-response-btn" style="margin-left: auto; background: var(--accent);">
                            <i class="fas fa-wand-magic-sparkles"></i> Enhance
                        </button>
                    </div>
                    <div class="action-item">
                        <i class="fas fa-user-tag" style="color: var(--primary);"></i>
                        <span>Tag @SalesLead in response</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid-2">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <i class="fas fa-shield-alt"></i>
                        Safety Controls
                    </h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Max Daily Actions</label>
                    <input type="range" min="10" max="100" value="40" class="form-control" id="dailyActionsSlider">
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-secondary);">
                        <span>10</span>
                        <span>40</span>
                        <span>100</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Action Delay</label>
                    <select class="form-control" id="actionDelaySelect">
                        <option>Random (30-90 sec)</option>
                        <option>Human-like (2-5 min)</option>
                    </select>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <input type="checkbox" checked id="skipControversial">
                        Skip controversial topics
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <input type="checkbox" checked id="skipNegative">
                        Never reply to negative
                    </label>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <i class="fas fa-clock"></i>
                        Scheduling
                    </h3>
                </div>
                <div class="form-group">
                    <label class="form-label">Active Hours</label>
                    <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <select class="form-control" id="startTimeSelect">
                            <option>9:00 AM</option>
                            <option>10:00 AM</option>
                        </select>
                        <span>to</span>
                        <select class="form-control" id="endTimeSelect">
                            <option>8:00 PM</option>
                            <option>9:00 PM</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Time Zone</label>
                    <select class="form-control" id="timezoneSelect">
                        <option>Local Time</option>
                        <option>UTC</option>
                    </select>
                </div>
                <div>
                    <label class="form-label">Best Times</label>
                    <div style="background: rgba(67, 97, 238, 0.1); padding: 0.75rem; border-radius: 8px; font-size: 0.875rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>9:00 AM - 11:00 AM</span>
                            <span>High</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>7:00 PM - 9:00 PM</span>
                            <span>Peak</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-history"></i>
                    Recent Activity
                </h3>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 0.875rem; color: var(--text-secondary);" id="activityUpdate">Updated just now</span>
                    <button class="btn btn-secondary btn-sm" id="refreshActivityBtn">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
            <div class="activity-table-container">
                <table class="activity-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Target</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="activityTable">
                        <tr>
                            <td>09:02 AM</td>
                            <td>Replied</td>
                            <td>@TechPost</td>
                            <td style="color: var(--success);"><i class="fas fa-check-circle"></i> Success</td>
                        </tr>
                        <tr>
                            <td>09:15 AM</td>
                            <td>Liked</td>
                            <td>@Startup</td>
                            <td style="color: var(--danger);"><i class="fas fa-times-circle"></i> Failed</td>
                        </tr>
                        <tr>
                            <td>09:30 AM</td>
                            <td>Scheduled</td>
                            <td>"AI trends..."</td>
                            <td style="color: var(--warning);"><i class="fas fa-clock"></i> Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="fab">
            <button class="fab-btn" id="fabBtn">
                <i class="fas fa-bolt"></i>
            </button>
        </div>
    `;

    // Initialize all functionality
    automationJs();
}

function automationJs() {
    // Master toggle
    const masterToggle = document.getElementById('masterToggle');
    masterToggle.addEventListener('change', function() {
        const statusText = this.checked ? 'All Active' : 'All Paused';
        document.getElementById('masterToggleText').textContent = statusText;
        const indicators = document.querySelectorAll('.status-indicator');
        indicators.forEach(ind => ind.classList.toggle('status-active', this.checked));
        
        showToast(`Automations ${this.checked ? 'activated' : 'paused'}`);
    });
    
    // Rule toggles
    document.querySelectorAll('.rule-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const ruleCard = this.closest('.rule-card');
            const indicator = ruleCard.querySelector('.status-indicator');
            indicator.classList.toggle('status-active', this.checked);
            showToast(`Rule ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });
    
    // Quick action buttons
    document.getElementById('refreshBtn').addEventListener('click', () => {
        showToast('Refreshing automations...');
    });
    
    document.getElementById('logsBtn').addEventListener('click', () => {
        showToast('Opening logs...');
    });
    
    document.getElementById('settingsBtn').addEventListener('click', () => {
        showToast('Opening settings...');
    });
    
    document.getElementById('stopBtn').addEventListener('click', () => {
        showToast('Emergency stop activated', 'danger');
    });
    
    // Add rule buttons
    document.getElementById('addUserRuleBtn').addEventListener('click', () => {
        showToast('Add new user rule');
    });
    
    document.getElementById('addKeywordRuleBtn').addEventListener('click', () => {
        showToast('Add new keyword rule');
    });
    
    // Keyword management
    document.getElementById('addKeywordBtn').addEventListener('click', addKeyword);
    document.getElementById('keywordInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addKeyword();
    });
    
    // Safety controls
    document.getElementById('dailyActionsSlider').addEventListener('input', function() {
        const valueDisplay = this.nextElementSibling.querySelector('span:nth-child(2)');
        valueDisplay.textContent = this.value;
    });
    
    // Activity refresh
    document.getElementById('refreshActivityBtn').addEventListener('click', refreshActivity);
    
    // FAB button
    document.getElementById('fabBtn').addEventListener('click', () => {
        showToast('Quick actions menu');
    });
    
    // Delete rule buttons
    document.querySelectorAll('.delete-rule-btn, .swipe-delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const ruleCard = this.closest('.rule-card');
            deleteRule(ruleCard.id);
        });
    });
    
    // Edit rule buttons
    document.querySelectorAll('.edit-rule-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const ruleCard = this.closest('.rule-card');
            showToast(`Editing rule: ${ruleCard.id}`);
        });
    });

    // AI Suggestion Buttons
    document.querySelectorAll('.accept-suggestion').forEach(btn => {
        btn.addEventListener('click', function() {
            const suggestionCard = this.closest('.rule-card');
            showToast('Suggestion accepted! Creating new rule...', 'success');
            setTimeout(() => {
                suggestionCard.remove();
            }, 1500);
        });
    });

    document.querySelectorAll('.reject-suggestion').forEach(btn => {
        btn.addEventListener('click', function() {
            const suggestionCard = this.closest('.rule-card');
            suggestionCard.style.transform = 'scale(0.9)';
            suggestionCard.style.opacity = '0';
            setTimeout(() => {
                suggestionCard.remove();
                showToast('Suggestion dismissed');
            }, 300);
        });
    });

    // AI Response Enhancement
    document.querySelectorAll('.enhance-response-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const actionItem = this.closest('.action-item');
            const originalText = actionItem.querySelector('span').textContent;
            
            // Show loading state
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Thinking...';
            
            // Simulate AI processing
            setTimeout(() => {
                const enhancedResponses = {
                    "Reply with template: ExpertResponse": "Thanks for sharing this insightful perspective! Our latest research shows similar trends - check out our detailed analysis at [link] #AI #FutureTech",
                    "Reply: \"Have you tried our solution?\"": "We appreciate you reaching out! Our team has addressed similar concerns in our updated FAQ. Here's a direct link to the solution: [link] Let us know if you need anything else!",
                    "Comment: \"Our CRM solution offers...\"": "Our CRM solution offers industry-leading features with 99.9% uptime. Compared to alternatives, we provide better integration options and 24/7 support. Would you like a personalized demo?"
                };
                
                const enhancedText = enhancedResponses[originalText.trim()] || originalText;
                
                actionItem.querySelector('span').innerHTML = 
                    `<span style="color: var(--success)">${enhancedText}</span>`;
                this.innerHTML = '<i class="fas fa-check"></i> Enhanced';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Enhance';
                }, 2000);
                
                showToast('Response enhanced with AI!', 'success');
            }, 2000);
        });
    });

    // NLP Rule Generation
    document.getElementById('generateRuleBtn').addEventListener('click', function() {
        const input = document.getElementById('nlpRuleInput').value.trim();
        if (!input) {
            showToast('Please describe what you want to automate', 'warning');
            return;
        }
        
        // Show loading state
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        
        // Simulate AI processing
        setTimeout(() => {
            const generatedRules = {
                "reply to all tweets about AI with our guide": {
                    type: "keyword",
                    target: "tweets containing 'AI'",
                    action: "reply with link to guide",
                    confidence: 85
                },
                "like posts from industry leaders": {
                    type: "user",
                    target: "@IndustryLeader posts",
                    action: "like",
                    confidence: 78
                },
                "retweet viral tech posts": {
                    type: "engagement",
                    target: "tech posts with >1000 likes",
                    action: "retweet",
                    confidence: 92
                }
            };
            
            const matchedRule = generatedRules[input.toLowerCase()] || {
                type: "custom",
                target: input.split(' ').slice(-3).join(' '),
                action: input.split(' ').slice(0, 3).join(' '),
                confidence: 65
            };
            
            previewGeneratedRule(matchedRule);
            this.innerHTML = '<i class="fas fa-magic"></i> Generate Rule';
        }, 2500);
    });
    
    // Setup swipe functionality
    setupSwipe();
    
    // Update activity log periodically
    setInterval(updateActivityLog, 5000);

    // Initialize predictive scoring
    updatePredictiveScores();
}

// Helper Functions

function setupSwipe() {
    const swipeables = document.querySelectorAll('.swipeable');
    let startX, currentX, isSwiping = false;
    
    swipeables.forEach(swipeable => {
        const swipeContent = swipeable.querySelector('.swipe-content');
        const swipeActions = swipeable.querySelector('.swipe-actions');
        
        swipeable.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isSwiping = true;
        });
        
        swipeable.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            
            if (diff > 0) { // Swiping left
                const translateX = Math.min(diff, 60);
                swipeContent.style.transform = `translateX(-${translateX}px)`;
                swipeActions.style.transform = `translateX(${60 - translateX}px)`;
            }
        });
        
        swipeable.addEventListener('touchend', () => {
            if (!isSwiping) return;
            isSwiping = false;
            
            const diff = startX - currentX;
            if (diff > 30) { // Swiped left enough
                swipeContent.style.transform = 'translateX(-60px)';
                swipeActions.style.transform = 'translateX(0)';
            } else { // Return to original position
                swipeContent.style.transform = 'translateX(0)';
                swipeActions.style.transform = 'translateX(60px)';
            }
        });
    });
}

function deleteRule(ruleId) {
    const rule = document.getElementById(ruleId);
    rule.style.transform = 'translateX(-100%)';
    rule.style.opacity = '0';
    rule.style.marginBottom = '0';
    rule.style.marginTop = '0';
    rule.style.height = '0';
    rule.style.padding = '0';
    rule.style.border = '0';
    
    setTimeout(() => {
        rule.remove();
        showToast('Rule deleted');
    }, 300);
}

function removeChip(chip) {
    chip.style.transform = 'scale(0)';
    setTimeout(() => {
        chip.remove();
    }, 300);
}

function addKeyword() {
    const input = document.getElementById('keywordInput');
    if (input.value.trim()) {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.innerHTML = `${input.value.trim()} <i class="fas fa-times"></i>`;
        chip.onclick = function() { removeChip(this); };
        document.getElementById('targetKeywords').insertBefore(chip, input.parentElement);
        input.value = '';
        showToast('Keyword added');
    }
}

function refreshActivity() {
    showToast('Activity refreshed');
    updateActivityLog(true);
}

function updateActivityLog(force = false) {
    if (force || Math.random() > 0.7) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        document.querySelectorAll('#activityTable td:first-child').forEach((td, i) => {
            if (i === 0 || force || Math.random() > 0.5) {
                td.textContent = timeStr;
            }
        });
        
        document.getElementById('activityUpdate').textContent = 
            `Updated ${Math.floor(Math.random() * 5) + 1} seconds ago`;
    }
}

function updatePredictiveScores() {
    document.querySelectorAll('.rule-card').forEach(card => {
        if (!card.querySelector('.prediction-badge')) {
            const score = Math.floor(Math.random() * 40) + 60; // Simulated prediction
            
            const badge = document.createElement('span');
            badge.className = 'prediction-badge';
            badge.style.marginLeft = 'auto';
            badge.style.display = 'flex';
            badge.style.alignItems = 'center';
            badge.style.gap = '0.25rem';
            badge.innerHTML = `
                <span style="font-size: 0.75rem; color: var(--text-secondary);">Engagement:</span>
                <span style="color: ${getScoreColor(score)}; font-weight: 600;">${score}%</span>
                <i class="fas fa-chevron-${score > 75 ? 'up' : 'down'}" 
                   style="color: ${getScoreColor(score)}; font-size: 0.75rem;"></i>
            `;
            
            card.querySelector('.rule-header').appendChild(badge);
        }
    });
}

function getScoreColor(score) {
    if (score >= 80) return 'var(--success)';
    if (score >= 60) return 'var(--warning)';
    return 'var(--danger)';
}

function previewGeneratedRule(rule) {
    const preview = document.createElement('div');
    preview.className = 'card';
    preview.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">
                <i class="fas fa-eye"></i>
                Rule Preview
            </h3>
        </div>
        <div class="rule-card">
            <div class="rule-header">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <label class="toggle-switch">
                        <input type="checkbox" checked class="rule-toggle">
                        <span class="slider"></span>
                    </label>
                    <strong><span class="status-indicator status-active"></span> ${rule.target}:</strong>
                    <span class="prediction-badge">
                        <span style="font-size: 0.75rem; color: var(--text-secondary);">Confidence:</span>
                        <span style="color: ${getScoreColor(rule.confidence)}; font-weight: 600;">${rule.confidence}%</span>
                    </span>
                </div>
            </div>
            <div class="rule-actions">
                <div class="action-item">
                    <i class="fas fa-${getActionIcon(rule.action)}" style="color: var(--primary);"></i>
                    <span>${rule.action}</span>
                </div>
            </div>
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <button class="btn btn-primary" id="saveGeneratedRule" style="flex: 1;">
                <i class="fas fa-save"></i> Save Rule
            </button>
            <button class="btn btn-secondary" id="editGeneratedRule" style="flex: 1;">
                <i class="fas fa-edit"></i> Edit
            </button>
        </div>
    `;
    
    document.querySelector('.automation-container').prepend(preview);
    
    document.getElementById('saveGeneratedRule').addEventListener('click', () => {
        showToast('Rule saved successfully!', 'success');
        preview.remove();
    });
    
    document.getElementById('editGeneratedRule').addEventListener('click', () => {
        document.getElementById('nlpRuleInput').value = `${rule.action} ${rule.target}`;
        preview.remove();
        showToast('Ready to edit your rule');
    });
}

function getActionIcon(action) {
    const icons = {
        'reply': 'reply',
        'like': 'heart',
        'retweet': 'retweet',
        'comment': 'comment',
        'schedule': 'clock'
    };
    return icons[action.split(' ')[0].toLowerCase()] || 'bolt';
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    if (type === 'danger') {
        toast.style.background = 'var(--danger)';
    } else if (type === 'success') {
        toast.style.background = 'var(--success)';
    } else if (type === 'warning') {
        toast.style.background = 'var(--warning)';
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize the automation dashboard
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('automation-content') && document.getElementById('automation-content').classList.contains('active')) {
        initAutomation();
    }
});