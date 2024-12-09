import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Assuming you use AuthContext
import { ProgressBar, Spinner, Alert } from "react-bootstrap";
import userImage from "../../assests/2002.jpg"; // Default avatar image
import './Profile.css';

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [newAvatar, setNewAvatar] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    username: user?.username || "",
    email: user?.email || "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  // Update Avatar Image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAvatar(URL.createObjectURL(file)); // Create temporary link for the file
    }
  };

  // Save Profile Changes
  const handleSaveProfile = async () => {
    setLoading(true); // Start loading
    try {
      await updateUserProfile({ ...updatedUserInfo, avatar: newAvatar || user.avatar });
      setNotification("Profile updated successfully!");
      setEditMode(false); // Exit edit mode
    } catch (error) {
      setNotification("Failed to update profile. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Calculate Profile Completion
  const calculateProfileCompletion = () => {
    let completion = 0;
    if (user.username) completion += 33;
    if (user.email) completion += 33;
    if (user.avatar) completion += 34;
    return completion;
  };

  // Handle Input Change for Editing Profile
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Password Change
  const handleChangePassword = () => {
    // Navigate to the password change page or show a form to change password
    console.log("Change Password clicked");
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      {user ? (
        <>
          <div className="profile-details">
            {/* User Avatar */}
            <div>
              <img
                src={newAvatar || user.avatar || userImage}
                alt="User Avatar"
                className="userAvatar"
              />
              <div className="avatar-change">
                <input
                  type="file"
                  id="avatar-input"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <label htmlFor="avatar-input">Choose New Avatar</label>
              </div>
            </div>

            {/* Profile Edit Mode */}
            {editMode ? (
              <div className="edit-profile">
                <label>
                  Username:
                  <input
                    type="text"
                    name="username"
                    value={updatedUserInfo.username}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={updatedUserInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button onClick={handleSaveProfile} disabled={loading}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Save Changes"}
                </button>
              </div>
            ) : (
              <>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button onClick={() => setEditMode(true)}>Edit Profile</button>
              </>
            )}
          </div>

          {/* Profile Progress Bar */}
          <div className="profile-progress">
            <h3>Profile Completion</h3>
            <ProgressBar now={calculateProfileCompletion()} label={`${calculateProfileCompletion()}%`} />
          </div>

          {/* Change Password Option */}
          <div className="password-change">
            <button onClick={handleChangePassword}>Change Password</button>
          </div>

          {/* Notification Area */}
          {notification && (
            <Alert variant={notification.includes("success") ? "success" : "danger"}>
              {notification}
            </Alert>
          )}
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
