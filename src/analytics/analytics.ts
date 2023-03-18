import _ from "lodash";
import { DiscordDataPackage } from "../types";

/**
 * Count the total number of direct messages sent via direct messag
 * @param dataPackage Populated discord data package
 * @param userId userID of the target user
 * @returns 
 */ 
export const countDirectMessages = (dataPackage: DiscordDataPackage) => {
    let count = 0;
    Object.keys(dataPackage.messages).forEach((messageRecord) => {
        // Get message stream from message record
        const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
        if (channel.type === 1) {
            const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
            count += messages.length;
        }
    });
    return count;
}

export const countDirectMessagesByUser = (dataPackage: DiscordDataPackage, targetUserId: string) => {
    Object.keys(dataPackage.messages).forEach((messageRecord) => {
        const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
        if (channel.type === 1) {
            if (channel.recipients && channel.recipients.includes(targetUserId)) {
                return _.get(dataPackage, `messages.${messageRecord}.messages`).length;
            }
        }
    });
}

export const countGuildMessages = (dataPackage: DiscordDataPackage) => {
    let count = 0;
    Object.keys(dataPackage.messages).forEach((messageRecord) => {
        const channel = _.get(dataPackage, `messages.${messageRecord}.channel`);
        if (channel.type == 0) { // TODO: Ensure type is 0
            const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
            count += messages.length;
        }
    });
    return count;
};

export const countTotalMessages = (dataPackage: DiscordDataPackage) => {
    let count = 0;
    Object.keys(dataPackage.messages).forEach((messageRecord) => {
        const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
        count += messages.length;
    });
    return count;
};

export const countCharactersSent = (dataPackage: DiscordDataPackage) => {
    let count = 0;
    Object.keys(dataPackage.messages).forEach((messageRecord) => {
        const messages = _.get(dataPackage, `messages.${messageRecord}.messages`);
        count = messages.reduce((acc, msg) => {
            return acc += msg.Contents.length;
        }, 0)
    });
    return count;
};

/** Retrieve two words sent most often. Remove transition words like `and` and `the` */
export const getFavoriteWord = (dataPackage: DiscordDataPackage) => {};

/**
 * Find the user that the client has sent the most messages to
 */
export const getFavoriteUser = (dataPackage: DiscordDataPackage) => {};

export const countTimesClientOpened = (dataPackage: DiscordDataPackage) => {};

export const countNotificationsTouched = (dataPackage: DiscordDataPackage) => {};

export const getTotalSpent = (dataPackage: DiscordDataPackage) => {};

export const countVoiceChannelsJoined = (dataPackage: DiscordDataPackage) => {};

export const countAcceptedCalls = (dataPackage: DiscordDataPackage) => {};

export const countOutgoingCalls = (dataPackage: DiscordDataPackage) => {};

export const countReactionsAdded = (dataPackage: DiscordDataPackage) => {};

export const countTimesMentioned = (dataPackage: DiscordDataPackage) => {};

export const countGuildsJoined = (dataPackage: DiscordDataPackage) => {};
