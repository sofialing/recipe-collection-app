import axios from 'axios';
import Alert from 'components/partials/Alert';
import InputField from 'components/partials/InputField';
import Label from 'components/partials/Label';
import { useState } from 'react';

function AddRecipeForm({ setRecipe }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!url.length) {
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const response = await axios(`/api?url=${url}`);
            if (response.status === 200 && response.data) {
                setRecipe((prevState) => ({
                    ...prevState,
                    title: response.data.ogTitle ? response.data.ogTitle : '',
                    desc: response.data.ogDescription ? response.data.ogDescription : '',
                    image: response.data.ogImage?.url ? response.data.ogImage.url : null,
                    url,
                }));
            } else {
                setError('Failed to retrieve recipe from link, try again.');
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={onSubmit} className="w-full text-left">
            <div>
                <Label
                    text="Enter the URL of the recipe you want to import"
                    htmlFor="url"
                />
                <InputField
                    type="url"
                    id="url"
                    value={url}
                    handleChange={setUrl}
                    required
                    placeholder="http://"
                />
            </div>
            <div className="mt-6 flex items-center">
                <button type="submit" disabled={loading} className="btn inline-block">
                    Import
                </button>
                {error && <Alert text={error} onClick={setError} />}
            </div>
        </form>
    );
}

export default AddRecipeForm;
