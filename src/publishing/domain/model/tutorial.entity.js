import {Category} from "./category.entity.js";

/**
 * Tutorial Entity
 * @class
 */
export class Tutorial {
    /**
     * Constructor
     * @param id - Tutorial ID
     * @param title - Tutorial Title
     * @param summary - Tutorial Summary
     * @param categoryId - Category ID
     * @param category - Category Entity
     */
    constructor({ id = null, title = '', summary = '', categoryId = null, category = null}) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.categoryId = categoryId;
        this.category = category  instanceof Category ? category : null;
    }
}