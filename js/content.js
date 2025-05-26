// content.js - AI-Powered Twitter Content Management Dashboard

// Main initialization function
function initContent() {
 
   
    addContentStyles();
    
   
    createDashboardStructure();
    
   
    setupContentDashboard();
}

// Add CSS styles for the content dashboard
function addContentStyles() {
    if (document.getElementById('content-dashboard-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'content-dashboard-styles';
    style.textContent = `
        /* Content Dashboard Styles */
        .content-dashboard {
            padding: 1.5rem;
            background: var(--dark)
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
        
        
        /* Content Tabs */
        .content-tabs {
            display: flex;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 1.5rem;
            overflow-x: auto;
        }
        
        .tab {
            padding: 0.75rem 1.5rem;
            cursor: pointer;
            position: relative;
            color: #a1a1aa;
            font-weight: 500;
            white-space: nowrap;
        }
        
        .tab.active {
            color: #4895ef;
        }
        
        .tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #4895ef;
        }
        
        /* Tab Content */
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        /* Content Creation Area */
        .content-creator {
            background: rgba(30, 41, 59, 0.4);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 2rem;
        }
        
        .creator-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .creator-title {
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .tweet-composer {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .composer-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(67, 97, 238, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4361ee;
            flex-shrink: 0;
        }
        
        .composer-input {
            flex: 1;
        }
        
        .tweet-input {
            width: 100%;
            background: transparent;
            border: none;
            color: white;
            font-size: 1rem;
            resize: none;
            min-height: 150px;
            outline: none;
            font-family: inherit;
            line-height: 1.5;
        }
        
        .tweet-input::placeholder {
            color: #71717a;
        }
        
        .composer-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 1rem;
        }
        
        .media-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .media-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            color: #4361ee;
            cursor: pointer;
            transition: background 0.2s ease;
        }
        
        .media-btn:hover {
            background: rgba(67, 97, 238, 0.1);
        }
        
        .submit-btn {
            background: #4361ee;
            color: white;
            border: none;
            border-radius: 24px;
            padding: 0.5rem 1.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s ease;
        }
        
        .submit-btn:hover {
            background: #3a0ca3;
        }
        
        /* AI Tools Section */
        .ai-tools {
            margin-top: 1.5rem;
        }
        
        .ai-tools-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .ai-tools-title {
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .ai-tools-buttons {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        /* Content Library */
        .content-library {
            background: rgba(30, 41, 59, 0.4);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .library-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .library-title {
            font-size: 1.25rem;
            font-weight: 600;
        }
        
        .library-filters {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }
        
        .filter-btn {
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 20px;
            color: white;
            cursor: pointer;
            font-size: 0.875rem;
            transition: background 0.2s ease;
        }
        
        .filter-btn.active {
            background: #4361ee;
        }
        
        .filter-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }
        
        .content-items {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1rem;
        }
        
        .content-item {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease;
            cursor: pointer;
        }
        
        .content-item:hover {
            transform: translateY(-2px);
            border-color: #4361ee;
        }
        
        .item-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .item-type {
            font-size: 0.75rem;
            color: #4361ee;
            background: rgba(67, 97, 238, 0.1);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
        }
        
        .item-type.photo { color: #7209b7; background: rgba(114, 9, 183, 0.1); }
        .item-type.video { color: #4ade80; background: rgba(74, 222, 128, 0.1); }
        .item-type.thread { color: #f8961e; background: rgba(248, 150, 30, 0.1); }
        
        .item-date {
            font-size: 0.75rem;
            color: #a1a1aa;
        }
        
        .item-content {
            margin-bottom: 0.75rem;
            font-size: 0.875rem;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .item-stats {
            display: flex;
            gap: 1rem;
            font-size: 0.75rem;
            color: #a1a1aa;
        }
        
        .stat {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }
        
        /* AI Enhancement Modal */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
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
        
        .modal-content {
            background: #16213e;
            border-radius: 12px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            transform: translateY(-20px);
            transition: transform 0.3s ease;
        }
        
        .modal-overlay.active .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
            color: #a1a1aa;
            font-size: 1.5rem;
            cursor: pointer;
            line-height: 1;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
        }
        
        /* AI Options */
        .ai-options {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .ai-option {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .ai-option:hover {
            background: rgba(67, 97, 238, 0.1);
            border-color: #4361ee;
        }
        
        .ai-option-icon {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #4361ee;
        }
        
        .ai-option-title {
            font-weight: 500;
            margin-bottom: 0.25rem;
        }
        
        .ai-option-desc {
            font-size: 0.75rem;
            color: #a1a1aa;
        }
        
        
        /* Add to your existing styles */
#copy-content-btn {
    transition: all 0.2s ease;
}

#copy-content-btn:hover {
    background: var(--primary) !important;
    transform: scale(1.1);
}

#copy-content-btn:active {
    transform: scale(0.95);
}

.copy-status {
    height: 20px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}
        
        /* Responsive */
        @media (max-width: 768px) {
            .content-items {
                grid-template-columns: 1fr;
            }
            
            .header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .header-actions {
                width: 100%;
                justify-content: space-between;
            }
        }
    `;
    document.head.appendChild(style);
}

// Create the dashboard HTML structure
function createDashboardStructure() {
    const contentTab = document.getElementById('content-content');
    if (contentTab.querySelector('.content-dashboard')) return;
    
    contentTab.innerHTML = `
        <div class="content-dashboard">
            <div class="header">
                <h1 class="page-title">AI Content Studio</h1>
                <div class="header-actions">
                    <button class="btn btn-secondary" id="refresh-btn">
                        <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                    <button class="btn btn-primary" id="new-content-btn">
                        <i class="fas fa-plus"></i> New Content
                    </button>
                </div>
            </div>
            
            <div class="content-tabs">
                <div class="tab active" data-tab="create">Create</div>
                <div class="tab" data-tab="enhance">Enhance</div>
                <div class="tab" data-tab="library">Library</div>
            </div>
            
            <!-- Create Tab -->
            <div class="tab-content active" id="create-tab">
                <div class="content-creator">
                    <div class="creator-header">
                        <h2 class="creator-title">Create New Content</h2>
                    </div>
                    
                    <div class="tweet-composer">
                        <div class="composer-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="composer-input">
                            <textarea class="tweet-input" id="tweet-input" placeholder="What would you like to create?"></textarea>
                        </div>
                    </div>
                    
                    <div class="composer-actions">
                        <div class="media-actions">
                            <button class="media-btn" title="Add media" id="add-media-btn">
                                <i class="fas fa-image"></i>
                            </button>
                            <button class="media-btn" title="Add emoji" id="add-emoji-btn">
                                <i class="far fa-smile"></i>
                            </button>
                        </div>
                        <button class="submit-btn" id="generate-content-btn">
                            <i class="fas fa-magic"></i> Generate with AI
                        </button>
                    </div>
                    
                    <div class="ai-tools">
                        <div class="ai-tools-header">
                            <i class="fas fa-robot" style="color: #4895ef;"></i>
                            <div class="ai-tools-title">AI Content Suggestions</div>
                        </div>
                        <div class="ai-tools-buttons">
                            <button class="btn btn-secondary btn-sm" id="generate-thread-btn">
                                Generate Thread
                            </button>
                            <button class="btn btn-secondary btn-sm" id="generate-thread-btn">
                                Viral Tweet Ideas
                            </button>
                            <button class="btn btn-secondary btn-sm" id="generate-thread-btn">
                                Engagement Questions
                            </button>
                            <button class="btn btn-secondary btn-sm" id="generate-thread-btn">
                                Trending Topics
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Enhance Tab -->
            <div class="tab-content" id="enhance-tab">
                <div class="content-creator">
                    <div class="creator-header">
                        <h2 class="creator-title">Enhance Existing Content</h2>
                    </div>
                    
                    <div class="tweet-composer">
                        <div class="composer-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="composer-input">
                            <textarea class="tweet-input" id="enhance-input" placeholder="Paste content you want to enhance"></textarea>
                        </div>
                    </div>
                    
                    <div class="composer-actions">
                        <button class="submit-btn" id="enhance-content-btn">
                            <i class="fas fa-wand-magic-sparkles"></i> Enhance with AI
                        </button>
                    </div>
                    
                    <div class="ai-tools">
                        <div class="ai-tools-header">
                            <i class="fas fa-robot" style="color: #4895ef;"></i>
                            <div class="ai-tools-title">AI Enhancement Tools</div>
                        </div>
                        <div class="ai-tools-buttons">
                            <button class="btn btn-secondary btn-sm" id="optimize-engagement-btn">
                                Optimize Engagement
                            </button>
                            <button class="btn btn-secondary btn-sm" id="rewrite-btn">
                                Rewrite
                            </button>
                            <button class="btn btn-secondary btn-sm" id="shorten-btn">
                                Shorten
                            </button>
                            <button class="btn btn-secondary btn-sm" id="expand-btn">
                                Expand
                            </button>
                            <button class="btn btn-secondary btn-sm" id="add-hashtags-btn">
                                Add Hashtags
                            </button>
                            <button class="btn btn-secondary btn-sm" id="fix-grammar-btn">
                                Fix Grammar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Library Tab -->
            <div class="tab-content" id="library-tab">
                <div class="content-library">
                    <div class="library-header">
                        <h2 class="library-title">Content Library</h2>
                        <div class="header-actions">
                            <button class="btn btn-secondary btn-sm" id="refresh-library-btn">
                                <i class="fas fa-sync-alt"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="library-filters">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="text">Text</button>
                        <button class="filter-btn" data-filter="image">Images</button>
                        <button class="filter-btn" data-filter="video">Videos</button>
                        <button class="filter-btn" data-filter="thread">Threads</button>
                        <button class="filter-btn" data-filter="top">Top Performing</button>
                    </div>
                    
                    <div class="content-items" id="content-items">
                        <!-- Content items will be loaded here -->
                    </div>
                </div>
            </div>
            
            <!-- AI Enhancement Modal -->
            <div class="modal-overlay" id="ai-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="ai-modal-title">AI Content Generation</h3>
                        <button class="modal-close" id="close-ai-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div id="ai-modal-content">
                            <!-- AI options or generated content will appear here -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-ai-btn">Cancel</button>
                        <button class="btn btn-primary" id="apply-ai-btn">Apply</button>
                    </div>
                </div>
            </div>
            
            <!-- Toast Notification -->
            <div class="toast" id="toast">
                <i class="fas fa-check-circle toast-icon"></i>
                <div class="toast-message" id="toast-message">Operation successful</div>
                <button class="toast-close">&times;</button>
            </div>
        </div>
    `;
}

// Setup all dashboard functionality
function setupContentDashboard() {
    // Sample content data
    const contentItems = [
        {
            id: 1,
            type: 'text',
            content: 'Just launched our new AI-powered content studio! Create, enhance, and optimize your Twitter content with just a few clicks. #AIContent #TwitterGrowth',
            date: 'Jun 15, 2023',
            likes: 142,
            retweets: 28,
            replies: 12,
            isTopPerforming: true
        },
        {
            id: 2,
            type: 'thread',
            content: 'Thread: 5 ways AI can improve your Twitter content strategy 1/5 Personalization at scale - AI can help tailor your content to different audience segments automatically...',
            date: 'Jun 12, 2023',
            likes: 218,
            retweets: 45,
            replies: 23,
            isTopPerforming: true
        },
        {
            id: 3,
            type: 'image',
            content: 'Behind the scenes of our AI content generation - see how our algorithms analyze thousands of high-performing tweets to generate suggestions!',
            date: 'Jun 8, 2023',
            likes: 156,
            retweets: 32,
            replies: 18,
            isTopPerforming: false
        },
        {
            id: 4,
            type: 'text',
            content: 'Want to create viral tweets? Try our new AI-powered content suggestions that analyze trending topics and your audience preferences!',
            date: 'Jun 5, 2023',
            likes: 189,
            retweets: 34,
            replies: 21,
            isTopPerforming: true
        },
        {
            id: 5,
            type: 'video',
            content: 'Watch how our AI enhances existing content by optimizing for engagement, adding relevant hashtags, and improving readability.',
            date: 'Jun 3, 2023',
            likes: 275,
            retweets: 62,
            replies: 31,
            isTopPerforming: true
        }
    ];
    
    // AI enhancement options
    const aiOptions = [
        {
            id: 'optimize',
            title: 'Optimize for Engagement',
            description: 'Improve your content to maximize likes, retweets, and replies',
            icon: 'fas fa-heart'
        },
        {
            id: 'rewrite',
            title: 'Rewrite Content',
            description: 'Get alternative versions of your content with different styles',
            icon: 'fas fa-pen-fancy'
        },
        {
            id: 'shorten',
            title: 'Make it Concise',
            description: 'Reduce length while keeping key messages',
            icon: 'fas fa-compress'
        },
        {
            id: 'expand',
            title: 'Expand Content',
            description: 'Add more details and depth to your content',
            icon: 'fas fa-expand'
        },
        {
            id: 'hashtags',
            title: 'Add Hashtags',
            description: 'Suggest relevant hashtags to increase discoverability',
            icon: 'fas fa-hashtag'
        },
        {
            id: 'grammar',
            title: 'Fix Grammar',
            description: 'Correct any grammatical errors and improve readability',
            icon: 'fas fa-spell-check'
        },
        {
            id: 'tone',
            title: 'Adjust Tone',
            description: 'Change to professional, casual, humorous, or other tones',
            icon: 'fas fa-comment-dots'
        },
        {
            id: 'translate',
            title: 'Translate',
            description: 'Convert your content to other languages',
            icon: 'fas fa-language'
        }
    ];
    
    // Load content items into the library
    function loadContentItems(items) {
        const container = document.getElementById('content-items');
        if (!container) return;
        
        container.innerHTML = '';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'content-item';
            
            const typeClass = item.type === 'image' ? 'photo' : item.type;
            
            itemElement.innerHTML = `
                <div class="item-header">
                    <span class="item-type ${typeClass}">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                    <span class="item-date">${item.date}</span>
                </div>
                <div class="item-content">${item.content}</div>
                <div class="item-stats">
                    <div class="stat">
                        <i class="fas fa-heart"></i> ${item.likes}
                    </div>
                    <div class="stat">
                        <i class="fas fa-retweet"></i> ${item.retweets}
                    </div>
                    <div class="stat">
                        <i class="fas fa-reply"></i> ${item.replies}
                    </div>
                </div>
            `;
            
            itemElement.addEventListener('click', () => {
                openEnhanceModal(item.content);
            });
            
            container.appendChild(itemElement);
        });
    }
    
    // Set up all event listeners
    function setupEventListeners() {
        // Tab switching
        const tabs = document.querySelectorAll('.content-tabs .tab');
        const tabContents = document.querySelectorAll('#content-content .tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding content
                tabContents.forEach(content => content.classList.remove('active'));
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
        
        // Generate content button
        document.getElementById('generate-content-btn')?.addEventListener('click', () => {
            const prompt = document.getElementById('tweet-input').value.trim();
            
            if (!prompt) {
                showToast('Please enter some text to generate content', 'error');
                return;
            }
            
            generateAIContent(prompt);
        });
        
        // Enhance content button
        document.getElementById('enhance-content-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            
            if (!content) {
                showToast('Please enter some content to enhance', 'error');
                return;
            }
            
            showAIOptions(content);
        });
        
        // AI tool buttons
        document.getElementById('optimize-engagement-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            if (content) {
                enhanceContent(content, 'optimize');
            } else {
                showToast('Please enter some content first', 'error');
            }
        });
        
        document.getElementById('rewrite-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            if (content) {
                enhanceContent(content, 'rewrite');
            } else {
                showToast('Please enter some content first', 'error');
            }
        });
        
        document.getElementById('shorten-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            if (content) {
                enhanceContent(content, 'shorten');
            } else {
                showToast('Please enter some content first', 'error');
            }
        });
        
        document.getElementById('expand-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            if (content) {
                enhanceContent(content, 'expand');
            } else {
                showToast('Please enter some content first', 'error');
            }
        });
        
        document.getElementById('add-hashtags-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            if (content) {
                enhanceContent(content, 'hashtags');
            } else {
                showToast('Please enter some content first', 'error');
            }
        });
        
        document.getElementById('fix-grammar-btn')?.addEventListener('click', () => {
            const content = document.getElementById('enhance-input').value.trim();
            if (content) {
                enhanceContent(content, 'grammar');
            } else {
                showToast('Please enter some content first', 'error');
            }
        });
        
        // Modal buttons
        document.getElementById('close-ai-modal')?.addEventListener('click', closeAIModal);
        document.getElementById('cancel-ai-btn')?.addEventListener('click', closeAIModal);
        document.getElementById('apply-ai-btn')?.addEventListener('click', applyAIContent);
        
        // Toast close button
        document.querySelector('.toast-close')?.addEventListener('click', () => {
            document.getElementById('toast').classList.remove('show');
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active filter
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter content
                let filteredItems = [...contentItems];
                
                if (filter === 'text') {
                    filteredItems = filteredItems.filter(item => item.type === 'text');
                } else if (filter === 'image') {
                    filteredItems = filteredItems.filter(item => item.type === 'image');
                } else if (filter === 'video') {
                    filteredItems = filteredItems.filter(item => item.type === 'video');
                } else if (filter === 'thread') {
                    filteredItems = filteredItems.filter(item => item.type === 'thread');
                } else if (filter === 'top') {
                    filteredItems = filteredItems.filter(item => item.isTopPerforming);
                }
                
                loadContentItems(filteredItems);
            });
        });
    }
    
    // Generate AI content based on prompt
   // Modify the generateAIContent function to include copy functionality
