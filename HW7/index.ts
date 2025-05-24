/**
 * Instructions:
 * For each question below, write the corresponding TypeScript type definition.
 *
 * The examples given for each question cover the full range of possible values
 * for the type.
 */

//---------------------------------------------------------------------------------
/**
 * Question 1: Basic Artifact ID
 * Define a type for a simple identifier for a digital artifact.
 */
type ArtifactId = number;

// EXAMPLES
const artifactId1: ArtifactId = 10103;
const artifactId2: ArtifactId = 20334;

//---------------------------------------------------------------------------------
/**
 * Question 2: Artifact Title
 * Define a type for the title of an artifact.
 */
type ArtifactTitle = string;

// EXAMPLES
const artifactTitle1: ArtifactTitle = 'The Ravenna Cosmography';
const artifactTitle2: ArtifactTitle = 'Codex Sinaiticus';

//---------------------------------------------------------------------------------
/**
 * Question 3: Publication Status
 * Define a type that can represent whether an artifact is published, unpublished, or draft.
 */
type PublicationStatus = 'published' | 'unpublished' | 'draft';

// EXAMPLES
const publicationStatus1: PublicationStatus = 'published';
const publicationStatus2: PublicationStatus = 'unpublished';
const publicationStatus3: PublicationStatus = 'draft';

//---------------------------------------------------------------------------------
/**
 * Question 4: Century Representation
 * Define a type for representing the century an artifact belongs to.
 * Example: 11, "Late 19th Century", "c. 500 BCE"
 */
type ArtifactCentury = number | string;

// EXAMPLES
const artifactCentury1: ArtifactCentury = 11;
const artifactCentury2: ArtifactCentury = 'Late 19th Century';
const artifactCentury3: ArtifactCentury = 'c. 500 BCE';
// `${string}-${string}`
// ---------------------------------------------------------------------------------
/**
 * Question 5: List of Keywords
 * Define a type for a list of keywords associated with an artifact.
 */
type KeywordsList = string[];

// EXAMPLES
const keywordsList1: KeywordsList = ['manuscript', 'medieval', 'illumination'];
const keywordsList2: KeywordsList = ['asia', 'archaeology', 'coin'];

// ---------------------------------------------------------------------------------
/**
 * Question 6: Contributor Information
 * Define an interface or type alias named `Contributor` for an individual who contributed to an artifact. It contains the name, and possibly a role.
 */
type Contributor = {
	name: string;
	role?: string;
};

// EXAMPLES
const contributor1: Contributor = { name: 'Geoffrey Chaucer', role: 'author' };
const contributor2: Contributor = { name: 'Unknown Scribe' };

// ---------------------------------------------------------------------------------
/**
 * Question 7: Geographical Coordinates
 * Define a type alias named `GeoCoordinates` for representing a geographical location
 * in the form of a latitude and longitude.
 */
type GeoCoordinates = {
	latitude: number;
	longitude: number;
};

// EXAMPLES
const geoCoordinates1: GeoCoordinates = { latitude: 41.8781, longitude: -87.6298 };
const geoCoordinates2: GeoCoordinates = { latitude: 21.4225, longitude: 39.8262 };

// ---------------------------------------------------------------------------------
/**
 * Question 8: Collection Metadata
 * Define an interface or type alias named `CollectionMetadata`, which contains
 * information about a collection of artifacts.
 */
type CollectionMetadata = {
	collectionName: string;
	accessionNumber: string;
	isDigitized: boolean;
	curators: Contributor[]; // Using the Contributor type from Question 6
};

// EXAMPLES
const collectionMetadata1: CollectionMetadata = {
	collectionName: 'British Library',
	accessionNumber: 'Cotton MS Nero A X',
	isDigitized: true,
	curators: [{ name: 'Dr. Ellie Smith', role: 'Lead Curator' }]
};
const collectionMetadata2: CollectionMetadata = {
	collectionName: 'University of Chicago',
	accessionNumber: 'MS 1001',
	isDigitized: false,
	curators: [{ name: 'Dr. John Doe', role: 'Curator' }]
};

