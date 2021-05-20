interface EventInterface {
    id: string; 
    title: false | string;
    postType: 'blog' | 'event' | 'organisation';
    organization: string;
    authorImage: string | false;
    startDate: number | false;
    endDate: number | false;
    location: string | false;
    thumbnail: string | false;
    description: string | false;
}

export type {EventInterface}

class Event  implements EventInterface {
    id: string; 
    title: false | string;
    postType: 'blog' | 'event' | 'organisation';
    organization: string;
    authorImage: string | false;
    startDate: number | false;
    endDate: number | false;
    location: string | false;
    thumbnail: string | false;
    description: string | false;


    constructor(id: string, 
                title: false | string, 
                postType: 'blog' | 'event' | 'organisation', 
                organization: string,
                authorImage: string | false,
                startDate: number | false, 
                endDate: number | false,
                location: string | false, 
                thumbnail: string | false,
                description: string | false) {

        this.id = id;
        // False for organization
        this.title = title;
        // AuthorTitle / organizer / organisation
        this.organization = organization;

        // Blog / event / organisation
        this.postType = postType;

        // Blog / organisation
        this.authorImage = authorImage;

        // Event
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        // Event / organisation
        this.thumbnail = thumbnail;

        // Organization
        this.description = description;

    }
}

export default Event;