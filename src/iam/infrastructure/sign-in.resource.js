/**
 * Represents a sign-in resource from the API.
 */
export class SignInResource {
    /**
     * Creates a new SignInResource instance.
     * @param {Object} params - The parameters object.
     * @param {string|number} params.id - The user ID.
     * @param {string} params.username - The username.
     * @param {string} params.token - The authentication token.
     */
    constructor({id, username, token}) {
        this.id = id;
        this.username = username;
        this.token = token;
    }
}