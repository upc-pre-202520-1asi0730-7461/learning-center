import {User} from "../domain/user.entity.js";

/**
 * Assembler class for converting user resources to entities.
 */
export class UserAssembler {
    /**
     * Converts a user resource to a User entity.
     * @param {Object} resource - The user resource data.
     * @returns {User} The assembled User entity.
     */
    static toEntityFromResource(resource) {
        return new User({...resource});
    }

    /**
     * Converts an API response to an array of User entities.
     * @param {Object} response - The API response object.
     * @param {number} response.status - The HTTP status code.
     * @param {string} response.statusText - The HTTP status text.
     * @param {Object|Array} response.data - The response data containing users.
     * @returns {User[]} An array of User entities.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data["users"];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}