// ---------------------------------------------------------------------------------
/**
 * Question 9: Digital Edition Features
 * Define a type alias named `DigitalEdition` for a digital representation of a text.
 */
/**
 * Learn about "Date()" vs. "new Date()" methods from: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 * Calling the Date() function (without the new keyword): 
 * returns a string representation of the current date and time. 
 * Any arguments given in a Date() function call (without the new keyword) are ignored;
 * it always returns a string representation of the current date and time.
 */


type DigitalEdition = {
	baseTextId: number;
	editor: Contributor; // Using the Contributor type from Question 6
	hasTEIEncoding: boolean;
	availableFormats: string[];
	lastUpdated: Date;
};

// EXAMPLES
const digitalEdition: DigitalEdition = {
	baseTextId: 501,
	editor: { name: 'Ada Lovelace', role: 'Digital Editor' },
	hasTEIEncoding: true,
	availableFormats: ['XML', 'HTML'],
	lastUpdated: new Date('1837-01-01')
};
const digitalEdition2: DigitalEdition = {
	baseTextId: 1001,
	editor: { name: 'Prof. Charles Dickens', role: 'Digital Editor' },
	hasTEIEncoding: false,
	availableFormats: ['PDF', 'EPUB'],
	lastUpdated: new Date('1862-02-07')
};

// ---------------------------------------------------------------------------------
/**
 * Question 10: Complex Artifact Record
 * Define an interface or type alias named `ComplexArtifactRecord`.
 * This should be a comprehensive record that combines several of the types you've defined.
 */
type ComplexArtifactRecord = {
	id: number;
	title: string;
	status: PublicationStatus; // Using the PublicationStatus type from Question 3
	century: ArtifactCentury; // Using the ArtifactCentury type from Question 4
	description: string;
	authorsContributors: Contributor[]; // Using the Contributor type from Question 6
	keywords: KeywordsList; // Using the KeywordsList type from Question 5
	physicalLocation: GeoCoordinates; // Using the GeoCoordinates type from Question 7
	repositoryInfo: CollectionMetadata; // Using the CollectionMetadata type from Question 8
	digitalSurrogates: DigitalEdition[]; // Using the DigitalEdition type from Question 9
};

// EXAMPLES
const complexArtifactRecord1: ComplexArtifactRecord = {
	id: 10103,
	title: 'The Ravenna Cosmography',
	status: 'published',
	century: 11,
	description: 'A detailed map of the world in the 11th century',
	authorsContributors: [{ name: 'Geoffrey Chaucer', role: 'author' }],
	keywords: ['manuscript', 'medieval', 'illumination'],
	physicalLocation: { latitude: 41.8781, longitude: -87.6298 },
	repositoryInfo: {
		collectionName: 'British Library',
		accessionNumber: 'Cotton MS Nero A X',
		isDigitized: true,
		curators: [{ name: 'Dr. Ellie Smith', role: 'Lead Curator' }]
	},
	digitalSurrogates: [
		{
			baseTextId: 501,
			editor: { name: 'Ada Lovelace', role: 'Digital Editor' },
			hasTEIEncoding: true,
			availableFormats: ['XML', 'HTML'],
			lastUpdated: new Date('1837-01-01')
		}
	]
};
const complexArtifactRecord2: ComplexArtifactRecord = {
	id: 32591,
	title: 'A Tale of Two Cities',
	status: 'unpublished',
	century: '19th Century',
	description: 'A novel about the French Revolution',
	authorsContributors: [{ name: 'Charles Dickens', role: 'author' }],
	keywords: ['novel', 'revolution', 'France'],
	physicalLocation: { latitude: 40.7128, longitude: -74.006 },
	repositoryInfo: {
		collectionName: 'New York Public Library',
		accessionNumber: 'MS 32591',
		isDigitized: false,
		curators: [{ name: 'Dr. Jane Smith', role: 'Curator' }]
	},
	digitalSurrogates: [
		{
			baseTextId: 1001,
			editor: { name: 'Prof. Charles Dickens', role: 'Digital Editor' },
			hasTEIEncoding: false,
			availableFormats: ['PDF', 'EPUB'],
			lastUpdated: new Date('1862-02-07')
		}
	]
};
