/**
 * Represents a sign-up resource from the API.
 */
export class SignUpResource {
    /**
     * Creates a new SignUpResource instance.
     * @param {Object} params - The parameters object.
     * @param {string} params.message - The response message.
     */
    constructor({ message }) {
        this.message = message;
    }
}