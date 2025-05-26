document.addEventListener('DOMContentLoaded', () => {
    // ===== INJECT STYLES =====
    const injectStyles = (css) => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    };

    // ===== AI STUDIO CSS - IMPROVED =====
    injectStyles(`
        :root {
            --primary: #4361ee;
            --primary-dark: #3a0ca3;
            --primary-light: #4895ef;
            --secondary: #4cc9f0;
            --secondary-dark: #4895ef;
            --accent: #7209b7;
            --danger: #f72585;
            --warning: #f8961e;
            --success: #4ade80;
            --dark: #1a1a2e;
            --darker: #16213e;
            --light: #f8f9fa;
            --lighter: #e2e8f0;
            --border: #e5e7eb;
            --border-dark: #d1d5db;
            --text-primary: #111827;
            --text-secondary: #6B7280;
            --text-tertiary: #9CA3AF;
            --glass: rgba(255, 255, 255, 0.08);
            --glass-border: rgba(255, 255, 255, 0.1);
            --glass-highlight: rgba(255, 255, 255, 0.15);
            --radius-sm: 6px;
            --radius-md: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Improved Base Styles */
        * {
            box-sizing: border-box;
        }
        
        /* Main Container - Enhanced */
        .ai-studio-container {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 1.75rem;
            max-width: 1240px;
            margin: 0 auto;
            padding: 1.75rem;
            min-height: calc(100vh - 60px);
        }
        
        /* Navigation - More Refined */
        .ai-nav {
            background: var(--card-bg);
            border-radius: var(--radius-lg);
            padding: 1.25rem 0.75rem;
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-sm);
            position: sticky;
            top: 1.75rem;
            height: fit-content;
            overflow: hidden;
            transition: var(--transition);
        }
        
        .ai-nav:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        
        .ai-nav::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--primary);
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
            opacity: 0.9;
        }
        
        .ai-nav-item {
            padding: 0.75rem 1rem;
            border-radius: var(--radius-md);
            margin-bottom: 0.375rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-secondary);
            transition: var(--transition);
            font-size: 0.875rem;
            position: relative;
            overflow: hidden;
        }
        
        .ai-nav-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            transition: var(--transition);
        }
        
        .ai-nav-item:hover {
            background: var(--primary-light);
            color: var(--primary);
            transform: translateX(4px);
        }
        
        .ai-nav-item:hover::before {
            left: 100%;
        }
        
        .ai-nav-item.active {
            background: var(--primary-light);
            color: var(--primary);
            font-weight: 500;
        }
        
        .ai-nav-item i {
            font-size: 1.1rem;
            width: 24px;
            text-align: center;
            transition: var(--transition);
        }
        
        /* Content Area - More Polished */
        .ai-content {
            background: var(--card-bg);
            border-radius: var(--radius-lg);
            padding: 1.75rem;
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-sm);
            position: relative;
            overflow: hidden;
            transition: var(--transition);
        }
        
        .ai-content:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }
        
        .ai-content::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--secondary);
            opacity: 0.9;
        }
        
        .ai-content-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border-light);
        }
        
        .ai-content-title {
            font-size: 1.375rem;
            font-weight: 600;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin: 0;
        }
        
        .ai-content-title i {
            color: var(--secondary);
            font-size: 1.25rem;
        }
        
        .ai-content-desc {
            font-size: 0.9375rem;
            color: var(--text-secondary);
            margin-bottom: 1.75rem;
            line-height: 1.6;
        }
        
        /* Feature Forms - Enhanced */
        .ai-form-group {
            margin-bottom: 1.75rem;
        }
        
        .ai-form-label {
            display: block;
            margin-bottom: 0.625rem;
            font-weight: 600;
            font-size: 0.875rem;
            color: var(--text-primary);
        }
        
        .ai-form-control {
            width: 100%;
            padding: 0.8125rem;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            background: var(--card-bg);
            color: var(--text-primary);
            font-size: 0.9375rem;
            transition: var(--transition);
            line-height: 1.5;
        }
        
        .ai-form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        textarea.ai-form-control {
            min-height: 120px;
            resize: vertical;
        }
        
        /* Content Generation Specific - Improved */
        .tone-selector {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }
        
        .tone-option {
            padding: 0.75rem;
            border-radius: var(--radius-sm);
            border: 1px solid var(--border);
            text-align: center;
            cursor: pointer;
            font-size: 0.8125rem;
            transition: var(--transition);
            background: var(--card-bg);
        }
        
        .tone-option:hover {
            border-color: var(--primary);
            transform: translateY(-2px);
            box-shadow: var(--shadow-sm);
        }
        
        .tone-option.selected {
            background: var(--primary-light);
            border-color: var(--primary);
            color: var(--primary);
            font-weight: 500;
            box-shadow: 0 0 0 1px var(--primary);
        }
        
        /* Results Area - More Refined */
        .ai-results {
            margin-top: 2.25rem;
            border-top: 1px solid var(--border-light);
            padding-top: 1.75rem;
            animation: fadeIn 0.4s ease-out;
        }
        
        .ai-results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.25rem;
        }
        
        .ai-results-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 0;
        }
        
        .ai-generated-content {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 1.25rem;
            min-height: 180px;
            white-space: pre-wrap;
            line-height: 1.6;
            font-size: 0.9375rem;
            transition: var(--transition);
        }
        
        .ai-generated-content:hover {
            box-shadow: inset 0 0 0 1px var(--border);
        }
        
        /* Sentiment Analysis Specific - Enhanced */
        .sentiment-result {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            margin-bottom: 1.25rem;
            background: var(--bg-secondary);
            padding: 1rem;
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
        }
        
        .sentiment-score {
            font-size: 1.75rem;
            font-weight: 700;
            min-width: 120px;
            text-align: center;
            padding: 0.5rem;
            border-radius: var(--radius-sm);
        }
        
        .sentiment-positive {
            color: var(--secondary);
            background: var(--secondary-light);
        }
        
        .sentiment-negative {
            color: var(--danger);
            background: rgba(239, 68, 68, 0.1);
        }
        
        .sentiment-neutral {
            color: var(--text-secondary);
            background: var(--bg-secondary);
        }
        
        /* Chart Containers - Improved */
        .ai-chart-container {
            height: 320px;
            margin-top: 1.75rem;
            background: var(--card-bg);
            border-radius: var(--radius-md);
            border: 1px solid var(--border);
            padding: 1.25rem;
            transition: var(--transition);
        }
        
        .ai-chart-container:hover {
            box-shadow: var(--shadow-sm);
        }
        
        /* Action Buttons - More Polished */
        .ai-actions {
            display: flex;
            gap: 0.875rem;
            margin-top: 1.75rem;
            justify-content: flex-end;
        }
        
        /* Buttons - Enhanced */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.6875rem 1.375rem;
            border-radius: var(--radius-md);
            font-weight: 500;
            font-size: 0.875rem;
            cursor: pointer;
            transition: var(--transition);
            border: 1px solid transparent;
            gap: 0.625rem;
            line-height: 1;
        }
        
        .btn-primary {
            background: var(--primary);
            color: white;
            box-shadow: 0 1px 2px rgba(59, 130, 246, 0.2);
        }
        
        .btn-primary:hover {
            background: var(--primary-hover);
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
        }
        
        .btn-primary:active {
            transform: translateY(0);
        }
        
        .btn-secondary {
            background: var(--card-bg);
            color: var(--text-primary);
            border-color: var(--border);
        }
        
        .btn-secondary:hover {
            background: var(--bg-secondary);
            border-color: var(--text-tertiary);
            transform: translateY(-1px);
        }
        
        .btn-sm {
            padding: 0.5625rem 1rem;
            font-size: 0.8125rem;
        }
        
        /* Badges - Improved */
        .badge {
            display: inline-flex;
            align-items: center;
            padding: 0.3125rem 0.875rem;
            border-radius: 9999px;
            font-size: 0.8125rem;
            font-weight: 500;
            background: var(--bg-secondary);
            color: var(--text-primary);
            border: 1px solid var(--border);
        }
        
        /* Toast Notifications - Enhanced */
        .toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: var(--text-primary);
            color: white;
            padding: 0.875rem 1.5rem;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            gap: 0.875rem;
            z-index: 1000;
            animation: fadeInUp 0.3s ease;
            box-shadow: var(--shadow-md);
            max-width: 320px;
        }
        
        .toast i {
            font-size: 1.25rem;
        }
        
        .toast-success {
            background: var(--secondary);
        }
        
        .toast-error {
            background: var(--danger);
        }
        
        .toast-warning {
            background: var(--warning);
        }
        
        .toast-info {
            background: var(--primary);
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* New Features - Refined */
        .ai-feature-badge {
            display: inline-block;
            background: var(--secondary);
            color: white;
            padding: 0.1875rem 0.5rem;
            border-radius: 4px;
            font-size: 0.6875rem;
            font-weight: 600;
            margin-left: 0.5rem;
            line-height: 1.3;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .ai-template-selector {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.25rem;
            margin-bottom: 1.75rem;
        }
        
        .ai-template-card {
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: 1.25rem;
            cursor: pointer;
            transition: var(--transition);
            background: var(--card-bg);
        }
        
        .ai-template-card:hover {
            border-color: var(--primary);
            transform: translateY(-3px);
            box-shadow: var(--shadow-sm);
        }
        
        .ai-template-card.selected {
            border-color: var(--primary);
            background: var(--primary-light);
            box-shadow: 0 0 0 1px var(--primary);
        }
        
        .ai-template-title {
            font-weight: 600;
            margin-bottom: 0.375rem;
            color: var(--text-primary);
        }
        
        .ai-template-desc {
            font-size: 0.8125rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }
        
        /* Checkbox and Radio Styles - Improved */
        input[type="checkbox"],
        input[type="radio"] {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border: 1px solid var(--border);
            border-radius: 4px;
            margin-right: 0.5rem;
            position: relative;
            top: 2px;
            transition: var(--transition);
        }
        
        input[type="radio"] {
            border-radius: 50%;
        }
        
        input[type="checkbox"]:checked,
        input[type="radio"]:checked {
            background-color: var(--primary);
            border-color: var(--primary);
        }
        
        input[type="checkbox"]:checked::after {
            content: '✓';
            position: absolute;
            color: white;
            font-size: 0.75rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        input[type="radio"]:checked::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        /* Responsive - Enhanced */
        @media (max-width: 1024px) {
            .ai-studio-container {
                grid-template-columns: 200px 1fr;
                gap: 1.25rem;
                padding: 1.25rem;
            }
        }
        
        @media (max-width: 768px) {
            .ai-studio-container {
                grid-template-columns: 1fr;
            }
            
            .ai-nav {
                position: static;
                margin-bottom: 1.25rem;
            }
            
            .tone-selector, .ai-template-selector {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .ai-actions {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
            }
            
            .ai-actions .btn {
                flex: 1;
                min-width: 120px;
            }
        }
        
        @media (max-width: 480px) {
            .ai-content {
                padding: 1.25rem;
            }
            
            .tone-selector, .ai-template-selector {
                grid-template-columns: 1fr;
            }
            
            .ai-actions .btn {
                min-width: 100%;
            }
        }
        
        /* Loading Spinner */
        .fa-spinner {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Improved Form Elements */
        select.ai-form-control {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236b7280' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 16px 12px;
            padding-right: 2.25rem;
        }
        
        /* Date Inputs */
        input[type="date"] {
            position: relative;
        }
        
        input[type="date"]::-webkit-calendar-picker-indicator {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
            color: transparent;
            background: transparent;
        }
        
        /* Improved Checkbox Labels */
        label {
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            transition: var(--transition);
        }
        
        label:hover {
            color: var(--text-primary);
        }
        
        /* Gradient Background for Active Elements */
        .gradient-bg {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
        }
    `);

    // ===== AI STUDIO MARKUP - SAME AS BEFORE =====
    const aiStudioTab = document.getElementById('ai-studio');
    aiStudioTab.innerHTML = `
        <div class="ai-studio-container">
            <!-- Navigation -->
            <div class="ai-nav">
                <div class="ai-nav-item active" data-tab="content-generation">
                    <i class="fas fa-lightbulb"></i>
                    <span>Content Generation</span>
                </div>
                <div class="ai-nav-item" data-tab="sentiment-analysis">
                    <i class="fas fa-smile"></i>
                    <span>Sentiment Analysis</span>
                </div>
                <div class="ai-nav-item" data-tab="trend-identification">
                    <i class="fas fa-chart-line"></i>
                    <span>Trend Identification</span>
                </div>
                <div class="ai-nav-item" data-tab="audience-insights">
                    <i class="fas fa-users"></i>
                    <span>Audience Insights</span>
                </div>
                <div class="ai-nav-item" data-tab="content-optimization">
                    <i class="fas fa-magic"></i>
                    <span>Content Optimization <span class="ai-feature-badge">NEW</span></span>
                </div>
                <div class="ai-nav-item" data-tab="competitor-analysis">
                    <i class="fas fa-chess"></i>
                    <span>Competitor Analysis</span>
                </div>
            </div>
            
            <!-- Content Area -->
            <div class="ai-content">
                <!-- Content Generation (Default Tab) -->
                <div id="content-generation" class="ai-tab active">
                    <div class="ai-content-header">
                        <h3 class="ai-content-title">
                            <i class="fas fa-lightbulb"></i>
                            AI Content Generation
                        </h3>
                        <div class="badge">Beta</div>
                    </div>
                    <p class="ai-content-desc">
                        Generate high-quality tweets and threads using AI. Customize the tone, length, and style to match your brand voice.
                    </p>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Content Template</label>
                        <div class="ai-template-selector">
                            <div class="ai-template-card selected" data-template="tweet">
                                <div class="ai-template-title">Standard Tweet</div>
                                <div class="ai-template-desc">Short-form content for quick engagement</div>
                            </div>
                            <div class="ai-template-card" data-template="thread">
                                <div class="ai-template-title">Thread</div>
                                <div class="ai-template-desc">Multi-tweet story or explanation</div>
                            </div>
                            <div class="ai-template-card" data-template="question">
                                <div class="ai-template-title">Question</div>
                                <div class="ai-template-desc">Engage your audience with a question</div>
                            </div>
                            <div class="ai-template-card" data-template="poll">
                                <div class="ai-template-title">Poll</div>
                                <div class="ai-template-desc">Create a poll with options</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Prompt/Topic</label>
                        <input type="text" class="ai-form-control" id="ai-prompt" placeholder="Enter a topic or prompt for the AI">
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Tone/Style</label>
                        <div class="tone-selector">
                            <div class="tone-option selected" data-tone="professional">Professional</div>
                            <div class="tone-option" data-tone="casual">Casual</div>
                            <div class="tone-option" data-tone="humorous">Humorous</div>
                            <div class="tone-option" data-tone="enthusiastic">Enthusiastic</div>
                            <div class="tone-option" data-tone="provocative">Provocative</div>
                            <div class="tone-option" data-tone="friendly">Friendly</div>
                        </div>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Content Length</label>
                        <select class="ai-form-control" id="content-length">
                            <option value="short">Short (1-2 sentences)</option>
                            <option value="medium" selected>Medium (3-5 sentences)</option>
                            <option value="long">Long (Thread or detailed post)</option>
                        </select>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Media Options</label>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-image"> 
                                <i class="fas fa-image"></i> Image
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-video"> 
                                <i class="fas fa-video"></i> Video
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-gif"> 
                                <i class="fas fa-film"></i> GIF
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-poll"> 
                                <i class="fas fa-poll"></i> Poll
                            </label>
                        </div>
                    </div>
                    
                    <div class="ai-form-group" id="additional-options" style="display: none;">
                        <label class="ai-form-label">Additional Options</label>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-hashtags"> 
                                Auto-add hashtags
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-mentions"> 
                                Auto-add mentions
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" id="include-cta"> 
                                Add call-to-action
                            </label>
                        </div>
                    </div>
                    
                    <div class="ai-actions">
                        <button class="btn btn-secondary" id="ai-cancel-btn">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button class="btn btn-primary" id="ai-generate-btn">
                            <i class="fas fa-magic"></i> Generate
                        </button>
                    </div>
                    
                    <div class="ai-results" style="display: none;">
                        <div class="ai-results-header">
                            <h4 class="ai-results-title">Generated Content</h4>
                            <div>
                                <button class="btn btn-sm btn-secondary" id="copy-ai-content">
                                    <i class="fas fa-copy"></i> Copy
                                </button>
                                <button class="btn btn-sm btn-secondary" id="save-template-btn">
                                    <i class="fas fa-save"></i> Save Template
                                </button>
                            </div>
                        </div>
                        <div class="ai-generated-content" id="ai-generated-content">
                            Your AI-generated content will appear here...
                        </div>
                        <div class="ai-actions" style="margin-top: 1rem;">
                            <button class="btn btn-secondary" id="regenerate-btn">
                                <i class="fas fa-sync-alt"></i> Regenerate
                            </button>
                            <button class="btn btn-primary" id="use-content-btn">
                                <i class="fas fa-check"></i> Use This Content
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Sentiment Analysis -->
                <div id="sentiment-analysis" class="ai-tab">
                    <div class="ai-content-header">
                        <h3 class="ai-content-title">
                            <i class="fas fa-smile"></i>
                            Sentiment Analysis
                        </h3>
                    </div>
                    <p class="ai-content-desc">
                        Analyze the sentiment of tweets, replies, or any text to understand emotional tone and audience reactions.
                    </p>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Text to Analyze</label>
                        <textarea class="ai-form-control" id="sentiment-text" rows="4" placeholder="Paste text or enter a Tweet URL"></textarea>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Analysis Type</label>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="radio" name="analysis-type" checked> Basic Sentiment
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="radio" name="analysis-type"> Emotional Breakdown
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="radio" name="analysis-type"> Comparative Analysis
                            </label>
                        </div>
                    </div>
                    
                    <div class="ai-actions">
                        <button class="btn btn-secondary">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button class="btn btn-primary" id="analyze-sentiment-btn">
                            <i class="fas fa-chart-pie"></i> Analyze
                        </button>
                    </div>
                    
                    <div class="ai-results" style="display: none;">
                        <div class="ai-results-header">
                            <h4 class="ai-results-title">Analysis Results</h4>
                            <button class="btn btn-sm btn-secondary" id="export-sentiment-btn">
                                <i class="fas fa-download"></i> Export
                            </button>
                        </div>
                        
                        <div class="sentiment-result">
                            <div class="sentiment-score sentiment-neutral" id="sentiment-score">
                                Neutral
                            </div>
                            <div>
                                <div class="ai-form-label">Confidence</div>
                                <div id="sentiment-confidence">75%</div>
                            </div>
                        </div>
                        
                        <div class="ai-chart-container" id="sentiment-chart">
                            <!-- Chart will be rendered here -->
                        </div>
                        
                        <div class="ai-form-group" style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Key Emotional Indicators</label>
                            <div id="emotional-indicators">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                        
                        <div class="ai-form-group" style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Suggested Actions</label>
                            <div id="suggested-actions" style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Trend Identification -->
                <div id="trend-identification" class="ai-tab">
                    <div class="ai-content-header">
                        <h3 class="ai-content-title">
                            <i class="fas fa-chart-line"></i>
                            Trend Identification
                        </h3>
                    </div>
                    <p class="ai-content-desc">
                        Discover trending topics, hashtags, and conversations relevant to your niche or interests.
                    </p>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Keywords/Hashtags</label>
                        <input type="text" class="ai-form-control" id="trend-keywords" placeholder="Enter keywords or hashtags to track">
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Time Range</label>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                            <input type="date" class="ai-form-control" id="trend-start-date">
                            <span>to</span>
                            <input type="date" class="ai-form-control" id="trend-end-date">
                        </div>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Data Sources</label>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> Twitter
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> News
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> Blogs
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> Forums
                            </label>
                        </div>
                    </div>
                    
                    <div class="ai-actions">
                        <button class="btn btn-secondary">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button class="btn btn-primary" id="analyze-trends-btn">
                            <i class="fas fa-search"></i> Analyze Trends
                        </button>
                    </div>
                    
                    <div class="ai-results" style="display: none;">
                        <div class="ai-results-header">
                            <h4 class="ai-results-title">Trend Analysis</h4>
                            <div>
                                <button class="btn btn-sm btn-secondary" id="export-trends-btn">
                                    <i class="fas fa-download"></i> Export
                                </button>
                                <button class="btn btn-sm btn-secondary" id="create-alert-btn">
                                    <i class="fas fa-bell"></i> Create Alert
                                </button>
                            </div>
                        </div>
                        
                        <div class="ai-chart-container" id="trends-chart">
                            <!-- Trend chart will be rendered here -->
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
                            <div>
                                <label class="ai-form-label">Related Hashtags</label>
                                <div id="related-hashtags" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
                                    <!-- Filled dynamically -->
                                </div>
                            </div>
                            
                            <div>
                                <label class="ai-form-label">Top Keywords</label>
                                <div id="top-keywords" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
                                    <!-- Filled dynamically -->
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Top Influencers</label>
                            <div id="top-influencers" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Content Suggestions</label>
                            <div id="trend-content-suggestions" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Audience Insights -->
                <div id="audience-insights" class="ai-tab">
                    <div class="ai-content-header">
                        <h3 class="ai-content-title">
                            <i class="fas fa-users"></i>
                            Audience Insights
                        </h3>
                    </div>
                    <p class="ai-content-desc">
                        Gain deep understanding of your followers or any target audience with AI-powered demographic and interest analysis.
                    </p>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Username or List</label>
                        <input type="text" class="ai-form-control" id="audience-target" placeholder="Enter @username or list name">
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Analysis Depth</label>
                        <select class="ai-form-control" id="analysis-depth">
                            <option value="basic">Basic (Faster)</option>
                            <option value="standard" selected>Standard</option>
                            <option value="deep">Deep (More Detailed)</option>
                        </select>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Compare With</label>
                        <input type="text" class="ai-form-control" id="compare-audience" placeholder="Optional: Enter another @username to compare">
                    </div>
                    
                    <div class="ai-actions">
                        <button class="btn btn-secondary">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button class="btn btn-primary" id="analyze-audience-btn">
                            <i class="fas fa-chart-bar"></i> Analyze Audience
                        </button>
                    </div>
                    
                    <div class="ai-results" style="display: none;">
                        <div class="ai-results-header">
                            <h4 class="ai-results-title">Audience Analysis</h4>
                            <button class="btn btn-sm btn-secondary" id="export-audience-btn">
                                <i class="fas fa-download"></i> Export Report
                            </button>
                        </div>
                        
                        <div class="ai-chart-container" id="demographics-chart">
                            <!-- Demographics chart will be rendered here -->
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
                            <div>
                                <label class="ai-form-label">Top Interests</label>
                                <div id="audience-interests" style="margin-top: 0.5rem;">
                                    <!-- Filled dynamically -->
                                </div>
                            </div>
                            
                            <div>
                                <label class="ai-form-label">Brand Affinity</label>
                                <div id="brand-affinity" style="margin-top: 0.5rem;">
                                    <!-- Filled dynamically -->
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Activity Patterns</label>
                            <div class="ai-chart-container" id="activity-chart" style="height: 250px; margin-top: 0.5rem;">
                                <!-- Activity chart will be rendered here -->
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Content Recommendations</label>
                            <div id="content-recommendations" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Content Optimization -->
                <div id="content-optimization" class="ai-tab">
                    <div class="ai-content-header">
                        <h3 class="ai-content-title">
                            <i class="fas fa-magic"></i>
                            Content Optimization
                            <span class="ai-feature-badge">NEW</span>
                        </h3>
                    </div>
                    <p class="ai-content-desc">
                        Improve your existing content with AI-powered optimization suggestions for better engagement and reach.
                    </p>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Content to Optimize</label>
                        <textarea class="ai-form-control" id="content-to-optimize" rows="4" placeholder="Paste your content here"></textarea>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Optimization Goals</label>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> Engagement
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> Clarity
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> Virality
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> SEO
                            </label>
                        </div>
                    </div>
                    
                    <div class="ai-actions">
                        <button class="btn btn-secondary">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button class="btn btn-primary" id="optimize-content-btn">
                            <i class="fas fa-wand-magic-sparkles"></i> Optimize
                        </button>
                    </div>
                    
                    <div class="ai-results" style="display: none;">
                        <div class="ai-results-header">
                            <h4 class="ai-results-title">Optimization Results</h4>
                            <button class="btn btn-sm btn-secondary" id="copy-optimized-content">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
                            <div>
                                <label class="ai-form-label">Original</label>
                                <div class="ai-generated-content" id="original-content">
                                    <!-- Original content -->
                                </div>
                            </div>
                            <div>
                                <label class="ai-form-label">Optimized</label>
                                <div class="ai-generated-content" id="optimized-content">
                                    <!-- Optimized content -->
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Key Improvements</label>
                            <div id="key-improvements" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                        
                        <div class="ai-actions" style="margin-top: 1.5rem;">
                            <button class="btn btn-secondary" id="revert-changes-btn">
                                <i class="fas fa-undo"></i> Revert Changes
                            </button>
                            <button class="btn btn-primary" id="apply-optimization-btn">
                                <i class="fas fa-check"></i> Apply Changes
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Competitor Analysis -->
                <div id="competitor-analysis" class="ai-tab">
                    <div class="ai-content-header">
                        <h3 class="ai-content-title">
                            <i class="fas fa-chess"></i>
                            Competitor Analysis
                        </h3>
                    </div>
                    <p class="ai-content-desc">
                        Analyze your competitors' performance and content strategy to identify opportunities and gaps.
                    </p>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Competitor Usernames</label>
                        <textarea class="ai-form-control" id="competitor-usernames" rows="3" placeholder="Enter competitor @usernames, one per line"></textarea>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Analysis Focus</label>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> Content Strategy
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox" checked> Engagement Patterns
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> Audience Growth
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <input type="checkbox"> Hashtag Performance
                            </label>
                        </div>
                    </div>
                    
                    <div class="ai-form-group">
                        <label class="ai-form-label">Time Period</label>
                        <select class="ai-form-control" id="competitor-time-period">
                            <option value="7days">Last 7 Days</option>
                            <option value="30days" selected>Last 30 Days</option>
                            <option value="90days">Last 90 Days</option>
                            <option value="custom">Custom Range</option>
                        </select>
                    </div>
                    
                    <div class="ai-actions">
                        <button class="btn btn-secondary">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button class="btn btn-primary" id="analyze-competitors-btn">
                            <i class="fas fa-chart-bar"></i> Analyze Competitors
                        </button>
                    </div>
                    
                    <div class="ai-results" style="display: none;">
                        <div class="ai-results-header">
                            <h4 class="ai-results-title">Competitor Analysis</h4>
                            <button class="btn btn-sm btn-secondary" id="export-competitor-btn">
                                <i class="fas fa-download"></i> Export Report
                            </button>
                        </div>
                        
                        <div class="ai-chart-container" id="competitor-chart">
                            <!-- Competitor comparison chart -->
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Competitor Benchmarks</label>
                            <div id="competitor-benchmarks" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Content Gap Analysis</label>
                            <div id="content-gap-analysis" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                        
                        <div style="margin-top: 1.5rem;">
                            <label class="ai-form-label">Strategic Recommendations</label>
                            <div id="strategic-recommendations" style="margin-top: 0.5rem;">
                                <!-- Filled dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // ===== FUNCTIONALITY - SAME AS BEFORE =====
    // ... (keep all the existing JavaScript functionality code exactly as it was)
    
    // Tab Navigation
    document.querySelectorAll('.ai-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // Update navigation
            document.querySelectorAll('.ai-nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update content
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.ai-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Template Selection
    document.querySelectorAll('.ai-template-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.ai-template-card').forEach(c => {
                c.classList.remove('selected');
            });
            this.classList.add('selected');
            
            // Show/hide additional options based on template
            const template = this.getAttribute('data-template');
            const additionalOptions = document.getElementById('additional-options');
            additionalOptions.style.display = template === 'poll' ? 'block' : 'none';
        });
    });
    
    // Tone Selection
    document.querySelectorAll('.tone-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.tone-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
    
    // Content Generation
    document.getElementById('ai-generate-btn').addEventListener('click', function() {
        const prompt = document.getElementById('ai-prompt').value;
        const template = document.querySelector('.ai-template-card.selected').getAttribute('data-template');
        const tone = document.querySelector('.tone-option.selected').getAttribute('data-tone');
        const length = document.getElementById('content-length').value;
        
        if (!prompt) {
            showToast('Please enter a prompt or topic', 'error');
            return;
        }
        
        // Show loading state
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        this.disabled = true;
        
        // Simulate AI generation (in a real app, this would be an API call)
        setTimeout(() => {
            // Sample generated content based on inputs
            const examples = {
                professional: `Based on recent industry analysis, ${prompt} represents a significant opportunity for growth. Our data suggests a 23% increase in related engagements QoQ. Key factors driving this trend include...`,
                casual: `Hey folks! Been noticing a lot of talk about ${prompt} lately. Super interesting stuff! Here's my take: it's kinda like when...`,
                humorous: `Why did ${prompt} cross the road? To get to the trending page! 😆 But seriously, this is blowing up because...`,
                enthusiastic: `OMG you guys! ${prompt} is AMAZING right now!! 🎉🔥 The numbers are through the roof and here's why everyone's talking about it...`,
                provocative: `Let's be real - everything you've heard about ${prompt} is wrong. The uncomfortable truth is...`,
                friendly: `Have you heard about ${prompt}? It's been making waves recently, and I thought you might find it interesting! Here's why...`
            };
            
            let generatedContent = examples[tone] || examples['professional'];
            
            // Add template-specific formatting
            if (template === 'thread') {
                generatedContent = `1/ ${generatedContent}\n\n2/ Here's more detail about ${prompt.toLowerCase()}...\n\n3/ And finally, the key takeaway is...`;
            } else if (template === 'question') {
                generatedContent = `What are your thoughts on ${prompt}?\n\n• Option 1\n• Option 2\n• Option 3\n\nWould love to hear your perspective!`;
            } else if (template === 'poll') {
                generatedContent = `POLL: What's your opinion on ${prompt}?\n\n🗳️ Option A\n🗳️ Option B\n🗳️ Option C\n🗳️ Option D\n\nVote and retweet!`;
            }
            
            // Display results
            document.getElementById('ai-generated-content').textContent = generatedContent;
            document.querySelector('.ai-results').style.display = 'block';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-magic"></i> Generate';
            this.disabled = false;
            
            // Scroll to results
            document.querySelector('.ai-results').scrollIntoView({ behavior: 'smooth' });
            
            showToast('Content generated successfully!', 'success');
        }, 1500);
    });
    
    // Copy AI Content
    document.getElementById('copy-ai-content').addEventListener('click', function() {
        const content = document.getElementById('ai-generated-content').textContent;
        navigator.clipboard.writeText(content);
        showToast('Content copied to clipboard!', 'success');
    });
    
    // Save Template
    document.getElementById('save-template-btn').addEventListener('click', function() {
        showToast('Template saved to your library!', 'success');
    });
    
    // Regenerate Content
    document.getElementById('regenerate-btn').addEventListener('click', function() {
        document.getElementById('ai-generate-btn').click();
    });
    
    // Use Content (would integrate with compose functionality)
    document.getElementById('use-content-btn').addEventListener('click', function() {
        showToast('Optimized content applied to editor', 'success');
        // In a real app, this would open the compose modal with the generated content
    });
    
    // Sentiment Analysis
    document.getElementById('analyze-sentiment-btn').addEventListener('click', function() {
        const text = document.getElementById('sentiment-text').value;
        
        if (!text) {
            showToast('Please enter text to analyze', 'error');
            return;
        }
        
        // Show loading
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        this.disabled = true;
        
        // Simulate analysis
        setTimeout(() => {
            // Simple sentiment analysis (in real app would use API)
            const sentimentScore = Math.random();
            let sentiment, colorClass;
            
            if (sentimentScore > 0.6) {
                sentiment = 'Positive';
                colorClass = 'sentiment-positive';
            } else if (sentimentScore < 0.4) {
                sentiment = 'Negative';
                colorClass = 'sentiment-negative';
            } else {
                sentiment = 'Neutral';
                colorClass = 'sentiment-neutral';
            }
            
            const confidence = Math.floor(Math.random() * 20) + 75; // 75-95%
            
            // Update UI
            const sentimentEl = document.getElementById('sentiment-score');
            sentimentEl.textContent = sentiment;
            sentimentEl.className = `sentiment-score ${colorClass}`;
            document.getElementById('sentiment-confidence').textContent = `${confidence}%`;
            
            // Show emotional indicators
            const emotionalIndicators = [
                { emotion: 'Joy', score: Math.floor(Math.random() * 100) },
                { emotion: 'Anger', score: Math.floor(Math.random() * 100) },
                { emotion: 'Surprise', score: Math.floor(Math.random() * 100) },
                { emotion: 'Sadness', score: Math.floor(Math.random() * 100) },
                { emotion: 'Fear', score: Math.floor(Math.random() * 100) }
            ].sort((a, b) => b.score - a.score);
            
            let indicatorsHtml = '';
            emotionalIndicators.forEach(indicator => {
                indicatorsHtml += `
                    <div style="margin-bottom: 0.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <span>${indicator.emotion}</span>
                            <span>${indicator.score}%</span>
                        </div>
                        <div style="height: 6px; background: #e5e7eb; border-radius: 3px;">
                            <div style="width: ${indicator.score}%; height: 100%; background: var(--primary); border-radius: 3px;"></div>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('emotional-indicators').innerHTML = indicatorsHtml;
            
            // Suggested actions
            const suggestedActions = [
                sentiment === 'Positive' ? 'Consider engaging with positive responders to strengthen relationships' : '',
                sentiment === 'Negative' ? 'Address concerns raised in negative sentiment with a thoughtful response' : '',
                'Monitor sentiment trends over time for changes',
                'Consider adjusting messaging if sentiment doesn\'t align with goals'
            ].filter(Boolean);
            
            let actionsHtml = '<ul style="margin: 0; padding-left: 1.25rem;">';
            suggestedActions.forEach(action => {
                actionsHtml += `<li style="margin-bottom: 0.25rem;">${action}</li>`;
            });
            actionsHtml += '</ul>';
            
            document.getElementById('suggested-actions').innerHTML = actionsHtml;
            
            document.querySelector('#sentiment-analysis .ai-results').style.display = 'block';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-chart-pie"></i> Analyze';
            this.disabled = false;
            
            // Initialize chart (in real app would use charting library)
            initializeSentimentChart(emotionalIndicators);
            
            showToast('Sentiment analysis complete!', 'success');
        }, 1200);
    });
    
    // Export Sentiment
    document.getElementById('export-sentiment-btn').addEventListener('click', function() {
        showToast('Sentiment report exported successfully!', 'success');
    });
    
    // Trend Analysis
    document.getElementById('analyze-trends-btn').addEventListener('click', function() {
        const keywords = document.getElementById('trend-keywords').value;
        
        if (!keywords) {
            showToast('Please enter keywords to analyze', 'error');
            return;
        }
        
        // Show loading
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        this.disabled = true;
        
        // Simulate analysis
        setTimeout(() => {
            // Generate sample hashtags
            const sampleHashtags = [
                `#${keywords.replace(/\s+/g, '')}`,
                `#${keywords.split(' ')[0]}Trend`,
                `#${keywords.replace(/\s+/g, '')}2023`,
                `#Digital${keywords.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}`,
                `#${keywords.split(' ')[0]}Life`
            ];
            
            let hashtagsHtml = '';
            sampleHashtags.forEach(tag => {
                hashtagsHtml += `<span style="background: rgba(59, 130, 246, 0.1); color: var(--primary); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8125rem;">${tag}</span>`;
            });
            
            document.getElementById('related-hashtags').innerHTML = hashtagsHtml;
            
            // Generate sample keywords
            const relatedKeywords = [
                `${keywords} tips`,
                `best ${keywords}`,
                `${keywords} guide`,
                `how to ${keywords}`
            ];
            
            let keywordsHtml = '';
            relatedKeywords.forEach(keyword => {
                keywordsHtml += `<span style="background: rgba(16, 185, 129, 0.1); color: var(--secondary); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8125rem;">${keyword}</span>`;
            });
            
            document.getElementById('top-keywords').innerHTML = keywordsHtml;
            
            // Generate sample influencers
            const influencers = [
                { name: '@techguru', followers: '1.2M', engagement: '4.8%' },
                { name: `@${keywords.replace(/\s+/g, '')}_official`, followers: '850K', engagement: '3.2%' },
                { name: '@socialmediaexpert', followers: '560K', engagement: '5.1%' },
                { name: '@trendwatcher', followers: '320K', engagement: '6.7%' }
            ];
            
            let influencersHtml = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem;">';
            influencers.forEach(infl => {
                influencersHtml += `
                    <div style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px; padding: 0.75rem;">
                        <div style="font-weight: 600;">${infl.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
                            <div>${infl.followers} followers</div>
                            <div>${infl.engagement} engagement</div>
                        </div>
                    </div>
                `;
            });
            influencersHtml += '</div>';
            
            document.getElementById('top-influencers').innerHTML = influencersHtml;
            
            // Content suggestions
            const contentSuggestions = [
                `Create a thread explaining the basics of ${keywords}`,
                `Interview an expert about ${keywords}`,
                `Share a case study about successful ${keywords} implementation`,
                `Create a poll asking about favorite ${keywords} tools`
            ];
            
            let suggestionsHtml = '<ul style="margin: 0; padding-left: 1.25rem;">';
            contentSuggestions.forEach(suggestion => {
                suggestionsHtml += `<li style="margin-bottom: 0.25rem;">${suggestion}</li>`;
            });
            suggestionsHtml += '</ul>';
            
            document.getElementById('trend-content-suggestions').innerHTML = suggestionsHtml;
            
            document.querySelector('#trend-identification .ai-results').style.display = 'block';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-search"></i> Analyze Trends';
            this.disabled = false;
            
            // Initialize chart (in real app would use charting library)
            initializeTrendsChart();
            
            showToast('Trend analysis complete!', 'success');
        }, 1500);
    });
    
    // Create Trend Alert
    document.getElementById('create-alert-btn').addEventListener('click', function() {
        showToast('Trend alert created! You\'ll be notified of changes.', 'success');
    });
    
    // Export Trends
    document.getElementById('export-trends-btn').addEventListener('click', function() {
        showToast('Trend report exported successfully!', 'success');
    });
    
    // Audience Analysis
    document.getElementById('analyze-audience-btn').addEventListener('click', function() {
        const target = document.getElementById('audience-target').value;
        
        if (!target) {
            showToast('Please enter a username or list', 'error');
            return;
        }
        
        // Show loading
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        this.disabled = true;
        
        // Simulate analysis
        setTimeout(() => {
            // Generate sample interests
            const interests = [
                { name: 'Technology', score: 85 },
                { name: 'Business', score: 72 },
                { name: 'Marketing', score: 68 },
                { name: 'Startups', score: 64 },
                { name: 'AI', score: 59 }
            ];
            
            let interestsHtml = '';
            interests.forEach(interest => {
                interestsHtml += `
                    <div style="margin-bottom: 0.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <span>${interest.name}</span>
                            <span>${interest.score}%</span>
                        </div>
                        <div style="height: 6px; background: #e5e7eb; border-radius: 3px;">
                            <div style="width: ${interest.score}%; height: 100%; background: var(--primary); border-radius: 3px;"></div>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('audience-interests').innerHTML = interestsHtml;
            
            // Brand affinity
            const brands = [
                { name: 'TechBrand', score: 78 },
                { name: 'SocialApp', score: 65 },
                { name: 'NewsSite', score: 52 },
                { name: 'Podcast', score: 48 }
            ];
            
            let brandsHtml = '';
            brands.forEach(brand => {
                brandsHtml += `
                    <div style="margin-bottom: 0.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <span>${brand.name}</span>
                            <span>${brand.score}%</span>
                        </div>
                        <div style="height: 6px; background: #e5e7eb; border-radius: 3px;">
                            <div style="width: ${brand.score}%; height: 100%; background: var(--secondary); border-radius: 3px;"></div>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('brand-affinity').innerHTML = brandsHtml;
            
            // Content recommendations
            const recommendations = [
                `Create content about emerging tech trends (85% interested)`,
                `Share business growth tips (72% interested)`,
                `Post about marketing strategies on ${new Date().toLocaleString('default', { month: 'long' })} 15th (high engagement day)`,
                `Go live at 2pm (peak activity time)`
            ];
            
            let recsHtml = '<ul style="margin: 0; padding-left: 1.25rem;">';
            recommendations.forEach(rec => {
                recsHtml += `<li style="margin-bottom: 0.25rem;">${rec}</li>`;
            });
            recsHtml += '</ul>';
            
            document.getElementById('content-recommendations').innerHTML = recsHtml;
            
            document.querySelector('#audience-insights .ai-results').style.display = 'block';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-chart-bar"></i> Analyze Audience';
            this.disabled = false;
            
            // Initialize charts (in real app would use charting library)
            initializeDemographicsChart();
            initializeActivityChart();
            
            showToast('Audience analysis complete!', 'success');
        }, 2000);
    });
    
    // Export Audience
    document.getElementById('export-audience-btn').addEventListener('click', function() {
        showToast('Audience report exported successfully!', 'success');
    });
    
    // Content Optimization
    document.getElementById('optimize-content-btn').addEventListener('click', function() {
        const content = document.getElementById('content-to-optimize').value;
        
        if (!content) {
            showToast('Please enter content to optimize', 'error');
            return;
        }
        
        // Show loading
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Optimizing...';
        this.disabled = true;
        
        // Simulate optimization
        setTimeout(() => {
            // Display original content
            document.getElementById('original-content').textContent = content;
            
            // Create optimized version
            const optimizedContent = `🚀 ${content}\n\nThis improved version increases engagement potential by:\n- Adding attention-grabbing emoji\n- Improving readability\n- Enhancing call-to-action`;
            
            document.getElementById('optimized-content').textContent = optimizedContent;
            
            // Key improvements
            const improvements = [
                'Increased emotional appeal with strategic emoji use',
                'Improved readability score from 65 to 82',
                'Added clear call-to-action increasing potential engagement by 23%',
                'Optimized for peak engagement times'
            ];
            
            let improvementsHtml = '<ul style="margin: 0; padding-left: 1.25rem;">';
            improvements.forEach(imp => {
                improvementsHtml += `<li style="margin-bottom: 0.25rem;">${imp}</li>`;
            });
            improvementsHtml += '</ul>';
            
            document.getElementById('key-improvements').innerHTML = improvementsHtml;
            
            document.querySelector('#content-optimization .ai-results').style.display = 'block';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Optimize';
            this.disabled = false;
            
            showToast('Content optimized successfully!', 'success');
        }, 1800);
    });
    
    // Copy Optimized Content
    document.getElementById('copy-optimized-content').addEventListener('click', function() {
        const content = document.getElementById('optimized-content').textContent;
        navigator.clipboard.writeText(content);
        showToast('Optimized content copied to clipboard!', 'success');
    });
    
    // Revert Changes
    document.getElementById('revert-changes-btn').addEventListener('click', function() {
        document.getElementById('optimized-content').textContent = document.getElementById('original-content').textContent;
        showToast('Changes reverted to original content', 'info');
    });
    
    // Apply Optimization
    document.getElementById('apply-optimization-btn').addEventListener('click', function() {
        showToast('Optimized content applied to editor', 'success');
    });
    
    // Competitor Analysis
    document.getElementById('analyze-competitors-btn').addEventListener('click', function() {
        const competitors = document.getElementById('competitor-usernames').value;
        
        if (!competitors) {
            showToast('Please enter competitor usernames', 'error');
            return;
        }
        
        // Show loading
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        this.disabled = true;
        
        // Simulate analysis
        setTimeout(() => {
            // Competitor benchmarks
            const benchmarks = [
                { metric: 'Engagement Rate', you: '4.2%', competitor1: '3.8%', competitor2: '5.1%' },
                { metric: 'Post Frequency', you: '1.2/day', competitor1: '2.5/day', competitor2: '0.8/day' },
                { metric: 'Follower Growth', you: '+2.3%', competitor1: '+1.7%', competitor2: '+3.2%' },
                { metric: 'Top Content Type', you: 'Threads', competitor1: 'Images', competitor2: 'Videos' }
            ];
            
            let benchmarksHtml = '<div style="overflow-x: auto;"><table style="width: 100%; border-collapse: collapse;">';
            benchmarksHtml += `
                <thead>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <th style="text-align: left; padding: 0.75rem;">Metric</th>
                        <th style="text-align: left; padding: 0.75rem;">You</th>
                        <th style="text-align: left; padding: 0.75rem;">@competitor1</th>
                        <th style="text-align: left; padding: 0.75rem;">@competitor2</th>
                    </tr>
                </thead>
                <tbody>
            `;
            
            benchmarks.forEach(bench => {
                benchmarksHtml += `
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 0.75rem;">${bench.metric}</td>
                        <td style="padding: 0.75rem; font-weight: 600;">${bench.you}</td>
                        <td style="padding: 0.75rem;">${bench.competitor1}</td>
                        <td style="padding: 0.75rem;">${bench.competitor2}</td>
                    </tr>
                `;
            });
            
            benchmarksHtml += '</tbody></table></div>';
            document.getElementById('competitor-benchmarks').innerHTML = benchmarksHtml;
            
            // Content gap analysis
            const gaps = [
                'Competitors are posting more video content (you post 12% video vs. their 35%)',
                'You post less frequently on weekends when engagement is highest',
                'Competitors use 20% more hashtags per post',
                'Your threads perform better but are posted less often'
            ];
            
            let gapsHtml = '<ul style="margin: 0; padding-left: 1.25rem;">';
            gaps.forEach(gap => {
                gapsHtml += `<li style="margin-bottom: 0.25rem;">${gap}</li>`;
            });
            gapsHtml += '</ul>';
            
            document.getElementById('content-gap-analysis').innerHTML = gapsHtml;
            
            // Strategic recommendations
            const strategies = [
                'Increase video content to match competitor levels',
                'Schedule more weekend posts during peak engagement times',
                'Test adding 1-2 more hashtags per post',
                'Post threads more consistently (2-3 per week)',
                'Engage with competitor audiences to attract their followers'
            ];
            
            let strategiesHtml = '<ul style="margin: 0; padding-left: 1.25rem;">';
            strategies.forEach(strategy => {
                strategiesHtml += `<li style="margin-bottom: 0.25rem;">${strategy}</li>`;
            });
            strategiesHtml += '</ul>';
            
            document.getElementById('strategic-recommendations').innerHTML = strategiesHtml;
            
            document.querySelector('#competitor-analysis .ai-results').style.display = 'block';
            
            // Reset button
            this.innerHTML = '<i class="fas fa-chart-bar"></i> Analyze Competitors';
            this.disabled = false;
            
            // Initialize chart (in real app would use charting library)
            initializeCompetitorChart();
            
            showToast('Competitor analysis complete!', 'success');
        }, 2000);
    });
    
    // Export Competitor
    document.getElementById('export-competitor-btn').addEventListener('click', function() {
        showToast('Competitor report exported successfully!', 'success');
    });
    
    // Cancel buttons
    document.querySelectorAll('#ai-cancel-btn, .ai-actions .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would have more context-specific behavior
            showToast('Operation cancelled', 'info');
        });
    });
    
    // Initialize date pickers
    const today = new Date();
    document.getElementById('trend-start-date').valueAsDate = new Date(today.setDate(today.getDate() - 7));
    document.getElementById('trend-end-date').valueAsDate = new Date();
    
    // ===== HELPER FUNCTIONS =====
    
    function showToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle'}"></i>
            ${message}
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    // Chart initialization functions (simplified for example)
    function initializeSentimentChart(data) {
        console.log('Initializing sentiment chart with:', data);
        // In a real app, this would use Chart.js, ApexCharts, etc.
    }
    
    function initializeTrendsChart() {
        console.log('Initializing trends chart');
        // In a real app, this would use Chart.js, ApexCharts, etc.
    }
    
    function initializeDemographicsChart() {
        console.log('Initializing demographics chart');
        // In a real app, this would use Chart.js, ApexCharts, etc.
    }
    
    function initializeActivityChart() {
        console.log('Initializing activity chart');
        // In a real app, this would use Chart.js, ApexCharts, etc.
    }
    
    function initializeCompetitorChart() {
        console.log('Initializing competitor chart');
        // In a real app, this would use Chart.js, ApexCharts, etc.
    }
});