import image from 'assets/images/recipe-hero.jpg';
import Form from 'components/forms/UpdateAccountForm';
import { useAuth } from 'contexts/AuthContext';
import { useState } from 'react';
import { uploadProfilePhoto } from 'services/firebase';

function UserAccount() {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);
    const {
        user,
        deleteAccount,
        updateProfile,
        updatePhoto,
        updateEmail,
        updatePassword,
    } = useAuth();

    const onDeleteAccount = async () => {
        // reset state
        setNotification(null);
        setLoading(true);

        try {
            await deleteAccount();
        } catch (error) {
            setNotification(error.message);
            setLoading(false);
        }
    };

    const onUpdateProfile = async ({ displayName, email, password, confirm, photo }) => {
        // reset state
        setNotification(null);

        if (password !== confirm) {
            return setNotification('Passwords do not match. Try again.');
        }

        try {
            setLoading(true);
            if (displayName !== user.displayName) {
                await updateProfile(displayName);
            }
            if (email !== user.email) {
                await updateEmail(email);
            }
            if (password.length) {
                await updatePassword(password);
            }
            if (photo) {
                const photoURL = await uploadProfilePhoto(photo);
                console.log('upload: ', photoURL);
                await updatePhoto(photoURL);
            }
            setNotification('Profile updated.');
        } catch (error) {
            setNotification(error.message);
        }
        setLoading(false);
    };

    return (
        <section className="container mx-auto flex grow flex-col-reverse items-center px-5 py-16 md:py-24 lg:flex-row">
            <Form
                loading={loading}
                notification={notification}
                user={user}
                onDeleteAccount={onDeleteAccount}
                onUpdateProfile={onUpdateProfile}
            />
            <div className="mb-12 lg:mb-0 lg:w-1/2">
                <img
                    className="w-full object-cover"
                    width="640"
                    height="427"
                    alt=""
                    src={image}
                />
            </div>
        </section>
    );
}

export default UserAccount;
