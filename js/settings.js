
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('settings-content') && document.getElementById('settings-content').classList.contains('active')) {
    initSettings();
}
});

function initSettings() {

    const settingsContainer = document.getElementById('settings-content');

    settingsContainer.innerHTML = `


     <div class="settings-container">
            <!-- Settings Navigation -->
            <div class="settings-nav">
                <div class="settings-nav-item active" data-section="profile">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </div>
                <div class="settings-nav-item" data-section="notifications">
                    <i class="fas fa-bell"></i>
                    <span>Notifications</span>
                </div>
                <div class="settings-nav-item" data-section="security">
                    <i class="fas fa-shield-alt"></i>
                    <span>Security</span>
                </div>
                <div class="settings-nav-item" data-section="data">
                    <i class="fas fa-database"></i>
                    <span>Data & Privacy</span>
                </div>
                <div class="settings-nav-item" data-section="billing">
                    <i class="fas fa-credit-card"></i>
                    <span>Billing</span>
                </div>
                <div class="settings-nav-item" data-section="integrations">
                    <i class="fas fa-plug"></i>
                    <span>Integrations</span>
                </div>
            </div>
            
            <!-- Settings Content -->
            <div class="settings-content">
                <!-- Profile Settings (Default Section) -->
                <div id="profile-section" class="settings-section active">
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-user"></i> Profile Information
                            </h3>
                        </div>
                        
                        <div class="profile-header">
                            <img src="https://via.placeholder.com/80" alt="Profile" class="profile-avatar" id="profile-avatar">
                            <div class="profile-info">
                                <div class="profile-name" id="profile-name">John Doe</div>
                                <div class="profile-username" id="profile-username">@johndoe</div>
                                <div class="avatar-upload">
                                    <input type="file" id="avatar-upload" accept="image/*" style="display: none;">
                                    <button class="btn btn-secondary" id="change-avatar-btn">
                                        <i class="fas fa-camera"></i> Change Avatar
                                    </button>
                                    <button class="btn btn-secondary" id="remove-avatar-btn">
                                        <i class="fas fa-trash"></i> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Display Name</label>
                            <input type="text" class="form-control" id="display-name" value="John Doe">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" value="johndoe">
                            <div class="form-hint">This will be your public handle</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Bio</label>
                            <textarea class="form-control" id="bio" rows="3" placeholder="Tell us about yourself">Digital marketer and social media enthusiast</textarea>
                            <div class="form-hint">Max 160 characters</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Website</label>
                            <input type="url" class="form-control" id="website" placeholder="https://example.com" value="https://johndoe.com">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Location</label>
                            <input type="text" class="form-control" id="location" placeholder="City, Country" value="New York, USA">
                        </div>
                        
                        <button class="btn btn-primary" id="save-profile-btn">
                            <i class="fas fa-save"></i> Save Profile
                        </button>
                    </div>
                    
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-link"></i> Social Links
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Twitter</label>
                            <input type="url" class="form-control" id="twitter-url" placeholder="https://twitter.com/username" value="https://twitter.com/johndoe">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Instagram</label>
                            <input type="url" class="form-control" id="instagram-url" placeholder="https://instagram.com/username" value="https://instagram.com/johndoe">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">LinkedIn</label>
                            <input type="url" class="form-control" id="linkedin-url" placeholder="https://linkedin.com/in/username">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Other Website</label>
                            <input type="url" class="form-control" id="other-url" placeholder="https://example.com">
                        </div>
                        
                        <button class="btn btn-primary" id="save-social-btn">
                            <i class="fas fa-save"></i> Save Social Links
                        </button>
                    </div>
                </div>
                
                <!-- Notification Settings -->
                <div id="notifications-section" class="settings-section">
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-bell"></i> Notification Preferences
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" checked id="email-notifications">
                                <span class="custom-checkbox"></span>
                                Email notifications
                            </label>
                            <div class="checkbox-description">Receive important updates via email</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" checked id="push-notifications">
                                <span class="custom-checkbox"></span>
                                Push notifications
                            </label>
                            <div class="checkbox-description">Get real-time alerts on your device</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" id="weekly-reports">
                                <span class="custom-checkbox"></span>
                                Weekly reports
                            </label>
                            <div class="checkbox-description">Receive weekly performance summaries</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" checked id="mentions-notifications">
                                <span class="custom-checkbox"></span>
                                Mentions & replies
                            </label>
                            <div class="checkbox-description">Get notified when someone mentions you</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" checked id="direct-messages">
                                <span class="custom-checkbox"></span>
                                Direct messages
                            </label>
                            <div class="checkbox-description">Notify me about new messages</div>
                        </div>
                        
                        <button class="btn btn-primary" id="save-notification-settings">
                            <i class="fas fa-save"></i> Save Notification Settings
                        </button>
                    </div>
                </div>
                
                <!-- Security Settings -->
                <div id="security-section" class="settings-section">
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-shield-alt"></i> Password & Security
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Current Password</label>
                            <input type="password" class="form-control" placeholder="Enter current password" id="current-password">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">New Password</label>
                            <input type="password" class="form-control" placeholder="Enter new password" id="new-password">
                            <div class="form-hint">Minimum 8 characters with at least one number and one special character</div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Confirm New Password</label>
                            <input type="password" class="form-control" placeholder="Confirm new password" id="confirm-password">
                        </div>
                        
                        <button class="btn btn-primary" id="change-password-btn">
                            <i class="fas fa-key"></i> Change Password
                        </button>
                    </div>
                    
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-lock"></i> Two-Factor Authentication
                            </h3>
                            <span class="badge">Enabled</span>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">Two-factor authentication adds an extra layer of security to your account.</p>
                            <button class="btn btn-secondary" id="manage-2fa-btn">
                                <i class="fas fa-qrcode"></i> Manage 2FA
                            </button>
                        </div>
                    </div>
                    
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-desktop"></i> Active Sessions
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">These are devices that are currently logged in to your account.</p>
                            <div style="background: var(--bg-secondary); border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <div>
                                        <strong>Chrome on Windows</strong>
                                        <div style="font-size: 0.75rem; color: var(--text-secondary);">New York, USA • Just now</div>
                                    </div>
                                    <button class="btn btn-sm btn-secondary">
                                        <i class="fas fa-sign-out-alt"></i> Logout
                                    </button>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div>
                                        <strong>Safari on iPhone</strong>
                                        <div style="font-size: 0.75rem; color: var(--text-secondary);">London, UK • 2 days ago</div>
                                    </div>
                                    <button class="btn btn-sm btn-secondary">
                                        <i class="fas fa-sign-out-alt"></i> Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Data & Privacy Settings -->
                <div id="data-section" class="settings-section">
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-database"></i> Data Management
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">Download a copy of all your data including posts, settings, and analytics.</p>
                            <button class="btn btn-secondary" id="export-data-btn">
                                <i class="fas fa-download"></i> Export All Data
                            </button>
                            <div class="form-hint">This may take several minutes to prepare</div>
                        </div>
                    </div>
                    
                    <div class="settings-card danger-zone">
                        <div class="danger-zone-header">
                            <i class="fas fa-exclamation-triangle"></i>
                            <h3 class="settings-card-title">Danger Zone</h3>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">Permanently delete your account and all associated data.</p>
                            <button class="btn btn-danger" id="delete-account-btn">
                                <i class="fas fa-trash"></i> Delete Account
                            </button>
                            <div class="form-hint">This action cannot be undone. All your data will be permanently deleted.</div>
                        </div>
                    </div>
                </div>
                
                <!-- Billing Settings -->
                <div id="billing-section" class="settings-section">
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-credit-card"></i> Billing Information
                            </h3>
                            <span class="badge">Premium Plan</span>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Payment Method</label>
                            <div style="background: var(--bg-secondary); border-radius: 8px; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <i class="fab fa-cc-visa" style="font-size: 1.5rem; margin-right: 0.75rem;"></i>
                                    <strong>Visa ending in 4242</strong>
                                    <div style="font-size: 0.75rem; color: var(--text-secondary);">Expires 04/2025</div>
                                </div>
                                <button class="btn btn-sm btn-secondary">
                                    <i class="fas fa-pen"></i> Edit
                                </button>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Billing Address</label>
                            <input type="text" class="form-control" id="billing-address" placeholder="Street Address" value="123 Main St">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                                <input type="text" class="form-control" id="billing-city" placeholder="City" value="New York">
                                <input type="text" class="form-control" id="billing-zip" placeholder="ZIP Code" value="10001">
                            </div>
                            <select class="form-control" id="billing-country" style="margin-top: 1rem;">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                        
                        <button class="btn btn-primary" id="save-billing-btn">
                            <i class="fas fa-save"></i> Save Billing Information
                        </button>
                    </div>
                    
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-receipt"></i> Billing History
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">View and download your past invoices.</p>
                            <div style="background: var(--bg-secondary); border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <div>
                                        <strong>Premium Plan</strong>
                                        <div style="font-size: 0.75rem; color: var(--text-secondary);">April 2023 • $19.99</div>
                                    </div>
                                    <button class="btn btn-sm btn-secondary">
                                        <i class="fas fa-download"></i> Download
                                    </button>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div>
                                        <strong>Premium Plan</strong>
                                        <div style="font-size: 0.75rem; color: var(--text-secondary);">March 2023 • $19.99</div>
                                    </div>
                                    <button class="btn btn-sm btn-secondary">
                                        <i class="fas fa-download"></i> Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Integrations Settings -->
                <div id="integrations-section" class="settings-section">
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-plug"></i> Connected Apps
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">These apps have access to your account data.</p>
                            <div style="background: var(--bg-secondary); border-radius: 8px; padding: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <img src="https://via.placeholder.com/30" alt="Google" style="width: 30px; height: 30px; border-radius: 4px;">
                                        <div>
                                            <strong>Google</strong>
                                            <div style="font-size: 0.75rem; color: var(--text-secondary);">Calendar integration</div>
                                        </div>
                                    </div>
                                    <button class="btn btn-sm btn-secondary">
                                        <i class="fas fa-sign-out-alt"></i> Disconnect
                                    </button>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <img src="https://via.placeholder.com/30" alt="Slack" style="width: 30px; height: 30px; border-radius: 4px;">
                                        <div>
                                            <strong>Slack</strong>
                                            <div style="font-size: 0.75rem; color: var(--text-secondary);">Notification integration</div>
                                        </div>
                                    </div>
                                    <button class="btn btn-sm btn-secondary">
                                        <i class="fas fa-sign-out-alt"></i> Disconnect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="settings-card">
                        <div class="settings-card-header">
                            <h3 class="settings-card-title">
                                <i class="fas fa-plus-circle"></i> Available Integrations
                            </h3>
                        </div>
                        
                        <div class="form-group">
                            <p style="margin-bottom: 1rem;">Connect with other services to enhance your experience.</p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                                <div style="background: var(--bg-secondary); border-radius: 8px; padding: 1rem; text-align: center;">
                                    <img src="https://via.placeholder.com/50" alt="Dropbox" style="width: 50px; height: 50px; border-radius: 4px; margin-bottom: 0.5rem;">
                                    <div style="font-weight: 600; margin-bottom: 0.25rem;">Dropbox</div>
                                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.5rem;">File storage</div>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fas fa-plus"></i> Connect
                                    </button>
                                </div>
                                <div style="background: var(--bg-secondary); border-radius: 8px; padding: 1rem; text-align: center;">
                                    <img src="https://via.placeholder.com/50" alt="Trello" style="width: 50px; height: 50px; border-radius: 4px; margin-bottom: 0.5rem;">
                                    <div style="font-weight: 600; margin-bottom: 0.25rem;">Trello</div>
                                    <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Project management</div>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fas fa-plus"></i> Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent =`
        /* Settings Page Styles */
        .settings-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        @media (min-width: 992px) {
            .settings-container {
                grid-template-columns: 280px 1fr;
            }
        }
        
        /* Settings Navigation */
        .settings-nav {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1rem;
            border: 1px solid var(--border);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
            height: fit-content;
        }
        
        .settings-nav::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--primary);
        }
        
        .settings-nav-item {
            padding: 0.75rem 1rem;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-secondary);
            transition: all 0.2s ease;
            font-size: 0.875rem;
        }
        
        .settings-nav-item:hover {
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
        }
        
        .settings-nav-item.active {
            background: rgba(59, 130, 246, 0.1);
            color: var(--primary);
            font-weight: 500;
        }
        
        .settings-nav-item i {
            font-size: 1.1rem;
            width: 24px;
            text-align: center;
        }
        
        /* Settings Content */
        .settings-content {
            display: grid;
            gap: 1.5rem;
        }
        
        .settings-card {
            background: var(--card-bg);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--border);
            position: relative;
            overflow: hidden;
        }
        
        .settings-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--primary);
        }
        
        .settings-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
        }
        
        .settings-card-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .settings-card-title i {
            font-size: 1.25rem;
            color: var(--primary);
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
            color: var(--text-primary);
        }
        
        .form-hint {
            font-size: 0.75rem;
            color: var(--text-secondary);
            margin-top: 0.25rem;
        }
        
        .form-control {
            width: 100%;
            padding: 0.625rem 0.875rem;
            border-radius: 8px;
            border: 1px solid var(--border);
            background: var(--card-bg);
            font-size: 0.875rem;
            transition: border-color 0.2s ease;
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Checkbox Styles */
        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
            margin-bottom: 0.25rem;
        }
        
        .checkbox-input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .custom-checkbox {
            position: relative;
            height: 18px;
            width: 18px;
            background-color: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 4px;
            transition: all 0.2s ease;
        }
        
        .checkbox-input:checked ~ .custom-checkbox {
            background-color: var(--primary);
            border-color: var(--primary);
        }
        
        .custom-checkbox:after {
            content: "";
            position: absolute;
            display: none;
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
        
        .checkbox-input:checked ~ .custom-checkbox:after {
            display: block;
        }
        
        .checkbox-description {
            font-size: 0.75rem;
            color: var(--text-secondary);
            margin-left: 1.75rem;
            margin-top: 0.25rem;
        }
        
        /* Profile Section */
        .profile-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }
        
        .profile-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--border);
        }
        
        .profile-info {
            flex: 1;
        }
        
        .profile-name {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.25rem;
        }
        
        .profile-username {
            font-size: 0.875rem;
            color: var(--text-secondary);
        }
        
        .avatar-upload {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        /* Danger Zone */
        .danger-zone {
            border: 1px solid var(--danger);
            border-radius: 8px;
            padding: 1.5rem;
            background: rgba(239, 68, 68, 0.05);
            margin-top: 1.5rem;
        }
        
        .danger-zone-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: var(--danger);
        }
        
        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.625rem 1.25rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s ease;
            border: 1px solid transparent;
            gap: 0.5rem;
        }
        
        .btn-primary {
            background: var(--primary);
            color: white;
        }
        
        .btn-primary:hover {
            background: var(--primary-hover);
        }
        
        .btn-secondary {
            background: var(--card-bg);
            color: var(--text-primary);
            border-color: var(--border);
        }
        
        .btn-secondary:hover {
            background: var(--bg-secondary);
        }
        
        .btn-danger {
            background: var(--danger);
            color: white;
        }
        
        .btn-danger:hover {
            background: #dc2626;
        }
        
        .btn-sm {
            padding: 0.5rem 1rem;
            font-size: 0.8125rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .profile-header {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .avatar-upload {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    `;

    document.head.appendChild(style);


    initSettingsPage();
}
    
       
    // ===== SETTINGS FUNCTIONALITY =====
    
    function initSettingsPage() {
    // Tab Navigation
    document.querySelectorAll('.settings-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // Update navigation
            document.querySelectorAll('.settings-nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update content
            const sectionId = this.getAttribute('data-section');
            document.querySelectorAll('.settings-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(`${sectionId}-section`).classList.add('active');
        });
    });
    
    // Profile Avatar Upload
    document.getElementById('change-avatar-btn').addEventListener('click', function() {
        document.getElementById('avatar-upload').click();
    });
    
    document.getElementById('avatar-upload').addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('profile-avatar').src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    
    document.getElementById('remove-avatar-btn').addEventListener('click', function() {
        document.getElementById('profile-avatar').src = 'https://via.placeholder.com/80';
    });
    
    // Save Profile
    document.getElementById('save-profile-btn').addEventListener('click', function() {
        const profileData = {
            name: document.getElementById('display-name').value,
            username: document.getElementById('username').value,
            bio: document.getElementById('bio').value,
            website: document.getElementById('website').value,
            location: document.getElementById('location').value
        };
        
        // API call to save profile would go here
        showToast('Profile saved successfully', 'success');
    });
    
    // Save Social Links
    document.getElementById('save-social-btn').addEventListener('click', function() {
        const socialData = {
            twitter: document.getElementById('twitter-url').value,
            instagram: document.getElementById('instagram-url').value,
            linkedin: document.getElementById('linkedin-url').value,
            other: document.getElementById('other-url').value
        };
        
        // API call to save social links would go here
        showToast('Social links saved successfully', 'success');
    });
    
    // Save Notification Settings
    document.getElementById('save-notification-settings').addEventListener('click', function() {
        const settings = {
            email: document.getElementById('email-notifications').checked,
            push: document.getElementById('push-notifications').checked,
            weekly: document.getElementById('weekly-reports').checked,
            mentions: document.getElementById('mentions-notifications').checked,
            messages: document.getElementById('direct-messages').checked
        };
        
        // API call to save settings would go here
        showToast('Notification settings saved', 'success');
    });
    
    // Change Password
    document.getElementById('change-password-btn').addEventListener('click', function() {
        const current = document.getElementById('current-password').value;
        const newPass = document.getElementById('new-password').value;
        const confirm = document.getElementById('confirm-password').value;
        
        if (!current || !newPass || !confirm) {
            showToast('Please fill all password fields', 'error');
            return;
        }
        
        if (newPass !== confirm) {
            showToast('New passwords do not match', 'error');
            return;
        }
        
        if (newPass.length < 8) {
            showToast('Password must be at least 8 characters', 'error');
            return;
        }
        
        // API call to change password would go here
        showToast('Password changed successfully', 'success');
        
        // Clear password fields
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
    });
    
    // Export Data
    document.getElementById('export-data-btn').addEventListener('click', function() {
        // API call to export data would go here
        showToast('Data export initiated. You will receive an email shortly.', 'info');
    });
    
    // Delete Account
    document.getElementById('delete-account-btn').addEventListener('click', function() {
        if (confirm('Are you absolutely sure you want to delete your account? This cannot be undone and all your data will be permanently lost.')) {
            // API call to delete account would go here
            showToast('Account deletion requested', 'info');
        }
    });
    
    // Save Billing Info
    document.getElementById('save-billing-btn').addEventListener('click', function() {
        const billingData = {
            address: document.getElementById('billing-address').value,
            city: document.getElementById('billing-city').value,
            zip: document.getElementById('billing-zip').value,
            country: document.getElementById('billing-country').value
        };
        
        // API call to save billing info would go here
        showToast('Billing information saved', 'success');
    });
    
    // Helper function to show toast notifications
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

}