import { DiscordDataPackage } from "../types";

/**
 * Count the total number of messages sent to a given user
 * @param dataPackage Populated discord data package
 * @param userId userID of the target user
 * @returns 
 */ 
const countMessages = (dataPackage: DiscordDataPackage, userId: string) => {
    Object.keys(dataPackage.messages).forEach((messageStream) => {

    })
}