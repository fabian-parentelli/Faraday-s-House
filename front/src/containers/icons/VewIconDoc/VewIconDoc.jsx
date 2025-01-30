import './vewIconDoc.scss';
import { useEffect, useState } from 'react';
import { IconCopy, Snackbar } from 'faradays_comp';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getIconsInfoApi } from '../../../helpers/icons/getIconsInfo.api.js';

const VewIconDoc = () => {

    const [info, setInfo] = useState(null);
    const [snack, setSnack] = useState({ open: true, message: '', status: '' });

    useEffect(() => {
        const fetchData = async () => {
            const response = await getIconsInfoApi();
            if (response.status === 'success') setInfo(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    const handleCopy = () => {
        if (snack.open) setSnack({ open: false, message: '', status: '' });
        const icon = `npm install faradays_comp`;
        navigator.clipboard.writeText(icon)
            .then(() => {
                setSnack({ open: true, message: 'Comando copiado correctamente', status: 'success' });
            })
            .catch((error) => {
                setSnack({ open: true, message: 'Error al copiar el comando', status: 'error' });
            });
    };    

    return (
        <div className='vewIconDoc'>
            <h3>Documentación</h3>
            {info && <p>Versión {info.version}</p>}

            {info &&
                <>
                    <section className='vewIconDocSect'>

                        <div className='vewIconDocSectDiv'>
                            <div className='vewIconDocConsole'>
                                <SyntaxHighlighter language="typescript" style={a11yDark}>
                                    {info.imports}
                                </SyntaxHighlighter>
                                <IconCopy size='25px' color='white' onClick={handleCopy} />
                            </div>

                            <SyntaxHighlighter language="javascript" style={a11yDark} wrapLongLines>
                                {info.message}
                            </SyntaxHighlighter>
                        </div>

                        <div className='vewIconDocPre'>
                            <textarea spellCheck="false">
                                {info.props}
                            </textarea>
                        </div>

                    </section>
                    {info && <a href={info.github} target="_blank">Github</a>}
                </>
            }
            <Snackbar snack={snack} />
        </div>
    );
};

export default VewIconDoc;