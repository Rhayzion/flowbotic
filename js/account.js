/**
 * Account Page Initialization
 */
function initAccountPage(userData) {
    // Add required styles
    addAccountStyles();
    
    // Create page structure
    createAccountStructure(userData);
    
    // Setup event listeners
    setupAccountEvents();
    
    // Initialize any plugins or additional functionality
    initAccountPlugins();
}

/**
 * Adds all required styles for the account page
 */
function addAccountStyles() {
    if (document.getElementById('account-page-styles')) return;

    const style = document.createElement('style');
    style.id = 'account-page-styles';
    style.textContent = `
        /* Main Account Container */
        .account-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            font-family: 'Inter', sans-serif;
            color: #333;
        }
        
        /* Header Section */
        .account-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }
        
        .page-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 0;
        }
        
        .header-actions {
            display: flex;
            gap: 1rem;
        }
        
        /* Card Styles */
        .account-card {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            margin-bottom: 2rem;
            border: 1px solid #e5e7eb;
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 1rem;
        }
        
        .card-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        /* Profile Info Section */
        .profile-info {
            display: flex;
            gap: 2rem;
            margin-bottom: 1.5rem;
        }
        
        .profile-picture {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--primary-color);
        }
        
        .profile-info-item {
            flex: 1;
        }
        
        .profile-info-item label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #666;
        }
        
        .profile-info-item input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        
        .profile-info-item input:disabled {
            background: #f9fafb;
            color: #333;
        }
        
        /* Stats Section */
        .profile-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .stat-item {
            background: #f8fafc;
            border-radius: 8px;
            padding: 1rem;
            border: 1px solid #e5e7eb;
        }
        
        .stat-label {
            color: #64748b;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
        }
        
        /* Twitter Connection */
        .twitter-connection {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            background: rgba(29, 161, 242, 0.05);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(29, 161, 242, 0.1);
            margin-bottom: 1.5rem;
        }
        
        .twitter-profile-picture {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .twitter-info h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.25rem;
        }
        
        .twitter-info p {
            margin: 0.25rem 0;
            color: #64748b;
        }
        
        /* Form Elements */
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .form-control {
            width: 100%;
            padding: 0.9rem 1rem;
            background: #f8fafc;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            font-size: 1rem;
        }
        
        /* Buttons */
        .btn {
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.95rem;
        }
        
        .btn-sm {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        }
        
        .btn-primary {
            background: var(--primary-color);
            color: white;
        }
        
        .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .btn-secondary {
            background: #fff;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
        }
        
        .btn-secondary:hover {
            background: rgba(67, 97, 238, 0.1);
        }
        
        .btn-danger {
            background: #fee2e2;
            color: #dc2626;
            border: 1px solid #fca5a5;
        }
        
        .btn-danger:hover {
            background: #fecaca;
        }
        
        /* Utility Classes */
        .text-success {
            color: #16a34a;
        }
        
        .text-warning {
            color: #d97706;
        }
        
        .text-danger {
            color: #dc2626;
        }
        
        /* Loading Spinner */
        .spinner {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .profile-info {
                flex-direction: column;
            }
            
            .profile-stats {
                grid-template-columns: 1fr 1fr;
            }
            
            .account-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .header-actions {
                width: 100%;
                justify-content: space-between;
            }
        }
        
        @media (max-width: 480px) {
            .profile-stats {
                grid-template-columns: 1fr;
            }
            
            .btn {
                width: 100%;
                justify-content: center;
            }
        }
    `;
    
    document.head.appendChild(style);
}

/**
 * Creates the account page structure
 */
