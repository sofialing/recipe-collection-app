import { useState } from 'react';
import axios from 'axios';
import Label from 'components/partials/Label';
import InputField from 'components/partials/InputField';
import Alert from 'components/partials/Alert';

const AddRecipeForm = ({ setRecipe }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    const onSubmit = async e => {
        e.preventDefault();

        if (!url.length) {
            return;
        }

        setError(null);
        setLoading(true);

        try {
            const response = await axios(`/api?url=${url}`);
            if (response.status === 200 && response.data) {
                setRecipe((prevState => ({
                    ...prevState,
                    title: response.data.ogTitle ? response.data.ogTitle : '',
                    desc: response.data.ogDescription ? response.data.ogDescription : '',
                    image: response.data.ogImage?.url ? response.data.ogImage.url : null,
                    url: url,
                })))
            } else {
                setError('Failed to retrieve recipe from link, try again.')
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <form onSubmit={onSubmit} className="w-full text-left">
            <div>
                <Label text="Recipe link" htmlFor="url" />
                <InputField type="url" id="url" value={url} handleChange={setUrl} required={true} />
            </div>
            <div className="flex items-center mt-6">
                <button type="submit" disabled={loading} className="inline-block btn">Next</button>
                {error && (<Alert text={error} onClick={setError} />)}
            </div>
        </form>
    )
}

export default AddRecipeForm;
