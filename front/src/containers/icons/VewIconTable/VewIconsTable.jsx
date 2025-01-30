import { useState } from 'react';
import './vewTableIcons.scss';
import * as Icons from 'faradays_comp';

const VewTableIcons = ({ icons }) => {

    const [snack, setSnack] = useState({ open: false, message: '', status: '' });

    const handleClick = (item) => {
        if(snack.open) setSnack({ open: false, message: '', status: '' });
        const icon = `import { ${item} } from 'faradays_comp';`;
        navigator.clipboard.writeText(icon)
            .then(() => {
                setSnack({ open: true, message: 'Icono copiado correctamente', status: 'success' });
            })
            .catch((error) => {
                setSnack({ open: true, message: 'Error al copiar el Icono', status: 'error' });
            });
    };

    return (
        <div className='vewTableIcons' id='vewTableIcons'>
            {icons.map((icon) => {
                const IconComponent = Icons[icon.name];
                return (
                    <div key={icon.name} className='vewTableIconsDiv' onClick={() => handleClick(icon.name)}>
                        {IconComponent ? <IconComponent size={'40px'} color='black' /> : <span>{icon.name}</span>}
                    </div>
                );
            })}
            <Icons.Snackbar snack={snack} />
        </div>
    );
};

export default VewTableIcons;