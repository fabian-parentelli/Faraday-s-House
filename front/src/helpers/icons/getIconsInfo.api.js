const url = import.meta.env.VITE_API_URL;

const getIconsInfoApi = async () => {

    const response = await fetch(`${url}/api/icons/info`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { getIconsInfoApi };