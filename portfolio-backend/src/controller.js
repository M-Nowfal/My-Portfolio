// api/message/send
export const sendMessage = (req, res, next) => {
    try {
        res.send("Send Message");
    } catch (error) {
        next(error);
    }
}

// api/message/view
export const viewMessage = (req, res, next) => {
    try {
        res.send("View Message");
    } catch (error) {
        next(error);
    }
}