function createAccountStructure(userData) {
    const accountContainer = document.getElementById('account-content');
    if (accountContainer.querySelector('.account-container')) return;{
    
    accountContainer.innerHTML = `
        <!-- Header Section -->
        <div class="account-header">
            <h1 class="page-title">My Account</h1>
            <div class="header-actions">
                <button class="btn btn-secondary" id="account-settings">
                    <i class="fa-solid fa-gear"></i> Settings
                </button>
                <button class="btn btn-primary" id="account-logout">
                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                </button>
            </div>
        </div>
        
        <!-- Profile Information Card -->
        <div class="account-card">
            <div class="card-header">
                <h2 class="card-title">
                    <i class="fa-solid fa-user"></i>
                    <span>Profile Information</span>
                </h2>
                <button class="btn btn-secondary btn-sm" id="account-edit">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
            </div>
            
            <div class="profile-info">
                <img src="${userData.profilePicture || 'https://via.placeholder.com/150'}" 
                     alt="Profile Picture" 
                     class="profile-picture">
                <div class="profile-info-item">
                    <label for="username">Username</label>
                    <input type="text" id="username" value="${userData.username}" disabled>
                </div>
                <div class="profile-info-item">
                    <label for="email">Email</label>
                    <input type="email" id="email" value="${userData.email}" disabled>
                </div>
                <div class="profile-info-item">
                    <label for="joinedDate">Joined Date</label>
                    <input type="text" id="joinedDate" value="${formatDate(userData.joinedDate)}" disabled>
                </div>
            </div>
            
            <div class="profile-stats">
                <div class="stat-item">
                    <div class="stat-label">Automation Runs</div>
                    <div class="stat-value">${userData.stats.automationRuns}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Follower Growth</div>
                    <div class="stat-value">+${userData.stats.followerGrowth}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Engagement Rate</div>
                    <div class="stat-value">${userData.stats.engagementRate}%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Total Posts</div>
                    <div class="stat-value">${userData.stats.totalPosts}</div>
                </div>
            </div>
        </div>
        
        <!-- Twitter Connection Card -->
        <div class="account-card">
            <div class="card-header">
                <h2 class="card-title">
                    <i class="fa-brands fa-twitter"></i>
                    <span>Twitter Connection</span>
                </h2>
                <button class="btn btn-secondary btn-sm" id="manage-twitter">
                    <i class="fa-solid fa-pen-to-square"></i> Manage
                </button>
            </div>
            
            ${userData.twitter ? `
            <div class="twitter-connection">
                <img src="${userData.twitter.profilePicture || 'https://via.placeholder.com/150'}" 
                     alt="Twitter Profile" 
                     class="twitter-profile-picture">
                <div class="twitter-info">
                    <h3>${userData.twitter.name}</h3>
                    <p class="text-primary">@${userData.twitter.handle}</p>
                    <p>Followers: ${userData.twitter.followers.toLocaleString()}</p>
                    <p>Connected since: ${formatDate(userData.twitter.connectedSince)}</p>
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Connection Status</label>
                <div class="form-control text-success">
                    <i class="fas fa-check-circle"></i> Active (Full Access)
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">API Access</label>
                <div class="form-control">
                    Read & Write Permissions
                </div>
            </div>
            
            <button class="btn btn-danger" id="revoke-access">
                <i class="fa-solid fa-unlink"></i> Disconnect Twitter
            </button>
            ` : `
            <div class="twitter-connection" style="justify-content: center; padding: 2rem;">
                <button class="btn btn-primary" id="connect-twitter">
                    <i class="fa-brands fa-twitter"></i> Connect Twitter Account
                </button>
            </div>
            `}
        </div>
        
        <!-- Account Security Card -->
        <div class="account-card">
            <div class="card-header">
                <h2 class="card-title">
                    <i class="fa-solid fa-shield-halved"></i>
                    <span>Account Security</span>
                </h2>
            </div>
            
            <div class="form-group">
                <label class="form-label">Email Verification</label>
                <div class="form-control ${userData.emailVerified ? 'text-success' : 'text-warning'}">
                    <i class="fas ${userData.emailVerified ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                    ${userData.emailVerified ? 'Verified' : 'Not Verified'}
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Password</label>
                <div class="form-control">
                    ••••••••••••
                </div>
            </div>
            
            <button class="btn btn-secondary" id="reset-password">
                <i class="fa-solid fa-key"></i> Change Password
            </button>
            
            <button class="btn btn-secondary" style="margin-top: 1rem;" id="two-factor-auth">
                <i class="fa-solid fa-shield-alt"></i> 
                ${userData.twoFactorEnabled ? 'Manage 2FA' : 'Enable Two-Factor Auth'}
            </button>
        </div>
        
        <!-- Subscription Card -->
        <div class="account-card">
            <div class="card-header">
                <h2 class="card-title">
                    <i class="fa-solid fa-crown"></i>
                    <span>Subscription</span>
                </h2>
                <button class="btn btn-primary btn-sm" id="manage-subscription">
                    <i class="fa-solid fa-pen-to-square"></i> Manage
                </button>
            </div>
            
            <div class="form-group">
                <label class="form-label">Subscription Status</label>
                <div class="form-control ${userData.subscription.active ? 'text-success' : 'text-danger'}">
                    ${userData.subscription.status}
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Current Plan</label>
                <div class="form-control">
                    ${userData.subscription.plan} ($${userData.subscription.price}/month)
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Next Billing Date</label>
                <div class="form-control">
                    ${formatDate(userData.subscription.nextBillingDate)}
                </div>
            </div>
            
            <div class="form-group">
                <label class="form-label">Payment Method</label>
                <div class="form-control">
                    <i class="fa-brands fa-cc-${userData.subscription.paymentMethod.type.toLowerCase()}"></i>
                    ${userData.subscription.paymentMethod.display}
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button class="btn btn-danger" id="cancel-subscription" ${!userData.subscription.canCancel ? 'disabled' : ''}>
                    <i class="fa-solid fa-ban"></i> Cancel Subscription
                </button>
                <button class="btn btn-primary" id="upgrade-subscription">
                    <i class="fa-solid fa-arrow-up"></i> Upgrade Plan
                </button>
            </div>
        </div>
    `;
    

}

/**
 * Sets up all event listeners for the account page
 */
function setupAccountEvents() {
    // Edit Profile
    document.getElementById('account-edit')?.addEventListener('click', toggleEditMode);
    
    // Twitter Connection
    document.getElementById('manage-twitter')?.addEventListener('click', manageTwitterConnection);
    document.getElementById('connect-twitter')?.addEventListener('click', connectTwitterAccount);
    document.getElementById('revoke-access')?.addEventListener('click', revokeTwitterAccess);
    
    // Security
    document.getElementById('reset-password')?.addEventListener('click', resetPassword);
    document.getElementById('two-factor-auth')?.addEventListener('click', toggleTwoFactorAuth);
    
    // Subscription
    document.getElementById('manage-subscription')?.addEventListener('click', manageSubscription);
    document.getElementById('cancel-subscription')?.addEventListener('click', cancelSubscription);
    document.getElementById('upgrade-subscription')?.addEventListener('click', upgradeSubscription);
    
    // Account Actions
    document.getElementById('account-settings')?.addEventListener('click', openSettings);
    document.getElementById('account-logout')?.addEventListener('click', logoutUser);
}

/**
 * Initializes any plugins or additional functionality
 */
function initAccountPlugins() {
    // Initialize tooltips if needed
    // Initialize any form validation
    // etc.
}

/**
 * Helper function to format dates
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Toggles edit mode for profile information
 */
function toggleEditMode() {
    const editButton = document.getElementById('account-edit');
    const inputs = document.querySelectorAll('.profile-info-item input');
    const isEditing = editButton.textContent.includes('Edit');
    
    if (isEditing) {
        // Switch to edit mode
        inputs.forEach(input => input.disabled = false);
        editButton.innerHTML = '<i class="fa-solid fa-save"></i> Save';
        editButton.classList.remove('btn-secondary');
        editButton.classList.add('btn-primary');
    } else {
        // Switch to view mode and save changes
        inputs.forEach(input => input.disabled = true);
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit';
        editButton.classList.remove('btn-primary');
        editButton.classList.add('btn-secondary');
        
        // Here you would typically save the changes to the backend
        saveProfileChanges();
    }
}

/**
 * Saves profile changes to the backend
 */
function saveProfileChanges() {
    const saveButton = document.getElementById('account-edit');
    const originalText = saveButton.innerHTML;
    
    // Show loading state
    saveButton.disabled = true;
    saveButton.innerHTML = '<span class="spinner"></span> Saving...';
    
    // Simulate API call
    setTimeout(() => {
        // In a real app, you would make an actual API call here
        console.log('Profile changes saved');
        
        // Restore button state
        saveButton.disabled = false;
        saveButton.innerHTML = originalText;
        
        // Show success message
        showToast('Profile updated successfully');
    }, 1500);
}

/**
 * Manages Twitter connection
 */
function manageTwitterConnection() {
    console.log('Opening Twitter connection management');
    // In a real app, this would open a modal or redirect to Twitter OAuth
    showToast('Redirecting to Twitter connection settings...');
}

function connectTwitterAccount() {
    console.log('Connecting Twitter account');
    // In a real app, this would initiate the Twitter OAuth flow
    showToast('Initiating Twitter connection...');
}

function revokeTwitterAccess() {
    if (confirm('Are you sure you want to disconnect your Twitter account?')) {
        console.log('Revoking Twitter access');
        // In a real app, this would make an API call to revoke access
        showToast('Twitter account disconnected', 'warning');
    }
}

/**
 * Handles security-related actions
 */
function resetPassword() {
    console.log('Initiating password reset');
    // In a real app, this would open a password reset modal or flow
    showToast('Password reset email sent');
}

function toggleTwoFactorAuth() {
    const button = document.getElementById('two-factor-auth');
    const isEnabled = button.textContent.includes('Enable');
    
    if (isEnabled) {
        console.log('Enabling 2FA');
        // In a real app, this would open a 2FA setup flow
        showToast('Two-factor authentication setup initiated');
    } else {
        console.log('Disabling 2FA');
        // In a real app, this would confirm before disabling
        if (confirm('Are you sure you want to disable two-factor authentication?')) {
            showToast('Two-factor authentication disabled', 'warning');
        }
    }
}

/**
 * Handles subscription actions
 */
function manageSubscription() {
    console.log('Opening subscription management');
    // In a real app, this would open a subscription management page/modal
    showToast('Redirecting to subscription management...');
}

function cancelSubscription() {
    if (confirm('Are you sure you want to cancel your subscription?')) {
        console.log('Cancelling subscription');
        // In a real app, this would make an API call
        showToast('Subscription cancellation requested', 'warning');
    }
}

function upgradeSubscription() {
    console.log('Upgrading subscription');
    // In a real app, this would open an upgrade modal
    showToast('Opening subscription upgrade options...');
}

/**
 * General account actions
 */
function openSettings() {
    console.log('Opening account settings');
    // In a real app, this would navigate to settings
    showToast('Redirecting to account settings...');
}

function logoutUser() {
    if (confirm('Are you sure you want to log out?')) {
        console.log('Logging out user');
        // In a real app, this would clear auth tokens and redirect
        showToast('Logging out...');
        setTimeout(() => {
            window.location.href = '/login';
        }, 1000);
    }
}

/**
 * Shows a toast notification
 */
function showToast(message, type = 'success') {
    // In a real app, you might use a proper toast library
    console.log(`${type.toUpperCase()}: ${message}`);
    alert(`${type.toUpperCase()}: ${message}`);
}

// Example usage:
const sampleUserData = {
    username: 'Ralph Leo',
    email: 'ralph.leo@example.com',
    profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
    joinedDate: '2025-01-15T00:00:00Z',
    emailVerified: true,
    twoFactorEnabled: false,
    stats: {
        automationRuns: 1248,
        followerGrowth: 1042,
        engagementRate: 8.7,
        totalPosts: 328
    },
    twitter: {
        name: 'Rhayzion',
        handle: 'rhayztweety',
        profilePicture: 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg',
        followers: 5421,
        connectedSince: '2023-02-20T00:00:00Z'
    },
    subscription: {
        active: true,
        status: 'Active',
        plan: 'Professional',
        price: 29,
        nextBillingDate: '2023-12-15T00:00:00Z',
        paymentMethod: {
            type: 'Visa',
            display: 'Visa ending in 4242'
        },
        canCancel: true
    }
};
}

// Initialize the page when DOM is loaded

    if (document.getElementById('account-content') && document.getElementById('account-content').classList.contains('active')) {
        
    initAccountPage(sampleUserData);

}