function generateAIContent(prompt) {
    const generateBtn = document.getElementById('generate-content-btn');
    if (generateBtn) {
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateBtn.disabled = true;
    }

    setTimeout(() => {
        const aiResponses = [
            `Here's a tweet based on your input:\n\n"${prompt}"\n\nWhat do you think? Would you like me to refine it further?`,
            `I've created this content for you:\n\n"${prompt}"\n\nThis version is optimized for engagement.`,
            `Based on trends:\n\n"${prompt}"\n\nWith current popular hashtags.`
        ];

        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

        document.getElementById('ai-modal-title').textContent = 'Generated Content';
        document.getElementById('ai-modal-content').innerHTML = `
            <div style="margin-bottom: 1rem; position: relative;">
                <textarea 
                    id="generated-content-text" 
                    class="tweet-input" 
                    style="width: 100%; min-height: 150px; padding-right: 40px;"
                >${randomResponse}</textarea>
                <button 
                    id="copy-content-btn" 
                    style="position: absolute; top: 10px; right: 10px; background: rgba(30,41,59,0.8); border: none; color: white; width: 30px; height: 30px; border-radius: 4px; cursor: pointer;"
                    title="Copy to clipboard"
                >
                    <i class="fas fa-copy"></i>
                </button>
            </div>
            <div class="copy-status" id="copy-status" style="font-size: 0.875rem; color: #a1a1aa; text-align: right;"></div>
            <div style="font-size: 0.875rem; color: #a1a1aa;">
                <i class="fas fa-lightbulb"></i> Tip: You can edit before copying or applying.
            </div>
        `;

        // Setup copy functionality
        document.getElementById('copy-content-btn')?.addEventListener('click', copyGeneratedContent);
        
        openAIModal();
        
        if (generateBtn) {
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate with AI';
            generateBtn.disabled = false;
        }
    }, 1500);
}

