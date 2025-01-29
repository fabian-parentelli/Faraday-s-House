export class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class MessagesNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class IconsNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};