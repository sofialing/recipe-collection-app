import { useState } from 'react'
import { useAuth } from 'contexts/AuthContext';
import image from 'assets/images/login-hero.jpg';
import Form from 'components/forms/ResetPasswordForm';

const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);
    const { resetPassword } = useAuth();

    const onResetPassword = async (email) => {
        setNotification(null);
        setLoading(true);

        try {
            await resetPassword(email);
            setNotification(`New password sent to ${email}.`);
            setLoading(false);
        } catch (error) {
            setNotification(error.message);
            setLoading(false);
        }
    }

    return (
        <section className="container mx-auto flex-grow flex flex-col-reverse lg:flex-row items-center px-5 py-16 md:py-24">
            <Form onResetPassword={onResetPassword} loading={loading} notification={notification} setNotification={setNotification} />
            <div className="mb-12 lg:mb-0 lg:w-1/2">
                <img width="640" height="427" alt="" src={image} />
            </div>
        </section>
    )
}

export default ResetPassword;
