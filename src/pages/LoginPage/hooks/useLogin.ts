import {useState} from "react";

interface LoginResult {
    login: (username: string, password: string) => Promise<void>;
    isLoading: boolean;
    isLoggedIn: boolean;
    error: string | null;
}

const useLogin = (): LoginResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (username: string, password: string) => {
        try {
            setIsLoading(true);
            // const response = await fetch('https://api.example.com/login', {
            //     method: 'POST',
            //     body: JSON.stringify({ username, password }),
            // });
            // const data = await response.json();
            // if (response.ok) {
            //     setIsLoggedIn(true);
            // } else {
            //     setError(data.message);
            // }
            //pause for one second
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(username, password);
            setIsLoggedIn(true);
        } catch (error: unknown) {
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : 'An unexpected error occurred.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, isLoggedIn, error };
}

export default useLogin;