import {IamApi} from "../infrastructure/iam-api.js";
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {SignInAssembler} from "../infrastructure/sign-in.assembler.js";
import {UserAssembler} from "../infrastructure/user.assembler.js";
import {SignUpAssembler} from "../infrastructure/sign-up.assembler.js";

const iamApi = new IamApi();

/**
 * Pinia store for IAM (Identity and Access Management) functionality.
 * Manages user authentication, sign-in, sign-up, and user data.
 */
const useIamStore = defineStore('iam', () => {
    const users = ref([]);
    const errors = ref([]);
    const usersLoaded = ref(false);
    const isSignedIn = ref(false);
    const currentUsername = ref(null);
    const currentUserId = ref(0);
    const currentToken = computed(() => isSignedIn.value
        ? localStorage.getItem('token')
        : null);

    /**
     * Signs in a user with the provided credentials.
     * @param {SignInCommand} signInCommand - The sign-in command containing username and password.
     * @param {Object} router - The Vue router instance for navigation.
     */
    function signIn(signInCommand, router) {
        console.log(signInCommand);
        iamApi.signIn(signInCommand).then((response) => {
            let signInResource = SignInAssembler.toResourceFromResponse(response);
            if (signInResource) {
                let currentUser = UserAssembler.toEntityFromResource(signInResource);
                currentUsername.value = currentUser.username;
                currentUserId.value = currentUser.id;
                localStorage.setItem('token', signInResource.token);
                isSignedIn.value = true;
                console.log(`User ${currentUsername.value} signed in successfully.`);
                errors.value = [];
                router.push({name: 'home'});
            } else {
                isSignedIn.value = false;
                console.log('Sign-in failed: Invalid response.');
                errors.value.push(new Error('Sign-in failed: Invalid response.'));
                router.push({name: 'iam-sign-in'});
            }
        })
            .catch((error) => {
                isSignedIn.value = false;
                currentUsername.value = null;
                console.log(error);
                errors.value.push(error);
                router.push({name: 'iam-sign-in'});
            });
    }

    /**
     * Signs up a new user with the provided credentials.
     * @param {SignUpCommand} signUpCommand - The sign-up command containing username and password.
     * @param {Object} router - The Vue router instance for navigation.
     */
    function signUp(signUpCommand, router) {
        iamApi.signUp(signUpCommand).then((response) => {
            let signUpResource = SignUpAssembler.toResourceFromResponse(response);
            if (signUpResource) {
                console.log(signUpResource.message);
                errors.value = [];
                router.push({name: 'iam-sign-in'});
            } else {
                console.log('Sign-up failed: Invalid response.');
                errors.value.push(new Error('Sign-up failed: Invalid response.'));
                router.push({name: 'iam-sign-up'});
            }
        })
            .catch((error) => {
                console.log(error);
                errors.value.push(error);
                router.push({name: 'iam-sign-up'});
            });
    }

    /**
     * Signs out the current user.
     * @param {Object} router - The Vue router instance for navigation.
     */
    function signOut(router) {
        currentUsername.value = null;
        currentUserId.value = 0;
        localStorage.removeItem('token');
        isSignedIn.value = false;
        console.log('User signed out successfully.');
        errors.value = [];
        router.push({name: 'iam-sign-in'});
    }

    /**
     * Fetches the list of users from the API.
     */
    function fetchUsers() {
        iamApi.getUsers().then((response) => {
            users.value = UserAssembler.toEntitiesFromResponse(response);
            usersLoaded.value = true;
            console.log(`Fetched ${users.value.length} users.`);
            errors.value = [];
        })
            .catch((error) => {
                console.log(error);
                errors.value.push(error);
            });
    }

    return {
        users,
        errors,
        usersLoaded,
        isSignedIn,
        currentUsername,
        currentUserId,
        currentToken,
        signIn,
        signUp,
        signOut,
        fetchUsers
    };
});

export default useIamStore;