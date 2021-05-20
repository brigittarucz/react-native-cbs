class Event {
    constructor(id, 
                title, 
                postType, 
                organization,
                authorImage,
                startDate, 
                endDate,
                location, 
                thumbnail,
                description) {

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