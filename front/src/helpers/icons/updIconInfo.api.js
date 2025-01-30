const url = import.meta.env.VITE_API_URL;

const updIconInfoApi = async (info) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/icons`, {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();

    if (content.error) return content;
    if (content.data) return content.data;
};

export { updIconInfoApi };