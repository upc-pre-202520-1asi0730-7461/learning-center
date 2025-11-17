/**
 * BaseEndpoint class to handle common API endpoint operations.
 * This class provides methods for CRUD operations.
 * It can be extended by specific endpoint classes.
 */
export class BaseEndpoint {
    /**
     * Creates an instance of BaseEndpoint.
     * @param {BaseApi} baseApi - The base API instance containing the HTTP client.
     * @param {string} endpointPath - The specific path for the API endpoint.
     */
    constructor(baseApi, endpointPath) {
        this.http = baseApi.http;
        this.endpointPath = endpointPath;
    }

    /**
     * Retrieves all resources from the endpoint.
     * @returns {Promise} A promise that resolves with the list of resources.
     */
    getAll() {
        return this.http.get(this.endpointPath);
    }

    /**
     * Retrieves a resource by its ID.
     * @param {string|number} id - The ID of the resource.
     * @returns {Promise} A promise that resolves with the resource data.
     */
    getById(id) {
        return this.http.get(`${this.endpointPath}/${id}`);
    }

    /**
     * Creates a new resource.
     * @param {Object} resource - The resource data to create.
     * @returns {Promise} A promise that resolves with the created resource response.
     */
    create(resource) {
        return this.http.post(this.endpointPath, resource);
    }

    /**
     * Updates an existing resource.
     * @param {string|number} id - The ID of the resource to update.
     * @param {Object} resource - The updated resource data.
     * @returns {Promise} A promise that resolves with the updated resource response.
     */
    update(id, resource) {
        return this.http.put(`${this.endpointPath}/${id}`, resource);
    }

    /**
     * Deletes a resource by its ID.
     * @param {string|number} id - The ID of the resource to delete.
     * @returns {Promise} A promise that resolves when the resource is deleted.
     */
    delete(id) {
        return this.http.delete(`${this.endpointPath}/${id}`);
    }
}