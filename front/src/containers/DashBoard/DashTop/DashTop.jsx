import './dashTop.scss';
import { IconApp, IconBell, IconInfo, IconUser } from 'faradays_comp';
import DashTopSearch from './DashTopSearch/DashTopSearch';

const DashTop = () => {

    return (
        <div className='dashTop'>

            <DashTopSearch />

            <section className='dashTopIcons'>
                <IconBell size='30px' color='#ffff' />
                <IconUser size='30px' color='#ffff' />
                <IconInfo size='30px' color='#ffff' />
            </section>
        </div>
    );
};

export default DashTop;