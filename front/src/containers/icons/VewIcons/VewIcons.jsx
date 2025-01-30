import './vewicons.scss';
import { useEffect, useState } from 'react';
import { images } from '../../../utils/images.js';
import VewIconDoc from '../VewIconDoc/VewIconDoc.jsx';
import VewTableIcons from '../VewIconTable/VewIconsTable.jsx';
import { getIconsApi } from '../../../helpers/icons/getIcons.api.js';
import SearchIcons from '../../../components/icons/SearchIcons/SearchIcons';
import TypingText from '../../../components/utils/TypingText/Typingtext.jsx';

const Vewicons = () => {

    const [icons, setIcons] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getIconsApi();
            if (response.status === 'success') {
                let newIcons = response.result;
                if (data?.name) {
                    newIcons = response.result.filter(icon => icon.name === data.name);
                    window.scrollBy({ top: 500, behavior: 'smooth' });
                };
                setIcons(newIcons);
            } else console.error(response.error);
        }; fetchData();
    }, [data]);
    
    return (
        <div className='vewicons'>

            <section className='vewiconsHeader'>
                <div className='vewiconsDiv'>
                    <h2>Iconos</h2>
                    <SearchIcons options={icons} setData={setData} />
                    <p className='pgray'>Los desarrolladores pueden acceder a una amplia colección de iconos simplemente importando <span>faradys_comp</span>. Encuentra el que más te guste y úsalo en tu proyecto en segundos. </p>
                    <a href="" className='vewiconspDoc'>Documentación</a>
                </div>
                <img src={images.reedCat} alt="reead" />
            </section>

            <TypingText text={'Coon faradys_comps, los desarrolladores tienen acceso instantáneo a una amplia colección de iconos listos para usar. Solo importa el paquete, busca el icono que mejor se adapte a tu diseño y agrégalo a tu proyecto sin complicaciones. Fácil, rápido y eficiente.'} />

            {icons && <VewTableIcons icons={icons} />}

            <VewIconDoc />
        </div>
    );
};

export default Vewicons;