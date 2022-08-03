export const handleError = (error) => {
    switch (error.status) {
        case 404:
            return "Song not found";
            break;
        case 500:
            return "Server is temporary unavailable";
            break;
        default:
            return error.statusText;
            break;
    }
};
