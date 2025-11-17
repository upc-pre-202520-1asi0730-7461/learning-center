/**
 * Represents a sign-up command.
 */
export class SignUpCommand {
    /**
     * Creates a new SignUpCommand instance.
     * @param {Object} params - The parameters object.
     * @param {string} params.username - The username for sign-up.
     * @param {string} params.password - The password for sign-up.
     */
    constructor({username, password}) {
        this.username = username;
        this.password = password;
    }
}