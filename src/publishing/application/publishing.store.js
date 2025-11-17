import {PublishingApi} from "../infrastructure/publishing-api.js";
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {CategoryAssembler} from "../infrastructure/category.assembler.js";
import {TutorialAssembler} from "../infrastructure/tutorial.assembler.js";

const publishingApi = new PublishingApi();

/**
 * Pinia store for publishing functionality.
 * Manages categories and tutorials data, including CRUD operations.
 */
const usePublishingStore = defineStore('publishing', () => {
    // State
    const categories  = ref([]);
    const tutorials = ref([]);
    const errors = ref([]);
    const categoriesLoaded = ref(false);
    const tutorialsLoaded = ref(false);
    // Properties
    const categoriesCount = computed(() => {
        return categoriesLoaded ? categories.value.length : 0;
    });
    const tutorialsCount = computed(() => {
        return tutorialsLoaded ? tutorials.value.length : 0;
    });
    // Actions
    /**
     * Fetches all categories from the API.
     * @returns {Promise} A promise that resolves when categories are fetched.
     */
    function fetchCategories() {
        return publishingApi.getCategories().then(response => {
            categories.value = CategoryAssembler.toEntitiesFromResponse(response);
            categoriesLoaded.value = true;
            console.log('categoriesLoaded', categoriesLoaded.value);
            console.log(categories.value);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Fetches all tutorials from the API.
     * @returns {Promise} A promise that resolves when tutorials are fetched.
     */
    function fetchTutorials() {
        return publishingApi.getTutorials().then(response => {
            tutorials.value = TutorialAssembler.toEntitiesFromResponse(response);
            tutorialsLoaded.value = true;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Gets a category by its ID.
     * @param {string|number} id - The ID of the category.
     * @returns {Category|null} The category entity or null if not found.
     */
    function getCategoryById(id) {
        let idInt = parseInt(id);
        return categories.value.find(category => category["id"] === idInt);
    }

    /**
     * Adds a new category.
     * @param {Category} category - The category to add.
     */
    function addCategory(category) {
        publishingApi.createCategory(category).then(response => {
            const resource = response.data;
            const newCategory = CategoryAssembler.toEntityFromResource(resource);
            categories.value.push(newCategory);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Updates an existing category.
     * @param {Category} category - The category to update.
     */
    function updateCategory(category) {
        publishingApi.updateCategory(category).then(response => {
            const resource = response.data;
            const updatedCategory = CategoryAssembler.toEntityFromResource(resource);
            const index = categories.value.findIndex(c => c["id"] === updatedCategory.id);
            if (index !== -1) categories.value[index] = updatedCategory;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Deletes a category.
     * @param {Category} category - The category to delete.
     */
    function deleteCategory(category) {
        publishingApi.deleteCategory(category.id).then(response => {
            const index = categories.value.findIndex(c => c["id"] === category.id);
            if (index !== -1) categories.value.splice(index, 1);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Gets a tutorial by its ID.
     * @param {string|number} id - The ID of the tutorial.
     * @returns {Tutorial|null} The tutorial entity or null if not found.
     */
    function getTutorialById(id) {
        let idInt = parseInt(id);
        return tutorials.value.find(tutorial => tutorial["id"] === idInt);
    }

    /**
     * Adds a new tutorial.
     * @param {Tutorial} tutorial - The tutorial to add.
     */
    function addTutorial(tutorial) {
        publishingApi.createTutorial(tutorial).then(response => {
            const resource = response.data;
            const newTutorial = TutorialAssembler.toEntityFromResource(resource);
            tutorials.value.push(newTutorial);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Updates an existing tutorial.
     * @param {Tutorial} tutorial - The tutorial to update.
     */
    function updateTutorial(tutorial) {
        publishingApi.updateTutorial(tutorial).then(response => {
            const resource = response.data;
            const updatedTutorial = TutorialAssembler.toEntityFromResource(resource);
            const index = tutorials.value.findIndex(t => t["id"] === updatedTutorial.id);
            if (index !== -1) tutorials.value[index] = updatedTutorial;
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Deletes a tutorial.
     * @param {Tutorial} tutorial - The tutorial to delete.
     */
    function deleteTutorial(tutorial) {
        publishingApi.deleteTutorial(tutorial.id).then(response => {
            const index = tutorials.value.findIndex(t => t["id"] === tutorial.id);
            if (index !== -1) tutorials.value.splice(index, 1);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    return {
        categories,
        tutorials,
        errors,
        categoriesLoaded,
        tutorialsLoaded,
        categoriesCount,
        tutorialsCount,
        fetchCategories,
        fetchTutorials,
        addCategory,
        getCategoryById,
        updateCategory,
        deleteCategory,
        getTutorialById,
        addTutorial,
        updateTutorial,
        deleteTutorial
    }
});

export default usePublishingStore;