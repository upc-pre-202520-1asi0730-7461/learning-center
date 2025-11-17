import useIamStore from "../application/iam.store.js";

/**
 * Interceptor function to add authorization header to requests if user is signed in.
 * @param {Object} config - The axios request configuration.
 * @returns {Object} The modified config with authorization header if applicable.
 */
export const iamInterceptor = (config) => {
    const store = useIamStore();
    const { isSignedIn, currentToken} = store;
    if (isSignedIn) {
        config.headers.Authorization = `Bearer ${currentToken}`;
        console.log(config);
    }
    return config;
}
