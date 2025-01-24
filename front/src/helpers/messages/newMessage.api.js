const url = import.meta.env.VITE_API_URL;

const newMessageApi = async (message) => {
    
    const response = await fetch(`${url}/api/messages`, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newMessageApi };