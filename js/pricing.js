document.addEventListener('DOMContentLoaded', () => {
    // ===== INJECT STYLES =====
    const injectStyles = (css) => {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    };

    injectStyles(`
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .pricing-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            border: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            position: relative;
        }
        
        .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-card.featured {
            border: 2px solid #3b82f6;
        }
        
        .featured-badge {
            position: absolute;
            top: -10px;
            right: 20px;
            background: #3b82f6;
            color: white;
            padding: 0.25rem 1rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .pricing-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #111827;
        }
        
        .pricing-price {
            font-size: 2.5rem;
            font-weight: 800;
            color: #111827;
            margin-bottom: 1.5rem;
        }
        
        .pricing-price span {
            font-size: 1rem;
            font-weight: 400;
            color: #6b7280;
        }
        
        .pricing-features {
            list-style: none;
            padding: 0;
            margin-bottom: 2rem;
        }
        
        .pricing-features li {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            color: #4b5563;
        }
        
        .pricing-features i {
            color: #10b981;
            margin-right: 0.5rem;
            width: 20px;
        }
        
        /* Buttons */
        .btn {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s ease;
            width: 100%;
        }
        
        .btn-primary {
            background: #3b82f6;
            color: white;
            border: none;
        }
        
        .btn-primary:hover {
            background: #2563eb;
        }
        
        .btn-secondary {
            background: white;
            color: #3b82f6;
            border: 1px solid #3b82f6;
        }
        
        .btn-secondary:hover {
            background: #f9fafb;
        }
        
        @media (max-width: 768px) {
            .pricing-grid {
                grid-template-columns: 1fr;
            }
        }
    `);

    // ===== PRICING TAB MARKUP =====
    const pricingTab = document.getElementById('pricing');
    
    pricingTab.innerHTML = `
        <div class="pricing-grid">
            <div class="pricing-card">
                <h3 class="pricing-title">Starter</h3>
                <div class="pricing-price">$0<span>/month</span></div>
                <ul class="pricing-features">
                    <li><i class="fas fa-check"></i> 10 scheduled posts/month</li>
                    <li><i class="fas fa-check"></i> 20 likes per day</li>
                    <li><i class="fas fa-check"></i> Basic analytics</li>
                    <li><i class="fas fa-check"></i> Email support</li>
                    <li><i class="fas fa-check"></i> 7-day Pro trial</li>
                </ul>
                <button class="btn btn-secondary" id="starterPlanBtn">
                    Get Started
                </button>
            </div>
            <div class="pricing-card featured">
                <div class="featured-badge">MOST POPULAR</div>
                <h3 class="pricing-title">Pro</h3>
                <div class="pricing-price">$15<span>/month</span></div>
                <ul class="pricing-features">
                    <li><i class="fas fa-check"></i> Unlimited scheduled posts</li>
                    <li><i class="fas fa-check"></i> 150 likes per day</li>
                    <li><i class="fas fa-check"></i> Advanced analytics</li>
                    <li><i class="fas fa-check"></i> Priority support</li>
                    <li><i class="fas fa-check"></i> AI-powered suggestions</li>
                </ul>
                <button class="btn btn-primary" id="proPlanBtn">
                    Upgrade Now
                </button>
            </div>
            <div class="pricing-card">
                <h3 class="pricing-title">Enterprise</h3>
                <div class="pricing-price">$49<span>/month</span></div>
                <ul class="pricing-features">
                    <li><i class="fas fa-check"></i> Everything in Pro</li>
                    <li><i class="fas fa-check"></i> 5 connected accounts</li>
                    <li><i class="fas fa-check"></i> Team collaboration</li>
                    <li><i class="fas fa-check"></i> Custom automation rules</li>
                    <li><i class="fas fa-check"></i> Dedicated account manager</li>
                </ul>
                <button class="btn btn-secondary" id="enterprisePlanBtn">
                    Contact Sales
                </button>
            </div>
        </div>
    `;

    // ===== PRICING TAB FUNCTIONALITY =====
    document.getElementById('starterPlanBtn').addEventListener('click', () => {
        showToast('Starter plan selected', 'success');
    });

    document.getElementById('proPlanBtn').addEventListener('click', () => {
        showToast('Pro plan selected', 'success');
    });

    document.getElementById('enterprisePlanBtn').addEventListener('click', () => {
        showToast('Contacting sales team...', 'info');
    });

    // ===== TOAST NOTIFICATION =====
    function showToast(message, type = 'info') {
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
});