import './dashBoard.scss';
import { useState } from 'react';
import MenuDas from './MenuDas/MenuDas';
import DashTop from './DashTop/DashTop';

const DashBoard = () => {

    const [vew, setVew] = useState(null);
    const handleVew = (e) => setVew(vew === e ? null : e);

    return (
        <div className='dashBoard'>

            <MenuDas handleVew={handleVew} vew={vew} />

            <section className='dashBoardSect'>
                <DashTop />
                {vew === 'myProfil' && <p>Mi perfil</p>}
            </section>

        </div>
    );
};

export default DashBoard;