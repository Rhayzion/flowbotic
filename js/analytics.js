


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('analytics-content') && document.getElementById('analytics-content').classList.contains('active')) {
        initAnalytics();
    }
});
 function initAnalytics() {
    const analyticsContent = document.getElementById('analytics-content');
    analyticsContent.innerHTML = `
           <div class="container">

        <div class="analytics-page" id="mainContent">
            <div class="page-header">
                <div>
                    <h2 style="font-size: 1.75rem; font-weight: 700; display: flex; align-items: center;">
                        <i class="fas fa-chart-line" style="margin-right: 0.75rem; color: var(--primary);"></i>
                        Performance Analytics
                    </h2>
                    <p style="color: var(--text-secondary);">Last updated: <span id="lastUpdated">2 minutes ago</span></p>
                </div>
                <div class="date-range-selector" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="btn btn-sm btn-primary" data-tooltip="Last 7 Days">7D</button>
                    <button class="btn btn-sm btn-secondary" data-tooltip="Last 30 Days">30D</button>
                    <button class="btn btn-sm btn-secondary" data-tooltip="Select Custom Date Range">Custom Range <i class="fas fa-calendar"></i></button>
                    <button class="btn btn-sm btn-secondary" data-tooltip="Export Data"><i class="fas fa-download"></i> Export</button>
                </div>
            </div>

            <div class="metrics-grid" id="metricsGrid"></div>

            <div class="charts-section">
                <div class="chart-container glass">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1.25rem; font-weight: 600;">Engagement Trends</h3>
                        <div class="chart-actions" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <button class="btn btn-sm btn-primary" data-tooltip="View Interactions">Interactions</button>
                            <button class="btn btn-sm btn-secondary" data-tooltip="View Reach">Reach</button>
                            <button class="btn btn-sm btn-secondary" data-tooltip="View Sentiment">Sentiment</button>
                        </div>
                    </div>
                    <div id="engagementTrendChart" style="min-height: 300px;"></div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); text-align: right; margin-top: 0.5rem;">
                        <i class="fas fa-circle" style="color: var(--primary); font-size: 0.5rem;"></i> Likes 
                        <i class="fas fa-circle" style="color: var(--secondary); font-size: 0.5rem; margin-left: 0.75rem;"></i> Replies
                        <i class="fas fa-circle" style="color: var(--warning); font-size: 0.5rem; margin-left: 0.75rem;"></i> Retweets
                    </div>
                </div>
                
                <div class="chart-container glass">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1.25rem; font-weight: 600;">Follower Growth</h3>
                        <button class="btn btn-sm btn-secondary" data-tooltip="Filter Data">
                         Filter
                        </button>
                    </div>
                    <div id="followerGrowthChart" style="min-height: 300px;"></div>
                    <div style="font-size: 0.75rem; color: var(--text-secondary); text-align: right; margin-top: 0.5rem;">
                        <span style="color: var(--success);">↑ 128</span> new followers this week
                    </div>
                </div>
            </div>

            <div class="chart-container glass" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                    <h3 style="font-size: 1.25rem; font-weight: 600;">
                      Content Performance
                    </h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <button class="btn btn-sm btn-secondary" data-tooltip="Sort Table">
                            <i class="fas fa-sort-amount-down"></i> Sort
                        </button>
                        <button class="btn btn-sm btn-secondary" data-tooltip="Filter Content">
                            <i class="fas fa-filter"></i> Filter
                        </button>
                    </div>
                </div>
                <div class="content-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Content</th>
                                <th style="text-align: right;">Impressions</th>
                                <th style="text-align: right;">Engagement</th>
                                <th style="text-align: right;">Rate</th>
                                <th style="text-align: right;">Link Clicks</th>
                            </tr>
                        </thead>
                        <tbody id="contentTableBody"></tbody>
                    </table>
                </div>
            </div>

            <div class="chart-container glass" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem !important;">
                    <h3 style="font-size: 1.25rem; font-weight: 600;">
                        <i class="fas fa-users" style="margin-right: 0.5rem; color: var(--primary);"></i>
                        Audience Insights
                    </h3>
                    <button class="btn btn-sm btn-secondary" data-tooltip="Adjust Audience Segments">
                        <i class="fas fa-sliders-h"></i> Adjust Segments
                    </button>
                </div>
                <div class="audience-grid">
                    <div class="chart-container">
                        <h4 style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Follower Demographics</h4>
                        <div id="demographicsChart" style="min-height: 200px;"></div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">
                            <i class="fas fa-circle" style="color: #4361ee; font-size: 0.5rem;"></i> 25-34y 
                            <i class="fas fa-circle" style="color: #4cc9f0; font-size: 0.5rem; margin-left: 0.5rem;"></i> 35-44y 
                            <i class="fas fa-circle" style="color: #7209b7; font-size: 0.5rem; margin-left: 0.5rem;"></i> 18-24y
                        </div>
                    </div>
                    <div class="chart-container">
                        <h4 style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Most Active Times</h4>
                        <div id="activeTimesChart" style="min-height: 200px;"></div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">
                            <i class="fas fa-info-circle"></i> Best posting times highlighted
                        </div>
                    </div>
                    <div class="interests-card">
                        <h4 style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1rem;">Top Interests</h4>
                        <div id="interestsContainer" style="display: flex; flex-wrap: wrap; gap: 0.5rem;"></div>
                    </div>
                </div>
            </div>

            <div class="chart-container glass">
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1.5rem; display: flex; align-items: center;">
                    <i class="fas fa-lightbulb" style="margin-right: 0.5rem; color: var(--warning);"></i>
                    AI Recommendations
                </h3>
                <div class="recommendations-grid" id="recommendationsGrid"></div>
            </div>
        </div>
    </div>
 `;

    // css style

    const style = document.createElement('style')
    style.textContent =`
         .analytics-page {
            padding: 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .metric-card {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 1.25rem;
            border: 1px solid var(--border);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .metric-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .charts-section {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .chart-container {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 1.25rem;
            border: 1px solid var(--border);
        }

        .content-table {
            overflow-x: auto;
            margin-bottom: 1rem;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
        }

        th, td {
            padding: 0.75rem 1rem;
            text-align: left;
        }

        th {
            font-size: 0.875rem;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border);
        }

        tr {
            border-bottom: 1px solid var(--border);
        }

        .audience-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .interest-tag {
            background: rgba(67, 97, 238, 0.2);
            padding: 0.5rem 0.75rem;
            border-radius: 999px;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
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
        
        .range-list {
            background:rgb(0, 0, 0);
            padding: 0.75rem;
            border-radius: 999px;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
           color: var(--text-primary);
            cursor: pointer;
        }
      
        .recommendations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
        }

        .recommendation-card {
            background: rgba(30, 41, 59, 0.6);
            border-radius: 12px;
            padding: 1.25rem;
            border-left: 4px solid var(--warning);
        }

        @media (max-width: 768px) {
            .charts-section, .audience-grid {
                grid-template-columns: 1fr;
            }
            .analytics-page {
                padding: 1rem;
            }
        }
            `;

            document.head.appendChild(style);

            initAnalyticsFunctionality();
 }


 function initAnalyticsFunctionality() {
 
class AnalyticsDashboard {
    constructor() {
        this.data = this.getInitialData();
        this.charts = {};
        this.isInitialized = false;
    }

    /**
     * Initialize demo data for the dashboard
     */
    getInitialData() {
        return {
            metrics: {
                engagementRate: { value: 18.7, change: 3.2, trend: 'up' },
                newFollowers: { value: 428, change: 12, trend: 'up' },
                topPost: { impressions: 2481, content: "AI marketing trends..." },
                automationActions: { value: 1207 }
            },
            engagementTrend: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    { name: 'Likes', data: [45, 52, 38, 60, 48, 72, 65] },
                    { name: 'Replies', data: [12, 18, 15, 21, 17, 25, 20] },
                    { name: 'Retweets', data: [8, 12, 10, 15, 12, 18, 16] }
                ]
            },
            followerGrowth: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                series: [{ data: [4200, 4350, 4480, 4620, 4780, 4950, 5120] }]
            },
            contentPerformance: [
                { content: "AI marketing trends you can't ignore in 2024", date: "2 days ago", impressions: 2481, likes: 187, replies: 42, retweets: 28, engagementRate: 10.4, linkClicks: 87 },
                { content: "How we grew our SaaS to $10K MRR", date: "5 days ago", impressions: 1872, likes: 142, replies: 37, retweets: 19, engagementRate: 8.7, linkClicks: 64 },
                { content: "New feature announcement: AI-powered analytics", date: "1 week ago", impressions: 1502, likes: 98, replies: 24, retweets: 12, engagementRate: 7.2, linkClicks: 53 }
            ],
            audience: {
                demographics: { series: [44, 35, 21], labels: ['25-34 years', '35-44 years', '18-24 years'] },
                activeTimes: {
                    series: [{ name: 'Activity', data: [15, 22, 18, 25, 32, 28, 35, 42, 38, 32, 28, 22, 18, 25, 32, 40, 48, 52, 60, 55, 48, 40, 35, 30] }],
                    categories: Array.from({length: 24}, (_, i) => `${i}:00`)
                },
                interests: [
                    { name: "#AI", affinity: 87 },
                    { name: "#Marketing", affinity: 72 },
                    { name: "#SaaS", affinity: 68 },
                    { name: "#Startups", affinity: 59 }
                ]
            },
            recommendations: [
                { title: "Post More Threads", confidence: 89, description: "Your threads get 3.2x more engagement than single tweets. Try breaking down complex topics into 3-5 tweet threads.", action: "Generate Thread Ideas", color: "warning" },
                { title: "Engage with @TechLeaders", confidence: 76, description: "These 5 accounts share your target audience but have low overlap with your current engagers.", action: "View Accounts", color: "primary" },
                { title: "Optimize Posting Times", confidence: 92, description: "Schedule posts for 9:15 AM and 7:30 PM (your time) when 68% of your audience is active.", action: "Adjust Schedule", color: "success" }
            ]
        };
    }

    /**
     * Initialize the dashboard
     */
    init() {
        if (this.isInitialized) return;
        
        this.renderMetrics();
        this.initCharts();
        this.renderContentTable();
        this.renderAudienceInsights();
        this.setupEventListeners();
        this.updateLastUpdated();
        
        this.isInitialized = true;
    }

    /**
     * Render the metrics cards
     */
    renderMetrics() {
        const metricsContainer = document.getElementById('metricsGrid');
        if (!metricsContainer) return;
    
        metricsContainer.innerHTML = `
           <div class="metric-card glass">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">Engagement Rate</div>
                            <div style="font-size: 1.75rem; font-weight: 700; color: var(--${this.data.metrics.engagementRate.trend === 'up' ? 'success' : 'danger'});">
                                ${this.data.metrics.engagementRate.value}% 
                                <span style="font-size: 1rem;">${this.data.metrics.engagementRate.trend === 'up' ? '↑' : '↓'} ${this.data.metrics.engagementRate.change}%</span>
                            </div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary);">vs previous period</div>
                        </div>
                        <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(74, 222, 128, 0.1); display: flex; align-items: center; justify-content: center; color: var(--${this.data.metrics.engagementRate.trend === 'up' ? 'success' : 'danger'});">
                            <i class="fas fa-arrow-trend-up"></i>
                        </div>
                    </div>
                </div>
                <div class="metric-card glass">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">New Followers</div>
                            <div style="font-size: 1.75rem; font-weight: 700;">
                                ${this.data.metrics.newFollowers.value} 
                                <span style="font-size: 1rem; color: var(--${this.data.metrics.newFollowers.trend === 'up' ? 'success' : 'danger'});">${this.data.metrics.newFollowers.trend === 'up' ? '↑' : '↓'} ${this.data.metrics.newFollowers.change}%</span>
                            </div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary);">7-day growth</div>
                        </div>
                        <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(67, 97, 238, 0.1); display: flex; align-items: center; justify-content: center; color: var(--primary);">
                            <i class="fas fa-users"></i>
                        </div>
                    </div>
                </div>
                <div class="metric-card glass">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">Top Performing Post</div>
                            <div style="font-size: 1.75rem; font-weight: 700;">
                                ${this.data.metrics.topPost.impressions.toLocaleString()} 
                                <span style="font-size: 0.875rem; color: var(--text-secondary);">impressions</span>
                            </div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary);">"${this.data.metrics.topPost.content}"</div>
                        </div>
                        <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(248, 150, 30, 0.1); display: flex; align-items: center; justify-content: center; color: var(--warning);">
                            <i class="fas fa-fire"></i>
                        </div>
                    </div>
                </div>
                <div class="metric-card glass">
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">Automation Actions</div>
                            <div style="font-size: 1.75rem; font-weight: 700;">${this.data.metrics.automationActions.value.toLocaleString()}</div>
                            <div style="font-size: 0.75rem; color: var(--text-secondary);">this week</div>
                        </div>
                        <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(114, 9, 183, 0.1); display: flex; align-items: center; justify-content: center; color: var(--accent);">
                            <i class="fas fa-robot"></i>
                        </div>
                    </div>
                </div>
            `;
            const contentTableBody = document.getElementById('contentTableBody');
            contentTableBody.innerHTML = this.data.contentPerformance.map(post => `
                <tr>
                    <td style="max-width: 300px;">
                        <div style="font-weight: 500; margin-bottom: 0.25rem;">"${post.content}"</div>
                        <div style="font-size: 0.75rem; color: var(--text-secondary);">Posted ${post.date}</div>
                    </td>
                    <td style="text-align: right; font-weight: 500;">${post.impressions.toLocaleString()}</td>
                    <td style="text-align: right;">
                        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
                            <span style="color: var(--primary);"><i class="fas fa-heart"></i> ${post.likes}</span>
                            <span style="color: var(--secondary);"><i class="fas fa-comment"></i> ${post.replies}</span>
                            <span style="color: var(--warning);"><i class="fas fa-retweet"></i> ${post.retweets}</span>
                        </div>
                    </td>
                    <td style="text-align: right; color: var(--success); font-weight: 500;">${post.engagementRate}%</td>
                    <td style="text-align: right; font-weight: 500;">${post.linkClicks}</td>
                </tr>
            `).join('');

            const interestsContainer = document.getElementById('interestsContainer');
            interestsContainer.innerHTML = this.data.audience.interests.map(interest => `
                <span class="interest-tag" data-tooltip="${interest.name} - ${interest.affinity}% affinity">
                    <i class="fas fa-hashtag" style="margin-right: 0.25rem;"></i> ${interest.name} (${interest.affinity}%)
                </span>
            `).join('');

            const recommendationsGrid = document.getElementById('recommendationsGrid');
            recommendationsGrid.innerHTML = this.data.recommendations.map(rec => `
                <div class="recommendation-card" style="border-left-color: var(--${rec.color});">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <h4 style="font-weight: 600;">${rec.title}</h4>
                        <span style="background: rgba(var(--${rec.color}-rgb), 0.2); color: var(--${rec.color}); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">
                            ${rec.confidence}% Confidence
                        </span>
                    </div>
                    <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${rec.description}</p>
                    <button class="btn btn-sm" style="margin-top: 0.75rem; background: rgba(var(--${rec.color}-rgb), 0.2); color: var(--${rec.color});" data-tooltip="${rec.action}">
                        <i class="fas fa-${rec.action.includes('Thread') ? 'magic' : rec.action.includes('View') ? 'eye' : 'clock'}"></i> ${rec.action}
                    </button>
                </div>
            `).join('');

    
    }

    /**
     * Initialize all charts
     */
    initCharts() {
        // Engagement Trend Chart
        this.charts.engagement = new ApexCharts(
            document.querySelector("#engagementTrendChart"),
            {
                series: this.data.engagementTrend.series,
                chart: {
                    type: 'area',
                    height: 300,
                    toolbar: { show: true },
                    foreColor: '#a1a1aa',
                    animations :{ enabled: true},


                },
                colors:  [getComputedStyle(document.documentElement).getPropertyValue('--primary'),
                        getComputedStyle(document.documentElement).getPropertyValue('--secondary'),
                        getComputedStyle(document.documentElement).getPropertyValue('--warning')],
                dataLabels: { enabled: false },
               
                stroke: { curve: 'smooth', width: 2 },
                fill: { type: 'gradient', gradient: { opacityFrom: 0.7, opacityTo: 0.1 } },
                xaxis: { categories: this.data.engagementTrend.categories },
                yaxis: { labels: { formatter: (val) => val.toLocaleString() } },
                tooltip: { shared: true, intersect: false, theme: 'dark' },
                markers: { size: 3 },
                grid: { borderColor: 'rgba(255, 255, 255, 0.1)' }
            }
        );
        this.charts.engagement.render();

        // Follower Growth Chart
        this.charts.follower = new ApexCharts(
            document.querySelector("#followerGrowthChart"),
            {
                series: this.data.followerGrowth.series,
                chart: {
                    type: 'line',
                    height: 300,
                    toolbar: { show: false },
                    foreColor: '#a1a1aa'
                },
                colors: ['#4361ee'],
                stroke: { curve: 'smooth', width: 2 },
                markers: { size: 3 },
                xaxis: { categories: this.data.followerGrowth.categories },
                grid: { borderColor: 'rgba(255, 255, 255, 0.1)' }
            }
        );
        this.charts.follower.render();

        // Demographics Chart (if container exists)
        if (document.querySelector("#demographicsChart")) {
            this.charts.demographics = new ApexCharts(
                document.querySelector("#demographicsChart"),
                {
                    series: this.data.audience.demographics.series,
                    chart: { type: 'pie', height: 200 },
                    stroke: { width:0},
                    colors:  [getComputedStyle(document.documentElement).getPropertyValue('--primary'),
                        getComputedStyle(document.documentElement).getPropertyValue('--secondary'),
                        getComputedStyle(document.documentElement).getPropertyValue('--warning')],
                    labels: this.data.audience.demographics.labels,
                    legend: { position: 'bottom' }
                }
            );
            this.charts.demographics.render();
        }
    }

    /**
     * Render the content performance table
     */
    renderContentTable() {
        const tableBody = document.getElementById('contentTableBody');
        if (!tableBody) return;

        tableBody.innerHTML = this.data.contentPerformance.map(post => `
            <tr>
                <td>
                    <div class="content-title">${post.content}</div>
                </td>
                <td class="text-right">${post.impressions.toLocaleString()}</td>
                <td class="text-right text-primary">${post.engagementRate}%</td>
            </tr>
        `).join('');
    }

    /**
     * Render audience insights section
     */
    renderAudienceInsights() {
        // Interests
        const interestsContainer = document.getElementById('interestsContainer');
        if (interestsContainer) {
            interestsContainer.innerHTML = this.data.audience.interests.map(interest => `
                <span class="interest-tag">${interest}</span>
            `).join('');
        }

        // Active Times Chart (if container exists)
        if (document.querySelector("#activeTimesChart")) {
            this.charts.activeTimes = new ApexCharts(
                document.querySelector("#activeTimesChart"),
                {
                    series: this.data.audience.activeTimes.series,
                    chart: { type: 'heatmap', height: 200 },
                    plotOptions: { heatmap: { colorScale: { ranges: [
                        { from: 0, to: 20, color: '#3a0ca3' },
                        { from: 20, to: 40, color: '#4361ee' },
                        { from: 40, to: 100, color: '#4cc9f0' }
                    ]}}},
                    dataLabels: { enabled: false },
                    xaxis: { categories: this.data.audience.activeTimes.categories }
                }
            );
            this.charts.activeTimes.render();
        }
    }

    /**
     * Set up event listeners
     */
    setupEventListeners() {
        // Date range selector
        document.getElementById('dateRange')?.addEventListener('change', async (e) => {
            const range = e.target.value;
            const customStart = document.getElementById('customStart');
            const customEnd = document.getElementById('customEnd');
            
            customStart.style.display = range === 'custom' ? 'inline-flex' : 'none';
            customEnd.style.display = range === 'custom' ? 'inline-flex' : 'none';
            
            if (range !== 'custom') {
                await this.loadData(range);
            }
        });

        // Custom date range handler
        document.getElementById('customEnd')?.addEventListener('change', async () => {
            const start = document.getElementById('customStart').value;
            const end = document.getElementById('customEnd').value;
            
            if (start && end) {
                await this.loadData('custom');
            }
        });

        // Refresh button
        document.getElementById('refreshGrowth')?.addEventListener('click', async () => {
            await this.loadData('7d', true);
        });

        // Metric selector
        document.getElementById('metricSelector')?.addEventListener('change', (e) => {
            this.updateEngagementChart(e.target.value);
        });

        // Export button
        document.getElementById('exportBtn')?.addEventListener('click', () => {
            this.exportData();
        });
    }

    /**
     * Load data for the dashboard
     * @param {string} range - Time range for data
     * @param {boolean} refreshFollower - Whether to only refresh follower data
     */
    async loadData(range, refreshFollower = false) {
        try {
            // Show loading state
            if (!refreshFollower) {
                document.querySelectorAll('.chart-container').forEach(chart => {
                    chart.classList.add('loading');
                });
            }

            // Simulate API call
            const newData = await this.fetchData(range);

            // Update charts and data
            if (refreshFollower) {
                this.data.followerGrowth = newData.followerGrowth;
                this.charts.follower.updateSeries(this.data.followerGrowth.series);
            } else {
                this.data = newData;
                this.updateAllCharts();
                this.renderMetrics();
                this.renderContentTable();
            }
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            // Remove loading state
            document.querySelectorAll('.chart-container').forEach(chart => {
                chart.classList.remove('loading');
            });
        }
    }

    /**
     * Simulate fetching data from API
     */
    async fetchData(range) {
        return new Promise(resolve => {
            setTimeout(() => {
                const multiplier = range === '30d' ? 2 : range === '90d' ? 3 : 1;
                const newData = JSON.parse(JSON.stringify(this.data));
                
                // Scale data based on date range
                Object.keys(newData.metrics).forEach(key => {
                    if (newData.metrics[key].value) {
                        newData.metrics[key].value = Math.round(this.data.metrics[key].value * multiplier * 100) / 100;
                    }
                });
                
                newData.engagementTrend.series.forEach(s => {
                    s.data = s.data.map(v => Math.round(v * multiplier));
                });
                
                newData.followerGrowth.series[0].data = 
                    newData.followerGrowth.series[0].data.map(v => Math.round(v * multiplier));
                
                resolve(newData);
            }, 800); // Simulate network delay
        });
    }

    /**
     * Update all charts with current data
     */
    updateAllCharts() {
        if (this.charts.engagement) {
            this.charts.engagement.updateSeries(this.data.engagementTrend.series);
        }
        if (this.charts.follower) {
            this.charts.follower.updateSeries(this.data.followerGrowth.series);
        }
        if (this.charts.demographics) {
            this.charts.demographics.updateSeries(this.data.audience.demographics.series);
        }
        if (this.charts.activeTimes) {
            this.charts.activeTimes.updateSeries(this.data.audience.activeTimes.series);
        }
    }

    /**
     * Update engagement chart based on selected metric
     */
    updateEngagementChart(metric) {
        if (!this.charts.engagement) return;

        const seriesMap = {
            interactions: this.data.engagementTrend.series,
            reach: [{ 
                name: 'Reach', 
                data: this.data.engagementTrend.series[0].data.map(v => v * 10) 
            }],
            sentiment: [{ 
                name: 'Sentiment', 
                data: this.data.engagementTrend.series[0].data.map(() => 
                    Math.floor(Math.random() * 30) + 70
                )
            }]
        };

        this.charts.engagement.updateSeries(seriesMap[metric]);
    }

    /**
     * Export data as CSV
     */
    exportData() {
        const csvContent = this.generateCSV();
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `analytics_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    /**
     * Generate CSV content from current data
     */
    generateCSV() {
        const headers = ['Metric,Value,Change'];
        
        const metrics = Object.entries(this.data.metrics).map(([key, value]) => {
            const val = typeof value === 'object' ? value.value : value;
            const change = typeof value === 'object' && value.change ? 
                `${value.trend === 'up' ? '+' : ''}${value.change}%` : '';
            return `${key},${val},${change}`;
        });
        
        const content = ['\nContent Performance', 'Content,Impressions,Engagement Rate']
            .concat(this.data.contentPerformance.map(post => 
                `"${post.content}",${post.impressions},${post.engagementRate}%`
            ));
        
        return headers.concat(metrics).concat(content).join('\n');
    }

    /**
     * Update the "last updated" time
     */
    updateLastUpdated() {
        const updateElement = document.getElementById('lastUpdated');
        if (!updateElement) return;

        const updateTime = () => {
            const now = new Date();
            updateElement.textContent = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        };

        updateTime();
        setInterval(updateTime, 60000); // Update every minute
    }

    /**
     * Clean up when leaving the tab
     */
    destroy() {
        // Destroy all charts
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        
        // Clear event listeners
        const elements = [
            'dateRange', 'customStart', 'customEnd', 
            'refreshGrowth', 'metricSelector', 'exportBtn'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.replaceWith(element.cloneNode(true));
            }
        });
        
        this.isInitialized = false;
    }
}

// Tab integration
let analyticsDashboard = null;

/**
 * Initialize analytics tab
 */
function initAnalytics() {
    // Only initialize if analytics tab is active and not already initialized
    const analyticsTab = document.getElementById('analytics-content');
    if (!analyticsTab || !analyticsTab.classList.contains('active')) return;
    
    if (!analyticsDashboard) {
        analyticsDashboard = new AnalyticsDashboard();
        analyticsDashboard.init();
    }
}
 
/**
 * Clean up analytics tab when switching away
 */
function cleanupAnalytics() {
    if (analyticsDashboard) {
        analyticsDashboard.destroy();
        analyticsDashboard = null;
    }
}

cleanupAnalytics(); 
initAnalytics(); 
 }

