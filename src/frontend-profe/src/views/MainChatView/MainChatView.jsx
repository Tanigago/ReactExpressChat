import { useContext } from 'react';
import { Context } from '../../storage/SharedStorage';

import SignUp from '../../components/SignUp/SignUp';
import Chat from '../Chat/Chat';

function MainChatView () {

    const [ store ] = useContext(Context);

    return (
        <>
            { store.id === 0 && <SignUp/> }
            { store.id !== 0 && <Chat/> }
        </>
    )
}

export default MainChatView