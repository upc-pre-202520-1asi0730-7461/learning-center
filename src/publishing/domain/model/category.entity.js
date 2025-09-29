/**
 * Category Entity
 * @class
 */
export class Category {
    /**
     * Creates an instance of Category.
     * @param id - Category ID
     * @param name - Category Name
     */
    constructor({ id = null, name = ''}) {
        this.id = id;
        this.name = name;
    }
}