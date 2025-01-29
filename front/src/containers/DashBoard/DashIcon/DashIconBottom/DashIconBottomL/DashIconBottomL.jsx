import './dashIconBottomL.scss';
import { Spinner } from 'faradays_comp'
import * as Icons from 'faradays_comp';
import { useEffect, useState } from 'react';
import { getIconsApi } from '../../../../../helpers/icons/getIcons.api';

const DashIconBottomL = ({ counter }) => {

    const [icons, setIcons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getIconsApi();
            if (response.status === 'success') setIcons(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, [counter]);

    return (
        <div className='dashIconBottomL'>
            <h4>Ver Iconos</h4>
            <div className='dashIconBottomLDiv'>{loading && <Spinner />}</div>
            <section>
                {icons.map((icon) => {
                    const IconComponent = Icons[icon.name];
                    return (
                        <div key={icon.name} className='dashIconBottomLIcons'>
                            {IconComponent ? <IconComponent size={'20px'} color='#ffff' /> : <span>{icon.name}</span>}
                            <p>{icon.name}</p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default DashIconBottomL;