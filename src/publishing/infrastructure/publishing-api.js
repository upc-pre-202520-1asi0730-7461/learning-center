import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath    = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
const tutorialsEndpointPath     = import.meta.env.VITE_TUTORIALS_ENDPOINT_PATH;

/**
 * Publishing API class to interact with categories and tutorials endpoints.
 * @extends BaseApi
 */
export class PublishingApi extends BaseApi {
    #categoriesEndpoint;
    #tutorialsEndpoint;

    /**
     * Creates an instance of PublishingApi with configured endpoints.
     */
    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
        this.#tutorialsEndpoint  = new BaseEndpoint(this, tutorialsEndpointPath);
    }

    /**
     * Retrieves all categories.
     * @returns {Promise} A promise that resolves with the list of categories.
     */
    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    /**
     * Retrieves a category by its ID.
     * @param {string|number} id - The ID of the category.
     * @returns {Promise} A promise that resolves with the category data.
     */
    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    /**
     * Creates a new category.
     * @param {Category} resource - The category data to create.
     * @returns {Promise} A promise that resolves with the created category response.
     */
    createCategory(resource) {
        return this.#categoriesEndpoint.create(resource);
    }

    /**
     * Updates an existing category.
     * @param {Category} resource - The category data to update.
     * @returns {Promise} A promise that resolves with the updated category response.
     */
    updateCategory(resource) {
        return this.#categoriesEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a category by its ID.
     * @param {string|number} id - The ID of the category to delete.
     * @returns {Promise} A promise that resolves when the category is deleted.
     */
    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }

    /**
     * Retrieves all tutorials.
     * @returns {Promise} A promise that resolves with the list of tutorials.
     */
    getTutorials() {
        return this.#tutorialsEndpoint.getAll();
    }

    /**
     * Retrieves a tutorial by its ID.
     * @param {string|number} id - The ID of the tutorial.
     * @returns {Promise} A promise that resolves with the tutorial data.
     */
    getTutorialById(id) {
        return this.#tutorialsEndpoint.getById(id);
    }

    /**
     * Creates a new tutorial.
     * @param {Tutorial} resource - The tutorial data to create.
     * @returns {Promise} A promise that resolves with the created tutorial response.
     */
    createTutorial(resource) {
        return this.#tutorialsEndpoint.create(resource);
    }

    /**
     * Updates an existing tutorial.
     * @param {Tutorial} resource - The tutorial data to update.
     * @returns {Promise} A promise that resolves with the updated tutorial response.
     */
    updateTutorial(resource) {
        return this.#tutorialsEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a tutorial by its ID.
     * @param {string|number} id - The ID of the tutorial to delete.
     * @returns {Promise} A promise that resolves when the tutorial is deleted.
     */
    deleteTutorial(id) {
        return this.#tutorialsEndpoint.delete(id);
    }
}