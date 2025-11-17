import {Tutorial} from "../domain/model/tutorial.entity.js";

/**
 * Assembler class for converting tutorial resources to entities.
 */
export class TutorialAssembler {
    /**
     * Converts a tutorial resource to a Tutorial entity.
     * @param {Object} resource - The tutorial resource data.
     * @returns {Tutorial} The assembled Tutorial entity.
     */
    static toEntityFromResource(resource) {
        return new Tutorial({...resource});
    }

    /**
     * Converts an API response to an array of Tutorial entities.
     * @param {Object} response - The API response object.
     * @param {number} response.status - The HTTP status code.
     * @param {string} response.statusText - The HTTP status text.
     * @param {Object|Array} response.data - The response data containing tutorials.
     * @returns {Tutorial[]} An array of Tutorial entities.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status} - ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data["tutorials"];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}