// New function to handle copying
function copyGeneratedContent() {
    const textarea = document.getElementById('generated-content-text');
    const statusElement = document.getElementById('copy-status');
    
    if (!textarea || !statusElement) return;

    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        navigator.clipboard.writeText(textarea.value).then(() => {
            statusElement.innerHTML = '<i class="fas fa-check"></i> Copied to clipboard!';
            statusElement.style.color = '#4ade80';
            
            // Reset status after 3 seconds
            setTimeout(() => {
                statusElement.textContent = '';
            }, 3000);
        });
    } catch (err) {
        // Fallback for older browsers
        document.execCommand('copy');
        statusElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        statusElement.style.color = '#4ade80';
        
        setTimeout(() => {
            statusElement.textContent = '';
        }, 3000);
    }
}         
            
    
    // Show AI enhancement options
    function showAIOptions(content) {
        const modalTitle = document.getElementById('ai-modal-title');
        const modalContent = document.getElementById('ai-modal-content');
        
        if (modalTitle && modalContent) {
            modalTitle.textContent = 'Select Enhancement';
            modalContent.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.875rem; margin-bottom: 0.5rem;">Original Content:</div>
                    <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 6px; font-size: 0.875rem; line-height: 1.5;">
                        ${content}
                    </div>
                </div>
                <div class="ai-options" id="ai-options">
                    ${aiOptions.map(option => `
                        <div class="ai-option" data-option="${option.id}">
                            <div class="ai-option-icon">
                                <i class="${option.icon}"></i>
                            </div>
                            <div class="ai-option-title">${option.title}</div>
                            <div class="ai-option-desc">${option.description}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            // Add event listeners to options
            document.querySelectorAll('.ai-option').forEach(option => {
                option.addEventListener('click', function() {
                    const optionId = this.getAttribute('data-option');
                    enhanceContent(content, optionId);
                });
            });
            
            openAIModal();
        }
    }
    
    // Enhance content with specific AI option
    function enhanceContent(content, option) {
        const modalContent = document.getElementById('ai-modal-content');
        if (!modalContent) return;
            // Show loading state
    modalContent.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 200px;">
        <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem; color: #4895ef;"></i>
        <div>Enhancing your content...</div>
    </div>
`;

// Simulate API call with timeout
setTimeout(() => {
    // Sample enhanced content based on option
    let enhancedContent = content;
    
    switch(option) {
        case 'optimize':
            enhancedContent = `${content}\n\nThis version has been optimized for maximum engagement with your audience. We've adjusted the wording to be more compelling and added a clear call-to-action. #EngagementBoost`;
            break;
        case 'rewrite':
            enhancedContent = `Here's a fresh take on your content:\n\n"${content}"\n\nRewritten to maintain the original meaning while using different phrasing and structure.`;
            break;
        case 'shorten':
            enhancedContent = `Concise version:\n\n"${content.split(' ').slice(0, 15).join(' ')}..."\n\nReduced to the key points while maintaining clarity.`;
            break;
        case 'expand':
            enhancedContent = `Expanded version with more details:\n\n"${content}"\n\nWe've added supporting points and examples to provide more value to your audience.`;
            break;
        case 'hashtags':
            enhancedContent = `${content}\n\n#AIContent #TwitterGrowth #DigitalMarketing #SocialMediaTips #ContentCreation`;
            break;
        case 'grammar':
            enhancedContent = `Grammar-corrected version:\n\n"${content}"\n\nWe've fixed any grammatical errors and improved overall readability.`;
            break;
        case 'tone':
            enhancedContent = `Professional tone version:\n\n"${content}"\n\nThis maintains your message while adjusting the tone to be more formal.`;
            break;
        case 'translate':
            enhancedContent = `Spanish translation:\n\n"${content}"\n\n(Translated content would appear here)`;
            break;
        default:
            enhancedContent = `Enhanced version:\n\n"${content}"\n\nThis content has been improved based on AI analysis of high-performing tweets.`;
    }

    // Show the enhanced content
    const modalTitle = document.getElementById('ai-modal-title');
    if (modalTitle) {
        modalTitle.textContent = 'Enhanced Content';
    }
    
    modalContent.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <div style="font-size: 0.875rem; margin-bottom: 0.5rem;">Original:</div>
            <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 6px; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem;">
                ${content}
            </div>
            <div style="font-size: 0.875rem; margin-bottom: 0.5rem;">Enhanced:</div>
            <textarea class="tweet-input" style="width: 100%; min-height: 150px;">${enhancedContent}</textarea>
        </div>
        <div style="font-size: 0.875rem; color: #a1a1aa;">
            <i class="fas fa-lightbulb"></i> You can further edit the content before applying.
        </div>
    `;
}, 1500);
}

// Open AI modal
function openAIModal() {
const modal = document.getElementById('ai-modal');
if (modal) {
    modal.classList.add('active');
}
}

// Close AI modal
function closeAIModal() {
const modal = document.getElementById('ai-modal');
if (modal) {
    modal.classList.remove('active');
}
}

// Apply AI-generated content
function applyAIContent() {
    const enhancedContent = document.querySelector('#ai-modal-content textarea')?.value;
    if (!enhancedContent) return;
    
    const activeTab = document.querySelector('#content-content .tab-content.active')?.id;
    
    if (activeTab === 'create-tab') {
        const tweetInput = document.getElementById('tweet-input');
        if (tweetInput) {
            tweetInput.value = enhancedContent;
            showToast('Content applied to editor!', 'success');
        }
    } else {
        const enhanceInput = document.getElementById('enhance-input');
        if (enhanceInput) {
            enhanceInput.value = enhancedContent;
            showToast('Content applied to editor!', 'success');
        }
    }
    
    closeAIModal();
}

// Open enhance modal with existing content
function openEnhanceModal(content) {
const enhanceInput = document.getElementById('enhance-input');
if (enhanceInput) {
    enhanceInput.value = content;
}

const enhanceTab = document.querySelector('.tab[data-tab="enhance"]');
if (enhanceTab) {
    enhanceTab.click();
}

showToast('Content loaded for enhancement', 'success');
}

// Show toast notification
function showToast(message, type = 'success') {
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const toastIcon = toast?.querySelector('.toast-icon');

if (!toast || !toastMessage || !toastIcon) return;

// Update toast content
toastMessage.textContent = message;
toast.className = 'toast';
toast.classList.add(type);
toast.classList.add('show');

// Update icon based on type
toastIcon.className = type === 'success' 
    ? 'fas fa-check-circle toast-icon' 
    : 'fas fa-exclamation-circle toast-icon';

// Auto-hide after 5 seconds
setTimeout(() => {
    toast.classList.remove('show');
}, 5000);
}

// Initialize the dashboard
loadContentItems(contentItems);
setupEventListeners();
}