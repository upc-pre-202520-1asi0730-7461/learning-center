/**
 * Represents a category entity.
 */
export class Category {
    /**
     * Creates a new Category instance.
     * @param {Object} params - The parameters object.
     * @param {string|number|null} params.id - The unique identifier for the category.
     * @param {string} params.name - The name of the category.
     */
    constructor({ id = null, name = ''}) {
        this.id = id;
        this.name = name;
    }
}