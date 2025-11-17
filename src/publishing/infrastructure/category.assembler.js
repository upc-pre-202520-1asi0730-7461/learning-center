import {Category} from "../domain/model/category.entity.js";

/**
 * Assembler class for converting category resources to entities.
 */
export class CategoryAssembler {
    /**
     * Converts a category resource to a Category entity.
     * @param {Object} resource - The category resource data.
     * @returns {Category} The assembled Category entity.
     */
    static toEntityFromResource(resource) {
        return new Category({...resource});
    }

    /**
     * Converts an API response to an array of Category entities.
     * @param {Object} response - The API response object.
     * @param {number} response.status - The HTTP status code.
     * @param {string} response.statusText - The HTTP status text.
     * @param {Object|Array} response.data - The response data containing categories.
     * @returns {Category[]} An array of Category entities.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status} - ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data["categories"];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}