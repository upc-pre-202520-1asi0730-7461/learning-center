import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const signInEndpointPath = import.meta.env.VITE_SIGNIN_ENDPOINT_PATH;
const signUpEndpointPath = import.meta.env.VITE_SIGNUP_ENDPOINT_PATH;
const usersEndpointPath = import.meta.env.VITE_USERS_ENDPOINT_PATH;

/**
 * API class for IAM (Identity and Access Management) operations.
 * Extends BaseApi to handle sign-in, sign-up, and user retrieval.
 */
export class IamApi extends BaseApi {
    #signInEndpoint;
    #signUpEndpoint;
    #usersEndpoint;

    /**
     * Creates an instance of IamApi with configured endpoints.
     */
    constructor() {
        super();
        this.#signInEndpoint = new BaseEndpoint(this, signInEndpointPath);
        this.#signUpEndpoint = new BaseEndpoint(this, signUpEndpointPath);
        this.#usersEndpoint = new BaseEndpoint(this, usersEndpointPath);
    }

    /**
     * Signs in a user.
     * @param {SignInCommand} signInRequest - The sign-in request data.
     * @returns {Promise} A promise that resolves with the sign-in response.
     */
    signIn(signInRequest) {
        return this.#signInEndpoint.create(signInRequest);
    }

    /**
     * Signs up a new user.
     * @param {SignUpCommand} signUpRequest - The sign-up request data.
     * @returns {Promise} A promise that resolves with the sign-up response.
     */
    signUp(signUpRequest) {
        return this.#signUpEndpoint.create(signUpRequest);
    }

    /**
     * Retrieves all users.
     * @returns {Promise} A promise that resolves with the list of users.
     */
    getUsers() {
        return this.#usersEndpoint.getAll();
    }
}