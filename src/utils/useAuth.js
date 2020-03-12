import { useState, useEffect } from 'react';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

export const useAuth = () => {
    const [state, setState] = useState({ user: null, initializing: true });
    const onChange = async user => {
        const userRef = await createUserProfileDocument(user);
        if(user) {
            userRef.onSnapshot(snapshot => {
                setState({ user: { id: snapshot.id, ...snapshot.data() } })
            });
        }
        setState({ initializing: false, user: null });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(onChange);
        return () => unsubscribe()
    }, []);

    return state
};
