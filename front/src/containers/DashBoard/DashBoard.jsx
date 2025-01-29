import './dashBoard.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuDas from './MenuDas/MenuDas';
import DashTop from './DashTop/DashTop';
import DashIcon from './DashIcon/DashIcon';

const DashBoard = () => {

    const { param } = useParams();

    const [vew, setVew] = useState(param || null);
    const handleVew = (e) => setVew(vew === e ? null : e);

    return (
        <div className='dashBoard'>

            <MenuDas handleVew={handleVew} vew={vew} />

            <section className='dashBoardSect'>
                <DashTop />
                {vew === 'myProfil' && <p>Mi perfil</p>}
                {vew === 'icons' && <DashIcon />}
            </section>

        </div>
    );
};

export default DashBoard;