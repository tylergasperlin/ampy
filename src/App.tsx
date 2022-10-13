import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

import '@aws-amplify/ui-react/styles.css';

interface IApp {
    signOut?: any;
    user?: any;
}

Amplify.configure(awsconfig);


function App() {
    return (
        <Authenticator>
            {({ signOut, user }: IApp) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}

export default App;
