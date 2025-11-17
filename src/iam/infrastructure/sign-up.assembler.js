import {SignUpResource} from "./sign-up.resource.js";

/**
 * Assembler class for converting sign-up responses to resources.
 */
export class SignUpAssembler {
    /**
     * Converts an API response to a SignUpResource.
     * @param {Object} response - The API response object.
     * @param {number} response.status - The HTTP status code.
     * @param {string} response.statusText - The HTTP status text.
     * @param {Object} response.data - The response data.
     * @returns {SignUpResource|null} The assembled SignUpResource or null if invalid.
     */
    static toResourceFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return null;
        }
        return new SignUpResource(response.data);
    }
}