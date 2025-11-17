import {SignInResource} from "./sign-in.resource.js";

/**
 * Assembler class for converting sign-in responses to resources.
 */
export class SignInAssembler {
    /**
     * Converts an API response to a SignInResource.
     * @param {Object} response - The API response object.
     * @param {number} response.status - The HTTP status code.
     * @param {string} response.statusText - The HTTP status text.
     * @param {Object} response.data - The response data.
     * @returns {SignInResource|null} The assembled SignInResource or null if invalid.
     */
    static toResourceFromResponse(response) {
        console.log(response);
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return null;
        }
        return new SignInResource({...response.data});
    }
}