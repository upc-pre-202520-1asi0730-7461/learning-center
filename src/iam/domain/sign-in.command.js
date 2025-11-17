/**
 * Represents a sign-in command.
 */
export class SignInCommand {
    /**
     * Creates a new SignInCommand instance.
     * @param {Object} params - The parameters object.
     * @param {string} params.username - The username for sign-in.
     * @param {string} params.password - The password for sign-in.
     */
    constructor({ username, password}) {
        this.username = username;
        this.password = password;
    }
}