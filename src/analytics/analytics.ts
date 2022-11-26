import { DiscordDataPackage } from "../types";

/**
 * Count the total number of messages sent to a given user
 * @param dataPackage Populated discord data package
 * @param userId userID of the target user
 * @returns 
 */ 
const countDirectMessages = (dataPackage: DiscordDataPackage) => {
    let count = 0;
    Object.keys(dataPackage.messages).forEach((messageStream) => {
        count += Object.keys(messageStream).length;
    });
    return count;
}

const countDirectMessagesByUser = (dataPackage: DiscordDataPackage, targetUserId: string) => {
    // Find channel.json with the targetUserId in the recipipients list.
    // Get related message stream id
    // Count the number of messages
}

const countGuildMessages = (dataPackage: DiscordDataPackage) => {};

const countTotalMessages = (dataPackage: DiscordDataPackage) => {};

const countCharactersSent = (dataPackage: DiscordDataPackage) => {}

/** Retrieve two words sent most often. Remove transition words like `and` and `the` */
const countFavoriteWords = (dataPackeage: DiscordDataPackage) => {};

/**
 * Find the user that the client has sent the most messages to
 */
const getFavoriteUser = (dataPackage: DiscordDataPackage) => {};

const countTimesClientOpened = (dataPackage: DiscordDataPackage) => {};

const couuntNotificationsTouched = (dataPackage: DiscordDataPackage) => {};

const getTotalSpent = (dataPackage: DiscordDataPackage) => {};

const countVoiceChannelsJoined = (dataPackage: DiscordDataPackage) => {};

const countAcceptedCalls = (dataPackage: DiscordDataPackage) => {};

const countOutgoingCalls = (dataPackage: DiscordDataPackage) => {};

const countReactionsAdded = (dataPackage: DiscordDataPackage) => {};

const countTimesMentioned = (dataPackage: DiscordDataPackage) => {};

const countGuildsJoined = (dataPackage: DiscordDataPackage) => {};
