import SimpleLayout from "../../Components/SimpleLayout";

const Auth = (): JSX.Element => {
    const openInNewTab = (url: string): void => {
        window.open(url, '_self', 'noopener,noreferrer');
    };

    return (
        <SimpleLayout>
            <button onClick={() => openInNewTab('http://localhost:3001/api/auth/steam')}>Prijavi se na steam</button>
        </SimpleLayout>
    );
}

export default Auth;