document.addEventListener('DOMContentLoaded', function() {
            initTooltips();
            setupMobileMenu();
            setupSwipe();
            setupEventListeners();
            
            // Set initial theme
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.body.dataset.theme = savedTheme;
            
            // Update activity log periodically
            setInterval(updateActivityLog, 5000);
        });

        function setupEventListeners() {
            // Master toggle
            document.getElementById('masterToggle').addEventListener('change', function() {
                const statusText = this.checked ? 'All Active' : 'All Paused';
                document.getElementById('masterToggleText').textContent = statusText;
                const indicators = document.querySelectorAll('.status-indicator');
                indicators.forEach(ind => ind.classList.toggle('status-active', this.checked));
                
                // Show toast notification
                showToast(`Automations ${this.checked ? 'activated' : 'paused'}`);
            });
            
            // Add rule buttons
            document.getElementById('addUserRuleBtn').addEventListener('click', function() {
                showToast('Add new user rule');
            });
            
            document.getElementById('addKeywordRuleBtn').addEventListener('click', function() {
                showToast('Add new keyword rule');
            });
            
            // FAB button
            document.getElementById('fabBtn').addEventListener('click', function() {
                showToast('Quick actions menu');
            });
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            
            if (window.innerWidth <= 767) {
                sidebar.classList.toggle('active');
            } else {
                sidebar.classList.toggle('expanded');
                mainContent.classList.toggle('expanded');
            }
        }

        function toggleTheme() {
            const body = document.body;
            const newTheme = body.dataset.theme === 'light' ? 'dark' : 'light';
            body.dataset.theme = newTheme;
            localStorage.setItem('theme', newTheme);
            
            showToast(`${newTheme === 'light' ? 'Light' : 'Dark'} mode activated`);
        }

        function initTooltips() {
            const elements = document.querySelectorAll('[data-tooltip]');
            elements.forEach(el => {
                let tooltip = null;
                
                el.addEventListener('mouseenter', function(e) {
                    if (window.innerWidth > 767) {
                        tooltip = document.createElement('div');
                        tooltip.className = 'tooltip';
                        tooltip.textContent = this.dataset.tooltip;
                        document.body.appendChild(tooltip);
                        
                        const rect = this.getBoundingClientRect();
                        tooltip.style.left = `${rect.left + (rect.width / 2)}px`;
                        tooltip.style.top = `${rect.top - 10}px`;
                        tooltip.style.transform = 'translate(-50%, -100%)';
                        
                        setTimeout(() => {
                            tooltip.style.opacity = '1';
                        }, 10);
                    }
                });
                
                el.addEventListener('mouseleave', function() {
                    if (tooltip) {
                        tooltip.remove();
                        tooltip = null;
                    }
                });
                
                el.addEventListener('click', function() {
                    if (window.innerWidth <= 767 && this.dataset.tooltip) {
                        showToast(this.dataset.tooltip);
                    }
                });
            });
        }

        function setupMobileMenu() {
            const mobileToggle = document.getElementById('mobileMenuToggle');
            const sidebar = document.getElementById('sidebar');
            
            mobileToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
            });
            
            // Close sidebar when clicking outside
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 767 && 
                    !sidebar.contains(e.target) && 
                    e.target !== mobileToggle && 
                    !mobileToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            });
        }

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
            const input = document.querySelector('.chips-container input');
            if (input.value.trim()) {
                const chip = document.createElement('span');
                chip.className = 'chip';
                chip.innerHTML = `${input.value.trim()} <i class="fas fa-times"></i>`;
                chip.onclick = function() { removeChip(this); };
                input.parentElement.insertBefore(chip, input.parentElement.lastElementChild);
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

        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            toast.style.cssText = `
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
            `;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '1';
            }, 10);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }