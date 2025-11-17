import {Category} from "./category.entity.js";

/**
 * Represents a tutorial entity.
 */
export class Tutorial {
    /**
     * Creates a new Tutorial instance.
     * @param {Object} params - The parameters object.
     * @param {string|number|null} params.id - The unique identifier for the tutorial.
     * @param {string} params.title - The title of the tutorial.
     * @param {string} params.summary - The summary of the tutorial.
     * @param {string|number|null} params.categoryId - The ID of the associated category.
     * @param {Category|null} params.category - The associated category entity.
     */
    constructor({ id = null, title = '', summary = '', categoryId = null, category = null}) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.categoryId = categoryId;
        this.category = category  instanceof Category ? category : null;
    }
}