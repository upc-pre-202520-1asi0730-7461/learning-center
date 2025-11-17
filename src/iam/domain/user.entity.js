/**
 * Represents a user entity.
 */
export class User {
    /**
     * Creates a new User instance.
     * @param {Object} params - The parameters object.
     * @param {string|number} params.id - The unique identifier for the user.
     * @param {string} params.username - The username of the user.
     */
    constructor({ id, username}) {
        this.id = id;
        this.username = username;
    }
}