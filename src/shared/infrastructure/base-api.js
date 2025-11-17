import axios from 'axios';
import {iamInterceptor} from "../../iam/infrastructure/iam.interceptor.js";

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

/**
 * Base API class providing common HTTP client setup.
 */
export class BaseApi {
    #http;
    /**
     * Creates an instance of BaseApi with configured axios client.
     */
    constructor() {
        this.#http = axios.create({
            baseURL: platformApi,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        // Add Interceptor for requests
        this.#http.interceptors.request.use(iamInterceptor);
    }

    /**
     * Gets the configured HTTP client.
     * @returns {Object} The axios HTTP client instance.
     */
    get http() {
        return this.#http;
    }
}