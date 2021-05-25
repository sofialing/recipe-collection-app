import { useState } from 'react';
import image from 'assets/images/recipe-hero.jpg';
import Form from 'components/forms/UpdateAccountForm';
import { useAuth } from 'contexts/AuthContext';

const Account = () => {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);
    const { user, deleteAccount, updateProfile, updateEmail, updatePassword } = useAuth();

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
    }

    const onUpdateProfile = async ({ displayName, email, password, confirm }) => {
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
                await updateEmail(email)
            }
            if (password.length) {
                await updatePassword(password);
            }
            setNotification('Profile updated.');
        } catch (error) {
            setNotification(error.message);
        }
        setLoading(false);
    }


    return (
        <section className="container px-5 py-24 mx-auto flex flex-grow flex-wrap items-center">
            <Form loading={loading} notification={notification} user={user} onDeleteAccount={onDeleteAccount} onUpdateProfile={onUpdateProfile} />
            <div className="md:w-1/2 w-5/6">
                <img className="object-cover object-center" alt="hero" src={image} />
            </div>
        </section>
    )
}

export default Account
